(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],{20:function(e,t,n){e.exports=n(32)},30:function(e,t,n){},31:function(e,t,n){},32:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),c=n(17),l=n.n(c),r=n(6),i=n(19),u=n(10),m=Object(a.createContext)(),s=function(e){var t=e.children,n=JSON.parse(localStorage.getItem("todos"))||[],c=Object(a.useState)(n),l=Object(u.a)(c,2),r=l[0],s=l[1],d=Object(a.useState)(null),E=Object(u.a)(d,2),f=E[0],b=E[1];Object(a.useEffect)((function(){localStorage.setItem("todos",JSON.stringify(r))}),[r]);return o.a.createElement(m.Provider,{value:{todos:r,current:f,addTodo:function(e){s([{title:e,id:Math.floor(1e8*Math.random()),done:!1}].concat(Object(i.a)(r)))},deleteTodo:function(e){s(r.filter((function(t){return t.id!==e})))},setCurrentValue:function(e){var t=r.find((function(t){return t.id===e}));b(t)},editTodo:function(e,t){var n=r.map((function(n){return n.id===t?{title:e,id:t}:n}));s(n),b(null)},setDone:function(e){var t=e.title,n=e.id,a=e.done,o=r.map((function(e){return e.id===n?{title:t,id:n,done:!a}:e}));s(o)}}},t)},d=n(1),E=function(){var e=Object(a.useContext)(m),t=e.addTodo,n=e.editTodo,c=e.current,l=(e.setCurrentValue,Object(a.useState)("")),r=Object(u.a)(l,2),i=r[0],s=r[1];return Object(a.useEffect)((function(){c&&s(c.title)}),[c]),o.a.createElement("form",{className:"form",onSubmit:function(e){if(e.preventDefault(),i){if(c)return n(i,c.id),void s("");t(i),s("")}}},o.a.createElement("div",{className:"form__group"},o.a.createElement("input",{type:"text",placeholder:"What needs to be done?",className:"form__control",required:!0,value:i,onChange:function(e){return s(e.target.value)}}),o.a.createElement("input",{type:"submit",value:c?"Edit Todo":"Add todo",className:"btn"})))},f=function(e){var t=e.todo,n=Object(a.useContext)(m),c=n.setCurrentValue,l=n.deleteTodo,r=n.setDone,i=(t.title,t.id),u=t.done;return o.a.createElement("li",{className:"todo-list__item ".concat(u?"done":"")},o.a.createElement("span",null,t.title),o.a.createElement("div",{className:"todo-list__buttons"},o.a.createElement("button",{className:"icon icon--dark",onClick:function(){c(i)}},o.a.createElement("ion-icon",{name:"pencil-outline"})),o.a.createElement("button",{className:"icon icon--success icon-done",onClick:function(){r(t)}},o.a.createElement("ion-icon",{name:"checkmark-outline"})),o.a.createElement("button",{className:"icon icon--danger",onClick:function(){l(i)}},o.a.createElement("ion-icon",{name:"trash-outline"}))))},b=function(){var e=Object(a.useContext)(m).todos;return o.a.createElement("ul",{className:"todo-list"},e.map((function(e){return o.a.createElement(f,{todo:e,key:e.id})})))},v=function(){return o.a.createElement(a.Fragment,null,o.a.createElement("div",{className:"todo-form"},o.a.createElement(E,null)),o.a.createElement("div",{className:"todos"},o.a.createElement(b,null)))},p=function(){return o.a.createElement("div",{className:"about"},o.a.createElement("p",null,"Simple todo app made with React/React Hooks/Context API/Local storage \u2615\ufe0f"),o.a.createElement("h3",null,"by aidardev"))},N=function(){return o.a.createElement(d.c,null,o.a.createElement(d.a,{exact:!0,path:"/",component:v}),o.a.createElement(d.a,{path:"/about",component:p}))},h=function(){return o.a.createElement("div",{className:"navbar"},o.a.createElement("div",{className:"container"},o.a.createElement("nav",{className:"navbar__nav"},o.a.createElement(r.b,{to:"/",className:"navbar__logo"},"Todo App \ud83d\udd25"),o.a.createElement("ul",{className:"navbar__list"},o.a.createElement("li",null,o.a.createElement(r.c,{to:"/",exact:!0},"Home")),o.a.createElement("li",null,o.a.createElement(r.c,{to:"/about"},"About"))))))};n(30),n(31);var O=function(){return o.a.createElement(s,null,o.a.createElement(r.a,null,o.a.createElement(h,null),o.a.createElement("div",{className:"container"},o.a.createElement(N,null))))};l.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(O,null)),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.d2b73dec.chunk.js.map