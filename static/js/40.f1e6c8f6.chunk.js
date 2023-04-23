"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[40],{40:function(e,t,r){r.r(t),r.d(t,{default:function(){return f}});var n,a=r(861),c=r(439),s=r(757),i=r.n(s),o=r(791),u=r(689),p=r(933),h=r(168),l=r(444).ZP.ul(n||(n=(0,h.Z)(["\n  li {\n    padding: 16px;\n    border-radius: 5px;\n    box-shadow: rgb(0, 0, 0) 0px 1px 4px,\n      rgba(0, 0, 0, 0.8) -23px 0px 20px -23px,\n      rgba(0, 0, 0, 0.8) 23px 0px 20px -23px, rgba(0, 0, 0, 0.1) 0px 0px 40px;\n    max-height: 300px;\n    overflow-y: scroll;\n\n    &:not(:last-of-type) {\n      margin-bottom: 8px;\n    }\n  }\n\n  h3 {\n    margin-bottom: 8px;\n  }\n"]))),v=r(184),f=function(){var e=(0,u.UO)().movieId,t=(0,o.useState)(null),r=(0,c.Z)(t,2),n=r[0],s=r[1];return(0,o.useEffect)((function(){function t(){return(t=(0,a.Z)(i().mark((function t(){var r;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,p.E.getMovieReviewsById(e);case 3:r=t.sent,s(r),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[e]),n?(0,v.jsxs)(v.Fragment,{children:[0===n.length&&(0,v.jsx)("p",{children:"We do not have any reviews for this movie"}),0!==n.length&&(0,v.jsx)(l,{children:n.map((function(e){var t=e.author,r=e.content,n=e.id;return(0,v.jsxs)("li",{children:[(0,v.jsx)("h3",{children:t}),(0,v.jsx)("p",{children:r})]},n)}))})]}):null}},933:function(e,t,r){r.d(t,{E:function(){return b}});var n=r(861),a=r(671),c=r(144),s=r(274),i=r(359),o=r(757),u=r.n(o),p=r(243),h=(0,i.Z)("API_KEY"),l=(0,i.Z)("BASE_URL"),v=(0,i.Z)("TRENDING_PATH_URL"),f=(0,i.Z)("SEARCH_PATH_URL"),d=(0,i.Z)("GET_MOVIE_DETAILS_PATH_URL"),x=(0,i.Z)("GET_CREDIT_URL"),Z=(0,i.Z)("GET_REVIEWS_URL"),y=function(){function e(){(0,a.Z)(this,e),Object.defineProperty(this,h,{writable:!0,value:"9c2993dc2441e19b5ee9fa98ee7764c5"}),Object.defineProperty(this,l,{writable:!0,value:"https://api.themoviedb.org/3/"}),Object.defineProperty(this,v,{writable:!0,value:"trending/movie/day"}),Object.defineProperty(this,f,{writable:!0,value:"search/movie"}),Object.defineProperty(this,d,{writable:!0,value:"movie/"}),Object.defineProperty(this,x,{writable:!0,value:"/credits"}),Object.defineProperty(this,Z,{writable:!0,value:"/reviews"})}return(0,c.Z)(e,[{key:"getTrendingMovies",value:function(){var e=(0,n.Z)(u().mark((function e(){var t,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="".concat((0,s.Z)(this,l)[l]).concat((0,s.Z)(this,v)[v]),e.prev=1,e.next=4,p.Z.get(t,{params:{api_key:(0,s.Z)(this,h)[h]}});case 4:return r=e.sent,e.abrupt("return",r.data.results);case 8:e.prev=8,e.t0=e.catch(1),console.error(e.t0);case 11:case"end":return e.stop()}}),e,this,[[1,8]])})));return function(){return e.apply(this,arguments)}}()},{key:"searchByWord",value:function(){var e=(0,n.Z)(u().mark((function e(t){var r,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="".concat((0,s.Z)(this,l)[l]).concat((0,s.Z)(this,f)[f]),e.prev=1,e.next=4,p.Z.get(r,{params:{api_key:(0,s.Z)(this,h)[h],query:t,page:1}});case 4:return n=e.sent,e.abrupt("return",n.data.results);case 8:e.prev=8,e.t0=e.catch(1),console.error(e.t0);case 11:case"end":return e.stop()}}),e,this,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()},{key:"getMovieDetailsById",value:function(){var e=(0,n.Z)(u().mark((function e(t){var r,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="".concat((0,s.Z)(this,l)[l]).concat((0,s.Z)(this,d)[d]).concat(t),e.prev=1,e.next=4,p.Z.get(r,{params:{api_key:(0,s.Z)(this,h)[h]}});case 4:return n=e.sent,e.abrupt("return",n.data);case 8:e.prev=8,e.t0=e.catch(1),console.error(e.t0);case 11:case"end":return e.stop()}}),e,this,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()},{key:"getMovieCreditsById",value:function(){var e=(0,n.Z)(u().mark((function e(t){var r,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="".concat((0,s.Z)(this,l)[l]).concat((0,s.Z)(this,d)[d]).concat(t).concat((0,s.Z)(this,x)[x]),e.prev=1,e.next=4,p.Z.get(r,{params:{api_key:(0,s.Z)(this,h)[h]}});case 4:return n=e.sent,e.abrupt("return",n.data.cast);case 8:e.prev=8,e.t0=e.catch(1),console.error(e.t0);case 11:case"end":return e.stop()}}),e,this,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()},{key:"getMovieReviewsById",value:function(){var e=(0,n.Z)(u().mark((function e(t){var r,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="".concat((0,s.Z)(this,l)[l]).concat((0,s.Z)(this,d)[d]).concat(t).concat((0,s.Z)(this,Z)[Z]),e.prev=1,e.next=4,p.Z.get(r,{params:{api_key:(0,s.Z)(this,h)[h],page:1}});case 4:return n=e.sent,e.abrupt("return",n.data.results);case 8:e.prev=8,e.t0=e.catch(1),console.error(e.t0);case 11:case"end":return e.stop()}}),e,this,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()}]),e}(),b=new y}}]);
//# sourceMappingURL=40.f1e6c8f6.chunk.js.map