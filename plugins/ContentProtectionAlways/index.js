const { setContentProtection } = DiscordNative.window;
const { StreamerModeStore } = shelter.flux.stores;

let contentProtectionEnabled = StreamerModeStore.enableContentProtection;
Object.defineProperty(StreamerModeStore, "enableContentProtection", {
  get: () => true,
  set: (val) => { contentProtectionEnabled = val; return true },
  configurable: true
})

// Force it on
setContentProtection(true);

export function onUnload() {
  setContentProtection(contentProtectionEnabled);
  
  Object.defineProperty(StreamerModeStore, "enableContentProtection", {
    value: contentProtectionEnabled,
    configurable: true
  })
}