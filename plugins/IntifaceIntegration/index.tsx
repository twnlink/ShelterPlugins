import * as Buttplug from "buttplug";
import { debounce } from "lodash";

// @ts-expect-error bad framework
import styles from "./styles.scss";

import { ButtplugClientDevice } from "buttplug";

const {
  solid: { createSignal, For },
  plugin: { store: uglyStore },
  ui: { TextBox, Button, ButtonSizes, Slider, ButtonColors },
  flux: { intercept },
} = shelter;

const VibrationMode = {
  Vibrate: "vibrate",
  Oscillate: "oscillate",
  Linear: "linear",
} as const;
type VibrationMode = (typeof VibrationMode)[keyof typeof VibrationMode];

const store = uglyStore as {
  serverURL: string;
  soundId: string;
  intensity: number;
  mode: VibrationMode;
};

store.serverURL ??= "ws://localhost:12345";
store.soundId ??= "1144838692540792935";
store.intensity ??= 1.0;
store.mode ??= "vibrate";

let connector = new Buttplug.ButtplugBrowserWebsocketClientConnector(
  store.serverURL,
);
const client = new Buttplug.ButtplugClient("Shelter Intiface");

const [devices, setDevices] = createSignal<ButtplugClientDevice[]>([]);
client.connect(connector);

let lastSoundId: string;

const [selectedDevice, setSelectedDevice] = createSignal<
  Buttplug.ButtplugClientDevice | undefined
>();

const updateDevices = () => {
  setDevices(client.devices);
};
client.addListener("deviceadded", updateDevices);
client.addListener("deviceremoved", updateDevices);
client.addListener("scanningfinished", updateDevices);

const activeSfx: Record<string, ReturnType<typeof setTimeout>> = {};

type SoundboardPayload = {
  type: "GUILD_SOUNDBOARD_SOUND_PLAY_START" | "GUILD_SOUNDBOARD_SOUND_PLAY_END";
  soundId: string;
  userId: string;
};
const unintercept = intercept(
  ({ type, soundId, userId }: SoundboardPayload) => {
    switch (type) {
      case "GUILD_SOUNDBOARD_SOUND_PLAY_START":
        if (soundId !== store.soundId) {
          return;
        }

        switch (store.mode) {
          case VibrationMode.Vibrate:
            void selectedDevice()?.vibrate(store.intensity);
            break;
          case VibrationMode.Oscillate:
            void selectedDevice()?.oscillate(store.intensity);
            break;
          case VibrationMode.Linear:
            void selectedDevice()?.linear(store.intensity);
            break;
        }

        activeSfx[`${userId}.${soundId}`] = setTimeout(() => {
          selectedDevice()?.stop();
        }, 10000);
        break;
      case "GUILD_SOUNDBOARD_SOUND_PLAY_END":
        lastSoundId = soundId;

        if (`${userId}.${soundId}` in activeSfx) {
          selectedDevice()?.stop();
          clearTimeout(activeSfx[`${userId}.${soundId}`]);
          delete activeSfx[`${userId}.${soundId}`];
        }
        break;
    }
  },
);

export const onUnload = () => {
  unintercept();
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
            shelter.ui.showToast({ title: `Updated to sound ${lastSoundId}!` });
            setTimeout(() => setRecentlyPressed(false), 2500);
            store.soundId = lastSoundId;
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
              {(d) => <option value={d.index.toString()}>{d.name}</option>}
            </For>
          </select>
        </div>

        {selectedDevice() !== undefined && (
          <>
            <div class={styles["selectRow"]}>
              <label for="mode" class={styles["selectLabel"]}>
                Mode
              </label>
              <select
                name="Mode"
                id="mode"
                onChange={(e) => {
                  if (
                    (Object.values(VibrationMode) as string[]).includes(
                      e.target.value,
                    )
                  ) {
                    store.mode = e.target.value as VibrationMode;
                  } else {
                    store.mode = null;
                  }
                }}
                class={styles["selectLabel"]}
              >
                <option value="none of the above">Off</option>
                {selectedDevice().vibrateAttributes.length > 0 && (
                  <option value={VibrationMode.Vibrate}>Vibrate</option>
                )}
                {selectedDevice().oscillateAttributes.length > 0 && (
                  <option value={VibrationMode.Oscillate}>Oscillate</option>
                )}
                {selectedDevice().linear.length > 0 && (
                  <option value={VibrationMode.Linear}>Linear</option>
                )}
              </select>
            </div>

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
          </>
        )}
      </div>
    </>
  );
};
