(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{17:function(t,e,a){},58:function(t,e,a){},86:function(t,e,a){"use strict";a.r(e);var s,n=a(1),c=a.n(n),o=a(25),r=a.n(o),i=(a(58),a(17),a(4)),l=a.n(i),d=a(23),j=a(6),h=a(8),u=a(9),b=a(11),m=a(10),p=a(0),O=function(t){Object(b.a)(a,t);var e=Object(m.a)(a);function a(){return Object(h.a)(this,a),e.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return document.title="Home",Object(p.jsx)("div",{className:"container",children:Object(p.jsx)("div",{className:"row",children:Object(p.jsxs)("div",{className:"col-md-12",children:[Object(p.jsx)("br",{}),Object(p.jsx)("h2",{className:"display-4 text-center",children:"Welcome"}),Object(p.jsx)("hr",{})]})})})}}]),a}(n.Component),x=function(t){var e=t.project;return Object(p.jsx)("div",{className:"project-container",children:Object(p.jsxs)("div",{className:"desc",children:[Object(p.jsx)("h2",{children:Object(p.jsx)(d.b,{to:"/project/".concat(e._id),children:Object(p.jsxs)("h4",{children:[e.title," | ",e.language]})})}),Object(p.jsx)("br",{}),Object(p.jsx)("p",{children:e.description}),Object(p.jsx)("br",{}),Object(p.jsx)("p",{children:e.status})]})})},g=function(t){Object(b.a)(a,t);var e=Object(m.a)(a);function a(t){var s;return Object(h.a)(this,a),(s=e.call(this,t)).state={projects:[]},s}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var t=this;l.a.get("/api/projects").then((function(e){t.setState({projects:e.data})})).catch((function(t){console.log("Error from ShowProjectList")}))}},{key:"render",value:function(){var t,e=this.state.projects;return document.title="Projects",t=e?e.map((function(t,e){return Object(p.jsx)("div",{className:"container",children:Object(p.jsx)(x,{project:t},e)})})):"there is no project record!",Object(p.jsx)("div",{className:"ShowProjectList",children:Object(p.jsxs)("div",{className:"container",children:[Object(p.jsx)("div",{className:"row",children:Object(p.jsxs)("div",{className:"col-md-12",children:[Object(p.jsx)("br",{}),Object(p.jsx)("h2",{className:"display-4 text-center",children:"Project List"}),Object(p.jsx)("hr",{})]})}),Object(p.jsx)("div",{className:"list",children:t})]})})}}]),a}(n.Component),f=a(47),v=a(12),N=function(t){Object(b.a)(a,t);var e=Object(m.a)(a);function a(t){var s;return Object(h.a)(this,a),(s=e.call(this,t)).editPage=function(t){var e={headers:{Authorization:v.reactLocalStorage.get("token")}};l.a.post("/api/auth",null,e).then((function(t){t.data.data.user&&s.props.history.push("/edit/"+s.props.match.params.id)}))},s.state={project:{},loggedIn:!1},s}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var t=this,e={headers:{Authorization:v.reactLocalStorage.get("token")}};l.a.post("/api/auth",null,e).then((function(e){e.data.data.user&&t.setState({loggedIn:!0})})),l.a.get("/api/projects/"+this.props.match.params.id).then((function(e){t.setState({project:e.data})})).catch((function(t){console.log("Error from ShowProjectDetails")}))}},{key:"render",value:function(){var t=this.state.project;document.title=t.title;var e=Object(p.jsx)(f.a,{hover:!0,variant:"dark",responsive:"sm",children:Object(p.jsxs)("tbody",{children:[Object(p.jsxs)("tr",{children:[Object(p.jsx)("th",{scope:"row"}),Object(p.jsx)("td",{children:"Title"}),Object(p.jsx)("td",{children:t.title})]}),Object(p.jsxs)("tr",{children:[Object(p.jsx)("th",{scope:"row"}),Object(p.jsx)("td",{children:"Author"}),Object(p.jsx)("td",{children:t.author})]}),Object(p.jsxs)("tr",{children:[Object(p.jsx)("th",{scope:"row"}),Object(p.jsx)("td",{children:"Published Date"}),Object(p.jsx)("td",{children:t.published_date})]}),Object(p.jsxs)("tr",{children:[Object(p.jsx)("th",{scope:"row"}),Object(p.jsx)("td",{children:"Description"}),Object(p.jsx)("td",{children:t.description})]}),Object(p.jsxs)("tr",{children:[Object(p.jsx)("th",{scope:"row"}),Object(p.jsx)("td",{children:"Programming language"}),Object(p.jsx)("td",{children:t.language})]}),Object(p.jsxs)("tr",{children:[Object(p.jsx)("th",{scope:"row"}),Object(p.jsx)("td",{children:"Status"}),Object(p.jsxs)("td",{children:[t.status," "]})]}),t.sourcecode&&Object(p.jsxs)("tr",{children:[Object(p.jsx)("th",{scope:"row"}),Object(p.jsx)("td",{children:"Source code"}),Object(p.jsx)("td",{children:Object(p.jsx)(d.b,{to:{pathname:t.sourcecode},target:"_blank",children:t.sourcecode})})]}),t.download&&Object(p.jsxs)("tr",{children:[Object(p.jsx)("th",{scope:"row"}),Object(p.jsx)("td",{children:"Download link"}),Object(p.jsx)("td",{children:Object(p.jsx)(d.b,{to:{pathname:t.download},target:"_blank",children:t.download})})]})]})});return Object(p.jsxs)("div",{className:"container details-container",children:[Object(p.jsx)("div",{className:"row",children:Object(p.jsxs)("div",{className:"col-md-8 m-auto",children:[Object(p.jsx)("br",{}),Object(p.jsx)("h1",{className:"display-4 text-center",children:t.title}),Object(p.jsx)("hr",{})]})}),Object(p.jsxs)("div",{children:[e,this.state.loggedIn&&Object(p.jsxs)("div",{children:[Object(p.jsx)("br",{}),Object(p.jsx)("br",{}),Object(p.jsx)("button",{onClick:this.editPage.bind(),className:"btn btn-outline-info btn-lg btn-block",children:"Edit Project"}),Object(p.jsx)("br",{}),Object(p.jsx)("br",{})]})]})]})}}]),a}(n.Component),w=a(20),C=function(t){Object(b.a)(a,t);var e=Object(m.a)(a);function a(t){var s;return Object(h.a)(this,a),(s=e.call(this,t)).onChange=function(t){s.setState(Object(w.a)({},t.target.name,t.target.value))},s.deleteProject=function(t){var e={headers:{Authorization:v.reactLocalStorage.get("token")}};l.a.post("/api/auth",null,e).then((function(t){if(t.data.data.user){s.state.title,s.state.author,s.state.description,s.state.language,s.state.sourcecode,s.state.download,s.state.status;l.a.delete("/api/projects/"+s.props.match.params.id,e).then((function(t){s.props.history.push("/projects")})).catch((function(t){console.log("Error in UpdateProject!")}))}}))},s.onSubmit=function(t){t.preventDefault();var e={headers:{Authorization:v.reactLocalStorage.get("token")}};l.a.post("/api/auth",null,e).then((function(t){if(t.data.data.user){var a={title:s.state.title,author:s.state.author,description:s.state.description,language:s.state.language,sourcecode:s.state.sourcecode,download:s.state.download,status:s.state.status};l.a.put("/api/projects/"+s.props.match.params.id,a,e).then((function(t){s.props.history.push("/projects/"+s.props.match.params.id)})).catch((function(t){console.log("Error in UpdateProject!")}))}}))},s.state={title:"",author:"",description:"",language:"",sourcecode:"",published_date:""},s}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var t=this,e={headers:{Authorization:v.reactLocalStorage.get("token")}};l.a.post("/api/auth",null,e).then((function(e){e.data.data.user&&l.a.get("/api/projects/"+t.props.match.params.id).then((function(e){t.setState({title:e.data.title,author:e.data.author,description:e.data.description,language:e.data.language,sourcecode:e.data.sourcecode,download:e.data.download,status:e.data.status})})).catch((function(t){console.log("Error from UpdateProject")}))})).catch((function(e){t.props.history.push("/")}))}},{key:"render",value:function(){return document.title="Edit "+this.state.title.toString(),Object(p.jsxs)("div",{className:"container",children:[Object(p.jsx)("div",{className:"row",children:Object(p.jsxs)("div",{className:"col-md-8 m-auto",children:[Object(p.jsx)("br",{}),Object(p.jsxs)("h1",{className:"display-4 text-center",children:["Edit Project - ",this.state.title]}),Object(p.jsx)("hr",{})]})}),Object(p.jsxs)("div",{className:"col-md-8 m-auto",children:[Object(p.jsxs)("form",{noValidate:!0,onSubmit:this.onSubmit,children:[Object(p.jsxs)("div",{className:"form-group",children:[Object(p.jsx)("label",{htmlFor:"title",children:"Title"}),Object(p.jsx)("input",{type:"text",placeholder:"Title of the Project",name:"title",className:"form-control",value:this.state.title,onChange:this.onChange})]}),Object(p.jsxs)("div",{className:"form-group",children:[Object(p.jsx)("label",{htmlFor:"author",children:"Author"}),Object(p.jsx)("input",{type:"text",placeholder:"Author",name:"author",className:"form-control",value:this.state.author,onChange:this.onChange})]}),Object(p.jsxs)("div",{className:"form-group",children:[Object(p.jsx)("label",{htmlFor:"description",children:"Description"}),Object(p.jsx)("input",{type:"text",placeholder:"Describe this Project",name:"description",className:"form-control",value:this.state.description,onChange:this.onChange})]}),Object(p.jsxs)("div",{className:"form-group",children:[Object(p.jsx)("label",{htmlFor:"language",children:"Programming language"}),Object(p.jsx)("input",{type:"text",placeholder:"Programming language",name:"language",className:"form-control",value:this.state.language,onChange:this.onChange})]}),Object(p.jsxs)("div",{className:"form-group",children:[Object(p.jsx)("label",{htmlFor:"sourcecode",children:"Status"}),Object(p.jsx)("input",{type:"text",placeholder:"Status",name:"status",className:"form-control",value:this.state.status,onChange:this.onChange})]}),Object(p.jsxs)("div",{className:"form-group",children:[Object(p.jsx)("label",{htmlFor:"sourcecode",children:"Source code"}),Object(p.jsx)("input",{type:"text",placeholder:"Source code",name:"sourcecode",className:"form-control",value:this.state.sourcecode,onChange:this.onChange})]}),Object(p.jsxs)("div",{className:"form-group",children:[Object(p.jsx)("label",{htmlFor:"sourcecode",children:"Download link"}),Object(p.jsx)("input",{type:"text",placeholder:"Download link",name:"download",className:"form-control",value:this.state.download,onChange:this.onChange})]}),Object(p.jsx)("button",{type:"submit",className:"btn btn-outline-info btn-lg btn-block",children:"Update Project"}),Object(p.jsx)("button",{onClick:this.deleteProject,className:"btn btn-outline-danger btn-lg btn-block",children:"Delete Project"})]}),Object(p.jsx)("br",{}),Object(p.jsx)("br",{})]})]})}}]),a}(n.Component),y=function(t){Object(b.a)(a,t);var e=Object(m.a)(a);function a(){var t;return Object(h.a)(this,a),(t=e.call(this)).onChange=function(e){t.setState(Object(w.a)({},e.target.name,e.target.value))},t.onSubmit=function(e){e.preventDefault();var a={username:t.state.username,password:t.state.password};l.a.post("/api/auth/login",a).then((function(e){v.reactLocalStorage.set("token",e.data.token),t.props.history.push("/")})),t.setState({isSubmitted:!0})},t.state={username:"",password:"",isSubmitted:!1},t}return Object(u.a)(a,[{key:"render",value:function(){return document.title="Login",Object(p.jsx)("div",{className:"container",children:Object(p.jsx)("div",{className:"row",children:Object(p.jsxs)("div",{className:"col-md-8 m-auto",children:[Object(p.jsx)("br",{}),Object(p.jsx)("h1",{className:"display-4 text-center",children:"Login"}),Object(p.jsx)("hr",{}),Object(p.jsxs)("form",{noValidate:!0,onSubmit:this.onSubmit,children:[Object(p.jsx)("div",{className:"form-group",children:Object(p.jsx)("input",{type:"text",placeholder:"Username",name:"username",className:"form-control",value:this.state.username,onChange:this.onChange})}),Object(p.jsx)("div",{className:"form-group",children:Object(p.jsx)("input",{type:"password",placeholder:"Password",name:"password",className:"form-control",value:this.state.password,onChange:this.onChange})}),Object(p.jsx)("input",{type:"submit",className:"btn btn-outline-warning btn-block mt-4"})]}),Object(p.jsx)("br",{}),Object(p.jsx)("br",{})]})})})}}]),a}(n.Component),k=function(t){Object(b.a)(a,t);var e=Object(m.a)(a);function a(){return Object(h.a)(this,a),e.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return document.title="About",Object(p.jsx)("div",{className:"container",children:Object(p.jsx)("div",{className:"row",children:Object(p.jsxs)("div",{className:"col-md-12",children:[Object(p.jsx)("br",{}),Object(p.jsx)("h2",{className:"display-4 text-center",children:"About me"}),Object(p.jsx)("hr",{})]})})})}}]),a}(n.Component),S=a(28),P=a(18),L=a(48),D=function(t){Object(b.a)(a,t);var e=Object(m.a)(a);function a(t){var s;return Object(h.a)(this,a),(s=e.call(this,t)).state={loggedIn:!1},s}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var t=this,e={headers:{Authorization:v.reactLocalStorage.get("token")}};l.a.post("/api/auth",null,e).then((function(e){e.data.data.user&&t.setState({loggedIn:!0})}))}},{key:"logout",value:function(){var t={headers:{Authorization:v.reactLocalStorage.get("token")}};l.a.post("/api/auth",null,t).then((function(t){t.data.data.user&&(v.reactLocalStorage.remove("token"),window.location.reload(!1))}))}},{key:"render",value:function(){return Object(p.jsx)(S.a,{collapseOnSelect:!0,bg:"dark",variant:"dark",expand:"lg",children:Object(p.jsxs)(L.a,{children:[Object(p.jsx)(S.a.Brand,{href:"/",children:"\u0160imon Borovsk\xfd"}),Object(p.jsx)(S.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(p.jsxs)(S.a.Collapse,{id:"basic-navbar-nav",children:[Object(p.jsxs)(P.a,{className:"mr-auto",children:[Object(p.jsx)(P.a.Link,{href:"/",children:"Home"}),Object(p.jsx)(P.a.Link,{href:"/projects",children:"Projects"}),Object(p.jsx)(P.a.Link,{href:"/about",children:"About me"}),Object(p.jsx)(P.a.Link,{href:"https://github.com/sb-17",children:"Github"}),Object(p.jsx)(P.a.Link,{href:"https://twitter.com/lostin_games",children:"Twitter"})]}),Object(p.jsxs)(P.a,{className:"ml-auto",children:[this.state.loggedIn&&Object(p.jsx)(P.a.Link,{onClick:this.logout.bind(),children:"Log out"}),!this.state.loggedIn&&Object(p.jsx)(P.a.Link,{href:"/login",children:"Log in"}),!this.state.loggedIn&&Object(p.jsx)(P.a.Link,{href:"/register",children:"Register"})]})]})]})})}}]),a}(n.Component),A=a(49),F=a(50);var _=function(){return Object(p.jsx)(E,{className:"main-footer",children:Object(p.jsx)("div",{className:"footer-middle",children:Object(p.jsx)("div",{className:"container",children:Object(p.jsx)("div",{className:"footer-bottom",children:Object(p.jsxs)("p",{className:"text-xs-center",children:["\xa9",(new Date).getFullYear()," \u0160imon Borovsk\xfd - All Rights Reserved"]})})})})})},E=F.a.footer(s||(s=Object(A.a)(["\n    .footer-middle {\n        background: var(--dark);\n        padding-top: 1.5rem;\n        color: var(--white);\n        width: 100%;\n    }\n\n    .footer-bottom {\n        padding-bottom: 0.5rem;\n        text-align: center;\n    }\n"]))),I=function(t){Object(b.a)(a,t);var e=Object(m.a)(a);function a(){var t;return Object(h.a)(this,a),(t=e.call(this)).onChange=function(e){t.setState(Object(w.a)({},e.target.name,e.target.value))},t.onSubmit=function(e){e.preventDefault();var a={headers:{Authorization:v.reactLocalStorage.get("token")}};l.a.post("/api/auth",null,a).then((function(e){if("true"===e.data.data.user.isAdmin){var s={title:t.state.title,author:t.state.author,description:t.state.description,language:t.state.language,sourcecode:t.state.sourcecode,download:t.state.download,published_date:t.state.published_date,status:t.state.status};l.a.post("/api/projects",s,a).then((function(e){t.setState({title:"",author:"",description:"",language:"",sourcecode:"",published_date:"",status:"",download:""})})).catch((function(t){console.log("Error in CreateProject!")}))}}))},t.state={title:"",author:"",description:"",language:"",sourcecode:"",download:"",published_date:"",status:""},t}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var t=this,e={headers:{Authorization:v.reactLocalStorage.get("token")}};l.a.post("/api/auth",null,e).then((function(e){"false"===e.data.data.user.isAdmin&&t.props.history.push("/")})).catch((function(e){t.props.history.push("/")}))}},{key:"render",value:function(){return document.title="Create Project",Object(p.jsx)("div",{className:"container",children:Object(p.jsx)("div",{className:"row",children:Object(p.jsxs)("div",{className:"col-md-8 m-auto",children:[Object(p.jsx)("br",{}),Object(p.jsx)("h1",{className:"display-4 text-center",children:"Add Project"}),Object(p.jsx)("hr",{}),Object(p.jsxs)("form",{noValidate:!0,onSubmit:this.onSubmit,children:[Object(p.jsx)("div",{className:"form-group",children:Object(p.jsx)("input",{type:"text",placeholder:"Title of the Project",name:"title",className:"form-control",value:this.state.title,onChange:this.onChange})}),Object(p.jsx)("div",{className:"form-group",children:Object(p.jsx)("input",{type:"text",placeholder:"Author",name:"author",className:"form-control",value:this.state.author,onChange:this.onChange})}),Object(p.jsx)("div",{className:"form-group",children:Object(p.jsx)("input",{type:"text",placeholder:"Describe this project",name:"description",className:"form-control",value:this.state.description,onChange:this.onChange})}),Object(p.jsx)("div",{className:"form-group",children:Object(p.jsx)("input",{type:"text",placeholder:"Programming language",name:"language",className:"form-control",value:this.state.language,onChange:this.onChange})}),Object(p.jsx)("div",{className:"form-group",children:Object(p.jsx)("input",{type:"text",placeholder:"Date",name:"published_date",className:"form-control",value:this.state.published_date,onChange:this.onChange})}),Object(p.jsx)("div",{className:"form-group",children:Object(p.jsx)("input",{type:"text",placeholder:"Status",name:"status",className:"form-control",value:this.state.status,onChange:this.onChange})}),Object(p.jsx)("div",{className:"form-group",children:Object(p.jsx)("input",{type:"text",placeholder:"Source code",name:"sourcecode",className:"form-control",value:this.state.sourcecode,onChange:this.onChange})}),Object(p.jsx)("div",{className:"form-group",children:Object(p.jsx)("input",{type:"text",placeholder:"Download link",name:"download",className:"form-control",value:this.state.download,onChange:this.onChange})}),Object(p.jsx)("input",{type:"submit",className:"btn btn-outline-warning btn-block mt-4"})]})]})})})}}]),a}(n.Component),z=function(t){Object(b.a)(a,t);var e=Object(m.a)(a);function a(){var t;return Object(h.a)(this,a),(t=e.call(this)).onChange=function(e){t.setState(Object(w.a)({},e.target.name,e.target.value))},t.onSubmit=function(e){if(e.preventDefault(),t.state.password===t.state.confirmPassword){var a={username:t.state.username,password:t.state.password};l.a.post("/api/auth/register",a).then((function(e){t.props.history.push("/")})),t.setState({isSubmitted:!0})}else t.setState({errorMessage:"Passwords don't match."})},t.state={username:"",password:"",confirmPassword:"",errorMessage:"",isSubmitted:!1},t}return Object(u.a)(a,[{key:"render",value:function(){return document.title="Login",Object(p.jsx)("div",{className:"container",children:Object(p.jsx)("div",{className:"row",children:Object(p.jsxs)("div",{className:"col-md-8 m-auto",children:[Object(p.jsx)("br",{}),Object(p.jsx)("h1",{className:"display-4 text-center",children:"Register"}),Object(p.jsx)("hr",{}),Object(p.jsxs)("form",{noValidate:!0,onSubmit:this.onSubmit,children:[Object(p.jsx)("div",{className:"form-group",children:Object(p.jsx)("input",{type:"text",placeholder:"Username",name:"username",className:"form-control",value:this.state.username,onChange:this.onChange})}),Object(p.jsx)("div",{className:"form-group",children:Object(p.jsx)("input",{type:"password",placeholder:"Password",name:"password",className:"form-control",value:this.state.password,onChange:this.onChange})}),Object(p.jsx)("div",{className:"form-group",children:Object(p.jsx)("input",{type:"password",placeholder:"Confirm 3pssword",name:"confirmPassword",className:"form-control",value:this.state.confirmPassword,onChange:this.onChange})}),Object(p.jsx)("div",{className:"form-group",children:Object(p.jsx)("center",{children:Object(p.jsx)("p",{children:this.state.errorMessage})})}),Object(p.jsx)("input",{type:"submit",className:"btn btn-outline-warning btn-block mt-4"})]}),Object(p.jsx)("br",{}),Object(p.jsx)("br",{})]})})})}}]),a}(n.Component);var M=function(){return Object(p.jsxs)(d.a,{children:[Object(p.jsx)(D,{}),Object(p.jsxs)("div",{className:"Body",children:[Object(p.jsx)(j.a,{exact:!0,path:"/",component:O}),Object(p.jsx)(j.a,{exact:!0,path:"/projects",component:g}),Object(p.jsx)(j.a,{exact:!0,path:"/project/:id",component:N}),Object(p.jsx)(j.a,{exact:!0,path:"/edit/:id",component:C}),Object(p.jsx)(j.a,{exact:!0,path:"/create",component:I}),Object(p.jsx)(j.a,{exact:!0,path:"/login",component:y}),Object(p.jsx)(j.a,{exact:!0,path:"/register",component:z}),Object(p.jsx)(j.a,{exact:!0,path:"/about",component:k})]}),Object(p.jsx)(_,{})]})};l.a.defaults.withCredentials=!0;var T=function(){return Object(p.jsx)(M,{})},B=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,88)).then((function(e){var a=e.getCLS,s=e.getFID,n=e.getFCP,c=e.getLCP,o=e.getTTFB;a(t),s(t),n(t),c(t),o(t)}))};r.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(T,{})}),document.getElementById("root")),B()}},[[86,1,2]]]);
//# sourceMappingURL=main.4ccf6ee9.chunk.js.map