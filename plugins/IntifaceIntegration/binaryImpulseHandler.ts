import type SoundboardPayload from "./SoundboardPayload";
import store, { VibrationOutput } from "./store";
import { selectedDevice } from "./signals";

const {
  flux: { intercept },
} = shelter;

type PRecord<K extends keyof never, T> = {
  [P in K]?: T;
};

// how long to play until cancelled in case event is lost
const FALLBACK_TIMEOUT = 5500;
type ActiveSound = {
  timeout: ReturnType<typeof setTimeout> | null;
  activeCount: number;
};
const activeSfx: PRecord<string, ActiveSound> = {};

let unintercept: ReturnType<typeof intercept> | null = null;

const binaryImpulseHandler: Parameters<typeof intercept>[0] = ({
  type,
  soundId,
  userId,
}: SoundboardPayload) => {
  switch (type) {
    case "GUILD_SOUNDBOARD_SOUND_PLAY_START":
      {
        if (soundId !== store.soundId) {
          return;
        }

        switch (store.outputMode) {
          case VibrationOutput.Vibrate:
            void selectedDevice()?.vibrate(store.signalIntensity);
            break;
          case VibrationOutput.Oscillate:
            void selectedDevice()?.oscillate(store.signalIntensity);
            break;
          case VibrationOutput.Linear:
            void selectedDevice()?.linear(store.signalIntensity);
            break;
        }

        const key = `${userId}.${soundId}`;
        if (activeSfx[key] === undefined) {
          activeSfx[key] ??= {
            timeout: null,
            activeCount: 0,
          };
        }
        const entry = activeSfx[key];
        entry.timeout != null && clearTimeout(entry.timeout);
        entry.timeout = setTimeout(() => {
          console.warn("Stopping buttplug due to timeout");
          selectedDevice()?.stop();
          clearTimeout(entry.timeout);
          entry.activeCount = 0;
        }, FALLBACK_TIMEOUT);
        entry.activeCount += 1;
      }
      break;
    case "GUILD_SOUNDBOARD_SOUND_PLAY_END":
      {
        const key = `${userId}.${soundId}`;
        if (key in activeSfx) {
          const entry = activeSfx[key];
          entry.activeCount -= 1;
          if (entry.activeCount === 0) {
            clearTimeout(entry.timeout);
            entry.timeout = null;
            selectedDevice()?.stop();
          }
        }
      }
      break;
  }
};

const init = () => {
  unintercept = intercept(binaryImpulseHandler);
};

const deinit = () => {
  unintercept != null && unintercept();
  unintercept = null;
};

export default {
  init,
  deinit,
};
