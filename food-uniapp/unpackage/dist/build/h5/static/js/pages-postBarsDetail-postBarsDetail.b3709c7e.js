(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-postBarsDetail-postBarsDetail"],{"0526":function(t,e,n){"use strict";var i=n("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.imgErr=void 0;var A=i(n("c46f")),a=function(t,e){console.log("图片加载失败,载入本地默认图片"),console.log(t[e].avatar),t[e].avatar=A.default,console.log(t[e].avatar)};e.imgErr=a},"1f55":function(t,e,n){"use strict";var i=n("b8c4"),A=n.n(i);A.a},"222e":function(t,e,n){"use strict";n.r(e);var i=n("62eb"),A=n("4f3a");for(var a in A)"default"!==a&&function(t){n.d(e,t,function(){return A[t]})}(a);n("1f55");var o=n("2877"),r=Object(o["a"])(A["default"],i["a"],i["b"],!1,null,"53c6a027",null);e["default"]=r.exports},"3b8d":function(t,e,n){"use strict";n.r(e),n.d(e,"default",function(){return o});var i=n("795b"),A=n.n(i);function a(t,e,n,i,a,o,r){try{var c=t[o](r),s=c.value}catch(u){return void n(u)}c.done?e(s):A.a.resolve(s).then(i,a)}function o(t){return function(){var e=this,n=arguments;return new A.a(function(i,A){var o=t.apply(e,n);function r(t){a(o,i,A,r,c,"next",t)}function c(t){a(o,i,A,r,c,"throw",t)}r(void 0)})}}},"4f3a":function(t,e,n){"use strict";n.r(e);var i=n("8769"),A=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,function(){return i[t]})}(a);e["default"]=A.a},"62eb":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"box"},[n("v-uni-view",{staticClass:"main"},[n("v-uni-view",{staticClass:"title"},[n("v-uni-image",{staticClass:"logo",attrs:{src:t.paiInfo.avatar}}),n("v-uni-view",{staticClass:"titleName"},[n("v-uni-view",{staticClass:"tnt"},[t._v(t._s(t.paiInfo.username))]),n("v-uni-view",{staticClass:"tnb"},[t._v(t._s(t.paiInfo.dateline))])],1)],1),n("v-uni-view",{staticClass:"texts4"},[t._v(t._s(t.paiInfo.title))]),n("v-uni-view",{staticClass:"texts3"},[t._v(t._s(t.paiInfo.subject))]),t._l(t.paiInfo.p800,function(e){return n("v-uni-view",{key:e.pic,staticClass:"imgview"},[n("v-uni-image",{staticClass:"imglist",attrs:{src:e.pic,mode:"widthFix"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.previewImg(e.pic)}}})],1)}),t.commentList?n("v-uni-view",{staticClass:"comment"},[n("v-uni-view",{staticClass:"discuss"},[t._v("评论")]),t._l(t.commentList,function(e,i){return n("v-uni-view",{key:e.cid,staticClass:"commentMain"},[n("v-uni-view",{staticStyle:{display:"none"}},[t._v(t._s(JSON.stringify(e.avatar)))]),n("v-uni-view",{staticClass:"commentTitle"},[n("v-uni-image",{staticClass:"commentLogo",attrs:{src:e.avatar},on:{error:function(e){arguments[0]=e=t.$handleEvent(e),t.onImgError(t.commentList,i)}}}),n("v-uni-view",{staticClass:"commentTitleName"},[n("v-uni-view",{staticClass:"ctnt"},[t._v(t._s(e.author))]),n("v-uni-view",{staticClass:"commentTime"},[n("v-uni-view",{staticClass:"ctnf"},[t._v(t._s(e.floors)+"#")]),n("v-uni-view",{staticClass:"ctnd"},[t._v(t._s(e.dateline))])],1)],1)],1),e.cmessage?n("v-uni-view",{staticClass:"commentreply"},[t._v("|| "+t._s(e.cmessage))]):t._e(),n("v-uni-view",{staticClass:"commentContent"},[t._v(t._s(e.message))])],1)})],2):t._e(),n("v-uni-view",{staticClass:"contentBottom"},[t._v("・ End ・")])],2),n("v-uni-view",{staticClass:"tabb"},[n("v-uni-view",{staticClass:"one",class:{active:0==t.isActive},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.chenked(0)}}},[n("v-uni-text",{staticClass:"iconfont icon-pinlun"}),n("v-uni-view",{staticClass:"fsize"},[t._v("评论")])],1),n("v-uni-view",{staticClass:"one",class:{active:1==t.isActive},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.chenked(1)}}},[n("v-uni-text",{staticClass:"iconfont icon-shoucang"}),n("v-uni-view",{staticClass:"fsize"},[t._v("收藏")])],1),n("v-uni-view",{staticClass:"one",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goShare.apply(void 0,arguments)}}},[n("v-uni-text",{staticClass:"iconfont icon-fenxiang-"}),n("v-uni-view",{staticClass:"fsize"},[t._v("分享")])],1),n("v-uni-view",{staticClass:"one",class:{active:3==t.isActive},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.chenked(3)}}},[n("v-uni-text",{staticClass:"iconfont icon-gift-box"}),n("v-uni-view",{staticClass:"fsize"},[t._v("福利社")])],1)],1)],1)},A=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return A})},8769:function(t,e,n){"use strict";var i=n("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var A=i(n("f499"));n("96cf");var a=i(n("3b8d")),o=n("a207"),r=n("0526"),c={data:function(){return{paiInfo:{},id:"",commentList:[],pageindex:1,isActive:5}},onLoad:function(t){console.log(t.id),this.id=t.id,this.pai_getPaiInfo(),this.comment_getCommentList()},methods:{pai_getPaiInfo:function(){var t=(0,a.default)(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,(0,o.myRequestGet)("/api.php",{p:(0,A.default)({m:{pai_getPaiInfo:{id:this.id}},openudid:"meishichina",uid:12656254,appver:"3028",device:"microsoftmicrosoft",appname:"xcx_weixin",session:"xcx_weixin:weixin:12656254:g4j5SkNMeV2KNerCulQ1YPuLTnGKQI1J"})});case 2:e=t.sent,this.paiInfo=e.pai_getPaiInfo.data,console.log(this.paiInfo);case 5:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),comment_getCommentList:function(){var t=(0,a.default)(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,(0,o.myRequestGet)("/api.php",{p:(0,A.default)({m:{comment_getCommentList:{id:this.id,type:"pai",show:"asc",pageindex:this.pageindex,pagesize:10}},openudid:"meishichina",uid:12656254,appver:"3028",device:"microsoftmicrosoft",appname:"xcx_weixin",session:"xcx_weixin:weixin:12656254:g4j5SkNMeV2KNerCulQ1YPuLTnGKQI1J"})});case 2:e=t.sent,this.commentList=e.comment_getCommentList.data,console.log(this.commentList);case 5:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),onImgError:function(t,e){(0,r.imgErr)(t,e)},chenked:function(t){this.isActive=t},previewImg:function(t){var e=[];e.push(t),uni.previewImage({urls:e,current:0})},goShare:function(){console.log("跳转成功！"),uni.navigateTo({url:"/pages/share/share"})}}};e.default=c},"96cf":function(t,e){!function(e){"use strict";var n,i=Object.prototype,A=i.hasOwnProperty,a="function"===typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",r=a.asyncIterator||"@@asyncIterator",c=a.toStringTag||"@@toStringTag",s="object"===typeof t,u=e.regeneratorRuntime;if(u)s&&(t.exports=u);else{u=e.regeneratorRuntime=s?t.exports:{},u.wrap=b;var l="suspendedStart",f="suspendedYield",m="executing",v="completed",d={},p={};p[o]=function(){return this};var h=Object.getPrototypeOf,g=h&&h(h(O([])));g&&g!==i&&A.call(g,o)&&(p=g);var w=_.prototype=y.prototype=Object.create(p);C.prototype=w.constructor=_,_.constructor=C,_[c]=C.displayName="GeneratorFunction",u.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===C||"GeneratorFunction"===(e.displayName||e.name))},u.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,_):(t.__proto__=_,c in t||(t[c]="GeneratorFunction")),t.prototype=Object.create(w),t},u.awrap=function(t){return{__await:t}},L(E.prototype),E.prototype[r]=function(){return this},u.AsyncIterator=E,u.async=function(t,e,n,i){var A=new E(b(t,e,n,i));return u.isGeneratorFunction(e)?A:A.next().then(function(t){return t.done?t.value:A.next()})},L(w),w[c]="Generator",w[o]=function(){return this},w.toString=function(){return"[object Generator]"},u.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){while(e.length){var i=e.pop();if(i in t)return n.value=i,n.done=!1,n}return n.done=!0,n}},u.values=O,S.prototype={constructor:S,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(z),!t)for(var e in this)"t"===e.charAt(0)&&A.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=n)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function i(i,A){return r.type="throw",r.arg=t,e.next=i,A&&(e.method="next",e.arg=n),!!A}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],r=o.completion;if("root"===o.tryLoc)return i("end");if(o.tryLoc<=this.prev){var c=A.call(o,"catchLoc"),s=A.call(o,"finallyLoc");if(c&&s){if(this.prev<o.catchLoc)return i(o.catchLoc,!0);if(this.prev<o.finallyLoc)return i(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return i(o.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return i(o.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n];if(i.tryLoc<=this.prev&&A.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var a=i;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var o=a?a.completion:{};return o.type=t,o.arg=e,a?(this.method="next",this.next=a.finallyLoc,d):this.complete(o)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),z(n),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var i=n.completion;if("throw"===i.type){var A=i.arg;z(n)}return A}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,i){return this.delegate={iterator:O(t),resultName:e,nextLoc:i},"next"===this.method&&(this.arg=n),d}}}function b(t,e,n,i){var A=e&&e.prototype instanceof y?e:y,a=Object.create(A.prototype),o=new S(i||[]);return a._invoke=k(t,n,o),a}function x(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(i){return{type:"throw",arg:i}}}function y(){}function C(){}function _(){}function L(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function E(t){function e(n,i,a,o){var r=x(t[n],t,i);if("throw"!==r.type){var c=r.arg,s=c.value;return s&&"object"===typeof s&&A.call(s,"__await")?Promise.resolve(s.__await).then(function(t){e("next",t,a,o)},function(t){e("throw",t,a,o)}):Promise.resolve(s).then(function(t){c.value=t,a(c)},function(t){return e("throw",t,a,o)})}o(r.arg)}var n;function i(t,i){function A(){return new Promise(function(n,A){e(t,i,n,A)})}return n=n?n.then(A,A):A()}this._invoke=i}function k(t,e,n){var i=l;return function(A,a){if(i===m)throw new Error("Generator is already running");if(i===v){if("throw"===A)throw a;return I()}n.method=A,n.arg=a;while(1){var o=n.delegate;if(o){var r=P(o,n);if(r){if(r===d)continue;return r}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(i===l)throw i=v,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);i=m;var c=x(t,e,n);if("normal"===c.type){if(i=n.done?v:f,c.arg===d)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(i=v,n.method="throw",n.arg=c.arg)}}}function P(t,e){var i=t.iterator[e.method];if(i===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=n,P(t,e),"throw"===e.method))return d;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var A=x(i,t.iterator,e.arg);if("throw"===A.type)return e.method="throw",e.arg=A.arg,e.delegate=null,d;var a=A.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=n),e.delegate=null,d):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,d)}function T(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function z(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(T,this),this.reset(!0)}function O(t){if(t){var e=t[o];if(e)return e.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var i=-1,a=function e(){while(++i<t.length)if(A.call(t,i))return e.value=t[i],e.done=!1,e;return e.value=n,e.done=!0,e};return a.next=a}}return{next:I}}function I(){return{value:n,done:!0}}}(function(){return this||"object"===typeof self&&self}()||Function("return this")())},a207:function(t,e,n){"use strict";var i=n("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.myRequestGet=a;var A=i(n("795b"));function a(t,e){return new A.default(function(n,i){uni.request({url:t,method:"GET",data:e,success:function(t){n(t.data)},fail:function(t){i(t)}})})}},b8c4:function(t,e,n){var i=n("c3e6");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var A=n("4f06").default;A("1323ebdb",i,!0,{sourceMap:!1,shadowMode:!1})},c3e6:function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,".box .active[data-v-53c6a027]{color:red}.box .main[data-v-53c6a027]{padding-left:%?30?%;padding-top:%?16?%}.box .main .contentBottom[data-v-53c6a027]{letter-spacing:%?2?%;font-size:%?30?%;color:#9c9c9c;height:100px;text-align:center;margin-top:10px}.box .main .title[data-v-53c6a027]{display:-webkit-box;display:-webkit-flex;display:flex}.box .main .title .logo[data-v-53c6a027]{width:%?80?%;height:%?80?%;border-radius:50%}.box .main .title .titleName[data-v-53c6a027]{margin-left:%?20?%}.box .main .title .titleName .tnt[data-v-53c6a027]{letter-spacing:%?2?%;margin-top:%?10?%}.box .main .title .titleName .tnb[data-v-53c6a027]{margin-top:%?10?%;font-size:%?24?%;color:#9c9c9c;letter-spacing:%?2?%}.box .main .imgview[data-v-53c6a027]{width:%?680?%}.box .main .imgview .imglist[data-v-53c6a027]{width:%?680?%}.box .main .texts3[data-v-53c6a027]{font-size:16px;margin-bottom:9px;letter-spacing:%?2?%}.box .main .texts4[data-v-53c6a027]{font-size:18px;font-weight:700;margin-bottom:9px;letter-spacing:%?2?%}.box .main .content[data-v-53c6a027]{margin:0 %?10?% %?40?%}.box .main .content .titletop[data-v-53c6a027]{font-size:%?36?%;margin:%?20?% 0}.box .main .content uni-image[data-v-53c6a027]{width:%?670?%;height:%?618?%}.box .main .radio[data-v-53c6a027]{border:%?2?% solid #ddd;background-color:#f2f2f2;padding-top:%?40?%;padding-left:%?40?%;border-radius:3%}.box .main .radio .uni-title[data-v-53c6a027]{margin-bottom:%?10?%;font-weight:600}.box .main .radio .uni-list uni-radio-group .list[data-v-53c6a027]{display:-webkit-box;display:-webkit-flex;display:flex;margin-top:%?30?%;padding-bottom:%?20?%;border-bottom:%?2?% solid #ddd;font-size:%?34?%}.box .main .radio .uni-list uni-button[data-v-53c6a027]{margin-left:%?-40?%;color:#999}.box .main .comment[data-v-53c6a027]{margin-top:%?60?%}.box .main .comment .discuss[data-v-53c6a027]{margin-bottom:%?40?%}.box .main .comment .commentMain .commentTitle[data-v-53c6a027]{display:-webkit-box;display:-webkit-flex;display:flex}.box .main .comment .commentMain .commentTitle uni-image[data-v-53c6a027]{width:%?80?%;height:%?80?%;border-radius:50%}.box .main .comment .commentMain .commentTitle .commentTitleName[data-v-53c6a027]{margin-left:%?20?%}.box .main .comment .commentMain .commentTitle .commentTitleName .ctnt[data-v-53c6a027]{font-size:%?32?%}.box .main .comment .commentMain .commentTitle .commentTitleName .commentTime[data-v-53c6a027]{display:-webkit-box;display:-webkit-flex;display:flex}.box .main .comment .commentMain .commentTitle .commentTitleName .commentTime .ctnf[data-v-53c6a027]{font-size:%?24?%;color:#9c9c9c;margin-right:%?20?%}.box .main .comment .commentMain .commentTitle .commentTitleName .commentTime .ctnd[data-v-53c6a027]{font-size:%?24?%;color:#9c9c9c}.box .main .comment .commentMain .commentContent[data-v-53c6a027]{margin:%?16?% 0 15px;padding-bottom:%?26?%;border-bottom:%?2?% solid #ddd;letter-spacing:%?2?%;font-size:%?32?%}.box .main .comment .commentMain .commentreply[data-v-53c6a027]{letter-spacing:%?2?%;font-size:%?30?%;color:#9c9c9c;margin-top:%?10?%}.box .tabb[data-v-53c6a027]{width:100%;height:50px;border-top:%?2?% solid grey;position:fixed;bottom:0;display:-webkit-box;display:-webkit-flex;display:flex;background-color:#f1f1f1}.box .tabb .one[data-v-53c6a027]{text-align:center;-webkit-box-flex:1;-webkit-flex:1;flex:1;padding-top:%?6?%}.box .tabb .one uni-text[data-v-53c6a027]{font-size:25px}.box .tabb .one .fsize[data-v-53c6a027]{font-size:10px;margin-bottom:%?6?%}",""])},c46f:function(t,e){t.exports="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDAA0JCgsKCA0LCgsODg0PEyAVExISEyccHhcgLikxMC4pLSwzOko+MzZGNywtQFdBRkxOUlNSMj5aYVpQYEpRUk//2wBDAQ4ODhMREyYVFSZPNS01T09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0//wAARCAEsASwDASIAAhEBAxEB/8QAGgABAAMBAQEAAAAAAAAAAAAAAAIEBQMBB//EACkQAQEAAgECBgICAgMAAAAAAAABAgMRBCEUMUFRUmEScRMzIoEyQpH/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A+jAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAeQA4beow19peaqZ9VnlfSfoGkMm7c7f+V/9ezfnL52/ug1RS19ZeZM52+ot4Z45zmUEgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFLqeo45wwv7rt1W3+PDiXvfJnW23mg8ttvNAAAAdNW3LXlLL29Y5gNXVsmzHmf7jozOm23XnJb2vm0peZKD0AAAAAAAAAAAAAAAAAAAAAAAAAAvaCOd4wt+qDP6vO5brPSXs4JZ3nO33RAAAAAAAaXTZ/nqlvmzVzoLzbPaAugAAAAAAAAAAAAAAAAAAAAAAAAAI7P68v1UkcpzhZ9Ayb2teJbJxss9qiAAAAAAAt9BP8APK/Sou9DjxLfcFwAAAAAAAAAAAAAAAAAAAAAAAAAAAGb1eH47bfS3s4NPqdU2YXjznkzbLLZfOA8AAAAAAafTYfhqkvmp9Lq/kz5s7RpScTgAAAAAAAAAAAAAAAAAAAAAAAAAAAABS6vR/3xn7i6jlJZZfUGQJ7sfx25SeUqAAACWrXdmck/2iv9Frkw/P1vYHfVrmvGST9pgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAW8Tl5bJObeyr1PUSS44Xm31BW6my7suPdyLebzQAABo9HlLpk9eaznXRturLn0vmDUHPXsx2SWWc+zoAAAAAAAAAAAAAAAAAAAAAAAAACGezDCc2yfXIJuW3fhrne9/ZV29XcuZh2n2rW23m3kHbb1Oed4l4n04W80AAAAAAASw2ZYXnG2Lerq5eJn2vupANiWZSWXtXrK17s9d7Xsu6uqwz4lvF+6CwPJZZzLzHoAAAAAAAAAAAAAAAAAADy2Sc16odVvttxxvb1B139VMeZh3qlnsyzvOVt/dRAAAAAAAAAAAAACXi8wAd9XU567xbzPur2rbjsnMrKSwzuvKWUGuOWjZNmEvr6uoAAAAAAAAAAAAAAAADI2f2ZfutdkbZZsy596CIAAAAAAAAAAAAAAAAAL3Q/15ftbVehlmvLn1q0AAAAAAAAAAAAAAAAA4benw2Xm9r9O4Cp4HD508Dh86tgKngcPnTwOHzq2AqeBw+dPA4fOrYCp4HD508Dh86tgKngcPnTwOHzq2AqeBw+dPA4fOrYCp4HD508Dh86tgKngcPnTwOHzq2AqeBw+dezosJefytWgEcMZjJJOyQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//9k="}}]);