(this["webpackJsonpxatalog-ui"]=this["webpackJsonpxatalog-ui"]||[]).push([[0],{191:function(e,t,n){},213:function(e,t){},215:function(e,t){},229:function(e,t){},231:function(e,t){},259:function(e,t){},261:function(e,t){},262:function(e,t){},267:function(e,t){},269:function(e,t){},275:function(e,t){},277:function(e,t){},296:function(e,t){},308:function(e,t){},311:function(e,t){},329:function(e,t,n){},330:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n(43),r=n.n(a),s=n(50),i=n.n(s),o=n(15),j=n.n(o),l=(n(189),n(190),n(191),n(17)),u=n(13),d=n(18),b=n(9),O=n(62),h=n(2),p=["component"],x=function(e){var t=e.component,n=Object(O.a)(e,p),c=Object(d.c)((function(e){return e})).Auth;return Object(h.jsx)(u.b,Object(b.a)(Object(b.a)({},n),{},{render:function(e){return c.Perm.id?Object(h.jsx)(t,Object(b.a)({},e)):Object(h.jsx)(u.a,{to:"/login"})}}))},m=["component","restricted"],f=function(e){var t=e.component,n=e.restricted,c=Object(O.a)(e,m),a=Object(d.c)((function(e){return e})).Auth;return Object(h.jsx)(u.b,Object(b.a)(Object(b.a)({},c),{},{render:function(e){return a.Perm.id&&n?Object(h.jsx)(u.a,{to:"/"}):Object(h.jsx)(t,Object(b.a)({},e))}}))},g=n(331),v=n(332),y=n(333),E=n(334),w=n(335),N=n(336),S=n(337),k=function(){return Object(h.jsx)("div",{children:Object(h.jsxs)(g.a,{color:"light",expand:"md",light:!0,children:[Object(h.jsx)(v.a,{href:"/",children:"Xatalog"}),Object(h.jsx)(y.a,{onClick:function(){}}),Object(h.jsx)(E.a,{navbar:!0,children:Object(h.jsxs)(w.a,{className:"me-auto",navbar:!0,children:[Object(h.jsx)(N.a,{children:Object(h.jsx)(S.a,{children:Object(h.jsx)(l.b,{style:{textDecoration:"none",color:"unset"},to:"/",children:"Product"})})}),Object(h.jsx)(N.a,{children:Object(h.jsx)(S.a,{children:Object(h.jsx)(l.b,{style:{textDecoration:"none",color:"unset"},to:"/add",children:"Add Product"})})}),Object(h.jsx)(N.a,{children:Object(h.jsx)(S.a,{children:Object(h.jsx)(l.b,{style:{textDecoration:"none",color:"unset"},to:"/profile",children:"Profile"})})}),Object(h.jsx)(N.a,{children:Object(h.jsx)(S.a,{children:Object(h.jsx)("a",{style:{textDecoration:"none"},className:"text-danger",href:"/login",onClick:function(){return sessionStorage.removeItem("token")},children:"Logout"})})})]})})]})})},A=function(){var e=Object(d.b)();return Object(c.useEffect)((function(){return e({type:"TOGGLE_NAV"}),function(){e({type:"TOGGLE_NAV"})}}),[]),Object(h.jsx)("div",{children:"Hello World"})},_=n(26),D=n(14),C=n(348),G=n(338),P=n(339),L=n(340),T=n(341),V=n(342),U=n(61),q=n.n(U),F={api_url:"https://xatalog-app.herokuapp.com/api"},I=function(e){var t=Object(d.b)(),n=Object(c.useState)({email:null,password:null}),a=Object(D.a)(n,2),r=a[0],s=a[1],i=Object(c.useState)(null),o=Object(D.a)(i,2),u=o[0],O=o[1],p=function(e){s(Object(b.a)(Object(b.a)({},r),{},Object(_.a)({},e.target.name,e.target.value)))};return Object(c.useEffect)((function(){return t({type:"TOGGLE_NAV"}),function(){t({type:"TOGGLE_NAV"})}}),[]),Object(h.jsx)(c.Fragment,{children:Object(h.jsxs)("div",{style:{width:"50%",margin:"100px auto auto"},children:[u?Object(h.jsx)(C.a,{color:u.type,toggle:function(){return O(null)},children:u.message}):null,Object(h.jsxs)(G.a,{onSubmit:function(n){n.preventDefault(),j.a.post("".concat(F.api_url,"/login"),r).then((function(n){var c;t((c=n.data.data.token,function(e){e({type:"UPDATE_STATE_PERM",payload:q.a.decode(c)})})),j.a.defaults.headers.token=n.data.data.token,sessionStorage.setItem("token",n.data.data.token),e.history.push("/")})).catch((function(e){O({message:e.response.data.message,type:"danger"})}))},children:[Object(h.jsxs)(P.a,{children:[Object(h.jsx)(L.a,{for:"Email",children:"Email"}),Object(h.jsx)(T.a,{id:"Email",name:"email",placeholder:"email",type:"email",required:!0,onChange:p})]}),Object(h.jsxs)(P.a,{children:[Object(h.jsx)(L.a,{for:"assword",children:"Password"}),Object(h.jsx)(T.a,{id:"assword",name:"password",placeholder:"password",type:"password",required:!0,onChange:p})]}),Object(h.jsx)(V.a,{children:"Login"})]}),Object(h.jsxs)("p",{className:"text-center mt-4",children:[" don't have an account yet? ",Object(h.jsx)(l.b,{to:"/register",children:"Register"})]})]})})},X=n(28),R=n.n(X),z=n(44),J=function(){var e=Object(d.b)(),t=Object(c.useState)({email:null,password:null,username:null}),n=Object(D.a)(t,2),a=n[0],r=n[1],s=Object(c.useState)(null),i=Object(D.a)(s,2),o=i[0],u=i[1],O=function(){var e=Object(z.a)(R.a.mark((function e(t){return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,j.a.post("".concat(F.api_url,"/register"),a);case 4:u({message:"Success",type:"success"}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),u({message:e.t0.response.data.message,type:"danger"});case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t){return e.apply(this,arguments)}}(),p=function(e){r(Object(b.a)(Object(b.a)({},a),{},Object(_.a)({},e.target.name,e.target.value)))};return Object(c.useEffect)((function(){return e({type:"TOGGLE_NAV"}),function(){e({type:"TOGGLE_NAV"})}}),[]),Object(h.jsx)(c.Fragment,{children:Object(h.jsxs)("div",{style:{width:"50%",margin:"100px auto auto"},children:[o?Object(h.jsx)(C.a,{color:o.type,toggle:function(){return u(null)},children:o.message}):null,Object(h.jsxs)(G.a,{onSubmit:O,children:[Object(h.jsxs)(P.a,{children:[Object(h.jsx)(L.a,{for:"Email",children:"Email"}),Object(h.jsx)(T.a,{id:"Email",name:"email",placeholder:"email",type:"email",required:!0,onChange:p})]}),Object(h.jsxs)(P.a,{children:[Object(h.jsx)(L.a,{for:"Username",children:"Username"}),Object(h.jsx)(T.a,{id:"Username",name:"username",placeholder:"username",type:"text",required:!0,onChange:p})]}),Object(h.jsxs)(P.a,{children:[Object(h.jsx)(L.a,{for:"assword",children:"Password"}),Object(h.jsx)(T.a,{id:"assword",name:"password",placeholder:"password",type:"password",required:!0,onChange:p})]}),Object(h.jsx)(V.a,{children:"Register"})]}),Object(h.jsxs)("p",{className:"text-center mt-4",children:[" already have an account? ",Object(h.jsx)(l.b,{to:"/login",children:"Login"})]})]})})},M=n(343),B=n(344),H=n(345),W=n(346),Y=n(347),K=(n(329),function(e){return Object(h.jsxs)("div",{children:[Object(h.jsx)("div",{style:{padding:"0 1em"},children:Object(h.jsxs)("div",{id:"alert",className:"text-center",style:e.style,children:[Object(h.jsx)("p",{style:{margin:"1em 0"},children:"Are you sure ?"}),Object(h.jsx)("button",{className:"btn btn-danger btn-block",onClick:e.onConfirm,children:"Yes"})]})}),Object(h.jsx)("div",{id:"bg",onClick:e.close})]})}),Q=function(){var e=Object(c.useState)([]),t=Object(D.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(!1),s=Object(D.a)(r,2),o=s[0],u=s[1],d=Object(c.useState)(""),b=Object(D.a)(d,2),O=b[0],p=b[1],x=function(){j.a.get("".concat(F.api_url,"/product")).then((function(e){a(e.data.data)}))},m=function(){u(!o)};return Object(c.useEffect)((function(){x()}),[]),Object(h.jsxs)("div",{className:"p-3",children:[o?Object(h.jsx)(K,{close:m,onConfirm:function(){j.a.delete("".concat(F.api_url,"/product/").concat(O)).then((function(e){x(),m()}))}}):null,Object(h.jsx)(M.a,{children:n.map((function(e){return Object(h.jsx)(B.a,{sm:"3",className:"mb-2",children:Object(h.jsxs)(H.a,{body:!0,children:[Object(h.jsx)(W.a,{tag:"h5",children:e.name}),Object(h.jsxs)(Y.a,{children:[e.description,Object(h.jsxs)("p",{children:["Last change: ",i()(e.updatedAt).format("LL")]})]}),Object(h.jsx)(V.a,{size:"sm",color:"warning",className:"mb-2",children:Object(h.jsx)(l.b,{style:{textDecoration:"none",color:"unset"},className:"w-100 d-block",to:"/edit/".concat(e.id),children:"Edit"})}),Object(h.jsx)(V.a,{size:"sm",color:"danger",onClick:function(){return function(e){p(e),m()}(e.id)},children:"Delete"})]})})}))})]})},Z=function(e){var t=e.title;Object(c.useEffect)((function(){return document.title=t,function(){document.title="Xatalog"}}))},$=function(){var e=Object(c.useState)({}),t=Object(D.a)(e,2),n=t[0],a=t[1];return Z({title:"Profile - Xatalog"}),Object(c.useEffect)((function(){j.a.get("".concat(F.api_url,"/user")).then((function(e){a(e.data.data)}))}),[]),Object(h.jsx)(c.Fragment,{children:Object(h.jsx)("div",{style:{width:"50%",margin:"100px auto auto"},children:Object(h.jsxs)(G.a,{children:[Object(h.jsxs)(P.a,{children:[Object(h.jsx)(L.a,{for:"Email",children:"Email"}),Object(h.jsx)(T.a,{id:"Email",name:"email",type:"email",defaultValue:n.email||null,readOnly:!0})]}),Object(h.jsxs)(P.a,{children:[Object(h.jsx)(L.a,{for:"Username",children:"Username"}),Object(h.jsx)(T.a,{id:"Username",name:"username",type:"text",defaultValue:n.username||null,readOnly:!0})]})]})})})},ee=function(){var e=Object(c.useState)({name:null,description:null}),t=Object(D.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(null),s=Object(D.a)(r,2),i=s[0],o=s[1],l=function(){var e=Object(z.a)(R.a.mark((function e(t){return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,j.a.post("".concat(F.api_url,"/product"),n);case 4:o({message:"Success",type:"success"}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),o({message:e.t0.response.data.message,type:"danger"});case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t){return e.apply(this,arguments)}}(),u=function(e){a(Object(b.a)(Object(b.a)({},n),{},Object(_.a)({},e.target.name,e.target.value)))};return Z({title:"Add - Xatalog"}),Object(c.useEffect)((function(){}),[]),Object(h.jsx)(c.Fragment,{children:Object(h.jsxs)("div",{style:{width:"50%",margin:"100px auto auto"},children:[i?Object(h.jsx)(C.a,{color:i.type,toggle:function(){return o(null)},children:i.message}):null,Object(h.jsxs)(G.a,{onSubmit:l,children:[Object(h.jsxs)(P.a,{children:[Object(h.jsx)(L.a,{for:"Name",children:"Name"}),Object(h.jsx)(T.a,{id:"Name",name:"name",placeholder:"name",type:"text",required:!0,onChange:u})]}),Object(h.jsxs)(P.a,{children:[Object(h.jsx)(L.a,{for:"Description",children:"Description"}),Object(h.jsx)(T.a,{id:"Description",name:"description",placeholder:"description",type:"text",onChange:u})]}),Object(h.jsx)(V.a,{children:"Submit"})]})]})})},te=function(e){var t=e.match,n=Object(c.useState)({}),a=Object(D.a)(n,2),r=a[0],s=a[1],i=Object(c.useState)(null),o=Object(D.a)(i,2),l=o[0],u=o[1],d=function(){var e=Object(z.a)(R.a.mark((function e(n){return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.prev=1,e.next=4,j.a.patch("".concat(F.api_url,"/product/").concat(t.params.id),r);case 4:u({message:"Success",type:"success"}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),u({message:e.t0.response.data.message,type:"danger"});case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t){return e.apply(this,arguments)}}(),O=function(e){s(Object(b.a)(Object(b.a)({},r),{},Object(_.a)({},e.target.name,e.target.value)))};return Z({title:"Edit - Xatalog"}),Object(c.useEffect)((function(){j.a.get("".concat(F.api_url,"/product/").concat(t.params.id)).then((function(e){s(e.data.data)}))}),[]),Object(h.jsx)(c.Fragment,{children:Object(h.jsxs)("div",{style:{width:"50%",margin:"100px auto auto"},children:[l?Object(h.jsx)(C.a,{color:l.type,toggle:function(){return u(null)},children:l.message}):null,Object(h.jsxs)(G.a,{onSubmit:d,children:[Object(h.jsxs)(P.a,{children:[Object(h.jsx)(L.a,{for:"Name",children:"Name"}),Object(h.jsx)(T.a,{id:"Name",name:"name",placeholder:"name",type:"text",required:!0,onChange:O,defaultValue:r.name})]}),Object(h.jsxs)(P.a,{children:[Object(h.jsx)(L.a,{for:"Description",children:"Description"}),Object(h.jsx)(T.a,{id:"Description",name:"description",placeholder:"description",type:"text",onChange:O,defaultValue:r.description})]}),Object(h.jsx)(V.a,{children:"Submit"})]})]})})};function ne(){var e=Object(d.c)((function(e){return e})).Navbar;return Object(h.jsxs)(l.a,{children:[e.isActiveNav?Object(h.jsx)(k,{}):null,Object(h.jsxs)(u.d,{children:[Object(h.jsx)(f,{path:"/login",restricted:!0,component:I}),Object(h.jsx)(f,{path:"/register",restricted:!0,component:J}),Object(h.jsx)(u.b,{path:"/test",component:A}),Object(h.jsx)(x,{path:"/profile",exact:!0,component:$}),Object(h.jsx)(x,{path:"/add",exact:!0,component:ee}),Object(h.jsx)(x,{path:"/edit/:id",exact:!0,component:te}),Object(h.jsx)(x,{path:"/",exact:!0,component:Q})]})]})}var ce=n(52),ae={isActiveNav:!0},re=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ae,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return"TOGGLE_NAV"===t.type?Object(b.a)(Object(b.a)({},e),{},{isActiveNav:!e.isActiveNav}):e},se={Perm:q.a.decode(sessionStorage.getItem("token"))||{id:""}},ie=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:se,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return"UPDATE_STATE_PERM"===t.type?Object(b.a)(Object(b.a)({},e),{},{Perm:t.payload}):e},oe=Object(ce.b)({Navbar:re,Auth:ie}),je=n(166),le=Object(ce.a)(je.a),ue=Object(ce.c)(oe,le);var de=function(){return Object(h.jsx)(c.Fragment,{children:Object(h.jsx)("div",{children:Object(h.jsx)(d.a,{store:ue,children:Object(h.jsx)(ne,{})})})})};j.a.defaults.headers.token=sessionStorage.getItem("token"),i.a.locale("id"),r.a.render(Object(h.jsx)(de,{}),document.getElementById("root"))}},[[330,1,2]]]);
//# sourceMappingURL=main.a0ad145f.chunk.js.map