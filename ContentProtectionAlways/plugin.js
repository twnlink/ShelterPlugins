(()=>{var r=Object.defineProperty;var u=Object.getOwnPropertyDescriptor;var s=Object.getOwnPropertyNames;var b=Object.prototype.hasOwnProperty;var d=(e,t)=>{for(var o in t)r(e,o,{get:t[o],enumerable:!0})},P=(e,t,o,l)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of s(t))!b.call(e,n)&&n!==o&&r(e,n,{get:()=>t[n],enumerable:!(l=u(t,n))||l.enumerable});return e};var f=e=>P(r({},"__esModule",{value:!0}),e);var p={};d(p,{onUnload:()=>C});var{setContentProtection:a}=DiscordNative.window,{StreamerModeStore:i}=shelter.flux.stores,c=i.enableContentProtection;Object.defineProperty(i,"enableContentProtection",{get:()=>!0,set:e=>(c=e,!0),configurable:!0});a(!0);function C(){a(c),Object.defineProperty(i,"enableContentProtection",{value:c})}return f(p);})();