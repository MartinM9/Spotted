(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,a){e.exports=a.p+"static/media/logo_transparent.2e89f665.png"},31:function(e,t,a){e.exports=a.p+"static/media/Beach.d80d9d93.mp4"},34:function(e,t,a){e.exports=a(73)},66:function(e,t,a){},67:function(e,t,a){},68:function(e,t,a){},69:function(e,t,a){},70:function(e,t,a){},71:function(e,t,a){},73:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(28),s=a.n(l),o=a(1),c=a(2),i=a(4),m=a(3),u=a(5),h=a(7),p=a(15),d=a.n(p),g=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),s=0;s<n;s++)l[s]=arguments[s];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).hamburger=r.a.createRef(),a.menu=r.a.createRef(),a.myFunction=function(){console.log(a.hamburger),a.hamburger.current.classList.toggle("change"),a.menu.current.classList.toggle("show")},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("nav",{className:"navbar"},r.a.createElement("div",{className:"logo-div"},r.a.createElement(h.a,{to:"/"},r.a.createElement("img",{src:d.a,alt:"Logo Spotted"}))),r.a.createElement("div",null,r.a.createElement("ul",{className:"navbar-menu"},r.a.createElement("li",null,r.a.createElement(h.a,{className:"anchor",to:"/all-spots"},"All spots")),r.a.createElement("li",null,r.a.createElement(h.a,{className:"anchor",to:"/sign-up"},"Sign up")),r.a.createElement("li",null,r.a.createElement(h.a,{className:"anchor",to:"/log-in"},"Log in"))),r.a.createElement("div",{ref:this.hamburger,id:"hamburger",onClick:this.myFunction},r.a.createElement("div",{className:"bar1"}),r.a.createElement("div",{className:"bar2"}),r.a.createElement("div",{className:"bar3"})),r.a.createElement("ul",{className:"nav-ul-menu",id:"menu",ref:this.menu},r.a.createElement("li",null,r.a.createElement(h.a,{className:"anchor",to:"/all-spots"},"All spots")),r.a.createElement("li",null,r.a.createElement(h.a,{className:"anchor",to:"/sign-up"},"Sign up")),r.a.createElement("li",null,r.a.createElement(h.a,{className:"anchor",to:"/log-in"},"Log in")))))}}]),t}(n.Component),f=a(6),E=a.n(f),v=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),s=0;s<n;s++)l[s]=arguments[s];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).hamburger=r.a.createRef(),a.menu=r.a.createRef(),a.myFunction=function(){console.log(a.hamburger),a.hamburger.current.classList.toggle("change"),a.menu.current.classList.toggle("show")},a.handleLogOut=function(){localStorage.clear(),E()({url:"".concat("https://spotted-co.herokuapp.com","/log-out"),method:"get",withCredentials:!0}).then(function(e){console.log(e)}).catch(function(e){console.log(e)})},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("nav",{className:"navbar"},r.a.createElement("div",{className:"logo-div"},r.a.createElement(h.a,{to:"/"},r.a.createElement("img",{src:d.a,alt:"Logo Spotted"}))),r.a.createElement("div",null,r.a.createElement("ul",{className:"navbar-menu"},r.a.createElement("li",null,r.a.createElement(h.a,{className:"anchor",to:"/all-spots"},"All spots")),r.a.createElement("li",null,r.a.createElement(h.a,{className:"anchor",to:"/profile"},"Profile")),r.a.createElement("li",null,r.a.createElement("a",{href:"/",onClick:this.handleLogOut,className:"anchor"},"Log out"))),r.a.createElement("div",{ref:this.hamburger,id:"hamburger",onClick:this.myFunction},r.a.createElement("div",{className:"bar1"}),r.a.createElement("div",{className:"bar2"}),r.a.createElement("div",{className:"bar3"})),r.a.createElement("ul",{className:"nav-ul-menu",id:"menu",ref:this.menu},r.a.createElement("li",null,r.a.createElement(h.a,{className:"anchor",to:"/all-spots"},"All spots")),r.a.createElement("li",null,r.a.createElement(h.a,{className:"anchor",to:"/profile"},"Profile")),r.a.createElement("li",null,r.a.createElement("a",{href:"/",onClick:this.handleLogOut,className:"anchor"},"Log out")))))}}]),t}(n.Component),b=a(31),N=a.n(b),y=function(e){var t=e.data;return console.log(t),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"news-div-mobile"},r.a.createElement("a",{href:t.link,rel:"noopener noreferrer",target:"_blank"},r.a.createElement("img",{src:t.thumbnail,alt:""})),r.a.createElement("div",{className:"data-title"},r.a.createElement("a",{href:t.link,rel:"noopener noreferrer",target:"_blank"},r.a.createElement("p",null,t.title)))))},C=(a(66),function(){return r.a.createElement("div",{className:"loader content"},r.a.createElement("div",{className:"spinner"}))}),S=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={youCar:[],isLoading:!0},a.componentDidMount=function(){E()({url:"https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.youtube.com%2Ffeeds%2Fvideos.xml%3Fuser%3DYouCarPress",method:"get",withCredentials:!1}).then(function(e){console.log(e),a.setState({youCar:[e.data.items[0],e.data.items[1],e.data.items[2]],isLoading:!1})}).catch(function(e){console.log(e)})},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.state.youCar.map(function(e){return r.a.createElement(y,{data:e})});return r.a.createElement(r.a.Fragment,null,this.state.isLoading&&r.a.createElement(C,null),r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"video-div"},r.a.createElement("div",{className:"layer"}),r.a.createElement("div",{className:"main-layer-content-div"},r.a.createElement("img",{src:d.a,alt:""}),r.a.createElement("p",null,"Spot it, share it, rate it and discuss.")),r.a.createElement("video",{muted:!0,autoPlay:!0,loop:!0},r.a.createElement("source",{src:N.a,type:"video/mp4"}))),r.a.createElement("main",{className:"news-div"},r.a.createElement("div",{className:"line-div"},r.a.createElement("div",{className:"h1-div"},"Latest news"),r.a.createElement("div",{className:"line"})),r.a.createElement("div",{className:"news-div-flex-container"},this.state.youCar.length>0&&e))))}}]),t}(n.Component),w=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("footer",{className:"footer"},r.a.createElement("i",{className:"fab fa-instagram instagram"}))}}]),t}(n.Component),O=a(14),j=a(9),k=Object(j.a)(),L=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={username:"",firstname:"",lastname:"",email:"",password:"",car:"",camera:""},a.handleChange=function(e){var t={};t[e.target.name]=e.target.value,a.setState(t)},a.handleSubmit=function(e){e.preventDefault(),E()({url:"".concat("https://spotted-co.herokuapp.com","/sign-up"),method:"post",data:a.state,withCredentials:!0}).then(function(e){console.log(e),k.push("/profile")}).catch(function(e){console.log(e)})},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("section",{className:"content"},r.a.createElement("div",{className:"signup-image-div"},r.a.createElement("h1",null,"Join the family!"),r.a.createElement("div",{className:"form-container"},r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("input",{required:!0,onChange:this.handleChange,className:"form-input",placeholder:"Username",type:"text",name:"username",value:this.state.username}),r.a.createElement("input",{required:!0,onChange:this.handleChange,className:"form-input",placeholder:"First name",type:"text",name:"firstname",value:this.state.firstname}),r.a.createElement("input",{required:!0,onChange:this.handleChange,className:"form-input",placeholder:"Last name",type:"text",name:"lastname",value:this.state.lastname}),r.a.createElement("input",{required:!0,onChange:this.handleChange,className:"form-input",placeholder:"Email",type:"email",name:"email",value:this.state.email}),r.a.createElement("input",{required:!0,onChange:this.handleChange,className:"form-input",placeholder:"Password",type:"password",name:"password",value:this.state.password}),r.a.createElement("input",{onChange:this.handleChange,className:"form-input",placeholder:"Car I drive",type:"text",name:"car",value:this.state.car}),r.a.createElement("input",{onChange:this.handleChange,className:"form-input",placeholder:"Camera/Smartphone I use",type:"text",name:"camera",value:this.state.camera}),r.a.createElement("input",{className:"submit-btn",type:"submit",value:"sign up"}))))))}}]),t}(n.Component),I=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={username:"",password:"",errMessage:""},a.handleChange=function(e){var t={};t[e.target.name]=e.target.value,a.setState(t)},a.handleSubmit=function(e){e.preventDefault(),E()({url:"".concat("https://spotted-co.herokuapp.com","/log-in"),method:"post",data:a.state,withCredentials:!0}).then(function(e){console.log(e),a.props.haveLoggedIn(!0,e.data.user),a.props.history.push("/profile")}).catch(function(e){console.log(e),a.setState({errMessage:e.response.data.errorMessage})})},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("section",{className:"content"},r.a.createElement("div",{className:"login-image-div"},r.a.createElement("h1",null,"Log in"),r.a.createElement("div",{className:"form-container"},r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("input",{onChange:this.handleChange,className:"form-input",placeholder:"Username",type:"text",name:"username",value:this.state.username}),r.a.createElement("input",{onChange:this.handleChange,className:"form-input",placeholder:"Password",type:"password",name:"password",value:this.state.password}),r.a.createElement("input",{className:"submit-btn",type:"submit",value:"log in"}),this.state.errMessage&&r.a.createElement("p",{className:"error-message"},this.state.errMessage))))))}}]),t}(n.Component),x=a(32),F=function(e){var t=e.component,a=e.loggedIn,n=e.user,l=Object(x.a)(e,["component","loggedIn","user"]);return r.a.createElement(O.b,Object.assign({},l,{render:function(e){return a?r.a.createElement(t,Object.assign({},e,{user:n})):r.a.createElement(O.a,{to:"/"})}}))},A=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).linkToEdit=function(){k.push("/profile/edit/".concat(a.props.user._id))},a.linkToShare=function(){k.push("/create-spot")},a.linkToMySpots=function(){k.push("/profile/".concat(a.props.user._id,"/spots"))},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("section",{className:"content"},r.a.createElement("div",{className:"profile-image-div"},r.a.createElement("h1",null,"What have you spotted today ",this.props.user.username,"?"),r.a.createElement("div",{className:"profile-buttons-div"},r.a.createElement("button",{className:"submit-btn-profile",onClick:this.linkToShare},"Share your spot!"),r.a.createElement("button",{className:"submit-btn-profile",onClick:this.linkToMySpots,user:this.props.user},"My spots"),r.a.createElement("button",{className:"submit-btn-profile",onClick:this.linkToEdit},"Edit your profile")))))}}]),t}(n.Component),D=E.a.create({baseURL:"".concat("https://spotted-co.herokuapp.com")}),M=function(e){throw e},T={service:D,handleUpload:function(e){return D.post("/upload",e).then(function(e){return e.data}).catch(M)},saveNewSpot:function(e,t){return D.post("/create-spot/".concat(t),e).then(function(e){return e.data}).catch(M)}},_=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={car:"",type:"",engine:"",horsepower:"",image:""},a.handleChange=function(e){var t={};t[e.target.name]=e.target.value,a.setState(t)},a.handleImageUpload=function(e){console.log("The file to be uploaded is: ",e.target.files[0]);var t=new FormData;t.append("image",e.target.files[0]),T.handleUpload(t).then(function(e){console.log("response is: ",e),a.setState({image:e.secure_url})}).catch(function(e){console.log("Error while uploading the file: ",e)})},a.handleSubmit=function(e){e.preventDefault(),T.saveNewSpot(a.state,a.props.user._id).then(function(e){console.log("added: ",e),a.props.addedSpot(a.state),a.props.history.push("/all-spots")}).catch(function(e){console.log("Error while adding the thing: ",e)})},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("section",{className:"content"},r.a.createElement("div",{className:"create-spot-container"},r.a.createElement("div",{className:"form-container-create-spot"},r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("input",{required:!0,onChange:this.handleChange,className:"form-input",value:this.state.car,name:"car",type:"text",placeholder:"Car: Lamborghini, Ferrari..."}),r.a.createElement("input",{required:!0,onChange:this.handleChange,className:"form-input",value:this.state.type,name:"type",type:"text",placeholder:"Type: Hurac\xe1n, 458..."}),r.a.createElement("input",{required:!0,onChange:this.handleChange,className:"form-input",value:this.state.engine,name:"engine",type:"text",placeholder:"Engine: 5.0 V8"}),r.a.createElement("input",{required:!0,onChange:this.handleChange,className:"form-input",value:this.state.horsepower,name:"horsepower",type:"text",placeholder:"Horsepower: 640"}),r.a.createElement("input",{required:!0,onChange:this.handleImageUpload,className:"form-input-file",type:"file"}),r.a.createElement("button",{className:"submit-btn",type:"submit"},"Upload"))),r.a.createElement("div",{className:"rules-div"},r.a.createElement("h2",null,"Rules for uploading"),r.a.createElement("ul",null,r.a.createElement("li",null,"The spot has to be spot-worthy. This means it has to be an exclusive car that you see less often on the road than a common Volkswagen Golf or Ford Focus."),r.a.createElement("li",null,"Every spotter can spot every car only once."),r.a.createElement("li",null,"The pictures must be of decent quality. Every image will be cropped to 1024px width and 768px height."))))))}}]),t}(n.Component),q=a(33),U=a.n(q),R=function(e){var t=e.comment;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"comment-div"},r.a.createElement("p",null,r.a.createElement("span",{className:"comment-author"},t.author.username,":")," ",r.a.createElement("span",{className:"comment"},t.comment))))},P=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).getSpotData=function(e){E()({url:"".concat("https://spotted-co.herokuapp.com","/single-spot/").concat(e),method:"get",withCredentials:!0}).then(function(e){console.log(e),a.setState({spot:e.data,isLoading:!1,ratings:e.data.ratings,allComments:e.data.comments})}).catch(function(e){console.log(e)})},a.deleteHandler=function(){E()({url:"".concat("https://spotted-co.herokuapp.com","/single-spot/").concat(a.props.match.params.id,"/delete"),method:"post",withCredentials:!0}).then(function(e){console.log(e)}).catch(function(e){console.log(e)}),k.push("/all-spots")},a.linkToMySpots=function(){k.push("/profile/".concat(a.state.spot.author._id,"/spots"))},a.ratingHandler=function(e){E()({url:"".concat("https://spotted-co.herokuapp.com","/single-spot/").concat(a.props.match.params.id),method:"post",data:{star:e},withCredentials:!0}).then(function(e){console.log(e),null!=e.data&&a.setState({ratings:e.data.ratings})}).catch(function(e){console.log(e)})},a.averageRating=function(){var e=a.state.ratings;return e.reduce(function(e,t){return e+t})/e.length},a.handleComment=function(e){a.setState({comment:e.target.value})},a.submitComment=function(e){e.preventDefault(),E()({url:"".concat("https://spotted-co.herokuapp.com","/single-spot/").concat(a.props.match.params.id,"/comment"),method:"post",data:{comment:a.state.comment},withCredentials:!0}).then(function(e){console.log(e)}).catch(function(e){console.log(e)})},a.state={spot:null,isLoading:!0,ratings:[],comment:"",allComments:[]},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.match.params.id;this.getSpotData(e)}},{key:"componentDidUpdate",value:function(e,t){t.comment.length>0&&this.getSpotData(this.props.match.params.id)}},{key:"render",value:function(){var e=this.state.spot,t=this.state.allComments.map(function(e){return r.a.createElement("div",{className:"all-comments-div"},r.a.createElement(R,{comment:e}))});return r.a.createElement(r.a.Fragment,null,this.state.isLoading&&r.a.createElement(C,null),e&&r.a.createElement("section",{className:"content"},r.a.createElement("div",{className:"single-spot-container"},r.a.createElement("div",{className:"line-div"},r.a.createElement("div",{className:"h1-div"},e.car," ",e.type),r.a.createElement("div",{className:"line"}),r.a.createElement("p",null,e.engine,", ",e.horsepower," HP ")),r.a.createElement("div",{className:"single-spot-container-spot"},r.a.createElement("div",{className:"single-spot-container-spot-img-div"},r.a.createElement("img",{src:e.image,alt:"Car"})),r.a.createElement("div",{className:"single-spot-container-spot-author-rating-wrapper"},r.a.createElement("div",{className:"single-spot-container-spot-author-div"},r.a.createElement("p",null,"Spotted by: ",r.a.createElement("span",{className:"spotter-name",onClick:this.linkToMySpots},e.author.username))),e.author._id===this.props.user._id&&r.a.createElement("button",{className:"delete-button",onClick:this.deleteHandler},"delete this spot"),r.a.createElement("div",{className:"rating-div"},r.a.createElement(U.a,{initialRating:this.state.ratings.length>0&&this.averageRating(),emptySymbol:"fa fa-star-o fa-2x gold",fullSymbol:"fa fa-star fa-2x gold",onClick:this.ratingHandler}))),r.a.createElement("div",{className:"single-spot-container-spot-comment-section"},r.a.createElement("form",{className:"comment-form",onSubmit:this.submitComment},r.a.createElement("input",{className:"comment-input",onChange:this.handleComment,type:"text",placeholder:"Your thoughts...",name:"comment",value:this.state.comment}),r.a.createElement("button",{className:"comment-button",type:"submit"},"Post the comment")),t)))))}}]),t}(n.Component),H=function(e){var t=e.spot,a=e.showSingleSpot,n=e.loggedIn;return r.a.createElement(r.a.Fragment,null,n&&r.a.createElement("div",{className:"car-image-div"},r.a.createElement("img",{onClick:function(e){return a(e,t._id)},src:t.image,alt:"Car"})),!n&&r.a.createElement("div",{className:"car-image-div-not-logged"},r.a.createElement("img",{src:t.image,alt:"Car"})))},J=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={allSpots:[],isLoading:!0,search:"",loggedIn:!1},a.showSingleSpot=function(e,t){k.push("/single-spot/".concat(t))},a.updateSearch=function(e){a.setState({search:e.target.value.substr(0,20)})},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;E()({url:"".concat("https://spotted-co.herokuapp.com","/all-spots"),method:"get",withCredentials:!0}).then(function(t){console.log(t),e.setState({allSpots:t.data,isLoading:!1,loggedIn:e.props.loggedIn})}).catch(function(e){console.log(e)})}},{key:"render",value:function(){var e=this,t=this.state.allSpots.filter(function(t){return-1!==t.car.toLowerCase().indexOf(e.state.search.toLowerCase())||-1!==t.type.toLowerCase().indexOf(e.state.search.toLowerCase())}).map(function(t){return r.a.createElement("div",{className:"all-spots-container-spot"},r.a.createElement(H,{spot:t,showSingleSpot:e.showSingleSpot,loggedIn:e.state.loggedIn}))});return r.a.createElement(r.a.Fragment,null,this.state.isLoading&&r.a.createElement(C,null),r.a.createElement("section",{className:"content"},r.a.createElement("input",{className:"search-field",placeholder:"Search...",onChange:this.updateSearch,type:"text",value:this.state.search}),r.a.createElement("div",{className:"all-spots-container"},this.state.allSpots.length>0&&t)))}}]),t}(n.Component),B=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={username:"",firstname:"",lastname:"",email:"",car:"",camera:""},a.handleChange=function(e){var t={};t[e.target.name]=e.target.value,a.setState(t)},a.handleSubmit=function(e){e.preventDefault(),E()({url:"".concat("https://spotted-co.herokuapp.com","/profile/edit/").concat(a.props.match.params.id),method:"post",data:a.state,withCredentials:!0}).then(function(e){console.log(e),k.push("/profile")}).catch(function(e){console.log(e)})},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("section",{className:"content"},r.a.createElement("div",{className:"signup-image-div"},r.a.createElement("h1",null,"Edit profile"),r.a.createElement("div",{className:"form-container"},r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("input",{onChange:this.handleChange,className:"form-input",placeholder:"Username",type:"text",name:"username",value:this.state.username}),r.a.createElement("input",{onChange:this.handleChange,className:"form-input",placeholder:"First name",type:"text",name:"firstname",value:this.state.firstname}),r.a.createElement("input",{onChange:this.handleChange,className:"form-input",placeholder:"Last name",type:"text",name:"lastname",value:this.state.lastname}),r.a.createElement("input",{onChange:this.handleChange,className:"form-input",placeholder:"Email",type:"email",name:"email",value:this.state.email}),r.a.createElement("input",{onChange:this.handleChange,className:"form-input",placeholder:"Car I drive",type:"text",name:"car",value:this.state.car}),r.a.createElement("input",{onChange:this.handleChange,className:"form-input",placeholder:"Camera/Smartphone I use",type:"text",name:"camera",value:this.state.camera}),r.a.createElement("input",{className:"submit-btn",type:"submit",value:"edit"}))))))}}]),t}(n.Component),W=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={user:null,isLoading:!0,loggedIn:!1},a.showSingleSpot=function(e,t){k.push("/single-spot/".concat(t))},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;E()({url:"".concat("https://spotted-co.herokuapp.com","/profile/").concat(this.props.match.params.id,"/spots"),method:"get",withCredentials:!0}).then(function(t){console.log(t),e.setState({user:t.data,isLoading:!1,loggedIn:e.props.loggedIn})}).catch(function(e){console.log(e)})}},{key:"render",value:function(){var e=this,t=null;return this.state.user&&(t=this.state.user.spots.map(function(t){return r.a.createElement("div",{className:"all-spots-container-spot"},r.a.createElement(H,{spot:t,showSingleSpot:e.showSingleSpot,loggedIn:e.state.loggedIn}))})),r.a.createElement(r.a.Fragment,null,this.state.isLoading&&r.a.createElement(C,null),r.a.createElement("section",{className:"content"},this.state.user&&r.a.createElement("div",{className:"heading-user-spots"},"All spots by ",this.state.user.username),r.a.createElement("div",{className:"all-spots-container"},this.state.user&&t)))}}]),t}(n.Component),V=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={loggedIn:!1,user:null,spot:null},a.haveLoggedIn=function(e,t){a.setState({loggedIn:e,user:t}),localStorage.setItem("state",JSON.stringify(a.state))},a.addedSpot=function(e){a.setState({spot:e})},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.setState(JSON.parse(localStorage.getItem("state")))}},{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,this.state.loggedIn&&r.a.createElement(v,{haveLoggedIn:this.haveLoggedIn}),!this.state.loggedIn&&r.a.createElement(g,null),r.a.createElement(O.d,null,r.a.createElement(O.b,{exact:!0,path:"/",component:S}),r.a.createElement(O.b,{path:"/sign-up",component:L}),r.a.createElement(O.b,{path:"/all-spots",render:function(t){return r.a.createElement(J,{loggedIn:e.state.loggedIn})}}),r.a.createElement(O.b,{path:"/log-in",render:function(){return r.a.createElement(I,{haveLoggedIn:e.haveLoggedIn,history:k})}}),r.a.createElement(O.b,{path:"/create-spot",render:function(){return r.a.createElement(_,{addedSpot:e.addedSpot,user:e.state.user,history:k})}}),r.a.createElement(O.b,{path:"/single-spot/:id",render:function(t){return r.a.createElement(P,Object.assign({},t,{user:e.state.user}))}}),r.a.createElement(O.b,{path:"/profile/:id/spots",render:function(t){return r.a.createElement(W,Object.assign({},t,{loggedIn:e.state.loggedIn}))}}),r.a.createElement(O.b,{path:"/profile/edit/:id",component:B}),r.a.createElement(F,{loggedIn:this.state.loggedIn,user:this.state.user,path:"/profile",component:A})),r.a.createElement(w,null))}}]),t}(n.Component);a(67),a(68),a(69),a(70),a(71),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(72);s.a.render(r.a.createElement(O.c,{history:k},r.a.createElement(V,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[34,1,2]]]);
//# sourceMappingURL=main.96c1e2f1.chunk.js.map