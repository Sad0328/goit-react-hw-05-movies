"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[257],{257:function(n,e,t){t.r(e),t.d(e,{default:function(){return y}});var r,i,a,c,s,o=t(439),u=t(791),l=t(689),p=t(87),d=t(975),f=t(940),h=t(168),x=t(686),v=x.Z.div(r||(r=(0,h.Z)(["\n  display: flex;\n  margin: 24px;\n  gap: 24px;\n"]))),g=x.Z.ul(i||(i=(0,h.Z)(["\n  display: inline-flex;\n  gap: 12px;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  list-style-type: none;\n"]))),m=x.Z.ul(a||(a=(0,h.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  list-style-type: none;\n"]))),j=(0,x.Z)(p.rU)(c||(c=(0,h.Z)(["\n  text-decoration: none;\n  font-weight: 600;\n  font-size: 18px;\n  color: #191d1e;\n\n  &:hover {\n    color: #15ebeb;\n  }\n"]))),w=x.Z.button(s||(s=(0,h.Z)(["\n  padding: 15px 15px;\n  font: inherit;\n  cursor: pointer;\n  border-radius: 4px;\n  border: 3px solid #2014c9;\n  color: #2014c9;\n  font-weight: 600;\n  font-size: 20px;\n\n  &:hover {\n    color: #15ebeb;\n    border: 3px solid #15ebeb;\n  }\n"]))),b=t(184),y=function(){var n,e=(0,l.UO)().movieId,t=(0,u.useState)(null),r=(0,o.Z)(t,2),i=r[0],a=r[1],c=(0,u.useState)(!1),s=(0,o.Z)(c,2),h=s[0],x=s[1],y=(0,l.TH)(),Z=(0,u.useRef)((null===(n=y.state)||void 0===n?void 0:n.from)||"/");if((0,u.useEffect)((function(){x(!0),(0,d.Y5)(e).then((function(n){a(n)})).catch((function(n){console.log(n)})).finally((function(){x(!1)}))}),[e]),i){var _=i||{},k=_.title,U=_.release_date,S=_.popularity,C=_.overview,R=_.genres,z=_.poster_path,A=_.original_title;return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(p.rU,{to:Z.current,children:(0,b.jsx)(w,{type:"button",children:"Go back"})}),h&&(0,b.jsx)(f.Z,{}),i&&(0,b.jsxs)(v,{children:[(0,b.jsx)("img",{width:"300px",src:z?"https://image.tmdb.org/t/p/w500".concat(z):"https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg",alt:A}),(0,b.jsxs)("div",{children:[(0,b.jsxs)("h1",{children:[k," (",U.slice(0,4),")"]}),(0,b.jsxs)("p",{children:["User score: ",S]}),(0,b.jsx)("h2",{children:"Overview"}),(0,b.jsx)("p",{children:C}),(0,b.jsx)("h2",{children:"Genres"}),(0,b.jsx)(g,{children:R.map((function(n){return(0,b.jsx)("li",{children:n.name},n.id)}))})]})]}),(0,b.jsx)("hr",{}),(0,b.jsxs)("div",{children:[(0,b.jsx)("h3",{children:"Additional information"}),(0,b.jsxs)(m,{children:[(0,b.jsx)("li",{children:(0,b.jsx)(j,{to:"cast",children:"Cast"})}),(0,b.jsx)("li",{children:(0,b.jsx)(j,{to:"reviews",children:"Reviews"})})]}),(0,b.jsx)("hr",{}),(0,b.jsx)(l.j3,{})]})]})}}},975:function(n,e,t){t.d(e,{Bt:function(){return d},Ml:function(){return u},Tg:function(){return o},Y5:function(){return l},wL:function(){return p}});var r=t(861),i=t(687),a=t.n(i),c=t(294);c.Z.defaults.baseURL="https://api.themoviedb.org/3/";var s="ff68b406820dc631f0dcd0740f7d037f",o=function(){var n=(0,r.Z)(a().mark((function n(){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("trending/movie/day?api_key=".concat(s));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),u=function(){var n=(0,r.Z)(a().mark((function n(e){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("search/movie?api_key=".concat(s,"&language=en-US&page=1&include_adult=false&query=").concat(e));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(a().mark((function n(e){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(e,"?api_key=").concat(s,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(a().mark((function n(e){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(e,"/credits?api_key=").concat(s,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data.cast);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(a().mark((function n(e){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(e,"/reviews?api_key=").concat(s,"&language=en-US&page=1"));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=257.8ec5996e.chunk.js.map