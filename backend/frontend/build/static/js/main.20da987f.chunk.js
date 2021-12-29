(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{109:function(t,e,a){"use strict";a.r(e);var s,n=a(1),c=a.n(n),o=a(27),r=a.n(o),i=(a(80),a(21),a(6)),l=a.n(i),d=a(30),j=a(10),h=a(11),u=a(12),b=a(14),m=a(13),p=a(2),O=function(t){Object(b.a)(a,t);var e=Object(m.a)(a);function a(){return Object(h.a)(this,a),e.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return document.title="Home",Object(p.jsx)("div",{className:"container",children:Object(p.jsx)("div",{className:"row",children:Object(p.jsxs)("div",{className:"col-md-12",children:[Object(p.jsx)("br",{}),Object(p.jsx)("h2",{className:"display-4 text-center",children:"Welcome"}),Object(p.jsx)("hr",{})]})})})}}]),a}(n.Component),x=function(t){var e=t.project;return Object(p.jsx)("div",{className:"project-container",children:Object(p.jsxs)("div",{className:"desc",children:[Object(p.jsx)("h2",{children:Object(p.jsx)(d.b,{to:"/project/".concat(e._id),children:Object(p.jsxs)("h4",{children:[e.title," | ",e.language]})})}),Object(p.jsx)("br",{}),Object(p.jsx)("p",{children:e.description}),Object(p.jsx)("br",{}),Object(p.jsx)("p",{children:e.status})]})})},g=a(9),f=a(67),v=a(39),N=function(t){Object(b.a)(a,t);var e=Object(m.a)(a);function a(t){var s;return Object(h.a)(this,a),(s=e.call(this,t)).loadProjects=function(t){l.a.get("/api/projects").then((function(t){"Title"==g.reactLocalStorage.get("sort")?s.setState({projects:t.data.sort((function(t,e){return t.published_date>e.published_date?1:-1}))}):"Date"==g.reactLocalStorage.get("sort")&&s.setState({projects:t.data.sort((function(t,e){return new Date(t.published_date.split("/").reverse())>new Date(e.published_date.split("/").reverse())?-1:1}))})})).catch((function(t){console.log("Error from ShowProjectList")}))},s.createProject=function(t){var e={headers:{Authorization:g.reactLocalStorage.get("token")}};l.a.post("/api/auth",null,e).then((function(t){"true"===t.data.data.user.isAdmin&&s.props.history.push("/create")}))},s.onSortSelect=function(t){g.reactLocalStorage.set("sort",t),s.setState({sort:t}),window.location.reload(!1)},s.state={projects:[],isAdmin:!1,sort:g.reactLocalStorage.get("sort")},s}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var t=this;null==g.reactLocalStorage.get("sort")&&g.reactLocalStorage.set("sort","Title");var e={headers:{Authorization:g.reactLocalStorage.get("token")}};l.a.post("/api/auth",null,e).then((function(e){"true"===e.data.data.user.isAdmin&&t.setState({isAdmin:!0})})),this.loadProjects()}},{key:"render",value:function(){var t,e=this.state.projects;return document.title="Projects",t=e?e.map((function(t,e){return Object(p.jsx)("div",{className:"container",children:Object(p.jsx)(x,{project:t},e)})})):"there is no project record!",Object(p.jsx)("div",{className:"ShowProjectList",children:Object(p.jsxs)("div",{className:"container",children:[Object(p.jsxs)("div",{className:"row",children:[Object(p.jsxs)("div",{className:"col-md-12",children:[Object(p.jsx)("br",{}),Object(p.jsx)("h2",{className:"display-4 text-center",children:"Project List"}),Object(p.jsx)("hr",{}),this.state.isAdmin&&Object(p.jsx)("button",{onClick:this.createProject.bind(),className:"btn btn-outline-info btn-lg btn-block",children:"Create Project"}),Object(p.jsx)("center",{children:Object(p.jsxs)(f.a,{onSelect:this.onSortSelect,id:"dropdown-basic-button",variant:"secondary",title:"Sorted by "+this.state.sort,children:[Object(p.jsx)(v.a.Item,{eventKey:"Title",children:"Title"}),Object(p.jsx)(v.a.Item,{eventKey:"Date",children:"Date"})]})})]}),Object(p.jsx)("br",{})]}),Object(p.jsx)("div",{className:"list",children:t})]})})}}]),a}(n.Component),w=a(24),S=a(69),C=a(47),k=function(t){var e=t.comment;return Object(p.jsx)("div",{className:"comment-container",children:Object(p.jsxs)("div",{className:"comment",children:[Object(p.jsx)("h2",{children:Object(p.jsxs)("h3",{children:[e.author,", ",e.published_date," ",Object(p.jsx)(C.b,{onClick:function(){var t={headers:{Authorization:g.reactLocalStorage.get("token")}};l.a.post("/api/auth",null,t).then((function(t){t.data.data.user.username!==e.author&&"true"!==t.data.data.user.isAdmin||l.a.delete("/api/comments/"+e.project,{headers:{Authorization:g.reactLocalStorage.get("token")},data:{project:e.project,author:e.author,description:e.description,published_date:e.published_date}}).then((function(t){window.location.reload(!1)})).catch((function(t){console.log("Error in Delete Comment!")}))}))}.bind()})]})}),Object(p.jsx)("br",{}),Object(p.jsx)("p",{children:e.description})]})})},y=a(68),L=a.n(y),P=function(t){Object(b.a)(a,t);var e=Object(m.a)(a);function a(t){var s;return Object(h.a)(this,a),(s=e.call(this,t)).editPage=function(t){var e={headers:{Authorization:g.reactLocalStorage.get("token")}};l.a.post("/api/auth",null,e).then((function(t){"true"===t.data.data.user.isAdmin&&s.props.history.push("/edit/"+s.props.match.params.id)}))},s.onChange=function(t){s.setState(Object(w.a)({},t.target.name,t.target.value))},s.createComment=function(t){t.preventDefault();var e={headers:{Authorization:g.reactLocalStorage.get("token")}};l.a.post("/api/auth",null,e).then((function(t){if(t.data.data.user){var a={author:t.data.data.user.username,description:s.state.description,published_date:L()().format("DD/MM/YYYY")};l.a.post("/api/comments/"+s.props.match.params.id,a,e).then((function(t){s.setState({description:""}),window.location.reload(!1)})).catch((function(t){console.log("Error in Create Comment!")}))}}))},s.state={project:{},comments:[],isAdmin:!1,description:"",loggedIn:!1},s}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var t=this;this.setState({comments:[]});var e={headers:{Authorization:g.reactLocalStorage.get("token")}};l.a.post("/api/auth",null,e).then((function(e){"true"===e.data.data.user.isAdmin&&t.setState({isAdmin:!0}),e.data.data.user&&t.setState({loggedIn:!0})})),l.a.get("/api/projects/"+this.props.match.params.id).then((function(e){t.setState({project:e.data})})).catch((function(t){console.log("Error from ShowProjectDetails")})),l.a.get("/api/comments/"+this.props.match.params.id).then((function(e){t.setState({comments:e.data})})).catch((function(t){console.log("Error from Comments")}))}},{key:"render",value:function(){var t=this,e=this.state.project;document.title=e.title;var a,s=Object(p.jsx)(S.a,{hover:!0,variant:"dark",responsive:"sm",children:Object(p.jsxs)("tbody",{children:[Object(p.jsxs)("tr",{children:[Object(p.jsx)("th",{scope:"row"}),Object(p.jsx)("td",{children:"Title"}),Object(p.jsx)("td",{children:e.title})]}),Object(p.jsxs)("tr",{children:[Object(p.jsx)("th",{scope:"row"}),Object(p.jsx)("td",{children:"Author"}),Object(p.jsx)("td",{children:e.author})]}),Object(p.jsxs)("tr",{children:[Object(p.jsx)("th",{scope:"row"}),Object(p.jsx)("td",{children:"Published Date"}),Object(p.jsx)("td",{children:e.published_date})]}),Object(p.jsxs)("tr",{children:[Object(p.jsx)("th",{scope:"row"}),Object(p.jsx)("td",{children:"Description"}),Object(p.jsx)("td",{children:e.description})]}),Object(p.jsxs)("tr",{children:[Object(p.jsx)("th",{scope:"row"}),Object(p.jsx)("td",{children:"Programming language"}),Object(p.jsx)("td",{children:e.language})]}),Object(p.jsxs)("tr",{children:[Object(p.jsx)("th",{scope:"row"}),Object(p.jsx)("td",{children:"Status"}),Object(p.jsxs)("td",{children:[e.status," "]})]}),e.sourcecode&&Object(p.jsxs)("tr",{children:[Object(p.jsx)("th",{scope:"row"}),Object(p.jsx)("td",{children:"Source code"}),Object(p.jsx)("td",{children:Object(p.jsx)(d.b,{to:{pathname:e.sourcecode},target:"_blank",children:e.sourcecode})})]}),e.download&&Object(p.jsxs)("tr",{children:[Object(p.jsx)("th",{scope:"row"}),Object(p.jsx)("td",{children:"Download link"}),Object(p.jsx)("td",{children:Object(p.jsx)(d.b,{to:{pathname:e.download},target:"_blank",children:e.download})})]})]})}),n=this.state.comments;return a=n?n.map((function(e,a){return Object(p.jsx)("div",{className:"container",children:Object(p.jsx)(k,{comment:e,project:t.props.match.params.id},a)})})):"there is no project record!",Object(p.jsxs)("div",{className:"container details-container",children:[Object(p.jsx)("div",{className:"row",children:Object(p.jsxs)("div",{className:"col-md-8 m-auto",children:[Object(p.jsx)("br",{}),Object(p.jsx)("h1",{className:"display-4 text-center",children:e.title}),Object(p.jsx)("hr",{})]})}),Object(p.jsxs)("div",{children:[s,this.state.isAdmin&&Object(p.jsxs)("div",{children:[Object(p.jsx)("br",{}),Object(p.jsx)("br",{}),Object(p.jsx)("button",{onClick:this.editPage.bind(),className:"btn btn-outline-info btn-lg btn-block",children:"Edit Project"}),Object(p.jsx)("br",{}),Object(p.jsx)("br",{})]})]}),Object(p.jsx)("br",{}),Object(p.jsx)("br",{}),Object(p.jsx)("h2",{className:"text-center",children:"Comments"}),Object(p.jsx)("hr",{}),this.state.loggedIn&&Object(p.jsxs)("div",{children:[Object(p.jsxs)("form",{noValidate:!0,onSubmit:this.createComment.bind(),children:[Object(p.jsx)("div",{className:"form-group",children:Object(p.jsx)("input",{type:"text",placeholder:"Comment",name:"description",className:"form-control",value:this.state.description,onChange:this.onChange})}),Object(p.jsx)("input",{type:"submit",className:"btn btn-outline-warning btn-block mt-3"})]}),Object(p.jsx)("br",{}),Object(p.jsx)("br",{})]}),Object(p.jsx)("div",{className:"comment-list",children:a}),Object(p.jsx)("br",{}),Object(p.jsx)("br",{})]})}}]),a}(n.Component),A=function(t){Object(b.a)(a,t);var e=Object(m.a)(a);function a(t){var s;return Object(h.a)(this,a),(s=e.call(this,t)).onChange=function(t){s.setState(Object(w.a)({},t.target.name,t.target.value))},s.deleteProject=function(t){var e={headers:{Authorization:g.reactLocalStorage.get("token")}};l.a.post("/api/auth",null,e).then((function(t){if("true"===t.data.data.user.isAdmin){s.state.title,s.state.author,s.state.description,s.state.language,s.state.sourcecode,s.state.download,s.state.status;l.a.delete("/api/projects/"+s.props.match.params.id,e).then((function(t){s.props.history.push("/projects")})).catch((function(t){console.log("Error in UpdateProject!")}))}}))},s.onSubmit=function(t){t.preventDefault();var e={headers:{Authorization:g.reactLocalStorage.get("token")}};l.a.post("/api/auth",null,e).then((function(t){if(t.data.data.user){var a={title:s.state.title,author:s.state.author,description:s.state.description,language:s.state.language,sourcecode:s.state.sourcecode,download:s.state.download,status:s.state.status};l.a.put("/api/projects/"+s.props.match.params.id,a,e).then((function(t){s.props.history.push("/projects/"+s.props.match.params.id)})).catch((function(t){console.log("Error in UpdateProject!")}))}}))},s.state={title:"",author:"",description:"",language:"",sourcecode:"",published_date:""},s}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var t=this,e={headers:{Authorization:g.reactLocalStorage.get("token")}};l.a.post("/api/auth",null,e).then((function(e){"true"===e.data.data.user.isAdmin?l.a.get("/api/projects/"+t.props.match.params.id).then((function(e){t.setState({title:e.data.title,author:e.data.author,description:e.data.description,language:e.data.language,sourcecode:e.data.sourcecode,download:e.data.download,status:e.data.status})})).catch((function(t){console.log("Error from UpdateProject")})):t.props.history.push("/")})).catch((function(e){t.props.history.push("/")}))}},{key:"render",value:function(){return document.title="Edit "+this.state.title.toString(),Object(p.jsxs)("div",{className:"container",children:[Object(p.jsx)("div",{className:"row",children:Object(p.jsxs)("div",{className:"col-md-8 m-auto",children:[Object(p.jsx)("br",{}),Object(p.jsxs)("h1",{className:"display-4 text-center",children:["Edit Project - ",this.state.title]}),Object(p.jsx)("hr",{})]})}),Object(p.jsxs)("div",{className:"col-md-8 m-auto",children:[Object(p.jsxs)("form",{noValidate:!0,onSubmit:this.onSubmit,children:[Object(p.jsxs)("div",{className:"form-group",children:[Object(p.jsx)("label",{htmlFor:"title",children:"Title"}),Object(p.jsx)("input",{type:"text",placeholder:"Title of the Project",name:"title",className:"form-control",value:this.state.title,onChange:this.onChange})]}),Object(p.jsxs)("div",{className:"form-group",children:[Object(p.jsx)("label",{htmlFor:"author",children:"Author"}),Object(p.jsx)("input",{type:"text",placeholder:"Author",name:"author",className:"form-control",value:this.state.author,onChange:this.onChange})]}),Object(p.jsxs)("div",{className:"form-group",children:[Object(p.jsx)("label",{htmlFor:"description",children:"Description"}),Object(p.jsx)("input",{type:"text",placeholder:"Describe this Project",name:"description",className:"form-control",value:this.state.description,onChange:this.onChange})]}),Object(p.jsxs)("div",{className:"form-group",children:[Object(p.jsx)("label",{htmlFor:"language",children:"Programming language"}),Object(p.jsx)("input",{type:"text",placeholder:"Programming language",name:"language",className:"form-control",value:this.state.language,onChange:this.onChange})]}),Object(p.jsxs)("div",{className:"form-group",children:[Object(p.jsx)("label",{htmlFor:"sourcecode",children:"Status"}),Object(p.jsx)("input",{type:"text",placeholder:"Status",name:"status",className:"form-control",value:this.state.status,onChange:this.onChange})]}),Object(p.jsxs)("div",{className:"form-group",children:[Object(p.jsx)("label",{htmlFor:"sourcecode",children:"Source code"}),Object(p.jsx)("input",{type:"text",placeholder:"Source code",name:"sourcecode",className:"form-control",value:this.state.sourcecode,onChange:this.onChange})]}),Object(p.jsxs)("div",{className:"form-group",children:[Object(p.jsx)("label",{htmlFor:"sourcecode",children:"Download link"}),Object(p.jsx)("input",{type:"text",placeholder:"Download link",name:"download",className:"form-control",value:this.state.download,onChange:this.onChange})]}),Object(p.jsx)("button",{type:"submit",className:"btn btn-outline-info btn-lg btn-block",children:"Update Project"}),Object(p.jsx)("button",{onClick:this.deleteProject.bind(),className:"btn btn-outline-danger btn-lg btn-block",children:"Delete Project"})]}),Object(p.jsx)("br",{}),Object(p.jsx)("br",{})]})]})}}]),a}(n.Component),D=function(t){Object(b.a)(a,t);var e=Object(m.a)(a);function a(){var t;return Object(h.a)(this,a),(t=e.call(this)).onChange=function(e){t.setState(Object(w.a)({},e.target.name,e.target.value))},t.onSubmit=function(e){e.preventDefault();var a={username:t.state.username,password:t.state.password};l.a.post("/api/auth/login",a).then((function(t){g.reactLocalStorage.set("token",t.data.token),window.location.reload(!1)}))},t.state={username:"",password:""},t}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var t=this,e={headers:{Authorization:g.reactLocalStorage.get("token")}};l.a.post("/api/auth",null,e).then((function(e){e.data.data.user&&t.props.history.push("/")}))}},{key:"render",value:function(){return document.title="Login",Object(p.jsx)("div",{className:"container",children:Object(p.jsx)("div",{className:"row",children:Object(p.jsxs)("div",{className:"col-md-8 m-auto",children:[Object(p.jsx)("br",{}),Object(p.jsx)("h1",{className:"display-4 text-center",children:"Login"}),Object(p.jsx)("hr",{}),Object(p.jsxs)("form",{noValidate:!0,onSubmit:this.onSubmit,children:[Object(p.jsx)("div",{className:"form-group",children:Object(p.jsx)("input",{type:"text",placeholder:"Username",name:"username",className:"form-control",value:this.state.username,onChange:this.onChange})}),Object(p.jsx)("div",{className:"form-group",children:Object(p.jsx)("input",{type:"password",placeholder:"Password",name:"password",className:"form-control",value:this.state.password,onChange:this.onChange})}),Object(p.jsx)("input",{type:"submit",className:"btn btn-outline-warning btn-block mt-4"})]}),Object(p.jsx)("br",{}),Object(p.jsx)("br",{})]})})})}}]),a}(n.Component),_=function(t){Object(b.a)(a,t);var e=Object(m.a)(a);function a(){return Object(h.a)(this,a),e.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return document.title="About",Object(p.jsx)("div",{className:"container",children:Object(p.jsx)("div",{className:"row",children:Object(p.jsxs)("div",{className:"col-md-12",children:[Object(p.jsx)("br",{}),Object(p.jsx)("h2",{className:"display-4 text-center",children:"About me"}),Object(p.jsx)("hr",{})]})})})}}]),a}(n.Component),z=a(41),E=a(22),M=a(70),F=a(55),I=function(t){Object(b.a)(a,t);var e=Object(m.a)(a);function a(t){var s;return Object(h.a)(this,a),(s=e.call(this,t)).state={loggedIn:!1},s}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var t=this,e={headers:{Authorization:g.reactLocalStorage.get("token")}};l.a.post("/api/auth",null,e).then((function(e){e.data.data.user&&t.setState({loggedIn:!0})}))}},{key:"logout",value:function(){var t={headers:{Authorization:g.reactLocalStorage.get("token")}};l.a.post("/api/auth",null,t).then((function(t){t.data.data.user&&(g.reactLocalStorage.remove("token"),window.location.reload(!1))}))}},{key:"render",value:function(){return Object(p.jsx)(z.a,{collapseOnSelect:!0,bg:"dark",variant:"dark",expand:"lg",children:Object(p.jsxs)(M.a,{children:[Object(p.jsx)(z.a.Brand,{href:"/",children:"\u0160imon Borovsk\xfd"}),Object(p.jsx)(z.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(p.jsxs)(z.a.Collapse,{id:"basic-navbar-nav",children:[Object(p.jsxs)(E.a,{className:"mr-auto",children:[Object(p.jsx)(E.a.Link,{href:"/",children:"Home"}),Object(p.jsx)(E.a.Link,{href:"/projects",children:"Projects"}),Object(p.jsx)(E.a.Link,{href:"/about",children:"About me"}),Object(p.jsxs)(E.a.Link,{href:"https://github.com/sb-17",className:"navlinkicon",children:[Object(p.jsx)(F.a,{size:20,className:"icon"}),"Github"]}),Object(p.jsxs)(E.a.Link,{href:"https://twitter.com/lostin_games",className:"navlinkicon",children:[Object(p.jsx)(F.b,{size:20,className:"icon"}),"Twitter"]}),Object(p.jsxs)(E.a.Link,{href:"https://discord.gg/9ERdXUBwEZ",className:"navlinkicon",children:[Object(p.jsx)(C.a,{size:20,className:"icon"}),"Discord"]})]}),Object(p.jsxs)(E.a,{className:"ml-auto",children:[this.state.loggedIn&&Object(p.jsx)(E.a.Link,{onClick:this.logout.bind(),children:"Log out"}),!this.state.loggedIn&&Object(p.jsx)(E.a.Link,{href:"/login",children:"Log in"}),!this.state.loggedIn&&Object(p.jsx)(E.a.Link,{href:"/register",children:"Register"})]})]})]})})}}]),a}(n.Component),T=a(71),B=a(72);var U=function(){return Object(p.jsx)(R,{className:"main-footer",children:Object(p.jsx)("div",{className:"footer-middle",children:Object(p.jsx)("div",{className:"container",children:Object(p.jsx)("div",{className:"footer-bottom",children:Object(p.jsxs)("p",{className:"text-xs-center",children:["\xa9",(new Date).getFullYear()," \u0160imon Borovsk\xfd - All Rights Reserved"]})})})})})},R=B.a.footer(s||(s=Object(T.a)(["\n    .footer-middle {\n        background: var(--dark);\n        padding-top: 1.5rem;\n        color: var(--white);\n        width: 100%;\n    }\n\n    .footer-bottom {\n        padding-bottom: 0.5rem;\n        text-align: center;\n    }\n"]))),V=function(t){Object(b.a)(a,t);var e=Object(m.a)(a);function a(){var t;return Object(h.a)(this,a),(t=e.call(this)).onChange=function(e){t.setState(Object(w.a)({},e.target.name,e.target.value))},t.onSubmit=function(e){e.preventDefault();var a={headers:{Authorization:g.reactLocalStorage.get("token")}};l.a.post("/api/auth",null,a).then((function(e){if("true"===e.data.data.user.isAdmin){var s={title:t.state.title,author:t.state.author,description:t.state.description,language:t.state.language,sourcecode:t.state.sourcecode,download:t.state.download,published_date:t.state.published_date,status:t.state.status};l.a.post("/api/projects",s,a).then((function(e){t.setState({title:"",author:"",description:"",language:"",sourcecode:"",published_date:"",status:"",download:""})})).catch((function(t){console.log("Error in CreateProject!")}))}}))},t.state={title:"",author:"",description:"",language:"",sourcecode:"",download:"",published_date:"",status:""},t}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var t=this,e={headers:{Authorization:g.reactLocalStorage.get("token")}};l.a.post("/api/auth",null,e).then((function(e){"false"===e.data.data.user.isAdmin&&t.props.history.push("/")})).catch((function(e){t.props.history.push("/")}))}},{key:"render",value:function(){return document.title="Create Project",Object(p.jsx)("div",{className:"container",children:Object(p.jsx)("div",{className:"row",children:Object(p.jsxs)("div",{className:"col-md-8 m-auto",children:[Object(p.jsx)("br",{}),Object(p.jsx)("h1",{className:"display-4 text-center",children:"Add Project"}),Object(p.jsx)("hr",{}),Object(p.jsxs)("form",{noValidate:!0,onSubmit:this.onSubmit,children:[Object(p.jsx)("div",{className:"form-group",children:Object(p.jsx)("input",{type:"text",placeholder:"Title of the Project",name:"title",className:"form-control",value:this.state.title,onChange:this.onChange})}),Object(p.jsx)("div",{className:"form-group",children:Object(p.jsx)("input",{type:"text",placeholder:"Author",name:"author",className:"form-control",value:this.state.author,onChange:this.onChange})}),Object(p.jsx)("div",{className:"form-group",children:Object(p.jsx)("input",{type:"text",placeholder:"Describe this project",name:"description",className:"form-control",value:this.state.description,onChange:this.onChange})}),Object(p.jsx)("div",{className:"form-group",children:Object(p.jsx)("input",{type:"text",placeholder:"Programming language",name:"language",className:"form-control",value:this.state.language,onChange:this.onChange})}),Object(p.jsx)("div",{className:"form-group",children:Object(p.jsx)("input",{type:"text",placeholder:"Date",name:"published_date",className:"form-control",value:this.state.published_date,onChange:this.onChange})}),Object(p.jsx)("div",{className:"form-group",children:Object(p.jsx)("input",{type:"text",placeholder:"Status",name:"status",className:"form-control",value:this.state.status,onChange:this.onChange})}),Object(p.jsx)("div",{className:"form-group",children:Object(p.jsx)("input",{type:"text",placeholder:"Source code",name:"sourcecode",className:"form-control",value:this.state.sourcecode,onChange:this.onChange})}),Object(p.jsx)("div",{className:"form-group",children:Object(p.jsx)("input",{type:"text",placeholder:"Download link",name:"download",className:"form-control",value:this.state.download,onChange:this.onChange})}),Object(p.jsx)("input",{type:"submit",className:"btn btn-outline-warning btn-block mt-4"})]})]})})})}}]),a}(n.Component),Y=function(t){Object(b.a)(a,t);var e=Object(m.a)(a);function a(){var t;return Object(h.a)(this,a),(t=e.call(this)).onChange=function(e){t.setState(Object(w.a)({},e.target.name,e.target.value))},t.onSubmit=function(e){if(e.preventDefault(),t.state.password===t.state.confirmPassword){var a={username:t.state.username,password:t.state.password};l.a.post("/api/auth/register",a).then((function(e){t.props.history.push("/login")})),t.setState({isSubmitted:!0})}else t.setState({errorMessage:"Passwords don't match."})},t.state={username:"",password:"",confirmPassword:"",errorMessage:"",isSubmitted:!1},t}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var t=this,e={headers:{Authorization:g.reactLocalStorage.get("token")}};l.a.post("/api/auth",null,e).then((function(e){e.data.data.user&&t.props.history.push("/")})).catch((function(t){}))}},{key:"render",value:function(){return document.title="Login",Object(p.jsx)("div",{className:"container",children:Object(p.jsx)("div",{className:"row",children:Object(p.jsxs)("div",{className:"col-md-8 m-auto",children:[Object(p.jsx)("br",{}),Object(p.jsx)("h1",{className:"display-4 text-center",children:"Register"}),Object(p.jsx)("hr",{}),Object(p.jsxs)("form",{noValidate:!0,onSubmit:this.onSubmit,children:[Object(p.jsx)("div",{className:"form-group",children:Object(p.jsx)("input",{type:"text",placeholder:"Username",name:"username",className:"form-control",value:this.state.username,onChange:this.onChange})}),Object(p.jsx)("div",{className:"form-group",children:Object(p.jsx)("input",{type:"password",placeholder:"Password",name:"password",className:"form-control",value:this.state.password,onChange:this.onChange})}),Object(p.jsx)("div",{className:"form-group",children:Object(p.jsx)("input",{type:"password",placeholder:"Confirm password",name:"confirmPassword",className:"form-control",value:this.state.confirmPassword,onChange:this.onChange})}),Object(p.jsx)("div",{className:"form-group",children:Object(p.jsx)("center",{children:Object(p.jsx)("p",{children:this.state.errorMessage})})}),Object(p.jsx)("input",{type:"submit",className:"btn btn-outline-warning btn-block mt-4"})]}),Object(p.jsx)("br",{}),Object(p.jsx)("br",{})]})})})}}]),a}(n.Component);var H=function(){return Object(p.jsxs)(d.a,{children:[Object(p.jsx)(I,{}),Object(p.jsxs)("div",{className:"Body",children:[Object(p.jsx)(j.a,{exact:!0,path:"/",component:O}),Object(p.jsx)(j.a,{exact:!0,path:"/projects",component:N}),Object(p.jsx)(j.a,{exact:!0,path:"/project/:id",component:P}),Object(p.jsx)(j.a,{exact:!0,path:"/edit/:id",component:A}),Object(p.jsx)(j.a,{exact:!0,path:"/create",component:V}),Object(p.jsx)(j.a,{exact:!0,path:"/login",component:D}),Object(p.jsx)(j.a,{exact:!0,path:"/register",component:Y}),Object(p.jsx)(j.a,{exact:!0,path:"/about",component:_})]}),Object(p.jsx)(U,{})]})};l.a.defaults.withCredentials=!0;var J=function(){return Object(p.jsx)(H,{})},K=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,114)).then((function(e){var a=e.getCLS,s=e.getFID,n=e.getFCP,c=e.getLCP,o=e.getTTFB;a(t),s(t),n(t),c(t),o(t)}))};r.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(J,{})}),document.getElementById("root")),K()},21:function(t,e,a){},80:function(t,e,a){}},[[109,1,2]]]);
//# sourceMappingURL=main.20da987f.chunk.js.map