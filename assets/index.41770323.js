import{d as w,cY as S,cZ as C,w as E,q as T,j as d,k as K,h as L}from"./index.13230c70.js";var v=(e,t)=>e===t||e.length===t.length&&e.every((n,u)=>n===t[u]),R=w;function c(e,t,n,u){return e.addEventListener(t,n,u),R(e.removeEventListener.bind(e,t,n,u))}function h(e,t=C()){let n=0,u,r;return()=>(n++,w(()=>{n--,queueMicrotask(()=>{!n&&r&&(r(),r=u=void 0)})}),r||S(s=>u=e(r=s),t),u)}function g(e,t){for(let n=e.length-1;n>=0;n--){const u=t.slice(0,n+1);if(!v(e[n],u))return!1}return!0}var p=h(()=>{const[e,t]=K(null);return c(window,"keydown",n=>{t(n),setTimeout(()=>t(null))}),e}),m=h(()=>{const[e,t]=K([]),n=()=>t([]),u=p();return c(window,"keydown",r=>{if(r.repeat||typeof r.key!="string")return;const s=r.key.toUpperCase(),i=e();if(i.includes(s))return;const a=[...i,s];i.length===0&&s!=="ALT"&&s!=="CONTROL"&&s!=="META"&&s!=="SHIFT"&&(r.shiftKey&&a.unshift("SHIFT"),r.altKey&&a.unshift("ALT"),r.ctrlKey&&a.unshift("CONTROL"),r.metaKey&&a.unshift("META")),t(a)}),c(window,"keyup",r=>{if(typeof r.key!="string")return;const s=r.key.toUpperCase();t(i=>i.filter(a=>a!==s))}),c(window,"blur",n),c(window,"contextmenu",r=>{r.defaultPrevented||n()}),e[0]=e,e[1]={event:u},e[Symbol.iterator]=function*(){yield e[0],yield e[1]},e}),O=h(()=>{const e=m();let t=L(e);return d(()=>{const n=e(),u=t;return t=n,u.length===0&&n.length===1?n[0]:null})}),H=h(()=>{const e=m();return d(t=>e().length===0?[]:[...t,e()],[])});function A(e,t={}){e=e.toUpperCase();const{preventDefault:n=!0}=t,u=p(),r=O();return d(()=>{var s;return r()===e&&(n&&((s=u())==null||s.preventDefault()),!0)})}function M(e,t,n={}){if(!e.length)return;e=e.map(l=>l.toUpperCase());const{preventDefault:u=!0}=n,r=p(),s=H();let i=!1;const a=l=>{if(!l.length)return i=!1;if(i)return;const o=r();l.length<e.length?g(l,e.slice(0,l.length))?u&&o&&o.preventDefault():i=!0:(i=!0,g(l,e)&&(u&&o&&o.preventDefault(),t(o)))},D=l=>{const o=l.at(-1);if(!o)return;const f=r();if(u&&o.length<e.length){v(o,e.slice(0,e.length-1))&&f&&f.preventDefault();return}if(v(o,e)){const y=l.at(-2);(!y||v(y,e.slice(0,e.length-1)))&&(u&&f&&f.preventDefault(),t(f))}};E(T(s,n.requireReset?a:D))}export{M as a,A as c};
