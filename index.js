module.exports=function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=2)}([function(e,t){e.exports=require("prop-types")},function(e,t){e.exports=require("react")},function(e,t,n){n(3),e.exports=n(5)},function(e,t,n){(function(e){function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var n=function(e){"use strict";var n,r=Object.prototype,i=r.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",u=o.asyncIterator||"@@asyncIterator",s=o.toStringTag||"@@toStringTag";function c(e,t,n,r){var i=t&&t.prototype instanceof v?t:v,o=Object.create(i.prototype),a=new T(r||[]);return o._invoke=function(e,t,n){var r=l;return function(i,o){if(r===h)throw new Error("Generator is already running");if(r===d){if("throw"===i)throw o;return R()}for(n.method=i,n.arg=o;;){var a=n.delegate;if(a){var u=x(a,n);if(u){if(u===y)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===l)throw r=d,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=h;var s=f(e,t,n);if("normal"===s.type){if(r=n.done?d:p,s.arg===y)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(r=d,n.method="throw",n.arg=s.arg)}}}(e,n,a),o}function f(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}e.wrap=c;var l="suspendedStart",p="suspendedYield",h="executing",d="completed",y={};function v(){}function m(){}function g(){}var b={};b[a]=function(){return this};var w=Object.getPrototypeOf,O=w&&w(w(q([])));O&&O!==r&&i.call(O,a)&&(b=O);var S=g.prototype=v.prototype=Object.create(b);function E(e){["next","throw","return"].forEach(function(t){e[t]=function(e){return this._invoke(t,e)}})}function k(e){var n;this._invoke=function(r,o){function a(){return new Promise(function(n,a){!function n(r,o,a,u){var s=f(e[r],e,o);if("throw"!==s.type){var c=s.arg,l=c.value;return l&&"object"===t(l)&&i.call(l,"__await")?Promise.resolve(l.__await).then(function(e){n("next",e,a,u)},function(e){n("throw",e,a,u)}):Promise.resolve(l).then(function(e){c.value=e,a(c)},function(e){return n("throw",e,a,u)})}u(s.arg)}(r,o,n,a)})}return n=n?n.then(a,a):a()}}function x(e,t){var r=e.iterator[t.method];if(r===n){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=n,x(e,t),"throw"===t.method))return y;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return y}var i=f(r,e.iterator,t.arg);if("throw"===i.type)return t.method="throw",t.arg=i.arg,t.delegate=null,y;var o=i.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=n),t.delegate=null,y):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,y)}function j(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function P(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function T(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(j,this),this.reset(!0)}function q(e){if(e){var t=e[a];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,o=function t(){for(;++r<e.length;)if(i.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=n,t.done=!0,t};return o.next=o}}return{next:R}}function R(){return{value:n,done:!0}}return m.prototype=S.constructor=g,g.constructor=m,g[s]=m.displayName="GeneratorFunction",e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===m||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,g):(e.__proto__=g,s in e||(e[s]="GeneratorFunction")),e.prototype=Object.create(S),e},e.awrap=function(e){return{__await:e}},E(k.prototype),k.prototype[u]=function(){return this},e.AsyncIterator=k,e.async=function(t,n,r,i){var o=new k(c(t,n,r,i));return e.isGeneratorFunction(n)?o:o.next().then(function(e){return e.done?e.value:o.next()})},E(S),S[s]="Generator",S[a]=function(){return this},S.toString=function(){return"[object Generator]"},e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=q,T.prototype={constructor:T,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(P),!e)for(var t in this)"t"===t.charAt(0)&&i.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=n)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(r,i){return u.type="throw",u.arg=e,t.next=r,i&&(t.method="next",t.arg=n),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],u=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var s=i.call(a,"catchLoc"),c=i.call(a,"finallyLoc");if(s&&c){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&i.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=e,a.arg=t,o?(this.method="next",this.next=o.finallyLoc,y):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),y},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),P(n),y}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var i=r.arg;P(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:q(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=n),y}},e}("object"===t(e)?e.exports:{});try{regeneratorRuntime=n}catch(e){Function("r","regeneratorRuntime = r")(n)}}).call(this,n(4)(e))},function(e,t){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},function(e,t,n){"use strict";n.r(t);var r=n(1),i=n.n(r),o=function(e){return e.reduce(function(e,t){return e.concat(t.prebid.map(function(e){return{code:t.id,mediaTypes:e.mediaTypes,bids:e.bids}}))},[])};function a(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function u(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,i=!1,o=void 0;try{for(var a,u=e[Symbol.iterator]();!(r=(a=u.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){i=!0,o=e}finally{try{r||null==u.return||u.return()}finally{if(i)throw o}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function s(e,t,n,r,i,o,a){try{var u=e[o](a),s=u.value}catch(e){return void n(e)}u.done?t(s):Promise.resolve(s).then(r,i)}function c(e){return function(){var t=this,n=arguments;return new Promise(function(r,i){var o=e.apply(t,n);function a(e){s(o,r,i,a,u,"next",e)}function u(e){s(o,r,i,a,u,"throw",e)}a(void 0)})}}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var l=Symbol("define GTP size mappings (private method)"),p=Symbol("get GPT size mapping (private method)"),h=Symbol("define slots (private method)"),d=Symbol("display slots (private method)"),y=Symbol("setup Prebid (private method)"),v=Symbol("teardown Prebid (private method)"),m=Symbol("setup GPT (private method)"),g=Symbol("teardown GPT (private method)"),b=Symbol("setup custom events (private method)"),w=Symbol("setup custom event (private method)"),O=Symbol("teardown custom events (private method)"),S=Symbol("with queue (private method)"),E=Symbol("queue for GPT (private method)"),k=Symbol("queue for Prebid (private method)"),x=Symbol("set default config (private method)"),j=Symbol("execute plugins (private method)"),P=function(){function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.config=t,this.slots={},this.plugins=n,this.gptSizeMappings={},this.customEventCallbacks={},this.customEventHandlers={},this.queue=[],t&&this[x]()}var t,n,r;return t=e,n=[{key:"setup",value:function(){var t=c(regeneratorRuntime.mark(function t(){var n,r,i,o,a,u,s,c,f,l,p=this;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=this.slots,r=this.queue,this[b](),t.next=4,Promise.all([e[k](this[y].bind(this)),e[E](this[m].bind(this))]);case 4:if(0!==r.length){t.next=6;break}return t.abrupt("return");case 6:for(i=!0,o=!1,a=void 0,t.prev=9,u=function(){var e=c.value,t=e.id,n=e.customEventHandlers;Object.keys(n).forEach(function(e){return p.customEventCallbacks[e]||(p.customEventCallbacks[e]={}),p.customEventCallbacks[e][t]=n[e]})},s=r[Symbol.iterator]();!(i=(c=s.next()).done);i=!0)u();t.next=18;break;case 14:t.prev=14,t.t0=t.catch(9),o=!0,a=t.t0;case 18:t.prev=18,t.prev=19,i||null==s.return||s.return();case 21:if(t.prev=21,!o){t.next=24;break}throw a;case 24:return t.finish(21);case 25:return t.finish(18);case 26:f=r.map(function(e){return e.id}),l=r.map(function(e){var t=e.id;return n[t]}),e[k](function(){return window.pbjs.requestBids({adUnitCodes:f,bidsBackHandler:function(){window.pbjs.setTargetingForGPTAsync(f),e[E](function(){return window.googletag.pubads().refresh(l)})}})});case 29:case"end":return t.stop()}},t,this,[[9,14,18,26],[19,,21,25]])}));return function(){return t.apply(this,arguments)}}()},{key:"teardown",value:function(){var t=c(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return this[O](),t.next=3,Promise.all([e[k](this[v].bind(this)),e[E](this[g].bind(this))]);case 3:this.slots={},this.gptSizeMappings={},this.queue={};case 6:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},{key:"activate",value:function(t){var n=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=this.slots;0!==Object.values(i).length?(Object.keys(r).forEach(function(e){return n.customEventCallbacks[e]||(n.customEventCallbacks[e]={}),n.customEventCallbacks[e][t]=r[e]}),e[k](function(){return window.pbjs.requestBids({adUnitCodes:[t],bidsBackHandler:function(){window.pbjs.setTargetingForGPTAsync([t]),e[E](function(){return window.googletag.pubads().refresh([i[t]])})}})})):this.queue.push({id:t,customEventHandlers:r})}},{key:"isConfigReady",value:function(){return Boolean(this.config)}},{key:"setConfig",value:function(e){this.config=e,this[x]()}},{key:b,value:function(){var e=this;this.config.customEvents&&Object.keys(this.config.customEvents).forEach(function(t){return e[w](t,e.config.customEvents[t])})}},{key:w,value:function(e,t){var n=t.eventMessagePrefix,r=t.divIdPrefix,i=this.customEventCallbacks;this.customEventHandlers[e]=function(t){var o=t.data;if("string"==typeof o&&o.startsWith("".concat(n))){var a="".concat(r||"").concat(o.substr(n.length)),u=i[e];if(u){var s=u[a];s&&s()}}},window.addEventListener("message",this.customEventHandlers[e])}},{key:O,value:function(){var e=this;this.config.customEvents&&Object.keys(this.config.customEvents).forEach(function(t){return window.removeEventListener("message",e.customEventHandlers[t])})}},{key:l,value:function(){if(this.config.sizeMappings)for(var e=0,t=Object.entries(this.config.sizeMappings);e<t.length;e++){var n=u(t[e],2),r=n[0],i=n[1],o=window.googletag.sizeMapping(),a=!0,s=!1,c=void 0;try{for(var f,l=i[Symbol.iterator]();!(a=(f=l.next()).done);a=!0){var p=f.value,h=p.viewPortSize,d=p.sizes;o.addSize(h,d)}}catch(e){s=!0,c=e}finally{try{a||null==l.return||l.return()}finally{if(s)throw c}}this.gptSizeMappings[r]=o.build()}}},{key:p,value:function(e){return e&&this.gptSizeMappings[e]?this.gptSizeMappings[e]:null}},{key:h,value:function(){var e=this;this.config.slots.forEach(function(t){var n=t.id,r=t.path,i=t.collapseEmptyDiv,o=t.targeting,s=void 0===o?{}:o,c=t.sizes,f=t.sizeMappingName,l=window.googletag.defineSlot(r||e.config.path,c,n),h=e[p](f);h&&l.defineSizeMapping(h),i&&i.length&&i.length>0&&l.setCollapseEmptyDiv.apply(l,a(i));for(var d=0,y=Object.entries(s);d<y.length;d++){var v=u(y[d],2),m=v[0],g=v[1];l.setTargeting(m,g)}l.addService(window.googletag.pubads()),e.slots[n]=l})}},{key:d,value:function(){this[j]("displaySlots"),this.config.slots.forEach(function(e){var t=e.id;return window.googletag.display(t)})}},{key:y,value:function(){this[j]("setupPrebid");var e=o(this.config.slots);window.pbjs.addAdUnits(e),window.pbjs.setConfig(this.config.prebid)}},{key:v,value:function(){this[j]("teardownPrebid"),o(this.config.slots).forEach(function(e){var t=e.code;return window.pbjs.removeAdUnit(t)})}},{key:m,value:function(){this[j]("setupGpt");var e=window.googletag.pubads(),t=this.config.targeting;this[l](),this[h]();for(var n=0,r=Object.entries(t);n<r.length;n++){var i=u(r[n],2),o=i[0],a=i[1];e.setTargeting(o,a)}e.disableInitialLoad(),e.enableSingleRequest(),window.googletag.enableServices(),this[d]()}},{key:g,value:function(){this[j]("teardownGpt"),window.googletag.destroySlots()}},{key:x,value:function(){this.config.prebid||(this.config.prebid={}),this.config.metaData||(this.config.metaData={}),this.config.targeting||(this.config.targeting={})}},{key:j,value:function(e){var t=!0,n=!1,r=void 0;try{for(var i,o=this.plugins[Symbol.iterator]();!(t=(i=o.next()).done);t=!0){var a=i.value[e];a&&a.call(this)}}catch(e){n=!0,r=e}finally{try{t||null==o.return||o.return()}finally{if(n)throw r}}}}],r=[{key:E,value:function(t){return e[S](window.googletag.cmd,t)}},{key:k,value:function(t){return e[S](window.pbjs.que,t)}},{key:S,value:function(e,t){return new Promise(function(n){return e.push(function(){t(),n()})})}}],n&&f(t.prototype,n),r&&f(t,r),e}(),T=n(0),q=n.n(T),R=q.a.shape({id:q.a.string.isRequired,path:q.a.string,collapseEmptyDiv:q.a.arrayOf(q.a.bool),targeting:q.a.object,sizes:q.a.oneOfType([q.a.oneOfType([q.a.string,q.a.arrayOf(q.a.number)]),q.a.arrayOf(q.a.oneOfType([q.a.string,q.a.arrayOf(q.a.number)]))]),sizeMappingName:q.a.string,prebid:q.a.arrayOf(q.a.shape({mediaTypes:q.a.objectOf(q.a.shape({sizes:q.a.arrayOf(q.a.arrayOf(q.a.number))})).isRequired,bids:q.a.arrayOf(q.a.shape({bidder:q.a.string.isRequired,params:q.a.object,labelAny:q.a.arrayOf(q.a.string),labelAll:q.a.arrayOf(q.a.string)})).isRequired})).isRequired}),_=q.a.shape({path:q.a.string,targeting:q.a.object,prebid:q.a.shape({debug:q.a.bool,bidderTimeout:q.a.number,enableSendAllBids:q.a.bool,bidderSequence:q.a.oneOf(["random","fixed"]),publisherDomain:q.a.string,cookieSyncDelay:q.a.number,priceGranularity:q.a.oneOfType([q.a.oneOf(["low","medium","high","auto","dense"]),q.a.shape({buckets:q.a.arrayOf(q.a.shape({precision:q.a.number,min:q.a.number.isRequired,max:q.a.number.isRequired,increment:q.a.number.isRequired})).isRequired})]),mediaTypePriceGranularity:q.a.shape({video:q.a.oneOfType([q.a.oneOf(["low","medium","high","auto","dense"]),q.a.shape({buckets:q.a.arrayOf(q.a.shape({precision:q.a.number,min:q.a.number.isRequired,max:q.a.number.isRequired,increment:q.a.number.isRequired})).isRequired})]),banner:q.a.oneOfType([q.a.oneOf(["low","medium","high","auto","dense"]),q.a.shape({buckets:q.a.arrayOf(q.a.shape({precision:q.a.number,min:q.a.number.isRequired,max:q.a.number.isRequired,increment:q.a.number.isRequired})).isRequired})]),native:q.a.oneOfType([q.a.oneOf(["low","medium","high","auto","dense"]),q.a.shape({buckets:q.a.arrayOf(q.a.shape({precision:q.a.number,min:q.a.number.isRequired,max:q.a.number.isRequired,increment:q.a.number.isRequired})).isRequired})])}),sizeConfig:q.a.arrayOf(q.a.shape({mediaQuery:q.a.string.isRequired,sizesSupported:q.a.arrayOf(q.a.oneOfType([q.a.string,q.a.arrayOf(q.a.number)])),labels:q.a.arrayOf(q.a.string)}))}),sizeMappings:q.a.objectOf(q.a.arrayOf(q.a.shape({viewPortSize:q.a.arrayOf(q.a.number).isRequired,sizes:q.a.arrayOf(q.a.oneOfType([q.a.string,q.a.arrayOf(q.a.number)])).isRequired}))),slots:q.a.arrayOf(R),customEvents:q.a.objectOf(q.a.shape({eventMessagePrefix:q.a.string.isRequired,divIdPrefix:q.a.string}))}),L=i.a.createContext(function(){});function C(e){return(C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function z(e,t,n,r,i,o,a){try{var u=e[o](a),s=u.value}catch(e){return void n(e)}u.done?t(s):Promise.resolve(s).then(r,i)}function A(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function M(e,t){return!t||"object"!==C(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function G(e){return(G=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function D(e,t){return(D=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var N=function(e){function t(e){var n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=(n=M(this,G(t).call(this,e))).props,i=r.config,o=r.plugins;return n.advertising=new P(i,o),n.activate=n.advertising.activate.bind(n.advertising),n.needTearDown=!1,n}var n,o,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&D(e,t)}(t,r["Component"]),n=t,(o=[{key:"setupAdvertising",value:function(){var e,t=(e=regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.advertising.setup();case 2:this.needTearDown=!0;case 3:case"end":return e.stop()}},e,this)}),function(){var t=this,n=arguments;return new Promise(function(r,i){var o=e.apply(t,n);function a(e){z(o,r,i,a,u,"next",e)}function u(e){z(o,r,i,a,u,"throw",e)}a(void 0)})});return function(){return t.apply(this,arguments)}}()},{key:"componentDidUpdate",value:function(){var e=this.props,t=e.config,n=e.active;!this.advertising.isConfigReady()&&t&&n&&(this.advertising.setConfig(t),this.setupAdvertising())}},{key:"componentDidMount",value:function(){this.advertising.isConfigReady()&&this.props.active&&this.setupAdvertising()}},{key:"componentWillUnmount",value:function(){this.needTearDown&&this.advertising.teardown()}},{key:"render",value:function(){return i.a.createElement(L.Provider,{value:this.activate},this.props.children)}}])&&A(n.prototype,o),a&&A(n,a),t}();function H(){return(H=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}N.defaultProps={active:!0};var F=function(e){return function(t){return i.a.createElement(L.Consumer,null,function(n){return i.a.createElement(e,H({},t,{activate:n}))})}};function I(e){return(I="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function B(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function U(e,t){return!t||"object"!==I(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function W(e){return(W=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function Y(e,t){return(Y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var Q=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),U(this,W(t).apply(this,arguments))}var n,o,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Y(e,t)}(t,r["Component"]),n=t,(o=[{key:"componentDidMount",value:function(){var e=this.props;(0,e.activate)(e.id,e.customEventHandlers)}},{key:"render",value:function(){var e=this.props,t=e.id,n=e.style,r=e.className,o=e.children;return i.a.createElement("div",{id:t,style:n,className:r,children:o})}}])&&B(n.prototype,o),a&&B(n,a),t}();Q.defaultProps={customEventHandlers:{}};var J=F(Q);n.d(t,"AdvertisingProvider",function(){return N}),n.d(t,"AdvertisingSlot",function(){return J}),n.d(t,"connectToAdServer",function(){return F}),n.d(t,"AdvertisingConfigPropType",function(){return _}),n.d(t,"AdvertisingSlotConfigPropType",function(){return R})}]);