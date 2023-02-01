"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[281],{7047:function(n,e,t){t.d(e,{e:function(){return v}});var r,o,a,c=t(7689),i=t(168),u=t(6444),s=t(1087),p=u.ZP.ul(r||(r=(0,i.Z)(["\n  /* display: flex; */\n  flex-wrap: wrap;\n  justify-content: space-around;\n"]))),f=u.ZP.li(o||(o=(0,i.Z)(["\n  flex-basis: calc((100% - 40px) / 2);\n  font-size: 26px;\n  font-weight: 500;\n  text-align: center;\n"]))),l=(0,u.ZP)(s.OL)(a||(a=(0,i.Z)(["\n  color: black;\n\n  &:hover,\n  &:focus {\n    color: red;\n    font-weight: 700;\n  }\n"]))),h=t(184),v=function(n){var e=n.movies,t=(0,c.TH)();return(0,h.jsx)(p,{children:e.map((function(n){var e=n.id,r=n.title;return(0,h.jsx)(f,{children:(0,h.jsx)(l,{to:"/movies/".concat(e),state:{from:t},children:r})},e)}))})}},7281:function(n,e,t){t.r(e),t.d(e,{default:function(){return S}});var r,o,a,c,i=t(5861),u=t(9439),s=t(7757),p=t.n(s),f=t(2791),l=t(1087),h=t(168),v=t(6444),d=(v.ZP.div(r||(r=(0,h.Z)([""]))),v.ZP.form(o||(o=(0,h.Z)(["\n  display: flex;\n  border: 1px solid #d1d5db;\n  margin-bottom: 16px;\n  @media (min-width: 768px) {\n    margin-left: auto;\n    margin-right: auto;\n    max-width: 500px;\n  }\n"])))),m=v.ZP.input(a||(a=(0,h.Z)(["\n  flex: 1;\n  margin-right: 10px;\n  border-color: transparent;\n  font-size: inherit;\n  padding-left: 3px;\n"]))),g=v.ZP.button(c||(c=(0,h.Z)(["\n  align-items: center;\n  display: flex;\n  padding: 4px;\n  border: 0;\n  font-size: inherit;\n  background-color: inherit;\n  transition: color 0.2s linear;\n  :hover {\n    color: red;\n  }\n  span {\n    margin-right: 4px;\n  }\n  cursor: pointer;\n"]))),x=t(2134),w=t(9014),Z=t(184),b=function(n){var e=n.onSubmit,t=(0,f.useState)(""),r=(0,u.Z)(t,2),o=r[0],a=r[1];return(0,Z.jsxs)(d,{onSubmit:function(n){n.preventDefault(),""!==o.trim()?(e(o),a("")):w.Am.error("Please, enter search word!",{position:"top-center",duration:2e3})},children:[(0,Z.jsx)(m,{type:"text",autocomplete:"off",autoFocus:!0,placeholder:"Search movies",onChange:function(n){var e=n.currentTarget.value.toLowerCase();a(e)},value:o}),(0,Z.jsx)(g,{type:"submit",children:(0,Z.jsx)(x.RB5,{})})]})},y=t(409),k=t(7047),_=t(7793),S=function(){var n=(0,f.useState)([]),e=(0,u.Z)(n,2),t=e[0],r=e[1],o=(0,f.useState)(1),a=(0,u.Z)(o,2),c=a[0],s=a[1],h=(0,f.useState)(!1),v=(0,u.Z)(h,2),d=v[0],m=v[1],g=(0,l.lr)(),x=(0,u.Z)(g,2),S=x[0],j=x[1],C=S.get("query");return(0,f.useEffect)((function(){if(C){var n=function(){var n=(0,i.Z)(p().mark((function n(){var e;return p().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,m(!0),n.next=4,(0,y.y_)(C,c);case 4:0===(e=n.sent).results.length?w.Am.error("Sorry! There is no movies with this name. Try something else!",{position:"top-center",duration:2e3}):r(e.results),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0);case 11:return n.prev=11,m(!1),n.finish(11);case 14:case"end":return n.stop()}}),n,null,[[0,8,11,14]])})));return function(){return n.apply(this,arguments)}}();n()}}),[c,C]),(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(b,{onSubmit:function(n){j(""!==n?{query:n}:{}),r([]),s(1)}}),d&&(0,Z.jsx)(_.a,{}),t&&(0,Z.jsx)(k.e,{movies:t})]})}},409:function(n,e,t){t.d(e,{Mc:function(){return p},OX:function(){return f},_k:function(){return s},u9:function(){return l},y_:function(){return h}});var r=t(5861),o=t(7757),a=t.n(o),c=t(3263),i="https://api.themoviedb.org/3",u="1a4aff832e717c565fcddbbcd57e889d",s=function(){var n=(0,r.Z)(a().mark((function n(){var e,t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,c.Z.get("".concat(i,"/trending/movie/week?api_key=").concat(u,"&page=1"));case 3:return e=n.sent,t=e.data,n.abrupt("return",t.results);case 8:n.prev=8,n.t0=n.catch(0),console.error("Something wrong! Can not get trends movies now."+n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(a().mark((function n(e){var t,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,c.Z.get("".concat(i,"/movie/").concat(e,"?api_key=").concat(u,"&page=1"));case 3:return t=n.sent,r=t.data,n.abrupt("return",r);case 8:n.prev=8,n.t0=n.catch(0),console.error("Something wrong! Can not get trends movies by ID now."+n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(a().mark((function n(e){var t,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,c.Z.get("".concat(i,"/movie/").concat(e,"/credits?api_key=").concat(u));case 3:return t=n.sent,r=t.data,n.abrupt("return",r);case 8:n.prev=8,n.t0=n.catch(0),console.error("Something wrong! Can not search films by ID"+n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(a().mark((function n(e){var t,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,c.Z.get("".concat(i,"/movie/").concat(e,"/reviews?api_key=").concat(u));case 3:return t=n.sent,r=t.data,n.abrupt("return",r);case 8:n.prev=8,n.t0=n.catch(0),console.error("Something wrong! Can not search films by ID"+n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e){return n.apply(this,arguments)}}(),h=function(){var n=(0,r.Z)(a().mark((function n(e,t){var r,o;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,c.Z.get("".concat(i,"/search/movie?api_key=").concat(u,"&query=").concat(e,"&page=").concat(t));case 3:return r=n.sent,o=r.data,n.abrupt("return",o);case 8:n.prev=8,n.t0=n.catch(0),console.error("Something wrong! Can not search films"+n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e,t){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=281.72df270a.chunk.js.map