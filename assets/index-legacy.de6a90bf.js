!function(){function e(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==t)return;var r,o,i=[],u=!0,c=!1;try{for(t=t.call(e);!(u=(r=t.next()).done)&&(i.push(r.value),!n||i.length!==n);u=!0);}catch(a){c=!0,o=a}finally{try{u||null==t.return||t.return()}finally{if(c)throw o}}return i}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}System.register(["./index-legacy.602f1655.js","./index-legacy.a2e64bab.js","./index-legacy.d5fe8182.js","./index-legacy.5105e84c.js"],(function(n,t){"use strict";var r,o,i,u,c,a,l,s,g,d,m,f,p,h,b,v,y,$,E,j,A,S,w,C,k,I,x,O,L,T,P,R,_,D,G,U,N,z,V,B,Y,M,W,H,X,F,K,Q,Z,q,J,ee,ne,te,re,oe,ie,ue,ce,ae,le,se,ge,de,me,fe,pe;return{setters:[function(e){r=e.e,o=e.E,i=e.a3,u=e.j,c=e.af,a=e.ag,l=e.bL,s=e.$,g=e.Z,d=e.b,m=e.a,f=e.L,p=e.N,h=e.K,b=e.S,v=e.au,y=e.bM,$=e.k,E=e.bN,j=e.ad,A=e.a6,S=e.az,w=e.U,C=e.V,k=e.bO,I=e.aN,x=e.bP,O=e.bQ,L=e.aG,T=e.W,P=e.aj,R=e.bR,_=e.bS,D=e.n,G=e.bi,U=e.ba,N=e.bb,z=e.bc,V=e.bd,B=e.be,Y=e.ay,M=e.bg,W=e.bh,H=e.bT,X=e.bU,F=e.bV},function(e){K=e.d,Q=e.e,Z=e.f,q=e.g,J=e.h,ee=e.i,ne=e.j,te=e.k,re=e.l,oe=e.m,ie=e.b,ue=e.n,ce=e.o,ae=e.c},function(e){le=e.A,se=e.f,ge=e.g,de=e.h,me=e.i,fe=e.j},function(e){pe=e.S}],execute:function(){var he=n("G",function(e){return e[e.SINGLE=0]="SINGLE",e[e.SITE=1]="SITE",e[e.STYLE=2]="STYLE",e[e.PREVIEW=3]="PREVIEW",e[e.GLOBAL=4]="GLOBAL",e[e.ARIA2=5]="ARIA2",e[e.INDEX=6]="INDEX",e[e.SSO=7]="SSO",e[e.LDAP=8]="LDAP",e[e.S3=9]="S3",e}(he||{})),be=n("F",function(e){return e[e.PUBLIC=0]="PUBLIC",e[e.PRIVATE=1]="PRIVATE",e[e.READONLY=2]="READONLY",e[e.DEPRECATED=3]="DEPRECATED",e}(be||{})),ve=function(e){var n=u((function(){if(!c.is_admin(a())){if(void 0===e.role)return!1;if(e.role===l.GENERAL&&!c.is_general(a()))return!1}return!0}));return r(g,{get fallback(){return r(ye,e)},get children(){return[r(s,{get when(){return!n()},children:null}),r(s,{get when(){return e.children},get children(){return r($e,e)}})]}})},ye=function(e){var n=d().pathname,t=m(),o=function(){return n()===e.to};return r(le,{get cancelBase(){return e.to.startsWith("http")},display:"flex",as:f,get href(){return e.to},onClick:function(n){if(ke(),e.refresh){var t;null===(t=n.stopPropagation)||void 0===t||t.call(n);var r=e.to;r.startsWith("http")||(r=p(r)),window.open(r,"_self")}},w:"$full",alignItems:"center",get _hover(){return{bgColor:o()?"$info4":h(),textDecoration:"none"}},px:"$2",py:"$1_5",rounded:"$md",cursor:"pointer",get bgColor(){return o()?"$info4":""},get color(){return o()?"$info11":""},get external(){return e.external},get children(){return[r(b,{get when(){return e.icon},get children(){return r(v,{mr:"$2",get as(){return e.icon}})}}),r(y,{get children(){return t(e.title)}})]}})},$e=function(n){var t=d().pathname,o=e($(t().includes(n.to)),2),i=o[0],u=o[1],c=m();return r(A,{w:"$full",get children(){return[r(E,{justifyContent:"space-between",onClick:function(){u(!i())},w:"$full",alignItems:"center",get _hover(){return{bgColor:h()}},px:"$2",py:"$1_5",rounded:"$md",cursor:"pointer",get children(){return[r(j,{get children(){return[r(b,{get when(){return n.icon},get children(){return r(v,{mr:"$2",get as(){return n.icon}})}}),r(y,{get children(){return c(n.title)}})]}}),r(v,{as:se,get transform(){return i()?"rotate(90deg)":"none"},transition:"transform 0.2s"})]}}),r(b,{get when(){return i()},get children(){return r(A,{pl:"$2",get children(){return r(Ee,{get items(){return n.children}})}})}})]}})},Ee=function(e){return r(i,{p:"$2",w:"$full",color:"$neutral11",spacing:"$1",get children(){return r(o,{get each(){return e.items},children:function(e){return r(ve,e)}})}})};var je=w((function(){return C((function(){return t.import("./Common-legacy.ebbc267c.js")}),void 0)})),Ae=[{title:"manage.sidemenu.profile",icon:K,to:"/@manage",role:l.GUEST,component:w((function(){return C((function(){return t.import("./Profile-legacy.68e64291.js")}),void 0)}))},{title:"manage.sidemenu.settings",icon:Q,to:"/@manage/settings",children:[{title:"manage.sidemenu.site",icon:Z,to:"/@manage/settings/site",component:function(){return r(je,{get group(){return he.SITE}})}},{title:"manage.sidemenu.style",icon:q,to:"/@manage/settings/style",component:function(){return r(je,{get group(){return he.STYLE}})}},{title:"manage.sidemenu.preview",icon:J,to:"/@manage/settings/preview",component:function(){return r(je,{get group(){return he.PREVIEW}})}},{title:"manage.sidemenu.global",icon:ee,to:"/@manage/settings/global",component:function(){return r(je,{get group(){return he.GLOBAL}})}},{title:"manage.sidemenu.sso",icon:k,to:"/@manage/settings/sso",component:function(){return r(je,{get group(){return he.SSO}})}},{title:"manage.sidemenu.ldap",icon:k,to:"/@manage/settings/ldap",component:function(){return r(je,{get group(){return he.LDAP}})}},{title:"manage.sidemenu.s3",icon:ne,to:"/@manage/settings/s3",component:w((function(){return C((function(){return t.import("./S3-legacy.48031e08.js")}),void 0)}))},{title:"manage.sidemenu.other",icon:te,to:"/@manage/settings/other",component:w((function(){return C((function(){return t.import("./Other-legacy.a4a292fe.js")}),void 0)}))}]},{title:"manage.sidemenu.tasks",icon:function(e){return S({a:{viewBox:"0 0 16 16"},c:'<path fill-rule="evenodd" d="M0 1.75C0 .784.784 0 1.75 0h3.5C6.216 0 7 .784 7 1.75v3.5A1.75 1.75 0 015.25 7H4v4a1 1 0 001 1h4v-1.25C9 9.784 9.784 9 10.75 9h3.5c.966 0 1.75.784 1.75 1.75v3.5A1.75 1.75 0 0114.25 16h-3.5A1.75 1.75 0 019 14.25v-.75H5A2.5 2.5 0 012.5 11V7h-.75A1.75 1.75 0 010 5.25v-3.5zm1.75-.25a.25.25 0 00-.25.25v3.5c0 .138.112.25.25.25h3.5a.25.25 0 00.25-.25v-3.5a.25.25 0 00-.25-.25h-3.5zm9 9a.25.25 0 00-.25.25v3.5c0 .138.112.25.25.25h3.5a.25.25 0 00.25-.25v-3.5a.25.25 0 00-.25-.25h-3.5z"/>'},e)},to:"/@manage/tasks",children:[{title:"manage.sidemenu.offline_download",icon:I,to:"/@manage/tasks/aria2",component:w((function(){return C((function(){return t.import("./offline_download-legacy.8d775379.js")}),void 0)}))},{title:"manage.sidemenu.upload",icon:re,to:"/@manage/tasks/upload",component:w((function(){return C((function(){return t.import("./Upload-legacy.2a701f4c.js")}),void 0)}))},{title:"manage.sidemenu.copy",icon:x,to:"/@manage/tasks/copy",component:w((function(){return C((function(){return t.import("./Copy-legacy.d4092974.js")}),void 0)}))}]},{title:"manage.sidemenu.users",icon:oe,to:"/@manage/users",component:w((function(){return C((function(){return t.import("./Users-legacy.cdeef6f7.js")}),void 0)}))},{title:"manage.sidemenu.storages",icon:ge,to:"/@manage/storages",component:w((function(){return C((function(){return t.import("./Storages-legacy.a6679ca7.js")}),void 0)}))},{title:"manage.sidemenu.metas",icon:pe,to:"/@manage/metas",component:w((function(){return C((function(){return t.import("./Metas-legacy.6ee2cf5a.js")}),void 0)}))},{title:"manage.sidemenu.indexes",icon:ie,to:"/@manage/indexes",component:w((function(){return C((function(){return t.import("./indexes-legacy.d3e9c0f3.js")}),void 0)}))},{title:"manage.sidemenu.backup-restore",to:"/@manage/backup-restore",icon:de,component:w((function(){return C((function(){return t.import("./backup-restore-legacy.9bae664d.js")}),void 0)}))},{title:"manage.sidemenu.about",icon:ue,to:"/@manage/about",role:l.GUEST,component:w((function(){return C((function(){return t.import("./About-legacy.2b682157.js")}),void 0)}))},{title:"manage.sidemenu.docs",icon:me,to:"https://alist.nn.ci",role:l.GUEST,external:!0},{title:"manage.sidemenu.home",icon:O,to:"/",role:l.GUEST,refresh:!0}],Se=L(),we=Se.isOpen,Ce=Se.onOpen,ke=Se.onClose,Ie=function(){var e=m(),n=d().to;return r(A,{as:"header",position:"sticky",top:"0",left:"0",right:"0",zIndex:"$sticky",height:"64px",flexShrink:0,shadow:"$md",p:"$4",get bgColor(){return T("$background","$neutral2")()},get children(){return[r(E,{alignItems:"center",justifyContent:"space-between",h:"$full",get children(){return[r(j,{spacing:"$2",get children(){return[r(P,{"aria-label":"menu",get icon(){return r(fe,{})},display:{"@sm":"none"},onClick:Ce,size:"sm"}),r(y,{fontSize:"$xl",color:"$info9",cursor:"pointer",onClick:function(){n("/@manage")},get children(){return e("manage.title")}})]}}),r(j,{spacing:"$1",get children(){return r(P,{"aria-label":"logout",get icon(){return r(R,{})},onClick:function(){_(),D.success(e("manage.logout_success")),n("/@login?redirect=".concat(encodeURIComponent(location.pathname)))},size:"sm"})}})]}}),r(G,{get opened(){return we()},placement:"left",onClose:ke,get children(){return[r(U,{}),r(N,{get children(){return[r(z,{}),r(V,{color:"$info9",get children(){return e("manage.title")}}),r(B,{get children(){return[r(Ee,{items:Ae}),r(Y,{get children(){return r(j,{spacing:"$4",p:"$2",color:"$neutral11",get children(){return[r(M,{}),r(W,{})]}})}})]}})]}})]}})]}})},xe=[{to:"/storages/add",component:w((function(){return C((function(){return t.import("./AddOrEdit-legacy.432c5176.js")}),void 0)}))},{to:"/storages/edit/:id",component:w((function(){return C((function(){return t.import("./AddOrEdit-legacy.432c5176.js")}),void 0)}))},{to:"/users/add",component:w((function(){return C((function(){return t.import("./AddOrEdit-legacy.5b74cdc1.js")}),void 0)}))},{to:"/users/edit/:id",component:w((function(){return C((function(){return t.import("./AddOrEdit-legacy.5b74cdc1.js")}),void 0)}))},{to:"/metas/add",component:w((function(){return C((function(){return t.import("./AddOrEdit-legacy.8a281e31.js")}),void 0)}))},{to:"/metas/edit/:id",component:w((function(){return C((function(){return t.import("./AddOrEdit-legacy.8a281e31.js")}),void 0)}))},{to:"/2fa",component:w((function(){return C((function(){return t.import("./2fa-legacy.1a55bc8c.js")}),void 0)}))},{to:"/messenger",component:w((function(){return C((function(){return t.import("./Messenger-legacy.639f37f4.js")}),void 0)}))}],Oe=function(e){return ce(e.title),r(Y,{h:"$full",get children(){return r(y,{get children(){return e.title}})}})},Le=function e(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return n.forEach((function(n){n.children?e(n.children,t):t.push({to:H(n.to,"/@manage"),component:n.component||function(){return r(Oe,{get title(){return n.title},get to(){return n.to||"empty"}})}})})),t}(Ae).concat(xe),Te=Object.freeze(Object.defineProperty({__proto__:null,default:function(){var e=m();return ae((function(){return e("manage.title")})),r(A,{css:{"--hope-colors-background":"var(--hope-colors-loContrast)"},bgColor:"$background",w:"$full",get children(){return[r(Ie,{}),r(E,{w:"$full",h:"calc(100vh - 64px)",get children(){return[r(A,{display:{"@initial":"none","@sm":"block"},w:"$56",h:"$full",shadow:"$md",get bgColor(){return T("$background","$neutral2")()},overflowY:"auto",get children(){return[r(Ee,{items:Ae}),r(Y,{get children(){return r(j,{spacing:"$4",p:"$2",color:"$neutral11",get children(){return[r(M,{}),r(W,{})]}})}})]}}),r(A,{w:{"@initial":"$full","@sm":"calc(100% - 14rem)"},p:"$4",overflowY:"auto",get children(){return r(X,{get children(){return r(o,{each:Le,children:function(e){return r(F,{get path(){return e.to},get component(){return e.component}})}})}})}})]}})]}})}},Symbol.toStringTag,{value:"Module"}));n("i",Te)}}}))}();
