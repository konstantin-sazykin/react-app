(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{127:function(e,t,n){e.exports={music_wrapper:"Music_music_wrapper__1ky1O"}},128:function(e,t,n){e.exports={news_wrapper:"News_news_wrapper__3k69B"}},129:function(e,t,n){e.exports={settings_wrapper:"Settings_settings_wrapper__29Lz0"}},134:function(e,t,n){e.exports={preloader_wrapper:"Preloader_preloader_wrapper__JnKdf"}},135:function(e,t,n){e.exports=n.p+"static/media/preloader.a68cb559.svg"},137:function(e,t,n){e.exports={profile_wrapper:"Profile_profile_wrapper__1tftt"}},164:function(e,t,n){e.exports=n(289)},169:function(e,t,n){},17:function(e,t,n){e.exports={header:"Header_header__27AyQ",nav:"Header_nav__2HwFA",activeLink:"Header_activeLink__2pybe",loginBlock:"Header_loginBlock__3HKdj",userPhoto:"Header_userPhoto__2BNSW",logout:"Header_logout__2XlWI"}},289:function(e,t,n){"use strict";n.r(t);n(93),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var r=n(0),a=n.n(r),o=n(65),s=n.n(o),i=n(22),c=n(23),u=n(26),l=n(24),p=n(27),m=(n(169),n(10)),f=n(36),d=n(127),g=n.n(d),_=function(e){return a.a.createElement("div",{className:g.a.music_wrapper},a.a.createElement("p",null,"\u0417\u0434\u0435\u0441\u044c \u0441\u043a\u043e\u0440\u043e \u043f\u043e\u044f\u0432\u0438\u0442\u0441\u044f \u043d\u0430\u0448\u0430 \u043c\u0443\u0437\u044b\u043a\u0430"))},h=n(128),E=n.n(h),v=function(e){return a.a.createElement("div",{className:E.a.news_wrapper},a.a.createElement("p",null,"\u0417\u0434\u0435\u0441\u044c \u0441\u043a\u043e\u0440\u043e \u043f\u043e\u044f\u0432\u0438\u0442\u0441\u044f \u043a\u0430\u043a\u0430\u044f \u0442\u043e \u043d\u043e\u0432\u043e\u0441\u0442\u044c"))},b=n(129),O=n.n(b),w=function(e){return console.log(e.state),a.a.createElement("div",{className:O.a.settings_wrapper},a.a.createElement("p",null,"\u0417\u0434\u0435\u0441\u044c \u0441\u043a\u043e\u0440\u043e \u043f\u043e\u044f\u0432\u044f\u0442\u0441\u044f \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438"))},P=n(45),y=n(25);function j(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function S(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?j(n,!0).forEach((function(t){Object(y.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):j(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var N={dialogsData:[{id:1,name:"Ivan"},{id:2,name:"Marya"},{id:3,name:"Ilya"},{id:4,name:"Jon"},{id:5,name:"Frank"},{id:6,name:"Elsa"}],messagesData:[{id:1,message:"is not optimized"},{id:2,message:"Hello"},{id:3,message:"Privet kak dela?"},{id:4,message:"Panel is not defined"},{id:5,message:"This browser is old"},{id:6,message:"How are you?"}]},C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SEND_MESSAGE":var n=t.newMessageBody;return S({},e,{messagesData:[].concat(Object(P.a)(e.messagesData),[{id:6,message:n}])});default:return e}},k=n(30),I=n.n(k),T=function(e){var t="/dialogs/"+e.id;return a.a.createElement("div",{className:I.a.dialog+" "+I.a.active},a.a.createElement(m.b,{to:t},e.name))},D=function(e){return a.a.createElement("div",{className:I.a.message},e.message)},x=n(124),L=n(125),U=n(70),A=n(51),F=n.n(A),M=function(e){e.input;var t=e.meta,n=(e.child,Object(U.a)(e,["input","meta","child"])),r=t.touched&&t.error;return a.a.createElement("div",{className:F.a.formControl+" "+(r?F.a.error:"")},n.children,r&&a.a.createElement("span",null,t.error))},R=function(e){var t=e.input,n=(e.meta,e.child,Object(U.a)(e,["input","meta","child"]));return a.a.createElement(M,e,a.a.createElement("textarea",Object.assign({},t,n)))},z=function(e){var t=e.input,n=(e.meta,e.child,Object(U.a)(e,["input","meta","child"]));return a.a.createElement(M,e,a.a.createElement("input",Object.assign({},t,n)))},G=function(e){if(!e)return"*"},B=function(e){return function(t){if(t&&t.length>e)return"\u041c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u0430\u044f \u0434\u043b\u0438\u043d\u0430  ".concat(e," \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432")}},H=B(50),W=Object(L.a)({form:"dialogAddMessageForm"})((function(e){return a.a.createElement("form",{onSubmit:e.handleSubmit},a.a.createElement("div",null,a.a.createElement(x.a,{component:R,validate:[G,H],name:"newMessageBody",placeholder:"\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435"})),a.a.createElement("div",null,a.a.createElement("button",null,"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435")))})),J=function(e){var t=e.dialogsPage,n=t.dialogsData.map((function(e){return a.a.createElement(T,{name:e.name,id:e.id})})),r=t.messagesData.map((function(e){return a.a.createElement(D,{message:e.message})}));return a.a.createElement("div",{className:I.a.dialogs_wrapper},a.a.createElement("div",{className:I.a.dialogs_items},n),a.a.createElement("div",{className:I.a.messages},r,a.a.createElement(W,{onSubmit:function(t){e.sendMessage(t.newMessageBody)}})))},X=n(8),K=n(5),q=n(9),Q=n.n(q),Z=n(18),V=n(133).create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"e079602b-cde8-43ba-b94e-8d14ea8d2fc2"}}),Y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return V.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},$=function(e){return V.delete("/follow/".concat(e)).then((function(e){return e.data}))},ee=function(e){return V.post("/follow/".concat(e)).then((function(e){return e.data}))},te=function(e){return console.warn("\u0423\u0441\u0442\u0430\u0440\u0435\u0432\u0448\u0438\u0439 \u043c\u0435\u0442\u043e\u0434. \u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 object profileAPI"),ne.getProfile(e)},ne={getProfile:function(e){return V.get("/profile/"+e)},getStatus:function(e){return V.get("/profile/status/"+e)},updateStatus:function(e){return V.put("profile/status",{status:e})}},re=function(){return V("auth/me")},ae=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return V.post("auth/login",{email:e,password:t,rememberMe:n})},oe=function(){return V.delete("auth/login")},se=n(40);function ie(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function ce(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ie(n,!0).forEach((function(t){Object(y.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ie(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var ue={id:null,email:null,login:null,isFetching:!1,isAuth:!1},le=function(e,t,n,r){return{type:"SET_USER_DATA",payload:{userId:e,email:t,login:n,isAuth:r}}},pe=function(){return function(){var e=Object(Z.a)(Q.a.mark((function e(t){var n,r,a,o,s;return Q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,re();case 2:0===(n=e.sent).data.resultCode&&(r=n.data.data,a=r.id,o=r.email,s=r.login,t(le(a,o,s,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},me=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ue,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_USER_DATA":return ce({},e,{},t.payload);default:return e}},fe=Object(L.a)({form:"login"})((function(e){return a.a.createElement("form",{action:"",onSubmit:e.handleSubmit},a.a.createElement("div",null,a.a.createElement(x.a,{component:z,name:"email",placeholder:"Login",type:"text",validate:[G,de]})),a.a.createElement("div",null,a.a.createElement(x.a,{component:z,name:"password",placeholder:"Password",type:"password",validate:[G,de]})),a.a.createElement("div",null,a.a.createElement(x.a,{component:"input",name:"rememberMe",type:"checkbox",id:"rememberMe"}),a.a.createElement("label",{htmlFor:"rememberMe"},"\u0417\u0430\u043f\u043e\u043c\u043d\u0438\u0442\u044c \u043c\u0435\u043d\u044f")),e.error&&a.a.createElement("div",{className:F.a.formSummaryError},"error"),a.a.createElement("div",null,a.a.createElement("button",{type:"submit"},"\u0412\u043e\u0439\u0442\u0438")))})),de=B(25),ge=Object(X.b)((function(e){return{isAuth:e.auth.isAuth}}),{logIn:function(e,t,n){return function(){var r=Object(Z.a)(Q.a.mark((function r(a){var o,s;return Q.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,ae(e,t,n);case 2:0===(o=r.sent).data.resultCode?a(pe()):(s=o.data.messages.length>0?o.data.messages[0]:"Some error",a(Object(se.a)("login",{_error:s})));case 4:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()}})((function(e){return e.isAuth?a.a.createElement(f.a,{to:"/profile"}):a.a.createElement("div",null,a.a.createElement("h1",null,"Login"),a.a.createElement(fe,{onSubmit:function(t){e.logIn(t.email,t.password,t.rememberMe)}}))})),_e=function(e){return{isAuth:e.auth.isAuth}},he=function(e){var t=function(t){function n(){return Object(i.a)(this,n),Object(u.a)(this,Object(l.a)(n).apply(this,arguments))}return Object(p.a)(n,t),Object(c.a)(n,[{key:"render",value:function(){return this.props.isAuth?a.a.createElement(e,this.props):a.a.createElement(ge,null)}}]),n}(a.a.Component);return Object(X.b)(_e)(t)},Ee=Object(K.d)(Object(X.b)((function(e){return{dialogsPage:e.dialogsPage}}),(function(e){return{sendMessage:function(t){e(function(e){return{type:"SEND_MESSAGE",newMessageBody:e}}(t))}}})),he)(J);function ve(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function be(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ve(n,!0).forEach((function(t){Object(y.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ve(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Oe={users:[],pageSize:7,totalUsersCount:0,currentPage:1,isFetching:!0,followingInProgress:[]},we=function(e){return{type:"TOGGLE_IS_FETCHING",isFetching:e}},Pe=function(e,t){return{type:"TOGGLE_IS_FOLLOWING",isFetching:e,userId:t}},ye=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Oe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FOLLOW":return be({},e,{users:e.users.map((function(e){return e.id===t.userId?be({},e,{followed:!0}):e}))});case"SET_USERS":return be({},e,{users:t.users});case"UNFOLLOW":return be({},e,{users:e.users.map((function(e){return e.id===t.userId?be({},e,{followed:!1}):e}))});case"SET_CURRENT_PAGE":return be({},e,{currentPage:t.currentPage});case"SET_TOTAL_USERS_COUNT":return be({},e,{totalUsersCount:t.count});case"TOGGLE_IS_FETCHING":return be({},e,{isFetching:t.isFetching});case"TOGGLE_IS_FOLLOWING":return be({},e,{followingInProgress:t.isFetching?[].concat(Object(P.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!==t.userId}))});default:return e}},je=n(29),Se=n.n(je),Ne=n(54),Ce=n.n(Ne),ke=function(e){for(var t=Math.ceil(e.totalUsersCount/e.pageSize),n=[],r=1;r<=t;r++)n.push(r);return a.a.createElement("div",null,a.a.createElement("div",{className:Se.a.current},n.map((function(t){return a.a.createElement("span",{className:e.currentPage===t&&Se.a.selectedPage,onClick:function(n){e.onPageChanged(t)}},t)}))),e.users.map((function(t){return a.a.createElement("div",{className:Se.a.users_wrapper,key:t.id},a.a.createElement("div",null,a.a.createElement("div",null,a.a.createElement(m.b,{to:"/profile/"+t.id},a.a.createElement("img",{src:null!=t.photos.small?t.photos.small:Ce.a,alt:"User",className:Se.a.userPhoto}))),a.a.createElement("div",null,t.followed?a.a.createElement("button",{disabled:e.followingInProgress.some((function(e){return e===t.id})),className:Se.a.button,onClick:function(){e.unfollow(t.id)}},"\u041e\u0442\u043f\u0438\u0441\u0430\u0442\u044c\u0441\u044f"):a.a.createElement("button",{disabled:e.followingInProgress.some((function(e){return e===t.id})),className:Se.a.button,onClick:function(){e.follow(t.id)}},"\u041f\u043e\u0434\u043f\u0438\u0441\u0430\u0442\u044c\u0441\u044f"))),a.a.createElement("div",{className:Se.a.right_column},a.a.createElement("div",null,a.a.createElement("div",{className:Se.a.title},t.name),a.a.createElement("div",null,t.status)),a.a.createElement("div",{className:Se.a.location},a.a.createElement("div",null,"u.location.country"),a.a.createElement("div",null,"u.location.city"))))})))},Ie=n(134),Te=n.n(Ie),De=n(135),xe=n.n(De),Le=function(){return a.a.createElement("div",{className:Te.a.preloader_wrapper},a.a.createElement("img",{src:xe.a,alt:"please< wait"}))},Ue=n(136),Ae=Object(Ue.a)((function(e){return e.usersPage.users}),(function(e){return e})),Fe=function(e){return e.usersPage.pageSize},Me=function(e){return e.usersPage.totalUsersCount},Re=function(e){return e.usersPage.currentPage},ze=function(e){return e.usersPage.isFetching},Ge=function(e){return e.usersPage.followingInProgress},Be=function(e){function t(){var e,n;Object(i.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(a)))).onPageChanged=function(e){n.props.setCurrentPage(e),n.props.requestUsers(e,n.props.pageSize)},n}return Object(p.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.props.requestUsers(this.props.currentPage,this.props.pageSize)}},{key:"render",value:function(){return a.a.createElement(a.a.Fragment,null,this.props.isFetching?a.a.createElement(Le,null):null,a.a.createElement(ke,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,users:this.props.users,follow:this.props.follow,unfollow:this.props.unfollow,followingInProgress:this.props.followingInProgress}))}}]),t}(a.a.Component),He=Object(K.d)(he,Object(X.b)((function(e){return{users:Ae(e),pageSize:Fe(e),totalUsersCount:Me(e),currentPage:Re(e),isFetching:ze(e),followingInProgress:Ge(e)}}),{follow:function(e){return function(){var t=Object(Z.a)(Q.a.mark((function t(n){return Q.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(Pe(!0,e)),t.next=3,ee(e);case 3:0===t.sent.resultCode&&n({type:"FOLLOW",userId:e}),n(Pe(!1,e));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},unfollow:function(e){return function(){var t=Object(Z.a)(Q.a.mark((function t(n){return Q.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(Pe(!0,e)),t.next=3,$(e);case 3:0===t.sent.resultCode&&n({type:"UNFOLLOW",userId:e}),n(Pe(!1,e));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},setCurrentPage:function(e){return{type:"SET_CURRENT_PAGE",currentPage:e}},toggleFollowingInProgress:Pe,requestUsers:function(e,t){return function(){var n=Object(Z.a)(Q.a.mark((function n(r){var a;return Q.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(we(!0)),n.next=3,Y(e,t);case 3:a=n.sent,r(we(!1)),r({type:"SET_USERS",users:a.items}),r({type:"SET_TOTAL_USERS_COUNT",count:a.totalCount});case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}}))(Be),We=n(137),Je=n.n(We),Xe=n(31),Ke=n.n(Xe),qe=n(92),Qe=function(e){var t=Object(r.useState)(!1),n=Object(qe.a)(t,2),o=n[0],s=n[1],i=Object(r.useState)(e.status),c=Object(qe.a)(i,2),u=c[0],l=c[1];return Object(r.useEffect)((function(){l(e.status)}),[e.status]),a.a.createElement("div",null,!o&&a.a.createElement("div",null,a.a.createElement("div",{onClick:function(){s(!0)}},e.status||"-----")),o&&a.a.createElement("div",null,a.a.createElement("input",{type:"text",autoFocus:!0,onBlur:function(){s(!1),e.updateStatus(u)},onChange:function(e){l(e.currentTarget.value)},value:u})))},Ze=function(e){return e.profile?a.a.createElement("div",{className:Ke.a.profile_info_wrapper},a.a.createElement("div",{className:Ke.a.avatar},a.a.createElement("div",{className:Ke.a.avatar__wrapper},a.a.createElement("img",{alt:Ce.a,src:null!=e.profile.photos.large?e.profile.photos.large:Ce.a,className:Ke.a.avatar__wrapper__img})),a.a.createElement("button",{className:Ke.a.avatar__wrapper__button},"\u041f\u043e\u0434\u043f\u0438\u0441\u0430\u0442\u044c\u0441\u044f")),a.a.createElement("div",{className:Ke.a.info},a.a.createElement("div",{className:Ke.a.info__title},e.profile.fullName),a.a.createElement("div",{className:Ke.a.info__status},a.a.createElement(Qe,{status:e.status,updateStatus:e.updateStatus})))):a.a.createElement(Le,null)};function Ve(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Ye(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Ve(n,!0).forEach((function(t){Object(y.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ve(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var $e={posts:[{id:1,message:"My First message",likeCounts:0},{id:2,message:"My Second message",likeCounts:1},{id:3,message:"this message \u043d\u0435 \u043e \u0447\u0435\u043c",likeCounts:0},{id:4,message:"\u041a\u0430\u043a\u0438\u0435 \u0432\u0430\u0448\u0438 \u0434\u043e\u043a\u0430\u0437\u0430\u0442\u0435\u043b\u044c\u0441\u0442\u0432\u0430?",likeCounts:3},{id:1,message:"My First message",likeCounts:0},{id:2,message:"My Second message",likeCounts:1},{id:3,message:"React",likeCounts:0}],profile:null,status:"\u0441\u0442\u0430\u0442\u0443\u0441 \u0438\u0437 \u0441\u0442\u0435\u0439\u0442\u0430"},et=function(e){return{type:"SET_STATUS",status:e}},tt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$e,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD-POST":var n={id:5,message:t.newPostText,likesCount:4};return Ye({},e,{posts:[].concat(Object(P.a)(e.posts),[n]),newPostText:""});case"SET_USER_PROFILE":return Ye({},e,{profile:t.profile});case"SET_STATUS":return Ye({},e,{status:t.status});case"DELETE_POST":return Ye({},e,{posts:e.posts.filter((function(e){return e.id!==t.postId}))});default:return e}},nt=n(55),rt=n.n(nt),at=n(56),ot=n.n(at),st=function(e){return a.a.createElement("div",{className:ot.a.post},a.a.createElement("div",{className:ot.a.id__wrapper},"# ",e.id," "),e.message,";",a.a.createElement("div",{className:ot.a.heart__wrapper}," \u2764 ",a.a.createElement("span",{className:ot.a.heartCount},e.likeCounts)," "))},it=B(10),ct=a.a.memo((function(e){var t=e.posts.map((function(e){return a.a.createElement(st,{message:e.message,likeCounts:e.likeCounts,id:e.id})}));return a.a.createElement("div",{className:rt.a.postsBlock},a.a.createElement(ut,{onSubmit:function(t){e.addPost(t.newPostText)}}),a.a.createElement("div",{className:rt.a.posts},t))})),ut=Object(L.a)({form:"ProfileAddNewPostForm"})((function(e){return a.a.createElement("form",{className:rt.a.addPost,onSubmit:e.handleSubmit},a.a.createElement("div",null,a.a.createElement(x.a,{component:R,name:"newPostText",placeholder:"\u041f\u043e\u0434\u0435\u043b\u0438\u0442\u0435\u0441\u044c \u0441\u0432\u043e\u0438\u043c\u0438 \u043c\u044b\u0441\u043b\u044f\u043c\u0438",validate:[G,it]})),a.a.createElement("div",null,a.a.createElement("button",{className:rt.a.button},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0437\u0430\u043f\u0438\u0441\u044c")))})),lt=ct,pt=Object(X.b)((function(e){return{posts:e.profilePage.posts,newPostText:e.profilePage.newPostText}}),(function(e){return{addPost:function(t){e(function(e){return{type:"ADD-POST",newPostText:e}}(t))}}}))(lt),mt=function(e){return a.a.createElement("div",{className:Je.a.profile_wrapper},a.a.createElement(Ze,{profile:e.profile,status:e.status,updateStatus:e.updateStatus}),a.a.createElement(pt,null))},ft=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.match.params.userId;e||(e=this.props.authorisedUserId),this.props.getUserProfile(e),this.props.getStatus(e)}},{key:"render",value:function(){return a.a.createElement(mt,Object.assign({},this.props,{profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus}))}}]),t}(a.a.Component),dt=Object(K.d)(Object(X.b)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,authorisedUserId:e.auth.userId,state:e.auth.isAuth}}),{getUserProfile:function(e){return function(){var t=Object(Z.a)(Q.a.mark((function t(n){var r;return Q.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,te(e);case 2:r=t.sent,n({type:"SET_USER_PROFILE",profile:r.data});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},getStatus:function(e){return function(){var t=Object(Z.a)(Q.a.mark((function t(n){var r;return Q.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,ne.getStatus(e);case 2:r=t.sent,n(et(r.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},updateStatus:function(e){return function(){var t=Object(Z.a)(Q.a.mark((function t(n){return Q.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,ne.updateStatus(e);case 2:0===t.sent.data.resultCode&&n(et(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}),f.f,he)(ft),gt=n(17),_t=n.n(gt),ht=function(e){return a.a.createElement("header",{className:_t.a.header},a.a.createElement("div",{className:_t.a.loginBlock},a.a.createElement("div",{className:_t.a.userPhoto}),e.isAuth?a.a.createElement("div",null,e.login," - ",a.a.createElement("span",{onClick:e.logout,className:_t.a.logout},"\u0412\u044b\u0439\u0442\u0438")," "):a.a.createElement(m.b,{to:"/login"},"Login")),a.a.createElement("nav",{className:_t.a.nav},a.a.createElement("div",null,a.a.createElement(m.b,{to:"/profile",activeClassName:_t.a.activeLink,className:_t.a.link},"\u041f\u0440\u043e\u0444\u0438\u043b\u044c")),a.a.createElement("div",null,a.a.createElement(m.b,{to:"/messages",activeClassName:_t.a.activeLink},"\u0421\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f")),a.a.createElement("div",null,a.a.createElement(m.b,{to:"/news",activeClassName:_t.a.activeLink},"\u041d\u043e\u0432\u043e\u0441\u0442\u0438")),a.a.createElement("div",null,a.a.createElement(m.b,{to:"/music",activeClassName:_t.a.activeLink},"\u041c\u0443\u0437\u044b\u043a\u0430")),a.a.createElement("div",null,a.a.createElement(m.b,{to:"/settings",activeClassName:_t.a.activeLink},"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438")),a.a.createElement("div",null,a.a.createElement(m.b,{to:"/users",activeClassName:_t.a.activeLink},"\u041d\u0430\u0439\u0442\u0438 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439"))))},Et=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return a.a.createElement(ht,this.props)}}]),t}(a.a.Component),vt=Object(X.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{logout:function(){return function(){var e=Object(Z.a)(Q.a.mark((function e(t){return Q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,oe();case 2:0===e.sent.data.resultCode&&t(le(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(Et);function bt(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Ot(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?bt(n,!0).forEach((function(t){Object(y.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):bt(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var wt={initialized:!1},Pt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:wt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INITIALIZED_SUCCESS":return Ot({},e,{initialized:!0});default:return e}},yt={},jt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:yt;arguments.length>1&&arguments[1];return e},St=n(138),Nt=n(126),Ct=Object(K.c)({profilePage:tt,dialogsPage:C,sideBar:jt,usersPage:ye,auth:me,form:Nt.a,app:Pt}),kt=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||K.d,It=Object(K.e)(Ct,kt(Object(K.a)(St.a))),Tt=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?a.a.createElement(m.a,null,a.a.createElement("div",{className:"app-wrapper"},a.a.createElement(vt,null),a.a.createElement("div",{className:"app-wrapper_content"},a.a.createElement(f.b,{path:"/profile/:userId?",render:function(){return a.a.createElement(dt,null)}}),a.a.createElement(f.b,{path:"/messages",render:function(){return a.a.createElement(Ee,null)}}),a.a.createElement(f.b,{path:"/users",render:function(){return a.a.createElement(He,null)}}),a.a.createElement(f.b,{path:"/login",render:function(){return a.a.createElement(ge,null)}}),a.a.createElement(f.b,{path:"/news",component:v}),a.a.createElement(f.b,{path:"/music",component:_}),a.a.createElement(f.b,{path:"/settings",component:w})))):a.a.createElement(Le,null)}}]),t}(a.a.Component),Dt=Object(K.d)(f.f,Object(X.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(e){e(pe()).then((function(){e({type:"INITIALIZED_SUCCESS"})}))}}}))(Tt),xt=function(e){return a.a.createElement(m.a,null,a.a.createElement(X.a,{store:It},a.a.createElement(Dt,null)))};s.a.render(a.a.createElement(xt,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},29:function(e,t,n){e.exports={userPhoto:"users_userPhoto__3rN1I",users_wrapper:"users_users_wrapper__3a0c4",right_column:"users_right_column__3pllQ",title:"users_title__3K4sX",location:"users_location__25vc6",selectedPage:"users_selectedPage__2kx5h",current:"users_current__RuphX",button:"users_button__4kgGU"}},30:function(e,t,n){e.exports={dialogs_wrapper:"Dialogs_dialogs_wrapper__-PvBF",dialogs_items:"Dialogs_dialogs_items__3G-ME",active:"Dialogs_active__RNltn",dialog:"Dialogs_dialog__mELum",messages:"Dialogs_messages__1cQ-E",message:"Dialogs_message__51ft0"}},31:function(e,t,n){e.exports={profile_info_wrapper:"ProfileInfo_profile_info_wrapper__1InUJ",avatar:"ProfileInfo_avatar__388gX",avatar__wrapper:"ProfileInfo_avatar__wrapper__23ChC",avatar__wrapper__img:"ProfileInfo_avatar__wrapper__img__9-ecq",avatar__wrapper__button:"ProfileInfo_avatar__wrapper__button__18_z0",info:"ProfileInfo_info__fgTRh",info__title:"ProfileInfo_info__title__2ZJtN",info__status:"ProfileInfo_info__status__T99cN"}},51:function(e,t,n){e.exports={formControl:"FormControls_formControl__2GrKF",error:"FormControls_error__3awJv",formSummaryError:"FormControls_formSummaryError__2ePWw"}},54:function(e,t,n){e.exports=n.p+"static/media/user.5648f452.png"},55:function(e,t,n){e.exports={postsBlock:"MyPosts_postsBlock__1pOF-",posts:"MyPosts_posts__28zOY",button:"MyPosts_button__2vNlU",addPost:"MyPosts_addPost__2e2l2"}},56:function(e,t,n){e.exports={post:"Post_post__3kFXW",id__wrapper:"Post_id__wrapper__3TVyd",heart__wrapper:"Post_heart__wrapper__2x_yj",heartCount:"Post_heartCount__2E3CQ"}},93:function(e,t,n){}},[[164,1,2]]]);
//# sourceMappingURL=main.c4277814.chunk.js.map