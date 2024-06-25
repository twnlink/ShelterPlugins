(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
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
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // shltr-res-ns:solid-js/web
  var require_web = __commonJS({
    "shltr-res-ns:solid-js/web"(exports, module) {
      module.exports = shelter.solidWeb;
    }
  });

  // node_modules/.pnpm/eventemitter3@5.0.1/node_modules/eventemitter3/index.js
  var require_eventemitter3 = __commonJS({
    "node_modules/.pnpm/eventemitter3@5.0.1/node_modules/eventemitter3/index.js"(exports, module) {
      "use strict";
      var has = Object.prototype.hasOwnProperty;
      var prefix = "~";
      function Events() {
      }
      if (Object.create) {
        Events.prototype = /* @__PURE__ */ Object.create(null);
        if (!new Events().__proto__)
          prefix = false;
      }
      function EE(fn, context, once) {
        this.fn = fn;
        this.context = context;
        this.once = once || false;
      }
      function addListener(emitter, event, fn, context, once) {
        if (typeof fn !== "function") {
          throw new TypeError("The listener must be a function");
        }
        var listener = new EE(fn, context || emitter, once), evt = prefix ? prefix + event : event;
        if (!emitter._events[evt])
          emitter._events[evt] = listener, emitter._eventsCount++;
        else if (!emitter._events[evt].fn)
          emitter._events[evt].push(listener);
        else
          emitter._events[evt] = [emitter._events[evt], listener];
        return emitter;
      }
      function clearEvent(emitter, evt) {
        if (--emitter._eventsCount === 0)
          emitter._events = new Events();
        else
          delete emitter._events[evt];
      }
      function EventEmitter() {
        this._events = new Events();
        this._eventsCount = 0;
      }
      EventEmitter.prototype.eventNames = function eventNames() {
        var names = [], events, name;
        if (this._eventsCount === 0)
          return names;
        for (name in events = this._events) {
          if (has.call(events, name))
            names.push(prefix ? name.slice(1) : name);
        }
        if (Object.getOwnPropertySymbols) {
          return names.concat(Object.getOwnPropertySymbols(events));
        }
        return names;
      };
      EventEmitter.prototype.listeners = function listeners(event) {
        var evt = prefix ? prefix + event : event, handlers = this._events[evt];
        if (!handlers)
          return [];
        if (handlers.fn)
          return [handlers.fn];
        for (var i = 0, l = handlers.length, ee = new Array(l); i < l; i++) {
          ee[i] = handlers[i].fn;
        }
        return ee;
      };
      EventEmitter.prototype.listenerCount = function listenerCount(event) {
        var evt = prefix ? prefix + event : event, listeners = this._events[evt];
        if (!listeners)
          return 0;
        if (listeners.fn)
          return 1;
        return listeners.length;
      };
      EventEmitter.prototype.emit = function emit(event, a1, a2, a3, a4, a5) {
        var evt = prefix ? prefix + event : event;
        if (!this._events[evt])
          return false;
        var listeners = this._events[evt], len = arguments.length, args, i;
        if (listeners.fn) {
          if (listeners.once)
            this.removeListener(event, listeners.fn, void 0, true);
          switch (len) {
            case 1:
              return listeners.fn.call(listeners.context), true;
            case 2:
              return listeners.fn.call(listeners.context, a1), true;
            case 3:
              return listeners.fn.call(listeners.context, a1, a2), true;
            case 4:
              return listeners.fn.call(listeners.context, a1, a2, a3), true;
            case 5:
              return listeners.fn.call(listeners.context, a1, a2, a3, a4), true;
            case 6:
              return listeners.fn.call(listeners.context, a1, a2, a3, a4, a5), true;
          }
          for (i = 1, args = new Array(len - 1); i < len; i++) {
            args[i - 1] = arguments[i];
          }
          listeners.fn.apply(listeners.context, args);
        } else {
          var length = listeners.length, j;
          for (i = 0; i < length; i++) {
            if (listeners[i].once)
              this.removeListener(event, listeners[i].fn, void 0, true);
            switch (len) {
              case 1:
                listeners[i].fn.call(listeners[i].context);
                break;
              case 2:
                listeners[i].fn.call(listeners[i].context, a1);
                break;
              case 3:
                listeners[i].fn.call(listeners[i].context, a1, a2);
                break;
              case 4:
                listeners[i].fn.call(listeners[i].context, a1, a2, a3);
                break;
              default:
                if (!args)
                  for (j = 1, args = new Array(len - 1); j < len; j++) {
                    args[j - 1] = arguments[j];
                  }
                listeners[i].fn.apply(listeners[i].context, args);
            }
          }
        }
        return true;
      };
      EventEmitter.prototype.on = function on(event, fn, context) {
        return addListener(this, event, fn, context, false);
      };
      EventEmitter.prototype.once = function once(event, fn, context) {
        return addListener(this, event, fn, context, true);
      };
      EventEmitter.prototype.removeListener = function removeListener(event, fn, context, once) {
        var evt = prefix ? prefix + event : event;
        if (!this._events[evt])
          return this;
        if (!fn) {
          clearEvent(this, evt);
          return this;
        }
        var listeners = this._events[evt];
        if (listeners.fn) {
          if (listeners.fn === fn && (!once || listeners.once) && (!context || listeners.context === context)) {
            clearEvent(this, evt);
          }
        } else {
          for (var i = 0, events = [], length = listeners.length; i < length; i++) {
            if (listeners[i].fn !== fn || once && !listeners[i].once || context && listeners[i].context !== context) {
              events.push(listeners[i]);
            }
          }
          if (events.length)
            this._events[evt] = events.length === 1 ? events[0] : events;
          else
            clearEvent(this, evt);
        }
        return this;
      };
      EventEmitter.prototype.removeAllListeners = function removeAllListeners(event) {
        var evt;
        if (event) {
          evt = prefix ? prefix + event : event;
          if (this._events[evt])
            clearEvent(this, evt);
        } else {
          this._events = new Events();
          this._eventsCount = 0;
        }
        return this;
      };
      EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
      EventEmitter.prototype.addListener = EventEmitter.prototype.on;
      EventEmitter.prefixed = prefix;
      EventEmitter.EventEmitter = EventEmitter;
      if ("undefined" !== typeof module) {
        module.exports = EventEmitter;
      }
    }
  });

  // node_modules/.pnpm/buttplug@3.2.2/node_modules/buttplug/dist/main/src/core/Logging.js
  var require_Logging = __commonJS({
    "node_modules/.pnpm/buttplug@3.2.2/node_modules/buttplug/dist/main/src/core/Logging.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.ButtplugLogger = exports.LogMessage = exports.ButtplugLogLevel = void 0;
      var eventemitter3_1 = require_eventemitter3();
      var ButtplugLogLevel;
      (function(ButtplugLogLevel2) {
        ButtplugLogLevel2[ButtplugLogLevel2["Off"] = 0] = "Off";
        ButtplugLogLevel2[ButtplugLogLevel2["Error"] = 1] = "Error";
        ButtplugLogLevel2[ButtplugLogLevel2["Warn"] = 2] = "Warn";
        ButtplugLogLevel2[ButtplugLogLevel2["Info"] = 3] = "Info";
        ButtplugLogLevel2[ButtplugLogLevel2["Debug"] = 4] = "Debug";
        ButtplugLogLevel2[ButtplugLogLevel2["Trace"] = 5] = "Trace";
      })(ButtplugLogLevel || (exports.ButtplugLogLevel = ButtplugLogLevel = {}));
      var LogMessage = class {
        /**
         * @param logMessage Log message.
         * @param logLevel: Log severity level.
         */
        constructor(logMessage, logLevel) {
          const a = /* @__PURE__ */ new Date();
          const hour = a.getHours();
          const min = a.getMinutes();
          const sec = a.getSeconds();
          this.timestamp = `${hour}:${min}:${sec}`;
          this.logMessage = logMessage;
          this.logLevel = logLevel;
        }
        /**
         * Returns the log message.
         */
        get Message() {
          return this.logMessage;
        }
        /**
         * Returns the log message level.
         */
        get LogLevel() {
          return this.logLevel;
        }
        /**
         * Returns the log message timestamp.
         */
        get Timestamp() {
          return this.timestamp;
        }
        /**
         * Returns a formatted string with timestamp, level, and message.
         */
        get FormattedMessage() {
          return `${ButtplugLogLevel[this.logLevel]} : ${this.timestamp} : ${this.logMessage}`;
        }
      };
      exports.LogMessage = LogMessage;
      var ButtplugLogger = class extends eventemitter3_1.EventEmitter {
        /**
         * Returns the stored static instance of the logger, creating one if it
         * doesn't currently exist.
         */
        static get Logger() {
          if (ButtplugLogger.sLogger === void 0) {
            ButtplugLogger.sLogger = new ButtplugLogger();
          }
          return this.sLogger;
        }
        /**
         * Constructor. Can only be called internally since we regulate ButtplugLogger
         * ownership.
         */
        constructor() {
          super();
          this.maximumConsoleLogLevel = ButtplugLogLevel.Off;
          this.maximumEventLogLevel = ButtplugLogLevel.Off;
        }
        /**
         * Set the maximum log level to output to console.
         */
        get MaximumConsoleLogLevel() {
          return this.maximumConsoleLogLevel;
        }
        /**
         * Get the maximum log level to output to console.
         */
        set MaximumConsoleLogLevel(buttplugLogLevel) {
          this.maximumConsoleLogLevel = buttplugLogLevel;
        }
        /**
         * Set the global maximum log level
         */
        get MaximumEventLogLevel() {
          return this.maximumEventLogLevel;
        }
        /**
         * Get the global maximum log level
         */
        set MaximumEventLogLevel(logLevel) {
          this.maximumEventLogLevel = logLevel;
        }
        /**
         * Log new message at Error level.
         */
        Error(msg) {
          this.AddLogMessage(msg, ButtplugLogLevel.Error);
        }
        /**
         * Log new message at Warn level.
         */
        Warn(msg) {
          this.AddLogMessage(msg, ButtplugLogLevel.Warn);
        }
        /**
         * Log new message at Info level.
         */
        Info(msg) {
          this.AddLogMessage(msg, ButtplugLogLevel.Info);
        }
        /**
         * Log new message at Debug level.
         */
        Debug(msg) {
          this.AddLogMessage(msg, ButtplugLogLevel.Debug);
        }
        /**
         * Log new message at Trace level.
         */
        Trace(msg) {
          this.AddLogMessage(msg, ButtplugLogLevel.Trace);
        }
        /**
         * Checks to see if message should be logged, and if so, adds message to the
         * log buffer. May also print message and emit event.
         */
        AddLogMessage(msg, level) {
          if (level > this.maximumEventLogLevel && level > this.maximumConsoleLogLevel) {
            return;
          }
          const logMsg = new LogMessage(msg, level);
          if (level <= this.maximumConsoleLogLevel) {
            console.log(logMsg.FormattedMessage);
          }
          if (level <= this.maximumEventLogLevel) {
            this.emit("log", logMsg);
          }
        }
      };
      exports.ButtplugLogger = ButtplugLogger;
      ButtplugLogger.sLogger = void 0;
    }
  });

  // node_modules/.pnpm/class-transformer@0.5.1/node_modules/class-transformer/cjs/enums/transformation-type.enum.js
  var require_transformation_type_enum = __commonJS({
    "node_modules/.pnpm/class-transformer@0.5.1/node_modules/class-transformer/cjs/enums/transformation-type.enum.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.TransformationType = void 0;
      var TransformationType;
      (function(TransformationType2) {
        TransformationType2[TransformationType2["PLAIN_TO_CLASS"] = 0] = "PLAIN_TO_CLASS";
        TransformationType2[TransformationType2["CLASS_TO_PLAIN"] = 1] = "CLASS_TO_PLAIN";
        TransformationType2[TransformationType2["CLASS_TO_CLASS"] = 2] = "CLASS_TO_CLASS";
      })(TransformationType = exports.TransformationType || (exports.TransformationType = {}));
    }
  });

  // node_modules/.pnpm/class-transformer@0.5.1/node_modules/class-transformer/cjs/enums/index.js
  var require_enums = __commonJS({
    "node_modules/.pnpm/class-transformer@0.5.1/node_modules/class-transformer/cjs/enums/index.js"(exports) {
      "use strict";
      var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function() {
          return m[k];
        } });
      } : function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        o[k2] = m[k];
      });
      var __exportStar = exports && exports.__exportStar || function(m, exports2) {
        for (var p in m)
          if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
            __createBinding(exports2, m, p);
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      __exportStar(require_transformation_type_enum(), exports);
    }
  });

  // node_modules/.pnpm/class-transformer@0.5.1/node_modules/class-transformer/cjs/MetadataStorage.js
  var require_MetadataStorage = __commonJS({
    "node_modules/.pnpm/class-transformer@0.5.1/node_modules/class-transformer/cjs/MetadataStorage.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.MetadataStorage = void 0;
      var enums_1 = require_enums();
      var MetadataStorage = class {
        constructor() {
          this._typeMetadatas = /* @__PURE__ */ new Map();
          this._transformMetadatas = /* @__PURE__ */ new Map();
          this._exposeMetadatas = /* @__PURE__ */ new Map();
          this._excludeMetadatas = /* @__PURE__ */ new Map();
          this._ancestorsMap = /* @__PURE__ */ new Map();
        }
        // -------------------------------------------------------------------------
        // Adder Methods
        // -------------------------------------------------------------------------
        addTypeMetadata(metadata) {
          if (!this._typeMetadatas.has(metadata.target)) {
            this._typeMetadatas.set(metadata.target, /* @__PURE__ */ new Map());
          }
          this._typeMetadatas.get(metadata.target).set(metadata.propertyName, metadata);
        }
        addTransformMetadata(metadata) {
          if (!this._transformMetadatas.has(metadata.target)) {
            this._transformMetadatas.set(metadata.target, /* @__PURE__ */ new Map());
          }
          if (!this._transformMetadatas.get(metadata.target).has(metadata.propertyName)) {
            this._transformMetadatas.get(metadata.target).set(metadata.propertyName, []);
          }
          this._transformMetadatas.get(metadata.target).get(metadata.propertyName).push(metadata);
        }
        addExposeMetadata(metadata) {
          if (!this._exposeMetadatas.has(metadata.target)) {
            this._exposeMetadatas.set(metadata.target, /* @__PURE__ */ new Map());
          }
          this._exposeMetadatas.get(metadata.target).set(metadata.propertyName, metadata);
        }
        addExcludeMetadata(metadata) {
          if (!this._excludeMetadatas.has(metadata.target)) {
            this._excludeMetadatas.set(metadata.target, /* @__PURE__ */ new Map());
          }
          this._excludeMetadatas.get(metadata.target).set(metadata.propertyName, metadata);
        }
        // -------------------------------------------------------------------------
        // Public Methods
        // -------------------------------------------------------------------------
        findTransformMetadatas(target, propertyName, transformationType) {
          return this.findMetadatas(this._transformMetadatas, target, propertyName).filter((metadata) => {
            if (!metadata.options)
              return true;
            if (metadata.options.toClassOnly === true && metadata.options.toPlainOnly === true)
              return true;
            if (metadata.options.toClassOnly === true) {
              return transformationType === enums_1.TransformationType.CLASS_TO_CLASS || transformationType === enums_1.TransformationType.PLAIN_TO_CLASS;
            }
            if (metadata.options.toPlainOnly === true) {
              return transformationType === enums_1.TransformationType.CLASS_TO_PLAIN;
            }
            return true;
          });
        }
        findExcludeMetadata(target, propertyName) {
          return this.findMetadata(this._excludeMetadatas, target, propertyName);
        }
        findExposeMetadata(target, propertyName) {
          return this.findMetadata(this._exposeMetadatas, target, propertyName);
        }
        findExposeMetadataByCustomName(target, name) {
          return this.getExposedMetadatas(target).find((metadata) => {
            return metadata.options && metadata.options.name === name;
          });
        }
        findTypeMetadata(target, propertyName) {
          return this.findMetadata(this._typeMetadatas, target, propertyName);
        }
        getStrategy(target) {
          const excludeMap = this._excludeMetadatas.get(target);
          const exclude = excludeMap && excludeMap.get(void 0);
          const exposeMap = this._exposeMetadatas.get(target);
          const expose = exposeMap && exposeMap.get(void 0);
          if (exclude && expose || !exclude && !expose)
            return "none";
          return exclude ? "excludeAll" : "exposeAll";
        }
        getExposedMetadatas(target) {
          return this.getMetadata(this._exposeMetadatas, target);
        }
        getExcludedMetadatas(target) {
          return this.getMetadata(this._excludeMetadatas, target);
        }
        getExposedProperties(target, transformationType) {
          return this.getExposedMetadatas(target).filter((metadata) => {
            if (!metadata.options)
              return true;
            if (metadata.options.toClassOnly === true && metadata.options.toPlainOnly === true)
              return true;
            if (metadata.options.toClassOnly === true) {
              return transformationType === enums_1.TransformationType.CLASS_TO_CLASS || transformationType === enums_1.TransformationType.PLAIN_TO_CLASS;
            }
            if (metadata.options.toPlainOnly === true) {
              return transformationType === enums_1.TransformationType.CLASS_TO_PLAIN;
            }
            return true;
          }).map((metadata) => metadata.propertyName);
        }
        getExcludedProperties(target, transformationType) {
          return this.getExcludedMetadatas(target).filter((metadata) => {
            if (!metadata.options)
              return true;
            if (metadata.options.toClassOnly === true && metadata.options.toPlainOnly === true)
              return true;
            if (metadata.options.toClassOnly === true) {
              return transformationType === enums_1.TransformationType.CLASS_TO_CLASS || transformationType === enums_1.TransformationType.PLAIN_TO_CLASS;
            }
            if (metadata.options.toPlainOnly === true) {
              return transformationType === enums_1.TransformationType.CLASS_TO_PLAIN;
            }
            return true;
          }).map((metadata) => metadata.propertyName);
        }
        clear() {
          this._typeMetadatas.clear();
          this._exposeMetadatas.clear();
          this._excludeMetadatas.clear();
          this._ancestorsMap.clear();
        }
        // -------------------------------------------------------------------------
        // Private Methods
        // -------------------------------------------------------------------------
        getMetadata(metadatas, target) {
          const metadataFromTargetMap = metadatas.get(target);
          let metadataFromTarget;
          if (metadataFromTargetMap) {
            metadataFromTarget = Array.from(metadataFromTargetMap.values()).filter((meta) => meta.propertyName !== void 0);
          }
          const metadataFromAncestors = [];
          for (const ancestor of this.getAncestors(target)) {
            const ancestorMetadataMap = metadatas.get(ancestor);
            if (ancestorMetadataMap) {
              const metadataFromAncestor = Array.from(ancestorMetadataMap.values()).filter((meta) => meta.propertyName !== void 0);
              metadataFromAncestors.push(...metadataFromAncestor);
            }
          }
          return metadataFromAncestors.concat(metadataFromTarget || []);
        }
        findMetadata(metadatas, target, propertyName) {
          const metadataFromTargetMap = metadatas.get(target);
          if (metadataFromTargetMap) {
            const metadataFromTarget = metadataFromTargetMap.get(propertyName);
            if (metadataFromTarget) {
              return metadataFromTarget;
            }
          }
          for (const ancestor of this.getAncestors(target)) {
            const ancestorMetadataMap = metadatas.get(ancestor);
            if (ancestorMetadataMap) {
              const ancestorResult = ancestorMetadataMap.get(propertyName);
              if (ancestorResult) {
                return ancestorResult;
              }
            }
          }
          return void 0;
        }
        findMetadatas(metadatas, target, propertyName) {
          const metadataFromTargetMap = metadatas.get(target);
          let metadataFromTarget;
          if (metadataFromTargetMap) {
            metadataFromTarget = metadataFromTargetMap.get(propertyName);
          }
          const metadataFromAncestorsTarget = [];
          for (const ancestor of this.getAncestors(target)) {
            const ancestorMetadataMap = metadatas.get(ancestor);
            if (ancestorMetadataMap) {
              if (ancestorMetadataMap.has(propertyName)) {
                metadataFromAncestorsTarget.push(...ancestorMetadataMap.get(propertyName));
              }
            }
          }
          return metadataFromAncestorsTarget.slice().reverse().concat((metadataFromTarget || []).slice().reverse());
        }
        getAncestors(target) {
          if (!target)
            return [];
          if (!this._ancestorsMap.has(target)) {
            const ancestors = [];
            for (let baseClass = Object.getPrototypeOf(target.prototype.constructor); typeof baseClass.prototype !== "undefined"; baseClass = Object.getPrototypeOf(baseClass.prototype.constructor)) {
              ancestors.push(baseClass);
            }
            this._ancestorsMap.set(target, ancestors);
          }
          return this._ancestorsMap.get(target);
        }
      };
      exports.MetadataStorage = MetadataStorage;
    }
  });

  // node_modules/.pnpm/class-transformer@0.5.1/node_modules/class-transformer/cjs/storage.js
  var require_storage = __commonJS({
    "node_modules/.pnpm/class-transformer@0.5.1/node_modules/class-transformer/cjs/storage.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.defaultMetadataStorage = void 0;
      var MetadataStorage_1 = require_MetadataStorage();
      exports.defaultMetadataStorage = new MetadataStorage_1.MetadataStorage();
    }
  });

  // node_modules/.pnpm/class-transformer@0.5.1/node_modules/class-transformer/cjs/utils/get-global.util.js
  var require_get_global_util = __commonJS({
    "node_modules/.pnpm/class-transformer@0.5.1/node_modules/class-transformer/cjs/utils/get-global.util.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.getGlobal = void 0;
      function getGlobal() {
        if (typeof globalThis !== "undefined") {
          return globalThis;
        }
        if (typeof global !== "undefined") {
          return global;
        }
        if (typeof window !== "undefined") {
          return window;
        }
        if (typeof self !== "undefined") {
          return self;
        }
      }
      exports.getGlobal = getGlobal;
    }
  });

  // node_modules/.pnpm/class-transformer@0.5.1/node_modules/class-transformer/cjs/utils/is-promise.util.js
  var require_is_promise_util = __commonJS({
    "node_modules/.pnpm/class-transformer@0.5.1/node_modules/class-transformer/cjs/utils/is-promise.util.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.isPromise = void 0;
      function isPromise(p) {
        return p !== null && typeof p === "object" && typeof p.then === "function";
      }
      exports.isPromise = isPromise;
    }
  });

  // node_modules/.pnpm/class-transformer@0.5.1/node_modules/class-transformer/cjs/utils/index.js
  var require_utils = __commonJS({
    "node_modules/.pnpm/class-transformer@0.5.1/node_modules/class-transformer/cjs/utils/index.js"(exports) {
      "use strict";
      var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function() {
          return m[k];
        } });
      } : function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        o[k2] = m[k];
      });
      var __exportStar = exports && exports.__exportStar || function(m, exports2) {
        for (var p in m)
          if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
            __createBinding(exports2, m, p);
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      __exportStar(require_get_global_util(), exports);
      __exportStar(require_is_promise_util(), exports);
    }
  });

  // node_modules/.pnpm/class-transformer@0.5.1/node_modules/class-transformer/cjs/TransformOperationExecutor.js
  var require_TransformOperationExecutor = __commonJS({
    "node_modules/.pnpm/class-transformer@0.5.1/node_modules/class-transformer/cjs/TransformOperationExecutor.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.TransformOperationExecutor = void 0;
      var storage_1 = require_storage();
      var enums_1 = require_enums();
      var utils_1 = require_utils();
      function instantiateArrayType(arrayType) {
        const array = new arrayType();
        if (!(array instanceof Set) && !("push" in array)) {
          return [];
        }
        return array;
      }
      var TransformOperationExecutor = class {
        // -------------------------------------------------------------------------
        // Constructor
        // -------------------------------------------------------------------------
        constructor(transformationType, options) {
          this.transformationType = transformationType;
          this.options = options;
          this.recursionStack = /* @__PURE__ */ new Set();
        }
        // -------------------------------------------------------------------------
        // Public Methods
        // -------------------------------------------------------------------------
        transform(source, value, targetType, arrayType, isMap, level = 0) {
          if (Array.isArray(value) || value instanceof Set) {
            const newValue = arrayType && this.transformationType === enums_1.TransformationType.PLAIN_TO_CLASS ? instantiateArrayType(arrayType) : [];
            value.forEach((subValue, index) => {
              const subSource = source ? source[index] : void 0;
              if (!this.options.enableCircularCheck || !this.isCircular(subValue)) {
                let realTargetType;
                if (typeof targetType !== "function" && targetType && targetType.options && targetType.options.discriminator && targetType.options.discriminator.property && targetType.options.discriminator.subTypes) {
                  if (this.transformationType === enums_1.TransformationType.PLAIN_TO_CLASS) {
                    realTargetType = targetType.options.discriminator.subTypes.find((subType) => subType.name === subValue[targetType.options.discriminator.property]);
                    const options = { newObject: newValue, object: subValue, property: void 0 };
                    const newType = targetType.typeFunction(options);
                    realTargetType === void 0 ? realTargetType = newType : realTargetType = realTargetType.value;
                    if (!targetType.options.keepDiscriminatorProperty)
                      delete subValue[targetType.options.discriminator.property];
                  }
                  if (this.transformationType === enums_1.TransformationType.CLASS_TO_CLASS) {
                    realTargetType = subValue.constructor;
                  }
                  if (this.transformationType === enums_1.TransformationType.CLASS_TO_PLAIN) {
                    subValue[targetType.options.discriminator.property] = targetType.options.discriminator.subTypes.find((subType) => subType.value === subValue.constructor).name;
                  }
                } else {
                  realTargetType = targetType;
                }
                const value2 = this.transform(subSource, subValue, realTargetType, void 0, subValue instanceof Map, level + 1);
                if (newValue instanceof Set) {
                  newValue.add(value2);
                } else {
                  newValue.push(value2);
                }
              } else if (this.transformationType === enums_1.TransformationType.CLASS_TO_CLASS) {
                if (newValue instanceof Set) {
                  newValue.add(subValue);
                } else {
                  newValue.push(subValue);
                }
              }
            });
            return newValue;
          } else if (targetType === String && !isMap) {
            if (value === null || value === void 0)
              return value;
            return String(value);
          } else if (targetType === Number && !isMap) {
            if (value === null || value === void 0)
              return value;
            return Number(value);
          } else if (targetType === Boolean && !isMap) {
            if (value === null || value === void 0)
              return value;
            return Boolean(value);
          } else if ((targetType === Date || value instanceof Date) && !isMap) {
            if (value instanceof Date) {
              return new Date(value.valueOf());
            }
            if (value === null || value === void 0)
              return value;
            return new Date(value);
          } else if (!!(0, utils_1.getGlobal)().Buffer && (targetType === Buffer || value instanceof Buffer) && !isMap) {
            if (value === null || value === void 0)
              return value;
            return Buffer.from(value);
          } else if ((0, utils_1.isPromise)(value) && !isMap) {
            return new Promise((resolve, reject) => {
              value.then((data) => resolve(this.transform(void 0, data, targetType, void 0, void 0, level + 1)), reject);
            });
          } else if (!isMap && value !== null && typeof value === "object" && typeof value.then === "function") {
            return value;
          } else if (typeof value === "object" && value !== null) {
            if (!targetType && value.constructor !== Object)
              if (!Array.isArray(value) && value.constructor === Array) {
              } else {
                targetType = value.constructor;
              }
            if (!targetType && source)
              targetType = source.constructor;
            if (this.options.enableCircularCheck) {
              this.recursionStack.add(value);
            }
            const keys = this.getKeys(targetType, value, isMap);
            let newValue = source ? source : {};
            if (!source && (this.transformationType === enums_1.TransformationType.PLAIN_TO_CLASS || this.transformationType === enums_1.TransformationType.CLASS_TO_CLASS)) {
              if (isMap) {
                newValue = /* @__PURE__ */ new Map();
              } else if (targetType) {
                newValue = new targetType();
              } else {
                newValue = {};
              }
            }
            for (const key of keys) {
              if (key === "__proto__" || key === "constructor") {
                continue;
              }
              const valueKey = key;
              let newValueKey = key, propertyName = key;
              if (!this.options.ignoreDecorators && targetType) {
                if (this.transformationType === enums_1.TransformationType.PLAIN_TO_CLASS) {
                  const exposeMetadata = storage_1.defaultMetadataStorage.findExposeMetadataByCustomName(targetType, key);
                  if (exposeMetadata) {
                    propertyName = exposeMetadata.propertyName;
                    newValueKey = exposeMetadata.propertyName;
                  }
                } else if (this.transformationType === enums_1.TransformationType.CLASS_TO_PLAIN || this.transformationType === enums_1.TransformationType.CLASS_TO_CLASS) {
                  const exposeMetadata = storage_1.defaultMetadataStorage.findExposeMetadata(targetType, key);
                  if (exposeMetadata && exposeMetadata.options && exposeMetadata.options.name) {
                    newValueKey = exposeMetadata.options.name;
                  }
                }
              }
              let subValue = void 0;
              if (this.transformationType === enums_1.TransformationType.PLAIN_TO_CLASS) {
                subValue = value[valueKey];
              } else {
                if (value instanceof Map) {
                  subValue = value.get(valueKey);
                } else if (value[valueKey] instanceof Function) {
                  subValue = value[valueKey]();
                } else {
                  subValue = value[valueKey];
                }
              }
              let type = void 0, isSubValueMap = subValue instanceof Map;
              if (targetType && isMap) {
                type = targetType;
              } else if (targetType) {
                const metadata = storage_1.defaultMetadataStorage.findTypeMetadata(targetType, propertyName);
                if (metadata) {
                  const options = { newObject: newValue, object: value, property: propertyName };
                  const newType = metadata.typeFunction ? metadata.typeFunction(options) : metadata.reflectedType;
                  if (metadata.options && metadata.options.discriminator && metadata.options.discriminator.property && metadata.options.discriminator.subTypes) {
                    if (!(value[valueKey] instanceof Array)) {
                      if (this.transformationType === enums_1.TransformationType.PLAIN_TO_CLASS) {
                        type = metadata.options.discriminator.subTypes.find((subType) => {
                          if (subValue && subValue instanceof Object && metadata.options.discriminator.property in subValue) {
                            return subType.name === subValue[metadata.options.discriminator.property];
                          }
                        });
                        type === void 0 ? type = newType : type = type.value;
                        if (!metadata.options.keepDiscriminatorProperty) {
                          if (subValue && subValue instanceof Object && metadata.options.discriminator.property in subValue) {
                            delete subValue[metadata.options.discriminator.property];
                          }
                        }
                      }
                      if (this.transformationType === enums_1.TransformationType.CLASS_TO_CLASS) {
                        type = subValue.constructor;
                      }
                      if (this.transformationType === enums_1.TransformationType.CLASS_TO_PLAIN) {
                        if (subValue) {
                          subValue[metadata.options.discriminator.property] = metadata.options.discriminator.subTypes.find((subType) => subType.value === subValue.constructor).name;
                        }
                      }
                    } else {
                      type = metadata;
                    }
                  } else {
                    type = newType;
                  }
                  isSubValueMap = isSubValueMap || metadata.reflectedType === Map;
                } else if (this.options.targetMaps) {
                  this.options.targetMaps.filter((map) => map.target === targetType && !!map.properties[propertyName]).forEach((map) => type = map.properties[propertyName]);
                } else if (this.options.enableImplicitConversion && this.transformationType === enums_1.TransformationType.PLAIN_TO_CLASS) {
                  const reflectedType = Reflect.getMetadata("design:type", targetType.prototype, propertyName);
                  if (reflectedType) {
                    type = reflectedType;
                  }
                }
              }
              const arrayType2 = Array.isArray(value[valueKey]) ? this.getReflectedType(targetType, propertyName) : void 0;
              const subSource = source ? source[valueKey] : void 0;
              if (newValue.constructor.prototype) {
                const descriptor = Object.getOwnPropertyDescriptor(newValue.constructor.prototype, newValueKey);
                if ((this.transformationType === enums_1.TransformationType.PLAIN_TO_CLASS || this.transformationType === enums_1.TransformationType.CLASS_TO_CLASS) && // eslint-disable-next-line @typescript-eslint/unbound-method
                (descriptor && !descriptor.set || newValue[newValueKey] instanceof Function))
                  continue;
              }
              if (!this.options.enableCircularCheck || !this.isCircular(subValue)) {
                const transformKey = this.transformationType === enums_1.TransformationType.PLAIN_TO_CLASS ? newValueKey : key;
                let finalValue;
                if (this.transformationType === enums_1.TransformationType.CLASS_TO_PLAIN) {
                  finalValue = value[transformKey];
                  finalValue = this.applyCustomTransformations(finalValue, targetType, transformKey, value, this.transformationType);
                  finalValue = value[transformKey] === finalValue ? subValue : finalValue;
                  finalValue = this.transform(subSource, finalValue, type, arrayType2, isSubValueMap, level + 1);
                } else {
                  if (subValue === void 0 && this.options.exposeDefaultValues) {
                    finalValue = newValue[newValueKey];
                  } else {
                    finalValue = this.transform(subSource, subValue, type, arrayType2, isSubValueMap, level + 1);
                    finalValue = this.applyCustomTransformations(finalValue, targetType, transformKey, value, this.transformationType);
                  }
                }
                if (finalValue !== void 0 || this.options.exposeUnsetFields) {
                  if (newValue instanceof Map) {
                    newValue.set(newValueKey, finalValue);
                  } else {
                    newValue[newValueKey] = finalValue;
                  }
                }
              } else if (this.transformationType === enums_1.TransformationType.CLASS_TO_CLASS) {
                let finalValue = subValue;
                finalValue = this.applyCustomTransformations(finalValue, targetType, key, value, this.transformationType);
                if (finalValue !== void 0 || this.options.exposeUnsetFields) {
                  if (newValue instanceof Map) {
                    newValue.set(newValueKey, finalValue);
                  } else {
                    newValue[newValueKey] = finalValue;
                  }
                }
              }
            }
            if (this.options.enableCircularCheck) {
              this.recursionStack.delete(value);
            }
            return newValue;
          } else {
            return value;
          }
        }
        applyCustomTransformations(value, target, key, obj, transformationType) {
          let metadatas = storage_1.defaultMetadataStorage.findTransformMetadatas(target, key, this.transformationType);
          if (this.options.version !== void 0) {
            metadatas = metadatas.filter((metadata) => {
              if (!metadata.options)
                return true;
              return this.checkVersion(metadata.options.since, metadata.options.until);
            });
          }
          if (this.options.groups && this.options.groups.length) {
            metadatas = metadatas.filter((metadata) => {
              if (!metadata.options)
                return true;
              return this.checkGroups(metadata.options.groups);
            });
          } else {
            metadatas = metadatas.filter((metadata) => {
              return !metadata.options || !metadata.options.groups || !metadata.options.groups.length;
            });
          }
          metadatas.forEach((metadata) => {
            value = metadata.transformFn({ value, key, obj, type: transformationType, options: this.options });
          });
          return value;
        }
        // preventing circular references
        isCircular(object) {
          return this.recursionStack.has(object);
        }
        getReflectedType(target, propertyName) {
          if (!target)
            return void 0;
          const meta = storage_1.defaultMetadataStorage.findTypeMetadata(target, propertyName);
          return meta ? meta.reflectedType : void 0;
        }
        getKeys(target, object, isMap) {
          let strategy = storage_1.defaultMetadataStorage.getStrategy(target);
          if (strategy === "none")
            strategy = this.options.strategy || "exposeAll";
          let keys = [];
          if (strategy === "exposeAll" || isMap) {
            if (object instanceof Map) {
              keys = Array.from(object.keys());
            } else {
              keys = Object.keys(object);
            }
          }
          if (isMap) {
            return keys;
          }
          if (this.options.ignoreDecorators && this.options.excludeExtraneousValues && target) {
            const exposedProperties = storage_1.defaultMetadataStorage.getExposedProperties(target, this.transformationType);
            const excludedProperties = storage_1.defaultMetadataStorage.getExcludedProperties(target, this.transformationType);
            keys = [...exposedProperties, ...excludedProperties];
          }
          if (!this.options.ignoreDecorators && target) {
            let exposedProperties = storage_1.defaultMetadataStorage.getExposedProperties(target, this.transformationType);
            if (this.transformationType === enums_1.TransformationType.PLAIN_TO_CLASS) {
              exposedProperties = exposedProperties.map((key) => {
                const exposeMetadata = storage_1.defaultMetadataStorage.findExposeMetadata(target, key);
                if (exposeMetadata && exposeMetadata.options && exposeMetadata.options.name) {
                  return exposeMetadata.options.name;
                }
                return key;
              });
            }
            if (this.options.excludeExtraneousValues) {
              keys = exposedProperties;
            } else {
              keys = keys.concat(exposedProperties);
            }
            const excludedProperties = storage_1.defaultMetadataStorage.getExcludedProperties(target, this.transformationType);
            if (excludedProperties.length > 0) {
              keys = keys.filter((key) => {
                return !excludedProperties.includes(key);
              });
            }
            if (this.options.version !== void 0) {
              keys = keys.filter((key) => {
                const exposeMetadata = storage_1.defaultMetadataStorage.findExposeMetadata(target, key);
                if (!exposeMetadata || !exposeMetadata.options)
                  return true;
                return this.checkVersion(exposeMetadata.options.since, exposeMetadata.options.until);
              });
            }
            if (this.options.groups && this.options.groups.length) {
              keys = keys.filter((key) => {
                const exposeMetadata = storage_1.defaultMetadataStorage.findExposeMetadata(target, key);
                if (!exposeMetadata || !exposeMetadata.options)
                  return true;
                return this.checkGroups(exposeMetadata.options.groups);
              });
            } else {
              keys = keys.filter((key) => {
                const exposeMetadata = storage_1.defaultMetadataStorage.findExposeMetadata(target, key);
                return !exposeMetadata || !exposeMetadata.options || !exposeMetadata.options.groups || !exposeMetadata.options.groups.length;
              });
            }
          }
          if (this.options.excludePrefixes && this.options.excludePrefixes.length) {
            keys = keys.filter((key) => this.options.excludePrefixes.every((prefix) => {
              return key.substr(0, prefix.length) !== prefix;
            }));
          }
          keys = keys.filter((key, index, self2) => {
            return self2.indexOf(key) === index;
          });
          return keys;
        }
        checkVersion(since, until) {
          let decision = true;
          if (decision && since)
            decision = this.options.version >= since;
          if (decision && until)
            decision = this.options.version < until;
          return decision;
        }
        checkGroups(groups) {
          if (!groups)
            return true;
          return this.options.groups.some((optionGroup) => groups.includes(optionGroup));
        }
      };
      exports.TransformOperationExecutor = TransformOperationExecutor;
    }
  });

  // node_modules/.pnpm/class-transformer@0.5.1/node_modules/class-transformer/cjs/constants/default-options.constant.js
  var require_default_options_constant = __commonJS({
    "node_modules/.pnpm/class-transformer@0.5.1/node_modules/class-transformer/cjs/constants/default-options.constant.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.defaultOptions = void 0;
      exports.defaultOptions = {
        enableCircularCheck: false,
        enableImplicitConversion: false,
        excludeExtraneousValues: false,
        excludePrefixes: void 0,
        exposeDefaultValues: false,
        exposeUnsetFields: true,
        groups: void 0,
        ignoreDecorators: false,
        strategy: void 0,
        targetMaps: void 0,
        version: void 0
      };
    }
  });

  // node_modules/.pnpm/class-transformer@0.5.1/node_modules/class-transformer/cjs/ClassTransformer.js
  var require_ClassTransformer = __commonJS({
    "node_modules/.pnpm/class-transformer@0.5.1/node_modules/class-transformer/cjs/ClassTransformer.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.ClassTransformer = void 0;
      var TransformOperationExecutor_1 = require_TransformOperationExecutor();
      var enums_1 = require_enums();
      var default_options_constant_1 = require_default_options_constant();
      var ClassTransformer = class {
        instanceToPlain(object, options) {
          const executor = new TransformOperationExecutor_1.TransformOperationExecutor(enums_1.TransformationType.CLASS_TO_PLAIN, {
            ...default_options_constant_1.defaultOptions,
            ...options
          });
          return executor.transform(void 0, object, void 0, void 0, void 0, void 0);
        }
        classToPlainFromExist(object, plainObject, options) {
          const executor = new TransformOperationExecutor_1.TransformOperationExecutor(enums_1.TransformationType.CLASS_TO_PLAIN, {
            ...default_options_constant_1.defaultOptions,
            ...options
          });
          return executor.transform(plainObject, object, void 0, void 0, void 0, void 0);
        }
        plainToInstance(cls, plain, options) {
          const executor = new TransformOperationExecutor_1.TransformOperationExecutor(enums_1.TransformationType.PLAIN_TO_CLASS, {
            ...default_options_constant_1.defaultOptions,
            ...options
          });
          return executor.transform(void 0, plain, cls, void 0, void 0, void 0);
        }
        plainToClassFromExist(clsObject, plain, options) {
          const executor = new TransformOperationExecutor_1.TransformOperationExecutor(enums_1.TransformationType.PLAIN_TO_CLASS, {
            ...default_options_constant_1.defaultOptions,
            ...options
          });
          return executor.transform(clsObject, plain, void 0, void 0, void 0, void 0);
        }
        instanceToInstance(object, options) {
          const executor = new TransformOperationExecutor_1.TransformOperationExecutor(enums_1.TransformationType.CLASS_TO_CLASS, {
            ...default_options_constant_1.defaultOptions,
            ...options
          });
          return executor.transform(void 0, object, void 0, void 0, void 0, void 0);
        }
        classToClassFromExist(object, fromObject, options) {
          const executor = new TransformOperationExecutor_1.TransformOperationExecutor(enums_1.TransformationType.CLASS_TO_CLASS, {
            ...default_options_constant_1.defaultOptions,
            ...options
          });
          return executor.transform(fromObject, object, void 0, void 0, void 0, void 0);
        }
        serialize(object, options) {
          return JSON.stringify(this.instanceToPlain(object, options));
        }
        /**
         * Deserializes given JSON string to a object of the given class.
         */
        deserialize(cls, json, options) {
          const jsonObject = JSON.parse(json);
          return this.plainToInstance(cls, jsonObject, options);
        }
        /**
         * Deserializes given JSON string to an array of objects of the given class.
         */
        deserializeArray(cls, json, options) {
          const jsonObject = JSON.parse(json);
          return this.plainToInstance(cls, jsonObject, options);
        }
      };
      exports.ClassTransformer = ClassTransformer;
    }
  });

  // node_modules/.pnpm/class-transformer@0.5.1/node_modules/class-transformer/cjs/decorators/exclude.decorator.js
  var require_exclude_decorator = __commonJS({
    "node_modules/.pnpm/class-transformer@0.5.1/node_modules/class-transformer/cjs/decorators/exclude.decorator.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.Exclude = void 0;
      var storage_1 = require_storage();
      function Exclude(options = {}) {
        return function(object, propertyName) {
          storage_1.defaultMetadataStorage.addExcludeMetadata({
            target: object instanceof Function ? object : object.constructor,
            propertyName,
            options
          });
        };
      }
      exports.Exclude = Exclude;
    }
  });

  // node_modules/.pnpm/class-transformer@0.5.1/node_modules/class-transformer/cjs/decorators/expose.decorator.js
  var require_expose_decorator = __commonJS({
    "node_modules/.pnpm/class-transformer@0.5.1/node_modules/class-transformer/cjs/decorators/expose.decorator.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.Expose = void 0;
      var storage_1 = require_storage();
      function Expose(options = {}) {
        return function(object, propertyName) {
          storage_1.defaultMetadataStorage.addExposeMetadata({
            target: object instanceof Function ? object : object.constructor,
            propertyName,
            options
          });
        };
      }
      exports.Expose = Expose;
    }
  });

  // node_modules/.pnpm/class-transformer@0.5.1/node_modules/class-transformer/cjs/decorators/transform-instance-to-instance.decorator.js
  var require_transform_instance_to_instance_decorator = __commonJS({
    "node_modules/.pnpm/class-transformer@0.5.1/node_modules/class-transformer/cjs/decorators/transform-instance-to-instance.decorator.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.TransformInstanceToInstance = void 0;
      var ClassTransformer_1 = require_ClassTransformer();
      function TransformInstanceToInstance(params) {
        return function(target, propertyKey, descriptor) {
          const classTransformer = new ClassTransformer_1.ClassTransformer();
          const originalMethod = descriptor.value;
          descriptor.value = function(...args) {
            const result = originalMethod.apply(this, args);
            const isPromise = !!result && (typeof result === "object" || typeof result === "function") && typeof result.then === "function";
            return isPromise ? result.then((data) => classTransformer.instanceToInstance(data, params)) : classTransformer.instanceToInstance(result, params);
          };
        };
      }
      exports.TransformInstanceToInstance = TransformInstanceToInstance;
    }
  });

  // node_modules/.pnpm/class-transformer@0.5.1/node_modules/class-transformer/cjs/decorators/transform-instance-to-plain.decorator.js
  var require_transform_instance_to_plain_decorator = __commonJS({
    "node_modules/.pnpm/class-transformer@0.5.1/node_modules/class-transformer/cjs/decorators/transform-instance-to-plain.decorator.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.TransformInstanceToPlain = void 0;
      var ClassTransformer_1 = require_ClassTransformer();
      function TransformInstanceToPlain(params) {
        return function(target, propertyKey, descriptor) {
          const classTransformer = new ClassTransformer_1.ClassTransformer();
          const originalMethod = descriptor.value;
          descriptor.value = function(...args) {
            const result = originalMethod.apply(this, args);
            const isPromise = !!result && (typeof result === "object" || typeof result === "function") && typeof result.then === "function";
            return isPromise ? result.then((data) => classTransformer.instanceToPlain(data, params)) : classTransformer.instanceToPlain(result, params);
          };
        };
      }
      exports.TransformInstanceToPlain = TransformInstanceToPlain;
    }
  });

  // node_modules/.pnpm/class-transformer@0.5.1/node_modules/class-transformer/cjs/decorators/transform-plain-to-instance.decorator.js
  var require_transform_plain_to_instance_decorator = __commonJS({
    "node_modules/.pnpm/class-transformer@0.5.1/node_modules/class-transformer/cjs/decorators/transform-plain-to-instance.decorator.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.TransformPlainToInstance = void 0;
      var ClassTransformer_1 = require_ClassTransformer();
      function TransformPlainToInstance(classType, params) {
        return function(target, propertyKey, descriptor) {
          const classTransformer = new ClassTransformer_1.ClassTransformer();
          const originalMethod = descriptor.value;
          descriptor.value = function(...args) {
            const result = originalMethod.apply(this, args);
            const isPromise = !!result && (typeof result === "object" || typeof result === "function") && typeof result.then === "function";
            return isPromise ? result.then((data) => classTransformer.plainToInstance(classType, data, params)) : classTransformer.plainToInstance(classType, result, params);
          };
        };
      }
      exports.TransformPlainToInstance = TransformPlainToInstance;
    }
  });

  // node_modules/.pnpm/class-transformer@0.5.1/node_modules/class-transformer/cjs/decorators/transform.decorator.js
  var require_transform_decorator = __commonJS({
    "node_modules/.pnpm/class-transformer@0.5.1/node_modules/class-transformer/cjs/decorators/transform.decorator.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.Transform = void 0;
      var storage_1 = require_storage();
      function Transform(transformFn, options = {}) {
        return function(target, propertyName) {
          storage_1.defaultMetadataStorage.addTransformMetadata({
            target: target.constructor,
            propertyName,
            transformFn,
            options
          });
        };
      }
      exports.Transform = Transform;
    }
  });

  // node_modules/.pnpm/class-transformer@0.5.1/node_modules/class-transformer/cjs/decorators/type.decorator.js
  var require_type_decorator = __commonJS({
    "node_modules/.pnpm/class-transformer@0.5.1/node_modules/class-transformer/cjs/decorators/type.decorator.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.Type = void 0;
      var storage_1 = require_storage();
      function Type(typeFunction, options = {}) {
        return function(target, propertyName) {
          const reflectedType = Reflect.getMetadata("design:type", target, propertyName);
          storage_1.defaultMetadataStorage.addTypeMetadata({
            target: target.constructor,
            propertyName,
            reflectedType,
            typeFunction,
            options
          });
        };
      }
      exports.Type = Type;
    }
  });

  // node_modules/.pnpm/class-transformer@0.5.1/node_modules/class-transformer/cjs/decorators/index.js
  var require_decorators = __commonJS({
    "node_modules/.pnpm/class-transformer@0.5.1/node_modules/class-transformer/cjs/decorators/index.js"(exports) {
      "use strict";
      var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function() {
          return m[k];
        } });
      } : function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        o[k2] = m[k];
      });
      var __exportStar = exports && exports.__exportStar || function(m, exports2) {
        for (var p in m)
          if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
            __createBinding(exports2, m, p);
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      __exportStar(require_exclude_decorator(), exports);
      __exportStar(require_expose_decorator(), exports);
      __exportStar(require_transform_instance_to_instance_decorator(), exports);
      __exportStar(require_transform_instance_to_plain_decorator(), exports);
      __exportStar(require_transform_plain_to_instance_decorator(), exports);
      __exportStar(require_transform_decorator(), exports);
      __exportStar(require_type_decorator(), exports);
    }
  });

  // node_modules/.pnpm/class-transformer@0.5.1/node_modules/class-transformer/cjs/interfaces/decorator-options/expose-options.interface.js
  var require_expose_options_interface = __commonJS({
    "node_modules/.pnpm/class-transformer@0.5.1/node_modules/class-transformer/cjs/interfaces/decorator-options/expose-options.interface.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
    }
  });

  // node_modules/.pnpm/class-transformer@0.5.1/node_modules/class-transformer/cjs/interfaces/decorator-options/exclude-options.interface.js
  var require_exclude_options_interface = __commonJS({
    "node_modules/.pnpm/class-transformer@0.5.1/node_modules/class-transformer/cjs/interfaces/decorator-options/exclude-options.interface.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
    }
  });

  // node_modules/.pnpm/class-transformer@0.5.1/node_modules/class-transformer/cjs/interfaces/decorator-options/transform-options.interface.js
  var require_transform_options_interface = __commonJS({
    "node_modules/.pnpm/class-transformer@0.5.1/node_modules/class-transformer/cjs/interfaces/decorator-options/transform-options.interface.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
    }
  });

  // node_modules/.pnpm/class-transformer@0.5.1/node_modules/class-transformer/cjs/interfaces/decorator-options/type-discriminator-descriptor.interface.js
  var require_type_discriminator_descriptor_interface = __commonJS({
    "node_modules/.pnpm/class-transformer@0.5.1/node_modules/class-transformer/cjs/interfaces/decorator-options/type-discriminator-descriptor.interface.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
    }
  });

  // node_modules/.pnpm/class-transformer@0.5.1/node_modules/class-transformer/cjs/interfaces/decorator-options/type-options.interface.js
  var require_type_options_interface = __commonJS({
    "node_modules/.pnpm/class-transformer@0.5.1/node_modules/class-transformer/cjs/interfaces/decorator-options/type-options.interface.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
    }
  });

  // node_modules/.pnpm/class-transformer@0.5.1/node_modules/class-transformer/cjs/interfaces/metadata/exclude-metadata.interface.js
  var require_exclude_metadata_interface = __commonJS({
    "node_modules/.pnpm/class-transformer@0.5.1/node_modules/class-transformer/cjs/interfaces/metadata/exclude-metadata.interface.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
    }
  });

  // node_modules/.pnpm/class-transformer@0.5.1/node_modules/class-transformer/cjs/interfaces/metadata/expose-metadata.interface.js
  var require_expose_metadata_interface = __commonJS({
    "node_modules/.pnpm/class-transformer@0.5.1/node_modules/class-transformer/cjs/interfaces/metadata/expose-metadata.interface.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
    }
  });

  // node_modules/.pnpm/class-transformer@0.5.1/node_modules/class-transformer/cjs/interfaces/metadata/transform-metadata.interface.js
  var require_transform_metadata_interface = __commonJS({
    "node_modules/.pnpm/class-transformer@0.5.1/node_modules/class-transformer/cjs/interfaces/metadata/transform-metadata.interface.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
    }
  });

  // node_modules/.pnpm/class-transformer@0.5.1/node_modules/class-transformer/cjs/interfaces/metadata/transform-fn-params.interface.js
  var require_transform_fn_params_interface = __commonJS({
    "node_modules/.pnpm/class-transformer@0.5.1/node_modules/class-transformer/cjs/interfaces/metadata/transform-fn-params.interface.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
    }
  });

  // node_modules/.pnpm/class-transformer@0.5.1/node_modules/class-transformer/cjs/interfaces/metadata/type-metadata.interface.js
  var require_type_metadata_interface = __commonJS({
    "node_modules/.pnpm/class-transformer@0.5.1/node_modules/class-transformer/cjs/interfaces/metadata/type-metadata.interface.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
    }
  });

  // node_modules/.pnpm/class-transformer@0.5.1/node_modules/class-transformer/cjs/interfaces/class-constructor.type.js
  var require_class_constructor_type = __commonJS({
    "node_modules/.pnpm/class-transformer@0.5.1/node_modules/class-transformer/cjs/interfaces/class-constructor.type.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
    }
  });

  // node_modules/.pnpm/class-transformer@0.5.1/node_modules/class-transformer/cjs/interfaces/class-transformer-options.interface.js
  var require_class_transformer_options_interface = __commonJS({
    "node_modules/.pnpm/class-transformer@0.5.1/node_modules/class-transformer/cjs/interfaces/class-transformer-options.interface.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
    }
  });

  // node_modules/.pnpm/class-transformer@0.5.1/node_modules/class-transformer/cjs/interfaces/target-map.interface.js
  var require_target_map_interface = __commonJS({
    "node_modules/.pnpm/class-transformer@0.5.1/node_modules/class-transformer/cjs/interfaces/target-map.interface.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
    }
  });

  // node_modules/.pnpm/class-transformer@0.5.1/node_modules/class-transformer/cjs/interfaces/type-help-options.interface.js
  var require_type_help_options_interface = __commonJS({
    "node_modules/.pnpm/class-transformer@0.5.1/node_modules/class-transformer/cjs/interfaces/type-help-options.interface.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
    }
  });

  // node_modules/.pnpm/class-transformer@0.5.1/node_modules/class-transformer/cjs/interfaces/index.js
  var require_interfaces = __commonJS({
    "node_modules/.pnpm/class-transformer@0.5.1/node_modules/class-transformer/cjs/interfaces/index.js"(exports) {
      "use strict";
      var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function() {
          return m[k];
        } });
      } : function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        o[k2] = m[k];
      });
      var __exportStar = exports && exports.__exportStar || function(m, exports2) {
        for (var p in m)
          if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
            __createBinding(exports2, m, p);
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      __exportStar(require_expose_options_interface(), exports);
      __exportStar(require_exclude_options_interface(), exports);
      __exportStar(require_transform_options_interface(), exports);
      __exportStar(require_type_discriminator_descriptor_interface(), exports);
      __exportStar(require_type_options_interface(), exports);
      __exportStar(require_exclude_metadata_interface(), exports);
      __exportStar(require_expose_metadata_interface(), exports);
      __exportStar(require_transform_metadata_interface(), exports);
      __exportStar(require_transform_fn_params_interface(), exports);
      __exportStar(require_type_metadata_interface(), exports);
      __exportStar(require_class_constructor_type(), exports);
      __exportStar(require_class_transformer_options_interface(), exports);
      __exportStar(require_target_map_interface(), exports);
      __exportStar(require_type_help_options_interface(), exports);
    }
  });

  // node_modules/.pnpm/class-transformer@0.5.1/node_modules/class-transformer/cjs/index.js
  var require_cjs = __commonJS({
    "node_modules/.pnpm/class-transformer@0.5.1/node_modules/class-transformer/cjs/index.js"(exports) {
      "use strict";
      var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function() {
          return m[k];
        } });
      } : function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        o[k2] = m[k];
      });
      var __exportStar = exports && exports.__exportStar || function(m, exports2) {
        for (var p in m)
          if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
            __createBinding(exports2, m, p);
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.deserializeArray = exports.deserialize = exports.serialize = exports.classToClassFromExist = exports.instanceToInstance = exports.plainToClassFromExist = exports.plainToInstance = exports.plainToClass = exports.classToPlainFromExist = exports.instanceToPlain = exports.classToPlain = exports.ClassTransformer = void 0;
      var ClassTransformer_1 = require_ClassTransformer();
      var ClassTransformer_2 = require_ClassTransformer();
      Object.defineProperty(exports, "ClassTransformer", { enumerable: true, get: function() {
        return ClassTransformer_2.ClassTransformer;
      } });
      __exportStar(require_decorators(), exports);
      __exportStar(require_interfaces(), exports);
      __exportStar(require_enums(), exports);
      var classTransformer = new ClassTransformer_1.ClassTransformer();
      function classToPlain(object, options) {
        return classTransformer.instanceToPlain(object, options);
      }
      exports.classToPlain = classToPlain;
      function instanceToPlain(object, options) {
        return classTransformer.instanceToPlain(object, options);
      }
      exports.instanceToPlain = instanceToPlain;
      function classToPlainFromExist(object, plainObject, options) {
        return classTransformer.classToPlainFromExist(object, plainObject, options);
      }
      exports.classToPlainFromExist = classToPlainFromExist;
      function plainToClass(cls, plain, options) {
        return classTransformer.plainToInstance(cls, plain, options);
      }
      exports.plainToClass = plainToClass;
      function plainToInstance(cls, plain, options) {
        return classTransformer.plainToInstance(cls, plain, options);
      }
      exports.plainToInstance = plainToInstance;
      function plainToClassFromExist(clsObject, plain, options) {
        return classTransformer.plainToClassFromExist(clsObject, plain, options);
      }
      exports.plainToClassFromExist = plainToClassFromExist;
      function instanceToInstance(object, options) {
        return classTransformer.instanceToInstance(object, options);
      }
      exports.instanceToInstance = instanceToInstance;
      function classToClassFromExist(object, fromObject, options) {
        return classTransformer.classToClassFromExist(object, fromObject, options);
      }
      exports.classToClassFromExist = classToClassFromExist;
      function serialize(object, options) {
        return classTransformer.serialize(object, options);
      }
      exports.serialize = serialize;
      function deserialize(cls, json, options) {
        return classTransformer.deserialize(cls, json, options);
      }
      exports.deserialize = deserialize;
      function deserializeArray(cls, json, options) {
        return classTransformer.deserializeArray(cls, json, options);
      }
      exports.deserializeArray = deserializeArray;
    }
  });

  // node_modules/.pnpm/reflect-metadata@0.2.2/node_modules/reflect-metadata/Reflect.js
  var require_Reflect = __commonJS({
    "node_modules/.pnpm/reflect-metadata@0.2.2/node_modules/reflect-metadata/Reflect.js"() {
      var Reflect2;
      (function(Reflect3) {
        (function(factory) {
          var root = typeof globalThis === "object" ? globalThis : typeof global === "object" ? global : typeof self === "object" ? self : typeof this === "object" ? this : sloppyModeThis();
          var exporter = makeExporter(Reflect3);
          if (typeof root.Reflect !== "undefined") {
            exporter = makeExporter(root.Reflect, exporter);
          }
          factory(exporter, root);
          if (typeof root.Reflect === "undefined") {
            root.Reflect = Reflect3;
          }
          function makeExporter(target, previous) {
            return function(key, value) {
              Object.defineProperty(target, key, { configurable: true, writable: true, value });
              if (previous)
                previous(key, value);
            };
          }
          function functionThis() {
            try {
              return Function("return this;")();
            } catch (_) {
            }
          }
          function indirectEvalThis() {
            try {
              return (void 0, eval)("(function() { return this; })()");
            } catch (_) {
            }
          }
          function sloppyModeThis() {
            return functionThis() || indirectEvalThis();
          }
        })(function(exporter, root) {
          var hasOwn = Object.prototype.hasOwnProperty;
          var supportsSymbol = typeof Symbol === "function";
          var toPrimitiveSymbol = supportsSymbol && typeof Symbol.toPrimitive !== "undefined" ? Symbol.toPrimitive : "@@toPrimitive";
          var iteratorSymbol = supportsSymbol && typeof Symbol.iterator !== "undefined" ? Symbol.iterator : "@@iterator";
          var supportsCreate = typeof Object.create === "function";
          var supportsProto = { __proto__: [] } instanceof Array;
          var downLevel = !supportsCreate && !supportsProto;
          var HashMap = {
            // create an object in dictionary mode (a.k.a. "slow" mode in v8)
            create: supportsCreate ? function() {
              return MakeDictionary(/* @__PURE__ */ Object.create(null));
            } : supportsProto ? function() {
              return MakeDictionary({ __proto__: null });
            } : function() {
              return MakeDictionary({});
            },
            has: downLevel ? function(map, key) {
              return hasOwn.call(map, key);
            } : function(map, key) {
              return key in map;
            },
            get: downLevel ? function(map, key) {
              return hasOwn.call(map, key) ? map[key] : void 0;
            } : function(map, key) {
              return map[key];
            }
          };
          var functionPrototype = Object.getPrototypeOf(Function);
          var _Map = typeof Map === "function" && typeof Map.prototype.entries === "function" ? Map : CreateMapPolyfill();
          var _Set = typeof Set === "function" && typeof Set.prototype.entries === "function" ? Set : CreateSetPolyfill();
          var _WeakMap = typeof WeakMap === "function" ? WeakMap : CreateWeakMapPolyfill();
          var registrySymbol = supportsSymbol ? Symbol.for("@reflect-metadata:registry") : void 0;
          var metadataRegistry = GetOrCreateMetadataRegistry();
          var metadataProvider = CreateMetadataProvider(metadataRegistry);
          function decorate(decorators, target, propertyKey, attributes) {
            if (!IsUndefined(propertyKey)) {
              if (!IsArray(decorators))
                throw new TypeError();
              if (!IsObject(target))
                throw new TypeError();
              if (!IsObject(attributes) && !IsUndefined(attributes) && !IsNull(attributes))
                throw new TypeError();
              if (IsNull(attributes))
                attributes = void 0;
              propertyKey = ToPropertyKey(propertyKey);
              return DecorateProperty(decorators, target, propertyKey, attributes);
            } else {
              if (!IsArray(decorators))
                throw new TypeError();
              if (!IsConstructor(target))
                throw new TypeError();
              return DecorateConstructor(decorators, target);
            }
          }
          exporter("decorate", decorate);
          function metadata(metadataKey, metadataValue) {
            function decorator(target, propertyKey) {
              if (!IsObject(target))
                throw new TypeError();
              if (!IsUndefined(propertyKey) && !IsPropertyKey(propertyKey))
                throw new TypeError();
              OrdinaryDefineOwnMetadata(metadataKey, metadataValue, target, propertyKey);
            }
            return decorator;
          }
          exporter("metadata", metadata);
          function defineMetadata(metadataKey, metadataValue, target, propertyKey) {
            if (!IsObject(target))
              throw new TypeError();
            if (!IsUndefined(propertyKey))
              propertyKey = ToPropertyKey(propertyKey);
            return OrdinaryDefineOwnMetadata(metadataKey, metadataValue, target, propertyKey);
          }
          exporter("defineMetadata", defineMetadata);
          function hasMetadata(metadataKey, target, propertyKey) {
            if (!IsObject(target))
              throw new TypeError();
            if (!IsUndefined(propertyKey))
              propertyKey = ToPropertyKey(propertyKey);
            return OrdinaryHasMetadata(metadataKey, target, propertyKey);
          }
          exporter("hasMetadata", hasMetadata);
          function hasOwnMetadata(metadataKey, target, propertyKey) {
            if (!IsObject(target))
              throw new TypeError();
            if (!IsUndefined(propertyKey))
              propertyKey = ToPropertyKey(propertyKey);
            return OrdinaryHasOwnMetadata(metadataKey, target, propertyKey);
          }
          exporter("hasOwnMetadata", hasOwnMetadata);
          function getMetadata(metadataKey, target, propertyKey) {
            if (!IsObject(target))
              throw new TypeError();
            if (!IsUndefined(propertyKey))
              propertyKey = ToPropertyKey(propertyKey);
            return OrdinaryGetMetadata(metadataKey, target, propertyKey);
          }
          exporter("getMetadata", getMetadata);
          function getOwnMetadata(metadataKey, target, propertyKey) {
            if (!IsObject(target))
              throw new TypeError();
            if (!IsUndefined(propertyKey))
              propertyKey = ToPropertyKey(propertyKey);
            return OrdinaryGetOwnMetadata(metadataKey, target, propertyKey);
          }
          exporter("getOwnMetadata", getOwnMetadata);
          function getMetadataKeys(target, propertyKey) {
            if (!IsObject(target))
              throw new TypeError();
            if (!IsUndefined(propertyKey))
              propertyKey = ToPropertyKey(propertyKey);
            return OrdinaryMetadataKeys(target, propertyKey);
          }
          exporter("getMetadataKeys", getMetadataKeys);
          function getOwnMetadataKeys(target, propertyKey) {
            if (!IsObject(target))
              throw new TypeError();
            if (!IsUndefined(propertyKey))
              propertyKey = ToPropertyKey(propertyKey);
            return OrdinaryOwnMetadataKeys(target, propertyKey);
          }
          exporter("getOwnMetadataKeys", getOwnMetadataKeys);
          function deleteMetadata(metadataKey, target, propertyKey) {
            if (!IsObject(target))
              throw new TypeError();
            if (!IsUndefined(propertyKey))
              propertyKey = ToPropertyKey(propertyKey);
            if (!IsObject(target))
              throw new TypeError();
            if (!IsUndefined(propertyKey))
              propertyKey = ToPropertyKey(propertyKey);
            var provider = GetMetadataProvider(
              target,
              propertyKey,
              /*Create*/
              false
            );
            if (IsUndefined(provider))
              return false;
            return provider.OrdinaryDeleteMetadata(metadataKey, target, propertyKey);
          }
          exporter("deleteMetadata", deleteMetadata);
          function DecorateConstructor(decorators, target) {
            for (var i = decorators.length - 1; i >= 0; --i) {
              var decorator = decorators[i];
              var decorated = decorator(target);
              if (!IsUndefined(decorated) && !IsNull(decorated)) {
                if (!IsConstructor(decorated))
                  throw new TypeError();
                target = decorated;
              }
            }
            return target;
          }
          function DecorateProperty(decorators, target, propertyKey, descriptor) {
            for (var i = decorators.length - 1; i >= 0; --i) {
              var decorator = decorators[i];
              var decorated = decorator(target, propertyKey, descriptor);
              if (!IsUndefined(decorated) && !IsNull(decorated)) {
                if (!IsObject(decorated))
                  throw new TypeError();
                descriptor = decorated;
              }
            }
            return descriptor;
          }
          function OrdinaryHasMetadata(MetadataKey, O, P) {
            var hasOwn2 = OrdinaryHasOwnMetadata(MetadataKey, O, P);
            if (hasOwn2)
              return true;
            var parent = OrdinaryGetPrototypeOf(O);
            if (!IsNull(parent))
              return OrdinaryHasMetadata(MetadataKey, parent, P);
            return false;
          }
          function OrdinaryHasOwnMetadata(MetadataKey, O, P) {
            var provider = GetMetadataProvider(
              O,
              P,
              /*Create*/
              false
            );
            if (IsUndefined(provider))
              return false;
            return ToBoolean(provider.OrdinaryHasOwnMetadata(MetadataKey, O, P));
          }
          function OrdinaryGetMetadata(MetadataKey, O, P) {
            var hasOwn2 = OrdinaryHasOwnMetadata(MetadataKey, O, P);
            if (hasOwn2)
              return OrdinaryGetOwnMetadata(MetadataKey, O, P);
            var parent = OrdinaryGetPrototypeOf(O);
            if (!IsNull(parent))
              return OrdinaryGetMetadata(MetadataKey, parent, P);
            return void 0;
          }
          function OrdinaryGetOwnMetadata(MetadataKey, O, P) {
            var provider = GetMetadataProvider(
              O,
              P,
              /*Create*/
              false
            );
            if (IsUndefined(provider))
              return;
            return provider.OrdinaryGetOwnMetadata(MetadataKey, O, P);
          }
          function OrdinaryDefineOwnMetadata(MetadataKey, MetadataValue, O, P) {
            var provider = GetMetadataProvider(
              O,
              P,
              /*Create*/
              true
            );
            provider.OrdinaryDefineOwnMetadata(MetadataKey, MetadataValue, O, P);
          }
          function OrdinaryMetadataKeys(O, P) {
            var ownKeys = OrdinaryOwnMetadataKeys(O, P);
            var parent = OrdinaryGetPrototypeOf(O);
            if (parent === null)
              return ownKeys;
            var parentKeys = OrdinaryMetadataKeys(parent, P);
            if (parentKeys.length <= 0)
              return ownKeys;
            if (ownKeys.length <= 0)
              return parentKeys;
            var set = new _Set();
            var keys = [];
            for (var _i = 0, ownKeys_1 = ownKeys; _i < ownKeys_1.length; _i++) {
              var key = ownKeys_1[_i];
              var hasKey = set.has(key);
              if (!hasKey) {
                set.add(key);
                keys.push(key);
              }
            }
            for (var _a = 0, parentKeys_1 = parentKeys; _a < parentKeys_1.length; _a++) {
              var key = parentKeys_1[_a];
              var hasKey = set.has(key);
              if (!hasKey) {
                set.add(key);
                keys.push(key);
              }
            }
            return keys;
          }
          function OrdinaryOwnMetadataKeys(O, P) {
            var provider = GetMetadataProvider(
              O,
              P,
              /*create*/
              false
            );
            if (!provider) {
              return [];
            }
            return provider.OrdinaryOwnMetadataKeys(O, P);
          }
          function Type(x) {
            if (x === null)
              return 1;
            switch (typeof x) {
              case "undefined":
                return 0;
              case "boolean":
                return 2;
              case "string":
                return 3;
              case "symbol":
                return 4;
              case "number":
                return 5;
              case "object":
                return x === null ? 1 : 6;
              default:
                return 6;
            }
          }
          function IsUndefined(x) {
            return x === void 0;
          }
          function IsNull(x) {
            return x === null;
          }
          function IsSymbol(x) {
            return typeof x === "symbol";
          }
          function IsObject(x) {
            return typeof x === "object" ? x !== null : typeof x === "function";
          }
          function ToPrimitive(input, PreferredType) {
            switch (Type(input)) {
              case 0:
                return input;
              case 1:
                return input;
              case 2:
                return input;
              case 3:
                return input;
              case 4:
                return input;
              case 5:
                return input;
            }
            var hint = PreferredType === 3 ? "string" : PreferredType === 5 ? "number" : "default";
            var exoticToPrim = GetMethod(input, toPrimitiveSymbol);
            if (exoticToPrim !== void 0) {
              var result = exoticToPrim.call(input, hint);
              if (IsObject(result))
                throw new TypeError();
              return result;
            }
            return OrdinaryToPrimitive(input, hint === "default" ? "number" : hint);
          }
          function OrdinaryToPrimitive(O, hint) {
            if (hint === "string") {
              var toString_1 = O.toString;
              if (IsCallable(toString_1)) {
                var result = toString_1.call(O);
                if (!IsObject(result))
                  return result;
              }
              var valueOf = O.valueOf;
              if (IsCallable(valueOf)) {
                var result = valueOf.call(O);
                if (!IsObject(result))
                  return result;
              }
            } else {
              var valueOf = O.valueOf;
              if (IsCallable(valueOf)) {
                var result = valueOf.call(O);
                if (!IsObject(result))
                  return result;
              }
              var toString_2 = O.toString;
              if (IsCallable(toString_2)) {
                var result = toString_2.call(O);
                if (!IsObject(result))
                  return result;
              }
            }
            throw new TypeError();
          }
          function ToBoolean(argument) {
            return !!argument;
          }
          function ToString(argument) {
            return "" + argument;
          }
          function ToPropertyKey(argument) {
            var key = ToPrimitive(
              argument,
              3
              /* String */
            );
            if (IsSymbol(key))
              return key;
            return ToString(key);
          }
          function IsArray(argument) {
            return Array.isArray ? Array.isArray(argument) : argument instanceof Object ? argument instanceof Array : Object.prototype.toString.call(argument) === "[object Array]";
          }
          function IsCallable(argument) {
            return typeof argument === "function";
          }
          function IsConstructor(argument) {
            return typeof argument === "function";
          }
          function IsPropertyKey(argument) {
            switch (Type(argument)) {
              case 3:
                return true;
              case 4:
                return true;
              default:
                return false;
            }
          }
          function SameValueZero(x, y) {
            return x === y || x !== x && y !== y;
          }
          function GetMethod(V, P) {
            var func = V[P];
            if (func === void 0 || func === null)
              return void 0;
            if (!IsCallable(func))
              throw new TypeError();
            return func;
          }
          function GetIterator(obj) {
            var method = GetMethod(obj, iteratorSymbol);
            if (!IsCallable(method))
              throw new TypeError();
            var iterator = method.call(obj);
            if (!IsObject(iterator))
              throw new TypeError();
            return iterator;
          }
          function IteratorValue(iterResult) {
            return iterResult.value;
          }
          function IteratorStep(iterator) {
            var result = iterator.next();
            return result.done ? false : result;
          }
          function IteratorClose(iterator) {
            var f = iterator["return"];
            if (f)
              f.call(iterator);
          }
          function OrdinaryGetPrototypeOf(O) {
            var proto = Object.getPrototypeOf(O);
            if (typeof O !== "function" || O === functionPrototype)
              return proto;
            if (proto !== functionPrototype)
              return proto;
            var prototype = O.prototype;
            var prototypeProto = prototype && Object.getPrototypeOf(prototype);
            if (prototypeProto == null || prototypeProto === Object.prototype)
              return proto;
            var constructor = prototypeProto.constructor;
            if (typeof constructor !== "function")
              return proto;
            if (constructor === O)
              return proto;
            return constructor;
          }
          function CreateMetadataRegistry() {
            var fallback;
            if (!IsUndefined(registrySymbol) && typeof root.Reflect !== "undefined" && !(registrySymbol in root.Reflect) && typeof root.Reflect.defineMetadata === "function") {
              fallback = CreateFallbackProvider(root.Reflect);
            }
            var first;
            var second;
            var rest;
            var targetProviderMap = new _WeakMap();
            var registry = {
              registerProvider,
              getProvider,
              setProvider
            };
            return registry;
            function registerProvider(provider) {
              if (!Object.isExtensible(registry)) {
                throw new Error("Cannot add provider to a frozen registry.");
              }
              switch (true) {
                case fallback === provider:
                  break;
                case IsUndefined(first):
                  first = provider;
                  break;
                case first === provider:
                  break;
                case IsUndefined(second):
                  second = provider;
                  break;
                case second === provider:
                  break;
                default:
                  if (rest === void 0)
                    rest = new _Set();
                  rest.add(provider);
                  break;
              }
            }
            function getProviderNoCache(O, P) {
              if (!IsUndefined(first)) {
                if (first.isProviderFor(O, P))
                  return first;
                if (!IsUndefined(second)) {
                  if (second.isProviderFor(O, P))
                    return first;
                  if (!IsUndefined(rest)) {
                    var iterator = GetIterator(rest);
                    while (true) {
                      var next = IteratorStep(iterator);
                      if (!next) {
                        return void 0;
                      }
                      var provider = IteratorValue(next);
                      if (provider.isProviderFor(O, P)) {
                        IteratorClose(iterator);
                        return provider;
                      }
                    }
                  }
                }
              }
              if (!IsUndefined(fallback) && fallback.isProviderFor(O, P)) {
                return fallback;
              }
              return void 0;
            }
            function getProvider(O, P) {
              var providerMap = targetProviderMap.get(O);
              var provider;
              if (!IsUndefined(providerMap)) {
                provider = providerMap.get(P);
              }
              if (!IsUndefined(provider)) {
                return provider;
              }
              provider = getProviderNoCache(O, P);
              if (!IsUndefined(provider)) {
                if (IsUndefined(providerMap)) {
                  providerMap = new _Map();
                  targetProviderMap.set(O, providerMap);
                }
                providerMap.set(P, provider);
              }
              return provider;
            }
            function hasProvider(provider) {
              if (IsUndefined(provider))
                throw new TypeError();
              return first === provider || second === provider || !IsUndefined(rest) && rest.has(provider);
            }
            function setProvider(O, P, provider) {
              if (!hasProvider(provider)) {
                throw new Error("Metadata provider not registered.");
              }
              var existingProvider = getProvider(O, P);
              if (existingProvider !== provider) {
                if (!IsUndefined(existingProvider)) {
                  return false;
                }
                var providerMap = targetProviderMap.get(O);
                if (IsUndefined(providerMap)) {
                  providerMap = new _Map();
                  targetProviderMap.set(O, providerMap);
                }
                providerMap.set(P, provider);
              }
              return true;
            }
          }
          function GetOrCreateMetadataRegistry() {
            var metadataRegistry2;
            if (!IsUndefined(registrySymbol) && IsObject(root.Reflect) && Object.isExtensible(root.Reflect)) {
              metadataRegistry2 = root.Reflect[registrySymbol];
            }
            if (IsUndefined(metadataRegistry2)) {
              metadataRegistry2 = CreateMetadataRegistry();
            }
            if (!IsUndefined(registrySymbol) && IsObject(root.Reflect) && Object.isExtensible(root.Reflect)) {
              Object.defineProperty(root.Reflect, registrySymbol, {
                enumerable: false,
                configurable: false,
                writable: false,
                value: metadataRegistry2
              });
            }
            return metadataRegistry2;
          }
          function CreateMetadataProvider(registry) {
            var metadata2 = new _WeakMap();
            var provider = {
              isProviderFor: function(O, P) {
                var targetMetadata = metadata2.get(O);
                if (IsUndefined(targetMetadata))
                  return false;
                return targetMetadata.has(P);
              },
              OrdinaryDefineOwnMetadata: OrdinaryDefineOwnMetadata2,
              OrdinaryHasOwnMetadata: OrdinaryHasOwnMetadata2,
              OrdinaryGetOwnMetadata: OrdinaryGetOwnMetadata2,
              OrdinaryOwnMetadataKeys: OrdinaryOwnMetadataKeys2,
              OrdinaryDeleteMetadata
            };
            metadataRegistry.registerProvider(provider);
            return provider;
            function GetOrCreateMetadataMap(O, P, Create) {
              var targetMetadata = metadata2.get(O);
              var createdTargetMetadata = false;
              if (IsUndefined(targetMetadata)) {
                if (!Create)
                  return void 0;
                targetMetadata = new _Map();
                metadata2.set(O, targetMetadata);
                createdTargetMetadata = true;
              }
              var metadataMap = targetMetadata.get(P);
              if (IsUndefined(metadataMap)) {
                if (!Create)
                  return void 0;
                metadataMap = new _Map();
                targetMetadata.set(P, metadataMap);
                if (!registry.setProvider(O, P, provider)) {
                  targetMetadata.delete(P);
                  if (createdTargetMetadata) {
                    metadata2.delete(O);
                  }
                  throw new Error("Wrong provider for target.");
                }
              }
              return metadataMap;
            }
            function OrdinaryHasOwnMetadata2(MetadataKey, O, P) {
              var metadataMap = GetOrCreateMetadataMap(
                O,
                P,
                /*Create*/
                false
              );
              if (IsUndefined(metadataMap))
                return false;
              return ToBoolean(metadataMap.has(MetadataKey));
            }
            function OrdinaryGetOwnMetadata2(MetadataKey, O, P) {
              var metadataMap = GetOrCreateMetadataMap(
                O,
                P,
                /*Create*/
                false
              );
              if (IsUndefined(metadataMap))
                return void 0;
              return metadataMap.get(MetadataKey);
            }
            function OrdinaryDefineOwnMetadata2(MetadataKey, MetadataValue, O, P) {
              var metadataMap = GetOrCreateMetadataMap(
                O,
                P,
                /*Create*/
                true
              );
              metadataMap.set(MetadataKey, MetadataValue);
            }
            function OrdinaryOwnMetadataKeys2(O, P) {
              var keys = [];
              var metadataMap = GetOrCreateMetadataMap(
                O,
                P,
                /*Create*/
                false
              );
              if (IsUndefined(metadataMap))
                return keys;
              var keysObj = metadataMap.keys();
              var iterator = GetIterator(keysObj);
              var k = 0;
              while (true) {
                var next = IteratorStep(iterator);
                if (!next) {
                  keys.length = k;
                  return keys;
                }
                var nextValue = IteratorValue(next);
                try {
                  keys[k] = nextValue;
                } catch (e) {
                  try {
                    IteratorClose(iterator);
                  } finally {
                    throw e;
                  }
                }
                k++;
              }
            }
            function OrdinaryDeleteMetadata(MetadataKey, O, P) {
              var metadataMap = GetOrCreateMetadataMap(
                O,
                P,
                /*Create*/
                false
              );
              if (IsUndefined(metadataMap))
                return false;
              if (!metadataMap.delete(MetadataKey))
                return false;
              if (metadataMap.size === 0) {
                var targetMetadata = metadata2.get(O);
                if (!IsUndefined(targetMetadata)) {
                  targetMetadata.delete(P);
                  if (targetMetadata.size === 0) {
                    metadata2.delete(targetMetadata);
                  }
                }
              }
              return true;
            }
          }
          function CreateFallbackProvider(reflect) {
            var defineMetadata2 = reflect.defineMetadata, hasOwnMetadata2 = reflect.hasOwnMetadata, getOwnMetadata2 = reflect.getOwnMetadata, getOwnMetadataKeys2 = reflect.getOwnMetadataKeys, deleteMetadata2 = reflect.deleteMetadata;
            var metadataOwner = new _WeakMap();
            var provider = {
              isProviderFor: function(O, P) {
                var metadataPropertySet = metadataOwner.get(O);
                if (!IsUndefined(metadataPropertySet) && metadataPropertySet.has(P)) {
                  return true;
                }
                if (getOwnMetadataKeys2(O, P).length) {
                  if (IsUndefined(metadataPropertySet)) {
                    metadataPropertySet = new _Set();
                    metadataOwner.set(O, metadataPropertySet);
                  }
                  metadataPropertySet.add(P);
                  return true;
                }
                return false;
              },
              OrdinaryDefineOwnMetadata: defineMetadata2,
              OrdinaryHasOwnMetadata: hasOwnMetadata2,
              OrdinaryGetOwnMetadata: getOwnMetadata2,
              OrdinaryOwnMetadataKeys: getOwnMetadataKeys2,
              OrdinaryDeleteMetadata: deleteMetadata2
            };
            return provider;
          }
          function GetMetadataProvider(O, P, Create) {
            var registeredProvider = metadataRegistry.getProvider(O, P);
            if (!IsUndefined(registeredProvider)) {
              return registeredProvider;
            }
            if (Create) {
              if (metadataRegistry.setProvider(O, P, metadataProvider)) {
                return metadataProvider;
              }
              throw new Error("Illegal state.");
            }
            return void 0;
          }
          function CreateMapPolyfill() {
            var cacheSentinel = {};
            var arraySentinel = [];
            var MapIterator = (
              /** @class */
              function() {
                function MapIterator2(keys, values, selector) {
                  this._index = 0;
                  this._keys = keys;
                  this._values = values;
                  this._selector = selector;
                }
                MapIterator2.prototype["@@iterator"] = function() {
                  return this;
                };
                MapIterator2.prototype[iteratorSymbol] = function() {
                  return this;
                };
                MapIterator2.prototype.next = function() {
                  var index = this._index;
                  if (index >= 0 && index < this._keys.length) {
                    var result = this._selector(this._keys[index], this._values[index]);
                    if (index + 1 >= this._keys.length) {
                      this._index = -1;
                      this._keys = arraySentinel;
                      this._values = arraySentinel;
                    } else {
                      this._index++;
                    }
                    return { value: result, done: false };
                  }
                  return { value: void 0, done: true };
                };
                MapIterator2.prototype.throw = function(error) {
                  if (this._index >= 0) {
                    this._index = -1;
                    this._keys = arraySentinel;
                    this._values = arraySentinel;
                  }
                  throw error;
                };
                MapIterator2.prototype.return = function(value) {
                  if (this._index >= 0) {
                    this._index = -1;
                    this._keys = arraySentinel;
                    this._values = arraySentinel;
                  }
                  return { value, done: true };
                };
                return MapIterator2;
              }()
            );
            var Map2 = (
              /** @class */
              function() {
                function Map3() {
                  this._keys = [];
                  this._values = [];
                  this._cacheKey = cacheSentinel;
                  this._cacheIndex = -2;
                }
                Object.defineProperty(Map3.prototype, "size", {
                  get: function() {
                    return this._keys.length;
                  },
                  enumerable: true,
                  configurable: true
                });
                Map3.prototype.has = function(key) {
                  return this._find(
                    key,
                    /*insert*/
                    false
                  ) >= 0;
                };
                Map3.prototype.get = function(key) {
                  var index = this._find(
                    key,
                    /*insert*/
                    false
                  );
                  return index >= 0 ? this._values[index] : void 0;
                };
                Map3.prototype.set = function(key, value) {
                  var index = this._find(
                    key,
                    /*insert*/
                    true
                  );
                  this._values[index] = value;
                  return this;
                };
                Map3.prototype.delete = function(key) {
                  var index = this._find(
                    key,
                    /*insert*/
                    false
                  );
                  if (index >= 0) {
                    var size = this._keys.length;
                    for (var i = index + 1; i < size; i++) {
                      this._keys[i - 1] = this._keys[i];
                      this._values[i - 1] = this._values[i];
                    }
                    this._keys.length--;
                    this._values.length--;
                    if (SameValueZero(key, this._cacheKey)) {
                      this._cacheKey = cacheSentinel;
                      this._cacheIndex = -2;
                    }
                    return true;
                  }
                  return false;
                };
                Map3.prototype.clear = function() {
                  this._keys.length = 0;
                  this._values.length = 0;
                  this._cacheKey = cacheSentinel;
                  this._cacheIndex = -2;
                };
                Map3.prototype.keys = function() {
                  return new MapIterator(this._keys, this._values, getKey);
                };
                Map3.prototype.values = function() {
                  return new MapIterator(this._keys, this._values, getValue);
                };
                Map3.prototype.entries = function() {
                  return new MapIterator(this._keys, this._values, getEntry);
                };
                Map3.prototype["@@iterator"] = function() {
                  return this.entries();
                };
                Map3.prototype[iteratorSymbol] = function() {
                  return this.entries();
                };
                Map3.prototype._find = function(key, insert) {
                  if (!SameValueZero(this._cacheKey, key)) {
                    this._cacheIndex = -1;
                    for (var i = 0; i < this._keys.length; i++) {
                      if (SameValueZero(this._keys[i], key)) {
                        this._cacheIndex = i;
                        break;
                      }
                    }
                  }
                  if (this._cacheIndex < 0 && insert) {
                    this._cacheIndex = this._keys.length;
                    this._keys.push(key);
                    this._values.push(void 0);
                  }
                  return this._cacheIndex;
                };
                return Map3;
              }()
            );
            return Map2;
            function getKey(key, _) {
              return key;
            }
            function getValue(_, value) {
              return value;
            }
            function getEntry(key, value) {
              return [key, value];
            }
          }
          function CreateSetPolyfill() {
            var Set2 = (
              /** @class */
              function() {
                function Set3() {
                  this._map = new _Map();
                }
                Object.defineProperty(Set3.prototype, "size", {
                  get: function() {
                    return this._map.size;
                  },
                  enumerable: true,
                  configurable: true
                });
                Set3.prototype.has = function(value) {
                  return this._map.has(value);
                };
                Set3.prototype.add = function(value) {
                  return this._map.set(value, value), this;
                };
                Set3.prototype.delete = function(value) {
                  return this._map.delete(value);
                };
                Set3.prototype.clear = function() {
                  this._map.clear();
                };
                Set3.prototype.keys = function() {
                  return this._map.keys();
                };
                Set3.prototype.values = function() {
                  return this._map.keys();
                };
                Set3.prototype.entries = function() {
                  return this._map.entries();
                };
                Set3.prototype["@@iterator"] = function() {
                  return this.keys();
                };
                Set3.prototype[iteratorSymbol] = function() {
                  return this.keys();
                };
                return Set3;
              }()
            );
            return Set2;
          }
          function CreateWeakMapPolyfill() {
            var UUID_SIZE = 16;
            var keys = HashMap.create();
            var rootKey = CreateUniqueKey();
            return (
              /** @class */
              function() {
                function WeakMap2() {
                  this._key = CreateUniqueKey();
                }
                WeakMap2.prototype.has = function(target) {
                  var table = GetOrCreateWeakMapTable(
                    target,
                    /*create*/
                    false
                  );
                  return table !== void 0 ? HashMap.has(table, this._key) : false;
                };
                WeakMap2.prototype.get = function(target) {
                  var table = GetOrCreateWeakMapTable(
                    target,
                    /*create*/
                    false
                  );
                  return table !== void 0 ? HashMap.get(table, this._key) : void 0;
                };
                WeakMap2.prototype.set = function(target, value) {
                  var table = GetOrCreateWeakMapTable(
                    target,
                    /*create*/
                    true
                  );
                  table[this._key] = value;
                  return this;
                };
                WeakMap2.prototype.delete = function(target) {
                  var table = GetOrCreateWeakMapTable(
                    target,
                    /*create*/
                    false
                  );
                  return table !== void 0 ? delete table[this._key] : false;
                };
                WeakMap2.prototype.clear = function() {
                  this._key = CreateUniqueKey();
                };
                return WeakMap2;
              }()
            );
            function CreateUniqueKey() {
              var key;
              do
                key = "@@WeakMap@@" + CreateUUID();
              while (HashMap.has(keys, key));
              keys[key] = true;
              return key;
            }
            function GetOrCreateWeakMapTable(target, create) {
              if (!hasOwn.call(target, rootKey)) {
                if (!create)
                  return void 0;
                Object.defineProperty(target, rootKey, { value: HashMap.create() });
              }
              return target[rootKey];
            }
            function FillRandomBytes(buffer, size) {
              for (var i = 0; i < size; ++i)
                buffer[i] = Math.random() * 255 | 0;
              return buffer;
            }
            function GenRandomBytes(size) {
              if (typeof Uint8Array === "function") {
                var array = new Uint8Array(size);
                if (typeof crypto !== "undefined") {
                  crypto.getRandomValues(array);
                } else if (typeof msCrypto !== "undefined") {
                  msCrypto.getRandomValues(array);
                } else {
                  FillRandomBytes(array, size);
                }
                return array;
              }
              return FillRandomBytes(new Array(size), size);
            }
            function CreateUUID() {
              var data = GenRandomBytes(UUID_SIZE);
              data[6] = data[6] & 79 | 64;
              data[8] = data[8] & 191 | 128;
              var result = "";
              for (var offset = 0; offset < UUID_SIZE; ++offset) {
                var byte = data[offset];
                if (offset === 4 || offset === 6 || offset === 8)
                  result += "-";
                if (byte < 16)
                  result += "0";
                result += byte.toString(16).toLowerCase();
              }
              return result;
            }
          }
          function MakeDictionary(obj) {
            obj.__ = void 0;
            delete obj.__;
            return obj;
          }
        });
      })(Reflect2 || (Reflect2 = {}));
    }
  });

  // node_modules/.pnpm/buttplug@3.2.2/node_modules/buttplug/dist/main/src/core/Messages.js
  var require_Messages = __commonJS({
    "node_modules/.pnpm/buttplug@3.2.2/node_modules/buttplug/dist/main/src/core/Messages.js"(exports) {
      "use strict";
      var __decorate = exports && exports.__decorate || function(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
          r = Reflect.decorate(decorators, target, key, desc);
        else
          for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
              r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };
      var __metadata = exports && exports.__metadata || function(k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
          return Reflect.metadata(k, v);
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.RawReading = exports.RawUnsubscribeCmd = exports.RawSubscribeCmd = exports.RawWriteCmd = exports.RawReadCmd = exports.SensorReading = exports.SensorReadCmd = exports.LinearCmd = exports.VectorSubcommand = exports.RotateCmd = exports.RotateSubcommand = exports.ScalarCmd = exports.ScalarSubcommand = exports.GenericMessageSubcommand = exports.StopAllDevices = exports.StopDeviceCmd = exports.ServerInfo = exports.RequestServerInfo = exports.ScanningFinished = exports.StopScanning = exports.StartScanning = exports.RequestDeviceList = exports.DeviceRemoved = exports.DeviceAdded = exports.DeviceList = exports.DeviceInfo = exports.Error = exports.ErrorClass = exports.Ping = exports.Ok = exports.ButtplugSystemMessage = exports.ButtplugDeviceMessage = exports.ButtplugMessage = exports.SensorDeviceMessageAttributes = exports.RawDeviceMessageAttributes = exports.GenericDeviceMessageAttributes = exports.SensorType = exports.ActuatorType = exports.MessageAttributes = exports.MESSAGE_SPEC_VERSION = exports.MAX_ID = exports.DEFAULT_MESSAGE_ID = exports.SYSTEM_MESSAGE_ID = void 0;
      var class_transformer_1 = require_cjs();
      require_Reflect();
      exports.SYSTEM_MESSAGE_ID = 0;
      exports.DEFAULT_MESSAGE_ID = 1;
      exports.MAX_ID = 4294967295;
      exports.MESSAGE_SPEC_VERSION = 3;
      var MessageAttributes = class {
        constructor(data) {
          Object.assign(this, data);
        }
        update() {
          var _a, _b, _c, _d, _e;
          (_a = this.ScalarCmd) === null || _a === void 0 ? void 0 : _a.forEach((x, i) => x.Index = i);
          (_b = this.RotateCmd) === null || _b === void 0 ? void 0 : _b.forEach((x, i) => x.Index = i);
          (_c = this.LinearCmd) === null || _c === void 0 ? void 0 : _c.forEach((x, i) => x.Index = i);
          (_d = this.SensorReadCmd) === null || _d === void 0 ? void 0 : _d.forEach((x, i) => x.Index = i);
          (_e = this.SensorSubscribeCmd) === null || _e === void 0 ? void 0 : _e.forEach((x, i) => x.Index = i);
        }
      };
      exports.MessageAttributes = MessageAttributes;
      var ActuatorType;
      (function(ActuatorType2) {
        ActuatorType2["Unknown"] = "Unknown";
        ActuatorType2["Vibrate"] = "Vibrate";
        ActuatorType2["Rotate"] = "Rotate";
        ActuatorType2["Oscillate"] = "Oscillate";
        ActuatorType2["Constrict"] = "Constrict";
        ActuatorType2["Inflate"] = "Inflate";
        ActuatorType2["Position"] = "Position";
      })(ActuatorType || (exports.ActuatorType = ActuatorType = {}));
      var SensorType;
      (function(SensorType2) {
        SensorType2["Unknown"] = "Unknown";
        SensorType2["Battery"] = "Battery";
        SensorType2["RSSI"] = "RSSI";
        SensorType2["Button"] = "Button";
        SensorType2["Pressure"] = "Pressure";
      })(SensorType || (exports.SensorType = SensorType = {}));
      var GenericDeviceMessageAttributes = class {
        constructor(data) {
          this.Index = 0;
          Object.assign(this, data);
        }
      };
      exports.GenericDeviceMessageAttributes = GenericDeviceMessageAttributes;
      var RawDeviceMessageAttributes = class {
        constructor(Endpoints) {
          this.Endpoints = Endpoints;
        }
      };
      exports.RawDeviceMessageAttributes = RawDeviceMessageAttributes;
      var SensorDeviceMessageAttributes = class {
        constructor(data) {
          this.Index = 0;
          Object.assign(this, data);
        }
      };
      exports.SensorDeviceMessageAttributes = SensorDeviceMessageAttributes;
      var ButtplugMessage = class {
        constructor(Id) {
          this.Id = Id;
        }
        // tslint:disable-next-line:ban-types
        get Type() {
          return this.constructor;
        }
        toJSON() {
          return JSON.stringify(this.toProtocolFormat());
        }
        toProtocolFormat() {
          const jsonObj = {};
          jsonObj[this.constructor.Name] = (0, class_transformer_1.instanceToPlain)(this);
          return jsonObj;
        }
        update() {
        }
      };
      exports.ButtplugMessage = ButtplugMessage;
      var ButtplugDeviceMessage = class extends ButtplugMessage {
        constructor(DeviceIndex, Id) {
          super(Id);
          this.DeviceIndex = DeviceIndex;
          this.Id = Id;
        }
      };
      exports.ButtplugDeviceMessage = ButtplugDeviceMessage;
      var ButtplugSystemMessage = class extends ButtplugMessage {
        constructor(Id = exports.SYSTEM_MESSAGE_ID) {
          super(Id);
          this.Id = Id;
        }
      };
      exports.ButtplugSystemMessage = ButtplugSystemMessage;
      var Ok = class extends ButtplugSystemMessage {
        constructor(Id = exports.DEFAULT_MESSAGE_ID) {
          super(Id);
          this.Id = Id;
        }
      };
      exports.Ok = Ok;
      Ok.Name = "Ok";
      var Ping = class extends ButtplugMessage {
        constructor(Id = exports.DEFAULT_MESSAGE_ID) {
          super(Id);
          this.Id = Id;
        }
      };
      exports.Ping = Ping;
      Ping.Name = "Ping";
      var ErrorClass;
      (function(ErrorClass2) {
        ErrorClass2[ErrorClass2["ERROR_UNKNOWN"] = 0] = "ERROR_UNKNOWN";
        ErrorClass2[ErrorClass2["ERROR_INIT"] = 1] = "ERROR_INIT";
        ErrorClass2[ErrorClass2["ERROR_PING"] = 2] = "ERROR_PING";
        ErrorClass2[ErrorClass2["ERROR_MSG"] = 3] = "ERROR_MSG";
        ErrorClass2[ErrorClass2["ERROR_DEVICE"] = 4] = "ERROR_DEVICE";
      })(ErrorClass || (exports.ErrorClass = ErrorClass = {}));
      var Error2 = class extends ButtplugMessage {
        constructor(ErrorMessage, ErrorCode = ErrorClass.ERROR_UNKNOWN, Id = exports.DEFAULT_MESSAGE_ID) {
          super(Id);
          this.ErrorMessage = ErrorMessage;
          this.ErrorCode = ErrorCode;
          this.Id = Id;
        }
        get Schemversion() {
          return 0;
        }
      };
      exports.Error = Error2;
      Error2.Name = "Error";
      var DeviceInfo = class {
        constructor(data) {
          Object.assign(this, data);
        }
      };
      exports.DeviceInfo = DeviceInfo;
      __decorate([
        (0, class_transformer_1.Type)(() => MessageAttributes),
        __metadata("design:type", MessageAttributes)
      ], DeviceInfo.prototype, "DeviceMessages", void 0);
      var DeviceList = class extends ButtplugMessage {
        constructor(devices2, id = exports.DEFAULT_MESSAGE_ID) {
          super(id);
          this.Devices = devices2;
          this.Id = id;
        }
        update() {
          for (const device of this.Devices) {
            device.DeviceMessages.update();
          }
        }
      };
      exports.DeviceList = DeviceList;
      DeviceList.Name = "DeviceList";
      __decorate([
        (0, class_transformer_1.Type)(() => DeviceInfo),
        __metadata("design:type", Array)
      ], DeviceList.prototype, "Devices", void 0);
      var DeviceAdded = class extends ButtplugSystemMessage {
        constructor(data) {
          super();
          Object.assign(this, data);
        }
        update() {
          this.DeviceMessages.update();
        }
      };
      exports.DeviceAdded = DeviceAdded;
      DeviceAdded.Name = "DeviceAdded";
      __decorate([
        (0, class_transformer_1.Type)(() => MessageAttributes),
        __metadata("design:type", MessageAttributes)
      ], DeviceAdded.prototype, "DeviceMessages", void 0);
      var DeviceRemoved = class extends ButtplugSystemMessage {
        constructor(DeviceIndex) {
          super();
          this.DeviceIndex = DeviceIndex;
        }
      };
      exports.DeviceRemoved = DeviceRemoved;
      DeviceRemoved.Name = "DeviceRemoved";
      var RequestDeviceList = class extends ButtplugMessage {
        constructor(Id = exports.DEFAULT_MESSAGE_ID) {
          super(Id);
          this.Id = Id;
        }
      };
      exports.RequestDeviceList = RequestDeviceList;
      RequestDeviceList.Name = "RequestDeviceList";
      var StartScanning = class extends ButtplugMessage {
        constructor(Id = exports.DEFAULT_MESSAGE_ID) {
          super(Id);
          this.Id = Id;
        }
      };
      exports.StartScanning = StartScanning;
      StartScanning.Name = "StartScanning";
      var StopScanning = class extends ButtplugMessage {
        constructor(Id = exports.DEFAULT_MESSAGE_ID) {
          super(Id);
          this.Id = Id;
        }
      };
      exports.StopScanning = StopScanning;
      StopScanning.Name = "StopScanning";
      var ScanningFinished = class extends ButtplugSystemMessage {
        constructor() {
          super();
        }
      };
      exports.ScanningFinished = ScanningFinished;
      ScanningFinished.Name = "ScanningFinished";
      var RequestServerInfo = class extends ButtplugMessage {
        constructor(ClientName, MessageVersion = 0, Id = exports.DEFAULT_MESSAGE_ID) {
          super(Id);
          this.ClientName = ClientName;
          this.MessageVersion = MessageVersion;
          this.Id = Id;
        }
      };
      exports.RequestServerInfo = RequestServerInfo;
      RequestServerInfo.Name = "RequestServerInfo";
      var ServerInfo = class extends ButtplugSystemMessage {
        constructor(MessageVersion, MaxPingTime, ServerName, Id = exports.DEFAULT_MESSAGE_ID) {
          super();
          this.MessageVersion = MessageVersion;
          this.MaxPingTime = MaxPingTime;
          this.ServerName = ServerName;
          this.Id = Id;
        }
      };
      exports.ServerInfo = ServerInfo;
      ServerInfo.Name = "ServerInfo";
      var StopDeviceCmd = class extends ButtplugDeviceMessage {
        constructor(DeviceIndex = -1, Id = exports.DEFAULT_MESSAGE_ID) {
          super(DeviceIndex, Id);
          this.DeviceIndex = DeviceIndex;
          this.Id = Id;
        }
      };
      exports.StopDeviceCmd = StopDeviceCmd;
      StopDeviceCmd.Name = "StopDeviceCmd";
      var StopAllDevices = class extends ButtplugMessage {
        constructor(Id = exports.DEFAULT_MESSAGE_ID) {
          super(Id);
          this.Id = Id;
        }
      };
      exports.StopAllDevices = StopAllDevices;
      StopAllDevices.Name = "StopAllDevices";
      var GenericMessageSubcommand = class {
        constructor(Index) {
          this.Index = Index;
        }
      };
      exports.GenericMessageSubcommand = GenericMessageSubcommand;
      var ScalarSubcommand = class extends GenericMessageSubcommand {
        constructor(Index, Scalar, ActuatorType2) {
          super(Index);
          this.Scalar = Scalar;
          this.ActuatorType = ActuatorType2;
        }
      };
      exports.ScalarSubcommand = ScalarSubcommand;
      var ScalarCmd = class extends ButtplugDeviceMessage {
        constructor(Scalars, DeviceIndex = -1, Id = exports.DEFAULT_MESSAGE_ID) {
          super(DeviceIndex, Id);
          this.Scalars = Scalars;
          this.DeviceIndex = DeviceIndex;
          this.Id = Id;
        }
      };
      exports.ScalarCmd = ScalarCmd;
      ScalarCmd.Name = "ScalarCmd";
      var RotateSubcommand = class extends GenericMessageSubcommand {
        constructor(Index, Speed, Clockwise) {
          super(Index);
          this.Speed = Speed;
          this.Clockwise = Clockwise;
        }
      };
      exports.RotateSubcommand = RotateSubcommand;
      var RotateCmd = class extends ButtplugDeviceMessage {
        static Create(deviceIndex, commands) {
          const cmdList = new Array();
          let i = 0;
          for (const [speed, clockwise] of commands) {
            cmdList.push(new RotateSubcommand(i, speed, clockwise));
            ++i;
          }
          return new RotateCmd(cmdList, deviceIndex);
        }
        constructor(Rotations, DeviceIndex = -1, Id = exports.DEFAULT_MESSAGE_ID) {
          super(DeviceIndex, Id);
          this.Rotations = Rotations;
          this.DeviceIndex = DeviceIndex;
          this.Id = Id;
        }
      };
      exports.RotateCmd = RotateCmd;
      RotateCmd.Name = "RotateCmd";
      var VectorSubcommand = class extends GenericMessageSubcommand {
        constructor(Index, Position, Duration) {
          super(Index);
          this.Position = Position;
          this.Duration = Duration;
        }
      };
      exports.VectorSubcommand = VectorSubcommand;
      var LinearCmd = class extends ButtplugDeviceMessage {
        static Create(deviceIndex, commands) {
          const cmdList = new Array();
          let i = 0;
          for (const cmd of commands) {
            cmdList.push(new VectorSubcommand(i, cmd[0], cmd[1]));
            ++i;
          }
          return new LinearCmd(cmdList, deviceIndex);
        }
        constructor(Vectors, DeviceIndex = -1, Id = exports.DEFAULT_MESSAGE_ID) {
          super(DeviceIndex, Id);
          this.Vectors = Vectors;
          this.DeviceIndex = DeviceIndex;
          this.Id = Id;
        }
      };
      exports.LinearCmd = LinearCmd;
      LinearCmd.Name = "LinearCmd";
      var SensorReadCmd = class extends ButtplugDeviceMessage {
        constructor(DeviceIndex, SensorIndex, SensorType2, Id = exports.DEFAULT_MESSAGE_ID) {
          super(DeviceIndex, Id);
          this.DeviceIndex = DeviceIndex;
          this.SensorIndex = SensorIndex;
          this.SensorType = SensorType2;
          this.Id = Id;
        }
      };
      exports.SensorReadCmd = SensorReadCmd;
      SensorReadCmd.Name = "SensorReadCmd";
      var SensorReading = class extends ButtplugDeviceMessage {
        constructor(DeviceIndex, SensorIndex, SensorType2, Data, Id = exports.DEFAULT_MESSAGE_ID) {
          super(DeviceIndex, Id);
          this.DeviceIndex = DeviceIndex;
          this.SensorIndex = SensorIndex;
          this.SensorType = SensorType2;
          this.Data = Data;
          this.Id = Id;
        }
      };
      exports.SensorReading = SensorReading;
      SensorReading.Name = "SensorReading";
      var RawReadCmd = class extends ButtplugDeviceMessage {
        constructor(DeviceIndex, Endpoint, ExpectedLength, Timeout, Id = exports.DEFAULT_MESSAGE_ID) {
          super(DeviceIndex, Id);
          this.DeviceIndex = DeviceIndex;
          this.Endpoint = Endpoint;
          this.ExpectedLength = ExpectedLength;
          this.Timeout = Timeout;
          this.Id = Id;
        }
      };
      exports.RawReadCmd = RawReadCmd;
      RawReadCmd.Name = "RawReadCmd";
      var RawWriteCmd = class extends ButtplugDeviceMessage {
        constructor(DeviceIndex, Endpoint, Data, WriteWithResponse, Id = exports.DEFAULT_MESSAGE_ID) {
          super(DeviceIndex, Id);
          this.DeviceIndex = DeviceIndex;
          this.Endpoint = Endpoint;
          this.Data = Data;
          this.WriteWithResponse = WriteWithResponse;
          this.Id = Id;
        }
      };
      exports.RawWriteCmd = RawWriteCmd;
      RawWriteCmd.Name = "RawWriteCmd";
      var RawSubscribeCmd = class extends ButtplugDeviceMessage {
        constructor(DeviceIndex, Endpoint, Id = exports.DEFAULT_MESSAGE_ID) {
          super(DeviceIndex, Id);
          this.DeviceIndex = DeviceIndex;
          this.Endpoint = Endpoint;
          this.Id = Id;
        }
      };
      exports.RawSubscribeCmd = RawSubscribeCmd;
      RawSubscribeCmd.Name = "RawSubscribeCmd";
      var RawUnsubscribeCmd = class extends ButtplugDeviceMessage {
        constructor(DeviceIndex, Endpoint, Id = exports.DEFAULT_MESSAGE_ID) {
          super(DeviceIndex, Id);
          this.DeviceIndex = DeviceIndex;
          this.Endpoint = Endpoint;
          this.Id = Id;
        }
      };
      exports.RawUnsubscribeCmd = RawUnsubscribeCmd;
      RawUnsubscribeCmd.Name = "RawUnsubscribeCmd";
      var RawReading = class extends ButtplugDeviceMessage {
        constructor(DeviceIndex, Endpoint, Data, Id = exports.DEFAULT_MESSAGE_ID) {
          super(DeviceIndex, Id);
          this.DeviceIndex = DeviceIndex;
          this.Endpoint = Endpoint;
          this.Data = Data;
          this.Id = Id;
        }
      };
      exports.RawReading = RawReading;
      RawReading.Name = "RawReading";
    }
  });

  // node_modules/.pnpm/buttplug@3.2.2/node_modules/buttplug/dist/main/src/core/Exceptions.js
  var require_Exceptions = __commonJS({
    "node_modules/.pnpm/buttplug@3.2.2/node_modules/buttplug/dist/main/src/core/Exceptions.js"(exports) {
      "use strict";
      var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
          desc = { enumerable: true, get: function() {
            return m[k];
          } };
        }
        Object.defineProperty(o, k2, desc);
      } : function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        o[k2] = m[k];
      });
      var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
      } : function(o, v) {
        o["default"] = v;
      });
      var __importStar = exports && exports.__importStar || function(mod) {
        if (mod && mod.__esModule)
          return mod;
        var result = {};
        if (mod != null) {
          for (var k in mod)
            if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
              __createBinding(result, mod, k);
        }
        __setModuleDefault(result, mod);
        return result;
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.ButtplugUnknownError = exports.ButtplugPingError = exports.ButtplugMessageError = exports.ButtplugDeviceError = exports.ButtplugInitError = exports.ButtplugError = void 0;
      var Messages = __importStar(require_Messages());
      var ButtplugError = class extends Error {
        get ErrorClass() {
          return this.errorClass;
        }
        get InnerError() {
          return this.innerError;
        }
        get Id() {
          return this.messageId;
        }
        get ErrorMessage() {
          return new Messages.Error(this.message, this.ErrorClass, this.Id);
        }
        static LogAndError(constructor, logger, message, id = Messages.SYSTEM_MESSAGE_ID) {
          logger.Error(message);
          return new constructor(message, id);
        }
        static FromError(error) {
          switch (error.ErrorCode) {
            case Messages.ErrorClass.ERROR_DEVICE:
              return new ButtplugDeviceError(error.ErrorMessage, error.Id);
            case Messages.ErrorClass.ERROR_INIT:
              return new ButtplugInitError(error.ErrorMessage, error.Id);
            case Messages.ErrorClass.ERROR_UNKNOWN:
              return new ButtplugUnknownError(error.ErrorMessage, error.Id);
            case Messages.ErrorClass.ERROR_PING:
              return new ButtplugPingError(error.ErrorMessage, error.Id);
            case Messages.ErrorClass.ERROR_MSG:
              return new ButtplugMessageError(error.ErrorMessage, error.Id);
            default:
              throw new Error(`Message type ${error.ErrorCode} not handled`);
          }
        }
        constructor(message, errorClass, id = Messages.SYSTEM_MESSAGE_ID, inner) {
          super(message);
          this.errorClass = Messages.ErrorClass.ERROR_UNKNOWN;
          this.errorClass = errorClass;
          this.innerError = inner;
          this.messageId = id;
        }
      };
      exports.ButtplugError = ButtplugError;
      var ButtplugInitError = class extends ButtplugError {
        constructor(message, id = Messages.SYSTEM_MESSAGE_ID) {
          super(message, Messages.ErrorClass.ERROR_INIT, id);
        }
      };
      exports.ButtplugInitError = ButtplugInitError;
      var ButtplugDeviceError = class extends ButtplugError {
        constructor(message, id = Messages.SYSTEM_MESSAGE_ID) {
          super(message, Messages.ErrorClass.ERROR_DEVICE, id);
        }
      };
      exports.ButtplugDeviceError = ButtplugDeviceError;
      var ButtplugMessageError = class extends ButtplugError {
        constructor(message, id = Messages.SYSTEM_MESSAGE_ID) {
          super(message, Messages.ErrorClass.ERROR_MSG, id);
        }
      };
      exports.ButtplugMessageError = ButtplugMessageError;
      var ButtplugPingError = class extends ButtplugError {
        constructor(message, id = Messages.SYSTEM_MESSAGE_ID) {
          super(message, Messages.ErrorClass.ERROR_PING, id);
        }
      };
      exports.ButtplugPingError = ButtplugPingError;
      var ButtplugUnknownError = class extends ButtplugError {
        constructor(message, id = Messages.SYSTEM_MESSAGE_ID) {
          super(message, Messages.ErrorClass.ERROR_UNKNOWN, id);
        }
      };
      exports.ButtplugUnknownError = ButtplugUnknownError;
    }
  });

  // node_modules/.pnpm/buttplug@3.2.2/node_modules/buttplug/dist/main/src/core/MessageUtils.js
  var require_MessageUtils = __commonJS({
    "node_modules/.pnpm/buttplug@3.2.2/node_modules/buttplug/dist/main/src/core/MessageUtils.js"(exports) {
      "use strict";
      var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
          desc = { enumerable: true, get: function() {
            return m[k];
          } };
        }
        Object.defineProperty(o, k2, desc);
      } : function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        o[k2] = m[k];
      });
      var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
      } : function(o, v) {
        o["default"] = v;
      });
      var __importStar = exports && exports.__importStar || function(mod) {
        if (mod && mod.__esModule)
          return mod;
        var result = {};
        if (mod != null) {
          for (var k in mod)
            if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
              __createBinding(result, mod, k);
        }
        __setModuleDefault(result, mod);
        return result;
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.fromJSON = exports.getMessageClassFromMessage = void 0;
      var class_transformer_1 = require_cjs();
      var Messages = __importStar(require_Messages());
      function getMessageClass(type) {
        for (const value of Object.values(Messages)) {
          if (typeof value === "function" && "Name" in value && value.Name === type) {
            return value;
          }
        }
        return null;
      }
      function getMessageClassFromMessage(msg) {
        return getMessageClass(Object.getPrototypeOf(msg).constructor.Name);
      }
      exports.getMessageClassFromMessage = getMessageClassFromMessage;
      function fromJSON(str) {
        const msgarray = JSON.parse(str);
        const msgs = [];
        for (const x of Array.from(msgarray)) {
          const type = Object.getOwnPropertyNames(x)[0];
          const cls = getMessageClass(type);
          if (cls) {
            const msg = (0, class_transformer_1.plainToInstance)(cls, x[type]);
            msg.update();
            msgs.push(msg);
          }
        }
        return msgs;
      }
      exports.fromJSON = fromJSON;
    }
  });

  // node_modules/.pnpm/buttplug@3.2.2/node_modules/buttplug/dist/main/src/client/ButtplugClientDevice.js
  var require_ButtplugClientDevice = __commonJS({
    "node_modules/.pnpm/buttplug@3.2.2/node_modules/buttplug/dist/main/src/client/ButtplugClientDevice.js"(exports) {
      "use strict";
      var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
          desc = { enumerable: true, get: function() {
            return m[k];
          } };
        }
        Object.defineProperty(o, k2, desc);
      } : function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        o[k2] = m[k];
      });
      var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
      } : function(o, v) {
        o["default"] = v;
      });
      var __importStar = exports && exports.__importStar || function(mod) {
        if (mod && mod.__esModule)
          return mod;
        var result = {};
        if (mod != null) {
          for (var k in mod)
            if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
              __createBinding(result, mod, k);
        }
        __setModuleDefault(result, mod);
        return result;
      };
      var __awaiter = exports && exports.__awaiter || function(thisArg, _arguments, P, generator) {
        function adopt(value) {
          return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
          });
        }
        return new (P || (P = Promise))(function(resolve, reject) {
          function fulfilled(value) {
            try {
              step(generator.next(value));
            } catch (e) {
              reject(e);
            }
          }
          function rejected(value) {
            try {
              step(generator["throw"](value));
            } catch (e) {
              reject(e);
            }
          }
          function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
          }
          step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.ButtplugClientDevice = void 0;
      var Messages = __importStar(require_Messages());
      var Exceptions_1 = require_Exceptions();
      var eventemitter3_1 = require_eventemitter3();
      var MessageUtils_1 = require_MessageUtils();
      var ButtplugClientDevice = class extends eventemitter3_1.EventEmitter {
        /**
         * Return the name of the device.
         */
        get name() {
          return this._deviceInfo.DeviceName;
        }
        /**
         * Return the user set name of the device.
         */
        get displayName() {
          return this._deviceInfo.DeviceDisplayName;
        }
        /**
         * Return the index of the device.
         */
        get index() {
          return this._deviceInfo.DeviceIndex;
        }
        /**
         * Return the index of the device.
         */
        get messageTimingGap() {
          return this._deviceInfo.DeviceMessageTimingGap;
        }
        /**
         * Return a list of message types the device accepts.
         */
        get messageAttributes() {
          return this._deviceInfo.DeviceMessages;
        }
        static fromMsg(msg, sendClosure) {
          return new ButtplugClientDevice(msg, sendClosure);
        }
        /**
         * @param _index Index of the device, as created by the device manager.
         * @param _name Name of the device.
         * @param allowedMsgs Buttplug messages the device can receive.
         */
        constructor(_deviceInfo, _sendClosure) {
          super();
          this._deviceInfo = _deviceInfo;
          this._sendClosure = _sendClosure;
          this.allowedMsgs = /* @__PURE__ */ new Map();
          _deviceInfo.DeviceMessages.update();
        }
        send(msg) {
          return __awaiter(this, void 0, void 0, function* () {
            return yield this._sendClosure(this, msg);
          });
        }
        sendExpectOk(msg) {
          return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.send(msg);
            switch ((0, MessageUtils_1.getMessageClassFromMessage)(response)) {
              case Messages.Ok:
                return;
              case Messages.Error:
                throw Exceptions_1.ButtplugError.FromError(response);
              default:
                throw new Exceptions_1.ButtplugMessageError(`Message type ${response.constructor} not handled by SendMsgExpectOk`);
            }
          });
        }
        scalar(scalar) {
          return __awaiter(this, void 0, void 0, function* () {
            if (Array.isArray(scalar)) {
              yield this.sendExpectOk(new Messages.ScalarCmd(scalar, this.index));
            } else {
              yield this.sendExpectOk(new Messages.ScalarCmd([scalar], this.index));
            }
          });
        }
        scalarCommandBuilder(speed, actuator) {
          var _a;
          return __awaiter(this, void 0, void 0, function* () {
            const scalarAttrs = (_a = this.messageAttributes.ScalarCmd) === null || _a === void 0 ? void 0 : _a.filter((x) => x.ActuatorType === actuator);
            if (!scalarAttrs || scalarAttrs.length === 0) {
              throw new Exceptions_1.ButtplugDeviceError(`Device ${this.name} has no ${actuator} capabilities`);
            }
            const cmds = [];
            if (typeof speed === "number") {
              scalarAttrs.forEach((x) => cmds.push(new Messages.ScalarSubcommand(x.Index, speed, actuator)));
            } else if (Array.isArray(speed)) {
              if (speed.length > scalarAttrs.length) {
                throw new Exceptions_1.ButtplugDeviceError(`${speed.length} commands send to a device with ${scalarAttrs.length} vibrators`);
              }
              scalarAttrs.forEach((x, i) => {
                cmds.push(new Messages.ScalarSubcommand(x.Index, speed[i], actuator));
              });
            } else {
              throw new Exceptions_1.ButtplugDeviceError(`${actuator} can only take numbers or arrays of numbers.`);
            }
            yield this.scalar(cmds);
          });
        }
        get vibrateAttributes() {
          var _a, _b;
          return (_b = (_a = this.messageAttributes.ScalarCmd) === null || _a === void 0 ? void 0 : _a.filter((x) => x.ActuatorType === Messages.ActuatorType.Vibrate)) !== null && _b !== void 0 ? _b : [];
        }
        vibrate(speed) {
          return __awaiter(this, void 0, void 0, function* () {
            yield this.scalarCommandBuilder(speed, Messages.ActuatorType.Vibrate);
          });
        }
        get oscillateAttributes() {
          var _a, _b;
          return (_b = (_a = this.messageAttributes.ScalarCmd) === null || _a === void 0 ? void 0 : _a.filter((x) => x.ActuatorType === Messages.ActuatorType.Oscillate)) !== null && _b !== void 0 ? _b : [];
        }
        oscillate(speed) {
          return __awaiter(this, void 0, void 0, function* () {
            yield this.scalarCommandBuilder(speed, Messages.ActuatorType.Oscillate);
          });
        }
        get rotateAttributes() {
          var _a;
          return (_a = this.messageAttributes.RotateCmd) !== null && _a !== void 0 ? _a : [];
        }
        rotate(values, clockwise) {
          return __awaiter(this, void 0, void 0, function* () {
            const rotateAttrs = this.messageAttributes.RotateCmd;
            if (!rotateAttrs || rotateAttrs.length === 0) {
              throw new Exceptions_1.ButtplugDeviceError(`Device ${this.name} has no Rotate capabilities`);
            }
            let msg;
            if (typeof values === "number") {
              msg = Messages.RotateCmd.Create(this.index, new Array(rotateAttrs.length).fill([values, clockwise]));
            } else if (Array.isArray(values)) {
              msg = Messages.RotateCmd.Create(this.index, values);
            } else {
              throw new Exceptions_1.ButtplugDeviceError("SendRotateCmd can only take a number and boolean, or an array of number/boolean tuples");
            }
            yield this.sendExpectOk(msg);
          });
        }
        get linearAttributes() {
          var _a;
          return (_a = this.messageAttributes.LinearCmd) !== null && _a !== void 0 ? _a : [];
        }
        linear(values, duration) {
          return __awaiter(this, void 0, void 0, function* () {
            const linearAttrs = this.messageAttributes.LinearCmd;
            if (!linearAttrs || linearAttrs.length === 0) {
              throw new Exceptions_1.ButtplugDeviceError(`Device ${this.name} has no Linear capabilities`);
            }
            let msg;
            if (typeof values === "number") {
              msg = Messages.LinearCmd.Create(this.index, new Array(linearAttrs.length).fill([values, duration]));
            } else if (Array.isArray(values)) {
              msg = Messages.LinearCmd.Create(this.index, values);
            } else {
              throw new Exceptions_1.ButtplugDeviceError("SendLinearCmd can only take a number and number, or an array of number/number tuples");
            }
            yield this.sendExpectOk(msg);
          });
        }
        sensorRead(sensorIndex, sensorType) {
          return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.send(new Messages.SensorReadCmd(this.index, sensorIndex, sensorType));
            switch ((0, MessageUtils_1.getMessageClassFromMessage)(response)) {
              case Messages.SensorReading:
                return response.Data;
              case Messages.Error:
                throw Exceptions_1.ButtplugError.FromError(response);
              default:
                throw new Exceptions_1.ButtplugMessageError(`Message type ${response.constructor} not handled by sensorRead`);
            }
          });
        }
        get hasBattery() {
          var _a;
          const batteryAttrs = (_a = this.messageAttributes.SensorReadCmd) === null || _a === void 0 ? void 0 : _a.filter((x) => x.SensorType === Messages.SensorType.Battery);
          return batteryAttrs !== void 0 && batteryAttrs.length > 0;
        }
        battery() {
          var _a;
          return __awaiter(this, void 0, void 0, function* () {
            if (!this.hasBattery) {
              throw new Exceptions_1.ButtplugDeviceError(`Device ${this.name} has no Battery capabilities`);
            }
            const batteryAttrs = (_a = this.messageAttributes.SensorReadCmd) === null || _a === void 0 ? void 0 : _a.filter((x) => x.SensorType === Messages.SensorType.Battery);
            const result = yield this.sensorRead(batteryAttrs[0].Index, Messages.SensorType.Battery);
            return result[0] / 100;
          });
        }
        get hasRssi() {
          var _a;
          const rssiAttrs = (_a = this.messageAttributes.SensorReadCmd) === null || _a === void 0 ? void 0 : _a.filter((x) => x.SensorType === Messages.SensorType.RSSI);
          return rssiAttrs !== void 0 && rssiAttrs.length === 0;
        }
        rssi() {
          var _a;
          return __awaiter(this, void 0, void 0, function* () {
            if (!this.hasRssi) {
              throw new Exceptions_1.ButtplugDeviceError(`Device ${this.name} has no RSSI capabilities`);
            }
            const rssiAttrs = (_a = this.messageAttributes.SensorReadCmd) === null || _a === void 0 ? void 0 : _a.filter((x) => x.SensorType === Messages.SensorType.RSSI);
            const result = yield this.sensorRead(rssiAttrs[0].Index, Messages.SensorType.RSSI);
            return result[0];
          });
        }
        rawRead(endpoint, expectedLength, timeout) {
          return __awaiter(this, void 0, void 0, function* () {
            if (!this.messageAttributes.RawReadCmd) {
              throw new Exceptions_1.ButtplugDeviceError(`Device ${this.name} has no raw read capabilities`);
            }
            if (this.messageAttributes.RawReadCmd.Endpoints.indexOf(endpoint) === -1) {
              throw new Exceptions_1.ButtplugDeviceError(`Device ${this.name} has no raw readable endpoint ${endpoint}`);
            }
            const response = yield this.send(new Messages.RawReadCmd(this.index, endpoint, expectedLength, timeout));
            switch ((0, MessageUtils_1.getMessageClassFromMessage)(response)) {
              case Messages.RawReading:
                return new Uint8Array(response.Data);
              case Messages.Error:
                throw Exceptions_1.ButtplugError.FromError(response);
              default:
                throw new Exceptions_1.ButtplugMessageError(`Message type ${response.constructor} not handled by rawRead`);
            }
          });
        }
        rawWrite(endpoint, data, writeWithResponse) {
          return __awaiter(this, void 0, void 0, function* () {
            if (!this.messageAttributes.RawWriteCmd) {
              throw new Exceptions_1.ButtplugDeviceError(`Device ${this.name} has no raw write capabilities`);
            }
            if (this.messageAttributes.RawWriteCmd.Endpoints.indexOf(endpoint) === -1) {
              throw new Exceptions_1.ButtplugDeviceError(`Device ${this.name} has no raw writable endpoint ${endpoint}`);
            }
            yield this.sendExpectOk(new Messages.RawWriteCmd(this.index, endpoint, data, writeWithResponse));
          });
        }
        rawSubscribe(endpoint) {
          return __awaiter(this, void 0, void 0, function* () {
            if (!this.messageAttributes.RawSubscribeCmd) {
              throw new Exceptions_1.ButtplugDeviceError(`Device ${this.name} has no raw subscribe capabilities`);
            }
            if (this.messageAttributes.RawSubscribeCmd.Endpoints.indexOf(endpoint) === -1) {
              throw new Exceptions_1.ButtplugDeviceError(`Device ${this.name} has no raw subscribable endpoint ${endpoint}`);
            }
            yield this.sendExpectOk(new Messages.RawSubscribeCmd(this.index, endpoint));
          });
        }
        rawUnsubscribe(endpoint) {
          return __awaiter(this, void 0, void 0, function* () {
            if (!this.messageAttributes.RawSubscribeCmd) {
              throw new Exceptions_1.ButtplugDeviceError(`Device ${this.name} has no raw unsubscribe capabilities`);
            }
            if (this.messageAttributes.RawSubscribeCmd.Endpoints.indexOf(endpoint) === -1) {
              throw new Exceptions_1.ButtplugDeviceError(`Device ${this.name} has no raw unsubscribable endpoint ${endpoint}`);
            }
            yield this.sendExpectOk(new Messages.RawUnsubscribeCmd(this.index, endpoint));
          });
        }
        stop() {
          return __awaiter(this, void 0, void 0, function* () {
            yield this.sendExpectOk(new Messages.StopDeviceCmd(this.index));
          });
        }
        emitDisconnected() {
          this.emit("deviceremoved");
        }
      };
      exports.ButtplugClientDevice = ButtplugClientDevice;
    }
  });

  // node_modules/.pnpm/buttplug@3.2.2/node_modules/buttplug/dist/main/src/utils/ButtplugMessageSorter.js
  var require_ButtplugMessageSorter = __commonJS({
    "node_modules/.pnpm/buttplug@3.2.2/node_modules/buttplug/dist/main/src/utils/ButtplugMessageSorter.js"(exports) {
      "use strict";
      var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
          desc = { enumerable: true, get: function() {
            return m[k];
          } };
        }
        Object.defineProperty(o, k2, desc);
      } : function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        o[k2] = m[k];
      });
      var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
      } : function(o, v) {
        o["default"] = v;
      });
      var __importStar = exports && exports.__importStar || function(mod) {
        if (mod && mod.__esModule)
          return mod;
        var result = {};
        if (mod != null) {
          for (var k in mod)
            if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
              __createBinding(result, mod, k);
        }
        __setModuleDefault(result, mod);
        return result;
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.ButtplugMessageSorter = void 0;
      var Messages = __importStar(require_Messages());
      var Exceptions_1 = require_Exceptions();
      var ButtplugMessageSorter = class {
        constructor(_useCounter) {
          this._useCounter = _useCounter;
          this._counter = 1;
          this._waitingMsgs = /* @__PURE__ */ new Map();
        }
        // One of the places we should actually return a promise, as we need to store
        // them while waiting for them to return across the line.
        // tslint:disable:promise-function-async
        PrepareOutgoingMessage(msg) {
          if (this._useCounter) {
            msg.Id = this._counter;
            this._counter += 1;
          }
          let res;
          let rej;
          const msgPromise = new Promise((resolve, reject) => {
            res = resolve;
            rej = reject;
          });
          this._waitingMsgs.set(msg.Id, [res, rej]);
          return msgPromise;
        }
        ParseIncomingMessages(msgs) {
          const noMatch = [];
          for (const x of msgs) {
            if (x.Id !== Messages.SYSTEM_MESSAGE_ID && this._waitingMsgs.has(x.Id)) {
              const [res, rej] = this._waitingMsgs.get(x.Id);
              if (x.Type === Messages.Error) {
                rej(Exceptions_1.ButtplugError.FromError(x));
                continue;
              }
              res(x);
              continue;
            } else {
              noMatch.push(x);
            }
          }
          return noMatch;
        }
      };
      exports.ButtplugMessageSorter = ButtplugMessageSorter;
    }
  });

  // node_modules/.pnpm/buttplug@3.2.2/node_modules/buttplug/dist/main/src/client/ButtplugClientConnectorException.js
  var require_ButtplugClientConnectorException = __commonJS({
    "node_modules/.pnpm/buttplug@3.2.2/node_modules/buttplug/dist/main/src/client/ButtplugClientConnectorException.js"(exports) {
      "use strict";
      var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
          desc = { enumerable: true, get: function() {
            return m[k];
          } };
        }
        Object.defineProperty(o, k2, desc);
      } : function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        o[k2] = m[k];
      });
      var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
      } : function(o, v) {
        o["default"] = v;
      });
      var __importStar = exports && exports.__importStar || function(mod) {
        if (mod && mod.__esModule)
          return mod;
        var result = {};
        if (mod != null) {
          for (var k in mod)
            if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
              __createBinding(result, mod, k);
        }
        __setModuleDefault(result, mod);
        return result;
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.ButtplugClientConnectorException = void 0;
      var Exceptions_1 = require_Exceptions();
      var Messages = __importStar(require_Messages());
      var ButtplugClientConnectorException = class extends Exceptions_1.ButtplugError {
        constructor(message) {
          super(message, Messages.ErrorClass.ERROR_UNKNOWN);
        }
      };
      exports.ButtplugClientConnectorException = ButtplugClientConnectorException;
    }
  });

  // node_modules/.pnpm/buttplug@3.2.2/node_modules/buttplug/dist/main/src/client/Client.js
  var require_Client = __commonJS({
    "node_modules/.pnpm/buttplug@3.2.2/node_modules/buttplug/dist/main/src/client/Client.js"(exports) {
      "use strict";
      var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
          desc = { enumerable: true, get: function() {
            return m[k];
          } };
        }
        Object.defineProperty(o, k2, desc);
      } : function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        o[k2] = m[k];
      });
      var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
      } : function(o, v) {
        o["default"] = v;
      });
      var __importStar = exports && exports.__importStar || function(mod) {
        if (mod && mod.__esModule)
          return mod;
        var result = {};
        if (mod != null) {
          for (var k in mod)
            if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
              __createBinding(result, mod, k);
        }
        __setModuleDefault(result, mod);
        return result;
      };
      var __awaiter = exports && exports.__awaiter || function(thisArg, _arguments, P, generator) {
        function adopt(value) {
          return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
          });
        }
        return new (P || (P = Promise))(function(resolve, reject) {
          function fulfilled(value) {
            try {
              step(generator.next(value));
            } catch (e) {
              reject(e);
            }
          }
          function rejected(value) {
            try {
              step(generator["throw"](value));
            } catch (e) {
              reject(e);
            }
          }
          function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
          }
          step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.ButtplugClient = void 0;
      var Logging_1 = require_Logging();
      var eventemitter3_1 = require_eventemitter3();
      var ButtplugClientDevice_1 = require_ButtplugClientDevice();
      var ButtplugMessageSorter_1 = require_ButtplugMessageSorter();
      var Messages = __importStar(require_Messages());
      var Exceptions_1 = require_Exceptions();
      var ButtplugClientConnectorException_1 = require_ButtplugClientConnectorException();
      var MessageUtils_1 = require_MessageUtils();
      var ButtplugClient2 = class extends eventemitter3_1.EventEmitter {
        constructor(clientName = "Generic Buttplug Client") {
          super();
          this._pingTimer = null;
          this._connector = null;
          this._devices = /* @__PURE__ */ new Map();
          this._logger = Logging_1.ButtplugLogger.Logger;
          this._isScanning = false;
          this._sorter = new ButtplugMessageSorter_1.ButtplugMessageSorter(true);
          this.connect = (connector2) => __awaiter(this, void 0, void 0, function* () {
            this._logger.Info(`ButtplugClient: Connecting using ${connector2.constructor.name}`);
            yield connector2.connect();
            this._connector = connector2;
            this._connector.addListener("message", this.parseMessages);
            this._connector.addListener("disconnect", this.disconnectHandler);
            yield this.initializeConnection();
          });
          this.disconnect = () => __awaiter(this, void 0, void 0, function* () {
            this._logger.Debug("ButtplugClient: Disconnect called");
            this.checkConnector();
            yield this.shutdownConnection();
            yield this._connector.disconnect();
          });
          this.startScanning = () => __awaiter(this, void 0, void 0, function* () {
            this._logger.Debug("ButtplugClient: StartScanning called");
            this._isScanning = true;
            yield this.sendMsgExpectOk(new Messages.StartScanning());
          });
          this.stopScanning = () => __awaiter(this, void 0, void 0, function* () {
            this._logger.Debug("ButtplugClient: StopScanning called");
            this._isScanning = false;
            yield this.sendMsgExpectOk(new Messages.StopScanning());
          });
          this.stopAllDevices = () => __awaiter(this, void 0, void 0, function* () {
            this._logger.Debug("ButtplugClient: StopAllDevices");
            yield this.sendMsgExpectOk(new Messages.StopAllDevices());
          });
          this.disconnectHandler = () => {
            this._logger.Info("ButtplugClient: Disconnect event receieved.");
            this.emit("disconnect");
          };
          this.parseMessages = (msgs) => {
            const leftoverMsgs = this._sorter.ParseIncomingMessages(msgs);
            for (const x of leftoverMsgs) {
              switch ((0, MessageUtils_1.getMessageClassFromMessage)(x)) {
                case Messages.DeviceAdded: {
                  const addedMsg = x;
                  const addedDevice = ButtplugClientDevice_1.ButtplugClientDevice.fromMsg(addedMsg, this.sendDeviceMessageClosure);
                  this._devices.set(addedMsg.DeviceIndex, addedDevice);
                  this.emit("deviceadded", addedDevice);
                  break;
                }
                case Messages.DeviceRemoved: {
                  const removedMsg = x;
                  if (this._devices.has(removedMsg.DeviceIndex)) {
                    const removedDevice = this._devices.get(removedMsg.DeviceIndex);
                    removedDevice === null || removedDevice === void 0 ? void 0 : removedDevice.emitDisconnected();
                    this._devices.delete(removedMsg.DeviceIndex);
                    this.emit("deviceremoved", removedDevice);
                  }
                  break;
                }
                case Messages.ScanningFinished:
                  this._isScanning = false;
                  this.emit("scanningfinished", x);
                  break;
              }
            }
          };
          this.initializeConnection = () => __awaiter(this, void 0, void 0, function* () {
            this.checkConnector();
            const msg = yield this.sendMessage(new Messages.RequestServerInfo(this._clientName, Messages.MESSAGE_SPEC_VERSION));
            switch ((0, MessageUtils_1.getMessageClassFromMessage)(msg)) {
              case Messages.ServerInfo: {
                const serverinfo = msg;
                this._logger.Info(`ButtplugClient: Connected to Server ${serverinfo.ServerName}`);
                const ping = serverinfo.MaxPingTime;
                if (serverinfo.MessageVersion < Messages.MESSAGE_SPEC_VERSION) {
                  yield this._connector.disconnect();
                  throw Exceptions_1.ButtplugError.LogAndError(Exceptions_1.ButtplugInitError, this._logger, `Server protocol version ${serverinfo.MessageVersion} is older than client protocol version ${Messages.MESSAGE_SPEC_VERSION}. Please update server.`);
                }
                if (ping > 0) {
                }
                yield this.requestDeviceList();
                return true;
              }
              case Messages.Error: {
                yield this._connector.disconnect();
                const err = msg;
                throw Exceptions_1.ButtplugError.LogAndError(Exceptions_1.ButtplugInitError, this._logger, `Cannot connect to server. ${err.ErrorMessage}`);
              }
            }
            return false;
          });
          this.requestDeviceList = () => __awaiter(this, void 0, void 0, function* () {
            this.checkConnector();
            this._logger.Debug("ButtplugClient: ReceiveDeviceList called");
            const deviceList = yield this.sendMessage(new Messages.RequestDeviceList());
            deviceList.Devices.forEach((d) => {
              if (!this._devices.has(d.DeviceIndex)) {
                const device = ButtplugClientDevice_1.ButtplugClientDevice.fromMsg(d, this.sendDeviceMessageClosure);
                this._logger.Debug(`ButtplugClient: Adding Device: ${device}`);
                this._devices.set(d.DeviceIndex, device);
                this.emit("deviceadded", device);
              } else {
                this._logger.Debug(`ButtplugClient: Device already added: ${d}`);
              }
            });
          });
          this.shutdownConnection = () => __awaiter(this, void 0, void 0, function* () {
            yield this.stopAllDevices();
            if (this._pingTimer !== null) {
              clearInterval(this._pingTimer);
              this._pingTimer = null;
            }
          });
          this.sendMsgExpectOk = (msg) => __awaiter(this, void 0, void 0, function* () {
            const response = yield this.sendMessage(msg);
            switch ((0, MessageUtils_1.getMessageClassFromMessage)(response)) {
              case Messages.Ok:
                return;
              case Messages.Error:
                throw Exceptions_1.ButtplugError.FromError(response);
              default:
                throw Exceptions_1.ButtplugError.LogAndError(Exceptions_1.ButtplugMessageError, this._logger, `Message type ${(0, MessageUtils_1.getMessageClassFromMessage)(response).constructor} not handled by SendMsgExpectOk`);
            }
          });
          this.sendDeviceMessageClosure = (device, msg) => __awaiter(this, void 0, void 0, function* () {
            return yield this.sendDeviceMessage(device, msg);
          });
          this._clientName = clientName;
          this._logger.Debug(`ButtplugClient: Client ${clientName} created.`);
        }
        get connected() {
          return this._connector !== null && this._connector.Connected;
        }
        get devices() {
          this.checkConnector();
          const devices2 = [];
          this._devices.forEach((d) => {
            devices2.push(d);
          });
          return devices2;
        }
        get isScanning() {
          return this._isScanning;
        }
        sendDeviceMessage(device, deviceMsg) {
          return __awaiter(this, void 0, void 0, function* () {
            this.checkConnector();
            const dev = this._devices.get(device.index);
            if (dev === void 0) {
              throw Exceptions_1.ButtplugError.LogAndError(Exceptions_1.ButtplugDeviceError, this._logger, `Device ${device.index} not available.`);
            }
            deviceMsg.DeviceIndex = device.index;
            return yield this.sendMessage(deviceMsg);
          });
        }
        sendMessage(msg) {
          return __awaiter(this, void 0, void 0, function* () {
            this.checkConnector();
            const p = this._sorter.PrepareOutgoingMessage(msg);
            yield this._connector.send(msg);
            return yield p;
          });
        }
        checkConnector() {
          if (!this.connected) {
            throw new ButtplugClientConnectorException_1.ButtplugClientConnectorException("ButtplugClient not connected");
          }
        }
      };
      exports.ButtplugClient = ButtplugClient2;
    }
  });

  // node_modules/.pnpm/buttplug@3.2.2/node_modules/buttplug/dist/main/src/utils/ButtplugBrowserWebsocketConnector.js
  var require_ButtplugBrowserWebsocketConnector = __commonJS({
    "node_modules/.pnpm/buttplug@3.2.2/node_modules/buttplug/dist/main/src/utils/ButtplugBrowserWebsocketConnector.js"(exports) {
      "use strict";
      var __awaiter = exports && exports.__awaiter || function(thisArg, _arguments, P, generator) {
        function adopt(value) {
          return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
          });
        }
        return new (P || (P = Promise))(function(resolve, reject) {
          function fulfilled(value) {
            try {
              step(generator.next(value));
            } catch (e) {
              reject(e);
            }
          }
          function rejected(value) {
            try {
              step(generator["throw"](value));
            } catch (e) {
              reject(e);
            }
          }
          function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
          }
          step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.ButtplugBrowserWebsocketConnector = void 0;
      var eventemitter3_1 = require_eventemitter3();
      var MessageUtils_1 = require_MessageUtils();
      var ButtplugBrowserWebsocketConnector = class extends eventemitter3_1.EventEmitter {
        constructor(_url) {
          super();
          this._url = _url;
          this._websocketConstructor = null;
          this.connect = () => __awaiter(this, void 0, void 0, function* () {
            var _a;
            const ws = new ((_a = this._websocketConstructor) !== null && _a !== void 0 ? _a : WebSocket)(this._url);
            let res;
            let rej;
            const p = new Promise((resolve, reject) => {
              res = resolve;
              rej = reject;
            });
            const conErrorCallback = () => rej();
            ws.addEventListener("open", () => __awaiter(this, void 0, void 0, function* () {
              this._ws = ws;
              try {
                yield this.initialize();
                this._ws.addEventListener("message", (msg) => {
                  this.parseIncomingMessage(msg);
                });
                this._ws.removeEventListener("close", conErrorCallback);
                this._ws.addEventListener("close", this.disconnect);
                res();
              } catch (e) {
                console.log(e);
                rej();
              }
            }));
            ws.addEventListener("close", conErrorCallback);
            return p;
          });
          this.disconnect = () => __awaiter(this, void 0, void 0, function* () {
            if (!this.Connected) {
              return;
            }
            this._ws.close();
            this._ws = void 0;
            this.emit("disconnect");
          });
          this.initialize = () => __awaiter(this, void 0, void 0, function* () {
            return Promise.resolve();
          });
        }
        get Connected() {
          return this._ws !== void 0;
        }
        sendMessage(msg) {
          if (!this.Connected) {
            throw new Error("ButtplugBrowserWebsocketConnector not connected");
          }
          this._ws.send("[" + msg.toJSON() + "]");
        }
        parseIncomingMessage(event) {
          if (typeof event.data === "string") {
            const msgs = (0, MessageUtils_1.fromJSON)(event.data);
            this.emit("message", msgs);
          } else if (event.data instanceof Blob) {
          }
        }
        onReaderLoad(event) {
          const msgs = (0, MessageUtils_1.fromJSON)(event.target.result);
          this.emit("message", msgs);
        }
      };
      exports.ButtplugBrowserWebsocketConnector = ButtplugBrowserWebsocketConnector;
    }
  });

  // node_modules/.pnpm/buttplug@3.2.2/node_modules/buttplug/dist/main/src/client/ButtplugBrowserWebsocketClientConnector.js
  var require_ButtplugBrowserWebsocketClientConnector = __commonJS({
    "node_modules/.pnpm/buttplug@3.2.2/node_modules/buttplug/dist/main/src/client/ButtplugBrowserWebsocketClientConnector.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.ButtplugBrowserWebsocketClientConnector = void 0;
      var ButtplugBrowserWebsocketConnector_1 = require_ButtplugBrowserWebsocketConnector();
      var ButtplugBrowserWebsocketClientConnector2 = class extends ButtplugBrowserWebsocketConnector_1.ButtplugBrowserWebsocketConnector {
        constructor() {
          super(...arguments);
          this.send = (msg) => {
            if (!this.Connected) {
              throw new Error("ButtplugClient not connected");
            }
            this.sendMessage(msg);
          };
        }
      };
      exports.ButtplugBrowserWebsocketClientConnector = ButtplugBrowserWebsocketClientConnector2;
    }
  });

  // node_modules/.pnpm/ws@8.17.1/node_modules/ws/browser.js
  var require_browser = __commonJS({
    "node_modules/.pnpm/ws@8.17.1/node_modules/ws/browser.js"(exports, module) {
      "use strict";
      module.exports = function() {
        throw new Error(
          "ws does not work in the browser. Browser clients must use the native WebSocket object"
        );
      };
    }
  });

  // node_modules/.pnpm/buttplug@3.2.2/node_modules/buttplug/dist/main/src/client/ButtplugNodeWebsocketClientConnector.js
  var require_ButtplugNodeWebsocketClientConnector = __commonJS({
    "node_modules/.pnpm/buttplug@3.2.2/node_modules/buttplug/dist/main/src/client/ButtplugNodeWebsocketClientConnector.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.ButtplugNodeWebsocketClientConnector = void 0;
      var ButtplugBrowserWebsocketClientConnector_1 = require_ButtplugBrowserWebsocketClientConnector();
      var ws_1 = require_browser();
      var ButtplugNodeWebsocketClientConnector = class extends ButtplugBrowserWebsocketClientConnector_1.ButtplugBrowserWebsocketClientConnector {
        constructor() {
          super(...arguments);
          this._websocketConstructor = ws_1.WebSocket;
        }
      };
      exports.ButtplugNodeWebsocketClientConnector = ButtplugNodeWebsocketClientConnector;
    }
  });

  // node_modules/.pnpm/buttplug@3.2.2/node_modules/buttplug/dist/main/src/client/IButtplugClientConnector.js
  var require_IButtplugClientConnector = __commonJS({
    "node_modules/.pnpm/buttplug@3.2.2/node_modules/buttplug/dist/main/src/client/IButtplugClientConnector.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
    }
  });

  // node_modules/.pnpm/buttplug@3.2.2/node_modules/buttplug/dist/main/src/index.js
  var require_src = __commonJS({
    "node_modules/.pnpm/buttplug@3.2.2/node_modules/buttplug/dist/main/src/index.js"(exports) {
      "use strict";
      var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
          desc = { enumerable: true, get: function() {
            return m[k];
          } };
        }
        Object.defineProperty(o, k2, desc);
      } : function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        o[k2] = m[k];
      });
      var __exportStar = exports && exports.__exportStar || function(m, exports2) {
        for (var p in m)
          if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
            __createBinding(exports2, m, p);
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      __exportStar(require_Client(), exports);
      __exportStar(require_ButtplugClientDevice(), exports);
      __exportStar(require_ButtplugBrowserWebsocketClientConnector(), exports);
      __exportStar(require_ButtplugNodeWebsocketClientConnector(), exports);
      __exportStar(require_ButtplugClientConnectorException(), exports);
      __exportStar(require_ButtplugMessageSorter(), exports);
      __exportStar(require_IButtplugClientConnector(), exports);
      __exportStar(require_Messages(), exports);
      __exportStar(require_MessageUtils(), exports);
      __exportStar(require_Logging(), exports);
      __exportStar(require_Exceptions(), exports);
    }
  });

  // node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/lodash.js
  var require_lodash = __commonJS({
    "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/lodash.js"(exports, module) {
      (function() {
        var undefined2;
        var VERSION = "4.17.21";
        var LARGE_ARRAY_SIZE = 200;
        var CORE_ERROR_TEXT = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", FUNC_ERROR_TEXT = "Expected a function", INVALID_TEMPL_VAR_ERROR_TEXT = "Invalid `variable` option passed into `_.template`";
        var HASH_UNDEFINED = "__lodash_hash_undefined__";
        var MAX_MEMOIZE_SIZE = 500;
        var PLACEHOLDER = "__lodash_placeholder__";
        var CLONE_DEEP_FLAG = 1, CLONE_FLAT_FLAG = 2, CLONE_SYMBOLS_FLAG = 4;
        var COMPARE_PARTIAL_FLAG = 1, COMPARE_UNORDERED_FLAG = 2;
        var WRAP_BIND_FLAG = 1, WRAP_BIND_KEY_FLAG = 2, WRAP_CURRY_BOUND_FLAG = 4, WRAP_CURRY_FLAG = 8, WRAP_CURRY_RIGHT_FLAG = 16, WRAP_PARTIAL_FLAG = 32, WRAP_PARTIAL_RIGHT_FLAG = 64, WRAP_ARY_FLAG = 128, WRAP_REARG_FLAG = 256, WRAP_FLIP_FLAG = 512;
        var DEFAULT_TRUNC_LENGTH = 30, DEFAULT_TRUNC_OMISSION = "...";
        var HOT_COUNT = 800, HOT_SPAN = 16;
        var LAZY_FILTER_FLAG = 1, LAZY_MAP_FLAG = 2, LAZY_WHILE_FLAG = 3;
        var INFINITY = 1 / 0, MAX_SAFE_INTEGER = 9007199254740991, MAX_INTEGER = 17976931348623157e292, NAN = 0 / 0;
        var MAX_ARRAY_LENGTH = 4294967295, MAX_ARRAY_INDEX = MAX_ARRAY_LENGTH - 1, HALF_MAX_ARRAY_LENGTH = MAX_ARRAY_LENGTH >>> 1;
        var wrapFlags = [
          ["ary", WRAP_ARY_FLAG],
          ["bind", WRAP_BIND_FLAG],
          ["bindKey", WRAP_BIND_KEY_FLAG],
          ["curry", WRAP_CURRY_FLAG],
          ["curryRight", WRAP_CURRY_RIGHT_FLAG],
          ["flip", WRAP_FLIP_FLAG],
          ["partial", WRAP_PARTIAL_FLAG],
          ["partialRight", WRAP_PARTIAL_RIGHT_FLAG],
          ["rearg", WRAP_REARG_FLAG]
        ];
        var argsTag = "[object Arguments]", arrayTag = "[object Array]", asyncTag = "[object AsyncFunction]", boolTag = "[object Boolean]", dateTag = "[object Date]", domExcTag = "[object DOMException]", errorTag = "[object Error]", funcTag = "[object Function]", genTag = "[object GeneratorFunction]", mapTag = "[object Map]", numberTag = "[object Number]", nullTag = "[object Null]", objectTag = "[object Object]", promiseTag = "[object Promise]", proxyTag = "[object Proxy]", regexpTag = "[object RegExp]", setTag = "[object Set]", stringTag = "[object String]", symbolTag = "[object Symbol]", undefinedTag = "[object Undefined]", weakMapTag = "[object WeakMap]", weakSetTag = "[object WeakSet]";
        var arrayBufferTag = "[object ArrayBuffer]", dataViewTag = "[object DataView]", float32Tag = "[object Float32Array]", float64Tag = "[object Float64Array]", int8Tag = "[object Int8Array]", int16Tag = "[object Int16Array]", int32Tag = "[object Int32Array]", uint8Tag = "[object Uint8Array]", uint8ClampedTag = "[object Uint8ClampedArray]", uint16Tag = "[object Uint16Array]", uint32Tag = "[object Uint32Array]";
        var reEmptyStringLeading = /\b__p \+= '';/g, reEmptyStringMiddle = /\b(__p \+=) '' \+/g, reEmptyStringTrailing = /(__e\(.*?\)|\b__t\)) \+\n'';/g;
        var reEscapedHtml = /&(?:amp|lt|gt|quot|#39);/g, reUnescapedHtml = /[&<>"']/g, reHasEscapedHtml = RegExp(reEscapedHtml.source), reHasUnescapedHtml = RegExp(reUnescapedHtml.source);
        var reEscape = /<%-([\s\S]+?)%>/g, reEvaluate = /<%([\s\S]+?)%>/g, reInterpolate = /<%=([\s\S]+?)%>/g;
        var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, reIsPlainProp = /^\w*$/, rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
        var reRegExpChar = /[\\^$.*+?()[\]{}|]/g, reHasRegExpChar = RegExp(reRegExpChar.source);
        var reTrimStart = /^\s+/;
        var reWhitespace = /\s/;
        var reWrapComment = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, reWrapDetails = /\{\n\/\* \[wrapped with (.+)\] \*/, reSplitDetails = /,? & /;
        var reAsciiWord = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
        var reForbiddenIdentifierChars = /[()=,{}\[\]\/\s]/;
        var reEscapeChar = /\\(\\)?/g;
        var reEsTemplate = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g;
        var reFlags = /\w*$/;
        var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
        var reIsBinary = /^0b[01]+$/i;
        var reIsHostCtor = /^\[object .+?Constructor\]$/;
        var reIsOctal = /^0o[0-7]+$/i;
        var reIsUint = /^(?:0|[1-9]\d*)$/;
        var reLatin = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g;
        var reNoMatch = /($^)/;
        var reUnescapedString = /['\n\r\u2028\u2029\\]/g;
        var rsAstralRange = "\\ud800-\\udfff", rsComboMarksRange = "\\u0300-\\u036f", reComboHalfMarksRange = "\\ufe20-\\ufe2f", rsComboSymbolsRange = "\\u20d0-\\u20ff", rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange, rsDingbatRange = "\\u2700-\\u27bf", rsLowerRange = "a-z\\xdf-\\xf6\\xf8-\\xff", rsMathOpRange = "\\xac\\xb1\\xd7\\xf7", rsNonCharRange = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", rsPunctuationRange = "\\u2000-\\u206f", rsSpaceRange = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", rsUpperRange = "A-Z\\xc0-\\xd6\\xd8-\\xde", rsVarRange = "\\ufe0e\\ufe0f", rsBreakRange = rsMathOpRange + rsNonCharRange + rsPunctuationRange + rsSpaceRange;
        var rsApos = "['\u2019]", rsAstral = "[" + rsAstralRange + "]", rsBreak = "[" + rsBreakRange + "]", rsCombo = "[" + rsComboRange + "]", rsDigits = "\\d+", rsDingbat = "[" + rsDingbatRange + "]", rsLower = "[" + rsLowerRange + "]", rsMisc = "[^" + rsAstralRange + rsBreakRange + rsDigits + rsDingbatRange + rsLowerRange + rsUpperRange + "]", rsFitz = "\\ud83c[\\udffb-\\udfff]", rsModifier = "(?:" + rsCombo + "|" + rsFitz + ")", rsNonAstral = "[^" + rsAstralRange + "]", rsRegional = "(?:\\ud83c[\\udde6-\\uddff]){2}", rsSurrPair = "[\\ud800-\\udbff][\\udc00-\\udfff]", rsUpper = "[" + rsUpperRange + "]", rsZWJ = "\\u200d";
        var rsMiscLower = "(?:" + rsLower + "|" + rsMisc + ")", rsMiscUpper = "(?:" + rsUpper + "|" + rsMisc + ")", rsOptContrLower = "(?:" + rsApos + "(?:d|ll|m|re|s|t|ve))?", rsOptContrUpper = "(?:" + rsApos + "(?:D|LL|M|RE|S|T|VE))?", reOptMod = rsModifier + "?", rsOptVar = "[" + rsVarRange + "]?", rsOptJoin = "(?:" + rsZWJ + "(?:" + [rsNonAstral, rsRegional, rsSurrPair].join("|") + ")" + rsOptVar + reOptMod + ")*", rsOrdLower = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", rsOrdUpper = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", rsSeq = rsOptVar + reOptMod + rsOptJoin, rsEmoji = "(?:" + [rsDingbat, rsRegional, rsSurrPair].join("|") + ")" + rsSeq, rsSymbol = "(?:" + [rsNonAstral + rsCombo + "?", rsCombo, rsRegional, rsSurrPair, rsAstral].join("|") + ")";
        var reApos = RegExp(rsApos, "g");
        var reComboMark = RegExp(rsCombo, "g");
        var reUnicode = RegExp(rsFitz + "(?=" + rsFitz + ")|" + rsSymbol + rsSeq, "g");
        var reUnicodeWord = RegExp([
          rsUpper + "?" + rsLower + "+" + rsOptContrLower + "(?=" + [rsBreak, rsUpper, "$"].join("|") + ")",
          rsMiscUpper + "+" + rsOptContrUpper + "(?=" + [rsBreak, rsUpper + rsMiscLower, "$"].join("|") + ")",
          rsUpper + "?" + rsMiscLower + "+" + rsOptContrLower,
          rsUpper + "+" + rsOptContrUpper,
          rsOrdUpper,
          rsOrdLower,
          rsDigits,
          rsEmoji
        ].join("|"), "g");
        var reHasUnicode = RegExp("[" + rsZWJ + rsAstralRange + rsComboRange + rsVarRange + "]");
        var reHasUnicodeWord = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
        var contextProps = [
          "Array",
          "Buffer",
          "DataView",
          "Date",
          "Error",
          "Float32Array",
          "Float64Array",
          "Function",
          "Int8Array",
          "Int16Array",
          "Int32Array",
          "Map",
          "Math",
          "Object",
          "Promise",
          "RegExp",
          "Set",
          "String",
          "Symbol",
          "TypeError",
          "Uint8Array",
          "Uint8ClampedArray",
          "Uint16Array",
          "Uint32Array",
          "WeakMap",
          "_",
          "clearTimeout",
          "isFinite",
          "parseInt",
          "setTimeout"
        ];
        var templateCounter = -1;
        var typedArrayTags = {};
        typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
        typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
        var cloneableTags = {};
        cloneableTags[argsTag] = cloneableTags[arrayTag] = cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] = cloneableTags[boolTag] = cloneableTags[dateTag] = cloneableTags[float32Tag] = cloneableTags[float64Tag] = cloneableTags[int8Tag] = cloneableTags[int16Tag] = cloneableTags[int32Tag] = cloneableTags[mapTag] = cloneableTags[numberTag] = cloneableTags[objectTag] = cloneableTags[regexpTag] = cloneableTags[setTag] = cloneableTags[stringTag] = cloneableTags[symbolTag] = cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] = cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
        cloneableTags[errorTag] = cloneableTags[funcTag] = cloneableTags[weakMapTag] = false;
        var deburredLetters = {
          // Latin-1 Supplement block.
          "\xC0": "A",
          "\xC1": "A",
          "\xC2": "A",
          "\xC3": "A",
          "\xC4": "A",
          "\xC5": "A",
          "\xE0": "a",
          "\xE1": "a",
          "\xE2": "a",
          "\xE3": "a",
          "\xE4": "a",
          "\xE5": "a",
          "\xC7": "C",
          "\xE7": "c",
          "\xD0": "D",
          "\xF0": "d",
          "\xC8": "E",
          "\xC9": "E",
          "\xCA": "E",
          "\xCB": "E",
          "\xE8": "e",
          "\xE9": "e",
          "\xEA": "e",
          "\xEB": "e",
          "\xCC": "I",
          "\xCD": "I",
          "\xCE": "I",
          "\xCF": "I",
          "\xEC": "i",
          "\xED": "i",
          "\xEE": "i",
          "\xEF": "i",
          "\xD1": "N",
          "\xF1": "n",
          "\xD2": "O",
          "\xD3": "O",
          "\xD4": "O",
          "\xD5": "O",
          "\xD6": "O",
          "\xD8": "O",
          "\xF2": "o",
          "\xF3": "o",
          "\xF4": "o",
          "\xF5": "o",
          "\xF6": "o",
          "\xF8": "o",
          "\xD9": "U",
          "\xDA": "U",
          "\xDB": "U",
          "\xDC": "U",
          "\xF9": "u",
          "\xFA": "u",
          "\xFB": "u",
          "\xFC": "u",
          "\xDD": "Y",
          "\xFD": "y",
          "\xFF": "y",
          "\xC6": "Ae",
          "\xE6": "ae",
          "\xDE": "Th",
          "\xFE": "th",
          "\xDF": "ss",
          // Latin Extended-A block.
          "\u0100": "A",
          "\u0102": "A",
          "\u0104": "A",
          "\u0101": "a",
          "\u0103": "a",
          "\u0105": "a",
          "\u0106": "C",
          "\u0108": "C",
          "\u010A": "C",
          "\u010C": "C",
          "\u0107": "c",
          "\u0109": "c",
          "\u010B": "c",
          "\u010D": "c",
          "\u010E": "D",
          "\u0110": "D",
          "\u010F": "d",
          "\u0111": "d",
          "\u0112": "E",
          "\u0114": "E",
          "\u0116": "E",
          "\u0118": "E",
          "\u011A": "E",
          "\u0113": "e",
          "\u0115": "e",
          "\u0117": "e",
          "\u0119": "e",
          "\u011B": "e",
          "\u011C": "G",
          "\u011E": "G",
          "\u0120": "G",
          "\u0122": "G",
          "\u011D": "g",
          "\u011F": "g",
          "\u0121": "g",
          "\u0123": "g",
          "\u0124": "H",
          "\u0126": "H",
          "\u0125": "h",
          "\u0127": "h",
          "\u0128": "I",
          "\u012A": "I",
          "\u012C": "I",
          "\u012E": "I",
          "\u0130": "I",
          "\u0129": "i",
          "\u012B": "i",
          "\u012D": "i",
          "\u012F": "i",
          "\u0131": "i",
          "\u0134": "J",
          "\u0135": "j",
          "\u0136": "K",
          "\u0137": "k",
          "\u0138": "k",
          "\u0139": "L",
          "\u013B": "L",
          "\u013D": "L",
          "\u013F": "L",
          "\u0141": "L",
          "\u013A": "l",
          "\u013C": "l",
          "\u013E": "l",
          "\u0140": "l",
          "\u0142": "l",
          "\u0143": "N",
          "\u0145": "N",
          "\u0147": "N",
          "\u014A": "N",
          "\u0144": "n",
          "\u0146": "n",
          "\u0148": "n",
          "\u014B": "n",
          "\u014C": "O",
          "\u014E": "O",
          "\u0150": "O",
          "\u014D": "o",
          "\u014F": "o",
          "\u0151": "o",
          "\u0154": "R",
          "\u0156": "R",
          "\u0158": "R",
          "\u0155": "r",
          "\u0157": "r",
          "\u0159": "r",
          "\u015A": "S",
          "\u015C": "S",
          "\u015E": "S",
          "\u0160": "S",
          "\u015B": "s",
          "\u015D": "s",
          "\u015F": "s",
          "\u0161": "s",
          "\u0162": "T",
          "\u0164": "T",
          "\u0166": "T",
          "\u0163": "t",
          "\u0165": "t",
          "\u0167": "t",
          "\u0168": "U",
          "\u016A": "U",
          "\u016C": "U",
          "\u016E": "U",
          "\u0170": "U",
          "\u0172": "U",
          "\u0169": "u",
          "\u016B": "u",
          "\u016D": "u",
          "\u016F": "u",
          "\u0171": "u",
          "\u0173": "u",
          "\u0174": "W",
          "\u0175": "w",
          "\u0176": "Y",
          "\u0177": "y",
          "\u0178": "Y",
          "\u0179": "Z",
          "\u017B": "Z",
          "\u017D": "Z",
          "\u017A": "z",
          "\u017C": "z",
          "\u017E": "z",
          "\u0132": "IJ",
          "\u0133": "ij",
          "\u0152": "Oe",
          "\u0153": "oe",
          "\u0149": "'n",
          "\u017F": "s"
        };
        var htmlEscapes = {
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          '"': "&quot;",
          "'": "&#39;"
        };
        var htmlUnescapes = {
          "&amp;": "&",
          "&lt;": "<",
          "&gt;": ">",
          "&quot;": '"',
          "&#39;": "'"
        };
        var stringEscapes = {
          "\\": "\\",
          "'": "'",
          "\n": "n",
          "\r": "r",
          "\u2028": "u2028",
          "\u2029": "u2029"
        };
        var freeParseFloat = parseFloat, freeParseInt = parseInt;
        var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
        var freeSelf = typeof self == "object" && self && self.Object === Object && self;
        var root = freeGlobal || freeSelf || Function("return this")();
        var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
        var freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module;
        var moduleExports = freeModule && freeModule.exports === freeExports;
        var freeProcess = moduleExports && freeGlobal.process;
        var nodeUtil = function() {
          try {
            var types = freeModule && freeModule.require && freeModule.require("util").types;
            if (types) {
              return types;
            }
            return freeProcess && freeProcess.binding && freeProcess.binding("util");
          } catch (e) {
          }
        }();
        var nodeIsArrayBuffer = nodeUtil && nodeUtil.isArrayBuffer, nodeIsDate = nodeUtil && nodeUtil.isDate, nodeIsMap = nodeUtil && nodeUtil.isMap, nodeIsRegExp = nodeUtil && nodeUtil.isRegExp, nodeIsSet = nodeUtil && nodeUtil.isSet, nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
        function apply(func, thisArg, args) {
          switch (args.length) {
            case 0:
              return func.call(thisArg);
            case 1:
              return func.call(thisArg, args[0]);
            case 2:
              return func.call(thisArg, args[0], args[1]);
            case 3:
              return func.call(thisArg, args[0], args[1], args[2]);
          }
          return func.apply(thisArg, args);
        }
        function arrayAggregator(array, setter, iteratee, accumulator) {
          var index = -1, length = array == null ? 0 : array.length;
          while (++index < length) {
            var value = array[index];
            setter(accumulator, value, iteratee(value), array);
          }
          return accumulator;
        }
        function arrayEach(array, iteratee) {
          var index = -1, length = array == null ? 0 : array.length;
          while (++index < length) {
            if (iteratee(array[index], index, array) === false) {
              break;
            }
          }
          return array;
        }
        function arrayEachRight(array, iteratee) {
          var length = array == null ? 0 : array.length;
          while (length--) {
            if (iteratee(array[length], length, array) === false) {
              break;
            }
          }
          return array;
        }
        function arrayEvery(array, predicate) {
          var index = -1, length = array == null ? 0 : array.length;
          while (++index < length) {
            if (!predicate(array[index], index, array)) {
              return false;
            }
          }
          return true;
        }
        function arrayFilter(array, predicate) {
          var index = -1, length = array == null ? 0 : array.length, resIndex = 0, result = [];
          while (++index < length) {
            var value = array[index];
            if (predicate(value, index, array)) {
              result[resIndex++] = value;
            }
          }
          return result;
        }
        function arrayIncludes(array, value) {
          var length = array == null ? 0 : array.length;
          return !!length && baseIndexOf(array, value, 0) > -1;
        }
        function arrayIncludesWith(array, value, comparator) {
          var index = -1, length = array == null ? 0 : array.length;
          while (++index < length) {
            if (comparator(value, array[index])) {
              return true;
            }
          }
          return false;
        }
        function arrayMap(array, iteratee) {
          var index = -1, length = array == null ? 0 : array.length, result = Array(length);
          while (++index < length) {
            result[index] = iteratee(array[index], index, array);
          }
          return result;
        }
        function arrayPush(array, values) {
          var index = -1, length = values.length, offset = array.length;
          while (++index < length) {
            array[offset + index] = values[index];
          }
          return array;
        }
        function arrayReduce(array, iteratee, accumulator, initAccum) {
          var index = -1, length = array == null ? 0 : array.length;
          if (initAccum && length) {
            accumulator = array[++index];
          }
          while (++index < length) {
            accumulator = iteratee(accumulator, array[index], index, array);
          }
          return accumulator;
        }
        function arrayReduceRight(array, iteratee, accumulator, initAccum) {
          var length = array == null ? 0 : array.length;
          if (initAccum && length) {
            accumulator = array[--length];
          }
          while (length--) {
            accumulator = iteratee(accumulator, array[length], length, array);
          }
          return accumulator;
        }
        function arraySome(array, predicate) {
          var index = -1, length = array == null ? 0 : array.length;
          while (++index < length) {
            if (predicate(array[index], index, array)) {
              return true;
            }
          }
          return false;
        }
        var asciiSize = baseProperty("length");
        function asciiToArray(string) {
          return string.split("");
        }
        function asciiWords(string) {
          return string.match(reAsciiWord) || [];
        }
        function baseFindKey(collection, predicate, eachFunc) {
          var result;
          eachFunc(collection, function(value, key, collection2) {
            if (predicate(value, key, collection2)) {
              result = key;
              return false;
            }
          });
          return result;
        }
        function baseFindIndex(array, predicate, fromIndex, fromRight) {
          var length = array.length, index = fromIndex + (fromRight ? 1 : -1);
          while (fromRight ? index-- : ++index < length) {
            if (predicate(array[index], index, array)) {
              return index;
            }
          }
          return -1;
        }
        function baseIndexOf(array, value, fromIndex) {
          return value === value ? strictIndexOf(array, value, fromIndex) : baseFindIndex(array, baseIsNaN, fromIndex);
        }
        function baseIndexOfWith(array, value, fromIndex, comparator) {
          var index = fromIndex - 1, length = array.length;
          while (++index < length) {
            if (comparator(array[index], value)) {
              return index;
            }
          }
          return -1;
        }
        function baseIsNaN(value) {
          return value !== value;
        }
        function baseMean(array, iteratee) {
          var length = array == null ? 0 : array.length;
          return length ? baseSum(array, iteratee) / length : NAN;
        }
        function baseProperty(key) {
          return function(object) {
            return object == null ? undefined2 : object[key];
          };
        }
        function basePropertyOf(object) {
          return function(key) {
            return object == null ? undefined2 : object[key];
          };
        }
        function baseReduce(collection, iteratee, accumulator, initAccum, eachFunc) {
          eachFunc(collection, function(value, index, collection2) {
            accumulator = initAccum ? (initAccum = false, value) : iteratee(accumulator, value, index, collection2);
          });
          return accumulator;
        }
        function baseSortBy(array, comparer) {
          var length = array.length;
          array.sort(comparer);
          while (length--) {
            array[length] = array[length].value;
          }
          return array;
        }
        function baseSum(array, iteratee) {
          var result, index = -1, length = array.length;
          while (++index < length) {
            var current = iteratee(array[index]);
            if (current !== undefined2) {
              result = result === undefined2 ? current : result + current;
            }
          }
          return result;
        }
        function baseTimes(n, iteratee) {
          var index = -1, result = Array(n);
          while (++index < n) {
            result[index] = iteratee(index);
          }
          return result;
        }
        function baseToPairs(object, props) {
          return arrayMap(props, function(key) {
            return [key, object[key]];
          });
        }
        function baseTrim(string) {
          return string ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, "") : string;
        }
        function baseUnary(func) {
          return function(value) {
            return func(value);
          };
        }
        function baseValues(object, props) {
          return arrayMap(props, function(key) {
            return object[key];
          });
        }
        function cacheHas(cache, key) {
          return cache.has(key);
        }
        function charsStartIndex(strSymbols, chrSymbols) {
          var index = -1, length = strSymbols.length;
          while (++index < length && baseIndexOf(chrSymbols, strSymbols[index], 0) > -1) {
          }
          return index;
        }
        function charsEndIndex(strSymbols, chrSymbols) {
          var index = strSymbols.length;
          while (index-- && baseIndexOf(chrSymbols, strSymbols[index], 0) > -1) {
          }
          return index;
        }
        function countHolders(array, placeholder) {
          var length = array.length, result = 0;
          while (length--) {
            if (array[length] === placeholder) {
              ++result;
            }
          }
          return result;
        }
        var deburrLetter = basePropertyOf(deburredLetters);
        var escapeHtmlChar = basePropertyOf(htmlEscapes);
        function escapeStringChar(chr) {
          return "\\" + stringEscapes[chr];
        }
        function getValue(object, key) {
          return object == null ? undefined2 : object[key];
        }
        function hasUnicode(string) {
          return reHasUnicode.test(string);
        }
        function hasUnicodeWord(string) {
          return reHasUnicodeWord.test(string);
        }
        function iteratorToArray(iterator) {
          var data, result = [];
          while (!(data = iterator.next()).done) {
            result.push(data.value);
          }
          return result;
        }
        function mapToArray(map) {
          var index = -1, result = Array(map.size);
          map.forEach(function(value, key) {
            result[++index] = [key, value];
          });
          return result;
        }
        function overArg(func, transform) {
          return function(arg) {
            return func(transform(arg));
          };
        }
        function replaceHolders(array, placeholder) {
          var index = -1, length = array.length, resIndex = 0, result = [];
          while (++index < length) {
            var value = array[index];
            if (value === placeholder || value === PLACEHOLDER) {
              array[index] = PLACEHOLDER;
              result[resIndex++] = index;
            }
          }
          return result;
        }
        function setToArray(set) {
          var index = -1, result = Array(set.size);
          set.forEach(function(value) {
            result[++index] = value;
          });
          return result;
        }
        function setToPairs(set) {
          var index = -1, result = Array(set.size);
          set.forEach(function(value) {
            result[++index] = [value, value];
          });
          return result;
        }
        function strictIndexOf(array, value, fromIndex) {
          var index = fromIndex - 1, length = array.length;
          while (++index < length) {
            if (array[index] === value) {
              return index;
            }
          }
          return -1;
        }
        function strictLastIndexOf(array, value, fromIndex) {
          var index = fromIndex + 1;
          while (index--) {
            if (array[index] === value) {
              return index;
            }
          }
          return index;
        }
        function stringSize(string) {
          return hasUnicode(string) ? unicodeSize(string) : asciiSize(string);
        }
        function stringToArray(string) {
          return hasUnicode(string) ? unicodeToArray(string) : asciiToArray(string);
        }
        function trimmedEndIndex(string) {
          var index = string.length;
          while (index-- && reWhitespace.test(string.charAt(index))) {
          }
          return index;
        }
        var unescapeHtmlChar = basePropertyOf(htmlUnescapes);
        function unicodeSize(string) {
          var result = reUnicode.lastIndex = 0;
          while (reUnicode.test(string)) {
            ++result;
          }
          return result;
        }
        function unicodeToArray(string) {
          return string.match(reUnicode) || [];
        }
        function unicodeWords(string) {
          return string.match(reUnicodeWord) || [];
        }
        var runInContext = function runInContext2(context) {
          context = context == null ? root : _.defaults(root.Object(), context, _.pick(root, contextProps));
          var Array2 = context.Array, Date2 = context.Date, Error2 = context.Error, Function2 = context.Function, Math2 = context.Math, Object2 = context.Object, RegExp2 = context.RegExp, String2 = context.String, TypeError2 = context.TypeError;
          var arrayProto = Array2.prototype, funcProto = Function2.prototype, objectProto = Object2.prototype;
          var coreJsData = context["__core-js_shared__"];
          var funcToString = funcProto.toString;
          var hasOwnProperty = objectProto.hasOwnProperty;
          var idCounter = 0;
          var maskSrcKey = function() {
            var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
            return uid ? "Symbol(src)_1." + uid : "";
          }();
          var nativeObjectToString = objectProto.toString;
          var objectCtorString = funcToString.call(Object2);
          var oldDash = root._;
          var reIsNative = RegExp2(
            "^" + funcToString.call(hasOwnProperty).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
          );
          var Buffer2 = moduleExports ? context.Buffer : undefined2, Symbol2 = context.Symbol, Uint8Array2 = context.Uint8Array, allocUnsafe = Buffer2 ? Buffer2.allocUnsafe : undefined2, getPrototype = overArg(Object2.getPrototypeOf, Object2), objectCreate = Object2.create, propertyIsEnumerable = objectProto.propertyIsEnumerable, splice = arrayProto.splice, spreadableSymbol = Symbol2 ? Symbol2.isConcatSpreadable : undefined2, symIterator = Symbol2 ? Symbol2.iterator : undefined2, symToStringTag = Symbol2 ? Symbol2.toStringTag : undefined2;
          var defineProperty = function() {
            try {
              var func = getNative(Object2, "defineProperty");
              func({}, "", {});
              return func;
            } catch (e) {
            }
          }();
          var ctxClearTimeout = context.clearTimeout !== root.clearTimeout && context.clearTimeout, ctxNow = Date2 && Date2.now !== root.Date.now && Date2.now, ctxSetTimeout = context.setTimeout !== root.setTimeout && context.setTimeout;
          var nativeCeil = Math2.ceil, nativeFloor = Math2.floor, nativeGetSymbols = Object2.getOwnPropertySymbols, nativeIsBuffer = Buffer2 ? Buffer2.isBuffer : undefined2, nativeIsFinite = context.isFinite, nativeJoin = arrayProto.join, nativeKeys = overArg(Object2.keys, Object2), nativeMax = Math2.max, nativeMin = Math2.min, nativeNow = Date2.now, nativeParseInt = context.parseInt, nativeRandom = Math2.random, nativeReverse = arrayProto.reverse;
          var DataView = getNative(context, "DataView"), Map2 = getNative(context, "Map"), Promise2 = getNative(context, "Promise"), Set2 = getNative(context, "Set"), WeakMap2 = getNative(context, "WeakMap"), nativeCreate = getNative(Object2, "create");
          var metaMap = WeakMap2 && new WeakMap2();
          var realNames = {};
          var dataViewCtorString = toSource(DataView), mapCtorString = toSource(Map2), promiseCtorString = toSource(Promise2), setCtorString = toSource(Set2), weakMapCtorString = toSource(WeakMap2);
          var symbolProto = Symbol2 ? Symbol2.prototype : undefined2, symbolValueOf = symbolProto ? symbolProto.valueOf : undefined2, symbolToString = symbolProto ? symbolProto.toString : undefined2;
          function lodash(value) {
            if (isObjectLike(value) && !isArray(value) && !(value instanceof LazyWrapper)) {
              if (value instanceof LodashWrapper) {
                return value;
              }
              if (hasOwnProperty.call(value, "__wrapped__")) {
                return wrapperClone(value);
              }
            }
            return new LodashWrapper(value);
          }
          var baseCreate = function() {
            function object() {
            }
            return function(proto) {
              if (!isObject(proto)) {
                return {};
              }
              if (objectCreate) {
                return objectCreate(proto);
              }
              object.prototype = proto;
              var result2 = new object();
              object.prototype = undefined2;
              return result2;
            };
          }();
          function baseLodash() {
          }
          function LodashWrapper(value, chainAll) {
            this.__wrapped__ = value;
            this.__actions__ = [];
            this.__chain__ = !!chainAll;
            this.__index__ = 0;
            this.__values__ = undefined2;
          }
          lodash.templateSettings = {
            /**
             * Used to detect `data` property values to be HTML-escaped.
             *
             * @memberOf _.templateSettings
             * @type {RegExp}
             */
            "escape": reEscape,
            /**
             * Used to detect code to be evaluated.
             *
             * @memberOf _.templateSettings
             * @type {RegExp}
             */
            "evaluate": reEvaluate,
            /**
             * Used to detect `data` property values to inject.
             *
             * @memberOf _.templateSettings
             * @type {RegExp}
             */
            "interpolate": reInterpolate,
            /**
             * Used to reference the data object in the template text.
             *
             * @memberOf _.templateSettings
             * @type {string}
             */
            "variable": "",
            /**
             * Used to import variables into the compiled template.
             *
             * @memberOf _.templateSettings
             * @type {Object}
             */
            "imports": {
              /**
               * A reference to the `lodash` function.
               *
               * @memberOf _.templateSettings.imports
               * @type {Function}
               */
              "_": lodash
            }
          };
          lodash.prototype = baseLodash.prototype;
          lodash.prototype.constructor = lodash;
          LodashWrapper.prototype = baseCreate(baseLodash.prototype);
          LodashWrapper.prototype.constructor = LodashWrapper;
          function LazyWrapper(value) {
            this.__wrapped__ = value;
            this.__actions__ = [];
            this.__dir__ = 1;
            this.__filtered__ = false;
            this.__iteratees__ = [];
            this.__takeCount__ = MAX_ARRAY_LENGTH;
            this.__views__ = [];
          }
          function lazyClone() {
            var result2 = new LazyWrapper(this.__wrapped__);
            result2.__actions__ = copyArray(this.__actions__);
            result2.__dir__ = this.__dir__;
            result2.__filtered__ = this.__filtered__;
            result2.__iteratees__ = copyArray(this.__iteratees__);
            result2.__takeCount__ = this.__takeCount__;
            result2.__views__ = copyArray(this.__views__);
            return result2;
          }
          function lazyReverse() {
            if (this.__filtered__) {
              var result2 = new LazyWrapper(this);
              result2.__dir__ = -1;
              result2.__filtered__ = true;
            } else {
              result2 = this.clone();
              result2.__dir__ *= -1;
            }
            return result2;
          }
          function lazyValue() {
            var array = this.__wrapped__.value(), dir = this.__dir__, isArr = isArray(array), isRight = dir < 0, arrLength = isArr ? array.length : 0, view = getView(0, arrLength, this.__views__), start = view.start, end = view.end, length = end - start, index = isRight ? end : start - 1, iteratees = this.__iteratees__, iterLength = iteratees.length, resIndex = 0, takeCount = nativeMin(length, this.__takeCount__);
            if (!isArr || !isRight && arrLength == length && takeCount == length) {
              return baseWrapperValue(array, this.__actions__);
            }
            var result2 = [];
            outer:
              while (length-- && resIndex < takeCount) {
                index += dir;
                var iterIndex = -1, value = array[index];
                while (++iterIndex < iterLength) {
                  var data = iteratees[iterIndex], iteratee2 = data.iteratee, type = data.type, computed = iteratee2(value);
                  if (type == LAZY_MAP_FLAG) {
                    value = computed;
                  } else if (!computed) {
                    if (type == LAZY_FILTER_FLAG) {
                      continue outer;
                    } else {
                      break outer;
                    }
                  }
                }
                result2[resIndex++] = value;
              }
            return result2;
          }
          LazyWrapper.prototype = baseCreate(baseLodash.prototype);
          LazyWrapper.prototype.constructor = LazyWrapper;
          function Hash(entries) {
            var index = -1, length = entries == null ? 0 : entries.length;
            this.clear();
            while (++index < length) {
              var entry = entries[index];
              this.set(entry[0], entry[1]);
            }
          }
          function hashClear() {
            this.__data__ = nativeCreate ? nativeCreate(null) : {};
            this.size = 0;
          }
          function hashDelete(key) {
            var result2 = this.has(key) && delete this.__data__[key];
            this.size -= result2 ? 1 : 0;
            return result2;
          }
          function hashGet(key) {
            var data = this.__data__;
            if (nativeCreate) {
              var result2 = data[key];
              return result2 === HASH_UNDEFINED ? undefined2 : result2;
            }
            return hasOwnProperty.call(data, key) ? data[key] : undefined2;
          }
          function hashHas(key) {
            var data = this.__data__;
            return nativeCreate ? data[key] !== undefined2 : hasOwnProperty.call(data, key);
          }
          function hashSet(key, value) {
            var data = this.__data__;
            this.size += this.has(key) ? 0 : 1;
            data[key] = nativeCreate && value === undefined2 ? HASH_UNDEFINED : value;
            return this;
          }
          Hash.prototype.clear = hashClear;
          Hash.prototype["delete"] = hashDelete;
          Hash.prototype.get = hashGet;
          Hash.prototype.has = hashHas;
          Hash.prototype.set = hashSet;
          function ListCache(entries) {
            var index = -1, length = entries == null ? 0 : entries.length;
            this.clear();
            while (++index < length) {
              var entry = entries[index];
              this.set(entry[0], entry[1]);
            }
          }
          function listCacheClear() {
            this.__data__ = [];
            this.size = 0;
          }
          function listCacheDelete(key) {
            var data = this.__data__, index = assocIndexOf(data, key);
            if (index < 0) {
              return false;
            }
            var lastIndex = data.length - 1;
            if (index == lastIndex) {
              data.pop();
            } else {
              splice.call(data, index, 1);
            }
            --this.size;
            return true;
          }
          function listCacheGet(key) {
            var data = this.__data__, index = assocIndexOf(data, key);
            return index < 0 ? undefined2 : data[index][1];
          }
          function listCacheHas(key) {
            return assocIndexOf(this.__data__, key) > -1;
          }
          function listCacheSet(key, value) {
            var data = this.__data__, index = assocIndexOf(data, key);
            if (index < 0) {
              ++this.size;
              data.push([key, value]);
            } else {
              data[index][1] = value;
            }
            return this;
          }
          ListCache.prototype.clear = listCacheClear;
          ListCache.prototype["delete"] = listCacheDelete;
          ListCache.prototype.get = listCacheGet;
          ListCache.prototype.has = listCacheHas;
          ListCache.prototype.set = listCacheSet;
          function MapCache(entries) {
            var index = -1, length = entries == null ? 0 : entries.length;
            this.clear();
            while (++index < length) {
              var entry = entries[index];
              this.set(entry[0], entry[1]);
            }
          }
          function mapCacheClear() {
            this.size = 0;
            this.__data__ = {
              "hash": new Hash(),
              "map": new (Map2 || ListCache)(),
              "string": new Hash()
            };
          }
          function mapCacheDelete(key) {
            var result2 = getMapData(this, key)["delete"](key);
            this.size -= result2 ? 1 : 0;
            return result2;
          }
          function mapCacheGet(key) {
            return getMapData(this, key).get(key);
          }
          function mapCacheHas(key) {
            return getMapData(this, key).has(key);
          }
          function mapCacheSet(key, value) {
            var data = getMapData(this, key), size2 = data.size;
            data.set(key, value);
            this.size += data.size == size2 ? 0 : 1;
            return this;
          }
          MapCache.prototype.clear = mapCacheClear;
          MapCache.prototype["delete"] = mapCacheDelete;
          MapCache.prototype.get = mapCacheGet;
          MapCache.prototype.has = mapCacheHas;
          MapCache.prototype.set = mapCacheSet;
          function SetCache(values2) {
            var index = -1, length = values2 == null ? 0 : values2.length;
            this.__data__ = new MapCache();
            while (++index < length) {
              this.add(values2[index]);
            }
          }
          function setCacheAdd(value) {
            this.__data__.set(value, HASH_UNDEFINED);
            return this;
          }
          function setCacheHas(value) {
            return this.__data__.has(value);
          }
          SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
          SetCache.prototype.has = setCacheHas;
          function Stack(entries) {
            var data = this.__data__ = new ListCache(entries);
            this.size = data.size;
          }
          function stackClear() {
            this.__data__ = new ListCache();
            this.size = 0;
          }
          function stackDelete(key) {
            var data = this.__data__, result2 = data["delete"](key);
            this.size = data.size;
            return result2;
          }
          function stackGet(key) {
            return this.__data__.get(key);
          }
          function stackHas(key) {
            return this.__data__.has(key);
          }
          function stackSet(key, value) {
            var data = this.__data__;
            if (data instanceof ListCache) {
              var pairs = data.__data__;
              if (!Map2 || pairs.length < LARGE_ARRAY_SIZE - 1) {
                pairs.push([key, value]);
                this.size = ++data.size;
                return this;
              }
              data = this.__data__ = new MapCache(pairs);
            }
            data.set(key, value);
            this.size = data.size;
            return this;
          }
          Stack.prototype.clear = stackClear;
          Stack.prototype["delete"] = stackDelete;
          Stack.prototype.get = stackGet;
          Stack.prototype.has = stackHas;
          Stack.prototype.set = stackSet;
          function arrayLikeKeys(value, inherited) {
            var isArr = isArray(value), isArg = !isArr && isArguments(value), isBuff = !isArr && !isArg && isBuffer(value), isType = !isArr && !isArg && !isBuff && isTypedArray(value), skipIndexes = isArr || isArg || isBuff || isType, result2 = skipIndexes ? baseTimes(value.length, String2) : [], length = result2.length;
            for (var key in value) {
              if ((inherited || hasOwnProperty.call(value, key)) && !(skipIndexes && // Safari 9 has enumerable `arguments.length` in strict mode.
              (key == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
              isBuff && (key == "offset" || key == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
              isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || // Skip index properties.
              isIndex(key, length)))) {
                result2.push(key);
              }
            }
            return result2;
          }
          function arraySample(array) {
            var length = array.length;
            return length ? array[baseRandom(0, length - 1)] : undefined2;
          }
          function arraySampleSize(array, n) {
            return shuffleSelf(copyArray(array), baseClamp(n, 0, array.length));
          }
          function arrayShuffle(array) {
            return shuffleSelf(copyArray(array));
          }
          function assignMergeValue(object, key, value) {
            if (value !== undefined2 && !eq(object[key], value) || value === undefined2 && !(key in object)) {
              baseAssignValue(object, key, value);
            }
          }
          function assignValue(object, key, value) {
            var objValue = object[key];
            if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) || value === undefined2 && !(key in object)) {
              baseAssignValue(object, key, value);
            }
          }
          function assocIndexOf(array, key) {
            var length = array.length;
            while (length--) {
              if (eq(array[length][0], key)) {
                return length;
              }
            }
            return -1;
          }
          function baseAggregator(collection, setter, iteratee2, accumulator) {
            baseEach(collection, function(value, key, collection2) {
              setter(accumulator, value, iteratee2(value), collection2);
            });
            return accumulator;
          }
          function baseAssign(object, source) {
            return object && copyObject(source, keys(source), object);
          }
          function baseAssignIn(object, source) {
            return object && copyObject(source, keysIn(source), object);
          }
          function baseAssignValue(object, key, value) {
            if (key == "__proto__" && defineProperty) {
              defineProperty(object, key, {
                "configurable": true,
                "enumerable": true,
                "value": value,
                "writable": true
              });
            } else {
              object[key] = value;
            }
          }
          function baseAt(object, paths) {
            var index = -1, length = paths.length, result2 = Array2(length), skip = object == null;
            while (++index < length) {
              result2[index] = skip ? undefined2 : get(object, paths[index]);
            }
            return result2;
          }
          function baseClamp(number, lower, upper) {
            if (number === number) {
              if (upper !== undefined2) {
                number = number <= upper ? number : upper;
              }
              if (lower !== undefined2) {
                number = number >= lower ? number : lower;
              }
            }
            return number;
          }
          function baseClone(value, bitmask, customizer, key, object, stack) {
            var result2, isDeep = bitmask & CLONE_DEEP_FLAG, isFlat = bitmask & CLONE_FLAT_FLAG, isFull = bitmask & CLONE_SYMBOLS_FLAG;
            if (customizer) {
              result2 = object ? customizer(value, key, object, stack) : customizer(value);
            }
            if (result2 !== undefined2) {
              return result2;
            }
            if (!isObject(value)) {
              return value;
            }
            var isArr = isArray(value);
            if (isArr) {
              result2 = initCloneArray(value);
              if (!isDeep) {
                return copyArray(value, result2);
              }
            } else {
              var tag = getTag(value), isFunc = tag == funcTag || tag == genTag;
              if (isBuffer(value)) {
                return cloneBuffer(value, isDeep);
              }
              if (tag == objectTag || tag == argsTag || isFunc && !object) {
                result2 = isFlat || isFunc ? {} : initCloneObject(value);
                if (!isDeep) {
                  return isFlat ? copySymbolsIn(value, baseAssignIn(result2, value)) : copySymbols(value, baseAssign(result2, value));
                }
              } else {
                if (!cloneableTags[tag]) {
                  return object ? value : {};
                }
                result2 = initCloneByTag(value, tag, isDeep);
              }
            }
            stack || (stack = new Stack());
            var stacked = stack.get(value);
            if (stacked) {
              return stacked;
            }
            stack.set(value, result2);
            if (isSet(value)) {
              value.forEach(function(subValue) {
                result2.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
              });
            } else if (isMap(value)) {
              value.forEach(function(subValue, key2) {
                result2.set(key2, baseClone(subValue, bitmask, customizer, key2, value, stack));
              });
            }
            var keysFunc = isFull ? isFlat ? getAllKeysIn : getAllKeys : isFlat ? keysIn : keys;
            var props = isArr ? undefined2 : keysFunc(value);
            arrayEach(props || value, function(subValue, key2) {
              if (props) {
                key2 = subValue;
                subValue = value[key2];
              }
              assignValue(result2, key2, baseClone(subValue, bitmask, customizer, key2, value, stack));
            });
            return result2;
          }
          function baseConforms(source) {
            var props = keys(source);
            return function(object) {
              return baseConformsTo(object, source, props);
            };
          }
          function baseConformsTo(object, source, props) {
            var length = props.length;
            if (object == null) {
              return !length;
            }
            object = Object2(object);
            while (length--) {
              var key = props[length], predicate = source[key], value = object[key];
              if (value === undefined2 && !(key in object) || !predicate(value)) {
                return false;
              }
            }
            return true;
          }
          function baseDelay(func, wait, args) {
            if (typeof func != "function") {
              throw new TypeError2(FUNC_ERROR_TEXT);
            }
            return setTimeout2(function() {
              func.apply(undefined2, args);
            }, wait);
          }
          function baseDifference(array, values2, iteratee2, comparator) {
            var index = -1, includes2 = arrayIncludes, isCommon = true, length = array.length, result2 = [], valuesLength = values2.length;
            if (!length) {
              return result2;
            }
            if (iteratee2) {
              values2 = arrayMap(values2, baseUnary(iteratee2));
            }
            if (comparator) {
              includes2 = arrayIncludesWith;
              isCommon = false;
            } else if (values2.length >= LARGE_ARRAY_SIZE) {
              includes2 = cacheHas;
              isCommon = false;
              values2 = new SetCache(values2);
            }
            outer:
              while (++index < length) {
                var value = array[index], computed = iteratee2 == null ? value : iteratee2(value);
                value = comparator || value !== 0 ? value : 0;
                if (isCommon && computed === computed) {
                  var valuesIndex = valuesLength;
                  while (valuesIndex--) {
                    if (values2[valuesIndex] === computed) {
                      continue outer;
                    }
                  }
                  result2.push(value);
                } else if (!includes2(values2, computed, comparator)) {
                  result2.push(value);
                }
              }
            return result2;
          }
          var baseEach = createBaseEach(baseForOwn);
          var baseEachRight = createBaseEach(baseForOwnRight, true);
          function baseEvery(collection, predicate) {
            var result2 = true;
            baseEach(collection, function(value, index, collection2) {
              result2 = !!predicate(value, index, collection2);
              return result2;
            });
            return result2;
          }
          function baseExtremum(array, iteratee2, comparator) {
            var index = -1, length = array.length;
            while (++index < length) {
              var value = array[index], current = iteratee2(value);
              if (current != null && (computed === undefined2 ? current === current && !isSymbol(current) : comparator(current, computed))) {
                var computed = current, result2 = value;
              }
            }
            return result2;
          }
          function baseFill(array, value, start, end) {
            var length = array.length;
            start = toInteger(start);
            if (start < 0) {
              start = -start > length ? 0 : length + start;
            }
            end = end === undefined2 || end > length ? length : toInteger(end);
            if (end < 0) {
              end += length;
            }
            end = start > end ? 0 : toLength(end);
            while (start < end) {
              array[start++] = value;
            }
            return array;
          }
          function baseFilter(collection, predicate) {
            var result2 = [];
            baseEach(collection, function(value, index, collection2) {
              if (predicate(value, index, collection2)) {
                result2.push(value);
              }
            });
            return result2;
          }
          function baseFlatten(array, depth, predicate, isStrict, result2) {
            var index = -1, length = array.length;
            predicate || (predicate = isFlattenable);
            result2 || (result2 = []);
            while (++index < length) {
              var value = array[index];
              if (depth > 0 && predicate(value)) {
                if (depth > 1) {
                  baseFlatten(value, depth - 1, predicate, isStrict, result2);
                } else {
                  arrayPush(result2, value);
                }
              } else if (!isStrict) {
                result2[result2.length] = value;
              }
            }
            return result2;
          }
          var baseFor = createBaseFor();
          var baseForRight = createBaseFor(true);
          function baseForOwn(object, iteratee2) {
            return object && baseFor(object, iteratee2, keys);
          }
          function baseForOwnRight(object, iteratee2) {
            return object && baseForRight(object, iteratee2, keys);
          }
          function baseFunctions(object, props) {
            return arrayFilter(props, function(key) {
              return isFunction(object[key]);
            });
          }
          function baseGet(object, path) {
            path = castPath(path, object);
            var index = 0, length = path.length;
            while (object != null && index < length) {
              object = object[toKey(path[index++])];
            }
            return index && index == length ? object : undefined2;
          }
          function baseGetAllKeys(object, keysFunc, symbolsFunc) {
            var result2 = keysFunc(object);
            return isArray(object) ? result2 : arrayPush(result2, symbolsFunc(object));
          }
          function baseGetTag(value) {
            if (value == null) {
              return value === undefined2 ? undefinedTag : nullTag;
            }
            return symToStringTag && symToStringTag in Object2(value) ? getRawTag(value) : objectToString(value);
          }
          function baseGt(value, other) {
            return value > other;
          }
          function baseHas(object, key) {
            return object != null && hasOwnProperty.call(object, key);
          }
          function baseHasIn(object, key) {
            return object != null && key in Object2(object);
          }
          function baseInRange(number, start, end) {
            return number >= nativeMin(start, end) && number < nativeMax(start, end);
          }
          function baseIntersection(arrays, iteratee2, comparator) {
            var includes2 = comparator ? arrayIncludesWith : arrayIncludes, length = arrays[0].length, othLength = arrays.length, othIndex = othLength, caches = Array2(othLength), maxLength = Infinity, result2 = [];
            while (othIndex--) {
              var array = arrays[othIndex];
              if (othIndex && iteratee2) {
                array = arrayMap(array, baseUnary(iteratee2));
              }
              maxLength = nativeMin(array.length, maxLength);
              caches[othIndex] = !comparator && (iteratee2 || length >= 120 && array.length >= 120) ? new SetCache(othIndex && array) : undefined2;
            }
            array = arrays[0];
            var index = -1, seen = caches[0];
            outer:
              while (++index < length && result2.length < maxLength) {
                var value = array[index], computed = iteratee2 ? iteratee2(value) : value;
                value = comparator || value !== 0 ? value : 0;
                if (!(seen ? cacheHas(seen, computed) : includes2(result2, computed, comparator))) {
                  othIndex = othLength;
                  while (--othIndex) {
                    var cache = caches[othIndex];
                    if (!(cache ? cacheHas(cache, computed) : includes2(arrays[othIndex], computed, comparator))) {
                      continue outer;
                    }
                  }
                  if (seen) {
                    seen.push(computed);
                  }
                  result2.push(value);
                }
              }
            return result2;
          }
          function baseInverter(object, setter, iteratee2, accumulator) {
            baseForOwn(object, function(value, key, object2) {
              setter(accumulator, iteratee2(value), key, object2);
            });
            return accumulator;
          }
          function baseInvoke(object, path, args) {
            path = castPath(path, object);
            object = parent(object, path);
            var func = object == null ? object : object[toKey(last(path))];
            return func == null ? undefined2 : apply(func, object, args);
          }
          function baseIsArguments(value) {
            return isObjectLike(value) && baseGetTag(value) == argsTag;
          }
          function baseIsArrayBuffer(value) {
            return isObjectLike(value) && baseGetTag(value) == arrayBufferTag;
          }
          function baseIsDate(value) {
            return isObjectLike(value) && baseGetTag(value) == dateTag;
          }
          function baseIsEqual(value, other, bitmask, customizer, stack) {
            if (value === other) {
              return true;
            }
            if (value == null || other == null || !isObjectLike(value) && !isObjectLike(other)) {
              return value !== value && other !== other;
            }
            return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
          }
          function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
            var objIsArr = isArray(object), othIsArr = isArray(other), objTag = objIsArr ? arrayTag : getTag(object), othTag = othIsArr ? arrayTag : getTag(other);
            objTag = objTag == argsTag ? objectTag : objTag;
            othTag = othTag == argsTag ? objectTag : othTag;
            var objIsObj = objTag == objectTag, othIsObj = othTag == objectTag, isSameTag = objTag == othTag;
            if (isSameTag && isBuffer(object)) {
              if (!isBuffer(other)) {
                return false;
              }
              objIsArr = true;
              objIsObj = false;
            }
            if (isSameTag && !objIsObj) {
              stack || (stack = new Stack());
              return objIsArr || isTypedArray(object) ? equalArrays(object, other, bitmask, customizer, equalFunc, stack) : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
            }
            if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
              var objIsWrapped = objIsObj && hasOwnProperty.call(object, "__wrapped__"), othIsWrapped = othIsObj && hasOwnProperty.call(other, "__wrapped__");
              if (objIsWrapped || othIsWrapped) {
                var objUnwrapped = objIsWrapped ? object.value() : object, othUnwrapped = othIsWrapped ? other.value() : other;
                stack || (stack = new Stack());
                return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
              }
            }
            if (!isSameTag) {
              return false;
            }
            stack || (stack = new Stack());
            return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
          }
          function baseIsMap(value) {
            return isObjectLike(value) && getTag(value) == mapTag;
          }
          function baseIsMatch(object, source, matchData, customizer) {
            var index = matchData.length, length = index, noCustomizer = !customizer;
            if (object == null) {
              return !length;
            }
            object = Object2(object);
            while (index--) {
              var data = matchData[index];
              if (noCustomizer && data[2] ? data[1] !== object[data[0]] : !(data[0] in object)) {
                return false;
              }
            }
            while (++index < length) {
              data = matchData[index];
              var key = data[0], objValue = object[key], srcValue = data[1];
              if (noCustomizer && data[2]) {
                if (objValue === undefined2 && !(key in object)) {
                  return false;
                }
              } else {
                var stack = new Stack();
                if (customizer) {
                  var result2 = customizer(objValue, srcValue, key, object, source, stack);
                }
                if (!(result2 === undefined2 ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack) : result2)) {
                  return false;
                }
              }
            }
            return true;
          }
          function baseIsNative(value) {
            if (!isObject(value) || isMasked(value)) {
              return false;
            }
            var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
            return pattern.test(toSource(value));
          }
          function baseIsRegExp(value) {
            return isObjectLike(value) && baseGetTag(value) == regexpTag;
          }
          function baseIsSet(value) {
            return isObjectLike(value) && getTag(value) == setTag;
          }
          function baseIsTypedArray(value) {
            return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
          }
          function baseIteratee(value) {
            if (typeof value == "function") {
              return value;
            }
            if (value == null) {
              return identity;
            }
            if (typeof value == "object") {
              return isArray(value) ? baseMatchesProperty(value[0], value[1]) : baseMatches(value);
            }
            return property(value);
          }
          function baseKeys(object) {
            if (!isPrototype(object)) {
              return nativeKeys(object);
            }
            var result2 = [];
            for (var key in Object2(object)) {
              if (hasOwnProperty.call(object, key) && key != "constructor") {
                result2.push(key);
              }
            }
            return result2;
          }
          function baseKeysIn(object) {
            if (!isObject(object)) {
              return nativeKeysIn(object);
            }
            var isProto = isPrototype(object), result2 = [];
            for (var key in object) {
              if (!(key == "constructor" && (isProto || !hasOwnProperty.call(object, key)))) {
                result2.push(key);
              }
            }
            return result2;
          }
          function baseLt(value, other) {
            return value < other;
          }
          function baseMap(collection, iteratee2) {
            var index = -1, result2 = isArrayLike(collection) ? Array2(collection.length) : [];
            baseEach(collection, function(value, key, collection2) {
              result2[++index] = iteratee2(value, key, collection2);
            });
            return result2;
          }
          function baseMatches(source) {
            var matchData = getMatchData(source);
            if (matchData.length == 1 && matchData[0][2]) {
              return matchesStrictComparable(matchData[0][0], matchData[0][1]);
            }
            return function(object) {
              return object === source || baseIsMatch(object, source, matchData);
            };
          }
          function baseMatchesProperty(path, srcValue) {
            if (isKey(path) && isStrictComparable(srcValue)) {
              return matchesStrictComparable(toKey(path), srcValue);
            }
            return function(object) {
              var objValue = get(object, path);
              return objValue === undefined2 && objValue === srcValue ? hasIn(object, path) : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
            };
          }
          function baseMerge(object, source, srcIndex, customizer, stack) {
            if (object === source) {
              return;
            }
            baseFor(source, function(srcValue, key) {
              stack || (stack = new Stack());
              if (isObject(srcValue)) {
                baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
              } else {
                var newValue = customizer ? customizer(safeGet(object, key), srcValue, key + "", object, source, stack) : undefined2;
                if (newValue === undefined2) {
                  newValue = srcValue;
                }
                assignMergeValue(object, key, newValue);
              }
            }, keysIn);
          }
          function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
            var objValue = safeGet(object, key), srcValue = safeGet(source, key), stacked = stack.get(srcValue);
            if (stacked) {
              assignMergeValue(object, key, stacked);
              return;
            }
            var newValue = customizer ? customizer(objValue, srcValue, key + "", object, source, stack) : undefined2;
            var isCommon = newValue === undefined2;
            if (isCommon) {
              var isArr = isArray(srcValue), isBuff = !isArr && isBuffer(srcValue), isTyped = !isArr && !isBuff && isTypedArray(srcValue);
              newValue = srcValue;
              if (isArr || isBuff || isTyped) {
                if (isArray(objValue)) {
                  newValue = objValue;
                } else if (isArrayLikeObject(objValue)) {
                  newValue = copyArray(objValue);
                } else if (isBuff) {
                  isCommon = false;
                  newValue = cloneBuffer(srcValue, true);
                } else if (isTyped) {
                  isCommon = false;
                  newValue = cloneTypedArray(srcValue, true);
                } else {
                  newValue = [];
                }
              } else if (isPlainObject(srcValue) || isArguments(srcValue)) {
                newValue = objValue;
                if (isArguments(objValue)) {
                  newValue = toPlainObject(objValue);
                } else if (!isObject(objValue) || isFunction(objValue)) {
                  newValue = initCloneObject(srcValue);
                }
              } else {
                isCommon = false;
              }
            }
            if (isCommon) {
              stack.set(srcValue, newValue);
              mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
              stack["delete"](srcValue);
            }
            assignMergeValue(object, key, newValue);
          }
          function baseNth(array, n) {
            var length = array.length;
            if (!length) {
              return;
            }
            n += n < 0 ? length : 0;
            return isIndex(n, length) ? array[n] : undefined2;
          }
          function baseOrderBy(collection, iteratees, orders) {
            if (iteratees.length) {
              iteratees = arrayMap(iteratees, function(iteratee2) {
                if (isArray(iteratee2)) {
                  return function(value) {
                    return baseGet(value, iteratee2.length === 1 ? iteratee2[0] : iteratee2);
                  };
                }
                return iteratee2;
              });
            } else {
              iteratees = [identity];
            }
            var index = -1;
            iteratees = arrayMap(iteratees, baseUnary(getIteratee()));
            var result2 = baseMap(collection, function(value, key, collection2) {
              var criteria = arrayMap(iteratees, function(iteratee2) {
                return iteratee2(value);
              });
              return { "criteria": criteria, "index": ++index, "value": value };
            });
            return baseSortBy(result2, function(object, other) {
              return compareMultiple(object, other, orders);
            });
          }
          function basePick(object, paths) {
            return basePickBy(object, paths, function(value, path) {
              return hasIn(object, path);
            });
          }
          function basePickBy(object, paths, predicate) {
            var index = -1, length = paths.length, result2 = {};
            while (++index < length) {
              var path = paths[index], value = baseGet(object, path);
              if (predicate(value, path)) {
                baseSet(result2, castPath(path, object), value);
              }
            }
            return result2;
          }
          function basePropertyDeep(path) {
            return function(object) {
              return baseGet(object, path);
            };
          }
          function basePullAll(array, values2, iteratee2, comparator) {
            var indexOf2 = comparator ? baseIndexOfWith : baseIndexOf, index = -1, length = values2.length, seen = array;
            if (array === values2) {
              values2 = copyArray(values2);
            }
            if (iteratee2) {
              seen = arrayMap(array, baseUnary(iteratee2));
            }
            while (++index < length) {
              var fromIndex = 0, value = values2[index], computed = iteratee2 ? iteratee2(value) : value;
              while ((fromIndex = indexOf2(seen, computed, fromIndex, comparator)) > -1) {
                if (seen !== array) {
                  splice.call(seen, fromIndex, 1);
                }
                splice.call(array, fromIndex, 1);
              }
            }
            return array;
          }
          function basePullAt(array, indexes) {
            var length = array ? indexes.length : 0, lastIndex = length - 1;
            while (length--) {
              var index = indexes[length];
              if (length == lastIndex || index !== previous) {
                var previous = index;
                if (isIndex(index)) {
                  splice.call(array, index, 1);
                } else {
                  baseUnset(array, index);
                }
              }
            }
            return array;
          }
          function baseRandom(lower, upper) {
            return lower + nativeFloor(nativeRandom() * (upper - lower + 1));
          }
          function baseRange(start, end, step, fromRight) {
            var index = -1, length = nativeMax(nativeCeil((end - start) / (step || 1)), 0), result2 = Array2(length);
            while (length--) {
              result2[fromRight ? length : ++index] = start;
              start += step;
            }
            return result2;
          }
          function baseRepeat(string, n) {
            var result2 = "";
            if (!string || n < 1 || n > MAX_SAFE_INTEGER) {
              return result2;
            }
            do {
              if (n % 2) {
                result2 += string;
              }
              n = nativeFloor(n / 2);
              if (n) {
                string += string;
              }
            } while (n);
            return result2;
          }
          function baseRest(func, start) {
            return setToString(overRest(func, start, identity), func + "");
          }
          function baseSample(collection) {
            return arraySample(values(collection));
          }
          function baseSampleSize(collection, n) {
            var array = values(collection);
            return shuffleSelf(array, baseClamp(n, 0, array.length));
          }
          function baseSet(object, path, value, customizer) {
            if (!isObject(object)) {
              return object;
            }
            path = castPath(path, object);
            var index = -1, length = path.length, lastIndex = length - 1, nested = object;
            while (nested != null && ++index < length) {
              var key = toKey(path[index]), newValue = value;
              if (key === "__proto__" || key === "constructor" || key === "prototype") {
                return object;
              }
              if (index != lastIndex) {
                var objValue = nested[key];
                newValue = customizer ? customizer(objValue, key, nested) : undefined2;
                if (newValue === undefined2) {
                  newValue = isObject(objValue) ? objValue : isIndex(path[index + 1]) ? [] : {};
                }
              }
              assignValue(nested, key, newValue);
              nested = nested[key];
            }
            return object;
          }
          var baseSetData = !metaMap ? identity : function(func, data) {
            metaMap.set(func, data);
            return func;
          };
          var baseSetToString = !defineProperty ? identity : function(func, string) {
            return defineProperty(func, "toString", {
              "configurable": true,
              "enumerable": false,
              "value": constant(string),
              "writable": true
            });
          };
          function baseShuffle(collection) {
            return shuffleSelf(values(collection));
          }
          function baseSlice(array, start, end) {
            var index = -1, length = array.length;
            if (start < 0) {
              start = -start > length ? 0 : length + start;
            }
            end = end > length ? length : end;
            if (end < 0) {
              end += length;
            }
            length = start > end ? 0 : end - start >>> 0;
            start >>>= 0;
            var result2 = Array2(length);
            while (++index < length) {
              result2[index] = array[index + start];
            }
            return result2;
          }
          function baseSome(collection, predicate) {
            var result2;
            baseEach(collection, function(value, index, collection2) {
              result2 = predicate(value, index, collection2);
              return !result2;
            });
            return !!result2;
          }
          function baseSortedIndex(array, value, retHighest) {
            var low = 0, high = array == null ? low : array.length;
            if (typeof value == "number" && value === value && high <= HALF_MAX_ARRAY_LENGTH) {
              while (low < high) {
                var mid = low + high >>> 1, computed = array[mid];
                if (computed !== null && !isSymbol(computed) && (retHighest ? computed <= value : computed < value)) {
                  low = mid + 1;
                } else {
                  high = mid;
                }
              }
              return high;
            }
            return baseSortedIndexBy(array, value, identity, retHighest);
          }
          function baseSortedIndexBy(array, value, iteratee2, retHighest) {
            var low = 0, high = array == null ? 0 : array.length;
            if (high === 0) {
              return 0;
            }
            value = iteratee2(value);
            var valIsNaN = value !== value, valIsNull = value === null, valIsSymbol = isSymbol(value), valIsUndefined = value === undefined2;
            while (low < high) {
              var mid = nativeFloor((low + high) / 2), computed = iteratee2(array[mid]), othIsDefined = computed !== undefined2, othIsNull = computed === null, othIsReflexive = computed === computed, othIsSymbol = isSymbol(computed);
              if (valIsNaN) {
                var setLow = retHighest || othIsReflexive;
              } else if (valIsUndefined) {
                setLow = othIsReflexive && (retHighest || othIsDefined);
              } else if (valIsNull) {
                setLow = othIsReflexive && othIsDefined && (retHighest || !othIsNull);
              } else if (valIsSymbol) {
                setLow = othIsReflexive && othIsDefined && !othIsNull && (retHighest || !othIsSymbol);
              } else if (othIsNull || othIsSymbol) {
                setLow = false;
              } else {
                setLow = retHighest ? computed <= value : computed < value;
              }
              if (setLow) {
                low = mid + 1;
              } else {
                high = mid;
              }
            }
            return nativeMin(high, MAX_ARRAY_INDEX);
          }
          function baseSortedUniq(array, iteratee2) {
            var index = -1, length = array.length, resIndex = 0, result2 = [];
            while (++index < length) {
              var value = array[index], computed = iteratee2 ? iteratee2(value) : value;
              if (!index || !eq(computed, seen)) {
                var seen = computed;
                result2[resIndex++] = value === 0 ? 0 : value;
              }
            }
            return result2;
          }
          function baseToNumber(value) {
            if (typeof value == "number") {
              return value;
            }
            if (isSymbol(value)) {
              return NAN;
            }
            return +value;
          }
          function baseToString(value) {
            if (typeof value == "string") {
              return value;
            }
            if (isArray(value)) {
              return arrayMap(value, baseToString) + "";
            }
            if (isSymbol(value)) {
              return symbolToString ? symbolToString.call(value) : "";
            }
            var result2 = value + "";
            return result2 == "0" && 1 / value == -INFINITY ? "-0" : result2;
          }
          function baseUniq(array, iteratee2, comparator) {
            var index = -1, includes2 = arrayIncludes, length = array.length, isCommon = true, result2 = [], seen = result2;
            if (comparator) {
              isCommon = false;
              includes2 = arrayIncludesWith;
            } else if (length >= LARGE_ARRAY_SIZE) {
              var set2 = iteratee2 ? null : createSet(array);
              if (set2) {
                return setToArray(set2);
              }
              isCommon = false;
              includes2 = cacheHas;
              seen = new SetCache();
            } else {
              seen = iteratee2 ? [] : result2;
            }
            outer:
              while (++index < length) {
                var value = array[index], computed = iteratee2 ? iteratee2(value) : value;
                value = comparator || value !== 0 ? value : 0;
                if (isCommon && computed === computed) {
                  var seenIndex = seen.length;
                  while (seenIndex--) {
                    if (seen[seenIndex] === computed) {
                      continue outer;
                    }
                  }
                  if (iteratee2) {
                    seen.push(computed);
                  }
                  result2.push(value);
                } else if (!includes2(seen, computed, comparator)) {
                  if (seen !== result2) {
                    seen.push(computed);
                  }
                  result2.push(value);
                }
              }
            return result2;
          }
          function baseUnset(object, path) {
            path = castPath(path, object);
            object = parent(object, path);
            return object == null || delete object[toKey(last(path))];
          }
          function baseUpdate(object, path, updater, customizer) {
            return baseSet(object, path, updater(baseGet(object, path)), customizer);
          }
          function baseWhile(array, predicate, isDrop, fromRight) {
            var length = array.length, index = fromRight ? length : -1;
            while ((fromRight ? index-- : ++index < length) && predicate(array[index], index, array)) {
            }
            return isDrop ? baseSlice(array, fromRight ? 0 : index, fromRight ? index + 1 : length) : baseSlice(array, fromRight ? index + 1 : 0, fromRight ? length : index);
          }
          function baseWrapperValue(value, actions) {
            var result2 = value;
            if (result2 instanceof LazyWrapper) {
              result2 = result2.value();
            }
            return arrayReduce(actions, function(result3, action) {
              return action.func.apply(action.thisArg, arrayPush([result3], action.args));
            }, result2);
          }
          function baseXor(arrays, iteratee2, comparator) {
            var length = arrays.length;
            if (length < 2) {
              return length ? baseUniq(arrays[0]) : [];
            }
            var index = -1, result2 = Array2(length);
            while (++index < length) {
              var array = arrays[index], othIndex = -1;
              while (++othIndex < length) {
                if (othIndex != index) {
                  result2[index] = baseDifference(result2[index] || array, arrays[othIndex], iteratee2, comparator);
                }
              }
            }
            return baseUniq(baseFlatten(result2, 1), iteratee2, comparator);
          }
          function baseZipObject(props, values2, assignFunc) {
            var index = -1, length = props.length, valsLength = values2.length, result2 = {};
            while (++index < length) {
              var value = index < valsLength ? values2[index] : undefined2;
              assignFunc(result2, props[index], value);
            }
            return result2;
          }
          function castArrayLikeObject(value) {
            return isArrayLikeObject(value) ? value : [];
          }
          function castFunction(value) {
            return typeof value == "function" ? value : identity;
          }
          function castPath(value, object) {
            if (isArray(value)) {
              return value;
            }
            return isKey(value, object) ? [value] : stringToPath(toString(value));
          }
          var castRest = baseRest;
          function castSlice(array, start, end) {
            var length = array.length;
            end = end === undefined2 ? length : end;
            return !start && end >= length ? array : baseSlice(array, start, end);
          }
          var clearTimeout2 = ctxClearTimeout || function(id) {
            return root.clearTimeout(id);
          };
          function cloneBuffer(buffer, isDeep) {
            if (isDeep) {
              return buffer.slice();
            }
            var length = buffer.length, result2 = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);
            buffer.copy(result2);
            return result2;
          }
          function cloneArrayBuffer(arrayBuffer) {
            var result2 = new arrayBuffer.constructor(arrayBuffer.byteLength);
            new Uint8Array2(result2).set(new Uint8Array2(arrayBuffer));
            return result2;
          }
          function cloneDataView(dataView, isDeep) {
            var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
            return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
          }
          function cloneRegExp(regexp) {
            var result2 = new regexp.constructor(regexp.source, reFlags.exec(regexp));
            result2.lastIndex = regexp.lastIndex;
            return result2;
          }
          function cloneSymbol(symbol) {
            return symbolValueOf ? Object2(symbolValueOf.call(symbol)) : {};
          }
          function cloneTypedArray(typedArray, isDeep) {
            var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
            return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
          }
          function compareAscending(value, other) {
            if (value !== other) {
              var valIsDefined = value !== undefined2, valIsNull = value === null, valIsReflexive = value === value, valIsSymbol = isSymbol(value);
              var othIsDefined = other !== undefined2, othIsNull = other === null, othIsReflexive = other === other, othIsSymbol = isSymbol(other);
              if (!othIsNull && !othIsSymbol && !valIsSymbol && value > other || valIsSymbol && othIsDefined && othIsReflexive && !othIsNull && !othIsSymbol || valIsNull && othIsDefined && othIsReflexive || !valIsDefined && othIsReflexive || !valIsReflexive) {
                return 1;
              }
              if (!valIsNull && !valIsSymbol && !othIsSymbol && value < other || othIsSymbol && valIsDefined && valIsReflexive && !valIsNull && !valIsSymbol || othIsNull && valIsDefined && valIsReflexive || !othIsDefined && valIsReflexive || !othIsReflexive) {
                return -1;
              }
            }
            return 0;
          }
          function compareMultiple(object, other, orders) {
            var index = -1, objCriteria = object.criteria, othCriteria = other.criteria, length = objCriteria.length, ordersLength = orders.length;
            while (++index < length) {
              var result2 = compareAscending(objCriteria[index], othCriteria[index]);
              if (result2) {
                if (index >= ordersLength) {
                  return result2;
                }
                var order = orders[index];
                return result2 * (order == "desc" ? -1 : 1);
              }
            }
            return object.index - other.index;
          }
          function composeArgs(args, partials, holders, isCurried) {
            var argsIndex = -1, argsLength = args.length, holdersLength = holders.length, leftIndex = -1, leftLength = partials.length, rangeLength = nativeMax(argsLength - holdersLength, 0), result2 = Array2(leftLength + rangeLength), isUncurried = !isCurried;
            while (++leftIndex < leftLength) {
              result2[leftIndex] = partials[leftIndex];
            }
            while (++argsIndex < holdersLength) {
              if (isUncurried || argsIndex < argsLength) {
                result2[holders[argsIndex]] = args[argsIndex];
              }
            }
            while (rangeLength--) {
              result2[leftIndex++] = args[argsIndex++];
            }
            return result2;
          }
          function composeArgsRight(args, partials, holders, isCurried) {
            var argsIndex = -1, argsLength = args.length, holdersIndex = -1, holdersLength = holders.length, rightIndex = -1, rightLength = partials.length, rangeLength = nativeMax(argsLength - holdersLength, 0), result2 = Array2(rangeLength + rightLength), isUncurried = !isCurried;
            while (++argsIndex < rangeLength) {
              result2[argsIndex] = args[argsIndex];
            }
            var offset = argsIndex;
            while (++rightIndex < rightLength) {
              result2[offset + rightIndex] = partials[rightIndex];
            }
            while (++holdersIndex < holdersLength) {
              if (isUncurried || argsIndex < argsLength) {
                result2[offset + holders[holdersIndex]] = args[argsIndex++];
              }
            }
            return result2;
          }
          function copyArray(source, array) {
            var index = -1, length = source.length;
            array || (array = Array2(length));
            while (++index < length) {
              array[index] = source[index];
            }
            return array;
          }
          function copyObject(source, props, object, customizer) {
            var isNew = !object;
            object || (object = {});
            var index = -1, length = props.length;
            while (++index < length) {
              var key = props[index];
              var newValue = customizer ? customizer(object[key], source[key], key, object, source) : undefined2;
              if (newValue === undefined2) {
                newValue = source[key];
              }
              if (isNew) {
                baseAssignValue(object, key, newValue);
              } else {
                assignValue(object, key, newValue);
              }
            }
            return object;
          }
          function copySymbols(source, object) {
            return copyObject(source, getSymbols(source), object);
          }
          function copySymbolsIn(source, object) {
            return copyObject(source, getSymbolsIn(source), object);
          }
          function createAggregator(setter, initializer) {
            return function(collection, iteratee2) {
              var func = isArray(collection) ? arrayAggregator : baseAggregator, accumulator = initializer ? initializer() : {};
              return func(collection, setter, getIteratee(iteratee2, 2), accumulator);
            };
          }
          function createAssigner(assigner) {
            return baseRest(function(object, sources) {
              var index = -1, length = sources.length, customizer = length > 1 ? sources[length - 1] : undefined2, guard = length > 2 ? sources[2] : undefined2;
              customizer = assigner.length > 3 && typeof customizer == "function" ? (length--, customizer) : undefined2;
              if (guard && isIterateeCall(sources[0], sources[1], guard)) {
                customizer = length < 3 ? undefined2 : customizer;
                length = 1;
              }
              object = Object2(object);
              while (++index < length) {
                var source = sources[index];
                if (source) {
                  assigner(object, source, index, customizer);
                }
              }
              return object;
            });
          }
          function createBaseEach(eachFunc, fromRight) {
            return function(collection, iteratee2) {
              if (collection == null) {
                return collection;
              }
              if (!isArrayLike(collection)) {
                return eachFunc(collection, iteratee2);
              }
              var length = collection.length, index = fromRight ? length : -1, iterable = Object2(collection);
              while (fromRight ? index-- : ++index < length) {
                if (iteratee2(iterable[index], index, iterable) === false) {
                  break;
                }
              }
              return collection;
            };
          }
          function createBaseFor(fromRight) {
            return function(object, iteratee2, keysFunc) {
              var index = -1, iterable = Object2(object), props = keysFunc(object), length = props.length;
              while (length--) {
                var key = props[fromRight ? length : ++index];
                if (iteratee2(iterable[key], key, iterable) === false) {
                  break;
                }
              }
              return object;
            };
          }
          function createBind(func, bitmask, thisArg) {
            var isBind = bitmask & WRAP_BIND_FLAG, Ctor = createCtor(func);
            function wrapper() {
              var fn = this && this !== root && this instanceof wrapper ? Ctor : func;
              return fn.apply(isBind ? thisArg : this, arguments);
            }
            return wrapper;
          }
          function createCaseFirst(methodName) {
            return function(string) {
              string = toString(string);
              var strSymbols = hasUnicode(string) ? stringToArray(string) : undefined2;
              var chr = strSymbols ? strSymbols[0] : string.charAt(0);
              var trailing = strSymbols ? castSlice(strSymbols, 1).join("") : string.slice(1);
              return chr[methodName]() + trailing;
            };
          }
          function createCompounder(callback) {
            return function(string) {
              return arrayReduce(words(deburr(string).replace(reApos, "")), callback, "");
            };
          }
          function createCtor(Ctor) {
            return function() {
              var args = arguments;
              switch (args.length) {
                case 0:
                  return new Ctor();
                case 1:
                  return new Ctor(args[0]);
                case 2:
                  return new Ctor(args[0], args[1]);
                case 3:
                  return new Ctor(args[0], args[1], args[2]);
                case 4:
                  return new Ctor(args[0], args[1], args[2], args[3]);
                case 5:
                  return new Ctor(args[0], args[1], args[2], args[3], args[4]);
                case 6:
                  return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5]);
                case 7:
                  return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5], args[6]);
              }
              var thisBinding = baseCreate(Ctor.prototype), result2 = Ctor.apply(thisBinding, args);
              return isObject(result2) ? result2 : thisBinding;
            };
          }
          function createCurry(func, bitmask, arity) {
            var Ctor = createCtor(func);
            function wrapper() {
              var length = arguments.length, args = Array2(length), index = length, placeholder = getHolder(wrapper);
              while (index--) {
                args[index] = arguments[index];
              }
              var holders = length < 3 && args[0] !== placeholder && args[length - 1] !== placeholder ? [] : replaceHolders(args, placeholder);
              length -= holders.length;
              if (length < arity) {
                return createRecurry(
                  func,
                  bitmask,
                  createHybrid,
                  wrapper.placeholder,
                  undefined2,
                  args,
                  holders,
                  undefined2,
                  undefined2,
                  arity - length
                );
              }
              var fn = this && this !== root && this instanceof wrapper ? Ctor : func;
              return apply(fn, this, args);
            }
            return wrapper;
          }
          function createFind(findIndexFunc) {
            return function(collection, predicate, fromIndex) {
              var iterable = Object2(collection);
              if (!isArrayLike(collection)) {
                var iteratee2 = getIteratee(predicate, 3);
                collection = keys(collection);
                predicate = function(key) {
                  return iteratee2(iterable[key], key, iterable);
                };
              }
              var index = findIndexFunc(collection, predicate, fromIndex);
              return index > -1 ? iterable[iteratee2 ? collection[index] : index] : undefined2;
            };
          }
          function createFlow(fromRight) {
            return flatRest(function(funcs) {
              var length = funcs.length, index = length, prereq = LodashWrapper.prototype.thru;
              if (fromRight) {
                funcs.reverse();
              }
              while (index--) {
                var func = funcs[index];
                if (typeof func != "function") {
                  throw new TypeError2(FUNC_ERROR_TEXT);
                }
                if (prereq && !wrapper && getFuncName(func) == "wrapper") {
                  var wrapper = new LodashWrapper([], true);
                }
              }
              index = wrapper ? index : length;
              while (++index < length) {
                func = funcs[index];
                var funcName = getFuncName(func), data = funcName == "wrapper" ? getData(func) : undefined2;
                if (data && isLaziable(data[0]) && data[1] == (WRAP_ARY_FLAG | WRAP_CURRY_FLAG | WRAP_PARTIAL_FLAG | WRAP_REARG_FLAG) && !data[4].length && data[9] == 1) {
                  wrapper = wrapper[getFuncName(data[0])].apply(wrapper, data[3]);
                } else {
                  wrapper = func.length == 1 && isLaziable(func) ? wrapper[funcName]() : wrapper.thru(func);
                }
              }
              return function() {
                var args = arguments, value = args[0];
                if (wrapper && args.length == 1 && isArray(value)) {
                  return wrapper.plant(value).value();
                }
                var index2 = 0, result2 = length ? funcs[index2].apply(this, args) : value;
                while (++index2 < length) {
                  result2 = funcs[index2].call(this, result2);
                }
                return result2;
              };
            });
          }
          function createHybrid(func, bitmask, thisArg, partials, holders, partialsRight, holdersRight, argPos, ary2, arity) {
            var isAry = bitmask & WRAP_ARY_FLAG, isBind = bitmask & WRAP_BIND_FLAG, isBindKey = bitmask & WRAP_BIND_KEY_FLAG, isCurried = bitmask & (WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG), isFlip = bitmask & WRAP_FLIP_FLAG, Ctor = isBindKey ? undefined2 : createCtor(func);
            function wrapper() {
              var length = arguments.length, args = Array2(length), index = length;
              while (index--) {
                args[index] = arguments[index];
              }
              if (isCurried) {
                var placeholder = getHolder(wrapper), holdersCount = countHolders(args, placeholder);
              }
              if (partials) {
                args = composeArgs(args, partials, holders, isCurried);
              }
              if (partialsRight) {
                args = composeArgsRight(args, partialsRight, holdersRight, isCurried);
              }
              length -= holdersCount;
              if (isCurried && length < arity) {
                var newHolders = replaceHolders(args, placeholder);
                return createRecurry(
                  func,
                  bitmask,
                  createHybrid,
                  wrapper.placeholder,
                  thisArg,
                  args,
                  newHolders,
                  argPos,
                  ary2,
                  arity - length
                );
              }
              var thisBinding = isBind ? thisArg : this, fn = isBindKey ? thisBinding[func] : func;
              length = args.length;
              if (argPos) {
                args = reorder(args, argPos);
              } else if (isFlip && length > 1) {
                args.reverse();
              }
              if (isAry && ary2 < length) {
                args.length = ary2;
              }
              if (this && this !== root && this instanceof wrapper) {
                fn = Ctor || createCtor(fn);
              }
              return fn.apply(thisBinding, args);
            }
            return wrapper;
          }
          function createInverter(setter, toIteratee) {
            return function(object, iteratee2) {
              return baseInverter(object, setter, toIteratee(iteratee2), {});
            };
          }
          function createMathOperation(operator, defaultValue) {
            return function(value, other) {
              var result2;
              if (value === undefined2 && other === undefined2) {
                return defaultValue;
              }
              if (value !== undefined2) {
                result2 = value;
              }
              if (other !== undefined2) {
                if (result2 === undefined2) {
                  return other;
                }
                if (typeof value == "string" || typeof other == "string") {
                  value = baseToString(value);
                  other = baseToString(other);
                } else {
                  value = baseToNumber(value);
                  other = baseToNumber(other);
                }
                result2 = operator(value, other);
              }
              return result2;
            };
          }
          function createOver(arrayFunc) {
            return flatRest(function(iteratees) {
              iteratees = arrayMap(iteratees, baseUnary(getIteratee()));
              return baseRest(function(args) {
                var thisArg = this;
                return arrayFunc(iteratees, function(iteratee2) {
                  return apply(iteratee2, thisArg, args);
                });
              });
            });
          }
          function createPadding(length, chars) {
            chars = chars === undefined2 ? " " : baseToString(chars);
            var charsLength = chars.length;
            if (charsLength < 2) {
              return charsLength ? baseRepeat(chars, length) : chars;
            }
            var result2 = baseRepeat(chars, nativeCeil(length / stringSize(chars)));
            return hasUnicode(chars) ? castSlice(stringToArray(result2), 0, length).join("") : result2.slice(0, length);
          }
          function createPartial(func, bitmask, thisArg, partials) {
            var isBind = bitmask & WRAP_BIND_FLAG, Ctor = createCtor(func);
            function wrapper() {
              var argsIndex = -1, argsLength = arguments.length, leftIndex = -1, leftLength = partials.length, args = Array2(leftLength + argsLength), fn = this && this !== root && this instanceof wrapper ? Ctor : func;
              while (++leftIndex < leftLength) {
                args[leftIndex] = partials[leftIndex];
              }
              while (argsLength--) {
                args[leftIndex++] = arguments[++argsIndex];
              }
              return apply(fn, isBind ? thisArg : this, args);
            }
            return wrapper;
          }
          function createRange(fromRight) {
            return function(start, end, step) {
              if (step && typeof step != "number" && isIterateeCall(start, end, step)) {
                end = step = undefined2;
              }
              start = toFinite(start);
              if (end === undefined2) {
                end = start;
                start = 0;
              } else {
                end = toFinite(end);
              }
              step = step === undefined2 ? start < end ? 1 : -1 : toFinite(step);
              return baseRange(start, end, step, fromRight);
            };
          }
          function createRelationalOperation(operator) {
            return function(value, other) {
              if (!(typeof value == "string" && typeof other == "string")) {
                value = toNumber(value);
                other = toNumber(other);
              }
              return operator(value, other);
            };
          }
          function createRecurry(func, bitmask, wrapFunc, placeholder, thisArg, partials, holders, argPos, ary2, arity) {
            var isCurry = bitmask & WRAP_CURRY_FLAG, newHolders = isCurry ? holders : undefined2, newHoldersRight = isCurry ? undefined2 : holders, newPartials = isCurry ? partials : undefined2, newPartialsRight = isCurry ? undefined2 : partials;
            bitmask |= isCurry ? WRAP_PARTIAL_FLAG : WRAP_PARTIAL_RIGHT_FLAG;
            bitmask &= ~(isCurry ? WRAP_PARTIAL_RIGHT_FLAG : WRAP_PARTIAL_FLAG);
            if (!(bitmask & WRAP_CURRY_BOUND_FLAG)) {
              bitmask &= ~(WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG);
            }
            var newData = [
              func,
              bitmask,
              thisArg,
              newPartials,
              newHolders,
              newPartialsRight,
              newHoldersRight,
              argPos,
              ary2,
              arity
            ];
            var result2 = wrapFunc.apply(undefined2, newData);
            if (isLaziable(func)) {
              setData(result2, newData);
            }
            result2.placeholder = placeholder;
            return setWrapToString(result2, func, bitmask);
          }
          function createRound(methodName) {
            var func = Math2[methodName];
            return function(number, precision) {
              number = toNumber(number);
              precision = precision == null ? 0 : nativeMin(toInteger(precision), 292);
              if (precision && nativeIsFinite(number)) {
                var pair = (toString(number) + "e").split("e"), value = func(pair[0] + "e" + (+pair[1] + precision));
                pair = (toString(value) + "e").split("e");
                return +(pair[0] + "e" + (+pair[1] - precision));
              }
              return func(number);
            };
          }
          var createSet = !(Set2 && 1 / setToArray(new Set2([, -0]))[1] == INFINITY) ? noop : function(values2) {
            return new Set2(values2);
          };
          function createToPairs(keysFunc) {
            return function(object) {
              var tag = getTag(object);
              if (tag == mapTag) {
                return mapToArray(object);
              }
              if (tag == setTag) {
                return setToPairs(object);
              }
              return baseToPairs(object, keysFunc(object));
            };
          }
          function createWrap(func, bitmask, thisArg, partials, holders, argPos, ary2, arity) {
            var isBindKey = bitmask & WRAP_BIND_KEY_FLAG;
            if (!isBindKey && typeof func != "function") {
              throw new TypeError2(FUNC_ERROR_TEXT);
            }
            var length = partials ? partials.length : 0;
            if (!length) {
              bitmask &= ~(WRAP_PARTIAL_FLAG | WRAP_PARTIAL_RIGHT_FLAG);
              partials = holders = undefined2;
            }
            ary2 = ary2 === undefined2 ? ary2 : nativeMax(toInteger(ary2), 0);
            arity = arity === undefined2 ? arity : toInteger(arity);
            length -= holders ? holders.length : 0;
            if (bitmask & WRAP_PARTIAL_RIGHT_FLAG) {
              var partialsRight = partials, holdersRight = holders;
              partials = holders = undefined2;
            }
            var data = isBindKey ? undefined2 : getData(func);
            var newData = [
              func,
              bitmask,
              thisArg,
              partials,
              holders,
              partialsRight,
              holdersRight,
              argPos,
              ary2,
              arity
            ];
            if (data) {
              mergeData(newData, data);
            }
            func = newData[0];
            bitmask = newData[1];
            thisArg = newData[2];
            partials = newData[3];
            holders = newData[4];
            arity = newData[9] = newData[9] === undefined2 ? isBindKey ? 0 : func.length : nativeMax(newData[9] - length, 0);
            if (!arity && bitmask & (WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG)) {
              bitmask &= ~(WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG);
            }
            if (!bitmask || bitmask == WRAP_BIND_FLAG) {
              var result2 = createBind(func, bitmask, thisArg);
            } else if (bitmask == WRAP_CURRY_FLAG || bitmask == WRAP_CURRY_RIGHT_FLAG) {
              result2 = createCurry(func, bitmask, arity);
            } else if ((bitmask == WRAP_PARTIAL_FLAG || bitmask == (WRAP_BIND_FLAG | WRAP_PARTIAL_FLAG)) && !holders.length) {
              result2 = createPartial(func, bitmask, thisArg, partials);
            } else {
              result2 = createHybrid.apply(undefined2, newData);
            }
            var setter = data ? baseSetData : setData;
            return setWrapToString(setter(result2, newData), func, bitmask);
          }
          function customDefaultsAssignIn(objValue, srcValue, key, object) {
            if (objValue === undefined2 || eq(objValue, objectProto[key]) && !hasOwnProperty.call(object, key)) {
              return srcValue;
            }
            return objValue;
          }
          function customDefaultsMerge(objValue, srcValue, key, object, source, stack) {
            if (isObject(objValue) && isObject(srcValue)) {
              stack.set(srcValue, objValue);
              baseMerge(objValue, srcValue, undefined2, customDefaultsMerge, stack);
              stack["delete"](srcValue);
            }
            return objValue;
          }
          function customOmitClone(value) {
            return isPlainObject(value) ? undefined2 : value;
          }
          function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
            var isPartial = bitmask & COMPARE_PARTIAL_FLAG, arrLength = array.length, othLength = other.length;
            if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
              return false;
            }
            var arrStacked = stack.get(array);
            var othStacked = stack.get(other);
            if (arrStacked && othStacked) {
              return arrStacked == other && othStacked == array;
            }
            var index = -1, result2 = true, seen = bitmask & COMPARE_UNORDERED_FLAG ? new SetCache() : undefined2;
            stack.set(array, other);
            stack.set(other, array);
            while (++index < arrLength) {
              var arrValue = array[index], othValue = other[index];
              if (customizer) {
                var compared = isPartial ? customizer(othValue, arrValue, index, other, array, stack) : customizer(arrValue, othValue, index, array, other, stack);
              }
              if (compared !== undefined2) {
                if (compared) {
                  continue;
                }
                result2 = false;
                break;
              }
              if (seen) {
                if (!arraySome(other, function(othValue2, othIndex) {
                  if (!cacheHas(seen, othIndex) && (arrValue === othValue2 || equalFunc(arrValue, othValue2, bitmask, customizer, stack))) {
                    return seen.push(othIndex);
                  }
                })) {
                  result2 = false;
                  break;
                }
              } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
                result2 = false;
                break;
              }
            }
            stack["delete"](array);
            stack["delete"](other);
            return result2;
          }
          function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
            switch (tag) {
              case dataViewTag:
                if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) {
                  return false;
                }
                object = object.buffer;
                other = other.buffer;
              case arrayBufferTag:
                if (object.byteLength != other.byteLength || !equalFunc(new Uint8Array2(object), new Uint8Array2(other))) {
                  return false;
                }
                return true;
              case boolTag:
              case dateTag:
              case numberTag:
                return eq(+object, +other);
              case errorTag:
                return object.name == other.name && object.message == other.message;
              case regexpTag:
              case stringTag:
                return object == other + "";
              case mapTag:
                var convert = mapToArray;
              case setTag:
                var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
                convert || (convert = setToArray);
                if (object.size != other.size && !isPartial) {
                  return false;
                }
                var stacked = stack.get(object);
                if (stacked) {
                  return stacked == other;
                }
                bitmask |= COMPARE_UNORDERED_FLAG;
                stack.set(object, other);
                var result2 = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
                stack["delete"](object);
                return result2;
              case symbolTag:
                if (symbolValueOf) {
                  return symbolValueOf.call(object) == symbolValueOf.call(other);
                }
            }
            return false;
          }
          function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
            var isPartial = bitmask & COMPARE_PARTIAL_FLAG, objProps = getAllKeys(object), objLength = objProps.length, othProps = getAllKeys(other), othLength = othProps.length;
            if (objLength != othLength && !isPartial) {
              return false;
            }
            var index = objLength;
            while (index--) {
              var key = objProps[index];
              if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
                return false;
              }
            }
            var objStacked = stack.get(object);
            var othStacked = stack.get(other);
            if (objStacked && othStacked) {
              return objStacked == other && othStacked == object;
            }
            var result2 = true;
            stack.set(object, other);
            stack.set(other, object);
            var skipCtor = isPartial;
            while (++index < objLength) {
              key = objProps[index];
              var objValue = object[key], othValue = other[key];
              if (customizer) {
                var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);
              }
              if (!(compared === undefined2 ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
                result2 = false;
                break;
              }
              skipCtor || (skipCtor = key == "constructor");
            }
            if (result2 && !skipCtor) {
              var objCtor = object.constructor, othCtor = other.constructor;
              if (objCtor != othCtor && ("constructor" in object && "constructor" in other) && !(typeof objCtor == "function" && objCtor instanceof objCtor && typeof othCtor == "function" && othCtor instanceof othCtor)) {
                result2 = false;
              }
            }
            stack["delete"](object);
            stack["delete"](other);
            return result2;
          }
          function flatRest(func) {
            return setToString(overRest(func, undefined2, flatten), func + "");
          }
          function getAllKeys(object) {
            return baseGetAllKeys(object, keys, getSymbols);
          }
          function getAllKeysIn(object) {
            return baseGetAllKeys(object, keysIn, getSymbolsIn);
          }
          var getData = !metaMap ? noop : function(func) {
            return metaMap.get(func);
          };
          function getFuncName(func) {
            var result2 = func.name + "", array = realNames[result2], length = hasOwnProperty.call(realNames, result2) ? array.length : 0;
            while (length--) {
              var data = array[length], otherFunc = data.func;
              if (otherFunc == null || otherFunc == func) {
                return data.name;
              }
            }
            return result2;
          }
          function getHolder(func) {
            var object = hasOwnProperty.call(lodash, "placeholder") ? lodash : func;
            return object.placeholder;
          }
          function getIteratee() {
            var result2 = lodash.iteratee || iteratee;
            result2 = result2 === iteratee ? baseIteratee : result2;
            return arguments.length ? result2(arguments[0], arguments[1]) : result2;
          }
          function getMapData(map2, key) {
            var data = map2.__data__;
            return isKeyable(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
          }
          function getMatchData(object) {
            var result2 = keys(object), length = result2.length;
            while (length--) {
              var key = result2[length], value = object[key];
              result2[length] = [key, value, isStrictComparable(value)];
            }
            return result2;
          }
          function getNative(object, key) {
            var value = getValue(object, key);
            return baseIsNative(value) ? value : undefined2;
          }
          function getRawTag(value) {
            var isOwn = hasOwnProperty.call(value, symToStringTag), tag = value[symToStringTag];
            try {
              value[symToStringTag] = undefined2;
              var unmasked = true;
            } catch (e) {
            }
            var result2 = nativeObjectToString.call(value);
            if (unmasked) {
              if (isOwn) {
                value[symToStringTag] = tag;
              } else {
                delete value[symToStringTag];
              }
            }
            return result2;
          }
          var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
            if (object == null) {
              return [];
            }
            object = Object2(object);
            return arrayFilter(nativeGetSymbols(object), function(symbol) {
              return propertyIsEnumerable.call(object, symbol);
            });
          };
          var getSymbolsIn = !nativeGetSymbols ? stubArray : function(object) {
            var result2 = [];
            while (object) {
              arrayPush(result2, getSymbols(object));
              object = getPrototype(object);
            }
            return result2;
          };
          var getTag = baseGetTag;
          if (DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag || Map2 && getTag(new Map2()) != mapTag || Promise2 && getTag(Promise2.resolve()) != promiseTag || Set2 && getTag(new Set2()) != setTag || WeakMap2 && getTag(new WeakMap2()) != weakMapTag) {
            getTag = function(value) {
              var result2 = baseGetTag(value), Ctor = result2 == objectTag ? value.constructor : undefined2, ctorString = Ctor ? toSource(Ctor) : "";
              if (ctorString) {
                switch (ctorString) {
                  case dataViewCtorString:
                    return dataViewTag;
                  case mapCtorString:
                    return mapTag;
                  case promiseCtorString:
                    return promiseTag;
                  case setCtorString:
                    return setTag;
                  case weakMapCtorString:
                    return weakMapTag;
                }
              }
              return result2;
            };
          }
          function getView(start, end, transforms) {
            var index = -1, length = transforms.length;
            while (++index < length) {
              var data = transforms[index], size2 = data.size;
              switch (data.type) {
                case "drop":
                  start += size2;
                  break;
                case "dropRight":
                  end -= size2;
                  break;
                case "take":
                  end = nativeMin(end, start + size2);
                  break;
                case "takeRight":
                  start = nativeMax(start, end - size2);
                  break;
              }
            }
            return { "start": start, "end": end };
          }
          function getWrapDetails(source) {
            var match = source.match(reWrapDetails);
            return match ? match[1].split(reSplitDetails) : [];
          }
          function hasPath(object, path, hasFunc) {
            path = castPath(path, object);
            var index = -1, length = path.length, result2 = false;
            while (++index < length) {
              var key = toKey(path[index]);
              if (!(result2 = object != null && hasFunc(object, key))) {
                break;
              }
              object = object[key];
            }
            if (result2 || ++index != length) {
              return result2;
            }
            length = object == null ? 0 : object.length;
            return !!length && isLength(length) && isIndex(key, length) && (isArray(object) || isArguments(object));
          }
          function initCloneArray(array) {
            var length = array.length, result2 = new array.constructor(length);
            if (length && typeof array[0] == "string" && hasOwnProperty.call(array, "index")) {
              result2.index = array.index;
              result2.input = array.input;
            }
            return result2;
          }
          function initCloneObject(object) {
            return typeof object.constructor == "function" && !isPrototype(object) ? baseCreate(getPrototype(object)) : {};
          }
          function initCloneByTag(object, tag, isDeep) {
            var Ctor = object.constructor;
            switch (tag) {
              case arrayBufferTag:
                return cloneArrayBuffer(object);
              case boolTag:
              case dateTag:
                return new Ctor(+object);
              case dataViewTag:
                return cloneDataView(object, isDeep);
              case float32Tag:
              case float64Tag:
              case int8Tag:
              case int16Tag:
              case int32Tag:
              case uint8Tag:
              case uint8ClampedTag:
              case uint16Tag:
              case uint32Tag:
                return cloneTypedArray(object, isDeep);
              case mapTag:
                return new Ctor();
              case numberTag:
              case stringTag:
                return new Ctor(object);
              case regexpTag:
                return cloneRegExp(object);
              case setTag:
                return new Ctor();
              case symbolTag:
                return cloneSymbol(object);
            }
          }
          function insertWrapDetails(source, details) {
            var length = details.length;
            if (!length) {
              return source;
            }
            var lastIndex = length - 1;
            details[lastIndex] = (length > 1 ? "& " : "") + details[lastIndex];
            details = details.join(length > 2 ? ", " : " ");
            return source.replace(reWrapComment, "{\n/* [wrapped with " + details + "] */\n");
          }
          function isFlattenable(value) {
            return isArray(value) || isArguments(value) || !!(spreadableSymbol && value && value[spreadableSymbol]);
          }
          function isIndex(value, length) {
            var type = typeof value;
            length = length == null ? MAX_SAFE_INTEGER : length;
            return !!length && (type == "number" || type != "symbol" && reIsUint.test(value)) && (value > -1 && value % 1 == 0 && value < length);
          }
          function isIterateeCall(value, index, object) {
            if (!isObject(object)) {
              return false;
            }
            var type = typeof index;
            if (type == "number" ? isArrayLike(object) && isIndex(index, object.length) : type == "string" && index in object) {
              return eq(object[index], value);
            }
            return false;
          }
          function isKey(value, object) {
            if (isArray(value)) {
              return false;
            }
            var type = typeof value;
            if (type == "number" || type == "symbol" || type == "boolean" || value == null || isSymbol(value)) {
              return true;
            }
            return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object2(object);
          }
          function isKeyable(value) {
            var type = typeof value;
            return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
          }
          function isLaziable(func) {
            var funcName = getFuncName(func), other = lodash[funcName];
            if (typeof other != "function" || !(funcName in LazyWrapper.prototype)) {
              return false;
            }
            if (func === other) {
              return true;
            }
            var data = getData(other);
            return !!data && func === data[0];
          }
          function isMasked(func) {
            return !!maskSrcKey && maskSrcKey in func;
          }
          var isMaskable = coreJsData ? isFunction : stubFalse;
          function isPrototype(value) {
            var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto;
            return value === proto;
          }
          function isStrictComparable(value) {
            return value === value && !isObject(value);
          }
          function matchesStrictComparable(key, srcValue) {
            return function(object) {
              if (object == null) {
                return false;
              }
              return object[key] === srcValue && (srcValue !== undefined2 || key in Object2(object));
            };
          }
          function memoizeCapped(func) {
            var result2 = memoize(func, function(key) {
              if (cache.size === MAX_MEMOIZE_SIZE) {
                cache.clear();
              }
              return key;
            });
            var cache = result2.cache;
            return result2;
          }
          function mergeData(data, source) {
            var bitmask = data[1], srcBitmask = source[1], newBitmask = bitmask | srcBitmask, isCommon = newBitmask < (WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG | WRAP_ARY_FLAG);
            var isCombo = srcBitmask == WRAP_ARY_FLAG && bitmask == WRAP_CURRY_FLAG || srcBitmask == WRAP_ARY_FLAG && bitmask == WRAP_REARG_FLAG && data[7].length <= source[8] || srcBitmask == (WRAP_ARY_FLAG | WRAP_REARG_FLAG) && source[7].length <= source[8] && bitmask == WRAP_CURRY_FLAG;
            if (!(isCommon || isCombo)) {
              return data;
            }
            if (srcBitmask & WRAP_BIND_FLAG) {
              data[2] = source[2];
              newBitmask |= bitmask & WRAP_BIND_FLAG ? 0 : WRAP_CURRY_BOUND_FLAG;
            }
            var value = source[3];
            if (value) {
              var partials = data[3];
              data[3] = partials ? composeArgs(partials, value, source[4]) : value;
              data[4] = partials ? replaceHolders(data[3], PLACEHOLDER) : source[4];
            }
            value = source[5];
            if (value) {
              partials = data[5];
              data[5] = partials ? composeArgsRight(partials, value, source[6]) : value;
              data[6] = partials ? replaceHolders(data[5], PLACEHOLDER) : source[6];
            }
            value = source[7];
            if (value) {
              data[7] = value;
            }
            if (srcBitmask & WRAP_ARY_FLAG) {
              data[8] = data[8] == null ? source[8] : nativeMin(data[8], source[8]);
            }
            if (data[9] == null) {
              data[9] = source[9];
            }
            data[0] = source[0];
            data[1] = newBitmask;
            return data;
          }
          function nativeKeysIn(object) {
            var result2 = [];
            if (object != null) {
              for (var key in Object2(object)) {
                result2.push(key);
              }
            }
            return result2;
          }
          function objectToString(value) {
            return nativeObjectToString.call(value);
          }
          function overRest(func, start, transform2) {
            start = nativeMax(start === undefined2 ? func.length - 1 : start, 0);
            return function() {
              var args = arguments, index = -1, length = nativeMax(args.length - start, 0), array = Array2(length);
              while (++index < length) {
                array[index] = args[start + index];
              }
              index = -1;
              var otherArgs = Array2(start + 1);
              while (++index < start) {
                otherArgs[index] = args[index];
              }
              otherArgs[start] = transform2(array);
              return apply(func, this, otherArgs);
            };
          }
          function parent(object, path) {
            return path.length < 2 ? object : baseGet(object, baseSlice(path, 0, -1));
          }
          function reorder(array, indexes) {
            var arrLength = array.length, length = nativeMin(indexes.length, arrLength), oldArray = copyArray(array);
            while (length--) {
              var index = indexes[length];
              array[length] = isIndex(index, arrLength) ? oldArray[index] : undefined2;
            }
            return array;
          }
          function safeGet(object, key) {
            if (key === "constructor" && typeof object[key] === "function") {
              return;
            }
            if (key == "__proto__") {
              return;
            }
            return object[key];
          }
          var setData = shortOut(baseSetData);
          var setTimeout2 = ctxSetTimeout || function(func, wait) {
            return root.setTimeout(func, wait);
          };
          var setToString = shortOut(baseSetToString);
          function setWrapToString(wrapper, reference, bitmask) {
            var source = reference + "";
            return setToString(wrapper, insertWrapDetails(source, updateWrapDetails(getWrapDetails(source), bitmask)));
          }
          function shortOut(func) {
            var count = 0, lastCalled = 0;
            return function() {
              var stamp = nativeNow(), remaining = HOT_SPAN - (stamp - lastCalled);
              lastCalled = stamp;
              if (remaining > 0) {
                if (++count >= HOT_COUNT) {
                  return arguments[0];
                }
              } else {
                count = 0;
              }
              return func.apply(undefined2, arguments);
            };
          }
          function shuffleSelf(array, size2) {
            var index = -1, length = array.length, lastIndex = length - 1;
            size2 = size2 === undefined2 ? length : size2;
            while (++index < size2) {
              var rand = baseRandom(index, lastIndex), value = array[rand];
              array[rand] = array[index];
              array[index] = value;
            }
            array.length = size2;
            return array;
          }
          var stringToPath = memoizeCapped(function(string) {
            var result2 = [];
            if (string.charCodeAt(0) === 46) {
              result2.push("");
            }
            string.replace(rePropName, function(match, number, quote, subString) {
              result2.push(quote ? subString.replace(reEscapeChar, "$1") : number || match);
            });
            return result2;
          });
          function toKey(value) {
            if (typeof value == "string" || isSymbol(value)) {
              return value;
            }
            var result2 = value + "";
            return result2 == "0" && 1 / value == -INFINITY ? "-0" : result2;
          }
          function toSource(func) {
            if (func != null) {
              try {
                return funcToString.call(func);
              } catch (e) {
              }
              try {
                return func + "";
              } catch (e) {
              }
            }
            return "";
          }
          function updateWrapDetails(details, bitmask) {
            arrayEach(wrapFlags, function(pair) {
              var value = "_." + pair[0];
              if (bitmask & pair[1] && !arrayIncludes(details, value)) {
                details.push(value);
              }
            });
            return details.sort();
          }
          function wrapperClone(wrapper) {
            if (wrapper instanceof LazyWrapper) {
              return wrapper.clone();
            }
            var result2 = new LodashWrapper(wrapper.__wrapped__, wrapper.__chain__);
            result2.__actions__ = copyArray(wrapper.__actions__);
            result2.__index__ = wrapper.__index__;
            result2.__values__ = wrapper.__values__;
            return result2;
          }
          function chunk(array, size2, guard) {
            if (guard ? isIterateeCall(array, size2, guard) : size2 === undefined2) {
              size2 = 1;
            } else {
              size2 = nativeMax(toInteger(size2), 0);
            }
            var length = array == null ? 0 : array.length;
            if (!length || size2 < 1) {
              return [];
            }
            var index = 0, resIndex = 0, result2 = Array2(nativeCeil(length / size2));
            while (index < length) {
              result2[resIndex++] = baseSlice(array, index, index += size2);
            }
            return result2;
          }
          function compact(array) {
            var index = -1, length = array == null ? 0 : array.length, resIndex = 0, result2 = [];
            while (++index < length) {
              var value = array[index];
              if (value) {
                result2[resIndex++] = value;
              }
            }
            return result2;
          }
          function concat() {
            var length = arguments.length;
            if (!length) {
              return [];
            }
            var args = Array2(length - 1), array = arguments[0], index = length;
            while (index--) {
              args[index - 1] = arguments[index];
            }
            return arrayPush(isArray(array) ? copyArray(array) : [array], baseFlatten(args, 1));
          }
          var difference = baseRest(function(array, values2) {
            return isArrayLikeObject(array) ? baseDifference(array, baseFlatten(values2, 1, isArrayLikeObject, true)) : [];
          });
          var differenceBy = baseRest(function(array, values2) {
            var iteratee2 = last(values2);
            if (isArrayLikeObject(iteratee2)) {
              iteratee2 = undefined2;
            }
            return isArrayLikeObject(array) ? baseDifference(array, baseFlatten(values2, 1, isArrayLikeObject, true), getIteratee(iteratee2, 2)) : [];
          });
          var differenceWith = baseRest(function(array, values2) {
            var comparator = last(values2);
            if (isArrayLikeObject(comparator)) {
              comparator = undefined2;
            }
            return isArrayLikeObject(array) ? baseDifference(array, baseFlatten(values2, 1, isArrayLikeObject, true), undefined2, comparator) : [];
          });
          function drop(array, n, guard) {
            var length = array == null ? 0 : array.length;
            if (!length) {
              return [];
            }
            n = guard || n === undefined2 ? 1 : toInteger(n);
            return baseSlice(array, n < 0 ? 0 : n, length);
          }
          function dropRight(array, n, guard) {
            var length = array == null ? 0 : array.length;
            if (!length) {
              return [];
            }
            n = guard || n === undefined2 ? 1 : toInteger(n);
            n = length - n;
            return baseSlice(array, 0, n < 0 ? 0 : n);
          }
          function dropRightWhile(array, predicate) {
            return array && array.length ? baseWhile(array, getIteratee(predicate, 3), true, true) : [];
          }
          function dropWhile(array, predicate) {
            return array && array.length ? baseWhile(array, getIteratee(predicate, 3), true) : [];
          }
          function fill(array, value, start, end) {
            var length = array == null ? 0 : array.length;
            if (!length) {
              return [];
            }
            if (start && typeof start != "number" && isIterateeCall(array, value, start)) {
              start = 0;
              end = length;
            }
            return baseFill(array, value, start, end);
          }
          function findIndex(array, predicate, fromIndex) {
            var length = array == null ? 0 : array.length;
            if (!length) {
              return -1;
            }
            var index = fromIndex == null ? 0 : toInteger(fromIndex);
            if (index < 0) {
              index = nativeMax(length + index, 0);
            }
            return baseFindIndex(array, getIteratee(predicate, 3), index);
          }
          function findLastIndex(array, predicate, fromIndex) {
            var length = array == null ? 0 : array.length;
            if (!length) {
              return -1;
            }
            var index = length - 1;
            if (fromIndex !== undefined2) {
              index = toInteger(fromIndex);
              index = fromIndex < 0 ? nativeMax(length + index, 0) : nativeMin(index, length - 1);
            }
            return baseFindIndex(array, getIteratee(predicate, 3), index, true);
          }
          function flatten(array) {
            var length = array == null ? 0 : array.length;
            return length ? baseFlatten(array, 1) : [];
          }
          function flattenDeep(array) {
            var length = array == null ? 0 : array.length;
            return length ? baseFlatten(array, INFINITY) : [];
          }
          function flattenDepth(array, depth) {
            var length = array == null ? 0 : array.length;
            if (!length) {
              return [];
            }
            depth = depth === undefined2 ? 1 : toInteger(depth);
            return baseFlatten(array, depth);
          }
          function fromPairs(pairs) {
            var index = -1, length = pairs == null ? 0 : pairs.length, result2 = {};
            while (++index < length) {
              var pair = pairs[index];
              result2[pair[0]] = pair[1];
            }
            return result2;
          }
          function head(array) {
            return array && array.length ? array[0] : undefined2;
          }
          function indexOf(array, value, fromIndex) {
            var length = array == null ? 0 : array.length;
            if (!length) {
              return -1;
            }
            var index = fromIndex == null ? 0 : toInteger(fromIndex);
            if (index < 0) {
              index = nativeMax(length + index, 0);
            }
            return baseIndexOf(array, value, index);
          }
          function initial(array) {
            var length = array == null ? 0 : array.length;
            return length ? baseSlice(array, 0, -1) : [];
          }
          var intersection = baseRest(function(arrays) {
            var mapped = arrayMap(arrays, castArrayLikeObject);
            return mapped.length && mapped[0] === arrays[0] ? baseIntersection(mapped) : [];
          });
          var intersectionBy = baseRest(function(arrays) {
            var iteratee2 = last(arrays), mapped = arrayMap(arrays, castArrayLikeObject);
            if (iteratee2 === last(mapped)) {
              iteratee2 = undefined2;
            } else {
              mapped.pop();
            }
            return mapped.length && mapped[0] === arrays[0] ? baseIntersection(mapped, getIteratee(iteratee2, 2)) : [];
          });
          var intersectionWith = baseRest(function(arrays) {
            var comparator = last(arrays), mapped = arrayMap(arrays, castArrayLikeObject);
            comparator = typeof comparator == "function" ? comparator : undefined2;
            if (comparator) {
              mapped.pop();
            }
            return mapped.length && mapped[0] === arrays[0] ? baseIntersection(mapped, undefined2, comparator) : [];
          });
          function join(array, separator) {
            return array == null ? "" : nativeJoin.call(array, separator);
          }
          function last(array) {
            var length = array == null ? 0 : array.length;
            return length ? array[length - 1] : undefined2;
          }
          function lastIndexOf(array, value, fromIndex) {
            var length = array == null ? 0 : array.length;
            if (!length) {
              return -1;
            }
            var index = length;
            if (fromIndex !== undefined2) {
              index = toInteger(fromIndex);
              index = index < 0 ? nativeMax(length + index, 0) : nativeMin(index, length - 1);
            }
            return value === value ? strictLastIndexOf(array, value, index) : baseFindIndex(array, baseIsNaN, index, true);
          }
          function nth(array, n) {
            return array && array.length ? baseNth(array, toInteger(n)) : undefined2;
          }
          var pull = baseRest(pullAll);
          function pullAll(array, values2) {
            return array && array.length && values2 && values2.length ? basePullAll(array, values2) : array;
          }
          function pullAllBy(array, values2, iteratee2) {
            return array && array.length && values2 && values2.length ? basePullAll(array, values2, getIteratee(iteratee2, 2)) : array;
          }
          function pullAllWith(array, values2, comparator) {
            return array && array.length && values2 && values2.length ? basePullAll(array, values2, undefined2, comparator) : array;
          }
          var pullAt = flatRest(function(array, indexes) {
            var length = array == null ? 0 : array.length, result2 = baseAt(array, indexes);
            basePullAt(array, arrayMap(indexes, function(index) {
              return isIndex(index, length) ? +index : index;
            }).sort(compareAscending));
            return result2;
          });
          function remove(array, predicate) {
            var result2 = [];
            if (!(array && array.length)) {
              return result2;
            }
            var index = -1, indexes = [], length = array.length;
            predicate = getIteratee(predicate, 3);
            while (++index < length) {
              var value = array[index];
              if (predicate(value, index, array)) {
                result2.push(value);
                indexes.push(index);
              }
            }
            basePullAt(array, indexes);
            return result2;
          }
          function reverse(array) {
            return array == null ? array : nativeReverse.call(array);
          }
          function slice(array, start, end) {
            var length = array == null ? 0 : array.length;
            if (!length) {
              return [];
            }
            if (end && typeof end != "number" && isIterateeCall(array, start, end)) {
              start = 0;
              end = length;
            } else {
              start = start == null ? 0 : toInteger(start);
              end = end === undefined2 ? length : toInteger(end);
            }
            return baseSlice(array, start, end);
          }
          function sortedIndex(array, value) {
            return baseSortedIndex(array, value);
          }
          function sortedIndexBy(array, value, iteratee2) {
            return baseSortedIndexBy(array, value, getIteratee(iteratee2, 2));
          }
          function sortedIndexOf(array, value) {
            var length = array == null ? 0 : array.length;
            if (length) {
              var index = baseSortedIndex(array, value);
              if (index < length && eq(array[index], value)) {
                return index;
              }
            }
            return -1;
          }
          function sortedLastIndex(array, value) {
            return baseSortedIndex(array, value, true);
          }
          function sortedLastIndexBy(array, value, iteratee2) {
            return baseSortedIndexBy(array, value, getIteratee(iteratee2, 2), true);
          }
          function sortedLastIndexOf(array, value) {
            var length = array == null ? 0 : array.length;
            if (length) {
              var index = baseSortedIndex(array, value, true) - 1;
              if (eq(array[index], value)) {
                return index;
              }
            }
            return -1;
          }
          function sortedUniq(array) {
            return array && array.length ? baseSortedUniq(array) : [];
          }
          function sortedUniqBy(array, iteratee2) {
            return array && array.length ? baseSortedUniq(array, getIteratee(iteratee2, 2)) : [];
          }
          function tail(array) {
            var length = array == null ? 0 : array.length;
            return length ? baseSlice(array, 1, length) : [];
          }
          function take(array, n, guard) {
            if (!(array && array.length)) {
              return [];
            }
            n = guard || n === undefined2 ? 1 : toInteger(n);
            return baseSlice(array, 0, n < 0 ? 0 : n);
          }
          function takeRight(array, n, guard) {
            var length = array == null ? 0 : array.length;
            if (!length) {
              return [];
            }
            n = guard || n === undefined2 ? 1 : toInteger(n);
            n = length - n;
            return baseSlice(array, n < 0 ? 0 : n, length);
          }
          function takeRightWhile(array, predicate) {
            return array && array.length ? baseWhile(array, getIteratee(predicate, 3), false, true) : [];
          }
          function takeWhile(array, predicate) {
            return array && array.length ? baseWhile(array, getIteratee(predicate, 3)) : [];
          }
          var union = baseRest(function(arrays) {
            return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true));
          });
          var unionBy = baseRest(function(arrays) {
            var iteratee2 = last(arrays);
            if (isArrayLikeObject(iteratee2)) {
              iteratee2 = undefined2;
            }
            return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true), getIteratee(iteratee2, 2));
          });
          var unionWith = baseRest(function(arrays) {
            var comparator = last(arrays);
            comparator = typeof comparator == "function" ? comparator : undefined2;
            return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true), undefined2, comparator);
          });
          function uniq(array) {
            return array && array.length ? baseUniq(array) : [];
          }
          function uniqBy(array, iteratee2) {
            return array && array.length ? baseUniq(array, getIteratee(iteratee2, 2)) : [];
          }
          function uniqWith(array, comparator) {
            comparator = typeof comparator == "function" ? comparator : undefined2;
            return array && array.length ? baseUniq(array, undefined2, comparator) : [];
          }
          function unzip(array) {
            if (!(array && array.length)) {
              return [];
            }
            var length = 0;
            array = arrayFilter(array, function(group) {
              if (isArrayLikeObject(group)) {
                length = nativeMax(group.length, length);
                return true;
              }
            });
            return baseTimes(length, function(index) {
              return arrayMap(array, baseProperty(index));
            });
          }
          function unzipWith(array, iteratee2) {
            if (!(array && array.length)) {
              return [];
            }
            var result2 = unzip(array);
            if (iteratee2 == null) {
              return result2;
            }
            return arrayMap(result2, function(group) {
              return apply(iteratee2, undefined2, group);
            });
          }
          var without = baseRest(function(array, values2) {
            return isArrayLikeObject(array) ? baseDifference(array, values2) : [];
          });
          var xor = baseRest(function(arrays) {
            return baseXor(arrayFilter(arrays, isArrayLikeObject));
          });
          var xorBy = baseRest(function(arrays) {
            var iteratee2 = last(arrays);
            if (isArrayLikeObject(iteratee2)) {
              iteratee2 = undefined2;
            }
            return baseXor(arrayFilter(arrays, isArrayLikeObject), getIteratee(iteratee2, 2));
          });
          var xorWith = baseRest(function(arrays) {
            var comparator = last(arrays);
            comparator = typeof comparator == "function" ? comparator : undefined2;
            return baseXor(arrayFilter(arrays, isArrayLikeObject), undefined2, comparator);
          });
          var zip = baseRest(unzip);
          function zipObject(props, values2) {
            return baseZipObject(props || [], values2 || [], assignValue);
          }
          function zipObjectDeep(props, values2) {
            return baseZipObject(props || [], values2 || [], baseSet);
          }
          var zipWith = baseRest(function(arrays) {
            var length = arrays.length, iteratee2 = length > 1 ? arrays[length - 1] : undefined2;
            iteratee2 = typeof iteratee2 == "function" ? (arrays.pop(), iteratee2) : undefined2;
            return unzipWith(arrays, iteratee2);
          });
          function chain(value) {
            var result2 = lodash(value);
            result2.__chain__ = true;
            return result2;
          }
          function tap(value, interceptor) {
            interceptor(value);
            return value;
          }
          function thru(value, interceptor) {
            return interceptor(value);
          }
          var wrapperAt = flatRest(function(paths) {
            var length = paths.length, start = length ? paths[0] : 0, value = this.__wrapped__, interceptor = function(object) {
              return baseAt(object, paths);
            };
            if (length > 1 || this.__actions__.length || !(value instanceof LazyWrapper) || !isIndex(start)) {
              return this.thru(interceptor);
            }
            value = value.slice(start, +start + (length ? 1 : 0));
            value.__actions__.push({
              "func": thru,
              "args": [interceptor],
              "thisArg": undefined2
            });
            return new LodashWrapper(value, this.__chain__).thru(function(array) {
              if (length && !array.length) {
                array.push(undefined2);
              }
              return array;
            });
          });
          function wrapperChain() {
            return chain(this);
          }
          function wrapperCommit() {
            return new LodashWrapper(this.value(), this.__chain__);
          }
          function wrapperNext() {
            if (this.__values__ === undefined2) {
              this.__values__ = toArray(this.value());
            }
            var done = this.__index__ >= this.__values__.length, value = done ? undefined2 : this.__values__[this.__index__++];
            return { "done": done, "value": value };
          }
          function wrapperToIterator() {
            return this;
          }
          function wrapperPlant(value) {
            var result2, parent2 = this;
            while (parent2 instanceof baseLodash) {
              var clone2 = wrapperClone(parent2);
              clone2.__index__ = 0;
              clone2.__values__ = undefined2;
              if (result2) {
                previous.__wrapped__ = clone2;
              } else {
                result2 = clone2;
              }
              var previous = clone2;
              parent2 = parent2.__wrapped__;
            }
            previous.__wrapped__ = value;
            return result2;
          }
          function wrapperReverse() {
            var value = this.__wrapped__;
            if (value instanceof LazyWrapper) {
              var wrapped = value;
              if (this.__actions__.length) {
                wrapped = new LazyWrapper(this);
              }
              wrapped = wrapped.reverse();
              wrapped.__actions__.push({
                "func": thru,
                "args": [reverse],
                "thisArg": undefined2
              });
              return new LodashWrapper(wrapped, this.__chain__);
            }
            return this.thru(reverse);
          }
          function wrapperValue() {
            return baseWrapperValue(this.__wrapped__, this.__actions__);
          }
          var countBy = createAggregator(function(result2, value, key) {
            if (hasOwnProperty.call(result2, key)) {
              ++result2[key];
            } else {
              baseAssignValue(result2, key, 1);
            }
          });
          function every(collection, predicate, guard) {
            var func = isArray(collection) ? arrayEvery : baseEvery;
            if (guard && isIterateeCall(collection, predicate, guard)) {
              predicate = undefined2;
            }
            return func(collection, getIteratee(predicate, 3));
          }
          function filter(collection, predicate) {
            var func = isArray(collection) ? arrayFilter : baseFilter;
            return func(collection, getIteratee(predicate, 3));
          }
          var find = createFind(findIndex);
          var findLast = createFind(findLastIndex);
          function flatMap(collection, iteratee2) {
            return baseFlatten(map(collection, iteratee2), 1);
          }
          function flatMapDeep(collection, iteratee2) {
            return baseFlatten(map(collection, iteratee2), INFINITY);
          }
          function flatMapDepth(collection, iteratee2, depth) {
            depth = depth === undefined2 ? 1 : toInteger(depth);
            return baseFlatten(map(collection, iteratee2), depth);
          }
          function forEach(collection, iteratee2) {
            var func = isArray(collection) ? arrayEach : baseEach;
            return func(collection, getIteratee(iteratee2, 3));
          }
          function forEachRight(collection, iteratee2) {
            var func = isArray(collection) ? arrayEachRight : baseEachRight;
            return func(collection, getIteratee(iteratee2, 3));
          }
          var groupBy = createAggregator(function(result2, value, key) {
            if (hasOwnProperty.call(result2, key)) {
              result2[key].push(value);
            } else {
              baseAssignValue(result2, key, [value]);
            }
          });
          function includes(collection, value, fromIndex, guard) {
            collection = isArrayLike(collection) ? collection : values(collection);
            fromIndex = fromIndex && !guard ? toInteger(fromIndex) : 0;
            var length = collection.length;
            if (fromIndex < 0) {
              fromIndex = nativeMax(length + fromIndex, 0);
            }
            return isString(collection) ? fromIndex <= length && collection.indexOf(value, fromIndex) > -1 : !!length && baseIndexOf(collection, value, fromIndex) > -1;
          }
          var invokeMap = baseRest(function(collection, path, args) {
            var index = -1, isFunc = typeof path == "function", result2 = isArrayLike(collection) ? Array2(collection.length) : [];
            baseEach(collection, function(value) {
              result2[++index] = isFunc ? apply(path, value, args) : baseInvoke(value, path, args);
            });
            return result2;
          });
          var keyBy = createAggregator(function(result2, value, key) {
            baseAssignValue(result2, key, value);
          });
          function map(collection, iteratee2) {
            var func = isArray(collection) ? arrayMap : baseMap;
            return func(collection, getIteratee(iteratee2, 3));
          }
          function orderBy(collection, iteratees, orders, guard) {
            if (collection == null) {
              return [];
            }
            if (!isArray(iteratees)) {
              iteratees = iteratees == null ? [] : [iteratees];
            }
            orders = guard ? undefined2 : orders;
            if (!isArray(orders)) {
              orders = orders == null ? [] : [orders];
            }
            return baseOrderBy(collection, iteratees, orders);
          }
          var partition = createAggregator(function(result2, value, key) {
            result2[key ? 0 : 1].push(value);
          }, function() {
            return [[], []];
          });
          function reduce(collection, iteratee2, accumulator) {
            var func = isArray(collection) ? arrayReduce : baseReduce, initAccum = arguments.length < 3;
            return func(collection, getIteratee(iteratee2, 4), accumulator, initAccum, baseEach);
          }
          function reduceRight(collection, iteratee2, accumulator) {
            var func = isArray(collection) ? arrayReduceRight : baseReduce, initAccum = arguments.length < 3;
            return func(collection, getIteratee(iteratee2, 4), accumulator, initAccum, baseEachRight);
          }
          function reject(collection, predicate) {
            var func = isArray(collection) ? arrayFilter : baseFilter;
            return func(collection, negate(getIteratee(predicate, 3)));
          }
          function sample(collection) {
            var func = isArray(collection) ? arraySample : baseSample;
            return func(collection);
          }
          function sampleSize(collection, n, guard) {
            if (guard ? isIterateeCall(collection, n, guard) : n === undefined2) {
              n = 1;
            } else {
              n = toInteger(n);
            }
            var func = isArray(collection) ? arraySampleSize : baseSampleSize;
            return func(collection, n);
          }
          function shuffle(collection) {
            var func = isArray(collection) ? arrayShuffle : baseShuffle;
            return func(collection);
          }
          function size(collection) {
            if (collection == null) {
              return 0;
            }
            if (isArrayLike(collection)) {
              return isString(collection) ? stringSize(collection) : collection.length;
            }
            var tag = getTag(collection);
            if (tag == mapTag || tag == setTag) {
              return collection.size;
            }
            return baseKeys(collection).length;
          }
          function some(collection, predicate, guard) {
            var func = isArray(collection) ? arraySome : baseSome;
            if (guard && isIterateeCall(collection, predicate, guard)) {
              predicate = undefined2;
            }
            return func(collection, getIteratee(predicate, 3));
          }
          var sortBy = baseRest(function(collection, iteratees) {
            if (collection == null) {
              return [];
            }
            var length = iteratees.length;
            if (length > 1 && isIterateeCall(collection, iteratees[0], iteratees[1])) {
              iteratees = [];
            } else if (length > 2 && isIterateeCall(iteratees[0], iteratees[1], iteratees[2])) {
              iteratees = [iteratees[0]];
            }
            return baseOrderBy(collection, baseFlatten(iteratees, 1), []);
          });
          var now = ctxNow || function() {
            return root.Date.now();
          };
          function after(n, func) {
            if (typeof func != "function") {
              throw new TypeError2(FUNC_ERROR_TEXT);
            }
            n = toInteger(n);
            return function() {
              if (--n < 1) {
                return func.apply(this, arguments);
              }
            };
          }
          function ary(func, n, guard) {
            n = guard ? undefined2 : n;
            n = func && n == null ? func.length : n;
            return createWrap(func, WRAP_ARY_FLAG, undefined2, undefined2, undefined2, undefined2, n);
          }
          function before(n, func) {
            var result2;
            if (typeof func != "function") {
              throw new TypeError2(FUNC_ERROR_TEXT);
            }
            n = toInteger(n);
            return function() {
              if (--n > 0) {
                result2 = func.apply(this, arguments);
              }
              if (n <= 1) {
                func = undefined2;
              }
              return result2;
            };
          }
          var bind = baseRest(function(func, thisArg, partials) {
            var bitmask = WRAP_BIND_FLAG;
            if (partials.length) {
              var holders = replaceHolders(partials, getHolder(bind));
              bitmask |= WRAP_PARTIAL_FLAG;
            }
            return createWrap(func, bitmask, thisArg, partials, holders);
          });
          var bindKey = baseRest(function(object, key, partials) {
            var bitmask = WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG;
            if (partials.length) {
              var holders = replaceHolders(partials, getHolder(bindKey));
              bitmask |= WRAP_PARTIAL_FLAG;
            }
            return createWrap(key, bitmask, object, partials, holders);
          });
          function curry(func, arity, guard) {
            arity = guard ? undefined2 : arity;
            var result2 = createWrap(func, WRAP_CURRY_FLAG, undefined2, undefined2, undefined2, undefined2, undefined2, arity);
            result2.placeholder = curry.placeholder;
            return result2;
          }
          function curryRight(func, arity, guard) {
            arity = guard ? undefined2 : arity;
            var result2 = createWrap(func, WRAP_CURRY_RIGHT_FLAG, undefined2, undefined2, undefined2, undefined2, undefined2, arity);
            result2.placeholder = curryRight.placeholder;
            return result2;
          }
          function debounce2(func, wait, options) {
            var lastArgs, lastThis, maxWait, result2, timerId, lastCallTime, lastInvokeTime = 0, leading = false, maxing = false, trailing = true;
            if (typeof func != "function") {
              throw new TypeError2(FUNC_ERROR_TEXT);
            }
            wait = toNumber(wait) || 0;
            if (isObject(options)) {
              leading = !!options.leading;
              maxing = "maxWait" in options;
              maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
              trailing = "trailing" in options ? !!options.trailing : trailing;
            }
            function invokeFunc(time) {
              var args = lastArgs, thisArg = lastThis;
              lastArgs = lastThis = undefined2;
              lastInvokeTime = time;
              result2 = func.apply(thisArg, args);
              return result2;
            }
            function leadingEdge(time) {
              lastInvokeTime = time;
              timerId = setTimeout2(timerExpired, wait);
              return leading ? invokeFunc(time) : result2;
            }
            function remainingWait(time) {
              var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime, timeWaiting = wait - timeSinceLastCall;
              return maxing ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke) : timeWaiting;
            }
            function shouldInvoke(time) {
              var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime;
              return lastCallTime === undefined2 || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
            }
            function timerExpired() {
              var time = now();
              if (shouldInvoke(time)) {
                return trailingEdge(time);
              }
              timerId = setTimeout2(timerExpired, remainingWait(time));
            }
            function trailingEdge(time) {
              timerId = undefined2;
              if (trailing && lastArgs) {
                return invokeFunc(time);
              }
              lastArgs = lastThis = undefined2;
              return result2;
            }
            function cancel() {
              if (timerId !== undefined2) {
                clearTimeout2(timerId);
              }
              lastInvokeTime = 0;
              lastArgs = lastCallTime = lastThis = timerId = undefined2;
            }
            function flush() {
              return timerId === undefined2 ? result2 : trailingEdge(now());
            }
            function debounced() {
              var time = now(), isInvoking = shouldInvoke(time);
              lastArgs = arguments;
              lastThis = this;
              lastCallTime = time;
              if (isInvoking) {
                if (timerId === undefined2) {
                  return leadingEdge(lastCallTime);
                }
                if (maxing) {
                  clearTimeout2(timerId);
                  timerId = setTimeout2(timerExpired, wait);
                  return invokeFunc(lastCallTime);
                }
              }
              if (timerId === undefined2) {
                timerId = setTimeout2(timerExpired, wait);
              }
              return result2;
            }
            debounced.cancel = cancel;
            debounced.flush = flush;
            return debounced;
          }
          var defer = baseRest(function(func, args) {
            return baseDelay(func, 1, args);
          });
          var delay = baseRest(function(func, wait, args) {
            return baseDelay(func, toNumber(wait) || 0, args);
          });
          function flip(func) {
            return createWrap(func, WRAP_FLIP_FLAG);
          }
          function memoize(func, resolver) {
            if (typeof func != "function" || resolver != null && typeof resolver != "function") {
              throw new TypeError2(FUNC_ERROR_TEXT);
            }
            var memoized = function() {
              var args = arguments, key = resolver ? resolver.apply(this, args) : args[0], cache = memoized.cache;
              if (cache.has(key)) {
                return cache.get(key);
              }
              var result2 = func.apply(this, args);
              memoized.cache = cache.set(key, result2) || cache;
              return result2;
            };
            memoized.cache = new (memoize.Cache || MapCache)();
            return memoized;
          }
          memoize.Cache = MapCache;
          function negate(predicate) {
            if (typeof predicate != "function") {
              throw new TypeError2(FUNC_ERROR_TEXT);
            }
            return function() {
              var args = arguments;
              switch (args.length) {
                case 0:
                  return !predicate.call(this);
                case 1:
                  return !predicate.call(this, args[0]);
                case 2:
                  return !predicate.call(this, args[0], args[1]);
                case 3:
                  return !predicate.call(this, args[0], args[1], args[2]);
              }
              return !predicate.apply(this, args);
            };
          }
          function once(func) {
            return before(2, func);
          }
          var overArgs = castRest(function(func, transforms) {
            transforms = transforms.length == 1 && isArray(transforms[0]) ? arrayMap(transforms[0], baseUnary(getIteratee())) : arrayMap(baseFlatten(transforms, 1), baseUnary(getIteratee()));
            var funcsLength = transforms.length;
            return baseRest(function(args) {
              var index = -1, length = nativeMin(args.length, funcsLength);
              while (++index < length) {
                args[index] = transforms[index].call(this, args[index]);
              }
              return apply(func, this, args);
            });
          });
          var partial = baseRest(function(func, partials) {
            var holders = replaceHolders(partials, getHolder(partial));
            return createWrap(func, WRAP_PARTIAL_FLAG, undefined2, partials, holders);
          });
          var partialRight = baseRest(function(func, partials) {
            var holders = replaceHolders(partials, getHolder(partialRight));
            return createWrap(func, WRAP_PARTIAL_RIGHT_FLAG, undefined2, partials, holders);
          });
          var rearg = flatRest(function(func, indexes) {
            return createWrap(func, WRAP_REARG_FLAG, undefined2, undefined2, undefined2, indexes);
          });
          function rest(func, start) {
            if (typeof func != "function") {
              throw new TypeError2(FUNC_ERROR_TEXT);
            }
            start = start === undefined2 ? start : toInteger(start);
            return baseRest(func, start);
          }
          function spread(func, start) {
            if (typeof func != "function") {
              throw new TypeError2(FUNC_ERROR_TEXT);
            }
            start = start == null ? 0 : nativeMax(toInteger(start), 0);
            return baseRest(function(args) {
              var array = args[start], otherArgs = castSlice(args, 0, start);
              if (array) {
                arrayPush(otherArgs, array);
              }
              return apply(func, this, otherArgs);
            });
          }
          function throttle(func, wait, options) {
            var leading = true, trailing = true;
            if (typeof func != "function") {
              throw new TypeError2(FUNC_ERROR_TEXT);
            }
            if (isObject(options)) {
              leading = "leading" in options ? !!options.leading : leading;
              trailing = "trailing" in options ? !!options.trailing : trailing;
            }
            return debounce2(func, wait, {
              "leading": leading,
              "maxWait": wait,
              "trailing": trailing
            });
          }
          function unary(func) {
            return ary(func, 1);
          }
          function wrap(value, wrapper) {
            return partial(castFunction(wrapper), value);
          }
          function castArray() {
            if (!arguments.length) {
              return [];
            }
            var value = arguments[0];
            return isArray(value) ? value : [value];
          }
          function clone(value) {
            return baseClone(value, CLONE_SYMBOLS_FLAG);
          }
          function cloneWith(value, customizer) {
            customizer = typeof customizer == "function" ? customizer : undefined2;
            return baseClone(value, CLONE_SYMBOLS_FLAG, customizer);
          }
          function cloneDeep(value) {
            return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG);
          }
          function cloneDeepWith(value, customizer) {
            customizer = typeof customizer == "function" ? customizer : undefined2;
            return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG, customizer);
          }
          function conformsTo(object, source) {
            return source == null || baseConformsTo(object, source, keys(source));
          }
          function eq(value, other) {
            return value === other || value !== value && other !== other;
          }
          var gt = createRelationalOperation(baseGt);
          var gte = createRelationalOperation(function(value, other) {
            return value >= other;
          });
          var isArguments = baseIsArguments(function() {
            return arguments;
          }()) ? baseIsArguments : function(value) {
            return isObjectLike(value) && hasOwnProperty.call(value, "callee") && !propertyIsEnumerable.call(value, "callee");
          };
          var isArray = Array2.isArray;
          var isArrayBuffer = nodeIsArrayBuffer ? baseUnary(nodeIsArrayBuffer) : baseIsArrayBuffer;
          function isArrayLike(value) {
            return value != null && isLength(value.length) && !isFunction(value);
          }
          function isArrayLikeObject(value) {
            return isObjectLike(value) && isArrayLike(value);
          }
          function isBoolean(value) {
            return value === true || value === false || isObjectLike(value) && baseGetTag(value) == boolTag;
          }
          var isBuffer = nativeIsBuffer || stubFalse;
          var isDate = nodeIsDate ? baseUnary(nodeIsDate) : baseIsDate;
          function isElement(value) {
            return isObjectLike(value) && value.nodeType === 1 && !isPlainObject(value);
          }
          function isEmpty(value) {
            if (value == null) {
              return true;
            }
            if (isArrayLike(value) && (isArray(value) || typeof value == "string" || typeof value.splice == "function" || isBuffer(value) || isTypedArray(value) || isArguments(value))) {
              return !value.length;
            }
            var tag = getTag(value);
            if (tag == mapTag || tag == setTag) {
              return !value.size;
            }
            if (isPrototype(value)) {
              return !baseKeys(value).length;
            }
            for (var key in value) {
              if (hasOwnProperty.call(value, key)) {
                return false;
              }
            }
            return true;
          }
          function isEqual(value, other) {
            return baseIsEqual(value, other);
          }
          function isEqualWith(value, other, customizer) {
            customizer = typeof customizer == "function" ? customizer : undefined2;
            var result2 = customizer ? customizer(value, other) : undefined2;
            return result2 === undefined2 ? baseIsEqual(value, other, undefined2, customizer) : !!result2;
          }
          function isError(value) {
            if (!isObjectLike(value)) {
              return false;
            }
            var tag = baseGetTag(value);
            return tag == errorTag || tag == domExcTag || typeof value.message == "string" && typeof value.name == "string" && !isPlainObject(value);
          }
          function isFinite(value) {
            return typeof value == "number" && nativeIsFinite(value);
          }
          function isFunction(value) {
            if (!isObject(value)) {
              return false;
            }
            var tag = baseGetTag(value);
            return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
          }
          function isInteger(value) {
            return typeof value == "number" && value == toInteger(value);
          }
          function isLength(value) {
            return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
          }
          function isObject(value) {
            var type = typeof value;
            return value != null && (type == "object" || type == "function");
          }
          function isObjectLike(value) {
            return value != null && typeof value == "object";
          }
          var isMap = nodeIsMap ? baseUnary(nodeIsMap) : baseIsMap;
          function isMatch(object, source) {
            return object === source || baseIsMatch(object, source, getMatchData(source));
          }
          function isMatchWith(object, source, customizer) {
            customizer = typeof customizer == "function" ? customizer : undefined2;
            return baseIsMatch(object, source, getMatchData(source), customizer);
          }
          function isNaN(value) {
            return isNumber(value) && value != +value;
          }
          function isNative(value) {
            if (isMaskable(value)) {
              throw new Error2(CORE_ERROR_TEXT);
            }
            return baseIsNative(value);
          }
          function isNull(value) {
            return value === null;
          }
          function isNil(value) {
            return value == null;
          }
          function isNumber(value) {
            return typeof value == "number" || isObjectLike(value) && baseGetTag(value) == numberTag;
          }
          function isPlainObject(value) {
            if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
              return false;
            }
            var proto = getPrototype(value);
            if (proto === null) {
              return true;
            }
            var Ctor = hasOwnProperty.call(proto, "constructor") && proto.constructor;
            return typeof Ctor == "function" && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
          }
          var isRegExp = nodeIsRegExp ? baseUnary(nodeIsRegExp) : baseIsRegExp;
          function isSafeInteger(value) {
            return isInteger(value) && value >= -MAX_SAFE_INTEGER && value <= MAX_SAFE_INTEGER;
          }
          var isSet = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet;
          function isString(value) {
            return typeof value == "string" || !isArray(value) && isObjectLike(value) && baseGetTag(value) == stringTag;
          }
          function isSymbol(value) {
            return typeof value == "symbol" || isObjectLike(value) && baseGetTag(value) == symbolTag;
          }
          var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
          function isUndefined(value) {
            return value === undefined2;
          }
          function isWeakMap(value) {
            return isObjectLike(value) && getTag(value) == weakMapTag;
          }
          function isWeakSet(value) {
            return isObjectLike(value) && baseGetTag(value) == weakSetTag;
          }
          var lt = createRelationalOperation(baseLt);
          var lte = createRelationalOperation(function(value, other) {
            return value <= other;
          });
          function toArray(value) {
            if (!value) {
              return [];
            }
            if (isArrayLike(value)) {
              return isString(value) ? stringToArray(value) : copyArray(value);
            }
            if (symIterator && value[symIterator]) {
              return iteratorToArray(value[symIterator]());
            }
            var tag = getTag(value), func = tag == mapTag ? mapToArray : tag == setTag ? setToArray : values;
            return func(value);
          }
          function toFinite(value) {
            if (!value) {
              return value === 0 ? value : 0;
            }
            value = toNumber(value);
            if (value === INFINITY || value === -INFINITY) {
              var sign = value < 0 ? -1 : 1;
              return sign * MAX_INTEGER;
            }
            return value === value ? value : 0;
          }
          function toInteger(value) {
            var result2 = toFinite(value), remainder = result2 % 1;
            return result2 === result2 ? remainder ? result2 - remainder : result2 : 0;
          }
          function toLength(value) {
            return value ? baseClamp(toInteger(value), 0, MAX_ARRAY_LENGTH) : 0;
          }
          function toNumber(value) {
            if (typeof value == "number") {
              return value;
            }
            if (isSymbol(value)) {
              return NAN;
            }
            if (isObject(value)) {
              var other = typeof value.valueOf == "function" ? value.valueOf() : value;
              value = isObject(other) ? other + "" : other;
            }
            if (typeof value != "string") {
              return value === 0 ? value : +value;
            }
            value = baseTrim(value);
            var isBinary = reIsBinary.test(value);
            return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
          }
          function toPlainObject(value) {
            return copyObject(value, keysIn(value));
          }
          function toSafeInteger(value) {
            return value ? baseClamp(toInteger(value), -MAX_SAFE_INTEGER, MAX_SAFE_INTEGER) : value === 0 ? value : 0;
          }
          function toString(value) {
            return value == null ? "" : baseToString(value);
          }
          var assign = createAssigner(function(object, source) {
            if (isPrototype(source) || isArrayLike(source)) {
              copyObject(source, keys(source), object);
              return;
            }
            for (var key in source) {
              if (hasOwnProperty.call(source, key)) {
                assignValue(object, key, source[key]);
              }
            }
          });
          var assignIn = createAssigner(function(object, source) {
            copyObject(source, keysIn(source), object);
          });
          var assignInWith = createAssigner(function(object, source, srcIndex, customizer) {
            copyObject(source, keysIn(source), object, customizer);
          });
          var assignWith = createAssigner(function(object, source, srcIndex, customizer) {
            copyObject(source, keys(source), object, customizer);
          });
          var at = flatRest(baseAt);
          function create(prototype, properties) {
            var result2 = baseCreate(prototype);
            return properties == null ? result2 : baseAssign(result2, properties);
          }
          var defaults = baseRest(function(object, sources) {
            object = Object2(object);
            var index = -1;
            var length = sources.length;
            var guard = length > 2 ? sources[2] : undefined2;
            if (guard && isIterateeCall(sources[0], sources[1], guard)) {
              length = 1;
            }
            while (++index < length) {
              var source = sources[index];
              var props = keysIn(source);
              var propsIndex = -1;
              var propsLength = props.length;
              while (++propsIndex < propsLength) {
                var key = props[propsIndex];
                var value = object[key];
                if (value === undefined2 || eq(value, objectProto[key]) && !hasOwnProperty.call(object, key)) {
                  object[key] = source[key];
                }
              }
            }
            return object;
          });
          var defaultsDeep = baseRest(function(args) {
            args.push(undefined2, customDefaultsMerge);
            return apply(mergeWith, undefined2, args);
          });
          function findKey(object, predicate) {
            return baseFindKey(object, getIteratee(predicate, 3), baseForOwn);
          }
          function findLastKey(object, predicate) {
            return baseFindKey(object, getIteratee(predicate, 3), baseForOwnRight);
          }
          function forIn(object, iteratee2) {
            return object == null ? object : baseFor(object, getIteratee(iteratee2, 3), keysIn);
          }
          function forInRight(object, iteratee2) {
            return object == null ? object : baseForRight(object, getIteratee(iteratee2, 3), keysIn);
          }
          function forOwn(object, iteratee2) {
            return object && baseForOwn(object, getIteratee(iteratee2, 3));
          }
          function forOwnRight(object, iteratee2) {
            return object && baseForOwnRight(object, getIteratee(iteratee2, 3));
          }
          function functions(object) {
            return object == null ? [] : baseFunctions(object, keys(object));
          }
          function functionsIn(object) {
            return object == null ? [] : baseFunctions(object, keysIn(object));
          }
          function get(object, path, defaultValue) {
            var result2 = object == null ? undefined2 : baseGet(object, path);
            return result2 === undefined2 ? defaultValue : result2;
          }
          function has(object, path) {
            return object != null && hasPath(object, path, baseHas);
          }
          function hasIn(object, path) {
            return object != null && hasPath(object, path, baseHasIn);
          }
          var invert = createInverter(function(result2, value, key) {
            if (value != null && typeof value.toString != "function") {
              value = nativeObjectToString.call(value);
            }
            result2[value] = key;
          }, constant(identity));
          var invertBy = createInverter(function(result2, value, key) {
            if (value != null && typeof value.toString != "function") {
              value = nativeObjectToString.call(value);
            }
            if (hasOwnProperty.call(result2, value)) {
              result2[value].push(key);
            } else {
              result2[value] = [key];
            }
          }, getIteratee);
          var invoke = baseRest(baseInvoke);
          function keys(object) {
            return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
          }
          function keysIn(object) {
            return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
          }
          function mapKeys(object, iteratee2) {
            var result2 = {};
            iteratee2 = getIteratee(iteratee2, 3);
            baseForOwn(object, function(value, key, object2) {
              baseAssignValue(result2, iteratee2(value, key, object2), value);
            });
            return result2;
          }
          function mapValues(object, iteratee2) {
            var result2 = {};
            iteratee2 = getIteratee(iteratee2, 3);
            baseForOwn(object, function(value, key, object2) {
              baseAssignValue(result2, key, iteratee2(value, key, object2));
            });
            return result2;
          }
          var merge = createAssigner(function(object, source, srcIndex) {
            baseMerge(object, source, srcIndex);
          });
          var mergeWith = createAssigner(function(object, source, srcIndex, customizer) {
            baseMerge(object, source, srcIndex, customizer);
          });
          var omit = flatRest(function(object, paths) {
            var result2 = {};
            if (object == null) {
              return result2;
            }
            var isDeep = false;
            paths = arrayMap(paths, function(path) {
              path = castPath(path, object);
              isDeep || (isDeep = path.length > 1);
              return path;
            });
            copyObject(object, getAllKeysIn(object), result2);
            if (isDeep) {
              result2 = baseClone(result2, CLONE_DEEP_FLAG | CLONE_FLAT_FLAG | CLONE_SYMBOLS_FLAG, customOmitClone);
            }
            var length = paths.length;
            while (length--) {
              baseUnset(result2, paths[length]);
            }
            return result2;
          });
          function omitBy(object, predicate) {
            return pickBy(object, negate(getIteratee(predicate)));
          }
          var pick = flatRest(function(object, paths) {
            return object == null ? {} : basePick(object, paths);
          });
          function pickBy(object, predicate) {
            if (object == null) {
              return {};
            }
            var props = arrayMap(getAllKeysIn(object), function(prop) {
              return [prop];
            });
            predicate = getIteratee(predicate);
            return basePickBy(object, props, function(value, path) {
              return predicate(value, path[0]);
            });
          }
          function result(object, path, defaultValue) {
            path = castPath(path, object);
            var index = -1, length = path.length;
            if (!length) {
              length = 1;
              object = undefined2;
            }
            while (++index < length) {
              var value = object == null ? undefined2 : object[toKey(path[index])];
              if (value === undefined2) {
                index = length;
                value = defaultValue;
              }
              object = isFunction(value) ? value.call(object) : value;
            }
            return object;
          }
          function set(object, path, value) {
            return object == null ? object : baseSet(object, path, value);
          }
          function setWith(object, path, value, customizer) {
            customizer = typeof customizer == "function" ? customizer : undefined2;
            return object == null ? object : baseSet(object, path, value, customizer);
          }
          var toPairs = createToPairs(keys);
          var toPairsIn = createToPairs(keysIn);
          function transform(object, iteratee2, accumulator) {
            var isArr = isArray(object), isArrLike = isArr || isBuffer(object) || isTypedArray(object);
            iteratee2 = getIteratee(iteratee2, 4);
            if (accumulator == null) {
              var Ctor = object && object.constructor;
              if (isArrLike) {
                accumulator = isArr ? new Ctor() : [];
              } else if (isObject(object)) {
                accumulator = isFunction(Ctor) ? baseCreate(getPrototype(object)) : {};
              } else {
                accumulator = {};
              }
            }
            (isArrLike ? arrayEach : baseForOwn)(object, function(value, index, object2) {
              return iteratee2(accumulator, value, index, object2);
            });
            return accumulator;
          }
          function unset(object, path) {
            return object == null ? true : baseUnset(object, path);
          }
          function update(object, path, updater) {
            return object == null ? object : baseUpdate(object, path, castFunction(updater));
          }
          function updateWith(object, path, updater, customizer) {
            customizer = typeof customizer == "function" ? customizer : undefined2;
            return object == null ? object : baseUpdate(object, path, castFunction(updater), customizer);
          }
          function values(object) {
            return object == null ? [] : baseValues(object, keys(object));
          }
          function valuesIn(object) {
            return object == null ? [] : baseValues(object, keysIn(object));
          }
          function clamp(number, lower, upper) {
            if (upper === undefined2) {
              upper = lower;
              lower = undefined2;
            }
            if (upper !== undefined2) {
              upper = toNumber(upper);
              upper = upper === upper ? upper : 0;
            }
            if (lower !== undefined2) {
              lower = toNumber(lower);
              lower = lower === lower ? lower : 0;
            }
            return baseClamp(toNumber(number), lower, upper);
          }
          function inRange(number, start, end) {
            start = toFinite(start);
            if (end === undefined2) {
              end = start;
              start = 0;
            } else {
              end = toFinite(end);
            }
            number = toNumber(number);
            return baseInRange(number, start, end);
          }
          function random(lower, upper, floating) {
            if (floating && typeof floating != "boolean" && isIterateeCall(lower, upper, floating)) {
              upper = floating = undefined2;
            }
            if (floating === undefined2) {
              if (typeof upper == "boolean") {
                floating = upper;
                upper = undefined2;
              } else if (typeof lower == "boolean") {
                floating = lower;
                lower = undefined2;
              }
            }
            if (lower === undefined2 && upper === undefined2) {
              lower = 0;
              upper = 1;
            } else {
              lower = toFinite(lower);
              if (upper === undefined2) {
                upper = lower;
                lower = 0;
              } else {
                upper = toFinite(upper);
              }
            }
            if (lower > upper) {
              var temp = lower;
              lower = upper;
              upper = temp;
            }
            if (floating || lower % 1 || upper % 1) {
              var rand = nativeRandom();
              return nativeMin(lower + rand * (upper - lower + freeParseFloat("1e-" + ((rand + "").length - 1))), upper);
            }
            return baseRandom(lower, upper);
          }
          var camelCase = createCompounder(function(result2, word, index) {
            word = word.toLowerCase();
            return result2 + (index ? capitalize(word) : word);
          });
          function capitalize(string) {
            return upperFirst(toString(string).toLowerCase());
          }
          function deburr(string) {
            string = toString(string);
            return string && string.replace(reLatin, deburrLetter).replace(reComboMark, "");
          }
          function endsWith(string, target, position) {
            string = toString(string);
            target = baseToString(target);
            var length = string.length;
            position = position === undefined2 ? length : baseClamp(toInteger(position), 0, length);
            var end = position;
            position -= target.length;
            return position >= 0 && string.slice(position, end) == target;
          }
          function escape(string) {
            string = toString(string);
            return string && reHasUnescapedHtml.test(string) ? string.replace(reUnescapedHtml, escapeHtmlChar) : string;
          }
          function escapeRegExp(string) {
            string = toString(string);
            return string && reHasRegExpChar.test(string) ? string.replace(reRegExpChar, "\\$&") : string;
          }
          var kebabCase = createCompounder(function(result2, word, index) {
            return result2 + (index ? "-" : "") + word.toLowerCase();
          });
          var lowerCase = createCompounder(function(result2, word, index) {
            return result2 + (index ? " " : "") + word.toLowerCase();
          });
          var lowerFirst = createCaseFirst("toLowerCase");
          function pad(string, length, chars) {
            string = toString(string);
            length = toInteger(length);
            var strLength = length ? stringSize(string) : 0;
            if (!length || strLength >= length) {
              return string;
            }
            var mid = (length - strLength) / 2;
            return createPadding(nativeFloor(mid), chars) + string + createPadding(nativeCeil(mid), chars);
          }
          function padEnd(string, length, chars) {
            string = toString(string);
            length = toInteger(length);
            var strLength = length ? stringSize(string) : 0;
            return length && strLength < length ? string + createPadding(length - strLength, chars) : string;
          }
          function padStart(string, length, chars) {
            string = toString(string);
            length = toInteger(length);
            var strLength = length ? stringSize(string) : 0;
            return length && strLength < length ? createPadding(length - strLength, chars) + string : string;
          }
          function parseInt2(string, radix, guard) {
            if (guard || radix == null) {
              radix = 0;
            } else if (radix) {
              radix = +radix;
            }
            return nativeParseInt(toString(string).replace(reTrimStart, ""), radix || 0);
          }
          function repeat(string, n, guard) {
            if (guard ? isIterateeCall(string, n, guard) : n === undefined2) {
              n = 1;
            } else {
              n = toInteger(n);
            }
            return baseRepeat(toString(string), n);
          }
          function replace() {
            var args = arguments, string = toString(args[0]);
            return args.length < 3 ? string : string.replace(args[1], args[2]);
          }
          var snakeCase = createCompounder(function(result2, word, index) {
            return result2 + (index ? "_" : "") + word.toLowerCase();
          });
          function split(string, separator, limit) {
            if (limit && typeof limit != "number" && isIterateeCall(string, separator, limit)) {
              separator = limit = undefined2;
            }
            limit = limit === undefined2 ? MAX_ARRAY_LENGTH : limit >>> 0;
            if (!limit) {
              return [];
            }
            string = toString(string);
            if (string && (typeof separator == "string" || separator != null && !isRegExp(separator))) {
              separator = baseToString(separator);
              if (!separator && hasUnicode(string)) {
                return castSlice(stringToArray(string), 0, limit);
              }
            }
            return string.split(separator, limit);
          }
          var startCase = createCompounder(function(result2, word, index) {
            return result2 + (index ? " " : "") + upperFirst(word);
          });
          function startsWith(string, target, position) {
            string = toString(string);
            position = position == null ? 0 : baseClamp(toInteger(position), 0, string.length);
            target = baseToString(target);
            return string.slice(position, position + target.length) == target;
          }
          function template(string, options, guard) {
            var settings2 = lodash.templateSettings;
            if (guard && isIterateeCall(string, options, guard)) {
              options = undefined2;
            }
            string = toString(string);
            options = assignInWith({}, options, settings2, customDefaultsAssignIn);
            var imports = assignInWith({}, options.imports, settings2.imports, customDefaultsAssignIn), importsKeys = keys(imports), importsValues = baseValues(imports, importsKeys);
            var isEscaping, isEvaluating, index = 0, interpolate = options.interpolate || reNoMatch, source = "__p += '";
            var reDelimiters = RegExp2(
              (options.escape || reNoMatch).source + "|" + interpolate.source + "|" + (interpolate === reInterpolate ? reEsTemplate : reNoMatch).source + "|" + (options.evaluate || reNoMatch).source + "|$",
              "g"
            );
            var sourceURL = "//# sourceURL=" + (hasOwnProperty.call(options, "sourceURL") ? (options.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++templateCounter + "]") + "\n";
            string.replace(reDelimiters, function(match, escapeValue, interpolateValue, esTemplateValue, evaluateValue, offset) {
              interpolateValue || (interpolateValue = esTemplateValue);
              source += string.slice(index, offset).replace(reUnescapedString, escapeStringChar);
              if (escapeValue) {
                isEscaping = true;
                source += "' +\n__e(" + escapeValue + ") +\n'";
              }
              if (evaluateValue) {
                isEvaluating = true;
                source += "';\n" + evaluateValue + ";\n__p += '";
              }
              if (interpolateValue) {
                source += "' +\n((__t = (" + interpolateValue + ")) == null ? '' : __t) +\n'";
              }
              index = offset + match.length;
              return match;
            });
            source += "';\n";
            var variable = hasOwnProperty.call(options, "variable") && options.variable;
            if (!variable) {
              source = "with (obj) {\n" + source + "\n}\n";
            } else if (reForbiddenIdentifierChars.test(variable)) {
              throw new Error2(INVALID_TEMPL_VAR_ERROR_TEXT);
            }
            source = (isEvaluating ? source.replace(reEmptyStringLeading, "") : source).replace(reEmptyStringMiddle, "$1").replace(reEmptyStringTrailing, "$1;");
            source = "function(" + (variable || "obj") + ") {\n" + (variable ? "" : "obj || (obj = {});\n") + "var __t, __p = ''" + (isEscaping ? ", __e = _.escape" : "") + (isEvaluating ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n" : ";\n") + source + "return __p\n}";
            var result2 = attempt(function() {
              return Function2(importsKeys, sourceURL + "return " + source).apply(undefined2, importsValues);
            });
            result2.source = source;
            if (isError(result2)) {
              throw result2;
            }
            return result2;
          }
          function toLower(value) {
            return toString(value).toLowerCase();
          }
          function toUpper(value) {
            return toString(value).toUpperCase();
          }
          function trim(string, chars, guard) {
            string = toString(string);
            if (string && (guard || chars === undefined2)) {
              return baseTrim(string);
            }
            if (!string || !(chars = baseToString(chars))) {
              return string;
            }
            var strSymbols = stringToArray(string), chrSymbols = stringToArray(chars), start = charsStartIndex(strSymbols, chrSymbols), end = charsEndIndex(strSymbols, chrSymbols) + 1;
            return castSlice(strSymbols, start, end).join("");
          }
          function trimEnd(string, chars, guard) {
            string = toString(string);
            if (string && (guard || chars === undefined2)) {
              return string.slice(0, trimmedEndIndex(string) + 1);
            }
            if (!string || !(chars = baseToString(chars))) {
              return string;
            }
            var strSymbols = stringToArray(string), end = charsEndIndex(strSymbols, stringToArray(chars)) + 1;
            return castSlice(strSymbols, 0, end).join("");
          }
          function trimStart(string, chars, guard) {
            string = toString(string);
            if (string && (guard || chars === undefined2)) {
              return string.replace(reTrimStart, "");
            }
            if (!string || !(chars = baseToString(chars))) {
              return string;
            }
            var strSymbols = stringToArray(string), start = charsStartIndex(strSymbols, stringToArray(chars));
            return castSlice(strSymbols, start).join("");
          }
          function truncate(string, options) {
            var length = DEFAULT_TRUNC_LENGTH, omission = DEFAULT_TRUNC_OMISSION;
            if (isObject(options)) {
              var separator = "separator" in options ? options.separator : separator;
              length = "length" in options ? toInteger(options.length) : length;
              omission = "omission" in options ? baseToString(options.omission) : omission;
            }
            string = toString(string);
            var strLength = string.length;
            if (hasUnicode(string)) {
              var strSymbols = stringToArray(string);
              strLength = strSymbols.length;
            }
            if (length >= strLength) {
              return string;
            }
            var end = length - stringSize(omission);
            if (end < 1) {
              return omission;
            }
            var result2 = strSymbols ? castSlice(strSymbols, 0, end).join("") : string.slice(0, end);
            if (separator === undefined2) {
              return result2 + omission;
            }
            if (strSymbols) {
              end += result2.length - end;
            }
            if (isRegExp(separator)) {
              if (string.slice(end).search(separator)) {
                var match, substring = result2;
                if (!separator.global) {
                  separator = RegExp2(separator.source, toString(reFlags.exec(separator)) + "g");
                }
                separator.lastIndex = 0;
                while (match = separator.exec(substring)) {
                  var newEnd = match.index;
                }
                result2 = result2.slice(0, newEnd === undefined2 ? end : newEnd);
              }
            } else if (string.indexOf(baseToString(separator), end) != end) {
              var index = result2.lastIndexOf(separator);
              if (index > -1) {
                result2 = result2.slice(0, index);
              }
            }
            return result2 + omission;
          }
          function unescape(string) {
            string = toString(string);
            return string && reHasEscapedHtml.test(string) ? string.replace(reEscapedHtml, unescapeHtmlChar) : string;
          }
          var upperCase = createCompounder(function(result2, word, index) {
            return result2 + (index ? " " : "") + word.toUpperCase();
          });
          var upperFirst = createCaseFirst("toUpperCase");
          function words(string, pattern, guard) {
            string = toString(string);
            pattern = guard ? undefined2 : pattern;
            if (pattern === undefined2) {
              return hasUnicodeWord(string) ? unicodeWords(string) : asciiWords(string);
            }
            return string.match(pattern) || [];
          }
          var attempt = baseRest(function(func, args) {
            try {
              return apply(func, undefined2, args);
            } catch (e) {
              return isError(e) ? e : new Error2(e);
            }
          });
          var bindAll = flatRest(function(object, methodNames) {
            arrayEach(methodNames, function(key) {
              key = toKey(key);
              baseAssignValue(object, key, bind(object[key], object));
            });
            return object;
          });
          function cond(pairs) {
            var length = pairs == null ? 0 : pairs.length, toIteratee = getIteratee();
            pairs = !length ? [] : arrayMap(pairs, function(pair) {
              if (typeof pair[1] != "function") {
                throw new TypeError2(FUNC_ERROR_TEXT);
              }
              return [toIteratee(pair[0]), pair[1]];
            });
            return baseRest(function(args) {
              var index = -1;
              while (++index < length) {
                var pair = pairs[index];
                if (apply(pair[0], this, args)) {
                  return apply(pair[1], this, args);
                }
              }
            });
          }
          function conforms(source) {
            return baseConforms(baseClone(source, CLONE_DEEP_FLAG));
          }
          function constant(value) {
            return function() {
              return value;
            };
          }
          function defaultTo(value, defaultValue) {
            return value == null || value !== value ? defaultValue : value;
          }
          var flow = createFlow();
          var flowRight = createFlow(true);
          function identity(value) {
            return value;
          }
          function iteratee(func) {
            return baseIteratee(typeof func == "function" ? func : baseClone(func, CLONE_DEEP_FLAG));
          }
          function matches(source) {
            return baseMatches(baseClone(source, CLONE_DEEP_FLAG));
          }
          function matchesProperty(path, srcValue) {
            return baseMatchesProperty(path, baseClone(srcValue, CLONE_DEEP_FLAG));
          }
          var method = baseRest(function(path, args) {
            return function(object) {
              return baseInvoke(object, path, args);
            };
          });
          var methodOf = baseRest(function(object, args) {
            return function(path) {
              return baseInvoke(object, path, args);
            };
          });
          function mixin(object, source, options) {
            var props = keys(source), methodNames = baseFunctions(source, props);
            if (options == null && !(isObject(source) && (methodNames.length || !props.length))) {
              options = source;
              source = object;
              object = this;
              methodNames = baseFunctions(source, keys(source));
            }
            var chain2 = !(isObject(options) && "chain" in options) || !!options.chain, isFunc = isFunction(object);
            arrayEach(methodNames, function(methodName) {
              var func = source[methodName];
              object[methodName] = func;
              if (isFunc) {
                object.prototype[methodName] = function() {
                  var chainAll = this.__chain__;
                  if (chain2 || chainAll) {
                    var result2 = object(this.__wrapped__), actions = result2.__actions__ = copyArray(this.__actions__);
                    actions.push({ "func": func, "args": arguments, "thisArg": object });
                    result2.__chain__ = chainAll;
                    return result2;
                  }
                  return func.apply(object, arrayPush([this.value()], arguments));
                };
              }
            });
            return object;
          }
          function noConflict() {
            if (root._ === this) {
              root._ = oldDash;
            }
            return this;
          }
          function noop() {
          }
          function nthArg(n) {
            n = toInteger(n);
            return baseRest(function(args) {
              return baseNth(args, n);
            });
          }
          var over = createOver(arrayMap);
          var overEvery = createOver(arrayEvery);
          var overSome = createOver(arraySome);
          function property(path) {
            return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
          }
          function propertyOf(object) {
            return function(path) {
              return object == null ? undefined2 : baseGet(object, path);
            };
          }
          var range = createRange();
          var rangeRight = createRange(true);
          function stubArray() {
            return [];
          }
          function stubFalse() {
            return false;
          }
          function stubObject() {
            return {};
          }
          function stubString() {
            return "";
          }
          function stubTrue() {
            return true;
          }
          function times(n, iteratee2) {
            n = toInteger(n);
            if (n < 1 || n > MAX_SAFE_INTEGER) {
              return [];
            }
            var index = MAX_ARRAY_LENGTH, length = nativeMin(n, MAX_ARRAY_LENGTH);
            iteratee2 = getIteratee(iteratee2);
            n -= MAX_ARRAY_LENGTH;
            var result2 = baseTimes(length, iteratee2);
            while (++index < n) {
              iteratee2(index);
            }
            return result2;
          }
          function toPath(value) {
            if (isArray(value)) {
              return arrayMap(value, toKey);
            }
            return isSymbol(value) ? [value] : copyArray(stringToPath(toString(value)));
          }
          function uniqueId(prefix) {
            var id = ++idCounter;
            return toString(prefix) + id;
          }
          var add = createMathOperation(function(augend, addend) {
            return augend + addend;
          }, 0);
          var ceil = createRound("ceil");
          var divide = createMathOperation(function(dividend, divisor) {
            return dividend / divisor;
          }, 1);
          var floor = createRound("floor");
          function max(array) {
            return array && array.length ? baseExtremum(array, identity, baseGt) : undefined2;
          }
          function maxBy(array, iteratee2) {
            return array && array.length ? baseExtremum(array, getIteratee(iteratee2, 2), baseGt) : undefined2;
          }
          function mean(array) {
            return baseMean(array, identity);
          }
          function meanBy(array, iteratee2) {
            return baseMean(array, getIteratee(iteratee2, 2));
          }
          function min(array) {
            return array && array.length ? baseExtremum(array, identity, baseLt) : undefined2;
          }
          function minBy(array, iteratee2) {
            return array && array.length ? baseExtremum(array, getIteratee(iteratee2, 2), baseLt) : undefined2;
          }
          var multiply = createMathOperation(function(multiplier, multiplicand) {
            return multiplier * multiplicand;
          }, 1);
          var round = createRound("round");
          var subtract = createMathOperation(function(minuend, subtrahend) {
            return minuend - subtrahend;
          }, 0);
          function sum(array) {
            return array && array.length ? baseSum(array, identity) : 0;
          }
          function sumBy(array, iteratee2) {
            return array && array.length ? baseSum(array, getIteratee(iteratee2, 2)) : 0;
          }
          lodash.after = after;
          lodash.ary = ary;
          lodash.assign = assign;
          lodash.assignIn = assignIn;
          lodash.assignInWith = assignInWith;
          lodash.assignWith = assignWith;
          lodash.at = at;
          lodash.before = before;
          lodash.bind = bind;
          lodash.bindAll = bindAll;
          lodash.bindKey = bindKey;
          lodash.castArray = castArray;
          lodash.chain = chain;
          lodash.chunk = chunk;
          lodash.compact = compact;
          lodash.concat = concat;
          lodash.cond = cond;
          lodash.conforms = conforms;
          lodash.constant = constant;
          lodash.countBy = countBy;
          lodash.create = create;
          lodash.curry = curry;
          lodash.curryRight = curryRight;
          lodash.debounce = debounce2;
          lodash.defaults = defaults;
          lodash.defaultsDeep = defaultsDeep;
          lodash.defer = defer;
          lodash.delay = delay;
          lodash.difference = difference;
          lodash.differenceBy = differenceBy;
          lodash.differenceWith = differenceWith;
          lodash.drop = drop;
          lodash.dropRight = dropRight;
          lodash.dropRightWhile = dropRightWhile;
          lodash.dropWhile = dropWhile;
          lodash.fill = fill;
          lodash.filter = filter;
          lodash.flatMap = flatMap;
          lodash.flatMapDeep = flatMapDeep;
          lodash.flatMapDepth = flatMapDepth;
          lodash.flatten = flatten;
          lodash.flattenDeep = flattenDeep;
          lodash.flattenDepth = flattenDepth;
          lodash.flip = flip;
          lodash.flow = flow;
          lodash.flowRight = flowRight;
          lodash.fromPairs = fromPairs;
          lodash.functions = functions;
          lodash.functionsIn = functionsIn;
          lodash.groupBy = groupBy;
          lodash.initial = initial;
          lodash.intersection = intersection;
          lodash.intersectionBy = intersectionBy;
          lodash.intersectionWith = intersectionWith;
          lodash.invert = invert;
          lodash.invertBy = invertBy;
          lodash.invokeMap = invokeMap;
          lodash.iteratee = iteratee;
          lodash.keyBy = keyBy;
          lodash.keys = keys;
          lodash.keysIn = keysIn;
          lodash.map = map;
          lodash.mapKeys = mapKeys;
          lodash.mapValues = mapValues;
          lodash.matches = matches;
          lodash.matchesProperty = matchesProperty;
          lodash.memoize = memoize;
          lodash.merge = merge;
          lodash.mergeWith = mergeWith;
          lodash.method = method;
          lodash.methodOf = methodOf;
          lodash.mixin = mixin;
          lodash.negate = negate;
          lodash.nthArg = nthArg;
          lodash.omit = omit;
          lodash.omitBy = omitBy;
          lodash.once = once;
          lodash.orderBy = orderBy;
          lodash.over = over;
          lodash.overArgs = overArgs;
          lodash.overEvery = overEvery;
          lodash.overSome = overSome;
          lodash.partial = partial;
          lodash.partialRight = partialRight;
          lodash.partition = partition;
          lodash.pick = pick;
          lodash.pickBy = pickBy;
          lodash.property = property;
          lodash.propertyOf = propertyOf;
          lodash.pull = pull;
          lodash.pullAll = pullAll;
          lodash.pullAllBy = pullAllBy;
          lodash.pullAllWith = pullAllWith;
          lodash.pullAt = pullAt;
          lodash.range = range;
          lodash.rangeRight = rangeRight;
          lodash.rearg = rearg;
          lodash.reject = reject;
          lodash.remove = remove;
          lodash.rest = rest;
          lodash.reverse = reverse;
          lodash.sampleSize = sampleSize;
          lodash.set = set;
          lodash.setWith = setWith;
          lodash.shuffle = shuffle;
          lodash.slice = slice;
          lodash.sortBy = sortBy;
          lodash.sortedUniq = sortedUniq;
          lodash.sortedUniqBy = sortedUniqBy;
          lodash.split = split;
          lodash.spread = spread;
          lodash.tail = tail;
          lodash.take = take;
          lodash.takeRight = takeRight;
          lodash.takeRightWhile = takeRightWhile;
          lodash.takeWhile = takeWhile;
          lodash.tap = tap;
          lodash.throttle = throttle;
          lodash.thru = thru;
          lodash.toArray = toArray;
          lodash.toPairs = toPairs;
          lodash.toPairsIn = toPairsIn;
          lodash.toPath = toPath;
          lodash.toPlainObject = toPlainObject;
          lodash.transform = transform;
          lodash.unary = unary;
          lodash.union = union;
          lodash.unionBy = unionBy;
          lodash.unionWith = unionWith;
          lodash.uniq = uniq;
          lodash.uniqBy = uniqBy;
          lodash.uniqWith = uniqWith;
          lodash.unset = unset;
          lodash.unzip = unzip;
          lodash.unzipWith = unzipWith;
          lodash.update = update;
          lodash.updateWith = updateWith;
          lodash.values = values;
          lodash.valuesIn = valuesIn;
          lodash.without = without;
          lodash.words = words;
          lodash.wrap = wrap;
          lodash.xor = xor;
          lodash.xorBy = xorBy;
          lodash.xorWith = xorWith;
          lodash.zip = zip;
          lodash.zipObject = zipObject;
          lodash.zipObjectDeep = zipObjectDeep;
          lodash.zipWith = zipWith;
          lodash.entries = toPairs;
          lodash.entriesIn = toPairsIn;
          lodash.extend = assignIn;
          lodash.extendWith = assignInWith;
          mixin(lodash, lodash);
          lodash.add = add;
          lodash.attempt = attempt;
          lodash.camelCase = camelCase;
          lodash.capitalize = capitalize;
          lodash.ceil = ceil;
          lodash.clamp = clamp;
          lodash.clone = clone;
          lodash.cloneDeep = cloneDeep;
          lodash.cloneDeepWith = cloneDeepWith;
          lodash.cloneWith = cloneWith;
          lodash.conformsTo = conformsTo;
          lodash.deburr = deburr;
          lodash.defaultTo = defaultTo;
          lodash.divide = divide;
          lodash.endsWith = endsWith;
          lodash.eq = eq;
          lodash.escape = escape;
          lodash.escapeRegExp = escapeRegExp;
          lodash.every = every;
          lodash.find = find;
          lodash.findIndex = findIndex;
          lodash.findKey = findKey;
          lodash.findLast = findLast;
          lodash.findLastIndex = findLastIndex;
          lodash.findLastKey = findLastKey;
          lodash.floor = floor;
          lodash.forEach = forEach;
          lodash.forEachRight = forEachRight;
          lodash.forIn = forIn;
          lodash.forInRight = forInRight;
          lodash.forOwn = forOwn;
          lodash.forOwnRight = forOwnRight;
          lodash.get = get;
          lodash.gt = gt;
          lodash.gte = gte;
          lodash.has = has;
          lodash.hasIn = hasIn;
          lodash.head = head;
          lodash.identity = identity;
          lodash.includes = includes;
          lodash.indexOf = indexOf;
          lodash.inRange = inRange;
          lodash.invoke = invoke;
          lodash.isArguments = isArguments;
          lodash.isArray = isArray;
          lodash.isArrayBuffer = isArrayBuffer;
          lodash.isArrayLike = isArrayLike;
          lodash.isArrayLikeObject = isArrayLikeObject;
          lodash.isBoolean = isBoolean;
          lodash.isBuffer = isBuffer;
          lodash.isDate = isDate;
          lodash.isElement = isElement;
          lodash.isEmpty = isEmpty;
          lodash.isEqual = isEqual;
          lodash.isEqualWith = isEqualWith;
          lodash.isError = isError;
          lodash.isFinite = isFinite;
          lodash.isFunction = isFunction;
          lodash.isInteger = isInteger;
          lodash.isLength = isLength;
          lodash.isMap = isMap;
          lodash.isMatch = isMatch;
          lodash.isMatchWith = isMatchWith;
          lodash.isNaN = isNaN;
          lodash.isNative = isNative;
          lodash.isNil = isNil;
          lodash.isNull = isNull;
          lodash.isNumber = isNumber;
          lodash.isObject = isObject;
          lodash.isObjectLike = isObjectLike;
          lodash.isPlainObject = isPlainObject;
          lodash.isRegExp = isRegExp;
          lodash.isSafeInteger = isSafeInteger;
          lodash.isSet = isSet;
          lodash.isString = isString;
          lodash.isSymbol = isSymbol;
          lodash.isTypedArray = isTypedArray;
          lodash.isUndefined = isUndefined;
          lodash.isWeakMap = isWeakMap;
          lodash.isWeakSet = isWeakSet;
          lodash.join = join;
          lodash.kebabCase = kebabCase;
          lodash.last = last;
          lodash.lastIndexOf = lastIndexOf;
          lodash.lowerCase = lowerCase;
          lodash.lowerFirst = lowerFirst;
          lodash.lt = lt;
          lodash.lte = lte;
          lodash.max = max;
          lodash.maxBy = maxBy;
          lodash.mean = mean;
          lodash.meanBy = meanBy;
          lodash.min = min;
          lodash.minBy = minBy;
          lodash.stubArray = stubArray;
          lodash.stubFalse = stubFalse;
          lodash.stubObject = stubObject;
          lodash.stubString = stubString;
          lodash.stubTrue = stubTrue;
          lodash.multiply = multiply;
          lodash.nth = nth;
          lodash.noConflict = noConflict;
          lodash.noop = noop;
          lodash.now = now;
          lodash.pad = pad;
          lodash.padEnd = padEnd;
          lodash.padStart = padStart;
          lodash.parseInt = parseInt2;
          lodash.random = random;
          lodash.reduce = reduce;
          lodash.reduceRight = reduceRight;
          lodash.repeat = repeat;
          lodash.replace = replace;
          lodash.result = result;
          lodash.round = round;
          lodash.runInContext = runInContext2;
          lodash.sample = sample;
          lodash.size = size;
          lodash.snakeCase = snakeCase;
          lodash.some = some;
          lodash.sortedIndex = sortedIndex;
          lodash.sortedIndexBy = sortedIndexBy;
          lodash.sortedIndexOf = sortedIndexOf;
          lodash.sortedLastIndex = sortedLastIndex;
          lodash.sortedLastIndexBy = sortedLastIndexBy;
          lodash.sortedLastIndexOf = sortedLastIndexOf;
          lodash.startCase = startCase;
          lodash.startsWith = startsWith;
          lodash.subtract = subtract;
          lodash.sum = sum;
          lodash.sumBy = sumBy;
          lodash.template = template;
          lodash.times = times;
          lodash.toFinite = toFinite;
          lodash.toInteger = toInteger;
          lodash.toLength = toLength;
          lodash.toLower = toLower;
          lodash.toNumber = toNumber;
          lodash.toSafeInteger = toSafeInteger;
          lodash.toString = toString;
          lodash.toUpper = toUpper;
          lodash.trim = trim;
          lodash.trimEnd = trimEnd;
          lodash.trimStart = trimStart;
          lodash.truncate = truncate;
          lodash.unescape = unescape;
          lodash.uniqueId = uniqueId;
          lodash.upperCase = upperCase;
          lodash.upperFirst = upperFirst;
          lodash.each = forEach;
          lodash.eachRight = forEachRight;
          lodash.first = head;
          mixin(lodash, function() {
            var source = {};
            baseForOwn(lodash, function(func, methodName) {
              if (!hasOwnProperty.call(lodash.prototype, methodName)) {
                source[methodName] = func;
              }
            });
            return source;
          }(), { "chain": false });
          lodash.VERSION = VERSION;
          arrayEach(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(methodName) {
            lodash[methodName].placeholder = lodash;
          });
          arrayEach(["drop", "take"], function(methodName, index) {
            LazyWrapper.prototype[methodName] = function(n) {
              n = n === undefined2 ? 1 : nativeMax(toInteger(n), 0);
              var result2 = this.__filtered__ && !index ? new LazyWrapper(this) : this.clone();
              if (result2.__filtered__) {
                result2.__takeCount__ = nativeMin(n, result2.__takeCount__);
              } else {
                result2.__views__.push({
                  "size": nativeMin(n, MAX_ARRAY_LENGTH),
                  "type": methodName + (result2.__dir__ < 0 ? "Right" : "")
                });
              }
              return result2;
            };
            LazyWrapper.prototype[methodName + "Right"] = function(n) {
              return this.reverse()[methodName](n).reverse();
            };
          });
          arrayEach(["filter", "map", "takeWhile"], function(methodName, index) {
            var type = index + 1, isFilter = type == LAZY_FILTER_FLAG || type == LAZY_WHILE_FLAG;
            LazyWrapper.prototype[methodName] = function(iteratee2) {
              var result2 = this.clone();
              result2.__iteratees__.push({
                "iteratee": getIteratee(iteratee2, 3),
                "type": type
              });
              result2.__filtered__ = result2.__filtered__ || isFilter;
              return result2;
            };
          });
          arrayEach(["head", "last"], function(methodName, index) {
            var takeName = "take" + (index ? "Right" : "");
            LazyWrapper.prototype[methodName] = function() {
              return this[takeName](1).value()[0];
            };
          });
          arrayEach(["initial", "tail"], function(methodName, index) {
            var dropName = "drop" + (index ? "" : "Right");
            LazyWrapper.prototype[methodName] = function() {
              return this.__filtered__ ? new LazyWrapper(this) : this[dropName](1);
            };
          });
          LazyWrapper.prototype.compact = function() {
            return this.filter(identity);
          };
          LazyWrapper.prototype.find = function(predicate) {
            return this.filter(predicate).head();
          };
          LazyWrapper.prototype.findLast = function(predicate) {
            return this.reverse().find(predicate);
          };
          LazyWrapper.prototype.invokeMap = baseRest(function(path, args) {
            if (typeof path == "function") {
              return new LazyWrapper(this);
            }
            return this.map(function(value) {
              return baseInvoke(value, path, args);
            });
          });
          LazyWrapper.prototype.reject = function(predicate) {
            return this.filter(negate(getIteratee(predicate)));
          };
          LazyWrapper.prototype.slice = function(start, end) {
            start = toInteger(start);
            var result2 = this;
            if (result2.__filtered__ && (start > 0 || end < 0)) {
              return new LazyWrapper(result2);
            }
            if (start < 0) {
              result2 = result2.takeRight(-start);
            } else if (start) {
              result2 = result2.drop(start);
            }
            if (end !== undefined2) {
              end = toInteger(end);
              result2 = end < 0 ? result2.dropRight(-end) : result2.take(end - start);
            }
            return result2;
          };
          LazyWrapper.prototype.takeRightWhile = function(predicate) {
            return this.reverse().takeWhile(predicate).reverse();
          };
          LazyWrapper.prototype.toArray = function() {
            return this.take(MAX_ARRAY_LENGTH);
          };
          baseForOwn(LazyWrapper.prototype, function(func, methodName) {
            var checkIteratee = /^(?:filter|find|map|reject)|While$/.test(methodName), isTaker = /^(?:head|last)$/.test(methodName), lodashFunc = lodash[isTaker ? "take" + (methodName == "last" ? "Right" : "") : methodName], retUnwrapped = isTaker || /^find/.test(methodName);
            if (!lodashFunc) {
              return;
            }
            lodash.prototype[methodName] = function() {
              var value = this.__wrapped__, args = isTaker ? [1] : arguments, isLazy = value instanceof LazyWrapper, iteratee2 = args[0], useLazy = isLazy || isArray(value);
              var interceptor = function(value2) {
                var result3 = lodashFunc.apply(lodash, arrayPush([value2], args));
                return isTaker && chainAll ? result3[0] : result3;
              };
              if (useLazy && checkIteratee && typeof iteratee2 == "function" && iteratee2.length != 1) {
                isLazy = useLazy = false;
              }
              var chainAll = this.__chain__, isHybrid = !!this.__actions__.length, isUnwrapped = retUnwrapped && !chainAll, onlyLazy = isLazy && !isHybrid;
              if (!retUnwrapped && useLazy) {
                value = onlyLazy ? value : new LazyWrapper(this);
                var result2 = func.apply(value, args);
                result2.__actions__.push({ "func": thru, "args": [interceptor], "thisArg": undefined2 });
                return new LodashWrapper(result2, chainAll);
              }
              if (isUnwrapped && onlyLazy) {
                return func.apply(this, args);
              }
              result2 = this.thru(interceptor);
              return isUnwrapped ? isTaker ? result2.value()[0] : result2.value() : result2;
            };
          });
          arrayEach(["pop", "push", "shift", "sort", "splice", "unshift"], function(methodName) {
            var func = arrayProto[methodName], chainName = /^(?:push|sort|unshift)$/.test(methodName) ? "tap" : "thru", retUnwrapped = /^(?:pop|shift)$/.test(methodName);
            lodash.prototype[methodName] = function() {
              var args = arguments;
              if (retUnwrapped && !this.__chain__) {
                var value = this.value();
                return func.apply(isArray(value) ? value : [], args);
              }
              return this[chainName](function(value2) {
                return func.apply(isArray(value2) ? value2 : [], args);
              });
            };
          });
          baseForOwn(LazyWrapper.prototype, function(func, methodName) {
            var lodashFunc = lodash[methodName];
            if (lodashFunc) {
              var key = lodashFunc.name + "";
              if (!hasOwnProperty.call(realNames, key)) {
                realNames[key] = [];
              }
              realNames[key].push({ "name": methodName, "func": lodashFunc });
            }
          });
          realNames[createHybrid(undefined2, WRAP_BIND_KEY_FLAG).name] = [{
            "name": "wrapper",
            "func": undefined2
          }];
          LazyWrapper.prototype.clone = lazyClone;
          LazyWrapper.prototype.reverse = lazyReverse;
          LazyWrapper.prototype.value = lazyValue;
          lodash.prototype.at = wrapperAt;
          lodash.prototype.chain = wrapperChain;
          lodash.prototype.commit = wrapperCommit;
          lodash.prototype.next = wrapperNext;
          lodash.prototype.plant = wrapperPlant;
          lodash.prototype.reverse = wrapperReverse;
          lodash.prototype.toJSON = lodash.prototype.valueOf = lodash.prototype.value = wrapperValue;
          lodash.prototype.first = lodash.prototype.head;
          if (symIterator) {
            lodash.prototype[symIterator] = wrapperToIterator;
          }
          return lodash;
        };
        var _ = runInContext();
        if (typeof define == "function" && typeof define.amd == "object" && define.amd) {
          root._ = _;
          define(function() {
            return _;
          });
        } else if (freeModule) {
          (freeModule.exports = _)._ = _;
          freeExports._ = _;
        } else {
          root._ = _;
        }
      }).call(exports);
    }
  });

  // plugins/IntifaceIntegration/index.tsx
  var IntifaceIntegration_exports = {};
  __export(IntifaceIntegration_exports, {
    onUnload: () => onUnload,
    settings: () => settings
  });
  var import_web = __toESM(require_web());
  var import_web2 = __toESM(require_web());
  var import_web3 = __toESM(require_web());
  var import_web4 = __toESM(require_web());
  var import_web5 = __toESM(require_web());
  var import_web6 = __toESM(require_web());
  var Buttplug = __toESM(require_src());
  var import_lodash = __toESM(require_lodash());

  // plugins/IntifaceIntegration/styles.scss
  shelter.plugin.scoped.ui.injectCss(`._settingsBox_1jnoy_1{display:flex;flex-direction:column;gap:1rem}._button_1jnoy_1{width:100%}._selectRow_1jnoy_1{width:100%;display:flex;align-items:center}._selectLabel_1jnoy_1{flex-grow:0;flex-shrink:0;margin-right:.5rem}._select_1jnoy_1{flex-grow:1;flex-shrink:0}`);
  var styles_default = {
    "settingsBox": "_settingsBox_1jnoy_1",
    "button": "_button_1jnoy_1",
    "selectRow": "_selectRow_1jnoy_1",
    "selectLabel": "_selectLabel_1jnoy_1",
    "select": "_select_1jnoy_1"
  };

  // plugins/IntifaceIntegration/store.ts
  var {
    plugin: { store: uglyStore }
  } = shelter;
  var VibrationOutput = {
    Vibrate: "vibrate",
    Oscillate: "oscillate",
    Linear: "linear"
  };
  var VibrationMode = {
    Binary: "binary",
    Eased: "eased"
  };
  var store = uglyStore;
  var state = {
    lastSoundId: null
  };
  var store_default = store;

  // plugins/IntifaceIntegration/signals.ts
  var {
    solid: { createSignal }
  } = shelter;
  var [devices, setDevices] = createSignal([]);
  var [selectedDevice, setSelectedDevice] = createSignal();

  // plugins/IntifaceIntegration/binaryImpulseHandler.ts
  var {
    flux: { intercept }
  } = shelter;
  var FALLBACK_TIMEOUT = 5500;
  var activeSfx = {};
  var unintercept = null;
  var binaryImpulseHandler = ({
    type,
    soundId,
    userId
  }) => {
    switch (type) {
      case "GUILD_SOUNDBOARD_SOUND_PLAY_START":
        {
          if (soundId !== store_default.soundId) {
            return;
          }
          switch (store_default.outputMode) {
            case VibrationOutput.Vibrate:
              void selectedDevice()?.vibrate(store_default.intensity);
              break;
            case VibrationOutput.Oscillate:
              void selectedDevice()?.oscillate(store_default.intensity);
              break;
            case VibrationOutput.Linear:
              void selectedDevice()?.linear(store_default.intensity);
              break;
          }
          const key = `${userId}.${soundId}`;
          if (activeSfx[key] === void 0) {
            activeSfx[key] ??= {
              timeout: null,
              activeCount: 0
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
  var init = () => {
    unintercept = intercept(binaryImpulseHandler);
  };
  var deinit = () => {
    unintercept != null && unintercept();
    unintercept = null;
  };
  var binaryImpulseHandler_default = {
    init,
    deinit
  };

  // plugins/IntifaceIntegration/easedImpulseHandler.ts
  var {
    flux: { intercept: intercept2 }
  } = shelter;
  var INTENSITY = 0.3;
  var SIGNAL_WINDOW = 5e3;
  var FREQUENCE = 50;
  var impulses = [];
  var easeIn = (x) => 1 - Math.pow(1 - x, 3);
  var easeOut = (x) => Math.sqrt(1 - Math.pow(x - 1, 2));
  var CUTOFF = 0.2;
  var easingFn = (x) => x < CUTOFF ? easeIn(x / CUTOFF) : 1 - easeOut((x - CUTOFF) / (1 - CUTOFF));
  var triggerSelectedOutput = (itensity) => {
    switch (store_default.outputMode) {
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
  var iteration = () => {
    let signal = 0;
    const now = Date.now();
    for (const imp of impulses) {
      const elapsed = now - imp;
      if (elapsed < SIGNAL_WINDOW) {
        const beat = INTENSITY * easingFn(elapsed / SIGNAL_WINDOW);
        signal += beat;
      }
    }
    if (signal === 0) {
      impulses = [];
    }
    triggerSelectedOutput(signal);
  };
  var unintercept2 = null;
  var timer = null;
  var easedImpulseHandler = ({
    type,
    soundId
  }) => {
    switch (type) {
      case "GUILD_SOUNDBOARD_SOUND_PLAY_START":
        {
          if (soundId !== store_default.soundId) {
            return;
          }
          impulses.push(Date.now());
        }
        break;
    }
  };
  var init2 = () => {
    unintercept2 = intercept2(easedImpulseHandler);
    timer = setInterval(iteration, FREQUENCE);
  };
  var deinit2 = () => {
    unintercept2 != null && unintercept2();
    unintercept2 = null;
    timer != null && clearTimeout(timer);
    timer = null;
  };
  var easedImpulseHandler_default = {
    init: init2,
    deinit: deinit2
  };

  // plugins/IntifaceIntegration/index.tsx
  var _tmpl$ = /* @__PURE__ */ (0, import_web.template)(`<div><div><label for="device">Buttplug device</label><select name="Device" id="device"><option value="none of the above">Off</option></select></div></div>`, 10);
  var _tmpl$2 = /* @__PURE__ */ (0, import_web.template)(`<option></option>`, 2);
  var _tmpl$3 = /* @__PURE__ */ (0, import_web.template)(`<div><label for="output">Output</label><select name="Output" id="output"><option value="none of the above">Off</option></select></div>`, 8);
  var _tmpl$4 = /* @__PURE__ */ (0, import_web.template)(`<div><label for="mode">Mode</label><select name="Mode" id="mode"><option value="none of the above">Off</option></select></div>`, 8);
  var _tmpl$5 = /* @__PURE__ */ (0, import_web.template)(`<option>Vibrate</option>`, 2);
  var _tmpl$6 = /* @__PURE__ */ (0, import_web.template)(`<option>Oscillate</option>`, 2);
  var _tmpl$7 = /* @__PURE__ */ (0, import_web.template)(`<option>Linear</option>`, 2);
  var _tmpl$8 = /* @__PURE__ */ (0, import_web.template)(`<div><label for="mode">Intensity</label></div>`, 4);
  var {
    solid: {
      createSignal: createSignal2,
      For
    },
    ui: {
      TextBox,
      Button,
      ButtonSizes,
      Slider,
      ButtonColors
    },
    flux: {
      intercept: intercept3
    }
  } = shelter;
  store_default.serverURL ??= "ws://localhost:12345";
  store_default.soundId ??= "1144838692540792935";
  store_default.outputMode ??= "vibrate";
  store_default.vibrationMode ??= "binary";
  store_default.intensity ??= 1;
  var connector = new Buttplug.ButtplugBrowserWebsocketClientConnector(store_default.serverURL);
  var client = new Buttplug.ButtplugClient("Shelter Intiface");
  client.connect(connector);
  var updateDevices = () => setDevices(client.devices);
  client.addListener("deviceadded", updateDevices);
  client.addListener("deviceremoved", updateDevices);
  client.addListener("scanningfinished", updateDevices);
  var uninterceptRoot = intercept3(({
    type,
    soundId
  }) => {
    if (type === "GUILD_SOUNDBOARD_SOUND_PLAY_START") {
      state.lastSoundId = soundId;
    }
  });
  var handler = null;
  if (store_default.vibrationMode === "binary") {
    handler = binaryImpulseHandler_default;
    handler.init();
  }
  var onUnload = () => {
    uninterceptRoot();
    handler != null && handler.deinit();
    client.removeListener("deviceadded", updateDevices);
    client.removeListener("deviceremoved", updateDevices);
    client.removeListener("scanningfinished", updateDevices);
    client.disconnect();
  };
  var debouncedNewConnector = (0, import_lodash.debounce)((e) => {
    store_default.serverURL = e;
    client.disconnect().then(() => {
      connector = new Buttplug.ButtplugBrowserWebsocketClientConnector(store_default.serverURL);
      client.connect(connector);
    });
  }, 1e3);
  var settings = () => {
    const [recentlyPressed, setRecentlyPressed] = createSignal2(false);
    return (() => {
      const _el$ = _tmpl$.cloneNode(true), _el$2 = _el$.firstChild, _el$3 = _el$2.firstChild, _el$4 = _el$3.nextSibling, _el$5 = _el$4.firstChild;
      (0, import_web4.insert)(_el$, (0, import_web6.createComponent)(TextBox, {
        get value() {
          return store_default.serverURL;
        },
        onInput: debouncedNewConnector
      }), _el$2);
      (0, import_web4.insert)(_el$, (0, import_web6.createComponent)(Button, {
        get size() {
          return ButtonSizes.LARGE;
        },
        onClick: () => {
          setRecentlyPressed(true);
          setTimeout(() => setRecentlyPressed(false), 2500);
          store_default.soundId = state.lastSoundId;
        },
        get color() {
          return recentlyPressed() ? ButtonColors.GREEN : ButtonColors.BRAND;
        },
        get disabled() {
          return recentlyPressed();
        },
        get ["class"]() {
          return styles_default["button"];
        },
        get children() {
          return recentlyPressed() ? "\u2713" : "Select most recent played sound";
        }
      }), _el$2);
      _el$4.addEventListener("change", (e) => {
        setSelectedDevice(devices().find((client2) => client2.index.toString() === e.target.value));
      });
      (0, import_web4.insert)(_el$4, (0, import_web6.createComponent)(For, {
        get each() {
          return devices();
        },
        children: (d) => (() => {
          const _el$6 = _tmpl$2.cloneNode(true);
          (0, import_web4.insert)(_el$6, () => d.name);
          (0, import_web3.effect)(() => _el$6.selected = selectedDevice()?.index === d.index);
          (0, import_web3.effect)(() => _el$6.value = d.index.toString());
          return _el$6;
        })()
      }), null);
      (0, import_web4.insert)(_el$, (() => {
        const _c$ = (0, import_web5.memo)(() => selectedDevice() !== void 0);
        return () => _c$() && [(() => {
          const _el$7 = _tmpl$3.cloneNode(true), _el$8 = _el$7.firstChild, _el$9 = _el$8.nextSibling, _el$10 = _el$9.firstChild;
          _el$9.addEventListener("change", (e) => {
            store_default.outputMode = Object.values(VibrationOutput).includes(e.target.value) ? e.target.value : null;
          });
          (0, import_web4.insert)(_el$9, (() => {
            const _c$2 = (0, import_web5.memo)(() => selectedDevice().vibrateAttributes.length > 0);
            return () => _c$2() && (() => {
              const _el$15 = _tmpl$5.cloneNode(true);
              (0, import_web3.effect)(() => _el$15.selected = store_default.outputMode === VibrationOutput.Vibrate);
              (0, import_web3.effect)(() => _el$15.value = VibrationOutput.Vibrate);
              return _el$15;
            })();
          })(), null);
          (0, import_web4.insert)(_el$9, (() => {
            const _c$3 = (0, import_web5.memo)(() => selectedDevice().oscillateAttributes.length > 0);
            return () => _c$3() && (() => {
              const _el$16 = _tmpl$6.cloneNode(true);
              (0, import_web3.effect)(() => _el$16.selected = store_default.outputMode === VibrationOutput.Oscillate);
              (0, import_web3.effect)(() => _el$16.value = VibrationOutput.Oscillate);
              return _el$16;
            })();
          })(), null);
          (0, import_web4.insert)(_el$9, (() => {
            const _c$4 = (0, import_web5.memo)(() => selectedDevice().linear.length > 0);
            return () => _c$4() && (() => {
              const _el$17 = _tmpl$7.cloneNode(true);
              (0, import_web3.effect)(() => _el$17.selected = store_default.outputMode === VibrationOutput.Linear);
              (0, import_web3.effect)(() => _el$17.value = VibrationOutput.Linear);
              return _el$17;
            })();
          })(), null);
          (0, import_web3.effect)((_p$) => {
            const _v$5 = styles_default["selectRow"], _v$6 = styles_default["selectLabel"], _v$7 = styles_default["select"];
            _v$5 !== _p$._v$5 && (0, import_web2.className)(_el$7, _p$._v$5 = _v$5);
            _v$6 !== _p$._v$6 && (0, import_web2.className)(_el$8, _p$._v$6 = _v$6);
            _v$7 !== _p$._v$7 && (0, import_web2.className)(_el$9, _p$._v$7 = _v$7);
            return _p$;
          }, {
            _v$5: void 0,
            _v$6: void 0,
            _v$7: void 0
          });
          return _el$7;
        })(), (() => {
          const _el$11 = _tmpl$4.cloneNode(true), _el$12 = _el$11.firstChild, _el$13 = _el$12.nextSibling, _el$14 = _el$13.firstChild;
          _el$13.addEventListener("change", (e) => {
            store_default.vibrationMode = Object.values(VibrationMode).includes(e.target.value) ? e.target.value : null;
            handler != null && handler.deinit();
            switch (store_default.vibrationMode) {
              case "binary":
                handler = binaryImpulseHandler_default;
                handler.init();
                break;
              case "eased":
                handler = easedImpulseHandler_default;
                handler.init();
                break;
            }
          });
          (0, import_web4.insert)(_el$13, (0, import_web6.createComponent)(For, {
            get each() {
              return Object.entries(VibrationMode);
            },
            children: ([name, mode]) => (() => {
              const _el$18 = _tmpl$2.cloneNode(true);
              _el$18.value = mode;
              (0, import_web4.insert)(_el$18, name);
              (0, import_web3.effect)(() => _el$18.selected = store_default.vibrationMode === mode);
              return _el$18;
            })()
          }), null);
          (0, import_web3.effect)((_p$) => {
            const _v$8 = styles_default["selectRow"], _v$9 = styles_default["selectLabel"], _v$10 = styles_default["select"];
            _v$8 !== _p$._v$8 && (0, import_web2.className)(_el$11, _p$._v$8 = _v$8);
            _v$9 !== _p$._v$9 && (0, import_web2.className)(_el$12, _p$._v$9 = _v$9);
            _v$10 !== _p$._v$10 && (0, import_web2.className)(_el$13, _p$._v$10 = _v$10);
            return _p$;
          }, {
            _v$8: void 0,
            _v$9: void 0,
            _v$10: void 0
          });
          return _el$11;
        })(), (0, import_web5.memo)((() => {
          const _c$5 = (0, import_web5.memo)(() => store_default.vibrationMode === VibrationMode.Binary);
          return () => _c$5() && (() => {
            const _el$19 = _tmpl$8.cloneNode(true), _el$20 = _el$19.firstChild;
            (0, import_web4.insert)(_el$19, (0, import_web6.createComponent)(Slider, {
              get value() {
                return store_default.intensity;
              },
              onInput: (e) => store_default.intensity = +e,
              min: 0,
              max: 1,
              get ["class"]() {
                return styles_default["select"];
              }
            }), null);
            (0, import_web3.effect)((_p$) => {
              const _v$11 = styles_default["selectRow"], _v$12 = styles_default["selectLabel"];
              _v$11 !== _p$._v$11 && (0, import_web2.className)(_el$19, _p$._v$11 = _v$11);
              _v$12 !== _p$._v$12 && (0, import_web2.className)(_el$20, _p$._v$12 = _v$12);
              return _p$;
            }, {
              _v$11: void 0,
              _v$12: void 0
            });
            return _el$19;
          })();
        })())];
      })(), null);
      (0, import_web3.effect)((_p$) => {
        const _v$ = styles_default["settingsBox"], _v$2 = styles_default["selectRow"], _v$3 = styles_default["selectLabel"], _v$4 = styles_default["select"];
        _v$ !== _p$._v$ && (0, import_web2.className)(_el$, _p$._v$ = _v$);
        _v$2 !== _p$._v$2 && (0, import_web2.className)(_el$2, _p$._v$2 = _v$2);
        _v$3 !== _p$._v$3 && (0, import_web2.className)(_el$3, _p$._v$3 = _v$3);
        _v$4 !== _p$._v$4 && (0, import_web2.className)(_el$4, _p$._v$4 = _v$4);
        return _p$;
      }, {
        _v$: void 0,
        _v$2: void 0,
        _v$3: void 0,
        _v$4: void 0
      });
      return _el$;
    })();
  };
  return __toCommonJS(IntifaceIntegration_exports);
})();
/*! Bundled license information:

buttplug/dist/main/src/core/Logging.js:
  (*!
   * Buttplug JS Source Code File - Visit https://buttplug.io for more info about
   * the project. Licensed under the BSD 3-Clause license. See LICENSE file in the
   * project root for full license information.
   *
   * @copyright Copyright (c) Nonpolynomial Labs LLC. All rights reserved.
   *)

reflect-metadata/Reflect.js:
  (*! *****************************************************************************
  Copyright (C) Microsoft. All rights reserved.
  Licensed under the Apache License, Version 2.0 (the "License"); you may not use
  this file except in compliance with the License. You may obtain a copy of the
  License at http://www.apache.org/licenses/LICENSE-2.0
  
  THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
  KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
  WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
  MERCHANTABLITY OR NON-INFRINGEMENT.
  
  See the Apache Version 2.0 License for specific language governing permissions
  and limitations under the License.
  ***************************************************************************** *)

buttplug/dist/main/src/core/Messages.js:
  (*!
   * Buttplug JS Source Code File - Visit https://buttplug.io for more info about
   * the project. Licensed under the BSD 3-Clause license. See LICENSE file in the
   * project root for full license information.
   *
   * @copyright Copyright (c) Nonpolynomial Labs LLC. All rights reserved.
   *)

buttplug/dist/main/src/core/Exceptions.js:
  (*!
   * Buttplug JS Source Code File - Visit https://buttplug.io for more info about
   * the project. Licensed under the BSD 3-Clause license. See LICENSE file in the
   * project root for full license information.
   *
   * @copyright Copyright (c) Nonpolynomial Labs LLC. All rights reserved.
   *)

buttplug/dist/main/src/core/MessageUtils.js:
  (*!
   * Buttplug JS Source Code File - Visit https://buttplug.io for more info about
   * the project. Licensed under the BSD 3-Clause license. See LICENSE file in the
   * project root for full license information.
   *
   * @copyright Copyright (c) Nonpolynomial Labs LLC. All rights reserved.
   *)

buttplug/dist/main/src/client/ButtplugClientDevice.js:
  (*!
   * Buttplug JS Source Code File - Visit https://buttplug.io for more info about
   * the project. Licensed under the BSD 3-Clause license. See LICENSE file in the
   * project root for full license information.
   *
   * @copyright Copyright (c) Nonpolynomial Labs LLC. All rights reserved.
   *)

buttplug/dist/main/src/utils/ButtplugMessageSorter.js:
  (*!
   * Buttplug JS Source Code File - Visit https://buttplug.io for more info about
   * the project. Licensed under the BSD 3-Clause license. See LICENSE file in the
   * project root for full license information.
   *
   * @copyright Copyright (c) Nonpolynomial Labs LLC. All rights reserved.
   *)

buttplug/dist/main/src/client/ButtplugClientConnectorException.js:
  (*!
   * Buttplug JS Source Code File - Visit https://buttplug.io for more info about
   * the project. Licensed under the BSD 3-Clause license. See LICENSE file in the
   * project root for full license information.
   *
   * @copyright Copyright (c) Nonpolynomial Labs LLC. All rights reserved.
   *)

buttplug/dist/main/src/client/Client.js:
  (*!
   * Buttplug JS Source Code File - Visit https://buttplug.io for more info about
   * the project. Licensed under the BSD 3-Clause license. See LICENSE file in the
   * project root for full license information.
   *
   * @copyright Copyright (c) Nonpolynomial Labs LLC. All rights reserved.
   *)

buttplug/dist/main/src/utils/ButtplugBrowserWebsocketConnector.js:
  (*!
   * Buttplug JS Source Code File - Visit https://buttplug.io for more info about
   * the project. Licensed under the BSD 3-Clause license. See LICENSE file in the
   * project root for full license information.
   *
   * @copyright Copyright (c) Nonpolynomial Labs LLC. All rights reserved.
   *)

buttplug/dist/main/src/client/ButtplugBrowserWebsocketClientConnector.js:
  (*!
   * Buttplug JS Source Code File - Visit https://buttplug.io for more info about
   * the project. Licensed under the BSD 3-Clause license. See LICENSE file in the
   * project root for full license information.
   *
   * @copyright Copyright (c) Nonpolynomial Labs LLC. All rights reserved.
   *)

buttplug/dist/main/src/client/ButtplugNodeWebsocketClientConnector.js:
  (*!
   * Buttplug JS Source Code File - Visit https://buttplug.io for more info about
   * the project. Licensed under the BSD 3-Clause license. See LICENSE file in the
   * project root for full license information.
   *
   * @copyright Copyright (c) Nonpolynomial Labs LLC. All rights reserved.
   *)

buttplug/dist/main/src/client/IButtplugClientConnector.js:
  (*!
   * Buttplug JS Source Code File - Visit https://buttplug.io for more info about
   * the project. Licensed under the BSD 3-Clause license. See LICENSE file in the
   * project root for full license information.
   *
   * @copyright Copyright (c) Nonpolynomial Labs LLC. All rights reserved.
   *)

buttplug/dist/main/src/index.js:
  (*!
   * Buttplug JS Source Code File - Visit https://buttplug.io for more info about
   * the project. Licensed under the BSD 3-Clause license. See LICENSE file in the
   * project root for full license information.
   *
   * @copyright Copyright (c) Nonpolynomial Labs LLC. All rights reserved.
   *)

lodash/lodash.js:
  (**
   * @license
   * Lodash <https://lodash.com/>
   * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
   * Released under MIT license <https://lodash.com/license>
   * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
   * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
   *)
*/
