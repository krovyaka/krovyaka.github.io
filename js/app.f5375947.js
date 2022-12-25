(function(e){function t(t){for(var c,o,i=t[0],b=t[1],s=t[2],l=0,d=[];l<i.length;l++)o=i[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&d.push(a[o][0]),a[o]=0;for(c in b)Object.prototype.hasOwnProperty.call(b,c)&&(e[c]=b[c]);u&&u(t);while(d.length)d.shift()();return r.push.apply(r,s||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],c=!0,i=1;i<n.length;i++){var b=n[i];0!==a[b]&&(c=!1)}c&&(r.splice(t--,1),e=o(o.s=n[0]))}return e}var c={},a={app:0},r=[];function o(t){if(c[t])return c[t].exports;var n=c[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=c,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)o.d(n,c,function(t){return e[t]}.bind(null,c));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],b=i.push.bind(i);i.push=t,i=i.slice();for(var s=0;s<i.length;s++)t(i[s]);var u=b;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"018b":function(e,t,n){"use strict";n("7811")},"26ce":function(e,t,n){},3641:function(e,t,n){"use strict";n("b84e")},4983:function(e,t,n){"use strict";n("26ce")},5422:function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var c=n("7a23"),a={id:"app"};function r(e,t,n,r,o,i){var b=Object(c["x"])("router-view");return Object(c["q"])(),Object(c["d"])("div",a,[Object(c["g"])(b)])}var o={name:"App",components:{}},i=(n("3641"),n("6b0d")),b=n.n(i);const s=b()(o,[["render",r]]);var u=s,l=n("6605"),d=function(e){return Object(c["t"])("data-v-76e78ed2"),e=e(),Object(c["r"])(),e},f=d((function(){return Object(c["e"])("div",{class:"snow"},null,-1)})),O=d((function(){return Object(c["e"])("div",{class:"sky"},null,-1)})),h=[f,O];function j(e,t,n,a,r,o){return Object(c["q"])(),Object(c["d"])("div",null,h)}var w={name:"Snow",data:function(){return{buttonStyle:"background-color: #2c3e50"}}};n("4983");const v=b()(w,[["render",j],["__scopeId","data-v-76e78ed2"]]);var p=v,y={class:"artButtons"},k=Object(c["f"])('<a href="#/snow" data-v-b3d3d632><span style="background-color:#2c3e50;color:white;" data-v-b3d3d632>Snow</span></a><a href="#/chess" data-v-b3d3d632><span style="background-color:#88ad7b;color:#000000;" data-v-b3d3d632>Chess</span></a><a href="#/moscow-city-tower" data-v-b3d3d632><span style="background-color:#a3ada5;color:#2e2e2e;" data-v-b3d3d632>Moscow City Tower</span></a>',3),g=[k];function m(e,t,n,a,r,o){return Object(c["q"])(),Object(c["d"])("div",y,g)}var _={name:"Main",props:{arts:Array}};n("018b");const S=b()(_,[["render",m],["__scopeId","data-v-b3d3d632"]]);var B=S,M={class:"container"},P={class:"board"};function q(e,t,n,a,r,o){return Object(c["q"])(),Object(c["d"])("div",M,[Object(c["e"])("div",P,[(Object(c["q"])(!0),Object(c["d"])(c["a"],null,Object(c["w"])(o.renderBoard,(function(e){return Object(c["q"])(),Object(c["d"])("div",{key:e,class:"board-row"},[(Object(c["q"])(!0),Object(c["d"])(c["a"],null,Object(c["w"])(e,(function(e){return Object(c["q"])(),Object(c["d"])("div",{key:e,style:Object(c["m"])({height:o.cellSize,width:o.cellSize}),class:"board-cell"},[Object(c["e"])("div",{class:"chess-piece",style:Object(c["m"])({"font-size":o.cellSize})},Object(c["z"])(e.icon),5)],4)})),128))])})),128))])])}n("7db0");var A=n("d4ec"),x=n("ade3"),W=function e(){Object(A["a"])(this,e),Object(x["a"])(this,"board",void 0)},X=function e(){Object(A["a"])(this,e),Object(x["a"])(this,"scaleX",void 0),Object(x["a"])(this,"scaleY",void 0),Object(x["a"])(this,"chessPieces",void 0)},Y=n("257e"),z=n("262e"),C=n("2caf"),I=(n("99af"),function e(){Object(A["a"])(this,e),Object(x["a"])(this,"posX",void 0),Object(x["a"])(this,"posY",void 0),Object(x["a"])(this,"pos",void 0),Object(x["a"])(this,"color",void 0)}),T=function(e){Object(z["a"])(n,e);var t=Object(C["a"])(n);function n(){var e;Object(A["a"])(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return e=t.call.apply(t,[this].concat(a)),Object(x["a"])(Object(Y["a"])(e),"iconWhite","d"),Object(x["a"])(Object(Y["a"])(e),"iconBlack","D"),e}return n}(I),J=function(e){Object(z["a"])(n,e);var t=Object(C["a"])(n);function n(){var e;Object(A["a"])(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return e=t.call.apply(t,[this].concat(a)),Object(x["a"])(Object(Y["a"])(e),"iconWhite","b"),Object(x["a"])(Object(Y["a"])(e),"iconBlack","B"),e}return n}(I),D=function(e){Object(z["a"])(n,e);var t=Object(C["a"])(n);function n(){var e;Object(A["a"])(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return e=t.call.apply(t,[this].concat(a)),Object(x["a"])(Object(Y["a"])(e),"iconWhite","c"),Object(x["a"])(Object(Y["a"])(e),"iconBlack","C"),e}return n}(I),E=function(e){Object(z["a"])(n,e);var t=Object(C["a"])(n);function n(){var e;Object(A["a"])(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return e=t.call.apply(t,[this].concat(a)),Object(x["a"])(Object(Y["a"])(e),"iconWhite","e"),Object(x["a"])(Object(Y["a"])(e),"iconBlack","E"),e}return n}(I),F=function(e){Object(z["a"])(n,e);var t=Object(C["a"])(n);function n(){var e;Object(A["a"])(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return e=t.call.apply(t,[this].concat(a)),Object(x["a"])(Object(Y["a"])(e),"iconWhite","f"),Object(x["a"])(Object(Y["a"])(e),"iconBlack","F"),e}return n}(I),H=function(e){Object(z["a"])(n,e);var t=Object(C["a"])(n);function n(){var e;Object(A["a"])(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return e=t.call.apply(t,[this].concat(a)),Object(x["a"])(Object(Y["a"])(e),"iconWhite","a"),Object(x["a"])(Object(Y["a"])(e),"iconBlack","A"),e}return n}(I);function G(){var e=new X;e.scaleX=8,e.scaleY=8,e.chessPieces=[K(new T,0,0,"white"),K(new J,1,0,"white"),K(new D,2,0,"white"),K(new E,3,0,"white"),K(new F,4,0,"white"),K(new D,5,0,"white"),K(new J,6,0,"white"),K(new T,7,0,"white"),K(new H,0,1,"white"),K(new H,1,1,"white"),K(new H,2,1,"white"),K(new H,3,1,"white"),K(new H,4,1,"white"),K(new H,5,1,"white"),K(new H,6,1,"white"),K(new H,7,1,"white"),K(new T,0,7,"black"),K(new J,1,7,"black"),K(new D,2,7,"black"),K(new E,3,7,"black"),K(new F,4,7,"black"),K(new D,5,7,"black"),K(new J,6,7,"black"),K(new T,7,7,"black"),K(new H,0,6,"black"),K(new H,1,6,"black"),K(new H,2,6,"black"),K(new H,3,6,"black"),K(new H,4,6,"black"),K(new H,5,6,"black"),K(new H,6,6,"black"),K(new H,7,6,"black")];var t=new W;return t.board=e,t}function K(e,t,n,c){return e.posX=t,e.posY=n,e.color=c,e}var L={name:"Chess",methods:{},beforeCreate:function(){},data:function(){return{game:G()}},computed:{renderBoard:function(){for(var e=this,t=[],n=function(n){for(var c=[],a=function(t){var a={},r=e.game.board.chessPieces.find((function(e){return e.posX===t&&e.posY===n}));r&&(a.icon=r.iconWhite,"black"===r.color&&(a.icon=r.iconBlack)),c.push(a)},r=0;r<e.game.board.scaleX;r++)a(r);t.push(c)},c=0;c<this.game.board.scaleY;c++)n(c);return t},cellSize:function(){var e=Math.max(3,this.game.board.scaleY,this.game.board.scaleX);return window.innerHeight>window.innerWidth?Math.floor(100/e*.9)+"vw":Math.floor(100/e*.9)+"vh"}}};n("5c6e");const N=b()(L,[["render",q],["__scopeId","data-v-25815f49"]]);var Q=N,R=function(e){return Object(c["t"])("data-v-a897286a"),e=e(),Object(c["r"])(),e},U=R((function(){return Object(c["e"])("div",{class:"tower"},null,-1)})),V=R((function(){return Object(c["e"])("div",{class:"sky"},null,-1)})),Z=[U,V];function $(e,t,n,a,r,o){return Object(c["q"])(),Object(c["d"])("div",null,Z)}var ee={name:"MoscowCityTower"};n("ab51");const te=b()(ee,[["render",$],["__scopeId","data-v-a897286a"]]);var ne=te,ce=Object(l["a"])({history:Object(l["b"])(),routes:[{path:"/",component:B},{path:"/snow",component:p},{path:"/chess",component:Q},{path:"/moscow-city-tower",component:ne}]}),ae=Object(c["c"])(u);ae.use(ce),ae.mount("#app")},"5c6e":function(e,t,n){"use strict";n("5422")},7811:function(e,t,n){},"7f4c":function(e,t,n){},ab51:function(e,t,n){"use strict";n("7f4c")},b84e:function(e,t,n){}});
//# sourceMappingURL=app.f5375947.js.map