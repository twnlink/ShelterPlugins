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
import Slider from "./Slider";

const {
  solid: { createSignal, For },
  ui: { TextBox, Button, ButtonSizes, ButtonColors },
  flux: { intercept },
} = shelter;

store.serverURL ??= "ws://localhost:12345";
store.soundId ??= "1144838692540792935";
store.outputMode ??= "vibrate";
store.vibrationMode ??= "binary";
store.signalIntensity ??= 1.0;

store.impulseIntensity ??= 0.3;
store.impulseDuration ??= 5500;
store.signalCutoff ??= 0.06;

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
        <div>
          <label
            for="serverUrl"
            class={`${styles["label"]} ${styles["title"]}`}
          >
            Server URL
          </label>
          <TextBox
            value={store.serverURL}
            onInput={debouncedNewConnector}
            id="serverUrl"
          />
        </div>

        <div>
          <label class={`${styles["label"]} ${styles["title"]}`}>
            Soundeffect
          </label>
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
            {recentlyPressed() ? "✓" : "Select soundclip"}
          </Button>
          <p
            style={{
              "margin-top": ".5rem",
              "margin-bottom": "0",
            }}
          >
            Select the most recently played sound. Anyone with access to the
            specific sound will be able to trigger it.
          </p>
        </div>

        <div class={styles["selectRow"]}>
          <label
            for="device"
            class={`${styles["selectLabel"]}} ${styles["label"]}`}
          >
            Buttplug device
          </label>
          <div class={styles["selectGap"]} />
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

        {selectedDevice() != null && (
          <>
            <div class={styles["selectRow"]}>
              <label
                for="output"
                class={`${styles["selectLabel"]} ${styles["label"]}`}
              >
                Output
              </label>
              <div class={styles["selectGap"]} />
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
              <label
                for="mode"
                class={`${styles["selectLabel"]} ${styles["label"]}`}
              >
                Mode
              </label>
              <div class={styles["selectGap"]} />
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
              <div>
                <label /*for="intensity"*/ class={styles["label"]}>
                  Intensity
                </label>
                <Slider
                  value={store.signalIntensity}
                  onInput={(e) => (store.signalIntensity = +e)}
                  min={0.0}
                  max={1.0}
                  step={0.01}
                  valueFormatter={(x) => x.toFixed(2)}
                />
              </div>
            )}
            {store.vibrationMode === VibrationMode.Eased && (
              <div>
                <label /*for="impulse-intensity"*/ class={styles["label"]}>
                  Impulse Intensity
                </label>
                <Slider
                  value={store.impulseIntensity}
                  onInput={(e) => (store.impulseIntensity = +e)}
                  min={0.0}
                  max={1.0}
                  step={0.001}
                  valueFormatter={(x) => x.toFixed(3)}
                />
                <p>
                  The strength of each impulse. The output signal strength is
                  the sum of all impulses. There is a maximum signal strength,
                  if the sum is above, it will be limited to the maximum.
                </p>
              </div>
            )}
            {store.vibrationMode === VibrationMode.Eased && (
              <div>
                <label for="mode" class={styles["label"]}>
                  Impulse window
                </label>
                <Slider
                  value={store.impulseDuration}
                  onInput={(e) => (store.impulseDuration = +e)}
                  min={0.0}
                  max={60000}
                  step={250}
                  valueFormatter={(x) => `${x.toFixed(0)}ms`}
                />
                <p>
                  How long each impulse have effect. Any impulse older than the
                  window is culled.
                </p>
              </div>
            )}
            {store.vibrationMode === VibrationMode.Eased && (
              <div>
                <label for="mode" class={styles["label"]}>
                  Signal cutoff
                </label>
                <Slider
                  value={store.signalCutoff}
                  onInput={(e) => (store.signalCutoff = +e)}
                  min={0.0}
                  max={1.0}
                  step={0.001}
                  valueFormatter={(x) => x.toFixed(3)}
                />
                <p>
                  Any signal below this level will be cut off.
                  <br />
                  <small
                    style={{
                      "font-size": "0.75rem",
                    }}
                  >
                    Very weak signals above zero round up to minimum vibration.
                    This prevents long drawn-out weak vibrations.
                  </small>
                </p>
              </div>
            )}
          </>
        )}
      </div>
    </>
  );
};
