!function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";var r=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)if(Object.prototype.hasOwnProperty.call(t,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(t,n):{};r.get||r.set?Object.defineProperty(e,n,r):e[n]=t[n]}return e.default=t,e}(n(1));window.onload=function(){var t=new r.ImageGenerator({topBannerHeight:100,bottomBannerHeight:100,wrap:"body"}),e=document.querySelector("#stage"),n=e.getBoundingClientRect().height,i=e.getBoundingClientRect().width;t.updateCanvasSize({width:i,height:n}),window.g=t}},function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function o(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}Object.defineProperty(e,"__esModule",{value:!0}),e.ImageGenerator=void 0;var u=n(2).Promise,s=function(){function t(e,n,i,o){r(this,t),this.x=e,this.y=n,this.width=i,this.height=o}return o(t,[{key:"log",value:function(){console.log(this.x,this.y,this.width,this.height)}}]),t}(),a=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.topBannerHeight,i=void 0===n?100:n,o=e.bottomBannerHeight,u=void 0===o?300:o,s=e.wrap,a=void 0===s?"body":s;r(this,t),this.image="",this.imageUrl="",this.imagePromise=null,this.wrap=a,this.topBannerHeight=i,this.bottomBannerHeight=u,this.canvas=this._generatorCanvas(),this.context=this._getContext()}return o(t,[{key:"_generatorCanvas",value:function(){var t=document.createElement("canvas");return document.querySelector(this.wrap).appendChild(t),t}},{key:"_getContext",value:function(){return this.canvas.getContext("2d")}},{key:"updateTopBannerHeight",value:function(t){this.topBannerHeight=t}},{key:"updateBottomBannerHeight",value:function(t){this.bottomBannerHeight=t}},{key:"updateCanvasSize",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.width,n=void 0===e?1920:e,r=t.height,i=void 0===r?0:r;return this.canvas.width=n,this.canvas.height=i,this.canvas}},{key:"setImage",value:function(t){var e=this;return this.imagePromise=new u(function(n,r){var i=new Image;i.onload=function(){e.image=i,e.imageUrl=t,console.log("更新image",i,t),n(i)},i.onerror=function(t){r(t)},i.src=t}),this.imagePromise}},{key:"getBannerImage",value:function(){var t=this;return this.imagePromise.then(function(e){return t.image=e,t._drawImage()})}},{key:"_drawImage",value:function(){var t=this.canvas.width,e=this.canvas.height,n=this.image.naturalWidth,r=new s(0,0,n,this.topBannerHeight),i=new s(0,0,t,this.topBannerHeight);this._draw(this.image,r,i);var o=new s(0,this.topBannerHeight,n,this.image.naturalHeight-this.topBannerHeight-this.bottomBannerHeight),u=new s(0,this.topBannerHeight,t,e-this.topBannerHeight-this.bottomBannerHeight);this._draw(this.image,o,u);var a=new s(0,this.image.naturalHeight-this.bottomBannerHeight,n,this.bottomBannerHeight),c=new s(0,e-this.bottomBannerHeight,t,this.bottomBannerHeight);return this._draw(this.image,a,c),this.canvas.toDataURL()}},{key:"_draw",value:function(t,e,n){var r=this.context;console.log("绘制数据 : 图片区域 ",e," \n绘制到canvas区域 ==> ",n),r.drawImage(t,e.x,e.y,e.width,e.height,n.x,n.y,n.width,n.height)}}]),t}();e.ImageGenerator=a},function(t,e,n){(function(e,n){
/*!
 * @overview es6-promise - a tiny implementation of Promises/A+.
 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
 * @license   Licensed under MIT license
 *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
 * @version   v4.2.4+314e4831
 */
!function(e,n){t.exports=n()}(0,function(){"use strict";function t(t){return"function"==typeof t}var r=Array.isArray?Array.isArray:function(t){return"[object Array]"===Object.prototype.toString.call(t)},i=0,o=void 0,u=void 0,s=function(t,e){d[i]=t,d[i+1]=e,2===(i+=2)&&(u?u(p):g())};var a="undefined"!=typeof window?window:void 0,c=a||{},h=c.MutationObserver||c.WebKitMutationObserver,l="undefined"==typeof self&&void 0!==e&&"[object process]"==={}.toString.call(e),f="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel;function v(){var t=setTimeout;return function(){return t(p,1)}}var d=new Array(1e3);function p(){for(var t=0;t<i;t+=2){(0,d[t])(d[t+1]),d[t]=void 0,d[t+1]=void 0}i=0}var g=void 0;function m(t,e){var n=this,r=new this.constructor(_);void 0===r[w]&&I(r);var i=n._state;if(i){var o=arguments[i-1];s(function(){return E(i,r,o,n._result)})}else C(n,r,t,e);return r}function y(t){if(t&&"object"==typeof t&&t.constructor===this)return t;var e=new this(_);return P(e,t),e}g=l?function(){return e.nextTick(p)}:h?function(){var t=0,e=new h(p),n=document.createTextNode("");return e.observe(n,{characterData:!0}),function(){n.data=t=++t%2}}():f?function(){var t=new MessageChannel;return t.port1.onmessage=p,function(){return t.port2.postMessage(0)}}():void 0===a?function(){try{var t=Function("return this")().require("vertx");return void 0!==(o=t.runOnLoop||t.runOnContext)?function(){o(p)}:v()}catch(t){return v()}}():v();var w=Math.random().toString(36).substring(2);function _(){}var b=void 0,T=1,B=2,j={error:null};function H(t){try{return t.then}catch(t){return j.error=t,j}}function O(e,n,r){n.constructor===e.constructor&&r===m&&n.constructor.resolve===y?function(t,e){e._state===T?A(t,e._result):e._state===B?S(t,e._result):C(e,void 0,function(e){return P(t,e)},function(e){return S(t,e)})}(e,n):r===j?(S(e,j.error),j.error=null):void 0===r?A(e,n):t(r)?function(t,e,n){s(function(t){var r=!1,i=function(t,e,n,r){try{t.call(e,n,r)}catch(t){return t}}(n,e,function(n){r||(r=!0,e!==n?P(t,n):A(t,n))},function(e){r||(r=!0,S(t,e))},t._label);!r&&i&&(r=!0,S(t,i))},t)}(e,n,r):A(e,n)}function P(t,e){t===e?S(t,new TypeError("You cannot resolve a promise with itself")):!function(t){var e=typeof t;return null!==t&&("object"===e||"function"===e)}(e)?A(t,e):O(t,e,H(e))}function x(t){t._onerror&&t._onerror(t._result),k(t)}function A(t,e){t._state===b&&(t._result=e,t._state=T,0!==t._subscribers.length&&s(k,t))}function S(t,e){t._state===b&&(t._state=B,t._result=e,s(x,t))}function C(t,e,n,r){var i=t._subscribers,o=i.length;t._onerror=null,i[o]=e,i[o+T]=n,i[o+B]=r,0===o&&t._state&&s(k,t)}function k(t){var e=t._subscribers,n=t._state;if(0!==e.length){for(var r=void 0,i=void 0,o=t._result,u=0;u<e.length;u+=3)r=e[u],i=e[u+n],r?E(n,r,i,o):i(o);t._subscribers.length=0}}function E(e,n,r,i){var o=t(r),u=void 0,s=void 0,a=void 0,c=void 0;if(o){if((u=function(t,e){try{return t(e)}catch(t){return j.error=t,j}}(r,i))===j?(c=!0,s=u.error,u.error=null):a=!0,n===u)return void S(n,new TypeError("A promises callback cannot return that same promise."))}else u=i,a=!0;n._state!==b||(o&&a?P(n,u):c?S(n,s):e===T?A(n,u):e===B&&S(n,u))}var M=0;function I(t){t[w]=M++,t._state=void 0,t._result=void 0,t._subscribers=[]}var L=function(){function t(t,e){this._instanceConstructor=t,this.promise=new t(_),this.promise[w]||I(this.promise),r(e)?(this.length=e.length,this._remaining=e.length,this._result=new Array(this.length),0===this.length?A(this.promise,this._result):(this.length=this.length||0,this._enumerate(e),0===this._remaining&&A(this.promise,this._result))):S(this.promise,new Error("Array Methods must be provided an Array"))}return t.prototype._enumerate=function(t){for(var e=0;this._state===b&&e<t.length;e++)this._eachEntry(t[e],e)},t.prototype._eachEntry=function(t,e){var n=this._instanceConstructor,r=n.resolve;if(r===y){var i=H(t);if(i===m&&t._state!==b)this._settledAt(t._state,e,t._result);else if("function"!=typeof i)this._remaining--,this._result[e]=t;else if(n===D){var o=new n(_);O(o,t,i),this._willSettleAt(o,e)}else this._willSettleAt(new n(function(e){return e(t)}),e)}else this._willSettleAt(r(t),e)},t.prototype._settledAt=function(t,e,n){var r=this.promise;r._state===b&&(this._remaining--,t===B?S(r,n):this._result[e]=n),0===this._remaining&&A(r,this._result)},t.prototype._willSettleAt=function(t,e){var n=this;C(t,void 0,function(t){return n._settledAt(T,e,t)},function(t){return n._settledAt(B,e,t)})},t}();var D=function(){function t(e){this[w]=M++,this._result=this._state=void 0,this._subscribers=[],_!==e&&("function"!=typeof e&&function(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}(),this instanceof t?function(t,e){try{e(function(e){P(t,e)},function(e){S(t,e)})}catch(e){S(t,e)}}(this,e):function(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}())}return t.prototype.catch=function(t){return this.then(null,t)},t.prototype.finally=function(t){var e=this.constructor;return this.then(function(n){return e.resolve(t()).then(function(){return n})},function(n){return e.resolve(t()).then(function(){throw n})})},t}();return D.prototype.then=m,D.all=function(t){return new L(this,t).promise},D.race=function(t){var e=this;return r(t)?new e(function(n,r){for(var i=t.length,o=0;o<i;o++)e.resolve(t[o]).then(n,r)}):new e(function(t,e){return e(new TypeError("You must pass an array to race."))})},D.resolve=y,D.reject=function(t){var e=new this(_);return S(e,t),e},D._setScheduler=function(t){u=t},D._setAsap=function(t){s=t},D._asap=s,D.polyfill=function(){var t=void 0;if(void 0!==n)t=n;else if("undefined"!=typeof self)t=self;else try{t=Function("return this")()}catch(t){throw new Error("polyfill failed because global object is unavailable in this environment")}var e=t.Promise;if(e){var r=null;try{r=Object.prototype.toString.call(e.resolve())}catch(t){}if("[object Promise]"===r&&!e.cast)return}t.Promise=D},D.Promise=D,D})}).call(this,n(3),n(4))},function(t,e){var n,r,i=t.exports={};function o(){throw new Error("setTimeout has not been defined")}function u(){throw new Error("clearTimeout has not been defined")}function s(t){if(n===setTimeout)return setTimeout(t,0);if((n===o||!n)&&setTimeout)return n=setTimeout,setTimeout(t,0);try{return n(t,0)}catch(e){try{return n.call(null,t,0)}catch(e){return n.call(this,t,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:o}catch(t){n=o}try{r="function"==typeof clearTimeout?clearTimeout:u}catch(t){r=u}}();var a,c=[],h=!1,l=-1;function f(){h&&a&&(h=!1,a.length?c=a.concat(c):l=-1,c.length&&v())}function v(){if(!h){var t=s(f);h=!0;for(var e=c.length;e;){for(a=c,c=[];++l<e;)a&&a[l].run();l=-1,e=c.length}a=null,h=!1,function(t){if(r===clearTimeout)return clearTimeout(t);if((r===u||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(t);try{r(t)}catch(e){try{return r.call(null,t)}catch(e){return r.call(this,t)}}}(t)}}function d(t,e){this.fun=t,this.array=e}function p(){}i.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];c.push(new d(t,e)),1!==c.length||h||s(v)},d.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=p,i.addListener=p,i.once=p,i.off=p,i.removeListener=p,i.removeAllListeners=p,i.emit=p,i.prependListener=p,i.prependOnceListener=p,i.listeners=function(t){return[]},i.binding=function(t){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(t){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}},function(t,e){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(t){"object"==typeof window&&(n=window)}t.exports=n}]);