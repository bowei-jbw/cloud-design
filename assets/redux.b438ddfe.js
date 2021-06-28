function r(r,t,e){return t in r?Object.defineProperty(r,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):r[t]=e,r}function t(r,t){var e=Object.keys(r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(r);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable}))),e.push.apply(e,n)}return e}function e(e){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?t(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):t(Object(o)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(o,r))}))}return e}function n(r){return"Minified Redux error #"+r+"; visit https://redux.js.org/Errors?code="+r+" for the full message or use the non-minified dev environment for full errors. "}var o="function"==typeof Symbol&&Symbol.observable||"@@observable",i=function(){return Math.random().toString(36).substring(7).split("").join(".")},f={INIT:"@@redux/INIT"+i(),REPLACE:"@@redux/REPLACE"+i(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+i()}};function u(r){if("object"!=typeof r||null===r)return!1;for(var t=r;null!==Object.getPrototypeOf(t);)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(r)===t}function c(r,t,e){var i;if("function"==typeof t&&"function"==typeof e||"function"==typeof e&&"function"==typeof arguments[3])throw new Error(n(0));if("function"==typeof t&&void 0===e&&(e=t,t=void 0),void 0!==e){if("function"!=typeof e)throw new Error(n(1));return e(c)(r,t)}if("function"!=typeof r)throw new Error(n(2));var p=r,a=t,l=[],y=l,s=!1;function b(){y===l&&(y=l.slice())}function v(){if(s)throw new Error(n(3));return a}function w(r){if("function"!=typeof r)throw new Error(n(4));if(s)throw new Error(n(5));var t=!0;return b(),y.push(r),function(){if(t){if(s)throw new Error(n(6));t=!1,b();var e=y.indexOf(r);y.splice(e,1),l=null}}}function h(r){if(!u(r))throw new Error(n(7));if(void 0===r.type)throw new Error(n(8));if(s)throw new Error(n(9));try{s=!0,a=p(a,r)}finally{s=!1}for(var t=l=y,e=0;e<t.length;e++){(0,t[e])()}return r}function O(r){if("function"!=typeof r)throw new Error(n(10));p=r,h({type:f.REPLACE})}function d(){var r,t=w;return(r={subscribe:function(r){if("object"!=typeof r||null===r)throw new Error(n(11));function e(){r.next&&r.next(v())}return e(),{unsubscribe:t(e)}}})[o]=function(){return this},r}return h({type:f.INIT}),(i={dispatch:h,subscribe:w,getState:v,replaceReducer:O})[o]=d,i}function p(r){for(var t=Object.keys(r),e={},o=0;o<t.length;o++){var i=t[o];"function"==typeof r[i]&&(e[i]=r[i])}var u,c=Object.keys(e);try{!function(r){Object.keys(r).forEach((function(t){var e=r[t];if(void 0===e(void 0,{type:f.INIT}))throw new Error(n(12));if(void 0===e(void 0,{type:f.PROBE_UNKNOWN_ACTION()}))throw new Error(n(13))}))}(e)}catch(p){u=p}return function(r,t){if(void 0===r&&(r={}),u)throw u;for(var o=!1,i={},f=0;f<c.length;f++){var p=c[f],a=e[p],l=r[p],y=a(l,t);if(void 0===y)throw t&&t.type,new Error(n(14));i[p]=y,o=o||y!==l}return(o=o||c.length!==Object.keys(r).length)?i:r}}function a(r,t){return function(){return t(r.apply(this,arguments))}}function l(){for(var r=arguments.length,t=new Array(r),e=0;e<r;e++)t[e]=arguments[e];return 0===t.length?function(r){return r}:1===t.length?t[0]:t.reduce((function(r,t){return function(){return r(t.apply(void 0,arguments))}}))}var y=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",__DO_NOT_USE__ActionTypes:f,applyMiddleware:function(){for(var r=arguments.length,t=new Array(r),o=0;o<r;o++)t[o]=arguments[o];return function(r){return function(){var o=r.apply(void 0,arguments),i=function(){throw new Error(n(15))},f={getState:o.getState,dispatch:function(){return i.apply(void 0,arguments)}},u=t.map((function(r){return r(f)}));return i=l.apply(void 0,u)(o.dispatch),e(e({},o),{},{dispatch:i})}}},bindActionCreators:function(r,t){if("function"==typeof r)return a(r,t);if("object"!=typeof r||null===r)throw new Error(n(16));var e={};for(var o in r){var i=r[o];"function"==typeof i&&(e[o]=a(i,t))}return e},combineReducers:p,compose:l,createStore:c});export{p as a,c,y as r};