(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"/e88":function(t,i){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},"41HK":function(t,i,o){(t.exports=o("I1BE")(!1)).push([t.i,"\n.v-alert--notification {\n  border-radius: 4px !important;\n  border-top: none !important;\n}\n",""])},"4BCd":function(t,i,o){"use strict";o.r(i);var e=o("nLp+"),n=(o("xfY5"),{inheritAttrs:!1,props:{elevation:{type:[Number,String],default:6},value:{type:Boolean,default:!0}}}),s=(o("LK7J"),o("KHd+")),a=Object(s.a)(n,function(){var t=this.$createElement;return(this._self._c||t)("v-alert",this._g(this._b({staticClass:"v-alert--notification",class:["elevation-"+this.elevation],attrs:{value:this.value}},"v-alert",this.$attrs,!1),this.$listeners),[this._t("default")],2)},[],!1,null,null,null);a.options.__file="Notification.vue";var r=a.exports,c={components:{MaterialCard:e.a,MaterialNotification:r},data:function(){return{color:null,colors:["purple","info","success","warning","error"],top:!0,bottom:!1,left:!1,right:!1,snackbar:!1}},methods:{snack:function(){this.top=!1,this.bottom=!1,this.left=!1,this.right=!1;for(var t=arguments.length,i=new Array(t),o=0;o<t;o++)i[o]=arguments[o];for(var e=0;e<i.length;e++){this[i[e]]=!0}this.color=this.colors[Math.floor(Math.random()*this.colors.length)],this.snackbar=!0}}},l=Object(s.a)(c,function(){var t=this,i=t.$createElement,o=t._self._c||i;return o("v-container",{attrs:{fluid:"","grid-list-xl":"","fill-height":""}},[o("v-layout",{attrs:{"justify-center":"","align-center":""}},[o("v-flex",{attrs:{xs12:""}},[o("material-card",{attrs:{color:"green"}},[o("div",{attrs:{slot:"header"},slot:"header"},[o("div",{staticClass:"title font-weight-light mb-2"},[t._v("Notifications")]),t._v(" "),o("div",{staticClass:"category"},[t._v("\n            Handcrafted by us with\n            "),o("v-icon",{attrs:{size:"17"}},[t._v("\n              mdi-heart\n            ")])],1)]),t._v(" "),o("v-card-text",[o("v-layout",{attrs:{row:"",wrap:""}},[o("v-flex",{attrs:{md6:"",sm12:""}},[o("h2",{staticClass:"title font-weight-light mb-3"},[t._v("Notifications Style")]),t._v(" "),o("material-notification",{staticClass:"mb-3",attrs:{color:"info"}},[t._v("\n                This is a plain notification\n              ")]),t._v(" "),o("material-notification",{staticClass:"mb-3",attrs:{color:"info",dismissible:""}},[t._v("\n                This is a notification with close button.\n              ")]),t._v(" "),o("material-notification",{staticClass:"mb-3",attrs:{color:"info",dismissible:"",icon:"mdi-bell-plus"}},[t._v("\n\n                This is a notification with close button and icon.\n              ")]),t._v(" "),o("material-notification",{staticClass:"mb-3",attrs:{color:"info",dismissible:"",icon:"mdi-bell-plus"}},[t._v("\n\n                This is a notification with close button and icon and have many lines. You can see that the icon and\n                the close button are always vertically aligned. This is a beautiful notification. So you don't have to\n                worry about the style.\n              ")])],1),t._v(" "),o("v-flex",{attrs:{md6:"",sm12:""}},[o("h2",{staticClass:"title font-weight-light"},[t._v("Notifcation States")]),t._v(" "),o("material-notification",{staticClass:"mb-3",attrs:{color:"info",dismissible:""}},[o("strong",[t._v("INFO")]),t._v(' - This is a regular notification made with `color="info"`\n              ')]),t._v(" "),o("material-notification",{staticClass:"mb-3",attrs:{color:"success",dismissible:""}},[o("strong",[t._v("SUCCESS")]),t._v(' - This is a regular notification made with `color="success"`\n              ')]),t._v(" "),o("material-notification",{staticClass:"mb-3",attrs:{color:"warning",dismissible:""}},[o("strong",[t._v("WARNING")]),t._v(' - This is a regular notification made with `color="warning"`\n              ')]),t._v(" "),o("material-notification",{staticClass:"mb-3",attrs:{color:"error",dismissible:""}},[o("strong",[t._v("DANGER")]),t._v(' - This is a regular notification made with `color="error"`\n              ')]),t._v(" "),o("material-notification",{staticClass:"mb-3",attrs:{color:"purple",dismissible:""}},[o("strong",[t._v("PRIMARY")]),t._v(' - This is a regular notification made with `color="purple"`\n              ')])],1)],1),t._v(" "),o("div",{staticClass:"text-xs-center"},[o("h2",{staticClass:"title font-weight-light mb-2"},[t._v("Notification Places")]),t._v(" "),o("span",{staticClass:" subheading font-weight-light grey--text"},[t._v("Click to view notifications")])]),t._v(" "),o("v-container",{attrs:{"grid-list-lg":""}},[o("v-layout",{attrs:{"justify-center":"",row:"",wrap:""}},[o("v-flex",{attrs:{xs12:"",sm4:""}},[o("v-btn",{attrs:{block:"",color:"success"},on:{click:function(i){t.snack("top","left")}}},[t._v("\n                  Top Left\n                ")])],1),t._v(" "),o("v-flex",{attrs:{xs12:"",sm4:""}},[o("v-btn",{attrs:{block:"",color:"success"},on:{click:function(i){t.snack("top")}}},[t._v("\n                  Top Center\n                ")])],1)],1),t._v(" "),o("v-layout",{attrs:{"justify-center":"",row:"",wrap:""}},[o("v-flex",{attrs:{xs12:"",sm4:""}},[o("v-btn",{attrs:{block:"",color:"success"},on:{click:function(i){t.snack("top","right")}}},[t._v("\n                  Top Right\n                ")])],1),t._v(" "),o("v-flex",{attrs:{xs12:"",sm4:""}},[o("v-btn",{attrs:{block:"",color:"success"},on:{click:function(i){t.snack("bottom","left")}}},[t._v("\n                  Bottom Left\n                ")])],1)],1),t._v(" "),o("v-layout",{attrs:{"justify-center":"",row:"",wrap:""}},[o("v-flex",{attrs:{xs12:"",sm4:""}},[o("v-btn",{attrs:{block:"",color:"success"},on:{click:function(i){t.snack("bottom")}}},[t._v("\n                  Bottom Center\n                ")])],1),t._v(" "),o("v-flex",{attrs:{xs12:"",sm4:""}},[o("v-btn",{attrs:{block:"",color:"success"},on:{click:function(i){t.snack("bottom","right")}}},[t._v("\n                  Bottom Right\n                ")])],1)],1)],1),t._v(" "),o("v-snackbar",{attrs:{color:t.color,bottom:t.bottom,top:t.top,left:t.left,right:t.right,dark:""},model:{value:t.snackbar,callback:function(i){t.snackbar=i},expression:"snackbar"}},[o("v-icon",{staticClass:"mr-3",attrs:{color:"white"}},[t._v("\n              mdi-bell-plus\n            ")]),t._v(" "),o("div",[t._v("Welcome to "),o("b",[t._v("Vue Material Dashboard")]),t._v(" - a beautiful freebie for every web developer.")]),t._v(" "),o("v-icon",{attrs:{size:"16"},on:{click:function(i){t.snackbar=!1}}},[t._v("\n              mdi-close-circle\n            ")])],1)],1)],1)],1)],1)],1)},[],!1,null,null,null);l.options.__file="Notifications.vue";i.default=l.exports},EemH:function(t,i,o){var e=o("UqcF"),n=o("RjD/"),s=o("aCFj"),a=o("apmT"),r=o("aagx"),c=o("xpql"),l=Object.getOwnPropertyDescriptor;i.f=o("nh4g")?l:function(t,i){if(t=s(t),i=a(i,!0),c)try{return l(t,i)}catch(t){}if(r(t,i))return n(!e.f.call(t,i),t[i])}},LK7J:function(t,i,o){"use strict";var e=o("vcrt");o.n(e).a},RCGD:function(t,i,o){(t.exports=o("I1BE")(!1)).push([t.i,".v-card--material__header.v-card {\n  border-radius: 4px;\n}",""])},UqcF:function(t,i){i.f={}.propertyIsEnumerable},Xbzi:function(t,i,o){var e=o("0/R4"),n=o("i5dc").set;t.exports=function(t,i,o){var s,a=i.constructor;return a!==o&&"function"==typeof a&&(s=a.prototype)!==o.prototype&&e(s)&&n&&n(t,s),t}},cguD:function(t,i,o){var e=o("RCGD");"string"==typeof e&&(e=[[t.i,e,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};o("aET+")(e,n);e.locals&&(t.exports=e.locals)},fid7:function(t,i,o){var e=o("fjLC");"string"==typeof e&&(e=[[t.i,e,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};o("aET+")(e,n);e.locals&&(t.exports=e.locals)},fjLC:function(t,i,o){(t.exports=o("I1BE")(!1)).push([t.i,"\n.v-offset {\n  margin: 0 auto;\n  max-width: calc(100% - 32px);\n  position: relative;\n}\n.v-offset--full-width {\n  max-width: 100%;\n}\n",""])},i5dc:function(t,i,o){var e=o("0/R4"),n=o("y3w9"),s=function(t,i){if(n(t),!e(i)&&null!==i)throw TypeError(i+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,i,e){try{(e=o("m0Pp")(Function.call,o("EemH").f(Object.prototype,"__proto__").set,2))(t,[]),i=!(t instanceof Array)}catch(t){i=!0}return function(t,o){return s(t,o),i?t.__proto__=o:e(t,o),t}}({},!1):void 0),check:s}},jcYC:function(t,i,o){"use strict";var e=o("cguD");o.n(e).a},kJMx:function(t,i,o){var e=o("zhAb"),n=o("4R4u").concat("length","prototype");i.f=Object.getOwnPropertyNames||function(t){return e(t,n)}},"nLp+":function(t,i,o){"use strict";o("xfY5");var e={props:{fullWidth:{type:Boolean,default:!1},offset:{type:[Number,String],default:0}},computed:{classes:function(){return{"v-offset--full-width":this.fullWidth}},styles:function(){return{top:"-".concat(this.offset,"px"),marginBottom:"-".concat(this.offset,"px")}}}},n=(o("wrxa"),o("KHd+")),s=Object(n.a)(e,function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"v-offset",class:this.classes,style:this.styles},[this._t("default")],2)},[],!1,null,null,null);s.options.__file="Offset.vue";var a={components:{HelperOffset:s.exports},inheritAttrs:!1,props:{color:{type:String,default:"secondary"},elevation:{type:[Number,String],default:10},inline:{type:Boolean,default:!1},fullWidth:{type:Boolean,default:!1},offset:{type:[Number,String],default:24},title:{type:String,default:void 0},text:{type:String,default:void 0}},computed:{hasOffset:function(){return this.$slots.header||this.$slots.offset||this.title||this.text},styles:function(){return this.hasOffset?{marginBottom:"".concat(this.offset,"px"),marginTop:"".concat(2*this.offset,"px")}:null}}},r=(o("jcYC"),Object(n.a)(a,function(){var t=this,i=t.$createElement,o=t._self._c||i;return o("v-card",t._g(t._b({style:t.styles},"v-card",t.$attrs,!1),t.$listeners),[t.hasOffset?o("helper-offset",{attrs:{inline:t.inline,"full-width":t.fullWidth,offset:t.offset}},[t.$slots.offset?t._t("offset"):o("v-card",{staticClass:"v-card--material__header",class:"elevation-"+t.elevation,attrs:{color:t.color,dark:""}},[t.title||t.text?o("span",[o("h4",{staticClass:"title font-weight-light mb-2",domProps:{textContent:t._s(t.title)}}),t._v(" "),o("p",{staticClass:"category font-weight-thin",domProps:{textContent:t._s(t.text)}})]):t._t("header")],2)],2):t._e(),t._v(" "),o("v-card-text",[t._t("default")],2),t._v(" "),t.$slots.actions?o("v-divider",{staticClass:"mx-3"}):t._e(),t._v(" "),t.$slots.actions?o("v-card-actions",[t._t("actions")],2):t._e()],1)},[],!1,null,null,null));r.options.__file="Card.vue";i.a=r.exports},qncB:function(t,i,o){var e=o("XKFU"),n=o("vhPU"),s=o("eeVq"),a=o("/e88"),r="["+a+"]",c=RegExp("^"+r+r+"*"),l=RegExp(r+r+"*$"),f=function(t,i,o){var n={},r=s(function(){return!!a[t]()||"​"!="​"[t]()}),c=n[t]=r?i(u):a[t];o&&(n[o]=c),e(e.P+e.F*r,"String",n)},u=f.trim=function(t,i){return t=String(n(t)),1&i&&(t=t.replace(c,"")),2&i&&(t=t.replace(l,"")),t};t.exports=f},vcrt:function(t,i,o){var e=o("41HK");"string"==typeof e&&(e=[[t.i,e,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};o("aET+")(e,n);e.locals&&(t.exports=e.locals)},wrxa:function(t,i,o){"use strict";var e=o("fid7");o.n(e).a},xfY5:function(t,i,o){"use strict";var e=o("dyZX"),n=o("aagx"),s=o("LZWt"),a=o("Xbzi"),r=o("apmT"),c=o("eeVq"),l=o("kJMx").f,f=o("EemH").f,u=o("hswa").f,v=o("qncB").trim,h=e.Number,p=h,d=h.prototype,m="Number"==s(o("Kuth")(d)),_="trim"in String.prototype,b=function(t){var i=r(t,!1);if("string"==typeof i&&i.length>2){var o,e,n,s=(i=_?i.trim():v(i,3)).charCodeAt(0);if(43===s||45===s){if(88===(o=i.charCodeAt(2))||120===o)return NaN}else if(48===s){switch(i.charCodeAt(1)){case 66:case 98:e=2,n=49;break;case 79:case 111:e=8,n=55;break;default:return+i}for(var a,c=i.slice(2),l=0,f=c.length;l<f;l++)if((a=c.charCodeAt(l))<48||a>n)return NaN;return parseInt(c,e)}}return+i};if(!h(" 0o1")||!h("0b1")||h("+0x1")){h=function(t){var i=arguments.length<1?0:t,o=this;return o instanceof h&&(m?c(function(){d.valueOf.call(o)}):"Number"!=s(o))?a(new p(b(i)),o,h):b(i)};for(var g,x=o("nh4g")?l(p):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),y=0;x.length>y;y++)n(p,g=x[y])&&!n(h,g)&&u(h,g,f(p,g));h.prototype=d,d.constructor=h,o("KroJ")(e,"Number",h)}}}]);
//# sourceMappingURL=5.js.map