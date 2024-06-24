import * as Buttplug from "buttplug";

// @ts-expect-error skill issue
import styles from "./styles.scss";

const {
  solid: { createSignal, For },
  plugin: { store },
  ui: { TextBox, Button, ButtonSizes },
  flux: { intercept },
} = shelter;

store.serverURL ??= "ws://localhost:12345";
store.soundId ??= "1144838692540792935";

let connector = new Buttplug.ButtplugBrowserWebsocketClientConnector(
  store.serverURL
);
const client = new Buttplug.ButtplugClient("Shelter Intiface");

const [devices, setDevices] = createSignal([]);
client.connect(connector);

let lastSoundId;

/**
 * @type {(Buttplug.ButtplugClientDevice | undefined)}
 */
let selectedDevice = undefined;

client.addListener("deviceadded", async (device) => {
  setDevices(client.devices);
});

/**
 * @type {Record<string, ReturnType<typeof setTimeout>>}
 */
const activeSfx = {};

const unintercept = intercept(({ type, soundId, userId }) => {
  switch (type) {
    case "GUILD_SOUNDBOARD_SOUND_PLAY_START":
      {
        if (soundId !== store.soundId) {
          return;
        }

        selectedDevice?.vibrate(0.1);
        activeSfx[`${userId}.${soundId}`] = setTimeout(() => {
          selectedDevice?.stop();
        });
      }
      break;
    case "GUILD_SOUNDBOARD_SOUND_PLAY_END":
      {
        lastSoundId = soundId;

        if (`${userId}.${soundId}` in activeSfx) {
          selectedDevice?.stop();
          clearTimeout(activeSfx[`${userId}.${soundId}`]);
          delete activeSfx[`${userId}.${soundId}`];
        }
      }
      break;
  }
});

export const onUnload = () => unintercept();

export const settings = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          "flex-direction": "column",
          gap: "1rem",
        }}
      >
        <TextBox
          value={store.serverURL}
          onInput={(e) => (store.serverURL = e)}
        ></TextBox>

        <Button
          size={ButtonSizes.LARGE}
          onClick={() => {
            store.soundId = lastSoundId;
          }}
          style={{ width: "100%" }}
        >
          Select Previous Sound
        </Button>

        <div
          style={{
            width: "100%",
            display: "flex",
            "align-items": "center",
          }}
        >
          <label
            for="device"
            style={{
              "flex-grow": "0",
              "flex-shrink": "0",
              "margin-right": "0.5rem",
            }}
          >
            Buttplug device
          </label>
          <select
            name="Device"
            id="device"
            onSelect={(e) => {
              selectedDevice = devices().find(
                (client) => client.id === e.target.id
              );
            }}
            style={{
              "flex-grow": "1",
              "flex-shrink": "0",
            }}
          >
            <For each={devices()}>
              {(d) => <option value={d.id}>{d.name}</option>}
            </For>
          </select>
        </div>
      </div>
    </>
  );
};
