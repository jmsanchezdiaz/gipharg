(this["webpackJsonpgipharg-project"]=this["webpackJsonpgipharg-project"]||[]).push([[0],[,,,,,,,,,,,,,,,,function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r=n(1),c=n(10),s=n.n(c),a=(n(16),n(11)),i=n(2),u=n(0),o=Object(r.createContext)({}),l=function(e){var t=e.children,n=Object(r.useState)(JSON.parse(localStorage.getItem("favourites"))||[]),c=Object(i.a)(n,2),s=c[0],l=c[1];Object(r.useEffect)((function(){localStorage.setItem("favourites",JSON.stringify(s))}),[s]);var j={favourites:s,isOnFavourite:function(e){return null===s||void 0===s?void 0:s.some((function(t){return(null===t||void 0===t?void 0:t.id)===e}))},addToFavourites:function(e){return l([].concat(Object(a.a)(s),[e]))},removeFromFavourites:function(e){l(s.filter((function(t){return t.id!==e})))}};return Object(u.jsx)(o.Provider,{value:j,children:t})},j=o,b=(n(18),function(e){var t=e.id,n=e.gif,c=Object(r.useContext)(j),s=c.isOnFavourite,a=c.addToFavourites,i=c.removeFromFavourites;return Object(u.jsx)("div",{className:"gif__buttons",children:s(t)?Object(u.jsx)("button",{"aria-label":"remove from favourites",onClick:function(){return i(t)},className:"gif__favourite\r favourite__button favourite__button--remove\r ",children:Object(u.jsx)("span",{className:"material-icons",children:"remove_circle_outline"})}):Object(u.jsx)("button",{"aria-label":"add to favourites",onClick:function(){return a(n)},className:"gif__favourite  favourite__button",children:Object(u.jsx)("span",{className:"material-icons",children:"star_border"})})})}),d=function(e){var t=e.gif,n=t.id,r=t.username,c=t.images,s=t.embed_url,a=c?c.downsized.url:"";return Object(u.jsxs)("div",{className:"gif",children:[Object(u.jsxs)("div",{className:"gif__image-container",children:[Object(u.jsx)("a",{className:"gif__effect",href:s,rel:"noreferrer",target:"_blank",children:"See More"}),Object(u.jsx)("img",{className:"gif__image",src:a,alt:r})]}),Object(u.jsx)(b,{id:n,gif:t})]})},f=function(e){var t=e.favourites;return Object(u.jsx)("ul",{className:"favourites__list",children:null===t||void 0===t?void 0:t.map((function(e){return Object(u.jsx)(d,{gif:e},e.id)}))})},h=(n(19),function(){var e=Object(r.useContext)(j).favourites;return Object(u.jsx)("div",{className:"favourites",children:e.length>0&&Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h1",{className:"favourites__title",children:"Favourites"}),Object(u.jsx)(f,{favourites:e}),Object(u.jsx)("hr",{})]})})}),g=(n(20),function(){return Object(u.jsxs)("footer",{className:"footer",children:[Object(u.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAAAkCAYAAAB/up84AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABVhJREFUeNrsW6GS20AMdToGBgEGAQYBBgEBBQYFgQcP5hMO9jP6CYWFBwsPBgYUGBQEFAQUGAQYBBgYGHjmutt5O6NupbXXcZJrx5rJXGyv11o96Ukr52avr6/BJG9HZmMBMpvNYnxt1JzNZNoRAYFxM2Z8rT6FuueMcaH6s1KfhBn3U42r1Jg1rrfq+Bt5xgf1Z64+uQFQndNzLc1Ydfwg6F2p6wd1PVXfU+b6Gc9vHGuh8+jrsXVN61Sq64XggNw95tlH9XmP6y3W2OI+qvN3db6mN7/zBFAb8L2aNMJxRsDQC6jIuEyN039LnAvV8QJKRRijZUHmT8iiLpEFDHKJaB1TGN732WuAokEIDQCwhwGjsMEIMNgp6qY9JlsTgyXquCFG1d54IsbOsKAVPLDBcQJjUxB0RJwAltGntNQ46GhzqPnb0y0954RG/1iLQ7SRCkR+guiPtW6GFRg5gAlCrFvbJEZ0ngDAUn0/Y77fDCJFXuiB/AmGDC3PLg0YWLRW5CcJWWPglNxDKS6C59AcZBs/sYxbOQBqHHkuZYCsGCds4SQJDDx3RK3RjUb9EfMUcLQ57BHS64MAIYtYkvEt+d4wCzqr++ipkoTtkihOI2chREfA5KiC0GOAaMig05zoWJPjgMk39jxcPphDR0mSDrtq438g51iq8omQlEnYJfHoiAFxYQGko6bCPSmZ5wS+TRx0Zc5R4CtmHbEVJT+0p1uOYdNE1SMfOKNO0zXWEmItptApsfYa1LV0UZUPIHSCmlRYJhfokNWhX5IcsmIWbEAMCQWerWirhZK57MghNQyzgke3QuQWPUv4EAac9wCuJjmkNmvUNEwiobX+DgdEWoQGgNDPGtTWWhRRWONX5JlnePCZhP1JUCOzPN1O0C2MohP7xuiko8Qy9INUDBg2YPJMlzP8pRv0qYeUdu+Cy+RAKIYmtVqojM5kkS0DwkXlLuY0ICzgAEOlAd8fPe+rYJdppz61TiZ5G4AgcScWz05RcUtAkOwyJMtI4FzNt3suCWKfwLUhdqRC0yA/enB1CZ4vBZ2fhIptJ4x/5PYVavyzQ39N0V8ddnsQ+m3sfX02hjo3bIVJ7d5PhqojZxYdC3NEdv9oQMQWFFjHHqpLEsc9BZyF23c9cG0ZOJjUIN15V1mY8OOAhW0E77yWaP2eoO9VBFG/d6yX6/xuHT2z3AsQ5ImnjrZBF6XcUiKAEl0RlJzZ7ZtnbxmqSgRqfxmyD9k6wNDGzuExecB3Z1/ukBOjQH73MZbspChFp9nQ/EYY9+LaaIYOqlo7JjwISX+LcBwbjAOz2ZKS7BpOcq0o0R2HvZAbHpHPJGc+dm00paQuedmOA4O0WD5fyQ4V08Ip4ATxhYl8CCh76/0QLVyehlBVFyCpYJTcKmPjHoY8XNE2VQ8dbIkdr4Z95npBwcNVahKzNEMBSYSyz46iLm8sLunreG5O+xYTsaMUHYu6bMn79sRCT2+8l6SMV2cCT5e3UspBXbbd9n3nDIN/Q1KP3JDfWLcd8kZwCVX12hjeOlmOIMe+L6FGjJLC4QS5rz6hg/tThjZiU0Pr/g7D65/uCUafKgaUJu0lHjvox/XsjXA+GAOQUogIXV8/v7GoKOGJfYuHxvHjt7t3rEMHD2+E5PoR+5GCLCS+8g6Z2xgGt6anuwGC99MSKAl6RrfUs/ofje+b1PcjlJBlMMk4gKBUe77AqKVP/T1Jj30IQPmCTdkm6NeKb5BkJzCGdCA8XuFGZIOWCBEh/mwGiZ/rFZXk3xHEdkjHb6MknVOhypJe+Sac03XlL4fe3r81mH518q9GyCS3kV8CDADlsrVaJhTLAgAAAABJRU5ErkJggg==",alt:"powered-by-giphy"}),Object(u.jsxs)("h3",{children:["Developed by",Object(u.jsx)("a",{rel:"noreferrer",target:"_blank",href:"https://github.com/jmsanchezdiaz",children:"Juan Manuel Sanchez Diaz"})]})]})}),O=n(6),m=n(8),x=n(9),v=n(4),p=n.n(v),A="&api_key=NTVLYSitef89MlK7fHebEyNzZAkCEEuz",N={trendings:function(){var e=Object(x.a)(p.a.mark((function e(){var t,n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.giphy.com/v1/gifs/trending?limit=12"+A,e.prev=1,e.next=4,fetch("https://api.giphy.com/v1/gifs/trending?limit=12&api_key=NTVLYSitef89MlK7fHebEyNzZAkCEEuz");case 4:return t=e.sent,e.next=7,t.json();case 7:return n=e.sent,e.abrupt("return",n);case 11:throw e.prev=11,e.t0=e.catch(1),e.t0;case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(){return e.apply(this,arguments)}}(),search:function(){var e=Object(x.a)(p.a.mark((function e(t){var n,r,c;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://api.giphy.com/v1/gifs/search?q="+t+A,e.prev=1,e.next=4,fetch(n);case 4:return r=e.sent,e.next=7,r.json();case 7:return c=e.sent,e.abrupt("return",c);case 11:throw e.prev=11,e.t0=e.catch(1),e.t0;case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t){return e.apply(this,arguments)}}()},C=(n(22),function(e){var t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,n=Object(r.useState)({curIndex:0,nxtIndex:t,pageNumber:1}),c=Object(i.a)(n,2),s=c[0],a=c[1],u=Object(r.useState)(e),o=Object(i.a)(u,2),l=o[0],j=o[1],b=s.curIndex,d=s.nxtIndex,f=s.pageNumber,h=Math.ceil(e.length/t),g=f*t>e.length?e.length:f*t;Object(r.useEffect)((function(){a({curIndex:0,nxtIndex:t,pageNumber:1})}),[e,t]);var O=function(){b+t<e.length&&(a({curIndex:b+t,nxtIndex:d+t,pageNumber:f+1}),window.scroll(0,0))},m=function(){b>0&&(a({curIndex:b-t,nxtIndex:d-t,pageNumber:f-1}),window.scroll(0,0))};return Object(r.useEffect)((function(){var t=e.slice(b,d);j(t)}),[e,f,b,d,t]),{filtered:l,amountOfElements:g,pageNumber:f,goNextPage:O,goPrevPage:m,amountOfPages:h}}(e.results,12),n=t.filtered,c=t.pageNumber,s=t.goNextPage,a=t.goPrevPage,o=c<t.amountOfPages,l=c>1;return Object(u.jsx)("div",{children:(null===n||void 0===n?void 0:n.length)>0&&Object(u.jsxs)("div",{className:"search__results",children:[Object(u.jsx)("h2",{className:"search__results-title",children:"Results :"}),Object(u.jsx)("ul",{className:"search__list",children:null===n||void 0===n?void 0:n.map((function(e){return Object(u.jsx)(d,{gif:e},e.id)}))}),Object(u.jsxs)("div",{className:"search__pagination",children:[Object(u.jsxs)("div",{className:"search__pagination-handlers",children:[l&&Object(u.jsx)("button",{onClick:a,children:"Previous"}),o&&Object(u.jsx)("button",{onClick:s,children:"Next"})]}),Object(u.jsxs)("h4",{children:["Page : ",c]})]})]})})}),_=function(){var e=Object(r.useState)([]),t=Object(i.a)(e,2),n=t[0],c=t[1],s=Object(r.useRef)(!0),a=function(e){var t=Object(r.useState)(e),n=Object(i.a)(t,2),c=n[0],s=n[1];return[c,function(e){s(Object(m.a)(Object(m.a)({},c),{},Object(O.a)({},e.target.name,e.target.value)))},function(){s(e)}]}({search_box:""}),o=Object(i.a)(a,3),l=o[0],j=o[1],b=o[2],d=l.search_box;return Object(r.useEffect)((function(){return s.current=!0,function(){s.current=!1}}),[]),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("nav",{className:"navbar",children:[Object(u.jsx)("h2",{children:"GIPHARG"}),Object(u.jsx)("div",{className:"search",children:Object(u.jsxs)("form",{onSubmit:function(e){e.preventDefault(),N.search(d).then((function(e){s.current&&c(e.data)})).catch((function(e){return console.error(e)}))},className:"search__form",action:"",children:[Object(u.jsx)("input",{autoFocus:!0,onChange:j,value:d,type:"text",name:"search_box",id:"search_box",placeholder:"example: cheeseburgers"}),Object(u.jsx)("button",{className:"search__button material-icons",children:"search"}),Object(u.jsx)("button",{onClick:function(){b(),c([])},className:"clear__button material-icons",children:"clear"})]})})]}),Object(u.jsx)(C,{results:n})]})},J=function(e){var t=e.trendings;return Object(u.jsx)("div",{children:Object(u.jsx)("ul",{className:"trendings__list",children:null===t||void 0===t?void 0:t.map((function(e){return Object(u.jsx)(d,{gif:e},e.id)}))})})},E=(n(23),function(){var e=Object(r.useState)([]),t=Object(i.a)(e,2),n=t[0],c=t[1],s=Object(r.useRef)(!0);return Object(r.useEffect)((function(){return N.trendings().then((function(e){var t=e.data;s.current&&c(t)})),function(){s.current=!1}}),[]),Object(u.jsxs)("div",{className:"trendings",children:[Object(u.jsx)("h1",{className:"trendings__title",children:"Trendings"}),Object(u.jsx)(J,{trendings:n}),Object(u.jsx)("hr",{})]})}),B=function(){return Object(u.jsx)(l,{children:Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)(_,{}),Object(u.jsx)("hr",{}),Object(u.jsx)(E,{}),Object(u.jsx)(h,{}),Object(u.jsx)(g,{})]})})};s.a.render(Object(u.jsx)(B,{}),document.getElementById("root"))}],[[24,1,2]]]);
//# sourceMappingURL=main.02e81f42.chunk.js.map