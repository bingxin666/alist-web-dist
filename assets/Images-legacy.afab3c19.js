!function(){function e(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function n(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==t)return;var r,i,o=[],a=!0,c=!1;try{for(t=t.call(e);!(a=(r=t.next()).done)&&(o.push(r.value),!n||o.length!==n);a=!0);}catch(l){c=!0,i=l}finally{try{a||null==t.return||t.return()}finally{if(c)throw i}}return o}(e,n)||function(e,n){if(!e)return;if("string"==typeof e)return t(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return t(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function t(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}System.register(["./index-legacy.602f1655.js","./Folder-legacy.43b6b6d9.js","./index-legacy.efffc765.js","./ImageWithError-legacy.7be3eb4a.js","./icon-legacy.3b2aaaab.js","./helper-legacy.c3263eb4.js","./GridItem-legacy.54abbc7a.js","./Layout-legacy.0f08ceb1.js","./index-legacy.a2e64bab.js","./FolderTree-legacy.38a7cba1.js","./index-legacy.d5fe8182.js","./video_box-legacy.b6add394.js","./_commonjs-dynamic-modules-legacy.cf19cda3.js","./Paginator-legacy.d770cd78.js","./index-legacy.5105e84c.js","./index-legacy.5f88c749.js"],(function(t){"use strict";var r,i,o,a,c,l,u,s,f,d,g,b,y,h,m,j,p,v,w,x,$,_,S,k,O,I,M,A,P,C,E,L,F;return{setters:[function(e){r=e.bF,i=e.e,o=e.ak,a=e.au,c=e.k,l=e.j,u=e.aI,s=e.a4,f=e.a3,d=e.r,g=e.aK,b=e.cT,y=e.ay,h=e.S,m=e.as,j=e.at,p=e.ac,v=e.a,w=e.E,x=e.a0,$=e.cu,_=e.l,S=e.bM,k=e.bN},function(e){O=e.b},function(e){I=e.u},function(e){M=e.I},function(e){A=e.O,P=e.g},function(e){C=e.u,E=e.I,L=e.a},function(e){F=e.G},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){}],execute:function(){var K=function(t){if((0,r().isHide)(t.obj)||t.obj.type!==A.IMAGE)return null;var v=I().setPathAs,w=i(a,{get color(){return o()},boxSize:"$12",get as(){return P(t.obj)}}),x=n(c(!1),2),$=x[0],_=x[1],S=l((function(){return u()&&($()||t.obj.selected)})),k=O({id:1}).show,F=s().rawLink,K=L().isMouseSupported,z=C();return i(p.div,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:{duration:.2},style:{"flex-grow":1},get children(){var n,r,a;return i(f,(r={w:"$full",get classList(){return{selected:!!t.obj.selected}},class:"image-item viselect-item"},(a={})[n="data-index"]=a[n]||{},a[n].get=function(){return t.index},e(r,"p","$1"),e(r,"spacing","$1"),e(r,"rounded","$lg"),e(r,"transition","all 0.3s"),e(r,"border","2px solid transparent"),"_hover",a._hover=a._hover||{},a._hover.get=function(){return{border:"2px solid ".concat(o())}},e(r,"onMouseEnter",(function(){_(!0),v(t.obj.name,t.obj.is_dir,!0)})),e(r,"onMouseLeave",(function(){_(!1)})),e(r,"onContextMenu",(function(e){d((function(){g(!1),b(t.index,!0,!0)})),k(e,{props:t.obj})})),"children",a.children=a.children||{},a.children.get=function(){return i(y,{w:"$full",pos:"relative",get children(){return[i(h,{get when(){return S()||K()&&t.obj.selected},get children(){return i(E,{pos:"absolute",left:"$1",top:"$1",get checked(){return t.obj.selected},onChange:function(e){b(t.index,e.target.checked)}})}}),i(M,{h:"150px",w:"$full",objectFit:"cover",rounded:"$lg",shadow:"$md",get fallback(){return i(m,{size:"lg"})},fallbackErr:w,get src(){return F(t.obj)},loading:"lazy",get cursor(){return K()||u()&&!z()?"default":"pointer"},"on:dblclick":function(e){K()&&(e.ctrlKey||e.metaKey||e.shiftKey||j.emit("gallery",t.obj.name))},"on:click":function(){K()||(u()&&!z()?b(t.index,!t.obj.selected):j.emit("gallery",t.obj.name))}})]}})},function(e,n){for(var t in n)(o=n[t]).configurable=o.enumerable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,t,o);if(Object.getOwnPropertySymbols)for(var r=Object.getOwnPropertySymbols(n),i=0;i<r.length;i++){var o,a=r[i];(o=n[a]).configurable=o.enumerable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,a,o)}}(r,a),r))}})};t("default",(function(e){var n=v(),t=l((function(){return i($,{w:"$full",gap:"$1",templateColumns:"repeat(auto-fill, minmax(100px,1fr))",class:"image-folders",get children(){return i(w,{get each(){return x.objs.filter((function(e){return e.is_dir}))},children:function(e,n){return i(F,{obj:e,get index(){return n()}})}})}})})),r=L(),o=r.isMouseSupported,a=r.registerSelectContainer,c=r.captureContentMenu;return a(),i(f,{"oncapture:contextmenu":c,get classList(){return{"viselect-container":o()}},spacing:"$2",w:"$full",get children(){return[i(h,{get when(){return"top"===_.show_folder_in_image_view},get children(){return t()}}),i(h,{get when(){return e.images.length>0},get fallback(){return i(S,{m:"$2",get children(){return n("home.no_images")}})},get children(){return i(k,{w:"$full",gap:"$1",flexWrap:"wrap",class:"image-images",get children(){return i(w,{get each(){return x.objs},children:function(e,n){return i(K,{obj:e,get index(){return n()}})}})}})}}),i(h,{get when(){return"bottom"===_.show_folder_in_image_view},get children(){return t()}})]}})}))}}}))}();
