require("common/manifest.js");
require("common/vendor.js");
global.webpackJsonp([7],[,,,,,function(e,t,n){"use strict";(function(e){var t=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},o=a(n(4)),r=a(n(7));function a(e){return e&&e.__esModule?e:{default:e}}o.default.config.productionTip=!1,o.default.prototype.checkLogin=function(t,n){var o=e.getStorageSync("SUID"),r=e.getStorageSync("SRAND"),a=e.getStorageSync("SNAME"),u=e.getStorageSync("SFACE");return""==o||""==r||""==u?(e.redirectTo({url:"../login/login?backpage="+t+"&backtype="+n}),!1):[o,r,a,u]};o.default.prototype.apiServer="https://www.orianna.top/index.php?token=DAISHUAI&c=",o.default.prototype.staticServer="https://www.orianna.top/",r.default.mpType="app",new o.default(t({},r.default)).$mount()}).call(t,n(0).default)},,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(10),r=n.n(o),a=!1;var u=function(e){a||n(8)},c=n(1)(r.a,null,u,null,null);c.options.__file="..\\..\\..\\..\\A\\my\\readbook\\client\\App.vue",c.esModule&&Object.keys(c.esModule).some(function(e){return"default"!==e&&"__"!==e.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),t.default=c.exports},function(e,t){},,function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default={onLaunch:function(){},onShow:function(){console.log("App Show"),e.setStorageSync("V",0),e.request({url:this.apiServer+"index&m=index",method:"GET",data:{},success:function(t){e.setStorageSync("V",t.data.data.version)}})},onHide:function(){console.log("App Hide")}}}).call(t,n(0).default)}],[5]);
//# sourceMappingURL=../.sourcemap/mp-weixin/app.js.map