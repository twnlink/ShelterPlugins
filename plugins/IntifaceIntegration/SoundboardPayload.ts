type SoundboardPayload = {
  type: "GUILD_SOUNDBOARD_SOUND_PLAY_START" | "GUILD_SOUNDBOARD_SOUND_PLAY_END";
  soundId: string;
  userId: string;
};

export default SoundboardPayload;
