(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[214],{14375:function(e,n,t){"use strict";t.d(n,{j:function(){return o}});let r=e=>"boolean"==typeof e?"".concat(e):0===e?"0":e,i=function(){for(var e=arguments.length,n=Array(e),t=0;t<e;t++)n[t]=arguments[t];return n.flat(1/0).filter(Boolean).join(" ")},o=(e,n)=>t=>{var o;if((null==n?void 0:n.variants)==null)return i(e,null==t?void 0:t.class,null==t?void 0:t.className);let{variants:s,defaultVariants:l}=n,a=Object.keys(s).map(e=>{let n=null==t?void 0:t[e],i=null==l?void 0:l[e];if(null===n)return null;let o=r(n)||r(i);return s[e][o]}),u=t&&Object.entries(t).reduce((e,n)=>{let[t,r]=n;return void 0===r||(e[t]=r),e},{}),c=null==n?void 0:null===(o=n.compoundVariants)||void 0===o?void 0:o.reduce((e,n)=>{let{class:t,className:r,...i}=n;return Object.entries(i).every(e=>{let[n,t]=e;return Array.isArray(t)?t.includes({...l,...u}[n]):({...l,...u})[n]===t})?[...e,t,r]:e},[]);return i(e,a,c,null==t?void 0:t.class,null==t?void 0:t.className)}},7922:function(e,n,t){Promise.resolve().then(t.bind(t,71901))},55137:function(e,n,t){"use strict";t.d(n,{_:function(){return h}});var r=t(36164),i=t(3546),o=t(70652),s=t.n(o),l=t(11978),a=t(99092),u=t.n(a),c=t(1544),d=t(31458),f=t(81565),m=t(29);function v(e){let{onTrigger:n,isPending:t,jobLink:o}=e,s=(0,l.useRouter)(),[a,u]=i.useState(!1);return(0,r.jsxs)(m.u,{children:[(0,r.jsx)(m.aJ,{asChild:!0,children:(0,r.jsx)(d.z,{size:"icon",variant:"ghost",onClick:()=>{if(t){o&&s.push(o);return}let e=n();return e&&e instanceof Promise&&(u(!0),e.finally(()=>u(!1))),e},disabled:a,children:a||t?(0,r.jsx)(f.IconSpinner,{}):(0,r.jsx)(f.IconCirclePlay,{strokeWidth:1,className:"h-5 w-5"})})}),(0,r.jsx)(m._v,{children:(0,r.jsx)("p",{children:"Run"})})]})}function x(e){let{jobInfo:n,className:t}=e;return(null==n?void 0:n.lastJobRun)?(0,r.jsx)(s(),{href:"/jobs/detail?id=".concat(n.lastJobRun.id),className:(0,c.cn)("flex items-center gap-1 underline hover:text-foreground/50",t),children:u()(n.lastJobRun.createdAt).format("YYYY-MM-DD HH:mm")}):null}function h(e){var n;let{jobInfo:t,onTrigger:i,className:o}=e,s=!!(null==t?void 0:t.lastJobRun)&&null===t.lastJobRun.exitCode,l=(null==t?void 0:null===(n=t.lastJobRun)||void 0===n?void 0:n.id)?"/jobs/detail?id=".concat(t.lastJobRun.id):void 0;return(0,r.jsxs)("div",{className:(0,c.cn)("flex items-center gap-1",o),children:[(0,r.jsx)(x,{jobInfo:t,className:"hidden lg:block"}),(0,r.jsx)(v,{onTrigger:i,isPending:s,jobLink:l})]})}},71901:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return w}});var r=t(36164),i=t(70652),o=t.n(i),s=t(31458),l=t(3546),a=t(2578),u=t(40055),c=t(21808),d=t(43240),f=t(11634),m=t(70410),v=t(81565),x=t(49506),h=t(99047),g=t(6230),p=t(55137),j=t(14522);let b=(0,d.BX)("\n  mutation deleteGitRepository($id: ID!) {\n    deleteGitRepository(id: $id)\n  }\n"),N=c.L8;function y(){var e,n;let[t,i]=l.useState(),[{data:o,fetching:c},d]=(0,u.aM)({query:m.S1,variables:{last:N,before:t}}),[y,w]=l.useState(1),R=l.useMemo(()=>{var e,n;return null==o?void 0:null===(n=o.gitRepositories)||void 0===n?void 0:null===(e=n.edges)||void 0===e?void 0:e.slice().reverse()},[null==o?void 0:null===(e=o.gitRepositories)||void 0===e?void 0:e.edges]),_=null==o?void 0:null===(n=o.gitRepositories)||void 0===n?void 0:n.pageInfo,C=Math.ceil(((null==R?void 0:R.length)||0)/N),k=e=>{var n,t;return null==R?void 0:null===(t=R.slice(0,(e-1)*N))||void 0===t?void 0:null===(n=t.pop())||void 0===n?void 0:n.cursor},T=e=>{i(k(e))},I=l.useMemo(()=>{var e;return null==R?void 0:null===(e=R.slice)||void 0===e?void 0:e.call(R,(y-1)*N,y*N)},[y,R]),O=(null==_?void 0:_.hasPreviousPage)||y<C,S=y>1,Z=!!(null==I?void 0:I.length)&&(O||S),A=(0,f.D)(b),M=(0,f.D)(j.C),P=(e,n)=>{A({id:e}).then(e=>{var t,r;(null==e?void 0:null===(t=e.data)||void 0===t?void 0:t.deleteGitRepository)?T(n?y-1:y):a.A.error((null==e?void 0:null===(r=e.error)||void 0===r?void 0:r.message)||"Failed to delete repository")})},E=e=>M({command:e}).then(e=>{var n,t;(null==e?void 0:null===(n=e.data)||void 0===n?void 0:n.triggerJobRun)?(a.A.success("The job has been triggered successfully, it may take a few minutes to process."),d()):a.A.error((null==e?void 0:null===(t=e.error)||void 0===t?void 0:t.message)||"Failed to trigger job")});return l.useEffect(()=>{!c&&C<y&&y>1&&w(C)},[C,y]),(0,r.jsxs)(g.Z,{loading:c,children:[(0,r.jsxs)(h.iA,{className:"table-fixed border-t",children:[(0,r.jsx)(h.xD,{children:(0,r.jsxs)(h.SC,{children:[(0,r.jsx)(h.ss,{className:"w-[25%]",children:"Name"}),(0,r.jsx)(h.ss,{className:"w-[45%]",children:"Git URL"}),(0,r.jsx)(h.ss,{children:"Job"}),(0,r.jsx)(h.ss,{className:"w-[100px]"})]})}),(0,r.jsx)(h.RM,{children:(null==I?void 0:I.length)||1!==y?(0,r.jsx)(r.Fragment,{children:null==I?void 0:I.map(e=>(0,r.jsxs)(h.SC,{children:[(0,r.jsx)(h.pj,{className:"break-all lg:break-words",title:e.node.name,children:e.node.name}),(0,r.jsx)(h.pj,{className:"break-all lg:break-words",title:e.node.gitUrl,children:e.node.gitUrl}),(0,r.jsx)(h.pj,{children:(0,r.jsx)(p._,{jobInfo:e.node.jobInfo,onTrigger:()=>E(e.node.jobInfo.command)})}),(0,r.jsx)(h.pj,{className:"text-right",children:(0,r.jsx)(s.z,{size:"icon",variant:"hover-destructive",onClick:()=>P(e.node.id,1===I.length),children:(0,r.jsx)(v.IconTrash,{})})})]},e.node.id))}):(0,r.jsx)(h.SC,{children:(0,r.jsx)(h.pj,{colSpan:4,className:"h-[100px] text-center",children:"No Data"})})})]}),Z&&(0,r.jsx)(x.tl,{className:"my-4",children:(0,r.jsxs)(x.ng,{children:[(0,r.jsx)(x.nt,{children:(0,r.jsx)(x.dN,{disabled:!S,onClick:()=>{if(y<=1||c)return;let e=y-1;T(e),w(e)}})}),(0,r.jsx)(x.nt,{children:(0,r.jsx)(x.$0,{disabled:!O,onClick:()=>{if(!O||c)return;let e=y+1;T(e),w(e)}})})]})})]})}function w(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:"my-4 flex justify-end",children:(0,r.jsx)(o(),{href:"./git/new",className:(0,s.d)(),children:"Create"})}),(0,r.jsx)(y,{})]})}},14522:function(e,n,t){"use strict";t.d(n,{C:function(){return i}});var r=t(43240);let i=(0,r.BX)("\n  mutation triggerJobRun($command: String!) {\n    triggerJobRun(command: $command)\n  }\n")},6230:function(e,n,t){"use strict";var r=t(36164),i=t(3546),o=t(24449),s=t(90379);n.Z=e=>{let{loading:n,fallback:t,delay:l,children:a}=e,[u,c]=i.useState(!n),[d]=(0,o.n)(u,null!=l?l:200);return(i.useEffect(()=>{n||u||c(!0)},[n]),d)?a:t||(0,r.jsx)(s.cg,{})}},90379:function(e,n,t){"use strict";t.d(n,{PF:function(){return a},cg:function(){return s},tB:function(){return l}});var r=t(36164),i=t(1544),o=t(3448);let s=e=>{let{className:n,...t}=e;return(0,r.jsxs)("div",{className:(0,i.cn)("space-y-3",n),...t,children:[(0,r.jsx)(o.O,{className:"h-4 w-full"}),(0,r.jsx)(o.O,{className:"h-4 w-full"}),(0,r.jsx)(o.O,{className:"h-4 w-full"}),(0,r.jsx)(o.O,{className:"h-4 w-full"})]})},l=e=>{let{className:n,...t}=e;return(0,r.jsx)(o.O,{className:(0,i.cn)("h-4 w-full",n),...t})},a=e=>{let{className:n,...t}=e;return(0,r.jsxs)("div",{className:(0,i.cn)("flex flex-col gap-3",n),...t,children:[(0,r.jsx)(o.O,{className:"h-4 w-[20%]"}),(0,r.jsx)(o.O,{className:"h-4 w-full"}),(0,r.jsx)(o.O,{className:"h-4 w-[20%]"}),(0,r.jsx)(o.O,{className:"h-4 w-full"})]})}},31458:function(e,n,t){"use strict";t.d(n,{d:function(){return a},z:function(){return u}});var r=t(36164),i=t(3546),o=t(74047),s=t(14375),l=t(1544);let a=(0,s.j)("inline-flex items-center justify-center rounded-md text-sm font-medium shadow ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground shadow-md hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90","hover-destructive":"shadow-none hover:bg-destructive/90 hover:text-destructive-foreground",outline:"border border-input hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"shadow-none hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 shadow-none hover:underline"},size:{default:"h-8 px-4 py-2",sm:"h-8 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-8 w-8 p-0"}},defaultVariants:{variant:"default",size:"default"}}),u=i.forwardRef((e,n)=>{let{className:t,variant:i,size:s,asChild:u=!1,...c}=e,d=u?o.g7:"button";return(0,r.jsx)(d,{className:(0,l.cn)(a({variant:i,size:s,className:t})),ref:n,...c})});u.displayName="Button"},49506:function(e,n,t){"use strict";t.d(n,{$0:function(){return m},Dj:function(){return v},dN:function(){return f},kN:function(){return d},ng:function(){return u},nt:function(){return c},tl:function(){return a}});var r=t(36164),i=t(3546),o=t(1544),s=t(31458),l=t(81565);let a=e=>{let{className:n,...t}=e;return(0,r.jsx)("nav",{role:"navigation","aria-label":"pagination",className:(0,o.cn)("mx-auto flex w-full justify-center",n),...t})};a.displayName="Pagination";let u=i.forwardRef((e,n)=>{let{className:t,...i}=e;return(0,r.jsx)("ul",{ref:n,className:(0,o.cn)("flex flex-row items-center gap-1",t),...i})});u.displayName="PaginationContent";let c=i.forwardRef((e,n)=>{let{className:t,...i}=e;return(0,r.jsx)("li",{ref:n,className:(0,o.cn)("",t),...i})});c.displayName="PaginationItem";let d=e=>{let{className:n,isActive:t,size:i="icon",...l}=e;return(0,r.jsx)("a",{"aria-current":t?"page":void 0,className:(0,o.cn)("select-none",(0,s.d)({variant:t?"outline":"ghost",size:i}),n),...l})};d.displayName="PaginationLink";let f=e=>{let{className:n,disabled:t,...i}=e;return(0,r.jsxs)(d,{"aria-label":"Go to previous page",size:"default",className:(0,o.cn)("cursor-pointer select-none gap-1 pl-2.5",t&&"cursor-not-allowed text-muted-foreground",n),...i,children:[(0,r.jsx)(l.IconChevronLeft,{className:"h-4 w-4"}),(0,r.jsx)("span",{children:"Previous"})]})};f.displayName="PaginationPrevious";let m=e=>{let{className:n,disabled:t,...i}=e;return(0,r.jsxs)(d,{"aria-label":"Go to next page",size:"default",className:(0,o.cn)("cursor-pointer select-none gap-1 pr-2.5",t&&"cursor-not-allowed text-muted-foreground",n),...i,children:[(0,r.jsx)("span",{children:"Next"}),(0,r.jsx)(l.IconChevronRight,{className:"h-4 w-4"})]})};m.displayName="PaginationNext";let v=e=>{let{className:n,...t}=e;return(0,r.jsxs)("span",{"aria-hidden":!0,className:(0,o.cn)("flex h-9 w-9 items-center justify-center",n),...t,children:[(0,r.jsx)(l.IconMore,{className:"h-4 w-4"}),(0,r.jsx)("span",{className:"sr-only",children:"More pages"})]})};v.displayName="PaginationEllipsis"},3448:function(e,n,t){"use strict";t.d(n,{O:function(){return o}});var r=t(36164),i=t(1544);function o(e){let{className:n,...t}=e;return(0,r.jsx)("div",{className:(0,i.cn)("h-4 animate-pulse rounded-md bg-gray-200 dark:bg-gray-700",n),...t})}},99047:function(e,n,t){"use strict";t.d(n,{RM:function(){return a},SC:function(){return c},iA:function(){return s},pj:function(){return f},ss:function(){return d},xD:function(){return l}});var r=t(36164),i=t(3546),o=t(1544);let s=i.forwardRef((e,n)=>{let{className:t,...i}=e;return(0,r.jsx)("table",{ref:n,className:(0,o.cn)("w-full caption-bottom text-sm",t),...i})});s.displayName="Table";let l=i.forwardRef((e,n)=>{let{className:t,...i}=e;return(0,r.jsx)("thead",{ref:n,className:(0,o.cn)("[&_tr]:border-b",t),...i})});l.displayName="TableHeader";let a=i.forwardRef((e,n)=>{let{className:t,...i}=e;return(0,r.jsx)("tbody",{ref:n,className:(0,o.cn)("[&_tr:last-child]:border-0",t),...i})});a.displayName="TableBody";let u=i.forwardRef((e,n)=>{let{className:t,...i}=e;return(0,r.jsx)("tfoot",{ref:n,className:(0,o.cn)("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",t),...i})});u.displayName="TableFooter";let c=i.forwardRef((e,n)=>{let{className:t,...i}=e;return(0,r.jsx)("tr",{ref:n,className:(0,o.cn)("border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",t),...i})});c.displayName="TableRow";let d=i.forwardRef((e,n)=>{let{className:t,...i}=e;return(0,r.jsx)("th",{ref:n,className:(0,o.cn)("h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0",t),...i})});d.displayName="TableHead";let f=i.forwardRef((e,n)=>{let{className:t,...i}=e;return(0,r.jsx)("td",{ref:n,className:(0,o.cn)("p-4 align-middle [&:has([role=checkbox])]:pr-0",t),...i})});f.displayName="TableCell";let m=i.forwardRef((e,n)=>{let{className:t,...i}=e;return(0,r.jsx)("caption",{ref:n,className:(0,o.cn)("mt-4 text-sm text-muted-foreground",t),...i})});m.displayName="TableCaption"},29:function(e,n,t){"use strict";t.d(n,{_v:function(){return c},aJ:function(){return u},pn:function(){return l},u:function(){return a}});var r=t(36164),i=t(3546),o=t(44421),s=t(1544);let l=o.zt,a=o.fC,u=o.xz,c=i.forwardRef((e,n)=>{let{className:t,sideOffset:i=4,...l}=e;return(0,r.jsx)(o.VY,{ref:n,sideOffset:i,className:(0,s.cn)("z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-xs font-medium text-popover-foreground shadow-md animate-in fade-in-50 data-[side=bottom]:slide-in-from-top-1 data-[side=left]:slide-in-from-right-1 data-[side=right]:slide-in-from-left-1 data-[side=top]:slide-in-from-bottom-1",t),...l})});c.displayName=o.VY.displayName},21808:function(e,n,t){"use strict";t.d(n,{$6:function(){return o},L8:function(){return i},o0:function(){return r}});let r="name@yourcompany.com",i=20,o={DEMO_AUTO_LOGIN:"_tabby_demo_autologin",SEARCH_INITIAL_MSG:"_tabby_search_initial_msg",SEARCH_INITIAL_CONTEXTS:"_tabby_search_initial_contexts"}},24449:function(e,n,t){"use strict";t.d(n,{S:function(){return l},n:function(){return a}});var r=t(3546),i=t(45391),o=t(16784);let s=e=>{let n=(0,o.d)(e);r.useEffect(()=>()=>{n.current()},[])};function l(e,n,t){let l=(0,o.d)(e),a=r.useMemo(()=>(0,i.Z)(function(){for(var e=arguments.length,n=Array(e),t=0;t<e;t++)n[t]=arguments[t];return l.current(...n)},n,t),[]);return s(()=>{var e;null==t||null===(e=t.onUnmount)||void 0===e||e.call(t,a),a.cancel()}),{run:a,cancel:a.cancel,flush:a.flush}}function a(e,n,t){let[i,o]=r.useState(e),{run:s}=l(()=>{o(e)},n,t);return r.useEffect(()=>{s()},[e]),[i,o]}},16784:function(e,n,t){"use strict";t.d(n,{d:function(){return i}});var r=t(3546);function i(e){let n=r.useRef(e);return n.current=e,n}},70652:function(e,n,t){e.exports=t(54007)},29434:function(e,n,t){"use strict";t.d(n,{M:function(){return a}});var r,i=t(3546),o=t(65292);let s=(r||(r=t.t(i,2)))["useId".toString()]||(()=>void 0),l=0;function a(e){let[n,t]=i.useState(s());return(0,o.b)(()=>{e||t(e=>null!=e?e:String(l++))},[e]),e||(n?`radix-${n}`:"")}},18216:function(e,n,t){"use strict";var r=t(6670),i=/^\s+/;n.Z=function(e){return e?e.slice(0,(0,r.Z)(e)+1).replace(i,""):e}},6670:function(e,n){"use strict";var t=/\s/;n.Z=function(e){for(var n=e.length;n--&&t.test(e.charAt(n)););return n}},45391:function(e,n,t){"use strict";t.d(n,{Z:function(){return u}});var r=t(84639),i=t(48717),o=function(){return i.Z.Date.now()},s=t(26165),l=Math.max,a=Math.min,u=function(e,n,t){var i,u,c,d,f,m,v=0,x=!1,h=!1,g=!0;if("function"!=typeof e)throw TypeError("Expected a function");function p(n){var t=i,r=u;return i=u=void 0,v=n,d=e.apply(r,t)}function j(e){var t=e-m,r=e-v;return void 0===m||t>=n||t<0||h&&r>=c}function b(){var e,t,r,i=o();if(j(i))return N(i);f=setTimeout(b,(e=i-m,t=i-v,r=n-e,h?a(r,c-t):r))}function N(e){return(f=void 0,g&&i)?p(e):(i=u=void 0,d)}function y(){var e,t=o(),r=j(t);if(i=arguments,u=this,m=t,r){if(void 0===f)return v=e=m,f=setTimeout(b,n),x?p(e):d;if(h)return clearTimeout(f),f=setTimeout(b,n),p(m)}return void 0===f&&(f=setTimeout(b,n)),d}return n=(0,s.Z)(n)||0,(0,r.Z)(t)&&(x=!!t.leading,c=(h="maxWait"in t)?l((0,s.Z)(t.maxWait)||0,n):c,g="trailing"in t?!!t.trailing:g),y.cancel=function(){void 0!==f&&clearTimeout(f),v=0,i=m=u=f=void 0},y.flush=function(){return void 0===f?d:N(o())},y}},96786:function(e,n){"use strict";n.Z=function(e){return null!=e&&"object"==typeof e}},55357:function(e,n,t){"use strict";var r=t(17996),i=t(96786);n.Z=function(e){return"symbol"==typeof e||(0,i.Z)(e)&&"[object Symbol]"==(0,r.Z)(e)}},26165:function(e,n,t){"use strict";var r=t(18216),i=t(84639),o=t(55357),s=0/0,l=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,u=/^0o[0-7]+$/i,c=parseInt;n.Z=function(e){if("number"==typeof e)return e;if((0,o.Z)(e))return s;if((0,i.Z)(e)){var n="function"==typeof e.valueOf?e.valueOf():e;e=(0,i.Z)(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=(0,r.Z)(e);var t=a.test(e);return t||u.test(e)?c(e.slice(2),t?2:8):l.test(e)?s:+e}}},function(e){e.O(0,[7565,1386,5498,1058,4007,8439,1283,3449,2578,4421,1544,1565,410,3396,3375,5289,1744],function(){return e(e.s=7922)}),_N_E=e.O()}]);