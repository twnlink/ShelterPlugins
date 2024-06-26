import type SoundboardPayload from "./SoundboardPayload";
import store, { VibrationOutput } from "./store";
import { selectedDevice } from "./signals";

const {
  flux: { intercept },
} = shelter;

const FREQUENCE = 50;

let impulses: number[] = [];

const easeIn = (x: number) => 1 - Math.pow(1 - x, 3);
const easeOut = (x: number) => Math.sqrt(1 - Math.pow(x - 1, 2));
const CUTOFF = 0.2;
const easingFn = (x: number) =>
  x < CUTOFF ? easeIn(x / CUTOFF) : 1 - easeOut((x - CUTOFF) / (1 - CUTOFF));

const triggerSelectedOutput = (itensity: number) => {
  switch (store.outputMode) {
    case VibrationOutput.Vibrate:
      void selectedDevice()?.vibrate(itensity);
      break;
    case VibrationOutput.Oscillate:
      void selectedDevice()?.oscillate(itensity);
      break;
    case VibrationOutput.Linear:
      void selectedDevice()?.linear(itensity);
      break;
  }
};

const iteration = () => {
  let signal = 0;
  const now = Date.now();

  for (const imp of impulses) {
    const elapsed = now - imp;
    if (elapsed < store.impulseDuration) {
      const beat =
        store.impulseIntensity * easingFn(elapsed / store.impulseDuration);
      signal += beat;
    }
  }

  if (signal === 0) {
    impulses = [];
  }

  if (signal > 1) {
    signal = 1;
  }

  if (signal < store.signalCutoff) {
    signal = 0;
  }

  triggerSelectedOutput(signal);
};

let unintercept: ReturnType<typeof intercept> | null = null;
let timer: ReturnType<typeof setInterval> | null = null;

const easedImpulseHandler: Parameters<typeof intercept>[0] = ({
  type,
  soundId,
}: SoundboardPayload) => {
  switch (type) {
    case "GUILD_SOUNDBOARD_SOUND_PLAY_START":
      {
        if (soundId !== store.soundId) {
          return;
        }

        impulses.push(Date.now());
      }
      break;
  }
};

const init = () => {
  unintercept = intercept(easedImpulseHandler);
  timer = setInterval(iteration, FREQUENCE);
};

const deinit = () => {
  unintercept != null && unintercept();
  unintercept = null;
  timer != null && clearTimeout(timer);
  timer = null;
};

export default {
  init,
  deinit,
};
