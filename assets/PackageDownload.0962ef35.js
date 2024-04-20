import{a as A,k as W,b as R,s as H,e as S,a3 as I,bM as j,av as k,E as z,b1 as Z,z as N,A as O,B as V,S as J,bz as K,p as T,g as Y,f as G,_ as Q}from"./index.13230c70.js";class D{constructor(){this.crc=-1}append(n){for(var a=this.crc|0,f=this.table,h=0,g=n.length|0;h<g;h++)a=a>>>8^f[(a^n[h])&255];this.crc=a}get(){return~this.crc}}D.prototype.table=(()=>{var c,n,a,f=[];for(c=0;c<256;c++){for(a=c,n=0;n<8;n++)a=a&1?a>>>1^3988292384:a>>>1;f[c]=a}return f})();const C=c=>{var n=new Uint8Array(c);return{array:n,view:new DataView(n.buffer)}},X=c=>c.reader.read().then(n=>{if(n.done)return c.writeFooter();const a=n.value;c.crc.append(a),c.uncompressedLength+=a.length,c.compressedLength+=a.length,c.ctrl.enqueue(a)});function ee(c){const n=Object.create(null),a=[],f=new TextEncoder;let h=0,g=0,p,l,v;function w(){g++,l=n[a[g]],l?u():v&&L()}var y={enqueue(d){if(v)throw new TypeError("Cannot enqueue a chunk into a readable stream that is closed or has been requested to be closed");let r=d.name.trim();const t=new Date(typeof d.lastModified>"u"?Date.now():d.lastModified);if(d.directory&&!r.endsWith("/")&&(r+="/"),n[r])throw new Error("File already exists.");const s=f.encode(r);a.push(r);const e=n[r]={level:0,ctrl:p,directory:!!d.directory,nameBuf:s,comment:f.encode(d.comment||""),compressedLength:0,uncompressedLength:0,writeHeader(){var o=C(26),i=C(30+s.length);e.offset=h,e.header=o,e.level!==0&&!e.directory&&o.view.setUint16(4,2048),o.view.setUint32(0,335546376),o.view.setUint16(6,(t.getHours()<<6|t.getMinutes())<<5|t.getSeconds()/2,!0),o.view.setUint16(8,(t.getFullYear()-1980<<4|t.getMonth()+1)<<5|t.getDate(),!0),o.view.setUint16(22,s.length,!0),i.view.setUint32(0,1347093252),i.array.set(o.array,4),i.array.set(s,30),h+=i.array.length,p.enqueue(i.array)},writeFooter(){var o=C(16);o.view.setUint32(0,1347094280),e.crc&&(e.header.view.setUint32(10,e.crc.get(),!0),e.header.view.setUint32(14,e.compressedLength,!0),e.header.view.setUint32(18,e.uncompressedLength,!0),o.view.setUint32(4,e.crc.get(),!0),o.view.setUint32(8,e.compressedLength,!0),o.view.setUint32(12,e.uncompressedLength,!0)),p.enqueue(o.array),h+=e.compressedLength+16,w()},fileLike:d};l||(l=e,u())},close(){if(v)throw new TypeError("Cannot close a readable stream that has already been requested to be closed");l||L(),v=!0}};function L(){var d=0,r=0,t,s;for(t=0;t<a.length;t++)s=n[a[t]],d+=46+s.nameBuf.length+s.comment.length;const e=C(d+22);for(t=0;t<a.length;t++)s=n[a[t]],e.view.setUint32(r,1347092738),e.view.setUint16(r+4,5120),e.array.set(s.header.array,r+6),e.view.setUint16(r+32,s.comment.length,!0),s.directory&&e.view.setUint8(r+38,16),e.view.setUint32(r+42,s.offset,!0),e.array.set(s.nameBuf,r+46),e.array.set(s.comment,r+46+s.nameBuf.length),r+=46+s.nameBuf.length+s.comment.length;e.view.setUint32(r,1347093766),e.view.setUint16(r+8,a.length,!0),e.view.setUint16(r+10,a.length,!0),e.view.setUint32(r+12,d,!0),e.view.setUint32(r+16,h,!0),p.enqueue(e.array),p.close()}function u(){if(!!l){if(l.directory)return l.writeFooter(l.writeHeader());if(l.reader)return X(l);l.fileLike.stream?(l.crc=new D,l.reader=l.fileLike.stream.getReader(),l.writeHeader()):w()}}return new ReadableStream({start:d=>{p=d,c.start&&Promise.resolve(c.start(y))},pull(){return u()||c.pull&&Promise.resolve(c.pull(y))}})}window.ZIP=ee;var P={exports:{}};/*! streamsaver. MIT License. Jimmy Wärting <https://jimmy.warting.se/opensource> */(function(c){((n,a)=>{c.exports=a()})("streamSaver",()=>{const n=typeof window=="object"?window:this;n.HTMLElement||console.warn("streamsaver is meant to run on browsers main thread");let a=null,f=!1;const h=r=>{try{r()}catch{}},g=n.WebStreamsPolyfill||{},p=n.isSecureContext;let l=/constructor/i.test(n.HTMLElement)||!!n.safari||!!n.WebKitPoint;const v=p||"MozAppearance"in document.documentElement.style?"iframe":"navigate",w={createWriteStream:d,WritableStream:n.WritableStream||g.WritableStream,supported:!0,version:{full:"2.0.5",major:2,minor:0,dot:5},mitm:"https://jimmywarting.github.io/StreamSaver.js/mitm.html?version=2.0.0"};function y(r){if(!r)throw new Error("meh");const t=document.createElement("iframe");return t.hidden=!0,t.src=r,t.loaded=!1,t.name="iframe",t.isIframe=!0,t.postMessage=(...s)=>t.contentWindow.postMessage(...s),t.addEventListener("load",()=>{t.loaded=!0},{once:!0}),document.body.appendChild(t),t}function L(r){const t="width=200,height=100",s=document.createDocumentFragment(),e={frame:n.open(r,"popup",t),loaded:!1,isIframe:!1,isPopup:!0,remove(){e.frame.close()},addEventListener(...i){s.addEventListener(...i)},dispatchEvent(...i){s.dispatchEvent(...i)},removeEventListener(...i){s.removeEventListener(...i)},postMessage(...i){e.frame.postMessage(...i)}},o=i=>{i.source===e.frame&&(e.loaded=!0,n.removeEventListener("message",o),e.dispatchEvent(new Event("load")))};return n.addEventListener("message",o),e}try{new Response(new ReadableStream),p&&!("serviceWorker"in navigator)&&(l=!0)}catch{l=!0}h(()=>{const{readable:r}=new TransformStream,t=new MessageChannel;t.port1.postMessage(r,[r]),t.port1.close(),t.port2.close(),f=!0,Object.defineProperty(w,"TransformStream",{configurable:!1,writable:!1,value:TransformStream})});function u(){a||(a=p?y(w.mitm):L(w.mitm))}function d(r,t,s){let e={size:null,pathname:null,writableStrategy:void 0,readableStrategy:void 0},o=0,i=null,m=null,M=null;if(Number.isFinite(t)?([s,t]=[t,s],console.warn("[StreamSaver] Deprecated pass an object as 2nd argument when creating a write stream"),e.size=s,e.writableStrategy=t):t&&t.highWaterMark?(console.warn("[StreamSaver] Deprecated pass an object as 2nd argument when creating a write stream"),e.size=s,e.writableStrategy=t):e=t||{},!l){u(),m=new MessageChannel,r=encodeURIComponent(r.replace(/\//g,":")).replace(/['()]/g,escape).replace(/\*/g,"%2A");const b={transferringReadable:f,pathname:e.pathname||Math.random().toString().slice(-6)+"/"+r,headers:{"Content-Type":"application/octet-stream; charset=utf-8","Content-Disposition":"attachment; filename*=UTF-8''"+r}};e.size&&(b.headers["Content-Length"]=e.size);const E=[b,"*",[m.port2]];if(f){const U=v==="iframe"?void 0:{transform(F,q){if(!(F instanceof Uint8Array))throw new TypeError("Can only write Uint8Arrays");o+=F.length,q.enqueue(F),i&&(location.href=i,i=null)},flush(){i&&(location.href=i)}};M=new w.TransformStream(U,e.writableStrategy,e.readableStrategy);const _=M.readable;m.port1.postMessage({readableStream:_},[_])}m.port1.onmessage=U=>{U.data.download?v==="navigate"?(a.remove(),a=null,o?location.href=U.data.download:i=U.data.download):(a.isPopup&&(a.remove(),a=null,v==="iframe"&&y(w.mitm)),y(U.data.download)):U.data.abort&&(x=[],m.port1.postMessage("abort"),m.port1.onmessage=null,m.port1.close(),m.port2.close(),m=null)},a.loaded?a.postMessage(...E):a.addEventListener("load",()=>{a.postMessage(...E)},{once:!0})}let x=[];return!l&&M&&M.writable||new w.WritableStream({write(b){if(!(b instanceof Uint8Array))throw new TypeError("Can only write Uint8Arrays");if(l){x.push(b);return}m.port1.postMessage(b),o+=b.length,i&&(location.href=i,i=null)},close(){if(l){const b=new Blob(x,{type:"application/octet-stream; charset=utf-8"}),E=document.createElement("a");E.href=URL.createObjectURL(b),E.download=r,E.click()}else m.port1.postMessage("end")},abort(){x=[],m.port1.postMessage("abort"),m.port1.onmessage=null,m.port1.close(),m.port2.close(),m=null}},e.writableStrategy)}return w})})(P);const $=P.exports;$.mitm="/streamer/mitm.html";const te=c=>c.replace(/^\/+|\/+$/g,"");let B=0;const ae=c=>{const n=A(),[a,f]=W(n("home.package_download.initializing")),[h,g]=W(0),{pathname:p}=R(),l=H(),v=async(u,d)=>{var r;if(d.is_dir){const t=await G(T(p(),u,d.name),Q());if(t.code!==200)return t.message;const s=[];for(const e of(r=t.data.content)!=null?r:[]){const o=await v(T(u,d.name),e);if(typeof o=="string")return o;s.push(...o)}return s}else return B+=d.size,[{path:T(u,d.name),url:Y(T(p(),u),d,"direct",!0)}]},[w,y]=W([]);return(async()=>{let u=K(p());l.length===1&&(u=l[0].name),u||(u=n("manage.sidemenu.home"));let d=$.createWriteStream(`${u}.zip`,{size:B});f(n("home.package_download.fetching_struct")),g(2);const r=[];for(const e of l){const o=await v("",e);if(typeof o=="string")return f(`${n("home.package_download.fetching_struct_failed")}: ${o}`),g(1),o;r.push(...o)}f(n("home.package_download.downloading")),g(3);let t=r.values(),s=new window.ZIP({pull(e){const o=t.next();if(o.done)e.close();else{let i=te(o.value.path);l.length===1&&(i=i.replace(`${u}/`,""));const m=o.value.url;return fetch(m).then(M=>{y(x=>[...x,i]),e.enqueue({name:i,stream:M.body})})}}});if(window.WritableStream&&s.pipeTo)return s.pipeTo(d).then(()=>{f(`${n("home.package_download.success")}`),g(4)}).catch(e=>{f(`${n("home.package_download.failed")}: ${e}`),g(1)})})(),[S(N,{get children(){return S(I,{w:"$full",alignItems:"start",spacing:"$2",get children(){return[S(j,{get children(){return[k(()=>n("home.package_download.current_status")),": ",k(()=>a())]}}),S(z,{get each(){return w()},children:u=>S(Z,{css:{wordBreak:"break-all"},get children(){return["Fetching: ",u]}})})]}})}}),S(J,{get when(){return[1,4].includes(h())},get children(){return S(O,{get children(){return S(V,{colorScheme:"info",get onClick(){return c.onClose},get children(){return n("global.close")}})}})}})]};export{ae as default};
