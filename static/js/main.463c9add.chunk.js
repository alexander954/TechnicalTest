(this.webpackJsonptesttask=this.webpackJsonptesttask||[]).push([[0],[,,,,,,,,,,,,,,,,function(e,t,a){},function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(3),s=a.n(n),i=a(10),c=a.n(i),r=(a(16),a(2)),l=a(4),d=a(5),o=a(1),u=a(7),b=a(6),h=(a(17),a(0)),j=function(e){Object(u.a)(a,e);var t=Object(b.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={position:["Frontend \u0420\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a","Backend \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a","\u0410\u043d\u0430\u043b\u0438\u0442\u0438\u043a","HR"],workerParams:{collegues:[],gender:"\u041c",position:"Frontend \u0420\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a",driverLicense:"off",additionalAtributes:[]},additionalAtributes:[]},n.handleChange=n.handleChange.bind(Object(o.a)(n)),n.checkBoxEdit=n.checkBoxEdit.bind(Object(o.a)(n)),n.addWorker=n.addWorker.bind(Object(o.a)(n)),n.handleMultipleSelect=n.handleMultipleSelect.bind(Object(o.a)(n)),n.addAdditionalAtribute=n.addAdditionalAtribute.bind(Object(o.a)(n)),n.deleteAdditionalAtribute=n.deleteAdditionalAtribute.bind(Object(o.a)(n)),n.editAdditionalAtribute=n.editAdditionalAtribute.bind(Object(o.a)(n)),n}return Object(d.a)(a,[{key:"addAdditionalAtribute",value:function(){var e=document.getElementById("newAtributeName"),t=document.getElementById("newAtributeType"),a=0;if(this.state.additionalAtributes.forEach((function(n){n.name!==e.value||n.type!==t.value||(a=1)})),0===a){var n=e.value,s=t.value;e.value="",t.options[0].selected=!0,this.setState((function(e){var t=e.additionalAtributes,a=[].concat(Object(r.a)(t),[{name:n,type:s,key:"".concat(n,"-").concat(s),value:""}]);return{additionalAtributes:Object(r.a)(a)}}))}}},{key:"editAdditionalAtribute",value:function(e,t){this.setState((function(a){var n=a.workerParams,s=a.additionalAtributes,i=Object(r.a)(s);return i[t].value=e.target.value,n.additionalAtributes=i,{additionalAtributes:Object(r.a)(i)}}))}},{key:"deleteAdditionalAtribute",value:function(e){this.setState((function(t){var a=t.additionalAtributes,n=t.workerParams,s=a.slice();return s.splice(e,1),n.additionalAtributes=s,{additionalAtributes:Object(r.a)(s)}}))}},{key:"handleMultipleSelect",value:function(e){this.setState((function(t){t.workerParams[e.target.name]=Object(r.a)(e.target.options).filter((function(e){return e.selected})).map((function(e){return e.value}))}))}},{key:"dateChange",value:function(e){var t=document.getElementsByName("firedDate");t[0].disabled=!1,t[0].min=e.target.value,new Date(t[0].value)<new Date(e.target.value)&&(t[0].value=e.target.value)}},{key:"handleChange",value:function(e){this.setState((function(t){t.workerParams[e.target.name]=e.target.value}))}},{key:"checkBoxEdit",value:function(e){e.target.checked?this.setState((function(t){t.workerParams[e.target.name]="on"})):this.setState((function(t){t.workerParams[e.target.name]="off"}))}},{key:"addWorker",value:function(e){var t=this;e.preventDefault();var a=localStorage.getItem("workers");if(null==a||"[]"===a){var n=this.state.workerParams;n.id=1,a=JSON.stringify([n])}else{var s=this.state.workerParams,i=JSON.parse(a);i.forEach((function(e,a){var n="".concat(e.secondName," ").concat(e.firstName," ").concat(e.patronymic);void 0!==t.state.workerParams.collegues.find((function(t){return t===n&&e}))&&i[a].collegues.push("".concat(t.state.workerParams.secondName," ").concat(t.state.workerParams.firstName," ").concat(t.state.workerParams.patronymic))})),s.id=1+i[i.length-1].id,a=JSON.stringify([].concat(Object(r.a)(i),[s]))}localStorage.setItem("workers",a),this.props.stateChange(1)}},{key:"render",value:function(){var e,t=this,a=JSON.parse(localStorage.getItem("workers"));return null!=a&&0!==a.length&&(e=Object(h.jsxs)("div",{className:"d-flex",children:[Object(h.jsx)("label",{className:"formLabel",children:"\u041a\u043e\u043b\u043b\u0435\u0433\u0438"}),Object(h.jsx)("select",{name:"collegues",multiple:!0,onChange:this.handleMultipleSelect,children:a.map((function(e){var t="".concat(e.secondName," ").concat(e.firstName," ").concat(e.patronymic);return Object(h.jsxs)("option",{value:t,children:[e.secondName," ",e.firstName," ",e.patronymic]})}))})]})),Object(h.jsx)("div",{className:"formDiv",children:Object(h.jsxs)("form",{onSubmit:this.addWorker,className:"Addform",children:[Object(h.jsxs)("div",{className:"d-flex",children:[Object(h.jsx)("label",{className:"formLabel",children:"\u0424\u0430\u043c\u0438\u043b\u0438\u044f:"}),Object(h.jsx)("input",{name:"secondName",type:"text",onChange:this.handleChange,required:!0})]}),Object(h.jsxs)("div",{className:"d-flex",children:[Object(h.jsx)("label",{className:"formLabel",children:"\u0418\u043c\u044f:"}),Object(h.jsx)("input",{name:"firstName",type:"text",onChange:this.handleChange,required:!0})]}),Object(h.jsxs)("div",{className:"d-flex",children:[Object(h.jsx)("label",{className:"formLabel",children:"\u041e\u0442\u0447\u0435\u0441\u0442\u0432\u043e:"}),Object(h.jsx)("input",{name:"patronymic",type:"text",onChange:this.handleChange})]}),Object(h.jsxs)("div",{className:"d-flex",children:[Object(h.jsx)("label",{className:"formLabel",children:"\u0414\u043e\u043b\u0436\u043d\u043e\u0441\u0442\u044c:"}),Object(h.jsx)("select",{name:"position",onChange:this.handleChange,required:!0,children:this.state.position.map((function(e){return Object(h.jsx)("option",{children:e})}))})]}),Object(h.jsxs)("div",{className:"d-flex",children:[Object(h.jsx)("label",{className:"formLabel",children:"\u0414\u0430\u0442\u0430 \u0440\u043e\u0436\u0434\u0435\u043d\u0438\u044f:"}),Object(h.jsx)("input",{name:"birthDate",type:"date",onChange:this.handleChange,required:!0})]}),Object(h.jsxs)("div",{className:"d-flex",children:[Object(h.jsx)("label",{className:"formLabel",children:"\u041f\u043e\u043b:"}),Object(h.jsx)("label",{children:"\u041c"}),Object(h.jsx)("input",{type:"radio",name:"gender",value:"\u041c",onChange:this.handleChange,defaultChecked:!0}),Object(h.jsx)("label",{children:"\u0416"}),Object(h.jsx)("input",{type:"radio",name:"gender",value:"\u0416",onChange:this.handleChange})]}),Object(h.jsxs)("div",{className:"d-flex",children:[Object(h.jsx)("label",{className:"formLabel",children:"\u0414\u0430\u0442\u0430 \u043f\u0440\u0438\u0451\u043c\u0430 \u043d\u0430 \u0440\u0430\u0431\u043e\u0442\u0443:"}),Object(h.jsx)("input",{name:"employedDate",onChange:function(e){t.dateChange(e),t.handleChange(e)},type:"date",required:!0})]}),Object(h.jsxs)("div",{className:"d-flex",children:[Object(h.jsx)("label",{className:"formLabel",children:"\u0414\u0430\u0442\u0430 \u0443\u0432\u043e\u043b\u044c\u043d\u0435\u043d\u0438\u0435:"}),Object(h.jsx)("input",{name:"firedDate",onChange:this.handleChange,type:"date",required:!0,disabled:!0})]}),Object(h.jsxs)("div",{className:"d-flex",children:[Object(h.jsx)("label",{className:"formLabel",children:"\u041d\u0430\u043b\u0438\u0447\u0438\u0435 \u043f\u0440\u0430\u0432:"}),Object(h.jsx)("input",{type:"checkbox",onChange:this.handleChange,name:"driverLicense"})]}),e,Object(h.jsx)("h3",{className:"centered",children:"\u0414\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0435 \u0430\u0442\u0440\u0438\u0431\u0443\u0442\u044b"}),this.state.additionalAtributes.map((function(e,a){return Object(h.jsxs)("div",{className:"d-flex",children:[Object(h.jsx)("label",{className:"formLabel",children:e.name}),Object(h.jsx)("input",{type:e.type,name:e.name,onChange:function(e){return t.editAdditionalAtribute(e,a)}}),Object(h.jsx)("button",{type:"button",onClick:function(){return t.deleteAdditionalAtribute(a)},children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"})]},e.key)})),Object(h.jsxs)("div",{className:"d-flex",children:[Object(h.jsx)("input",{className:"newAtributesElement",type:"text",id:"newAtributeName",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0430\u0442\u0440\u0438\u0431\u0443\u0442\u0430"}),Object(h.jsxs)("select",{className:"selectNewAtributes",id:"newAtributeType",children:[Object(h.jsx)("option",{value:"text",children:"\u0441\u0442\u0440\u043e\u043a\u0430"}),Object(h.jsx)("option",{value:"number",children:"\u0447\u0438\u0441\u043b\u043e"}),Object(h.jsx)("option",{value:"date",children:"\u0434\u0430\u0442\u0430"})]}),Object(h.jsx)("button",{type:"button",onClick:function(){t.addAdditionalAtribute()},children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0430\u0442\u0440\u0438\u0431\u0443\u0442"})]}),Object(h.jsx)("button",{className:"formBtn",type:"submit",children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0441\u043e\u0442\u0440\u0443\u0434\u043d\u0438\u043a\u0430"})]})})}}]),a}(s.a.Component),m=a(9),x=a(11),f=(a(19),function(e){Object(u.a)(a,e);var t=Object(b.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){var e=this.props,t=e.secondName,a=e.firstName,n=e.birthDate,s=e.onDelete,i=e.onEdit,c=e.showOne;return Object(h.jsxs)("div",{className:"list-item",children:[Object(h.jsxs)("h3",{className:"list-item-element",children:[t," ",a," ",n]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("button",{className:"list-item-element",onClick:c,children:"\u041f\u043e\u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c"}),Object(h.jsx)("button",{className:"list-item-element",onClick:i,children:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c"}),Object(h.jsx)("button",{className:"list-item-element",onClick:s,children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"})]})]})}}]),a}(s.a.Component)),O=(a(20),["id"]),p=function(e){var t,a=e.onDelete,n=e.onEdit,s=e.showOne;return null!=localStorage.getItem("workers")&&"[]"!==localStorage.getItem("workers")&&(t=JSON.parse(localStorage.getItem("workers")).map((function(e){var t=e.id,i=Object(x.a)(e,O);return Object(h.jsx)("li",{className:"list",children:Object(h.jsx)(f,Object(m.a)(Object(m.a)({},i),{},{onDelete:function(){return a(t)},onEdit:function(){return n(t)},showOne:function(){return s(t)}}))},t)}))),Object(h.jsx)("ul",{children:t})},v=(a(21),function(e){var t=e.id,a=e.stateChange,n=JSON.parse(localStorage.getItem("workers")),s=n.findIndex((function(e){return t===e.id})),i=n[s],c=i.birthDate,r=i.driverLicense,l=i.employedDate,d=i.firedDate,o=i.secondName,u=i.gender,b=i.patronymic,j=i.position,m=i.firstName,x=!1,f=!1;"\u041c"===u?x=!0:f=!0;var O=!1;"on"===r&&(O=!0);var p=Object(h.jsxs)("div",{className:"d-flex",children:[Object(h.jsx)("label",{className:"formLabel",children:"\u041a\u043e\u043b\u043b\u0435\u0433\u0438"}),Object(h.jsx)("div",{className:"colleguesDiv",children:n[s].collegues.map((function(e,t){return Object(h.jsx)("input",{type:"text",defaultValue:e,readOnly:!0},t)}))})]}),v=[Object(h.jsx)("h3",{className:"centered",children:"\u0414\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0435 \u0430\u0442\u0440\u0438\u0431\u0443\u0442\u044b"})];return n[s].additionalAtributes.forEach((function(e){v.push(Object(h.jsxs)("div",{className:"d-flex",children:[Object(h.jsx)("label",{className:"formLabel",children:e.name}),Object(h.jsx)("input",{type:"text",value:e.value,readOnly:!0})]}))})),1===v.length&&(v=[Object(h.jsx)("h3",{className:"centered",children:"\u041d\u0435\u0442 \u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0445 \u0430\u0442\u0440\u0438\u0431\u0443\u0442\u043e\u0432"})]),Object(h.jsx)("div",{className:"formDiv",children:Object(h.jsxs)("div",{className:"Addform",children:[Object(h.jsxs)("div",{className:"d-flex",children:[Object(h.jsx)("label",{className:"formLabel",children:"\u0424\u0430\u043c\u0438\u043b\u0438\u044f:"}),Object(h.jsx)("input",{type:"text",value:o,readOnly:!0})]}),Object(h.jsxs)("div",{className:"d-flex",children:[Object(h.jsx)("label",{className:"formLabel",children:"\u0418\u043c\u044f:"}),Object(h.jsx)("input",{type:"text",value:m,readOnly:!0})]}),Object(h.jsxs)("div",{className:"d-flex",children:[Object(h.jsx)("label",{className:"formLabel",children:"\u041e\u0442\u0447\u0435\u0441\u0442\u0432\u043e:"}),Object(h.jsx)("input",{type:"text",value:b,readOnly:!0})]}),Object(h.jsxs)("div",{className:"d-flex",children:[Object(h.jsx)("label",{className:"formLabel",children:"\u0414\u043e\u043b\u0436\u043d\u043e\u0441\u0442\u044c:"}),Object(h.jsx)("input",{type:"text",value:j,readOnly:!0})]}),Object(h.jsxs)("div",{className:"d-flex",children:[Object(h.jsx)("label",{className:"formLabel",children:"\u0414\u0430\u0442\u0430 \u0440\u043e\u0436\u0434\u0435\u043d\u0438\u044f:"}),Object(h.jsx)("input",{type:"date",value:c,readOnly:!0})]}),Object(h.jsxs)("div",{className:"d-flex",children:[Object(h.jsx)("label",{className:"formLabel",children:"\u041f\u043e\u043b:"}),Object(h.jsx)("label",{children:"\u041c"}),Object(h.jsx)("input",{type:"radio",value:"\u041c",checked:x,readOnly:!0}),Object(h.jsx)("label",{children:"\u0416"}),Object(h.jsx)("input",{type:"radio",value:"\u0416",checked:f,readOnly:!0})]}),Object(h.jsxs)("div",{className:"d-flex",children:[Object(h.jsx)("label",{className:"formLabel",children:"\u0414\u0430\u0442\u0430 \u043f\u0440\u0438\u0451\u043c\u0430 \u043d\u0430 \u0440\u0430\u0431\u043e\u0442\u0443:"}),Object(h.jsx)("input",{type:"date",value:l,readOnly:!0})]}),Object(h.jsxs)("div",{className:"d-flex",children:[Object(h.jsx)("label",{className:"formLabel",children:"\u0414\u0430\u0442\u0430 \u0443\u0432\u043e\u043b\u044c\u043d\u0435\u043d\u0438\u0435:"}),Object(h.jsx)("input",{type:"date",value:d,readOnly:!0})]}),Object(h.jsxs)("div",{className:"d-flex",children:[Object(h.jsx)("label",{className:"formLabel",children:"\u041d\u0430\u043b\u0438\u0447\u0438\u0435 \u043f\u0440\u0430\u0432:"}),Object(h.jsx)("input",{type:"checkbox",checked:O,readOnly:!0})]}),p,v,Object(h.jsx)("button",{className:"formBtn",onClick:function(){return a(2)},children:"\u0412\u0435\u0440\u043d\u0443\u0442\u044c\u0441\u044f"})]})})}),g=(a(22),function(e){Object(u.a)(a,e);var t=Object(b.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={workers:JSON.parse(localStorage.getItem("workers")),index:JSON.parse(localStorage.getItem("workers")).findIndex((function(e){return n.props.id===e.id&&e})),position:["Frontend \u0420\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a","Backend \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a","\u0410\u043d\u0430\u043b\u0438\u0442\u0438\u043a","HR"],currentWorker:""},n.state.currentWorker="".concat(n.state.workers[n.state.index].secondName," ").concat(n.state.workers[n.state.index].firstName," ").concat(n.state.workers[n.state.index].patronymic),n.handleEdit=n.handleEdit.bind(Object(o.a)(n)),n.saveChanges=n.saveChanges.bind(Object(o.a)(n)),n.dateChange=n.dateChange.bind(Object(o.a)(n)),n.handleMultipleSelect=n.handleMultipleSelect.bind(Object(o.a)(n)),n.addAdditionalAtribute=n.addAdditionalAtribute.bind(Object(o.a)(n)),n.editAdditionalAtribute=n.editAdditionalAtribute.bind(Object(o.a)(n)),n.deleteAdditionalAtribute=n.deleteAdditionalAtribute.bind(Object(o.a)(n)),n.checkBoxEdit=n.checkBoxEdit.bind(Object(o.a)(n)),n}return Object(d.a)(a,[{key:"handleEdit",value:function(e){var t=this;if("secondName"===e.target.name||"firstName"===e.target.name||"patronymic"===e.target.name){var a=Object(r.a)(this.state.workers);a.forEach((function(n,s){n.id!==t.props.id&&n.collegues.forEach((function(n,i){if(n!==t.state.currentWorker);else switch(e.target.name){case"secondName":a[s].collegues[i]="".concat(e.target.value," ").concat(a[s].collegues[i].split(" ")[1]," ").concat(a[s].collegues[i].split(" ")[2]||"");break;case"firstName":a[s].collegues[i]="".concat(a[s].collegues[i].split(" ")[0]," ").concat(e.target.value," ").concat(a[s].collegues[i].split(" ")[2]||"");break;case"patronymic":a[s].collegues[i]="".concat(a[s].collegues[i].split(" ")[0]," ").concat(a[s].collegues[i].split(" ")[1]," ").concat(e.target.value)}}))})),this.setState((function(){return{workers:a}}))}this.setState((function(t){var a=t.workers,n=t.index,s=a.slice();return s[n][e.target.name]=e.target.value,{workers:s}})),this.setState((function(){return{currentWorker:"".concat(t.state.workers[t.state.index].secondName," ").concat(t.state.workers[t.state.index].firstName," ").concat(t.state.workers[t.state.index].patronymic)}}))}},{key:"saveChanges",value:function(){var e=this,t=this.state.workers.slice();t.forEach((function(a,n){if(t[e.state.index]!==a){var s="".concat(a.secondName," ").concat(a.firstName," ").concat(a.patronymic),i=t[e.state.index].collegues.find((function(e){return e===s&&e})),c=a.collegues.findIndex((function(t){return t===e.state.currentWorker&&t}));void 0!==i?-1===c&&t[n].collegues.push(e.state.currentWorker):-1!==c&&t[n].collegues.splice(c,1)}})),this.setState((function(){return{workers:t}})),localStorage.setItem("workers",JSON.stringify(this.state.workers)),this.props.stateChange(3)}},{key:"dateChange",value:function(e){var t=document.getElementById("date");t.min=e.target.value;var a=new Date(e.target.value);new Date(t.value)>a&&(t.value=e.target.value)}},{key:"checkBoxEdit",value:function(e){e.target.checked?this.setState((function(t){var a=t.workers,n=t.index,s=a.slice();return s[n][e.target.name]="on",{workers:s}})):this.setState((function(t){var a=t.workers,n=t.index,s=a.slice();return s[n][e.target.name]="off",{workers:s}}))}},{key:"handleMultipleSelect",value:function(e){this.setState((function(t){var a=t.workers,n=t.index,s=a.slice();return s[n][e.target.name]=Object(r.a)(e.target.options).filter((function(e){return e.selected})).map((function(e){return e.value})),{workers:s}}))}},{key:"resetSelect",value:function(){document.getElementById("selectColleguesForm").value=null,this.setState((function(e){var t=e.workers,a=e.index,n=t.slice();return n[a].collegues=[],{workers:n}}))}},{key:"addAdditionalAtribute",value:function(){var e=document.getElementById("newAtributeName"),t=document.getElementById("newAtributeType"),a=0;if(this.state.workers[this.state.index].additionalAtributes.forEach((function(n){n.name!==e.value||n.type!==t.value||(a=1)})),0===a){var n=e.value,s=t.value;e.value="",t.options[0].selected=!0;var i=this.state.workers.slice(),c=[].concat(Object(r.a)(i[this.state.index].additionalAtributes),[{name:n,type:s,key:"".concat(n,"-").concat(s),value:""}]);i[this.state.index].additionalAtributes=Object(r.a)(c),this.setState((function(){return{workers:Object(r.a)(i)}}))}}},{key:"editAdditionalAtribute",value:function(e,t){this.setState((function(a){var n=a.workers,s=a.index,i=n.slice();return i[s].additionalAtributes[t].value=e.target.value,{workers:Object(r.a)(i)}}))}},{key:"deleteAdditionalAtribute",value:function(e){var t=this.state.workers.slice();t[this.state.index].additionalAtributes.splice(e,1),this.setState((function(){return{workers:Object(r.a)(t)}}))}},{key:"render",value:function(){var e=this,t=Object(h.jsxs)("div",{className:"d-flex",children:[Object(h.jsx)("label",{className:"formLabel",children:"\u041a\u043e\u043b\u043b\u0435\u0433\u0438"}),Object(h.jsxs)("div",{className:"collegueFormWBtn",children:[Object(h.jsx)("select",{id:"selectColleguesForm",name:"collegues",multiple:!0,onChange:this.handleMultipleSelect,children:this.state.workers.map((function(t){var a="".concat(t.secondName," ").concat(t.firstName," ").concat(t.patronymic);if(a!==e.state.currentWorker)return void 0===t.collegues.find((function(t){return t===e.state.currentWorker&&t}))?Object(h.jsx)("option",{selected:!1,type:"text",children:a}):Object(h.jsx)("option",{selected:!0,type:"text",children:a})}))}),Object(h.jsx)("button",{type:"button",onClick:function(){return e.resetSelect()},children:"\u0421\u0431\u0440\u043e\u0441\u0438\u0442\u044c \u0432\u044b\u0431\u0440\u0430\u043d\u043d\u043e\u0435"})]})]});return Object(h.jsx)("div",{className:"formDiv",children:Object(h.jsxs)("form",{className:"Addform",onSubmit:function(){return e.saveChanges()},children:[Object(h.jsxs)("div",{className:"d-flex",children:[Object(h.jsx)("label",{className:"formLabel",children:"\u0424\u0430\u043c\u0438\u043b\u0438\u044f:"}),Object(h.jsx)("input",{type:"text",name:"secondName",defaultValue:this.state.workers[this.state.index].secondName,onChange:this.handleEdit,required:!0})]}),Object(h.jsxs)("div",{className:"d-flex",children:[Object(h.jsx)("label",{className:"formLabel",children:"\u0418\u043c\u044f:"}),Object(h.jsx)("input",{type:"text",name:"firstName",defaultValue:this.state.workers[this.state.index].firstName,onChange:this.handleEdit,required:!0})]}),Object(h.jsxs)("div",{className:"d-flex",children:[Object(h.jsx)("label",{className:"formLabel",children:"\u041e\u0442\u0447\u0435\u0441\u0442\u0432\u043e:"}),Object(h.jsx)("input",{type:"text",name:"patronymic",defaultValue:this.state.workers[this.state.index].patronymic,onChange:this.handleEdit,required:!0})]}),Object(h.jsxs)("div",{className:"d-flex",children:[Object(h.jsx)("label",{className:"formLabel",children:"\u0414\u043e\u043b\u0436\u043d\u043e\u0441\u0442\u044c:"}),Object(h.jsx)("select",{name:"position",defaultValue:this.state.workers[this.state.index].position,onChange:this.handleEdit,required:!0,children:this.state.position.map((function(e){return Object(h.jsx)("option",{children:e})}))})]}),Object(h.jsxs)("div",{className:"d-flex",children:[Object(h.jsx)("label",{className:"formLabel",children:"\u0414\u0430\u0442\u0430 \u0440\u043e\u0436\u0434\u0435\u043d\u0438\u044f:"}),Object(h.jsx)("input",{type:"date",name:"birthDate",defaultValue:this.state.workers[this.state.index].birthDate,onChange:this.handleEdit,required:!0})]}),Object(h.jsxs)("div",{className:"d-flex",children:[Object(h.jsx)("label",{className:"formLabel",children:"\u041f\u043e\u043b:"}),Object(h.jsx)("label",{children:"\u041c"}),Object(h.jsx)("input",{name:"gender",type:"radio",defaultValue:"\u041c",defaultChecked:"\u041c"===this.state.workers[this.state.index].gender,onChange:this.handleEdit}),Object(h.jsx)("label",{children:"\u0416"}),Object(h.jsx)("input",{name:"gender",type:"radio",defaultValue:"\u0416",defaultChecked:"\u0416"===this.state.workers[this.state.index].gender,onChange:this.handleEdit})]}),Object(h.jsxs)("div",{className:"d-flex",children:[Object(h.jsx)("label",{className:"formLabel",children:"\u0414\u0430\u0442\u0430 \u043f\u0440\u0438\u0451\u043c\u0430 \u043d\u0430 \u0440\u0430\u0431\u043e\u0442\u0443:"}),Object(h.jsx)("input",{name:"employedDate",type:"date",defaultValue:this.state.workers[this.state.index].employedDate,onChange:function(t){e.dateChange(t),e.handleEdit(t)},required:!0})]}),Object(h.jsxs)("div",{className:"d-flex",children:[Object(h.jsx)("label",{className:"formLabel",children:"\u0414\u0430\u0442\u0430 \u0443\u0432\u043e\u043b\u044c\u043d\u0435\u043d\u0438\u0435:"}),Object(h.jsx)("input",{id:"date",name:"firedDate",type:"date",min:this.state.workers[this.state.index].employedDate,defaultValue:this.state.workers[this.state.index].firedDate,onChange:this.handleEdit,required:!0})]}),Object(h.jsxs)("div",{className:"d-flex",children:[Object(h.jsx)("label",{className:"formLabel",children:"\u041d\u0430\u043b\u0438\u0447\u0438\u0435 \u043f\u0440\u0430\u0432:"}),Object(h.jsx)("input",{name:"driverLicense",type:"checkbox",defaultChecked:"on"===this.state.workers[this.state.index].driverLicense,onChange:this.checkBoxEdit})]}),t,Object(h.jsx)("h3",{className:"centered",children:"\u0414\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0435 \u0430\u0442\u0440\u0438\u0431\u0443\u0442\u044b"}),this.state.workers[this.state.index].additionalAtributes.map((function(t,a){return Object(h.jsxs)("div",{className:"d-flex",children:[Object(h.jsx)("label",{className:"formLabel",children:t.name}),Object(h.jsx)("input",{type:t.type,name:t.name,defaultValue:t.value,onChange:function(t){return e.editAdditionalAtribute(t,a)}}),Object(h.jsx)("button",{type:"button",onClick:function(){return e.deleteAdditionalAtribute(a)},children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"})]},t.key)})),Object(h.jsxs)("div",{className:"d-flex",children:[Object(h.jsx)("input",{className:"newAtributesElement",type:"text",id:"newAtributeName",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0430\u0442\u0440\u0438\u0431\u0443\u0442\u0430"}),Object(h.jsxs)("select",{className:"selectNewAtributes",id:"newAtributeType",children:[Object(h.jsx)("option",{value:"text",children:"\u0441\u0442\u0440\u043e\u043a\u0430"}),Object(h.jsx)("option",{value:"number",children:"\u0447\u0438\u0441\u043b\u043e"}),Object(h.jsx)("option",{value:"date",children:"\u0434\u0430\u0442\u0430"})]}),Object(h.jsx)("button",{type:"button",onClick:function(){e.addAdditionalAtribute()},children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0430\u0442\u0440\u0438\u0431\u0443\u0442"})]}),Object(h.jsx)("button",{className:"formBtn",type:"submit",children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f"})]})})}}]),a}(s.a.Component)),N=(a(23),function(e){Object(u.a)(a,e);var t=Object(b.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={state:0,id:0},n.stateChange=n.stateChange.bind(Object(o.a)(n)),n.onDelete=n.onDelete.bind(Object(o.a)(n)),n.onEdit=n.onEdit.bind(Object(o.a)(n)),n.showOne=n.showOne.bind(Object(o.a)(n)),n}return Object(d.a)(a,[{key:"stateChange",value:function(e){this.setState((function(t){var a=t.state;return e===a?{state:0}:{state:e}}))}},{key:"onDelete",value:function(e){var t=JSON.parse(localStorage.getItem("workers")),a=t.findIndex((function(t){return e===t.id}));t.forEach((function(e,n){n!==a&&e.hasOwnProperty("collegues")&&e.collegues.forEach((function(e,s){e==="".concat(t[a].secondName," ").concat(t[a].firstName," ").concat(t[a].patronymic)&&t[n].collegues.splice(s,1)}))})),t.splice(a,1),localStorage.setItem("workers",JSON.stringify(Object(r.a)(t))),this.stateChange(0)}},{key:"onEdit",value:function(e){var t=JSON.parse(localStorage.getItem("workers")),a=t.findIndex((function(t){return e===t.id}));this.setState((function(){return{id:t[a].id}})),this.stateChange(3)}},{key:"showOne",value:function(e){var t=JSON.parse(localStorage.getItem("workers")),a=t.findIndex((function(t){return e===t.id}));this.setState((function(){return{id:t[a].id}})),this.stateChange(2)}},{key:"render",value:function(){var e,t=this;return 0===this.state.state?e=Object(h.jsxs)("div",{className:"maindiv",children:[Object(h.jsx)("h2",{className:"centered",children:"\u0420\u0435\u0435\u0441\u0442\u0440 \u0441\u043e\u0442\u0440\u0443\u0434\u043d\u0438\u043a\u043e\u0432"}),Object(h.jsx)(p,{onDelete:this.onDelete,onEdit:this.onEdit,showOne:this.showOne}),Object(h.jsx)("div",{className:"centered",children:Object(h.jsx)("button",{onClick:function(){return t.stateChange(1)},children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0441\u043e\u0442\u0440\u0443\u0434\u043d\u0438\u043a\u0430"})})]}):1===this.state.state?e=Object(h.jsxs)("div",{className:"maindiv",children:[Object(h.jsx)("h2",{className:"centered",children:"\u0420\u0435\u0435\u0441\u0442\u0440 \u0441\u043e\u0442\u0440\u0443\u0434\u043d\u0438\u043a\u043e\u0432"}),Object(h.jsx)(j,{stateChange:this.stateChange})]}):2===this.state.state?e=Object(h.jsxs)("div",{className:"maindiv",children:[Object(h.jsx)("h2",{className:"centered",children:"\u0420\u0435\u0435\u0441\u0442\u0440 \u0441\u043e\u0442\u0440\u0443\u0434\u043d\u0438\u043a\u043e\u0432"}),Object(h.jsx)(v,{id:this.state.id,stateChange:this.stateChange})]}):3===this.state.state&&(e=Object(h.jsxs)("div",{className:"maindiv",children:[Object(h.jsx)("h2",{className:"centered",children:"\u0420\u0435\u0435\u0441\u0442\u0440 \u0441\u043e\u0442\u0440\u0443\u0434\u043d\u0438\u043a\u043e\u0432"}),Object(h.jsx)(g,{id:this.state.id,stateChange:this.stateChange})]})),e}}]),a}(s.a.Component));c.a.render(Object(h.jsx)(s.a.StrictMode,{children:Object(h.jsx)(N,{})}),document.getElementById("root"))}],[[24,1,2]]]);
//# sourceMappingURL=main.463c9add.chunk.js.map