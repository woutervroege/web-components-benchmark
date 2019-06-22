function e(e,t,n){if(t=t||{},arguments.length>3){n=[n];for(let e=3;e<arguments.length;e++)n.push(arguments[e])}null!=n&&(t.children=n);let o={type:e,props:t},r=t.key;return null!=r&&(o.key=""+r),o}function t(t){return null!=t&&"boolean"!=typeof t||(t=""),"string"==typeof t||"number"==typeof t?e(null,null,""+t):t}const n=[],o={},r=Symbol("Atomico.state"),l="localName",s="host",i=97,u=116,a=79,c=77,p=73,h=67,d={children:1},f={innerHTML:1,textContent:1,contenteditable:1},y={className:1,id:1,checked:1,value:1,selected:1},b={},m={};let k,v,w=Promise.prototype.then.bind(Promise.resolve());function g(e){return"function"==typeof e}function C(e,t,n,o,r,l,s){if(n=null==n?null:n,o=null==o?null:o,(t="class"!=t||r?t:"className")in e&&y[t]&&(n=e[t]),o!==n)if("o"!=t[0]||"n"!=t[1]||!g(o)&&!g(n))switch(t){case"ref":o&&(o.current=e);break;case"style":!function(e,t,n){let o=t,r=n;if("object"==typeof r){r="";for(let e in n)n[e]&&(m[e]||(m[e]=e.replace(/([A-Z])/g,"-$1").toLowerCase()),r+=`${m[e]}:${n[e]};`)}o!=r&&(e.style.cssText=r)}(e,n||e.style.cssText,o);break;case"shadowDom":"attachShadow"in e&&(e.shadowRoot&&!o||!e.shadowRoot&&o)&&e.attachShadow({mode:o?"open":"closed"});break;case"key":t="data-key",null==o?delete e.dataset.key:e.dataset.key=o;break;default:!r&&"list"!=t&&t in e?e[t]=null==o?"":o:null==o?e.removeAttribute(t):e.setAttribute(t,o)}else!function(e,t,n,o,r){b[t]||(b[t]=t.slice(2).toLocaleLowerCase());t=b[t],o.handleEvent||(o.handleEvent=(e=>o[e.type].call(r,e)));n?(o[t]||e.addEventListener(t,o),o[t]=n):o[t]&&(e.removeEventListener(t,o),delete o[t])}(e,t,o,l,s)}function x(){if(!k)throw new Error("the hooks can only be called from an existing functional component in the diff queue");return k}function A(e,t){let n=e.length;for(let o=0;o<n;o++){let n=e[o],r=n.hooks,l=r.length;t.type===h&&(n.remove=!0);for(let e=0;e<l;e++){r[e][1](t)}}}function L(e,n){let o,r=[];function l(i,p){if(!o)return;if(!g((i=t(i)).type))return A(r.splice(p),{type:h}),o=N(e,o,i,n,s),void(r.length&&(o[e.id].updateComponent=s));let d,f,y=r[p]||{};y.type!=i.type&&(A(r.splice(p),{type:h}),r[p]=function e(t,n){for(let e in n)t[e]=n[e];for(let n=2;n<arguments.length;n++)e(t,arguments[n]);return t}({hooks:[],ref:{get current(){return o}}},i),d=!0,f=!0),y=r[p];let b=i.props,m=y.props;if(!f){let e=Object.keys(m).length,t=0;for(let e in b)if(t++,b[e]!=m[e]){f=!0;break}f=f||e!=t}y.props=b,f&&!y.prevent&&function e(){if(y.remove)return o;k={component:y,next(){y.prevent||(y.prevent=!0,w(()=>{y.prevent=!1,e()}))}},v=0,A([y],{type:u});let t=y.type(y.props);k=!1,v=0,l(t,p+1),A([y],{type:d?a:c}),d=!1}()}function s(e,t,n){switch(e){case u:return o=t,l(n,0),o;case p:A([].concat(r).reverse(),{type:e});break;case h:o=!1,A(r.reverse(),{type:e}),r=[]}}return s}function N(e,o,r,i,a){let{vnode:c,updateComponent:p,handlers:h={}}=o&&o[e.id]||{};if(c==r)return o;c=c||{props:{}};let{type:y,props:b}=r,{shadowDom:m,children:k}=b,v=g(y);if(i=i||"svg"==y,v&&!p&&(p=L(e,i)),!v&&y!=s&&function(e){if(!e)return;e[l]||(e[l]=e.nodeName.toLowerCase());let t=e[l];return"#text"==t?null:t}(o)!==y){let t=S(y,i),n=o&&o.parentNode;n&&(E(e,o,!0,a),n.replaceChild(t,o)),o=t,h={}}if(p&&a!=p)return p(u,o,r);if(null==y)o.nodeValue!=k&&(o.nodeValue=k);else{(function(e,t,n,o,r,l){t=t||{};for(let l in t)d[l]||l in n||C(e,l,t[l],null,o,r);let s;for(let i in n)d[i]||(C(e,i,t[i],n[i],o,r,l),s=s||f[i]);return s})(o,c.props,r.props,i,h,e.bind)||c.props.children==k||function(e,o,r,l){let s=[],i=function e(o,r,l,s,i=0){l=l||[];s=s||[];if(u=o,Array.isArray(u)){let t=o.length;for(let n=0;n<t;n++)e(o[n],r,l,s,i+1)}else{if(null==o&&!i)return n;let e=r?r(o,s.length):t(o);r||"object"==typeof e&&null!=e.key&&-1==l.indexOf(e.key)&&(l.push(e.key),l.withKeyes=!0),s.push(e)}var u;return s}(r,!1,s),u=i.length,a=o.childNodes,c={},p=a.length,h=s.withKeyes,d=h?0:p>u?u:p;for(;d<p;d++){let t=a[d],n=d;h&&(n=t.dataset.key,s.indexOf(n)>-1)?c[n]=t:(E(e.id,t),d--,p--,o.removeChild(t))}for(let t=0;t<u;t++){let n=i[t],r=a[t],s=h?n.key:t,u=h?c[s]:r;h&&u&&u!=r&&o.insertBefore(u,r);let p=N(e,!u&&g(n.type)?S(null):u,n,l);u||(a[t]?o.insertBefore(p,a[t]):o.appendChild(p))}}(e,m&&o.shadowRoot||o,k,i)}return o[e.id]={vnode:r,handlers:h},o}function E(e,t,n,o){let{updateComponent:r}=t[e]||{},l=t.childNodes,s=l.length;r&&r!=o&&r(n?p:h);for(let t=0;t<s;t++)E(e,l[t])}function S(e,t){let n,o=document;return n=null!=e?t?o.createElementNS("http://www.w3.org/2000/svg",e):o.createElement(e):o.createTextNode("")}function P(n,l,i=o){let u={id:i.id||r,bind:i.bind,host:i.host};n=t(n),u.host||n.type==s||(n=e(s,{},n)),N(u,l,n)}function $(e){let t=function(e,t){let n,o,r=x().component,l=v++;return r.hooks[l]||(o=!0,r.hooks[l]=[t,e=>{n[2]&&(n[0]=n[2](n[0],e))}]),(n=r.hooks[l])[2]=e,o&&n[1]({type:i}),n}(0,[])[0];if(!t[1]){let n=x().next;t.push(g(e)?e():e,function(e){t[0]=g(e)?e():e,n()})}return t}function j(e){return JSON.parse(e)}class O extends HTMLElement{constructor(){super(),this.props={},this.mounted=new Promise(e=>this.mount=e),this.unmounted=new Promise(e=>this.unmount=e)}connectedCallback(){this.mount()}disconnectedCallback(){this.unmount()}attributeChangedCallback(e,t,n){t!=n&&this.setProperty(e,n)}static get observedAttributes(){let e=this.observables||{},t=[],n=(e,t,n)=>{Object.defineProperty(this.prototype,e,{set(o){if(n===Boolean){let e=this.hasAttribute(t);if(o&&e||!o&&!e)return;this[o?"setAttribute":"removeAttribute"](t,"")}else this.setProperty(e,o)},get(){return this.props[e]}})};for(let o in e){let r=o.replace(/([A-Z])/g,"-$1").toLowerCase();t.push(r),name in this.prototype||n(o,r,e[o])}return t}setProperty(e,t){e=e.replace(/-(\w)/g,(e,t)=>t.toUpperCase());let n,{observables:o}=this.constructor,r=o[e];try{if("string"==typeof t)switch(r){case Boolean:t=1==j(t||"true");break;case Number:t=Number(t);break;case Object:case Array:t=j(t);break;case Function:t=window[t]}}catch(e){n=!0}if((n||{}.toString.call(t)!=`[object ${r.name}]`)&&null!=t)throw`the observable [${e}] must be of the type [${r.name}]`;this.props[e]!==t&&this.update({[e]:t})}}class R extends O{constructor(){let t;super();let n={id:Symbol("state"),bind:this,host:!0},{styles:o}=this.constructor;this.render=this.render.bind(this);let r={};this.update=(l=>{for(let e in l)r[e]=l[e];t||(t=!0,this.mounted.then(()=>{let l=this.props={...this.props};for(let e in r){null==r[e]?delete l[e]:l[e]=r[e]}r={},P(e(this.render,l),this,n),t=!1,o&&this.shadowRoot&&(this.shadowRoot.adoptedStyleSheets=o,o=null)}))}),this.unmounted.then(()=>P("",this,n)),this.update()}}let T={};function B({text:t}){return e("span",null,t)}var D,H;D="pascal-triangle",H=function(){let[t,n]=$(100);T[t]||(T[t]=function(e){const t=e,n=[];n[0]=[1],n[1]=[1,1];for(let e=2;e<t;e++){n[e]=[1];for(let t=1;t<=e-1;t++){const o=n[e-1];n[e][t]=o[t]+o[t-1],n[e].push(1)}}return n}(t));let o=T[t];return e("host",{shadowDom:!0},e("div",null,e("button",{onClick:()=>10!=t&&n(10)},"Load 10"),e("button",{onClick:()=>100!=t&&n(100)},"Load 100"),e("button",{onClick:()=>500!=t&&n(500)},"Load 500")),e("div",null,o.map(t=>e("div",null,t.map(t=>e(B,{text:t}))))))},customElements.define(D,H instanceof R?H:function(e){let t=class extends R{};return t.prototype.render=e,t.observables=e.observables,t.styles=e.styles,t}(H));
//# sourceMappingURL=atomico.mjs.map
