import * as Buttplug from "buttplug";
import { debounce } from "lodash";

// @ts-expect-error bad framework
import styles from "./styles.scss";

import store, { state, VibrationMode, VibrationOutput } from "./store";
import binaryImpulseHandler from "./binaryImpulseHandler";
import {
  devices,
  selectedDevice,
  setDevices,
  setSelectedDevice,
} from "./signals";
import SoundboardPayload from "./SoundboardPayload";
import Handler from "./Handler";
import easedImpulseHandler from "./easedImpulseHandler";

const {
  solid: { createSignal, For },
  ui: { TextBox, Button, ButtonSizes, Slider, ButtonColors },
  flux: { intercept },
} = shelter;

store.serverURL ??= "ws://localhost:12345";
store.soundId ??= "1144838692540792935";
store.outputMode ??= "vibrate";
store.vibrationMode ??= "binary";
store.intensity ??= 1.0;

let connector = new Buttplug.ButtplugBrowserWebsocketClientConnector(
  store.serverURL,
);
const client = new Buttplug.ButtplugClient("Shelter Intiface");

client.connect(connector);

const updateDevices = () => setDevices(client.devices);
client.addListener("deviceadded", updateDevices);
client.addListener("deviceremoved", updateDevices);
client.addListener("scanningfinished", updateDevices);

let uninterceptRoot = intercept(({ type, soundId }: SoundboardPayload) => {
  if (type === "GUILD_SOUNDBOARD_SOUND_PLAY_START") {
    state.lastSoundId = soundId;
  }
});
let handler: Handler | null = null;

if (store.vibrationMode === "binary") {
  handler = binaryImpulseHandler;
  handler.init();
}

export const onUnload = () => {
  uninterceptRoot();
  handler != null && handler.deinit();

  client.removeListener("deviceadded", updateDevices);
  client.removeListener("deviceremoved", updateDevices);
  client.removeListener("scanningfinished", updateDevices);
  client.disconnect();
};

const debouncedNewConnector = debounce((e: string) => {
  store.serverURL = e;
  client.disconnect().then(() => {
    connector = new Buttplug.ButtplugBrowserWebsocketClientConnector(
      store.serverURL,
    );
    client.connect(connector);
  });
}, 1000);

export const settings = () => {
  const [recentlyPressed, setRecentlyPressed] = createSignal(false);

  return (
    <>
      <div class={styles["settingsBox"]}>
        <TextBox value={store.serverURL} onInput={debouncedNewConnector} />

        <Button
          size={ButtonSizes.LARGE}
          onClick={() => {
            setRecentlyPressed(true);
            setTimeout(() => setRecentlyPressed(false), 2500);
            store.soundId = state.lastSoundId;
          }}
          color={recentlyPressed() ? ButtonColors.GREEN : ButtonColors.BRAND}
          disabled={recentlyPressed()}
          class={styles["button"]}
        >
          {recentlyPressed() ? "✓" : "Select most recent played sound"}
        </Button>

        <div class={styles["selectRow"]}>
          <label for="device" class={styles["selectLabel"]}>
            Buttplug device
          </label>
          <select
            name="Device"
            id="device"
            onChange={(e) => {
              setSelectedDevice(
                devices().find(
                  (client) => client.index.toString() === e.target.value,
                ),
              );
            }}
            class={styles["select"]}
          >
            <option value="none of the above">Off</option>
            <For each={devices()}>
              {(d) => (
                <option
                  value={d.index.toString()}
                  selected={selectedDevice()?.index === d.index}
                >
                  {d.name}
                </option>
              )}
            </For>
          </select>
        </div>

        {selectedDevice() !== undefined && (
          <>
            <div class={styles["selectRow"]}>
              <label for="output" class={styles["selectLabel"]}>
                Output
              </label>
              <select
                name="Output"
                id="output"
                onChange={(e) => {
                  store.outputMode = (
                    Object.values(VibrationOutput) as string[]
                  ).includes(e.target.value)
                    ? (e.target.value as VibrationOutput)
                    : null;
                }}
                class={styles["select"]}
              >
                <option value="none of the above">Off</option>
                {selectedDevice().vibrateAttributes.length > 0 && (
                  <option
                    value={VibrationOutput.Vibrate}
                    selected={store.outputMode === VibrationOutput.Vibrate}
                  >
                    Vibrate
                  </option>
                )}
                {selectedDevice().oscillateAttributes.length > 0 && (
                  <option
                    value={VibrationOutput.Oscillate}
                    selected={store.outputMode === VibrationOutput.Oscillate}
                  >
                    Oscillate
                  </option>
                )}
                {selectedDevice().linear.length > 0 && (
                  <option
                    value={VibrationOutput.Linear}
                    selected={store.outputMode === VibrationOutput.Linear}
                  >
                    Linear
                  </option>
                )}
              </select>
            </div>

            <div class={styles["selectRow"]}>
              <label for="mode" class={styles["selectLabel"]}>
                Mode
              </label>
              <select
                name="Mode"
                id="mode"
                onChange={(e) => {
                  store.vibrationMode = (
                    Object.values(VibrationMode) as string[]
                  ).includes(e.target.value)
                    ? (e.target.value as VibrationMode)
                    : null;

                  handler != null && handler.deinit();
                  switch (store.vibrationMode) {
                    case "binary":
                      handler = binaryImpulseHandler;
                      handler.init();
                      break;
                    case "eased":
                      handler = easedImpulseHandler;
                      handler.init();
                      break;
                  }
                }}
                class={styles["select"]}
              >
                <option value="none of the above">Off</option>
                <For each={Object.entries(VibrationMode)}>
                  {([name, mode]) => (
                    <option
                      value={mode}
                      selected={store.vibrationMode === mode}
                    >
                      {name}
                    </option>
                  )}
                </For>
              </select>
            </div>

            {store.vibrationMode === VibrationMode.Binary && (
              <div class={styles["selectRow"]}>
                <label for="mode" class={styles["selectLabel"]}>
                  Intensity
                </label>
                <Slider
                  value={store.intensity}
                  onInput={(e) => (store.intensity = +e)}
                  min={0.0}
                  max={1.0}
                  class={styles["select"]}
                />
              </div>
            )}
          </>
        )}
      </div>
    </>
  );
};
