(this["webpackJsonpreact_tabs-with-router"]=this["webpackJsonpreact_tabs-with-router"]||[]).push([[0],{32:function(e,t,c){},34:function(e,t,c){"use strict";c.r(t);var a=c(22),s=c.n(a),n=c(7),i=c(2),b=(c(30),c(31),c(32),c(11)),j=c.n(b),r=c(3),l=function(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("nav",{className:"navbar is-light is-fixed-top is-mobile has-shadow","data-cy":"Nav",children:Object(r.jsx)("div",{className:"container",children:Object(r.jsxs)("div",{className:"navbar-brand",children:[Object(r.jsx)(n.c,{to:"/",className:function(e){var t=e.isActive;return j()("navbar-item",{"is-active":t})},children:"Home"}),Object(r.jsx)(n.c,{to:"/tabs",className:function(e){var t=e.isActive;return j()("navbar-item",{"is-active":t})},children:"Tabs"})]})})}),Object(r.jsx)("div",{className:"section",children:Object(r.jsx)("div",{className:"container",children:Object(r.jsx)(i.a,{})})})]})},d=[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}],o=function(){var e=Object(i.q)().tabId,t=d.find((function(t){return t.id===e}));return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("h1",{className:"title",children:"Tabs page"}),Object(r.jsx)("div",{className:"tabs is-boxed",children:Object(r.jsx)("ul",{children:d.map((function(t){return Object(r.jsx)("li",{"data-cy":"Tab",className:j()({"is-active":t.id===e}),children:Object(r.jsx)(n.b,{to:"/tabs/".concat(t.id),children:t.title})})}))})}),Object(r.jsx)("div",{className:"block","data-cy":"TabContent",children:t?t.content:"Please select a tab"})]})},h=function(){return Object(r.jsx)(n.a,{children:Object(r.jsx)(i.d,{children:Object(r.jsxs)(i.b,{path:"/",element:Object(r.jsx)(l,{}),children:[Object(r.jsx)(i.b,{index:!0,element:Object(r.jsx)("h1",{className:"title",children:"Home page"})}),Object(r.jsx)(i.b,{path:"tabs",element:Object(r.jsx)(o,{}),children:Object(r.jsx)(i.b,{path:":tabId",element:Object(r.jsx)(o,{})})}),Object(r.jsx)(i.b,{path:"*",element:Object(r.jsx)("h1",{className:"title",children:"Page not found"})})]})})})};s.a.render(Object(r.jsx)(h,{}),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.d9697413.chunk.js.map