!function(){function t(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function n(n,e,r){return e&&t(n.prototype,e),r&&t(n,r),n}function e(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function r(t,n,e,r,i,o,a){try{var u=t[o](a),c=u.value}catch(s){return void e(s)}u.done?n(c):Promise.resolve(c).then(r,i)}function i(t){return function(){var n=this,e=arguments;return new Promise(function(i,o){var a=t.apply(n,e);function u(t){r(a,i,o,u,c,"next",t)}function c(t){r(a,i,o,u,c,"throw",t)}u(void 0)})}}(self.webpackChunkKosovoRugbyFederation=self.webpackChunkKosovoRugbyFederation||[]).push([[8592],{8232:function(t,n,e){"use strict";e.d(n,{c:function(){return a}});var r=e(2322),i=e(3320),o=e(8520),a=function(t,n){var e,a,u=function(t,r,i){if("undefined"!=typeof document){var o=document.elementFromPoint(t,r);o&&n(o)?o!==e&&(s(),c(o,i)):s()}},c=function(t,n){e=t,a||(a=e);var i=e;(0,r.c)(function(){return i.classList.add("ion-activated")}),n()},s=function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(e){var n=e;(0,r.c)(function(){return n.classList.remove("ion-activated")}),t&&a!==e&&e.click(),e=void 0}};return(0,o.createGesture)({el:t,gestureName:"buttonActiveDrag",threshold:0,onStart:function(t){return u(t.currentX,t.currentY,i.a)},onMove:function(t){return u(t.currentX,t.currentY,i.b)},onEnd:function(){s(!0),(0,i.h)(),a=void 0}})}},4068:function(t,n,e){"use strict";e.d(n,{g:function(){return r}});var r=function(t,n,e,r,a){return o(t[1],n[1],e[1],r[1],a).map(function(o){return i(t[0],n[0],e[0],r[0],o)})},i=function(t,n,e,r,i){return i*(3*n*Math.pow(i-1,2)+i*(-3*e*i+3*e+r*i))-t*Math.pow(i-1,3)},o=function(t,n,e,r,i){return a((r-=i)-3*(e-=i)+3*(n-=i)-(t-=i),3*e-6*n+3*t,3*n-3*t,t).filter(function(t){return t>=0&&t<=1})},a=function(t,n,e,r){if(0===t)return function(t,n,e){var r=n*n-4*t*e;return r<0?[]:[(-n+Math.sqrt(r))/(2*t),(-n-Math.sqrt(r))/(2*t)]}(n,e,r);var i=(3*(e/=t)-(n/=t)*n)/3,o=(2*n*n*n-9*n*e+27*(r/=t))/27;if(0===i)return[Math.pow(-o,1/3)];if(0===o)return[Math.sqrt(-i),-Math.sqrt(-i)];var a=Math.pow(o/2,2)+Math.pow(i/3,3);if(0===a)return[Math.pow(o/2,.5)-n/3];if(a>0)return[Math.pow(-o/2+Math.sqrt(a),1/3)-Math.pow(o/2+Math.sqrt(a),1/3)-n/3];var u=Math.sqrt(Math.pow(-i/3,3)),c=Math.acos(-o/(2*Math.sqrt(Math.pow(-i/3,3)))),s=2*Math.pow(u,1/3);return[s*Math.cos(c/3)-n/3,s*Math.cos((c+2*Math.PI)/3)-n/3,s*Math.cos((c+4*Math.PI)/3)-n/3]}},9498:function(t,n,e){"use strict";e.d(n,{a:function(){return o},d:function(){return a}});var r=e(1843),o=function(){var t=i(regeneratorRuntime.mark(function t(n,e,i,o,a){var u;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!n){t.next=2;break}return t.abrupt("return",n.attachViewToDom(e,i,a,o));case 2:if("string"==typeof i||i instanceof HTMLElement){t.next=4;break}throw new Error("framework delegate is missing");case 4:return u="string"==typeof i?e.ownerDocument&&e.ownerDocument.createElement(i):i,o&&o.forEach(function(t){return u.classList.add(t)}),a&&Object.assign(u,a),e.appendChild(u),t.next=10,new Promise(function(t){return(0,r.c)(u,t)});case 10:return t.abrupt("return",u);case 11:case"end":return t.stop()}},t)}));return function(n,e,r,i,o){return t.apply(this,arguments)}}(),a=function(t,n){if(n){if(t)return t.removeViewFromDom(n.parentElement,n);n.remove()}return Promise.resolve()}},3320:function(t,n,e){"use strict";e.d(n,{a:function(){return o},b:function(){return a},c:function(){return i},d:function(){return c},h:function(){return u}});var r={getEngine:function(){var t=window;return t.TapticEngine||t.Capacitor&&t.Capacitor.isPluginAvailable("Haptics")&&t.Capacitor.Plugins.Haptics},available:function(){return!!this.getEngine()},isCordova:function(){return!!window.TapticEngine},isCapacitor:function(){return!!window.Capacitor},impact:function(t){var n=this.getEngine();if(n){var e=this.isCapacitor()?t.style.toUpperCase():t.style;n.impact({style:e})}},notification:function(t){var n=this.getEngine();if(n){var e=this.isCapacitor()?t.style.toUpperCase():t.style;n.notification({style:e})}},selection:function(){this.impact({style:"light"})},selectionStart:function(){var t=this.getEngine();t&&(this.isCapacitor()?t.selectionStart():t.gestureSelectionStart())},selectionChanged:function(){var t=this.getEngine();t&&(this.isCapacitor()?t.selectionChanged():t.gestureSelectionChanged())},selectionEnd:function(){var t=this.getEngine();t&&(this.isCapacitor()?t.selectionEnd():t.gestureSelectionEnd())}},i=function(){r.selection()},o=function(){r.selectionStart()},a=function(){r.selectionChanged()},u=function(){r.selectionEnd()},c=function(t){r.impact(t)}},7942:function(t,n,r){"use strict";r.d(n,{s:function(){return i}});var i=function(t){try{if(t instanceof function(){return function t(n){e(this,t),this.value=n}}())return t.value;if(!u()||"string"!=typeof t||""===t)return t;var n=document.createDocumentFragment(),r=document.createElement("div");n.appendChild(r),r.innerHTML=t,s.forEach(function(t){for(var e=n.querySelectorAll(t),r=e.length-1;r>=0;r--){var i=e[r];i.parentNode?i.parentNode.removeChild(i):n.removeChild(i);for(var u=a(i),c=0;c<u.length;c++)o(u[c])}});for(var i=a(n),c=0;c<i.length;c++)o(i[c]);var f=document.createElement("div");f.appendChild(n);var l=f.querySelector("div");return null!==l?l.innerHTML:f.innerHTML}catch(d){return console.error(d),""}},o=function t(n){if(!n.nodeType||1===n.nodeType){for(var e=n.attributes.length-1;e>=0;e--){var r=n.attributes.item(e),i=r.name;if(c.includes(i.toLowerCase())){var o=r.value;null!=o&&o.toLowerCase().includes("javascript:")&&n.removeAttribute(i)}else n.removeAttribute(i)}for(var u=a(n),s=0;s<u.length;s++)t(u[s])}},a=function(t){return null!=t.children?t.children:t.childNodes},u=function(){var t=window,n=t&&t.Ionic&&t.Ionic.config;return!n||(n.get?n.get("sanitizerEnabled",!0):!0===n.sanitizerEnabled||void 0===n.sanitizerEnabled)},c=["class","id","href","src","name","slot"],s=["script","style","iframe","meta","link","object","embed"]},9926:function(t,n,e){"use strict";e.d(n,{S:function(){return r}});var r={bubbles:{dur:1e3,circles:9,fn:function(t,n,e){var r=t*n/e-t+"ms",i=2*Math.PI*n/e;return{r:5,style:{top:9*Math.sin(i)+"px",left:9*Math.cos(i)+"px","animation-delay":r}}}},circles:{dur:1e3,circles:8,fn:function(t,n,e){var r=n/e,i=t*r-t+"ms",o=2*Math.PI*r;return{r:5,style:{top:9*Math.sin(o)+"px",left:9*Math.cos(o)+"px","animation-delay":i}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:function(){return{r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}}}},crescent:{dur:750,circles:1,fn:function(){return{r:26,style:{}}}},dots:{dur:750,circles:3,fn:function(t,n){return{r:6,style:{left:9-9*n+"px","animation-delay":-110*n+"ms"}}}},lines:{dur:1e3,lines:12,fn:function(t,n,e){return{y1:17,y2:29,style:{transform:"rotate(".concat(30*n+(n<6?180:-180),"deg)"),"animation-delay":t*n/e-t+"ms"}}}},"lines-small":{dur:1e3,lines:12,fn:function(t,n,e){return{y1:12,y2:20,style:{transform:"rotate(".concat(30*n+(n<6?180:-180),"deg)"),"animation-delay":t*n/e-t+"ms"}}}}}},4843:function(t,n,e){"use strict";e.d(n,{c:function(){return o},g:function(){return a},h:function(){return r},o:function(){return c}});var r=function(t,n){return null!==n.closest(t)},o=function(t,n){return"string"==typeof t&&t.length>0?Object.assign((e={"ion-color":!0},r="ion-color-".concat(t),i=!0,r in e?Object.defineProperty(e,r,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[r]=i,e),n):n;var e,r,i},a=function(t){var n={};return function(t){return void 0!==t?(Array.isArray(t)?t:t.split(" ")).filter(function(t){return null!=t}).map(function(t){return t.trim()}).filter(function(t){return""!==t}):[]}(t).forEach(function(t){return n[t]=!0}),n},u=/^[a-z][a-z0-9+\-.]*:/,c=function(){var t=i(regeneratorRuntime.mark(function t(n,e,r,i){var o;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(null==n||"#"===n[0]||u.test(n)){t.next=4;break}if(!(o=document.querySelector("ion-router"))){t.next=4;break}return t.abrupt("return",(null!=e&&e.preventDefault(),o.push(n,r,i)));case 4:return t.abrupt("return",!1);case 5:case"end":return t.stop()}},t)}));return function(n,e,r,i){return t.apply(this,arguments)}}()},8890:function(t,r,i){"use strict";i.d(r,{Z:function(){return a}});var o=i(5614),a=function(){var t=function(){function t(){e(this,t)}return n(t,[{key:"ngOnInit",value:function(){}}]),t}();return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=o.Xpm({type:t,selectors:[["app-explore-container"]],inputs:{name:"name"},decls:7,vars:1,consts:[["id","container"],["target","_blank","rel","noopener noreferrer","href","https://ionicframework.com/docs/components"]],template:function(t,n){1&t&&(o.TgZ(0,"div",0),o.TgZ(1,"strong"),o._uU(2),o.qZA(),o.TgZ(3,"p"),o._uU(4,"Explore "),o.TgZ(5,"a",1),o._uU(6,"UI Components"),o.qZA(),o.qZA(),o.qZA()),2&t&&(o.xp6(2),o.Oqu(n.name))},styles:["#container[_ngcontent-%COMP%]{text-align:center;position:absolute;left:0;right:0;top:50%;transform:translateY(-50%)}#container[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-size:20px;line-height:26px}#container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px;line-height:22px;color:#8c8c8c;margin:0}#container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none}"]}),t}()},940:function(t,n,r){"use strict";r.d(n,{e:function(){return c}});var i=r(1116),o=r(1462),a=r(8809),u=r(5614),c=function(){var t=function t(){e(this,t)};return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=u.oAB({type:t}),t.\u0275inj=u.cJS({imports:[[i.ez,o.u5,a.Pc]]}),t}()},749:function(t,r,i){"use strict";i.d(r,{m:function(){return c}});var o=i(4762),a=i(5614),u=i(8809),c=function(){var t=function(){function t(n,r,i,o){e(this,t),this.loadingCtrl=n,this.alertCtrl=r,this.toastCtrl=i,this.actionSheetController=o,this.isLoading=!1}return n(t,[{key:"presentLoadingController",value:function(t){return(0,o.mG)(this,void 0,void 0,regeneratorRuntime.mark(function n(){var e=this;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return this.isLoading=!0,n.next=3,this.loadingCtrl.create({message:t,spinner:"crescent",mode:"ios",translucent:!0,cssClass:"loading-spinner-design"}).then(function(t){t.present().then(function(){e.isLoading||t.dismiss().then(function(){return console.log("")}).catch(function(){})})});case 3:return n.abrupt("return",n.sent);case 4:case"end":return n.stop()}},n,this)}))}},{key:"dismissLoadingController",value:function(){return(0,o.mG)(this,void 0,void 0,regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return this.isLoading=!1,t.next=3,this.loadingCtrl.dismiss().then(function(){return console.log("")}).catch(function(){});case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}},t,this)}))}},{key:"showMessageAlert",value:function(t,n){this.alertCtrl.create({header:t,message:n,buttons:["Okay"]}).then(function(t){return t.present()})}},{key:"presentToast",value:function(t,n,e){return(0,o.mG)(this,void 0,void 0,regeneratorRuntime.mark(function r(){return regeneratorRuntime.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,this.toastCtrl.create({message:t,position:"top",buttons:[{role:"cancel",icon:"close-outline"}],color:n||"primary",duration:e||2e3});case 2:r.sent.present();case 3:case"end":return r.stop()}},r,this)}))}},{key:"presentToastWithGivenTime",value:function(t,n,e){return(0,o.mG)(this,void 0,void 0,regeneratorRuntime.mark(function r(){return regeneratorRuntime.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return"undefined"===e&&(e="primary"),r.next=3,this.toastCtrl.create({message:t,position:"bottom",duration:n,color:e});case 3:r.sent.present();case 4:case"end":return r.stop()}},r,this)}))}},{key:"verifyEditProfile",value:function(t,n,e,r){return(0,o.mG)(this,void 0,void 0,regeneratorRuntime.mark(function i(){var o,a,u;return regeneratorRuntime.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return a=new Promise(function(t){o=t}),i.next=3,this.alertCtrl.create({mode:"ios",header:t,message:n,buttons:[{text:e,role:"cancel",cssClass:"deleteButtonAlertCLASS",handler:function(){return o(!1)}},{text:r,handler:function(){return o(!0)}}]});case 3:return u=i.sent,i.next=6,u.present();case 6:return i.abrupt("return",a);case 7:case"end":return i.stop()}},i,this)}))}},{key:"presentCancelOrConfirm",value:function(t,n,e,r){return(0,o.mG)(this,void 0,void 0,regeneratorRuntime.mark(function i(){var o,a,u;return regeneratorRuntime.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return a=new Promise(function(t){o=t}),i.next=3,this.alertCtrl.create({mode:"ios",header:t,message:n,buttons:[{text:e,role:"cancel",handler:function(){return o(!1)}},{text:r,role:"destructive",handler:function(){return o(!0)}}]});case 3:return u=i.sent,i.next=6,u.present();case 6:return i.abrupt("return",a);case 7:case"end":return i.stop()}},i,this)}))}}]),t}();return t.\u0275fac=function(n){return new(n||t)(a.LFG(u.HT),a.LFG(u.Br),a.LFG(u.yF),a.LFG(u.BX))},t.\u0275prov=a.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t}()}}])}();