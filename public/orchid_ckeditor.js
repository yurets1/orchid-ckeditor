/*! For license information please see orchid_ckeditor.js.LICENSE.txt */
(()=>{"use strict";function t(t){return t.replace(/(?:[_-])([a-z0-9])/g,((t,e)=>e.toUpperCase()))}function e(t){return t.charAt(0).toUpperCase()+t.slice(1)}function r(t){return t.replace(/([A-Z])/g,((t,e)=>`-${e.toLowerCase()}`))}function n(t,e){const r=i(t);return Array.from(r.reduce(((t,r)=>(function(t,e){const r=t[e];return Array.isArray(r)?r:[]}(r,e).forEach((e=>t.add(e))),t)),new Set))}function o(t,e){return i(t).reduce(((t,r)=>(t.push(...function(t,e){const r=t[e];return r?Object.keys(r).map((t=>[t,r[t]])):[]}(r,e)),t)),[])}function i(t){const e=[];for(;t;)e.push(t),t=Object.getPrototypeOf(t);return e.reverse()}"function"==typeof Object.getOwnPropertySymbols||Object.getOwnPropertyNames,(()=>{function t(t){function e(){return Reflect.construct(t,arguments,new.target)}return e.prototype=Object.create(t.prototype,{constructor:{value:e}}),Reflect.setPrototypeOf(e,t),e}try{return function(){const e=t((function(){this.a.call(this)}));e.prototype.a=function(){},new e}(),t}catch(t){return t=>class extends t{}}})();function a([e,n]){return function(e,n){const o=`${r(e)}-value`,i=function(t){const e=function(t){const e=c(t.type);if(e){const r=u(t.default);if(e!==r)throw new Error(`Type "${e}" must match the type of the default value. Given default value: "${t.default}" as "${r}"`);return e}}(t),r=u(t),n=c(t),o=e||r||n;if(o)return o;throw new Error(`Unknown value type "${t}"`)}(n);return{type:i,key:o,name:t(o),get defaultValue(){return function(t){const e=c(t);if(e)return s[e];const r=t.default;return void 0!==r?r:t}(n)},get hasCustomDefaultValue(){return void 0!==u(n)},reader:l[i],writer:f[i]||f.default}}(e,n)}function c(t){switch(t){case Array:return"array";case Boolean:return"boolean";case Number:return"number";case Object:return"object";case String:return"string"}}function u(t){switch(typeof t){case"boolean":return"boolean";case"number":return"number";case"string":return"string"}return Array.isArray(t)?"array":"[object Object]"===Object.prototype.toString.call(t)?"object":void 0}const s={get array(){return[]},boolean:!1,number:0,get object(){return{}},string:""},l={array(t){const e=JSON.parse(t);if(!Array.isArray(e))throw new TypeError("Expected array");return e},boolean:t=>!("0"==t||"false"==t),number:t=>Number(t),object(t){const e=JSON.parse(t);if(null===e||"object"!=typeof e||Array.isArray(e))throw new TypeError("Expected object");return e},string:t=>t},f={default:function(t){return`${t}`},array:p,object:p};function p(t){return JSON.stringify(t)}class h{constructor(t){this.context=t}static get shouldLoad(){return!0}get application(){return this.context.application}get scope(){return this.context.scope}get element(){return this.scope.element}get identifier(){return this.scope.identifier}get targets(){return this.scope.targets}get classes(){return this.scope.classes}get data(){return this.scope.data}initialize(){}connect(){}disconnect(){}dispatch(t,{target:e=this.element,detail:r={},prefix:n=this.identifier,bubbles:o=!0,cancelable:i=!0}={}){const a=new CustomEvent(n?`${n}:${t}`:t,{detail:r,bubbles:o,cancelable:i});return e.dispatchEvent(a),a}}function d(t,e){t.onload=function(){this.onerror=this.onload=null,e(null,t)},t.onerror=function(){this.onerror=this.onload=null,e(new Error("Failed to load "+this.src),t)}}function y(t,e){t.onreadystatechange=function(){"complete"!=this.readyState&&"loaded"!=this.readyState||(this.onreadystatechange=null,e(null,t))}}var v;function g(t,e){return"CKEDITOR"in window?Promise.resolve(CKEDITOR):"string"!=typeof t||t.length<1?Promise.reject(new TypeError("CKEditor URL must be a non-empty string.")):(v||(v=g.scriptLoader(t).then((function(t){return e&&e(t),t}))),v)}h.blessings=[function(t){return n(t,"classes").reduce(((t,r)=>{return Object.assign(t,{[`${n=r}Class`]:{get(){const{classes:t}=this;if(t.has(n))return t.get(n);{const e=t.getAttributeName(n);throw new Error(`Missing attribute "${e}"`)}}},[`${n}Classes`]:{get(){return this.classes.getAll(n)}},[`has${e(n)}Class`]:{get(){return this.classes.has(n)}}});var n}),{})},function(t){return n(t,"targets").reduce(((t,r)=>{return Object.assign(t,{[`${n=r}Target`]:{get(){const t=this.targets.find(n);if(t)return t;throw new Error(`Missing target element "${n}" for "${this.identifier}" controller`)}},[`${n}Targets`]:{get(){return this.targets.findAll(n)}},[`has${e(n)}Target`]:{get(){return this.targets.has(n)}}});var n}),{})},function(t){const r=o(t,"values"),n={valueDescriptorMap:{get(){return r.reduce(((t,e)=>{const r=a(e),n=this.data.getAttributeNameForKey(r.key);return Object.assign(t,{[n]:r})}),{})}}};return r.reduce(((t,r)=>Object.assign(t,function(t){const r=a(t),{key:n,name:o,reader:i,writer:c}=r;return{[o]:{get(){const t=this.data.get(n);return null!==t?i(t):r.defaultValue},set(t){void 0===t?this.data.delete(n):this.data.set(n,c(t))}},[`has${e(o)}`]:{get(){return this.data.has(n)||r.hasCustomDefaultValue}}}}(r))),n)}],h.targets=[],h.values={},g.scriptLoader=function(t){return new Promise((function(e,r){var n,o,i,a,c;n=t,o=function(t){return v=void 0,t?r(t):window.CKEDITOR?void e(CKEDITOR):r(new Error("Script loaded from editorUrl doesn't provide CKEDITOR namespace."))},a=document.head||document.getElementsByTagName("head")[0],c=document.createElement("script"),"function"==typeof o&&(i=o,o={}),o=o||{},i=i||function(){},c.type=o.type||"text/javascript",c.charset=o.charset||"utf8",c.async=!("async"in o)||!!o.async,c.src=n,o.attrs&&function(t,e){for(var r in e)t.setAttribute(r,e[r])}(c,o.attrs),o.text&&(c.text=String(o.text)),("onload"in c?d:y)(c,i),c.onload||d(c,i),a.appendChild(c)}))};function m(t){return t.replace(/(?:[_-])([a-z0-9])/g,((t,e)=>e.toUpperCase()))}function b(t){const e=document.head.querySelector(`meta[name="${t}"]`);return e&&e.getAttribute("content")}function w(t){try{return JSON.parse(t)}catch(e){return t}}const O=(t,e={suffix:!0})=>{const r=t.constructor.metaNames,n=e.suffix;null==r||r.forEach((e=>{((t,e,r)=>{const n=r?`${m(e)}Meta`:m(e);Object.defineProperty(t,n,{get:()=>w(b(e))})})(t,e,n)})),Object.defineProperty(t,"metas",{get(){const t={};return null==r||r.forEach((e=>{const r=w(b(e));null!=r&&(t[m(e)]=r)})),t}})};function j(t){return j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},j(t)}function E(){E=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n=Object.defineProperty||function(t,e,r){t[e]=r.value},o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(t){u=function(t,e,r){return t[e]=r}}function s(t,e,r,o){var i=e&&e.prototype instanceof p?e:p,a=Object.create(i.prototype),c=new L(o||[]);return n(a,"_invoke",{value:O(t,r,c)}),a}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=s;var f={};function p(){}function h(){}function d(){}var y={};u(y,i,(function(){return this}));var v=Object.getPrototypeOf,g=v&&v(v(S([])));g&&g!==e&&r.call(g,i)&&(y=g);var m=d.prototype=p.prototype=Object.create(y);function b(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function w(t,e){function o(n,i,a,c){var u=l(t[n],t,i);if("throw"!==u.type){var s=u.arg,f=s.value;return f&&"object"==j(f)&&r.call(f,"__await")?e.resolve(f.__await).then((function(t){o("next",t,a,c)}),(function(t){o("throw",t,a,c)})):e.resolve(f).then((function(t){s.value=t,a(s)}),(function(t){return o("throw",t,a,c)}))}c(u.arg)}var i;n(this,"_invoke",{value:function(t,r){function n(){return new e((function(e,n){o(t,r,e,n)}))}return i=i?i.then(n,n):n()}})}function O(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return{value:void 0,done:!0}}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=x(a,r);if(c){if(c===f)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=l(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===f)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}function x(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,x(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),f;var o=l(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,f;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,f):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,f)}function P(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function T(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function L(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(P,this),this.reset(!0)}function S(t){if(t||""===t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}throw new TypeError(j(t)+" is not iterable")}return h.prototype=d,n(m,"constructor",{value:d,configurable:!0}),n(d,"constructor",{value:h,configurable:!0}),h.displayName=u(d,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===h||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,d):(t.__proto__=d,u(t,c,"GeneratorFunction")),t.prototype=Object.create(m),t},t.awrap=function(t){return{__await:t}},b(w.prototype),u(w.prototype,a,(function(){return this})),t.AsyncIterator=w,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new w(s(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},b(m),u(m,c,"Generator"),u(m,i,(function(){return this})),u(m,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=S,L.prototype={constructor:L,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(T),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=r.call(i,"catchLoc"),u=r.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,f):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),T(r),f}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;T(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:S(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),f}},t}function x(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function P(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?x(Object(r),!0).forEach((function(e){C(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):x(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function T(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}function L(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,A(n.key),n)}}function S(t,e){return S=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},S(t,e)}function _(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=k(t);if(e){var o=k(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return function(t,e){if(e&&("object"===j(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,r)}}function k(t){return k=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},k(t)}function C(t,e,r){return(e=A(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function A(t){var e=function(t,e){if("object"!==j(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,e||"default");if("object"!==j(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"===j(e)?e:String(e)}var N=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&S(t,e)}(c,t);var e,r,n,o,i,a=_(c);function c(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,c),a.apply(this,arguments)}return e=c,r=[{key:"initialize",value:function(){O(this)}},{key:"connect",value:(o=E().mark((function t(){var e,r,n,o=this;return E().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=this.csrfTokenMeta,t.prev=1,t.next=4,g(this.editorUrlValue);case 4:r="inline"===this.typeValue?"inline":"replace",n=this.optionsValue,this.editor=CKEDITOR[r](this.editorTarget,P(P({},n),{fileTools_requestHeaders:{"X-CSRF-Token":e}})),this.editor.on("instanceReady",(function(){o.editor.on("change",(function(){var t=o.editor.getData();o.inputTarget.value!==t&&(o.inputTarget.value=t)})),o.editor.on("mode",(function(){if("source"===o.editor.mode){var t=o.editor.editable();t.attachListener(t,"input",(function(){var t=o.editor.getData();o.inputTarget.value!==t&&(o.inputTarget.value=t)}))}})),o.editor.setData(o.inputTarget.value)})),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(1),console.error(t.t0);case 13:this.maximizeClose=function(){o.editor&&o.editor.getCommand("maximize").state===CKEDITOR.TRISTATE_ON&&o.editor.execCommand("maximize")},addEventListener("popstate",this.maximizeClose);case 15:case"end":return t.stop()}}),t,this,[[1,10]])})),i=function(){var t=this,e=arguments;return new Promise((function(r,n){var i=o.apply(t,e);function a(t){T(i,r,n,a,c,"next",t)}function c(t){T(i,r,n,a,c,"throw",t)}a(void 0)}))},function(){return i.apply(this,arguments)})},{key:"disconnect",value:function(){var t;removeEventListener("popstate",this.maximizeClose),null===(t=this.editor)||void 0===t||t.destroy()}}],r&&L(e.prototype,r),n&&L(e,n),Object.defineProperty(e,"prototype",{writable:!1}),c}(h);C(N,"metaNames",["csrf_token"]),C(N,"values",{options:{type:Object,default:{}},type:{String,default:"classic",reader:function(t){if(!["classic","inline"].includes(t))throw new Error('Allow only "classic" or "inline" type');return t}},editorUrl:{type:String,default:"//cdn.ckeditor.com/4.22.1/full/ckeditor.js"}}),C(N,"targets",["editor","input"]),application.register("ckeditor",N)})();