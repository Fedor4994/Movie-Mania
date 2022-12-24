"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[164],{252:function(e,t,n){n.d(t,{Z:function(){return h}});n(791);var r="MoviesList_movies__2Iuxj",a="MoviesList_movieItem__ocuc5",s="MoviesList_movieCard__nbLe3",i="MoviesList_vote__vHAas",c="MoviesList_movieName__L4zBS",o="MoviesList_movieCardWrapper__8Tysf",u="MoviesList_movieCardImage__Zt7Lq",p="MoviesList_noImg__tzopS",l=n(731),d=n(689),f=n(820),v=n(184),h=function(e){var t=e.movies,n=(0,d.TH)();return(0,v.jsx)("ul",{className:r,children:t.map((function(e){return e.title&&(0,v.jsx)("li",{className:a,children:(0,v.jsxs)(l.rU,{className:s,to:"/movies/".concat(e.id),state:{from:n},children:[e.poster_path?(0,v.jsx)("img",{className:u,src:"https://image.tmdb.org/t/p/w500".concat(e.poster_path),alt:e.title}):(0,v.jsx)("div",{className:p}),e.title&&(0,v.jsx)("p",{className:c,children:e.title.slice(0,33)}),(0,v.jsxs)("div",{className:o,children:[e.release_date&&(0,v.jsx)("p",{children:e.release_date.slice(0,4)}),e.vote_average&&(0,v.jsxs)("p",{className:i,children:[(0,v.jsx)(f.pHD,{size:10})," ",e.vote_average.toFixed(1)]})]})]})},e.id)}))})}},235:function(e,t,n){n.d(t,{Z:function(){return o}});n(791);var r=n(820),a="Pagination_page__tJXk6",s="Pagination_pagination__vcNDC",i="Pagination_changePage__a1Tp7",c=n(184),o=function(e){var t=e.page,n=e.totalPages,o=e.onIncrement,u=e.onDecrement;return(0,c.jsxs)("div",{className:s,children:[t>1&&(0,c.jsx)("button",{onClick:function(){u(t-1)},className:i,children:(0,c.jsx)(r.kyg,{})}),(0,c.jsx)("span",{className:a,children:t}),t<n&&(0,c.jsx)("button",{onClick:function(){o(t+1)},className:i,children:(0,c.jsx)(r.mGl,{})})]})}},320:function(e,t,n){n.d(t,{LI:function(){return h},VQ:function(){return u},l2:function(){return c},mo:function(){return f},s_:function(){return l},xi:function(){return _}});var r=n(861),a=n(757),s=n.n(a),i="abf5df7d75a67bd02b3b1e4ead1fc14d";function c(e){return o.apply(this,arguments)}function o(){return(o=(0,r.Z)(s().mark((function e(t){var n,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.themoviedb.org/3/trending/movie/day?api_key=".concat(i,"&page=").concat(t));case 2:return n=e.sent,e.next=5,n.json();case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function u(e){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(s().mark((function e(t){var n,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.themoviedb.org/3/movie/".concat(t,"?api_key=").concat(i));case 2:return n=e.sent,e.next=5,n.json();case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function l(e){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(s().mark((function e(t){var n,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.themoviedb.org/3/movie/".concat(t,"/credits?api_key=").concat(i));case 2:return n=e.sent,e.next=5,n.json();case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function f(e){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(s().mark((function e(t){var n,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.themoviedb.org/3/movie/".concat(t,"/reviews?api_key=").concat(i));case 2:return n=e.sent,e.next=5,n.json();case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function h(e,t){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(s().mark((function e(t,n){var r,a;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.themoviedb.org/3/search/movie?api_key=".concat(i,"&query=").concat(t,"&page=").concat(n));case 2:return r=e.sent,e.next=5,r.json();case 5:return a=e.sent,e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function _(e){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)(s().mark((function e(t){var n,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.themoviedb.org/3/movie/".concat(t,"/videos?api_key=abf5df7d75a67bd02b3b1e4ead1fc14d"));case 2:return n=e.sent,e.next=5,n.json();case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},584:function(e,t,n){n.r(t),n.d(t,{default:function(){return h}});var r=n(885),a=n(791),s=n(320),i=n(643),c="TrendingMovies_trendingTitle__b+HOO",o="TrendingMovies_trendingMovies__vuxBz",u="TrendingMovies_loader__w42JG",p=n(252),l=n(235),d=n(689),f=n(184),v=function(){var e=(0,a.useState)([]),t=(0,r.Z)(e,2),n=t[0],v=t[1],h=(0,a.useState)(!1),m=(0,r.Z)(h,2),_=m[0],x=m[1],g=(0,d.UO)().paramsPage,b=(0,a.useState)(Number(g)||1),j=(0,r.Z)(b,2),y=j[0],N=j[1],k=(0,d.s0)();return(0,a.useEffect)((function(){x(!0),isNaN(Number(g))||!g||g>1e3?k("/".concat(1)):N(Number(g)),y>1e3||(0,s.l2)(y).then((function(e){v(e.results),x(!1)}))}),[y,g,k]),(0,f.jsxs)("div",{className:o,children:[(0,f.jsx)("h1",{className:c,children:"Trending today"}),_?(0,f.jsx)("div",{className:u,children:(0,f.jsx)(i.g4,{height:"80",width:"80",radius:"9",color:"#ccc",ariaLabel:"three-dots-loading",wrapperStyle:{},wrapperClassName:"",visible:!0})}):(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(p.Z,{movies:n}),(0,f.jsx)(l.Z,{page:y,totalPages:1e3,onDecrement:function(e){k("/".concat(y-1)),N(e)},onIncrement:function(e){k("/".concat(y+1)),N(e)}})]})]})},h=function(){return(0,f.jsx)("div",{children:(0,f.jsx)(v,{})})}}}]);
//# sourceMappingURL=164.2f0e677a.chunk.js.map