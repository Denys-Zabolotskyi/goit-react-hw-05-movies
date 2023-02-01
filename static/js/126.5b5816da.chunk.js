"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[126],{4126:function(n,t,e){e.r(t),e.d(t,{default:function(){return Z}});var r,a,c,o,u=e(5861),i=e(9439),s=e(7757),p=e.n(s),f=e(2791),l=e(7689),h=e(409),v=e(168),d=e(6444),m=d.ZP.ul(r||(r=(0,v.Z)(["\n  list-style: none;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  margin-top: 15px;\n"]))),g=d.ZP.li(a||(a=(0,v.Z)(["\n  display: flex;\n  /* flex-direction: column; */\n  gap: 5px;\n"]))),x=d.ZP.img(c||(c=(0,v.Z)(["\n  height: 100px;\n  width: auto;\n"]))),w=d.ZP.p(o||(o=(0,v.Z)(["\n  margin-bottom: 5px;\n  display: flex;\n  align-items: center;\n"]))),y=e(184),Z=function(){var n=(0,l.UO)().movieId,t=(0,f.useState)(null),e=(0,i.Z)(t,2),r=e[0],a=e[1];return(0,f.useEffect)((function(){var t=function(){var t=(0,u.Z)(p().mark((function t(){var e,r;return p().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,h.OX)(n);case 3:e=t.sent,r=e.cast,a(r),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:return t.prev=11,t.abrupt("return");case 14:case"end":return t.stop()}}),t,null,[[0,8,11,14]])})));return function(){return t.apply(this,arguments)}}();t()}),[n]),(0,y.jsx)(y.Fragment,{children:r&&r.length>0?(0,y.jsx)(m,{children:r.map((function(n){var t=n.id,e=n.original_name,r=n.character,a=n.profile_path;return(0,y.jsxs)(g,{children:[(0,y.jsx)(x,{src:"https://image.tmdb.org/t/p/w200".concat(a),alt:e,height:"100"}),(0,y.jsxs)("div",{children:[(0,y.jsx)(w,{children:e}),(0,y.jsxs)(w,{children:["Character: ",r]})]})]},t)}))}):(0,y.jsx)("p",{children:"We don't have any information about casts for this movie."})})}},409:function(n,t,e){e.d(t,{Mc:function(){return p},OX:function(){return f},_k:function(){return s},u9:function(){return l},y_:function(){return h}});var r=e(5861),a=e(7757),c=e.n(a),o=e(3263),u="https://api.themoviedb.org/3",i="1a4aff832e717c565fcddbbcd57e889d",s=function(){var n=(0,r.Z)(c().mark((function n(){var t,e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.Z.get("".concat(u,"/trending/movie/week?api_key=").concat(i,"&page=1"));case 3:return t=n.sent,e=t.data,n.abrupt("return",e.results);case 8:n.prev=8,n.t0=n.catch(0),console.error("Something wrong! Can not get trends movies now."+n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.Z.get("".concat(u,"/movie/").concat(t,"?api_key=").concat(i,"&page=1"));case 3:return e=n.sent,r=e.data,n.abrupt("return",r);case 8:n.prev=8,n.t0=n.catch(0),console.error("Something wrong! Can not get trends movies by ID now."+n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.Z.get("".concat(u,"/movie/").concat(t,"/credits?api_key=").concat(i));case 3:return e=n.sent,r=e.data,n.abrupt("return",r);case 8:n.prev=8,n.t0=n.catch(0),console.error("Something wrong! Can not search films by ID"+n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.Z.get("".concat(u,"/movie/").concat(t,"/reviews?api_key=").concat(i));case 3:return e=n.sent,r=e.data,n.abrupt("return",r);case 8:n.prev=8,n.t0=n.catch(0),console.error("Something wrong! Can not search films by ID"+n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(t){return n.apply(this,arguments)}}(),h=function(){var n=(0,r.Z)(c().mark((function n(t,e){var r,a;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.Z.get("".concat(u,"/search/movie?api_key=").concat(i,"&query=").concat(t,"&page=").concat(e));case 3:return r=n.sent,a=r.data,n.abrupt("return",a);case 8:n.prev=8,n.t0=n.catch(0),console.error("Something wrong! Can not search films"+n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(t,e){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=126.5b5816da.chunk.js.map