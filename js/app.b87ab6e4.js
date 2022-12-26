(function(e){function t(t){for(var n,o,r=t[0],s=t[1],l=t[2],h=0,b=[];h<r.length;h++)o=r[h],Object.prototype.hasOwnProperty.call(c,o)&&c[o]&&b.push(c[o][0]),c[o]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);u&&u(t);while(b.length)b.shift()();return a.push.apply(a,l||[]),i()}function i(){for(var e,t=0;t<a.length;t++){for(var i=a[t],n=!0,r=1;r<i.length;r++){var s=i[r];0!==c[s]&&(n=!1)}n&&(a.splice(t--,1),e=o(o.s=i[0]))}return e}var n={},c={app:0},a=[];function o(t){if(n[t])return n[t].exports;var i=n[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,o),i.l=!0,i.exports}o.m=e,o.c=n,o.d=function(e,t,i){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(o.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(i,n,function(t){return e[t]}.bind(null,n));return i},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],s=r.push.bind(r);r.push=t,r=r.slice();for(var l=0;l<r.length;l++)t(r[l]);var u=s;a.push([0,"chunk-vendors"]),i()})({0:function(e,t,i){e.exports=i("56d7")},"018b":function(e,t,i){"use strict";i("7811")},"0fb9":function(e,t,i){},"26ce":function(e,t,i){},"31ff":function(e,t,i){},3355:function(e,t,i){"use strict";i("0fb9")},4983:function(e,t,i){"use strict";i("26ce")},"56d7":function(e,t,i){"use strict";i.r(t);i("e260"),i("e6cf"),i("cca6"),i("a79d");var n=i("7a23"),c={id:"app"};function a(e,t,i,a,o,r){var s=Object(n["y"])("router-view");return Object(n["r"])(),Object(n["d"])("div",c,[Object(n["g"])(s)])}var o={name:"App",components:{}},r=(i("3355"),i("6b0d")),s=i.n(r);const l=s()(o,[["render",a]]);var u=l,h=i("6605"),b=function(e){return Object(n["u"])("data-v-76e78ed2"),e=e(),Object(n["s"])(),e},d=b((function(){return Object(n["e"])("div",{class:"snow"},null,-1)})),p=b((function(){return Object(n["e"])("div",{class:"sky"},null,-1)})),v=[d,p];function f(e,t,i,c,a,o){return Object(n["r"])(),Object(n["d"])("div",null,v)}var O={name:"Snow",data:function(){return{buttonStyle:"background-color: #2c3e50"}}};i("4983");const j=s()(O,[["render",f],["__scopeId","data-v-76e78ed2"]]);var y=j,w={class:"artButtons"},k=Object(n["f"])('<a href="#/snow" data-v-b3d3d632><span style="background-color:#2c3e50;color:white;" data-v-b3d3d632>Snow</span></a><a href="#/chess" data-v-b3d3d632><span style="background-color:#88ad7b;color:#000000;" data-v-b3d3d632>Chess</span></a><a href="#/moscow-city-tower" data-v-b3d3d632><span style="background-color:#a3ada5;color:#2e2e2e;" data-v-b3d3d632>Moscow City Tower</span></a>',3),m=[k];function P(e,t,i,c,a,o){return Object(n["r"])(),Object(n["d"])("div",w,m)}var g={name:"Main",props:{arts:Array}};i("018b");const X=s()(g,[["render",P],["__scopeId","data-v-b3d3d632"]]);var Y=X,A={class:"container"},M={class:"board"},C=["onClick"],S={class:"bottom-panel"};function _(e,t,i,c,a,o){return Object(n["r"])(),Object(n["d"])("div",A,[Object(n["e"])("div",M,[(Object(n["r"])(!0),Object(n["d"])(n["a"],null,Object(n["x"])(o.renderBoard,(function(e){return Object(n["r"])(),Object(n["d"])("div",{key:e,class:"board-row"},[(Object(n["r"])(!0),Object(n["d"])(n["a"],null,Object(n["x"])(e,(function(e){return Object(n["r"])(),Object(n["d"])("div",{key:e,class:Object(n["m"])(["board-cell",e.cellStyleClass])},[Object(n["e"])("div",{class:"chess-piece no-select",onClick:function(t){return o.selectCell(e)},style:Object(n["n"])({"font-size":o.cellSize,height:o.cellSize,width:o.cellSize})},Object(n["A"])(e.icon),13,C)],2)})),128))])})),128))]),Object(n["e"])("div",S,[Object(n["e"])("div",{class:"chess-button no-select",onClick:t[0]||(t[0]=function(){return o.undo&&o.undo.apply(o,arguments)})},"◀"),Object(n["e"])("div",{class:"chess-button no-select",onClick:t[1]||(t[1]=function(){return o.redo&&o.redo.apply(o,arguments)})},"▶")])])}i("7db0");var U=i("d4ec"),x=i("ade3"),B=function e(){Object(U["a"])(this,e),Object(x["a"])(this,"board",void 0)},W=i("bee2"),L=(i("a434"),i("159b"),i("fb6a"),function(){function e(){Object(U["a"])(this,e),Object(x["a"])(this,"moves",void 0),Object(x["a"])(this,"currentMove",void 0),Object(x["a"])(this,"initialPosition",void 0),Object(x["a"])(this,"initialPlayer",void 0),Object(x["a"])(this,"board",void 0)}return Object(W["a"])(e,[{key:"init",value:function(e){var t=this;this.board=e,this.moves=[],this.currentMove=-1,this.initialPlayer=e.currentPlayer,this.initialPosition=[],this.board.chessPieces.forEach((function(e){t.initialPosition.push(e.clone())}))}},{key:"write",value:function(e,t,i,n){this.currentMove++,this.currentMove<this.moves.length&&(this.moves=this.moves.slice(0,this.currentMove)),this.moves.push({from:[e,t],to:[i,n]})}},{key:"undo",value:function(){this.currentMove>-1&&(this.currentMove--,this.restorePosition())}},{key:"redo",value:function(){this.currentMove<this.moves.length-1&&(this.currentMove++,this.restorePosition())}},{key:"restorePosition",value:function(){var e=[];this.initialPosition.forEach((function(t){e.push(t.clone())})),this.board.chessPieces=e,this.board.currentPlayer=this.initialPlayer;for(var t=0;t<=this.currentMove;t++){var i=this.moves[t],n=this.board.getPiece(i.from[0],i.from[1]);this.board.movePieceWithoutHistory(n,i.to[0],i.to[1])}}}]),e}()),D=function(){function e(){Object(U["a"])(this,e),Object(x["a"])(this,"scaleX",void 0),Object(x["a"])(this,"scaleY",void 0),Object(x["a"])(this,"chessPieces",void 0),Object(x["a"])(this,"players",void 0),Object(x["a"])(this,"currentPlayer",void 0),Object(x["a"])(this,"history",void 0)}return Object(W["a"])(e,[{key:"fieldIsUnderAttack",value:function(e,t,i){var n=this;return!!this.chessPieces.find((function(c){if(c.player===i)return!1;var a=c.positionsUnderAttack(n);return a.find((function(i){return i[0]===e&&i[1]===t}))}))}},{key:"getPiece",value:function(e,t){return this.chessPieces.find((function(i){return i.posX===e&&i.posY===t}))}},{key:"movePiece",value:function(e,t,i){if(e){var n=e.posX,c=e.posY,a=this.movePieceWithoutHistory(e,t,i);a&&this.history.write(n,c,t,i)}}},{key:"movePieceWithoutHistory",value:function(e,t,i){if(e){var n=this.getPiece(t,i);if(n){var c=this.chessPieces.indexOf(n);this.chessPieces.splice(c,1)}e.posX=t,e.posY=i;var a=this.players.indexOf(this.currentPlayer)+1;return a>=this.players.length&&(a=0),this.currentPlayer=this.players[a],!0}return!1}},{key:"initHistory",value:function(){this.history=new L,this.history.init(this)}}]),e}(),H=i("257e"),I=i("45eb"),z=i("7e84"),E=i("262e"),T=i("2caf"),J=(i("99af"),i("4de4"),function(){function e(){Object(U["a"])(this,e),Object(x["a"])(this,"posX",void 0),Object(x["a"])(this,"posY",void 0),Object(x["a"])(this,"player",void 0),Object(x["a"])(this,"main",void 0)}return Object(W["a"])(e,[{key:"availablePositions",value:function(){return[]}},{key:"positionsUnderAttack",value:function(){return[]}},{key:"clone",value:function(e){e.posX=this.posX,e.posY=this.posY,e.player=this.player,e.main=this.main}}]),e}()),q=function(e){Object(E["a"])(i,e);var t=Object(T["a"])(i);function i(){return Object(U["a"])(this,i),t.apply(this,arguments)}return Object(W["a"])(i,[{key:"positionsUnderAttack",value:function(e){var t=this,i=[];return this.getDirections().forEach((function(n){var c=[t.posX,t.posY];while(1){if(c=[c[0]+n[0],c[1]+n[1]],c[0]<0||c[0]>=e.scaleX||c[1]<0||c[1]>=e.scaleY)break;i.push(c);var a=e.getPiece(c[0],c[1]);if(a&&!a.main)break}})),i}},{key:"getDirections",value:function(){return[]}},{key:"availablePositions",value:function(e){var t=this,i=this.positionsUnderAttack(e);return i=i.filter((function(i){var n=e.getPiece(i[0],i[1]);return!n||n.player!==t.player})),i}}]),i}(J),F=function(e){Object(E["a"])(i,e);var t=Object(T["a"])(i);function i(){var e;Object(U["a"])(this,i);for(var n=arguments.length,c=new Array(n),a=0;a<n;a++)c[a]=arguments[a];return e=t.call.apply(t,[this].concat(c)),Object(x["a"])(Object(H["a"])(e),"iconWhite","D"),Object(x["a"])(Object(H["a"])(e),"iconBlack","d"),Object(x["a"])(Object(H["a"])(e),"name","rock"),Object(x["a"])(Object(H["a"])(e),"directions",[[0,1],[0,-1],[1,0],[-1,0]]),e}return Object(W["a"])(i,[{key:"getDirections",value:function(){return this.directions}},{key:"clone",value:function(){var e=new i;return Object(I["a"])(Object(z["a"])(i.prototype),"clone",this).call(this,e),e}}]),i}(q),G=function(e){Object(E["a"])(i,e);var t=Object(T["a"])(i);function i(){var e;Object(U["a"])(this,i);for(var n=arguments.length,c=new Array(n),a=0;a<n;a++)c[a]=arguments[a];return e=t.call.apply(t,[this].concat(c)),Object(x["a"])(Object(H["a"])(e),"iconWhite","B"),Object(x["a"])(Object(H["a"])(e),"iconBlack","b"),Object(x["a"])(Object(H["a"])(e),"name","knight"),e}return Object(W["a"])(i,[{key:"positionsUnderAttack",value:function(e){var t=[[this.posX-2,this.posY-1],[this.posX-2,this.posY+1],[this.posX+2,this.posY-1],[this.posX+2,this.posY+1],[this.posX-1,this.posY-2],[this.posX-1,this.posY+2],[this.posX+1,this.posY-2],[this.posX+1,this.posY+2]];return t=t.filter((function(t){return t[0]>=0&&t[0]<e.scaleX&&t[1]>=0&&t[1]<e.scaleY})),t}},{key:"availablePositions",value:function(e){var t=this,i=this.positionsUnderAttack(e);return i=i.filter((function(i){var n=e.getPiece(i[0],i[1]);return!n||n.player!==t.player})),i}},{key:"clone",value:function(){var e=new i;return Object(I["a"])(Object(z["a"])(i.prototype),"clone",this).call(this,e),e}}]),i}(J),K=function(e){Object(E["a"])(i,e);var t=Object(T["a"])(i);function i(){var e;Object(U["a"])(this,i);for(var n=arguments.length,c=new Array(n),a=0;a<n;a++)c[a]=arguments[a];return e=t.call.apply(t,[this].concat(c)),Object(x["a"])(Object(H["a"])(e),"iconWhite","C"),Object(x["a"])(Object(H["a"])(e),"iconBlack","c"),Object(x["a"])(Object(H["a"])(e),"name","bishop"),Object(x["a"])(Object(H["a"])(e),"directions",[[-1,-1],[-1,1],[1,-1],[1,1]]),e}return Object(W["a"])(i,[{key:"getDirections",value:function(){return this.directions}},{key:"clone",value:function(){var e=new i;return Object(I["a"])(Object(z["a"])(i.prototype),"clone",this).call(this,e),e}}]),i}(q),N=function(e){Object(E["a"])(i,e);var t=Object(T["a"])(i);function i(){var e;Object(U["a"])(this,i);for(var n=arguments.length,c=new Array(n),a=0;a<n;a++)c[a]=arguments[a];return e=t.call.apply(t,[this].concat(c)),Object(x["a"])(Object(H["a"])(e),"iconWhite","E"),Object(x["a"])(Object(H["a"])(e),"iconBlack","e"),Object(x["a"])(Object(H["a"])(e),"name","queen"),Object(x["a"])(Object(H["a"])(e),"directions",[[-1,-1],[-1,1],[1,-1],[1,1],[0,1],[0,-1],[1,0],[-1,0]]),e}return Object(W["a"])(i,[{key:"getDirections",value:function(){return this.directions}},{key:"clone",value:function(){var e=new i;return Object(I["a"])(Object(z["a"])(i.prototype),"clone",this).call(this,e),e}}]),i}(q),Q=function(e){Object(E["a"])(i,e);var t=Object(T["a"])(i);function i(){var e;Object(U["a"])(this,i);for(var n=arguments.length,c=new Array(n),a=0;a<n;a++)c[a]=arguments[a];return e=t.call.apply(t,[this].concat(c)),Object(x["a"])(Object(H["a"])(e),"iconWhite","F"),Object(x["a"])(Object(H["a"])(e),"iconBlack","f"),Object(x["a"])(Object(H["a"])(e),"name","king"),e}return Object(W["a"])(i,[{key:"positionsUnderAttack",value:function(e){var t=[[this.posX-1,this.posY-1],[this.posX-1,this.posY],[this.posX-1,this.posY+1],[this.posX,this.posY-1],[this.posX,this.posY+1],[this.posX+1,this.posY-1],[this.posX+1,this.posY],[this.posX+1,this.posY+1]];return t=t.filter((function(t){return t[0]>=0&&t[0]<e.scaleX&&t[1]>=0&&t[1]<e.scaleY})),t}},{key:"availablePositions",value:function(e){var t=this,i=this.positionsUnderAttack(e);return i=i.filter((function(i){return!e.fieldIsUnderAttack(i[0],i[1],t.player)})),i=i.filter((function(i){var n=e.getPiece(i[0],i[1]);return!n||n.player!==t.player})),i}},{key:"clone",value:function(){var e=new i;return Object(I["a"])(Object(z["a"])(i.prototype),"clone",this).call(this,e),e}}]),i}(J),R=i("2909"),V=function(e){Object(E["a"])(i,e);var t=Object(T["a"])(i);function i(){var e;Object(U["a"])(this,i);for(var n=arguments.length,c=new Array(n),a=0;a<n;a++)c[a]=arguments[a];return e=t.call.apply(t,[this].concat(c)),Object(x["a"])(Object(H["a"])(e),"iconWhite","A"),Object(x["a"])(Object(H["a"])(e),"iconBlack","a"),Object(x["a"])(Object(H["a"])(e),"direction",[0,1]),Object(x["a"])(Object(H["a"])(e),"initialLine",1),Object(x["a"])(Object(H["a"])(e),"name","pawn"),e}return Object(W["a"])(i,[{key:"positionsUnderAttack",value:function(e){var t;return t=this.direction[0]?[[this.posX+this.direction[0],this.posY-1],[this.posX+this.direction[0],this.posY+1]]:[[this.posX-1,this.posY+this.direction[1]],[this.posX+1,this.posY+this.direction[1]]],t=t.filter((function(t){return t[0]>=0&&t[0]<e.scaleX&&t[1]>=0&&t[1]<e.scaleY})),t}},{key:"availablePositions",value:function(e){var t=this,i=this.positionsUnderAttack(e);i=i.filter((function(i){var n=e.getPiece(i[0],i[1]);return n&&n.player!==t.player}));var n=[],c=e.getPiece(this.posX+this.direction[0],this.posY+this.direction[1]);if(!c&&(n.push([this.posX+this.direction[0],this.posY+this.direction[1]]),this.direction[0]&&this.initialLine===this.posX||this.direction[1]&&this.initialLine===this.posY)){var a=e.getPiece(this.posX+this.direction[0],this.posY+this.direction[1]);a||n.push([this.posX+2*this.direction[0],this.posY+2*this.direction[1]])}return[].concat(Object(R["a"])(i),n)}},{key:"clone",value:function(){var e=new i;return Object(I["a"])(Object(z["a"])(i.prototype),"clone",this).call(this,e),this.direction&&(e.direction=Object(R["a"])(this.direction)),e.initialLine=this.initialLine,e}}]),i}(J);function Z(){var e=new D;e.scaleX=8,e.scaleY=8,e.players=["white","black"],e.currentPlayer="white",e.chessPieces=[$(new F,0,0,"white"),$(new G,1,0,"white"),$(new K,2,0,"white"),$(new N,3,0,"white"),$(new Q,4,0,"white"),$(new K,5,0,"white"),$(new G,6,0,"white"),$(new F,7,0,"white"),$(new V,0,1,"white"),$(new V,1,1,"white"),$(new V,2,1,"white"),$(new V,3,1,"white"),$(new V,4,1,"white"),$(new V,5,1,"white"),$(new V,6,1,"white"),$(new V,7,1,"white"),$(new F,0,7,"black"),$(new G,1,7,"black"),$(new K,2,7,"black"),$(new N,3,7,"black"),$(new Q,4,7,"black"),$(new K,5,7,"black"),$(new G,6,7,"black"),$(new F,7,7,"black"),$(new V,0,6,"black"),$(new V,1,6,"black"),$(new V,2,6,"black"),$(new V,3,6,"black"),$(new V,4,6,"black"),$(new V,5,6,"black"),$(new V,6,6,"black"),$(new V,7,6,"black")],e.initHistory();var t=new B;return t.board=e,t}function $(e,t,i,n){return e.posX=t,e.posY=i,e.player=n,e instanceof V&&("black"===n?(e.direction=[0,-1],e.initialLine=6):(e.direction=[0,1],e.initialLine=1)),e instanceof Q&&(e.main=!0),e}var ee={name:"Chess",methods:{undo:function(){this.game.board.history.undo(),this.availablePositions=[],this.selectedPiece=null},redo:function(){this.game.board.history.redo(),this.availablePositions=[],this.selectedPiece=null},selectCell:function(e){var t=null,i=[];if(e.availablePosition&&this.selectedPiece)this.game.board.movePiece(this.selectedPiece,e.posX,e.posY);else{var n=this.game.board.getPiece(e.posX,e.posY);n&&n.player===this.game.board.currentPlayer&&(i=n.availablePositions(this.game.board)),t=n}this.availablePositions=i,this.selectedPiece=t}},beforeCreate:function(){},data:function(){return{game:Z(),selectedPiece:null,availablePositions:[],player:"white"}},computed:{renderBoard:function(){for(var e=this,t=[],i=function(i){for(var n=[],c=function(t){var c={};c.posX=t,c.posY=i,c.cellStyleClass="";var a=e.game.board.chessPieces.find((function(e){return e.posX===t&&e.posY===i}));a&&(c.icon=a.iconWhite,"black"===a.player&&(c.icon=a.iconBlack)),e.availablePositions.find((function(e){return e[0]===t&&e[1]===i}))&&(c.cellStyleClass+=" available-pos",c.availablePosition=!0);var o=e.game.board.history.moves[e.game.board.history.currentMove];o&&(o.from[0]===t&&o.from[1]===i||o.to[0]===t&&o.to[1]===i)&&(c.cellStyleClass+=" piece-move"),n.push(c)},a=0;a<e.game.board.scaleX;a++)c(a);t.push(n)},n=this.game.board.scaleY-1;n>=0;n--)i(n);return t},cellSize:function(){var e=Math.max(3,this.game.board.scaleY,this.game.board.scaleX);return window.innerHeight>window.innerWidth?Math.floor(100/e*.9)+"vw":Math.floor(100/e*.9)+"vh"}}};i("aa02");const te=s()(ee,[["render",_],["__scopeId","data-v-c5d0bcd6"]]);var ie=te,ne=function(e){return Object(n["u"])("data-v-a897286a"),e=e(),Object(n["s"])(),e},ce=ne((function(){return Object(n["e"])("div",{class:"tower"},null,-1)})),ae=ne((function(){return Object(n["e"])("div",{class:"sky"},null,-1)})),oe=[ce,ae];function re(e,t,i,c,a,o){return Object(n["r"])(),Object(n["d"])("div",null,oe)}var se={name:"MoscowCityTower"};i("ab51");const le=s()(se,[["render",re],["__scopeId","data-v-a897286a"]]);var ue=le,he=Object(h["a"])({history:Object(h["b"])(),routes:[{path:"/",component:Y},{path:"/snow",component:y},{path:"/chess",component:ie},{path:"/moscow-city-tower",component:ue}]}),be=Object(n["c"])(u);be.use(he),be.mount("#app")},7811:function(e,t,i){},"7f4c":function(e,t,i){},aa02:function(e,t,i){"use strict";i("31ff")},ab51:function(e,t,i){"use strict";i("7f4c")}});
//# sourceMappingURL=app.b87ab6e4.js.map