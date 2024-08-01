import { debounce } from "lodash";

// @ts-expect-error bad framework
import styles from "./styles.scss";

import { ClientMessage, ServerMessage } from "./message";
import { clsx } from "clsx";
import { JSX, createSignal, createEffect, splitProps, For } from "solid-js";
import Slider from "./Slider";
type EventHandler<T, J extends Event> = JSX.EventHandler<T, J>;

const {
  ui: { Button, TextBox },
  flux: { intercept },
  plugin: { store: uglyStore },
} = shelter;

type SoundboardPayload = {
  type: "GUILD_SOUNDBOARD_SOUND_PLAY_START" | "GUILD_SOUNDBOARD_SOUND_PLAY_END";
  soundId: string;
  userId: string;
};

type Settings = Record<
  string,
  {
    enabled: boolean;
    intensity: number;
  }
>;
const store = uglyStore as {
  backendUrl: string;
  backendPassword: string;
  settings: Settings;
  name: string;
};
store.backendUrl ??= "ws://localhost:6969";
store.backendPassword ??= "12345";
store.settings ??= {};
store.name ??= "";

const [backendUrl, setBackendUrl] = createSignal<string>(store.backendUrl);
const updateBackendUrl = (url: string) => {
  setBackendUrl(url);
  store.backendUrl = url;
};
const [backendPassword, setBackendPassword] = createSignal<string>(
  store.backendPassword,
);
const updatePassword = (password: string) => {
  setBackendPassword(password);
  store.backendPassword = password;
};
const [settings_, setSettings] = createSignal<Settings>(store.settings);
const updateSettings = (settings: Settings) => {
  setSettings(settings);
  store.settings = settings;
};
const [username, setUsername] = createSignal<string>(store.name);
const updateUsername = (username: string) => {
  setUsername(username);
  store.name = username;
};

const [websocket, setWebsocket] = createSignal<WebSocket | null>(null);
export const [websocketStatus, setWebsocketStatus] = createSignal<
  "ready" | "connecting" | "not-connected"
>("not-connected");
const decoder = new TextDecoder("utf-8");
const encoder = new TextEncoder();

const sendMessage = (socket: WebSocket, object: ClientMessage) =>
  socket.send(encoder.encode(JSON.stringify(object)));

const decodeMessage = async (data: unknown) => {
  let raw: string;
  if (data instanceof ArrayBuffer) {
    raw = decoder.decode(data);
  } else if (data instanceof Blob) {
    raw = decoder.decode(await data.arrayBuffer());
  } else {
    throw new Error(`Unsupported data: ${JSON.stringify(data)}`);
  }
  return JSON.parse(raw) as ServerMessage;
};

createEffect(() => {
  if (backendUrl().length === 0) {
    setWebsocketStatus("not-connected");
    return () => undefined;
  }
  setWebsocketStatus("connecting");

  let newSocket: WebSocket;
  try {
    newSocket = new WebSocket(backendUrl());

    newSocket.addEventListener("open", () => {
      sendMessage(newSocket, {
        type: "connect",
        password: backendPassword(),
      });
    });
    newSocket.addEventListener("message", async (e: MessageEvent) => {
      const message = await decodeMessage(e.data);
      switch (message.type) {
        case "ok":
          setWebsocketStatus("ready");
          break;
        case "bye":
          newSocket?.close();
          websocket() == newSocket && setWebsocket(null);
          setWebsocketStatus("not-connected");
          return;
      }
    });
    newSocket.addEventListener("close", () => {
      websocket() == newSocket && setWebsocket(null);
      setWebsocketStatus("not-connected");
    });

    setWebsocket(newSocket);
  } catch (e) {
    setWebsocketStatus("not-connected");
    return () => undefined;
  }

  return () => {
    newSocket.close();
  };
});

/*let uninterceptRoot = */ intercept(
  ({ type, soundId, userId }: SoundboardPayload) => {
    switch (type) {
      case "GUILD_SOUNDBOARD_SOUND_PLAY_START":
        if (settings_()[soundId]?.enabled) {
          sendMessage(websocket(), {
            type: "signal",
            intensity: settings_()[soundId].intensity,
            from: username().length > 0 ? username() : undefined,
          });
        }

        break;
    }
  },
);

const useTimedState = <T,>(value: T, timeout: number = 1500) => {
  const [state, setState] = createSignal<T>(value);
  const [timer, setTimer] = createSignal<
    ReturnType<typeof setTimeout> | undefined
  >();
  const queueReset = (newValue: T) => {
    if (timer()) {
      clearTimeout(timer());
    }
    setTimer(setTimeout(() => setState(() => newValue), timeout));
  };

  const set = (tempValue: T) => {
    setState(() => tempValue);
    queueReset(value);
  };

  const reset = (value: T) => {
    timer() && clearTimeout(timer());
    setState(() => value);
  };

  return [state, set, reset] as const;
};

type RefreshButton = Omit<
  JSX.ButtonHTMLAttributes<HTMLButtonElement>,
  "onClick" | "color" | "style"
> & {
  onClick: EventHandler<HTMLButtonElement, MouseEvent>;
};
const RefreshButton = (props: RefreshButton) => {
  const [local, remote] = splitProps(props, ["class", "onClick", "disabled"]);

  const [animating, setAnimating] = useTimedState(false);

  return (
    <Button
      class={clsx("ms-2 h-full", local.class)}
      onClick={(e) => {
        local.onClick?.(
          e as Parameters<EventHandler<HTMLButtonElement, MouseEvent>>[0],
        );
        setAnimating(true);
      }}
      disabled={animating() || local.disabled}
      //{...props}
    >
      <div
        class={clsx(styles["not-sr-only"], animating() && styles["animating"])}
      >
        ↺
      </div>
      <span class={styles["sr-only"]}>Retry</span>
    </Button>
  );
};

const debouncedUpdateUrl = debounce((url: string) => setBackendUrl(url), 500);

const SoundboardStore = shelter.flux.stores
  .SoundboardStore as (typeof shelter.flux.stores)[string] & {
  getFavorites: () => Set<string>;
  getSoundById: (id: string) =>
    | ({
        available: boolean;
        guildId: string;
        name: string;
        soundId: string;
        userId: string;
        volume: number;
      } & (
        | {
            emojiId: string;
            emojiName?: undefined;
          }
        | {
            emojiId?: undefined;
            emojiName: string;
          }
      ))
    | undefined;
};

export const settings = () => (
  <>
    <div class={styles["settingsBox"]}>
      <div class={clsx(styles["serverUrl"])}>
        <label for="serverUrl" class={`${styles["label"]} ${styles["title"]}`}>
          Server URL
        </label>
        <div class={styles["serverRow"]}>
          <TextBox
            value={store.backendUrl}
            onInput={debouncedUpdateUrl}
            id="serverUrl"
          />
          <RefreshButton
            class={styles["refreshButton"]}
            onClick={() => updateBackendUrl(`${backendUrl()}`)}
          />
          <div>
            {websocketStatus() === "not-connected" && "❌"}
            {websocketStatus() === "connecting" && "⏳"}
            {websocketStatus() === "ready" && "✔️"}
          </div>
        </div>
      </div>
      <div>
        <label for="password" class={`${styles["label"]} ${styles["title"]}`}>
          Password
        </label>
        <TextBox
          value={store.backendPassword}
          onInput={(v) => updatePassword(v)}
          id="password"
        />
      </div>

      <div>
        <label for="name" class={`${styles["label"]} ${styles["title"]}`}>
          Name
        </label>
        <TextBox
          value={store.name}
          onInput={(v) => updateUsername(v)}
          id="name"
        />
        <p style="margin-top: .5rem">
          Optional. Using the same name on multiple devices will prevent you
          from sending signals to yourself.
        </p>
      </div>

      <div class={styles["soundboardList"]}>
        <For
          each={Array.from(SoundboardStore.getFavorites()).map((favorite) =>
            SoundboardStore.getSoundById(favorite),
          )}
          fallback={
            <p>
              Either you have no favorites, or the soundboard is not loaded yet
              (open the soundboard once to refresh).
            </p>
          }
        >
          {(soundbite) =>
            soundbite && (
              <div class={styles["soundbiteRow"]}>
                <div class={styles["soundbitePreview"]}>
                  {soundbite.emojiId && (
                    <img
                      src={`https://cdn.discordapp.com/emojis/${soundbite.emojiId}.png`}
                      class={styles["emoij"]}
                      alt={soundbite.name}
                    />
                  )}
                  {soundbite.emojiName && (
                    <div class={styles["emoij"]}>{soundbite.emojiName}</div>
                  )}

                  <div class={styles["soundbiteName"]}>{soundbite.name}</div>
                </div>
                <div class={styles["soundbiteSettings"]}>
                  <input
                    type="checkbox"
                    checked={settings_()[soundbite.soundId]?.enabled}
                    onChange={(x) => {
                      updateSettings({
                        ...settings_(),
                        [soundbite.soundId]: {
                          ...(settings_()[soundbite.soundId] ?? {
                            enabled: true,
                            intensity: 0.3,
                          }),
                          enabled: x.target.checked,
                        },
                      });
                    }}
                  />
                  {settings_()[soundbite.soundId]?.enabled && (
                    <Slider
                      value={settings_()[soundbite.soundId].intensity}
                      onInput={(i) => {
                        updateSettings({
                          ...settings_(),
                          [soundbite.soundId]: {
                            ...(settings_()[soundbite.soundId] ?? {
                              enabled: true,
                              intensity: 0.3,
                            }),
                            intensity: i,
                          },
                        });
                      }}
                      min={0}
                      max={1}
                      step={0.001}
                      valueFormatter={(n) => `${(n * 100).toFixed(1)}%`}
                    />
                  )}
                </div>
              </div>
            )
          }
        </For>
      </div>
    </div>
  </>
);
