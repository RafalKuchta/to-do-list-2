(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,a){},16:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(8),r=a.n(c),s=(a(15),a(6)),i=a(1),o=a(2),d=a(4),m=a(3),u=a(5),h=(a(16),(new Date).toISOString().slice(0,10)),f=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(a=Object(d.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={text:"",date:h,checked:!1},a.addText=function(e){a.setState({text:e.target.value})},a.addDate=function(e){a.setState({date:e.target.value})},a.addChecked=function(e){a.setState({checked:e.target.checked})},a.addTask=function(){if(!(a.state.text.length>3))return alert("Za ma\u0142o znak\xf3w");a.props.add(a.state),a.setState({text:"",date:h,checked:!1})},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"form"},l.a.createElement("input",{type:"taxt",placeholder:"wpisz zadanie...",value:this.state.text,onChange:this.addText}),l.a.createElement("input",{type:"checkbox",name:"important",id:"important",checked:this.state.checked,onChange:this.addChecked}),l.a.createElement("label",{htmlFor:"important"},"Priorytet"),l.a.createElement("br",null),l.a.createElement("label",{htmlFor:"date"},"Do kiedy"),l.a.createElement("input",{className:"date",type:"date",value:this.state.date,onChange:this.addDate}),l.a.createElement("br",null),l.a.createElement("button",{onClick:this.addTask},l.a.createElement("i",{class:"fas fa-plus"})))}}]),t}(n.Component),k=function(e){var t=e.task,a=t.text,n=t.date,c=t.id,r=t.important;return t.active?l.a.createElement("div",null,l.a.createElement("p",{className:"tasks"},l.a.createElement("div",{className:"text"},r?l.a.createElement("strong",{style:{color:"red"}},a):l.a.createElement("strong",null,a)),l.a.createElement("div",{className:"dateDoneDelete"},"do ",n,l.a.createElement("div",{className:"DoneDelete"},l.a.createElement("button",{className:"done",onClick:function(){return e.done(c)}},l.a.createElement("i",{class:"fas fa-check"})),l.a.createElement("button",{className:"delete",onClick:function(){return e.delete(c)}},l.a.createElement("i",{class:"far fa-trash-alt"})))))):l.a.createElement("div",null,l.a.createElement("p",{className:"tasks"},l.a.createElement("div",{className:"text"},l.a.createElement("strong",null,a)),l.a.createElement("div",{className:"dateDoneDelete"},l.a.createElement("em",null,"zrobione do "),l.a.createElement("div",{className:"date"},n),l.a.createElement("p",null,"Potwierdzenie wykonania"),l.a.createElement("button",{className:"deleteDone",onClick:function(){return e.delete(c)}},l.a.createElement("i",{class:"far fa-trash-alt"})))))},E=function(e){var t=e.tasks.filter(function(e){return e.active}),a=e.tasks.filter(function(e){return!e.active});console.log(a),a.sort(function(e,t){return e.finishDate>t.finishDate?-1:e.finishDate<t.finishDate?1:0}),t.sort(function(e,t){return e.text>t.text?1:e.text<t.text?-1:0});var n=t.map(function(t){return l.a.createElement(k,{key:t.id,task:t,delete:e.delete,done:e.done})}),c=a.map(function(t){return l.a.createElement(k,{key:t.id,task:t,delete:e.delete,done:e.done})});return l.a.createElement("div",{className:"taskList"},l.a.createElement("h2",null,"Zadania do zrobienia ",l.a.createElement("em",null,"(",t.length,")")),n,l.a.createElement("hr",null),l.a.createElement("h3",null,"Zadania zrobione ",l.a.createElement("em",null,"(",a.length,")")),c.length>5&&l.a.createElement("em",null,"lista ostatnich 5-ciu zada\u0144"),c.splice(0,5))},p=9,v=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(a=Object(d.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={tasks:[]},a.doneTask=function(e){var t=Array.from(a.state.tasks);t.forEach(function(t){t.id===e&&(t.active=!1,t.finishDate=(new Date).getTime())}),a.setState({tasks:t})},a.deleteTask=function(e){console.log("delete in App");var t=Object(s.a)(a.state.tasks),n=t.findIndex(function(t){return t.id===e});t.splice(n,1),a.setState({tasks:t})},a.addTaskApp=function(e){var t={id:p+1,text:e.text,date:e.date,active:!0,important:e.checked,finishDate:(new Date).getTime()};p++;var n=[].concat(Object(s.a)(a.state.tasks),[t]);a.setState({tasks:n})},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement("div",{className:"toDoApp"},l.a.createElement("h1",null,"TO DO APP")),l.a.createElement(f,{add:this.addTaskApp}),l.a.createElement("hr",null),l.a.createElement(E,{tasks:this.state.tasks,done:this.doneTask,delete:this.deleteTask}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,a){e.exports=a(17)}},[[9,1,2]]]);
//# sourceMappingURL=main.f0cb6682.chunk.js.map