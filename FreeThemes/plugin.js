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

  // plugins/FreeThemes/index.js
  var FreeThemes_exports = {};
  __export(FreeThemes_exports, {
    onLoad: () => onLoad,
    onUnload: () => onUnload
  });
  var persist = shelter.plugin.store;
  var unloadables = [];
  function getThemeType(node) {
    return Array.from(node.classList).find((i) => i.startsWith("theme-"));
  }
  function setCurrentTheme() {
    if (!persist.themeData || !persist.themeType)
      return;
    let themeNode = document.querySelector('style[free-themes="true"]');
    if (!themeNode) {
      themeNode = document.createElement("style");
      themeNode.setAttribute("free-themes", "true");
      document.body.appendChild(themeNode);
    }
    ;
    themeNode.innerText = persist.themeData;
    document.body.classList.remove(getThemeType(document.body));
    document.body.classList.add(persist.themeType);
  }
  function onLoad() {
    document.body.classList.add("custom-theme-background");
    unloadables.push(
      shelter.flux.intercept((e) => {
        if (e?.event == "client_theme_updated") {
          setTimeout(() => {
            persist.themeData = document.querySelector('style[data-client-themes="true"]').innerText;
            persist.themeType = getThemeType(document.documentElement);
            setCurrentTheme();
          }, 100);
        }
        ;
      })
    );
    setCurrentTheme();
  }
  function onUnload() {
    unloadables.forEach((unload) => unload());
    document.querySelector('style[free-themes="true"]').remove();
    document.body.classList.remove(persist.themeType);
  }
  return __toCommonJS(FreeThemes_exports);
})();
