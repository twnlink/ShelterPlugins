(() => {
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // plugins/ContentProtectionAlways/index.js
  var ContentProtectionAlways_exports = {};
  __export(ContentProtectionAlways_exports, {
    onUnload: () => onUnload
  });
  var { setContentProtection } = DiscordNative.window;
  var { StreamerModeStore } = shelter.flux.stores;
  var contentProtectionEnabled = StreamerModeStore.enableContentProtection;
  Object.defineProperty(StreamerModeStore, "enableContentProtection", {
    get: () => true,
    set: (val) => {
      contentProtectionEnabled = val;
      return true;
    },
    configurable: true
  });
  setContentProtection(true);
  function onUnload() {
    setContentProtection(contentProtectionEnabled);
    Object.defineProperty(StreamerModeStore, "enableContentProtection", {
      value: contentProtectionEnabled,
      set: (val) => {
        StreamerModeStore.enableContentProtection = val;
        return true;
      },
      configurable: true
    });
  }
  return __toCommonJS(ContentProtectionAlways_exports);
})();
