(this["webpackJsonpreact-ornekleri"]=this["webpackJsonpreact-ornekleri"]||[]).push([[0],{17:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAC4jAAAuIwF4pT92AAAAB3RJTUUH5AEHCRkhOQ5g9AAAABl0RVh0Q29tbWVudABDcmVhdGVkIHdpdGggR0lNUFeBDhcAAAALSURBVAjXY2AAAgAABQAB4iYFmwAAAABJRU5ErkJggg=="},20:function(e,t,a){e.exports=a(32)},30:function(e,t,a){},31:function(e,t,a){},32:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(16),r=a.n(c),s=a(9),m=a(10),o=a(6),u=a(8),i=a(17),A=a.n(i),E=l.a.createContext();function b(){var e=Object(n.useState)(0),t=Object(s.a)(e,2),a=t[0],c=t[1];return l.a.createElement(E.Provider,{value:{bulbStatus:a,toggleLight:function(){c((function(e){return e?0:1}))}}},l.a.createElement(d,null))}function d(){var e=Object(n.useContext)(E);return l.a.createElement("div",null,l.a.createElement("img",{className:"bulb ".concat(e.bulbStatus?"on":"off"),alt:"",src:A.a,onClick:function(){return e.toggleLight()}}),"Turn ".concat(e.bulbStatus?"off":"on"," the light!"))}var p=function(){return l.a.createElement("h2",null,"Anasayfa")},f=function(){return l.a.createElement("div",{id:"content",className:"p-4 p-md-5 pt-5"},l.a.createElement(o.a,{path:"/",exact:!0,component:p}),l.a.createElement(o.a,{path:"/useContext",component:b}))},g=function(){var e=Object(n.useState)(null),t=Object(s.a)(e,2),a=t[0],c=t[1];return l.a.createElement("nav",{id:"sidebar",className:a},l.a.createElement("div",{className:"custom-menu"},l.a.createElement("button",{type:"button",id:"sidebarCollapse",onClick:function(){c(null==a?"active":null)},className:"btn btn-primary"},l.a.createElement(u.d,{icon:u.c,size:"small"}),l.a.createElement("span",{className:"sr-only"},"Toggle Menu"))),l.a.createElement("div",{className:"p-4"},l.a.createElement("h3",null,"React \xd6rnekleri"),l.a.createElement("ul",{className:"list-unstyled components mb-5"},l.a.createElement("li",null,l.a.createElement(m.b,{exact:!0,to:"/",activeClassName:"active"},l.a.createElement(u.d,{icon:u.b,size:"small",className:"mr-3"}),"Anasayfa")),l.a.createElement("li",null,l.a.createElement(m.b,{to:"/useContext",activeClassName:"active"},l.a.createElement(u.d,{icon:u.a,size:"small",className:"mr-3"}),"useContext"))),l.a.createElement("div",{className:"footer"})))},v=(a(30),a(31),document.getElementById("root"));r.a.render(l.a.createElement((function(){return l.a.createElement(m.a,{basename:"/react-ornekleri"},l.a.createElement("div",{className:"wrapper d-flex align-items-stretch"},l.a.createElement(g,null),l.a.createElement(f,null)))}),null),v)}},[[20,1,2]]]);
//# sourceMappingURL=main.4485738c.chunk.js.map