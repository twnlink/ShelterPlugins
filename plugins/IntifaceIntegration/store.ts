const {
  plugin: { store: uglyStore },
} = shelter;

export const VibrationOutput = {
  Vibrate: "vibrate",
  Oscillate: "oscillate",
  Linear: "linear",
} as const;
export type VibrationOutput =
  (typeof VibrationOutput)[keyof typeof VibrationOutput];

export const VibrationMode = {
  Binary: "binary",
  Eased: "eased",
} as const;
export type VibrationMode = (typeof VibrationMode)[keyof typeof VibrationMode];

type PluginStore = {
  serverURL: string;
  soundId: string;
  intensity: number;
  outputMode: VibrationOutput;
} & (
  | {
      vibrationMode: typeof VibrationMode.Binary;
      intensity: number;
    }
  | {
      vibrationMode: typeof VibrationMode.Eased;
    }
);
type PluginState = {
  lastSoundId: string | null;
};

const store = uglyStore as PluginStore;
export const state: PluginState = {
  lastSoundId: null,
};

export default store;
