!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("youtube-vue",[],t):"object"==typeof exports?exports["youtube-vue"]=t():e["youtube-vue"]=t()}("undefined"!=typeof self?self:this,function(){return function(e){function t(n){if(r[n])return r[n].exports;var i=r[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var r={};return t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=1)}([function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"youtube-vue",mounted:function(){var e=this;if(!document.getElementById("youtube-vue-player")){var t=document.createElement("script");t.id="youtube-vue-player",t.src="https://www.youtube.com/iframe_api";var r=document.getElementsByTagName("script")[0];r.parentNode.insertBefore(t,r)}this.player=new YT.Player("player",{height:this.height,width:this.width,videoId:this.videoid,playerVars:{list:this.list,listType:this.listType,hl:this.hl,loop:this.loop,rel:this.rel,autoplay:this.autoplay},events:{onReady:function(e){console.log("### Ready")},onStateChange:function(t){t.data===YT.PlayerState.ENDED?e.$emit("ended"):t.data===YT.PlayerState.PAUSED?e.$emit("paused"):t.data===YT.PlayerState.PLAYING&&e.$emit("played")}}})},props:{width:{type:Number,default:480},height:{type:Number,default:320},autoplay:{type:Number,default:0,validator:function(e){return 0===Number(e)||1===Number(e)}},videoid:{type:String,required:!0},hl:{type:String,default:"en"},loop:{type:Number,default:0,validator:function(e){return 0===Number(e)||1===Number(e)}},rel:{type:Number,default:0,validator:function(e){return 0===Number(e)||1===Number(e)}},listType:{type:String,required:!1,validator:function(e){return"search"===e||"user_uploades"===e||"playlist"===e}},list:{type:String,required:!1},origin:{type:String,default:"http://localhost:8080"}},computed:{stylePlayer:function(){return{width:this.width,height:this.height}},videoSrc:function(){if(this.videoid&&""!==this.videoid.trim()){if(1===this.loop)return"https://www.youtube.com/embed/"+this.videoid+"?origin="+this.origin+"&enablejsapi=1&autoplay="+this.autoplay+"&modestbranding=1&fs=1&hl="+this.hl+"&loop="+this.loop+"&rel="+this.rel+"&playlist="+this.videoid;if(0===this.loop)return"https://www.youtube.com/embed/"+this.videoid+"?origin="+this.origin+"&enablejsapi=1&autoplay="+this.autoplay+"&modestbranding=1&fs=1&hl="+this.hl+"&loop="+this.loop+"&rel="+this.rel;throw new Error("loop props must be 0 or 1.")}if(""!==this.listType.trim()&&""!==this.list.trim())return"https://www.youtube.com/embed?origin="+this.origin+"&enablejsapi=1&listType="+this.listType+"&list="+this.list+"&autoplay="+this.autoplay+"&modestbranding=1&fs=1&hl="+this.hl+"&loop="+this.loop+"&rel="+this.rel;throw new Error("Invalid props: either videoid or (listType, list) must be assigned.")}},methods:{playVideo:function(){this.player.playVideo()},stopVideo:function(){this.player.stopVideo()},pauseVideo:function(){this.player.pauseVideo()},mute:function(){this.player.mute()},unMute:function(){this.player.unMute()},setVolume:function(e){e>=0&&e<=100&&this.player.setVolume(e)},getVolume:function(){return this.player.getVolume()},setSize:function(e,t){this.player.setSize(e,t)}}}},function(e,t,r){"use strict";function n(e){u||r(2)}Object.defineProperty(t,"__esModule",{value:!0});var i=r(0),o=r.n(i);for(var s in i)"default"!==s&&function(e){r.d(t,e,function(){return i[e]})}(s);var a=r(8),u=!1,l=r(7),d=n,p=l(o.a,a.a,!1,d,"data-v-255f6c09",null);p.options.__file="src\\YoutubeVue.vue",t.default=p.exports},function(e,t,r){var n=r(3);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);r(5)("6a9586c8",n,!1,null)},function(e,t,r){t=e.exports=r(4)(!1),t.push([e.i,"\n.styleContainer[data-v-255f6c09] { margin:0; padding:0;\n}\n",""])},function(e,t){function r(e,t){var r=e[1]||"",i=e[3];if(!i)return r;if(t&&"function"==typeof btoa){var o=n(i);return[r].concat(i.sources.map(function(e){return"/*# sourceURL="+i.sourceRoot+e+" */"})).concat([o]).join("\n")}return[r].join("\n")}function n(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var n=r(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n}).join("")},t.i=function(e,r){"string"==typeof e&&(e=[[null,e,""]]);for(var n={},i=0;i<this.length;i++){var o=this[i][0];"number"==typeof o&&(n[o]=!0)}for(i=0;i<e.length;i++){var s=e[i];"number"==typeof s[0]&&n[s[0]]||(r&&!s[2]?s[2]=r:r&&(s[2]="("+s[2]+") and ("+r+")"),t.push(s))}},t}},function(e,t,r){function n(e){for(var t=0;t<e.length;t++){var r=e[t],n=d[r.id];if(n){n.refs++;for(var i=0;i<n.parts.length;i++)n.parts[i](r.parts[i]);for(;i<r.parts.length;i++)n.parts.push(o(r.parts[i]));n.parts.length>r.parts.length&&(n.parts.length=r.parts.length)}else{for(var s=[],i=0;i<r.parts.length;i++)s.push(o(r.parts[i]));d[r.id]={id:r.id,refs:1,parts:s}}}}function i(){var e=document.createElement("style");return e.type="text/css",p.appendChild(e),e}function o(e){var t,r,n=document.querySelector("style["+m+'~="'+e.id+'"]');if(n){if(h)return y;n.parentNode.removeChild(n)}if(g){var o=f++;n=c||(c=i()),t=s.bind(null,n,o,!1),r=s.bind(null,n,o,!0)}else n=i(),t=a.bind(null,n),r=function(){n.parentNode.removeChild(n)};return t(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;t(e=n)}else r()}}function s(e,t,r,n){var i=r?"":n.css;if(e.styleSheet)e.styleSheet.cssText=b(t,i);else{var o=document.createTextNode(i),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(o,s[t]):e.appendChild(o)}}function a(e,t){var r=t.css,n=t.media,i=t.sourceMap;if(n&&e.setAttribute("media",n),v.ssrId&&e.setAttribute(ssridKey,t.id),i&&(r+="\n/*# sourceURL="+i.sources[0]+" */",r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */"),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var u="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!u)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var l=r(6),d={},p=u&&(document.head||document.getElementsByTagName("head")[0]),c=null,f=0,h=!1,y=function(){},v=null,m="data-vue-ssr-id",g="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());e.exports=function(e,t,r,i){h=r,v=i||{};var o=l(e,t);return n(o),function(t){for(var r=[],i=0;i<o.length;i++){var s=o[i],a=d[s.id];a.refs--,r.push(a)}t?(o=l(e,t),n(o)):o=[];for(var i=0;i<r.length;i++){var a=r[i];if(0===a.refs){for(var u=0;u<a.parts.length;u++)a.parts[u]();delete d[a.id]}}}};var b=function(){var e=[];return function(t,r){return e[t]=r,e.filter(Boolean).join("\n")}}()},function(e,t){e.exports=function(e,t){for(var r=[],n={},i=0;i<t.length;i++){var o=t[i],s=o[0],a=o[1],u=o[2],l=o[3],d={id:e+":"+i,css:a,media:u,sourceMap:l};n[s]?n[s].parts.push(d):r.push(n[s]={id:s,parts:[d]})}return r}},function(e,t){e.exports=function(e,t,r,n,i,o){var s,a=e=e||{},u=typeof e.default;"object"!==u&&"function"!==u||(s=e,a=e.default);var l="function"==typeof a?a.options:a;t&&(l.render=t.render,l.staticRenderFns=t.staticRenderFns,l._compiled=!0),r&&(l.functional=!0),i&&(l._scopeId=i);var d;if(o?(d=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),n&&n.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(o)},l._ssrRegister=d):n&&(d=n),d){var p=l.functional,c=p?l.render:l.beforeCreate;p?(l._injectStyles=d,l.render=function(e,t){return d.call(t),c(e,t)}):l.beforeCreate=c?[].concat(c,d):[d]}return{esModule:s,exports:a,options:l}}},function(e,t,r){"use strict";var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"styleContainer"},[r("iframe",{style:e.stylePlayer,attrs:{id:"player",type:"text/html",width:e.width,height:e.height,src:e.videoSrc,title:e.videoid,frameBorder:"0",allowFullScreen:"1"}})])},i=[];n._withStripped=!0;var o={render:n,staticRenderFns:i};t.a=o}])});