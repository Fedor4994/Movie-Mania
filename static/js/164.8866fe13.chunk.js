"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[164],{252:function(e,t,n){n.d(t,{Z:function(){return h}});n(791);var r="MoviesList_movies__2Iuxj",s="MoviesList_movieItem__ocuc5",a="MoviesList_movieCard__nbLe3",i="MoviesList_vote__vHAas",c="MoviesList_movieName__L4zBS",o="MoviesList_movieCardWrapper__8Tysf",u="MoviesList_movieCardImage__Zt7Lq",p=n(731),f=n(689),v=n(820),d=n(184),h=function(e){var t=e.movies,n=(0,f.TH)();return(0,d.jsx)("ul",{className:r,children:t.map((function(e){return e.title&&(0,d.jsx)("li",{className:s,children:(0,d.jsxs)(p.rU,{className:a,to:"/movies/".concat(e.id),state:{from:n},children:[(0,d.jsx)("img",{className:u,src:"https://image.tmdb.org/t/p/w500".concat(e.poster_path),alt:""}),e.title&&(0,d.jsx)("p",{className:c,children:e.title.slice(0,33)}),(0,d.jsxs)("div",{className:o,children:[e.release_date&&(0,d.jsx)("p",{children:e.release_date.slice(0,4)}),e.vote_average&&(0,d.jsxs)("p",{className:i,children:[(0,d.jsx)(v.pHD,{size:10})," ",e.vote_average.toFixed(1)]})]})]})},e.id)}))})}},320:function(e,t,n){n.d(t,{LI:function(){return l},VQ:function(){return u},l2:function(){return c},mo:function(){return d},s_:function(){return f}});var r=n(861),s=n(757),a=n.n(s),i="abf5df7d75a67bd02b3b1e4ead1fc14d";function c(){return o.apply(this,arguments)}function o(){return(o=(0,r.Z)(a().mark((function e(){var t,n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.themoviedb.org/3/trending/movie/day?api_key=".concat(i));case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function u(e){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(a().mark((function e(t){var n,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.themoviedb.org/3/movie/".concat(t,"?api_key=").concat(i));case 2:return n=e.sent,e.next=5,n.json();case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function f(e){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(a().mark((function e(t){var n,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.themoviedb.org/3/movie/".concat(t,"/credits?api_key=").concat(i));case 2:return n=e.sent,e.next=5,n.json();case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function d(e){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(a().mark((function e(t){var n,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.themoviedb.org/3/movie/".concat(t,"/reviews?api_key=").concat(i));case 2:return n=e.sent,e.next=5,n.json();case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function l(e){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(a().mark((function e(t){var n,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.themoviedb.org/3/search/movie?api_key=".concat(i,"&query=").concat(t));case 2:return n=e.sent,e.next=5,n.json();case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},584:function(e,t,n){n.r(t),n.d(t,{default:function(){return f}});var r=n(885),s=n(791),a=n(320),i="TrendingMovies_trendingTitle__b+HOO",c="TrendingMovies_trendingMovies__vuxBz",o=n(252),u=n(184),p=function(){var e=(0,s.useState)([]),t=(0,r.Z)(e,2),n=t[0],p=t[1];return(0,s.useEffect)((function(){(0,a.l2)().then((function(e){p(e.results)}))}),[]),(0,u.jsxs)("div",{className:c,children:[(0,u.jsx)("h1",{className:i,children:"Trending today"}),(0,u.jsx)(o.Z,{movies:n})]})},f=function(){return(0,u.jsx)("div",{children:(0,u.jsx)(p,{})})}}}]);
//# sourceMappingURL=164.8866fe13.chunk.js.map