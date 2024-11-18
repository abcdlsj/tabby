"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3626],{35646:function(e,t,n){n.d(t,{q:function(){return d}});let r=/^[v^~<>=]*?(\d+)(?:\.([x*]|\d+)(?:\.([x*]|\d+)(?:\.([x*]|\d+))?(?:-([\da-z\-]+(?:\.[\da-z\-]+)*))?(?:\+[\da-z\-]+(?:\.[\da-z\-]+)*)?)?)?$/i,o=e=>{if("string"!=typeof e)throw TypeError("Invalid argument expected string");let t=e.match(r);if(!t)throw Error(`Invalid argument not valid semver ('${e}' received)`);return t.shift(),t},a=e=>"*"===e||"x"===e||"X"===e,l=e=>{let t=parseInt(e,10);return isNaN(t)?e:t},i=(e,t)=>typeof e!=typeof t?[String(e),String(t)]:[e,t],u=(e,t)=>{if(a(e)||a(t))return 0;let[n,r]=i(l(e),l(t));return n>r?1:n<r?-1:0},c=(e,t)=>{for(let n=0;n<Math.max(e.length,t.length);n++){let r=u(e[n]||"0",t[n]||"0");if(0!==r)return r}return 0},s=(e,t)=>{let n=o(e),r=o(t),a=n.pop(),l=r.pop(),i=c(n,r);return 0!==i?i:a&&l?c(a.split("."),l.split(".")):a||l?a?-1:1:0},d=(e,t,n)=>{p(n);let r=s(e,t);return f[n].includes(r)},f={">":[1],">=":[0,1],"=":[0],"<=":[-1,0],"<":[-1],"!=":[-1,1]},m=Object.keys(f),p=e=>{if("string"!=typeof e)throw TypeError(`Invalid operator type, expected string but got ${typeof e}`);if(-1===m.indexOf(e))throw Error(`Invalid operator, expected one of ${m.join("|")}`)}},28242:function(e,t,n){n.d(t,{F:function(){return c},f:function(){return s}});var r=n(3546);let o=["light","dark"],a="(prefers-color-scheme: dark)",l="undefined"==typeof window,i=(0,r.createContext)(void 0),u={setTheme:e=>{},themes:[]},c=()=>{var e;return null!==(e=(0,r.useContext)(i))&&void 0!==e?e:u},s=e=>(0,r.useContext)(i)?r.createElement(r.Fragment,null,e.children):r.createElement(f,e),d=["light","dark"],f=({forcedTheme:e,disableTransitionOnChange:t=!1,enableSystem:n=!0,enableColorScheme:l=!0,storageKey:u="theme",themes:c=d,defaultTheme:s=n?"system":"light",attribute:f="data-theme",value:b,children:g,nonce:y})=>{let[w,E]=(0,r.useState)(()=>p(u,s)),[C,S]=(0,r.useState)(()=>p(u)),$=b?Object.values(b):c,R=(0,r.useCallback)(e=>{let r=e;if(!r)return;"system"===e&&n&&(r=h());let a=b?b[r]:r,i=t?v():null,u=document.documentElement;if("class"===f?(u.classList.remove(...$),a&&u.classList.add(a)):a?u.setAttribute(f,a):u.removeAttribute(f),l){let e=o.includes(s)?s:null,t=o.includes(r)?r:e;u.style.colorScheme=t}null==i||i()},[]),x=(0,r.useCallback)(e=>{E(e);try{localStorage.setItem(u,e)}catch(e){}},[e]),T=(0,r.useCallback)(t=>{let r=h(t);S(r),"system"===w&&n&&!e&&R("system")},[w,e]);(0,r.useEffect)(()=>{let e=window.matchMedia(a);return e.addListener(T),T(e),()=>e.removeListener(T)},[T]),(0,r.useEffect)(()=>{let e=e=>{e.key===u&&x(e.newValue||s)};return window.addEventListener("storage",e),()=>window.removeEventListener("storage",e)},[x]),(0,r.useEffect)(()=>{R(null!=e?e:w)},[e,w]);let I=(0,r.useMemo)(()=>({theme:w,setTheme:x,forcedTheme:e,resolvedTheme:"system"===w?C:w,themes:n?[...c,"system"]:c,systemTheme:n?C:void 0}),[w,x,e,C,n,c]);return r.createElement(i.Provider,{value:I},r.createElement(m,{forcedTheme:e,disableTransitionOnChange:t,enableSystem:n,enableColorScheme:l,storageKey:u,themes:c,defaultTheme:s,attribute:f,value:b,children:g,attrs:$,nonce:y}),g)},m=(0,r.memo)(({forcedTheme:e,storageKey:t,attribute:n,enableSystem:l,enableColorScheme:i,defaultTheme:u,value:c,attrs:s,nonce:d})=>{let f="system"===u,m="class"===n?`var d=document.documentElement,c=d.classList;c.remove(${s.map(e=>`'${e}'`).join(",")});`:`var d=document.documentElement,n='${n}',s='setAttribute';`,p=i?o.includes(u)&&u?`if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${u}'`:"if(e==='light'||e==='dark')d.style.colorScheme=e":"",v=(e,t=!1,r=!0)=>{let a=c?c[e]:e,l=t?e+"|| ''":`'${a}'`,u="";return i&&r&&!t&&o.includes(e)&&(u+=`d.style.colorScheme = '${e}';`),"class"===n?u+=t||a?`c.add(${l})`:"null":a&&(u+=`d[s](n,${l})`),u},h=e?`!function(){${m}${v(e)}}()`:l?`!function(){try{${m}var e=localStorage.getItem('${t}');if('system'===e||(!e&&${f})){var t='${a}',m=window.matchMedia(t);if(m.media!==t||m.matches){${v("dark")}}else{${v("light")}}}else if(e){${c?`var x=${JSON.stringify(c)};`:""}${v(c?"x[e]":"e",!0)}}${f?"":"else{"+v(u,!1,!1)+"}"}${p}}catch(e){}}()`:`!function(){try{${m}var e=localStorage.getItem('${t}');if(e){${c?`var x=${JSON.stringify(c)};`:""}${v(c?"x[e]":"e",!0)}}else{${v(u,!1,!1)};}${p}}catch(t){}}();`;return r.createElement("script",{nonce:d,dangerouslySetInnerHTML:{__html:h}})},()=>!0),p=(e,t)=>{let n;if(!l){try{n=localStorage.getItem(e)||void 0}catch(e){}return n||t}},v=()=>{let e=document.createElement("style");return e.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(e),()=>{window.getComputedStyle(document.body),setTimeout(()=>{document.head.removeChild(e)},1)}},h=e=>(e||(e=window.matchMedia(a)),e.matches?"dark":"light")},54491:function(e,t,n){n.d(t,{u:function(){return r}});function r(e,[t,n]){return Math.min(n,Math.max(t,e))}},17989:function(e,t,n){n.d(t,{Fw:function(){return E},VY:function(){return x},fC:function(){return $},p_:function(){return v},wy:function(){return y},xz:function(){return R}});var r=n(65122),o=n(3546),a=n(65727),l=n(47091),i=n(27250),u=n(65292),c=n(79869),s=n(72205),d=n(96497),f=n(29434);let m="Collapsible",[p,v]=(0,l.b)(m),[h,b]=p(m),g=(0,o.forwardRef)((e,t)=>{let{__scopeCollapsible:n,open:a,defaultOpen:l,disabled:u,onOpenChange:c,...d}=e,[m=!1,p]=(0,i.T)({prop:a,defaultProp:l,onChange:c});return(0,o.createElement)(h,{scope:n,disabled:u,contentId:(0,f.M)(),open:m,onOpenToggle:(0,o.useCallback)(()=>p(e=>!e),[p])},(0,o.createElement)(s.WV.div,(0,r.Z)({"data-state":S(m),"data-disabled":u?"":void 0},d,{ref:t})))}),y=(0,o.forwardRef)((e,t)=>{let{__scopeCollapsible:n,...l}=e,i=b("CollapsibleTrigger",n);return(0,o.createElement)(s.WV.button,(0,r.Z)({type:"button","aria-controls":i.contentId,"aria-expanded":i.open||!1,"data-state":S(i.open),"data-disabled":i.disabled?"":void 0,disabled:i.disabled},l,{ref:t,onClick:(0,a.M)(e.onClick,i.onOpenToggle)}))}),w="CollapsibleContent",E=(0,o.forwardRef)((e,t)=>{let{forceMount:n,...a}=e,l=b(w,e.__scopeCollapsible);return(0,o.createElement)(d.z,{present:n||l.open},({present:e})=>(0,o.createElement)(C,(0,r.Z)({},a,{ref:t,present:e})))}),C=(0,o.forwardRef)((e,t)=>{let{__scopeCollapsible:n,present:a,children:l,...i}=e,d=b(w,n),[f,m]=(0,o.useState)(a),p=(0,o.useRef)(null),v=(0,c.e)(t,p),h=(0,o.useRef)(0),g=h.current,y=(0,o.useRef)(0),E=y.current,C=d.open||f,$=(0,o.useRef)(C),R=(0,o.useRef)();return(0,o.useEffect)(()=>{let e=requestAnimationFrame(()=>$.current=!1);return()=>cancelAnimationFrame(e)},[]),(0,u.b)(()=>{let e=p.current;if(e){R.current=R.current||{transitionDuration:e.style.transitionDuration,animationName:e.style.animationName},e.style.transitionDuration="0s",e.style.animationName="none";let t=e.getBoundingClientRect();h.current=t.height,y.current=t.width,$.current||(e.style.transitionDuration=R.current.transitionDuration,e.style.animationName=R.current.animationName),m(a)}},[d.open,a]),(0,o.createElement)(s.WV.div,(0,r.Z)({"data-state":S(d.open),"data-disabled":d.disabled?"":void 0,id:d.contentId,hidden:!C},i,{ref:v,style:{"--radix-collapsible-content-height":g?`${g}px`:void 0,"--radix-collapsible-content-width":E?`${E}px`:void 0,...e.style}}),C&&l)});function S(e){return e?"open":"closed"}let $=g,R=y,x=E},85656:function(e,t,n){n.d(t,{B:function(){return i}});var r=n(3546),o=n(47091),a=n(79869),l=n(74047);function i(e){let t=e+"CollectionProvider",[n,i]=(0,o.b)(t),[u,c]=n(t,{collectionRef:{current:null},itemMap:new Map}),s=e+"CollectionSlot",d=r.forwardRef((e,t)=>{let{scope:n,children:o}=e,i=c(s,n),u=(0,a.e)(t,i.collectionRef);return r.createElement(l.g7,{ref:u},o)}),f=e+"CollectionItemSlot",m="data-radix-collection-item",p=r.forwardRef((e,t)=>{let{scope:n,children:o,...i}=e,u=r.useRef(null),s=(0,a.e)(t,u),d=c(f,n);return r.useEffect(()=>(d.itemMap.set(u,{ref:u,...i}),()=>void d.itemMap.delete(u))),r.createElement(l.g7,{[m]:"",ref:s},o)});return[{Provider:e=>{let{scope:t,children:n}=e,o=r.useRef(null),a=r.useRef(new Map).current;return r.createElement(u,{scope:t,itemMap:a,collectionRef:o},n)},Slot:d,ItemSlot:p},function(t){let n=c(e+"CollectionConsumer",t),o=r.useCallback(()=>{let e=n.collectionRef.current;if(!e)return[];let t=Array.from(e.querySelectorAll(`[${m}]`)),r=Array.from(n.itemMap.values()),o=r.sort((e,n)=>t.indexOf(e.ref.current)-t.indexOf(n.ref.current));return o},[n.collectionRef,n.itemMap]);return o},i]}},57541:function(e,t,n){n.d(t,{gm:function(){return a}});var r=n(3546);let o=(0,r.createContext)(void 0);function a(e){let t=(0,r.useContext)(o);return e||t||"ltr"}},90893:function(e,t,n){n.d(t,{f:function(){return i}});var r=n(65122),o=n(3546),a=n(72205);let l=(0,o.forwardRef)((e,t)=>(0,o.createElement)(a.WV.label,(0,r.Z)({},e,{ref:t,onMouseDown:t=>{var n;null===(n=e.onMouseDown)||void 0===n||n.call(e,t),!t.defaultPrevented&&t.detail>1&&t.preventDefault()}}))),i=l},1333:function(e,t,n){n.d(t,{Pc:function(){return E},ck:function(){return k},fC:function(){return M}});var r=n(65122),o=n(3546),a=n(65727),l=n(85656),i=n(79869),u=n(47091),c=n(29434),s=n(72205),d=n(17957),f=n(27250),m=n(57541);let p="rovingFocusGroup.onEntryFocus",v={bubbles:!1,cancelable:!0},h="RovingFocusGroup",[b,g,y]=(0,l.B)(h),[w,E]=(0,u.b)(h,[y]),[C,S]=w(h),$=(0,o.forwardRef)((e,t)=>(0,o.createElement)(b.Provider,{scope:e.__scopeRovingFocusGroup},(0,o.createElement)(b.Slot,{scope:e.__scopeRovingFocusGroup},(0,o.createElement)(R,(0,r.Z)({},e,{ref:t}))))),R=(0,o.forwardRef)((e,t)=>{let{__scopeRovingFocusGroup:n,orientation:l,loop:u=!1,dir:c,currentTabStopId:h,defaultCurrentTabStopId:b,onCurrentTabStopIdChange:y,onEntryFocus:w,...E}=e,S=(0,o.useRef)(null),$=(0,i.e)(t,S),R=(0,m.gm)(c),[x=null,T]=(0,f.T)({prop:h,defaultProp:b,onChange:y}),[M,k]=(0,o.useState)(!1),F=(0,d.W)(w),A=g(n),_=(0,o.useRef)(!1),[Z,D]=(0,o.useState)(0);return(0,o.useEffect)(()=>{let e=S.current;if(e)return e.addEventListener(p,F),()=>e.removeEventListener(p,F)},[F]),(0,o.createElement)(C,{scope:n,orientation:l,dir:R,loop:u,currentTabStopId:x,onItemFocus:(0,o.useCallback)(e=>T(e),[T]),onItemShiftTab:(0,o.useCallback)(()=>k(!0),[]),onFocusableItemAdd:(0,o.useCallback)(()=>D(e=>e+1),[]),onFocusableItemRemove:(0,o.useCallback)(()=>D(e=>e-1),[])},(0,o.createElement)(s.WV.div,(0,r.Z)({tabIndex:M||0===Z?-1:0,"data-orientation":l},E,{ref:$,style:{outline:"none",...e.style},onMouseDown:(0,a.M)(e.onMouseDown,()=>{_.current=!0}),onFocus:(0,a.M)(e.onFocus,e=>{let t=!_.current;if(e.target===e.currentTarget&&t&&!M){let t=new CustomEvent(p,v);if(e.currentTarget.dispatchEvent(t),!t.defaultPrevented){let e=A().filter(e=>e.focusable),t=e.find(e=>e.active),n=e.find(e=>e.id===x),r=[t,n,...e].filter(Boolean),o=r.map(e=>e.ref.current);I(o)}}_.current=!1}),onBlur:(0,a.M)(e.onBlur,()=>k(!1))})))}),x=(0,o.forwardRef)((e,t)=>{let{__scopeRovingFocusGroup:n,focusable:l=!0,active:i=!1,tabStopId:u,...d}=e,f=(0,c.M)(),m=u||f,p=S("RovingFocusGroupItem",n),v=p.currentTabStopId===m,h=g(n),{onFocusableItemAdd:y,onFocusableItemRemove:w}=p;return(0,o.useEffect)(()=>{if(l)return y(),()=>w()},[l,y,w]),(0,o.createElement)(b.ItemSlot,{scope:n,id:m,focusable:l,active:i},(0,o.createElement)(s.WV.span,(0,r.Z)({tabIndex:v?0:-1,"data-orientation":p.orientation},d,{ref:t,onMouseDown:(0,a.M)(e.onMouseDown,e=>{l?p.onItemFocus(m):e.preventDefault()}),onFocus:(0,a.M)(e.onFocus,()=>p.onItemFocus(m)),onKeyDown:(0,a.M)(e.onKeyDown,e=>{if("Tab"===e.key&&e.shiftKey){p.onItemShiftTab();return}if(e.target!==e.currentTarget)return;let t=function(e,t,n){var r;let o=(r=e.key,"rtl"!==n?r:"ArrowLeft"===r?"ArrowRight":"ArrowRight"===r?"ArrowLeft":r);if(!("vertical"===t&&["ArrowLeft","ArrowRight"].includes(o))&&!("horizontal"===t&&["ArrowUp","ArrowDown"].includes(o)))return T[o]}(e,p.orientation,p.dir);if(void 0!==t){e.preventDefault();let o=h().filter(e=>e.focusable),a=o.map(e=>e.ref.current);if("last"===t)a.reverse();else if("prev"===t||"next"===t){var n,r;"prev"===t&&a.reverse();let o=a.indexOf(e.currentTarget);a=p.loop?(n=a,r=o+1,n.map((e,t)=>n[(r+t)%n.length])):a.slice(o+1)}setTimeout(()=>I(a))}})})))}),T={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"};function I(e){let t=document.activeElement;for(let n of e)if(n===t||(n.focus(),document.activeElement!==t))return}let M=$,k=x},74225:function(e,t,n){n.d(t,{f:function(){return s}});var r=n(65122),o=n(3546),a=n(72205);let l="horizontal",i=["horizontal","vertical"],u=(0,o.forwardRef)((e,t)=>{let{decorative:n,orientation:i=l,...u}=e,s=c(i)?i:l;return(0,o.createElement)(a.WV.div,(0,r.Z)({"data-orientation":s},n?{role:"none"}:{"aria-orientation":"vertical"===s?s:void 0,role:"separator"},u,{ref:t}))});function c(e){return i.includes(e)}u.propTypes={orientation(e,t,n){let r=e[t],o=String(r);return r&&!c(r)?Error(`Invalid prop \`orientation\` of value \`${o}\` supplied to \`${n}\`, expected one of:
  - horizontal
  - vertical

Defaulting to \`${l}\`.`):null}};let s=u},18216:function(e,t,n){var r=n(6670),o=/^\s+/;t.Z=function(e){return e?e.slice(0,(0,r.Z)(e)+1).replace(o,""):e}},6670:function(e,t){var n=/\s/;t.Z=function(e){for(var t=e.length;t--&&n.test(e.charAt(t)););return t}},96786:function(e,t){t.Z=function(e){return null!=e&&"object"==typeof e}},55357:function(e,t,n){var r=n(17996),o=n(96786);t.Z=function(e){return"symbol"==typeof e||(0,o.Z)(e)&&"[object Symbol]"==(0,r.Z)(e)}},26165:function(e,t,n){var r=n(18216),o=n(84639),a=n(55357),l=0/0,i=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,c=/^0o[0-7]+$/i,s=parseInt;t.Z=function(e){if("number"==typeof e)return e;if((0,a.Z)(e))return l;if((0,o.Z)(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=(0,o.Z)(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=(0,r.Z)(e);var n=u.test(e);return n||c.test(e)?s(e.slice(2),n?2:8):i.test(e)?l:+e}}}]);