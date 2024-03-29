"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1428],{66062:function(e,t,n){n.d(t,{fC:function(){return C},z$:function(){return w}});var r=n(13428),o=n(2265),i=n(42210),u=n(56989),a=n(85744),c=n(73763),l=n(85184),f=n(94977),s=n(85606),d=n(9381);let p="Checkbox",[v,b]=(0,u.b)(p),[h,Z]=v(p),y=(0,o.forwardRef)((e,t)=>{let{__scopeCheckbox:n,name:u,checked:l,defaultChecked:f,required:s,disabled:p,value:v="on",onCheckedChange:b,...Z}=e,[y,k]=(0,o.useState)(null),C=(0,i.e)(t,e=>k(e)),w=(0,o.useRef)(!1),x=!y||!!y.closest("form"),[_=!1,D]=(0,c.T)({prop:l,defaultProp:f,onChange:b}),R=(0,o.useRef)(_);return(0,o.useEffect)(()=>{let e=null==y?void 0:y.form;if(e){let t=()=>D(R.current);return e.addEventListener("reset",t),()=>e.removeEventListener("reset",t)}},[y,D]),(0,o.createElement)(h,{scope:n,state:_,disabled:p},(0,o.createElement)(d.WV.button,(0,r.Z)({type:"button",role:"checkbox","aria-checked":E(_)?"mixed":_,"aria-required":s,"data-state":g(_),"data-disabled":p?"":void 0,disabled:p,value:v},Z,{ref:C,onKeyDown:(0,a.M)(e.onKeyDown,e=>{"Enter"===e.key&&e.preventDefault()}),onClick:(0,a.M)(e.onClick,e=>{D(e=>!!E(e)||!e),x&&(w.current=e.isPropagationStopped(),w.current||e.stopPropagation())})})),x&&(0,o.createElement)(m,{control:y,bubbles:!w.current,name:u,value:v,checked:_,required:s,disabled:p,style:{transform:"translateX(-100%)"}}))}),k=(0,o.forwardRef)((e,t)=>{let{__scopeCheckbox:n,forceMount:i,...u}=e,a=Z("CheckboxIndicator",n);return(0,o.createElement)(s.z,{present:i||E(a.state)||!0===a.state},(0,o.createElement)(d.WV.span,(0,r.Z)({"data-state":g(a.state),"data-disabled":a.disabled?"":void 0},u,{ref:t,style:{pointerEvents:"none",...e.style}})))}),m=e=>{let{control:t,checked:n,bubbles:i=!0,...u}=e,a=(0,o.useRef)(null),c=(0,l.D)(n),s=(0,f.t)(t);return(0,o.useEffect)(()=>{let e=a.current,t=window.HTMLInputElement.prototype,r=Object.getOwnPropertyDescriptor(t,"checked"),o=r.set;if(c!==n&&o){let t=new Event("click",{bubbles:i});e.indeterminate=E(n),o.call(e,!E(n)&&n),e.dispatchEvent(t)}},[c,n,i]),(0,o.createElement)("input",(0,r.Z)({type:"checkbox","aria-hidden":!0,defaultChecked:!E(n)&&n},u,{tabIndex:-1,ref:a,style:{...e.style,...s,position:"absolute",pointerEvents:"none",opacity:0,margin:0}}))};function E(e){return"indeterminate"===e}function g(e){return E(e)?"indeterminate":e?"checked":"unchecked"}let C=y,w=k},26823:function(e,t,n){n.d(t,{f:function(){return f}});var r=n(13428),o=n(2265),i=n(9381);let u="horizontal",a=["horizontal","vertical"],c=(0,o.forwardRef)((e,t)=>{let{decorative:n,orientation:a=u,...c}=e,f=l(a)?a:u;return(0,o.createElement)(i.WV.div,(0,r.Z)({"data-orientation":f},n?{role:"none"}:{"aria-orientation":"vertical"===f?f:void 0,role:"separator"},c,{ref:t}))});function l(e){return a.includes(e)}c.propTypes={orientation(e,t,n){let r=e[t],o=String(r);return r&&!l(r)?Error(`Invalid prop \`orientation\` of value \`${o}\` supplied to \`${n}\`, expected one of:
  - horizontal
  - vertical

Defaulting to \`${u}\`.`):null}};let f=c},85184:function(e,t,n){n.d(t,{D:function(){return o}});var r=n(2265);function o(e){let t=(0,r.useRef)({value:e,previous:e});return(0,r.useMemo)(()=>(t.current.value!==e&&(t.current.previous=t.current.value,t.current.value=e),t.current.previous),[e])}},89688:function(e,t){t.Z=function(e,t){for(var n=-1,r=null==e?0:e.length,o=Array(r);++n<r;)o[n]=t(e[n],n,e);return o}},72999:function(e,t){t.Z=function(e){for(var t=-1,n=null==e?0:e.length,r=0,o=[];++t<n;){var i=e[t];i&&(o[r++]=i)}return o}},42910:function(e,t,n){var r=n(42123),o=n(97113),i=n(98220),u=n(5541),a=n(85222),c=n(55250),l=n(26343),f=n(2856),s=Object.prototype.hasOwnProperty;t.Z=function(e){if(null==e)return!0;if((0,a.Z)(e)&&((0,u.Z)(e)||"string"==typeof e||"function"==typeof e.splice||(0,c.Z)(e)||(0,f.Z)(e)||(0,i.Z)(e)))return!e.length;var t=(0,o.Z)(e);if("[object Map]"==t||"[object Set]"==t)return!e.size;if((0,l.Z)(e))return!(0,r.Z)(e).length;for(var n in e)if(s.call(e,n))return!1;return!0}},45856:function(e,t,n){var r=n(87916),o=n(92403);t.Z=function(e){return"symbol"==typeof e||(0,o.Z)(e)&&"[object Symbol]"==(0,r.Z)(e)}},4091:function(e,t,n){n.d(t,{Z:function(){return p}});var r=/\s/,o=function(e){for(var t=e.length;t--&&r.test(e.charAt(t)););return t},i=/^\s+/,u=n(64164),a=n(45856),c=0/0,l=/^[-+]0x[0-9a-f]+$/i,f=/^0b[01]+$/i,s=/^0o[0-7]+$/i,d=parseInt,p=function(e){if("number"==typeof e)return e;if((0,a.Z)(e))return c;if((0,u.Z)(e)){var t,n="function"==typeof e.valueOf?e.valueOf():e;e=(0,u.Z)(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=(t=e)?t.slice(0,o(t)+1).replace(i,""):t;var r=f.test(e);return r||s.test(e)?d(e.slice(2),r?2:8):l.test(e)?c:+e}},16894:function(e,t,n){n.d(t,{Z:function(){return s}});var r=n(34463),o=n(89688),i=n(5541),u=n(45856),a=1/0,c=r.Z?r.Z.prototype:void 0,l=c?c.toString:void 0,f=function e(t){if("string"==typeof t)return t;if((0,i.Z)(t))return(0,o.Z)(t,e)+"";if((0,u.Z)(t))return l?l.call(t):"";var n=t+"";return"0"==n&&1/t==-a?"-0":n},s=function(e){return null==e?"":f(e)}}}]);