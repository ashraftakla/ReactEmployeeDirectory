(this.webpackJsonpemployeedir=this.webpackJsonpemployeedir||[]).push([[0],{26:function(e,t,a){},3:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a(1),s=a.n(n),c=a(14),i=a.n(c),l=(a(26),a(4)),d=a(19),o=(a(3),s.a.createContext({})),j=function(){var e=Object(n.useContext)(o);function t(e){var t=e.split("-"),a=t[0];return[t[1],t[2].split("T")[0],a].join("-")}return Object(r.jsx)("tbody",{children:void 0!==e.developerState.filteredUsers[0]&&void 0!==e.developerState.filteredUsers[0].name?e.developerState.filteredUsers.map((function(e){var a=e.login,n=e.name,s=e.picture,c=e.phone,i=e.email,l=e.dob;return Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{"data-th":"Image",className:"align-middle",children:Object(r.jsx)("img",{src:s.medium,alt:"profile image for "+n.first+" "+n.last,className:"img-responsive"})}),Object(r.jsxs)("td",{"data-th":"Name",className:"name-cell align-middle",children:[n.first," ",n.last]}),Object(r.jsx)("td",{"data-th":"Phone",className:"align-middle",children:c}),Object(r.jsx)("td",{"data-th":"Email",className:"align-middle",children:Object(r.jsx)("a",{href:"mailto:"+i,target:"__blank",children:i})}),Object(r.jsx)("td",{"data-th":"DOB",className:"align-middle",children:t(l.date)})]},a.uuid)})):Object(r.jsx)(r.Fragment,{})})},b=function(){var e=Object(n.useContext)(o);return Object(r.jsx)("div",{className:"datatable mt-5",children:Object(r.jsxs)("table",{id:"table",className:"table table-striped table-hover table-condensed",children:[Object(r.jsx)("thead",{children:Object(r.jsx)("tr",{children:e.developerState.headings.map((function(e){var t=e.name,a=e.width;return Object(r.jsxs)("th",{className:"col",style:{width:a},children:[t,Object(r.jsx)("span",{className:"pointer"})]},t)}))})}),Object(r.jsx)(j,{})]})})};var h=function(){var e=Object(n.useContext)(o);return Object(r.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:Object(r.jsxs)("div",{className:"search-area col-4",children:[Object(r.jsx)("input",{className:"form-control mr-sm-2",type:"search",placeholder:"name","aria-label":"Search",onChange:function(t){return e.handleSearchChange(t)}}),Object(r.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(r.jsx)("span",{className:"navbar-toggler-icon",children:"search"})})]})})},u=a(15),m=a.n(u),O=function(){return m.a.get("https://randomuser.me/api/?results=200&nat=us")},v=function(){var e=Object(n.useState)({users:[],order:"descend",filteredUsers:[],headings:[{name:"Image",width:"10%",order:"descend"},{name:"name",width:"10%",order:"descend"},{name:"phone",width:"20%",order:"descend"},{name:"email",width:"20%",order:"descend"},{name:"dob",width:"10%",order:"descend"}]}),t=Object(d.a)(e,2),a=t[0],s=t[1];return Object(n.useEffect)((function(){O().then((function(e){console.log(e.data.results),s(Object(l.a)(Object(l.a)({},a),{},{users:e.data.results,filteredUsers:e.data.results}))}))}),[]),Object(r.jsxs)(o.Provider,{value:{developerState:a,handleSearchChange:function(e){var t=e.target.value,r=a.users.filter((function(e){var a=e.name.first.toLowerCase()+" "+e.name.last.toLowerCase();if(console.log(t,a),-1!==a.indexOf(t.toLowerCase()))return e}));s(Object(l.a)(Object(l.a)({},a),{},{filteredUsers:r}))}},children:[Object(r.jsx)(h,{}),Object(r.jsx)("div",{className:"data-area",children:a.filteredUsers.length>0?Object(r.jsx)(b,{}):Object(r.jsx)("div",{})})]})};var x=function(){return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)(v,{})})};a(45);var f=function(e){var t=e.children;return Object(r.jsx)("div",{className:"wrapper",children:t})},g=a(16),p=a(17),N=a(20),C=a(18),w=function(e){Object(N.a)(a,e);var t=Object(C.a)(a);function a(){return Object(g.a)(this,a),t.apply(this,arguments)}return Object(p.a)(a,[{key:"render",value:function(){return Object(r.jsxs)("div",{className:"header",children:[Object(r.jsx)("h1",{children:"Employee Directory"}),Object(r.jsx)("p",{children:"Click on the carrots to filter by heading or use the search box"})]})}}]),a}(n.Component);var y=function(){return Object(r.jsx)("div",{className:"App",children:Object(r.jsxs)("div",{className:"wrapper",children:[Object(r.jsx)("div",{className:"header"}),Object(r.jsxs)(f,{children:[Object(r.jsx)(w,{}),Object(r.jsx)(x,{})]})]})})},S=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,47)).then((function(t){var a=t.getCLS,r=t.getFID,n=t.getFCP,s=t.getLCP,c=t.getTTFB;a(e),r(e),n(e),s(e),c(e)}))};i.a.render(Object(r.jsx)(s.a.StrictMode,{children:Object(r.jsx)(y,{})}),document.getElementById("root")),S()}},[[46,1,2]]]);
//# sourceMappingURL=main.1ff7fc05.chunk.js.map