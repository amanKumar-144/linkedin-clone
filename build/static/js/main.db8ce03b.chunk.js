(this.webpackJsonplinkedin=this.webpackJsonplinkedin||[]).push([[0],{64:function(e,t,n){},65:function(e,t,n){},66:function(e,t,n){},67:function(e,t,n){},69:function(e,t,n){},79:function(e,t,n){},80:function(e,t,n){},81:function(e,t,n){},82:function(e,t,n){},83:function(e,t,n){},85:function(e,t,n){"use strict";n.r(t);var c=n(2),s=n.n(c),i=n(18),a=n.n(i),r=(n(64),n(65),n(17)),o=(n(66),n(45)),l=n.n(o),d=(n(67),n(3));var j=function(e){var t=e.Icon,n=e.title,c=e.color;return Object(d.jsxs)("div",{className:"inputOption",children:[Object(d.jsx)(t,{style:{color:c}}),Object(d.jsx)("h4",{children:n})]})},b=n(46),u=n.n(b),h=n(47),O=n.n(h),p=n(48),m=n.n(p),f=n(49),x=n.n(f),g=n(98),v=(n(69),n(40)),N=n.n(v),A=n(41),y=n.n(A),I=n(42),w=n.n(I),S=n(43),C=n.n(S),W=Object(c.forwardRef)((function(e,t){var n=e.name,c=e.description,s=e.message,i=e.photoUrl;return Object(d.jsxs)("div",{ref:t,className:"post",children:[Object(d.jsxs)("div",{className:"post__header",children:[Object(d.jsx)(g.a,{src:i,children:n[0]}),Object(d.jsxs)("div",{className:"post__info",children:[Object(d.jsx)("h2",{children:n}),Object(d.jsx)("p",{children:c})]})]}),Object(d.jsx)("div",{className:"post__body",children:Object(d.jsx)("p",{children:s})}),Object(d.jsxs)("div",{className:"post__buttons",children:[Object(d.jsx)(j,{Icon:N.a,title:"Like",color:"gray"}),Object(d.jsx)(j,{Icon:y.a,title:"Comment",color:"gray"}),Object(d.jsx)(j,{Icon:w.a,title:"Share",color:"gray"}),Object(d.jsx)(j,{Icon:C.a,title:"Send",color:"gray"})]})]})})),k=n(26),E=k.a.initializeApp({apiKey:"AIzaSyCCF86OjdbobYaPIox5GyIYdkKWNpyL29w",authDomain:"linkedin-4b842.firebaseapp.com",projectId:"linkedin-4b842",storageBucket:"linkedin-4b842.appspot.com",messagingSenderId:"10100755359",appId:"1:10100755359:web:e7495086e91a3393830baa",measurementId:"G-29VLTSV8L0"}).firestore(),R=k.a.auth(),B=n(14),_=n(31),Z=Object(_.b)({name:"user",initialState:{user:null},reducers:{login:function(e,t){e.user=t.payload},logout:function(e){e.user=null}}}),L=Z.actions,V=L.login,Q=L.logout,U=function(e){return e.user.user},J=Z.reducer,P=n(50);var F=function(){var e=Object(c.useState)([]),t=Object(r.a)(e,2),n=t[0],s=t[1],i=Object(c.useState)(""),a=Object(r.a)(i,2),o=a[0],b=a[1],h=Object(B.c)(U);return Object(c.useEffect)((function(){E.collection("posts").orderBy("timestamp","desc").onSnapshot((function(e){s(e.docs.map((function(e){return{id:e.id,data:e.data()}})))}))}),[]),Object(d.jsxs)("div",{className:"feed",children:[Object(d.jsxs)("div",{className:"feed__inputContainer",children:[Object(d.jsxs)("div",{className:"feed__input",children:[Object(d.jsx)(l.a,{}),Object(d.jsxs)("form",{children:[Object(d.jsx)("input",{value:o,onChange:function(e){return b(e.target.value)},type:"text"}),Object(d.jsx)("button",{type:"submit",onClick:function(e){e.preventDefault(),E.collection("posts").add({name:h.displayName,description:h.email,message:o,photoUrl:h.photoUrl||"",timestamp:k.a.firestore.FieldValue.serverTimestamp()}),b("")},children:"Send"})]})]}),Object(d.jsxs)("div",{className:"feed__inputOptions",children:[Object(d.jsx)(j,{title:"Photo",Icon:u.a,color:"#70B5F9"}),Object(d.jsx)(j,{title:"Video",Icon:O.a,color:"#E7A33E"}),Object(d.jsx)(j,{title:"Event",Icon:m.a,color:"#C0CBCD"}),Object(d.jsx)(j,{title:"Write Article",Icon:x.a,color:"#7FC15E"})]})]}),Object(d.jsx)(P.a,{children:n.map((function(e){var t=e.id,n=e.data;return Object(d.jsx)("div",{className:"feed__inputPost",children:Object(d.jsx)(W,{name:n.name,message:n.message,description:n.description,photoUrl:n.photoUrl,timestamp:n.timestamp},t)})}))})]})},T=(n(79),n(51)),X=n.n(T);n(80);var K=function(e){var t=e.avatar,n=e.Icon,c=e.title,s=e.onClick,i=Object(B.c)(U);return Object(d.jsxs)("div",{onClick:s,className:"headerOption",children:[n&&Object(d.jsx)(n,{className:"headerOption__icon"}),t&&Object(d.jsx)(g.a,{className:"headerOption__icon",children:null===i||void 0===i?void 0:i.email[0]}),Object(d.jsx)("h3",{className:"headerOption__title",children:c})]})},M=n(52),G=n.n(M),Y=n(53),q=n.n(Y),D=n(54),z=n.n(D),H=n(55),$=n.n(H),ee=n(56),te=n.n(ee);var ne=function(){Object(B.c)(U);var e=Object(B.b)();return Object(d.jsxs)("div",{className:"header",children:[Object(d.jsxs)("div",{className:"header__left",children:[Object(d.jsx)("img",{src:"https://yt3.ggpht.com/ytc/AAUvwnjXhBUljQjJm08Lceeb0KDgVt4Z8vkfEsbGtP1BUEs=s900-c-k-c0x00ffffff-no-rj",alt:"NoImage"}),Object(d.jsxs)("div",{className:"header__search",children:[Object(d.jsx)(X.a,{}),Object(d.jsx)("input",{type:"text"})]})]}),Object(d.jsxs)("div",{className:"header__right",children:[Object(d.jsx)(K,{Icon:G.a,title:"Home"}),Object(d.jsx)(K,{Icon:q.a,title:"My Network"}),Object(d.jsx)(K,{Icon:z.a,title:"Jobs"}),Object(d.jsx)(K,{Icon:$.a,title:"Messaging"}),Object(d.jsx)(K,{Icon:te.a,title:"Notifications"}),Object(d.jsx)(K,{avatar:!0,title:"Me",onClick:function(){e(Q),R.signOut()}})]})]})};n(81);var ce=function(){var e=Object(B.c)(U),t=function(e){return Object(d.jsxs)("div",{className:"sidebar__recentItem",children:[Object(d.jsx)("span",{className:"sidebar__hash",children:"#"}),Object(d.jsx)("p",{children:e})]})};return Object(d.jsxs)("div",{className:"sidebar",children:[Object(d.jsxs)("div",{className:"sidebar__top",children:[Object(d.jsx)("img",{src:"https://blog.paper.li/wp-content/uploads/2020/02/LinkedIn-banner-19-1024x256.png",alt:"No Image"}),Object(d.jsx)(g.a,{className:"sidebar__avatar",src:e.photoUrl,children:e.email[0]}),Object(d.jsx)("h2",{children:e.displayName}),Object(d.jsx)("h4",{children:e.email})]}),Object(d.jsxs)("div",{className:"sidebar__stats",children:[Object(d.jsxs)("div",{className:"sidebar__stat",children:[Object(d.jsx)("p",{children:"Who viewed you"}),Object(d.jsx)("p",{className:"sidebar__statNumber",children:"2,543"})]}),Object(d.jsxs)("div",{className:"sidebar__stat",children:[Object(d.jsx)("p",{children:"Views on Post"}),Object(d.jsx)("p",{className:"sidebar__statNumber",children:"2,448"})]})]}),Object(d.jsxs)("div",{className:"sidebar__bottom",children:[Object(d.jsx)("p",{children:"Recent"}),t("React.js"),t("Programming"),t("Software Engg."),t("ICPC"),t("Google")]})]})};n(82);var se=function(){var e=Object(c.useState)(""),t=Object(r.a)(e,2),n=t[0],s=t[1],i=Object(c.useState)(""),a=Object(r.a)(i,2),o=a[0],l=a[1],j=Object(c.useState)(""),b=Object(r.a)(j,2),u=b[0],h=b[1],O=Object(c.useState)(""),p=Object(r.a)(O,2),m=p[0],f=p[1],x=Object(B.b)();return Object(d.jsxs)("div",{className:"login",children:[Object(d.jsx)("img",{src:"data:image/png;base64,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",alt:"No Image"}),Object(d.jsxs)("form",{children:[Object(d.jsx)("input",{value:n,onChange:function(e){return s(e.target.value)},placeholder:"FullName",type:"text"}),Object(d.jsx)("input",{value:m,onChange:function(e){return f(e.target.value)},placeholder:"Profile Pic",type:"text"}),Object(d.jsx)("input",{value:o,onChange:function(e){return l(e.target.value)},placeholder:"Email",type:"email"}),Object(d.jsx)("input",{value:u,onChange:function(e){return h(e.target.value)},placeholder:"Password",type:"password"}),Object(d.jsx)("button",{type:"submit",onClick:function(e){e.preventDefault(),R.signInWithEmailAndPassword(o,u).then((function(e){x(V({email:e.user.email,uid:e.user.uid,displayName:e.user.displayName,photoUrl:e.user.photoURL}))})).catch((function(e){return alert(e.message)}))},children:"Sign In"})]}),Object(d.jsxs)("p",{children:["Not a member?",Object(d.jsx)("span",{className:"login__register",onClick:function(){if(!n&&!o)return alert("Please enter credentials");R.createUserWithEmailAndPassword(o,u).then((function(e){e.user.updateProfile({displayName:n,photoURL:m}).then((function(){x(V({email:e.user.email,uid:e.user.uid,displayName:n,photoUrl:m}))}))})).catch((function(e){return alert(e.message)}))},children:" Register Now"})]})]})},ie=(n(83),n(58)),ae=n.n(ie),re=n(57),oe=n.n(re);var le=function(){var e=function(e,t){return Object(d.jsxs)("div",{className:"widgets__article",children:[Object(d.jsx)("div",{className:"widgets__articleLeft",children:Object(d.jsx)(oe.a,{})}),Object(d.jsxs)("div",{className:"widgets__articleRight",children:[Object(d.jsx)("h4",{children:e}),Object(d.jsx)("p",{children:t})]})]})};return Object(d.jsxs)("div",{className:"widgets",children:[Object(d.jsxs)("div",{className:"widgets__header",children:[Object(d.jsx)("h2",{children:"LinkedIn News"}),Object(d.jsx)(ae.a,{})]}),e("I am Back!!!1","Top News -100k readers"),e("Corona Virus","India affected")]})};var de=function(){var e=Object(B.c)(U),t=Object(B.b)();return Object(c.useEffect)((function(){R.onAuthStateChanged((function(e){t(e?V({email:e.email,uid:e.uid,displayName:e.displayName,photoUrl:e.photoURL}):Q())}))}),[]),Object(d.jsxs)("div",{className:"app",children:[Object(d.jsx)(ne,{}),e?Object(d.jsxs)("div",{className:"app__body",children:[Object(d.jsx)(ce,{}),Object(d.jsx)(F,{}),Object(d.jsx)(le,{})]}):Object(d.jsx)(se,{})]})},je=Object(_.a)({reducer:{user:J}}),be=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function ue(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}a.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(B.a,{store:je,children:Object(d.jsx)(de,{})})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");be?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var c=n.headers.get("content-type");404===n.status||null!=c&&-1===c.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):ue(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):ue(t,e)}))}}()}},[[85,1,2]]]);
//# sourceMappingURL=main.db8ce03b.chunk.js.map