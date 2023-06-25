"use strict";(self.webpackChunkmy_blog=self.webpackChunkmy_blog||[]).push([[7601],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>u});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=o.createContext({}),c=function(e){var t=o.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=c(e.components);return o.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),f=c(r),u=n,m=f["".concat(p,".").concat(u)]||f[u]||d[u]||a;return r?o.createElement(m,i(i({ref:t},s),{},{components:r})):o.createElement(m,i({ref:t},s))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=f;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}f.displayName="MDXCreateElement"},4894:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var o=r(7462),n=(r(7294),r(3905));const a={title:"\ud83d\udcd6 \ud14c\ub77c\ud3fc\uc73c\ub85c \uc2dc\uc791\ud558\ub294 IaC",date:"2023-06-24",authors:"teddygood",tags:["Book Review"],draft:!1,slug:"/terraform101",description:"\ud14c\ub77c\ud3fc \uc785\ubb38\ubd80\ud130 \uc2e4\ubb34 \uc801\uc6a9\uae4c\uc9c0 \uc62c\uc778\uc6d0 \uac00\uc774\ub4dc",keywords:["\ud14c\ub77c\ud3fc","IaC","DevOps"]},i=void 0,l={permalink:"/blog/terraform101",editUrl:"https://github.com/teddygood/teddygood.github.io/tree/main/blog/2023-06-24-terraform101/terraform101.md",source:"@site/blog/2023-06-24-terraform101/terraform101.md",title:"\ud83d\udcd6 \ud14c\ub77c\ud3fc\uc73c\ub85c \uc2dc\uc791\ud558\ub294 IaC",description:"\ud14c\ub77c\ud3fc \uc785\ubb38\ubd80\ud130 \uc2e4\ubb34 \uc801\uc6a9\uae4c\uc9c0 \uc62c\uc778\uc6d0 \uac00\uc774\ub4dc",date:"2023-06-24T00:00:00.000Z",formattedDate:"2023\ub144 6\uc6d4 24\uc77c",tags:[{label:"Book Review",permalink:"/blog/tags/book-review"}],hasTruncateMarker:!0,authors:[{name:"Chanho Lee",title:"\ub2e4\uc591\ud55c \ubd84\uc57c\ub97c \uacf5\ubd80\ud558\uace0 \uc788\ub294 \ud559\uc0dd",url:"https://github.com/teddygood",imageURL:"https://github.com/teddygood.png",key:"teddygood"}],frontMatter:{title:"\ud83d\udcd6 \ud14c\ub77c\ud3fc\uc73c\ub85c \uc2dc\uc791\ud558\ub294 IaC",date:"2023-06-24",authors:"teddygood",tags:["Book Review"],draft:!1,slug:"/terraform101",description:"\ud14c\ub77c\ud3fc \uc785\ubb38\ubd80\ud130 \uc2e4\ubb34 \uc801\uc6a9\uae4c\uc9c0 \uc62c\uc778\uc6d0 \uac00\uc774\ub4dc",keywords:["\ud14c\ub77c\ud3fc","IaC","DevOps"]},nextItem:{title:"\ud83d\udcd6 Docs for Developers \uae30\uc220 \ubb38\uc11c \uc791\uc131 \uc644\ubcbd \uac00\uc774\ub4dc",permalink:"/blog/docs-for-developers"}},p={authorsImageUrls:[void 0]},c=[{value:"Book Info",id:"book-info",level:2}],s={toc:c};function d(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,o.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"\ud55c\ube5b\ubbf8\ub514\uc5b4 <\ub098\ub294 \ub9ac\ubdf0\uc5b4\ub2e4> \ud65c\ub3d9\uc744 \uc704\ud574\uc11c \ucc45\uc744 \uc81c\uacf5\ubc1b\uc544 \uc791\uc131\ub41c \uc11c\ud3c9\uc785\ub2c8\ub2e4.")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"\ub098\ub294 \ub9ac\ubdf0\uc5b4\ub2e4 2023",src:r(1669).Z,width:"820",height:"312"})),(0,n.kt)("h2",{id:"book-info"},"Book Info"),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"\ucc45 \uc774\ubbf8\uc9c0\ub97c \ud074\ub9ad\ud558\uba74 \uad50\ubcf4\ubb38\uace0 \uc0ac\uc774\ud2b8\ub85c \uc774\ub3d9\ud569\ub2c8\ub2e4!")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://product.kyobobook.co.kr/detail/S000202478097"},(0,n.kt)("img",{alt:"\ucc45",src:r(5139).Z,width:"458",height:"588"}))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\uc81c\ubaa9: \ud14c\ub77c\ud3fc\uc73c\ub85c \uc2dc\uc791\ud558\ub294 IaC"),(0,n.kt)("li",{parentName:"ul"},"\uc800\uc790: \uae40\ubbfc\uc218, \uae40\uc7ac\uc900, \uc774\uaddc\uc11d, \uc774\uc720\uc885"),(0,n.kt)("li",{parentName:"ul"},"\ucd9c\ud310\uc0ac: \ud55c\ube5b\ubbf8\ub514\uc5b4"),(0,n.kt)("li",{parentName:"ul"},"\ucd9c\uac04: 2023-05-24")))}d.isMDXComponent=!0},1669:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/I-am-reviewer-2023-15f66121dfef41c3a85be9f34b706e71.jpg"},5139:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/terraform101-2c81c0cb75e5a4fd2cf758ae195045f6.jpg"}}]);