"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[206],{5206:function(n,e,t){t.r(e),t.d(e,{default:function(){return w}});var r,c,a,o=t(5861),u=t(9439),s=t(7757),i=t.n(s),p=t(2791),f=t(7689),l=t(168),v=t(6444),h=v.ZP.ul(r||(r=(0,l.Z)(["\n  margin-top: 15px;\n  margin-left: 15px;\n  display: flex;\n  flex-direction: column;\n  gap: 15px;\n"]))),d=v.ZP.li(c||(c=(0,l.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n"]))),m=v.ZP.p(a||(a=(0,l.Z)(["\n  font-size: 14px;\n"]))),g=t(409),x=t(184),w=function(){var n=(0,f.UO)().movieId,e=(0,p.useState)(null),t=(0,u.Z)(e,2),r=t[0],c=t[1];return(0,p.useEffect)((function(){var e=function(){var e=(0,o.Z)(i().mark((function e(){var t,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,g.u9)(n);case 3:t=e.sent,r=t.results,c(r),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:return e.prev=11,e.abrupt("return");case 14:case"end":return e.stop()}}),e,null,[[0,8,11,14]])})));return function(){return e.apply(this,arguments)}}();e()}),[n]),(0,x.jsx)(x.Fragment,{children:r&&r.length>0?(0,x.jsx)(h,{children:r.map((function(n){var e=n.author,t=n.content,r=n.id;return(0,x.jsxs)(d,{children:[(0,x.jsxs)(m,{children:["Author: ",e]}),(0,x.jsx)(m,{children:t})]},r)}))}):(0,x.jsx)(m,{children:"We don't have any reviews for this movie."})})}},409:function(n,e,t){t.d(e,{Mc:function(){return p},OX:function(){return f},_k:function(){return i},u9:function(){return l},y_:function(){return v}});var r=t(5861),c=t(7757),a=t.n(c),o=t(3263),u="https://api.themoviedb.org/3",s="1a4aff832e717c565fcddbbcd57e889d",i=function(){var n=(0,r.Z)(a().mark((function n(){var e,t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.Z.get("".concat(u,"/trending/movie/week?api_key=").concat(s,"&page=1"));case 3:return e=n.sent,t=e.data,n.abrupt("return",t.results);case 8:n.prev=8,n.t0=n.catch(0),console.error("Something wrong! Can not get trends movies now."+n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(a().mark((function n(e){var t,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.Z.get("".concat(u,"/movie/").concat(e,"?api_key=").concat(s,"&page=1"));case 3:return t=n.sent,r=t.data,n.abrupt("return",r);case 8:n.prev=8,n.t0=n.catch(0),console.error("Something wrong! Can not get trends movies by ID now."+n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(a().mark((function n(e){var t,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.Z.get("".concat(u,"/movie/").concat(e,"/credits?api_key=").concat(s));case 3:return t=n.sent,r=t.data,n.abrupt("return",r);case 8:n.prev=8,n.t0=n.catch(0),console.error("Something wrong! Can not search films by ID"+n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(a().mark((function n(e){var t,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.Z.get("".concat(u,"/movie/").concat(e,"/reviews?api_key=").concat(s));case 3:return t=n.sent,r=t.data,n.abrupt("return",r);case 8:n.prev=8,n.t0=n.catch(0),console.error("Something wrong! Can not search films by ID"+n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e){return n.apply(this,arguments)}}(),v=function(){var n=(0,r.Z)(a().mark((function n(e,t){var r,c;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.Z.get("".concat(u,"/search/movie?api_key=").concat(s,"&query=").concat(e,"&page=").concat(t));case 3:return r=n.sent,c=r.data,n.abrupt("return",c);case 8:n.prev=8,n.t0=n.catch(0),console.error("Something wrong! Can not search films"+n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e,t){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=206.b6ec66f1.chunk.js.map