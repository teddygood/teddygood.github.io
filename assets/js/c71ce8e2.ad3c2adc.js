"use strict";(self.webpackChunkmy_blog=self.webpackChunkmy_blog||[]).push([[2604],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>m});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=o.createContext({}),p=function(e){var t=o.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=p(e.components);return o.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(r),m=n,f=u["".concat(c,".").concat(m)]||u[m]||s[m]||a;return r?o.createElement(f,i(i({ref:t},d),{},{components:r})):o.createElement(f,i({ref:t},d))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var p=2;p<a;p++)i[p]=r[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}u.displayName="MDXCreateElement"},4423:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>s,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var o=r(7462),n=(r(7294),r(3905));const a={title:"\ud83d\udcd6 \ubc11\ubc14\ub2e5\ubd80\ud130 \uc2dc\uc791\ud558\ub294 \ub525\ub7ec\ub2dd",date:"2021-07-19",authors:"teddygood",tags:["Book Review"],draft:!1,slug:"/deep-learning-from-scratch",description:"\ud30c\uc774\uc36c\uc73c\ub85c \uc775\ud788\ub294 \ub525\ub7ec\ub2dd \uc774\ub860\uacfc \uad6c\ud604",keywords:["\ub525\ub7ec\ub2dd","\uc2e0\uacbd\ub9dd","CNN"]},i=void 0,l={permalink:"/blog/deep-learning-from-scratch",editUrl:"https://github.com/teddygood/teddygood.github.io/tree/main/blog/2021-07-19-deep-learning-from-scratch/deep-learning-from-scratch.md",source:"@site/blog/2021-07-19-deep-learning-from-scratch/deep-learning-from-scratch.md",title:"\ud83d\udcd6 \ubc11\ubc14\ub2e5\ubd80\ud130 \uc2dc\uc791\ud558\ub294 \ub525\ub7ec\ub2dd",description:"\ud30c\uc774\uc36c\uc73c\ub85c \uc775\ud788\ub294 \ub525\ub7ec\ub2dd \uc774\ub860\uacfc \uad6c\ud604",date:"2021-07-19T00:00:00.000Z",formattedDate:"2021\ub144 7\uc6d4 19\uc77c",tags:[{label:"Book Review",permalink:"/blog/tags/book-review"}],hasTruncateMarker:!0,authors:[{name:"Chanho Lee",title:"\ub2e4\uc591\ud55c \ubd84\uc57c\ub97c \uacf5\ubd80\ud558\uace0 \uc788\ub294 \ud559\uc0dd",url:"https://github.com/teddygood",imageURL:"https://github.com/teddygood.png",key:"teddygood"}],frontMatter:{title:"\ud83d\udcd6 \ubc11\ubc14\ub2e5\ubd80\ud130 \uc2dc\uc791\ud558\ub294 \ub525\ub7ec\ub2dd",date:"2021-07-19",authors:"teddygood",tags:["Book Review"],draft:!1,slug:"/deep-learning-from-scratch",description:"\ud30c\uc774\uc36c\uc73c\ub85c \uc775\ud788\ub294 \ub525\ub7ec\ub2dd \uc774\ub860\uacfc \uad6c\ud604",keywords:["\ub525\ub7ec\ub2dd","\uc2e0\uacbd\ub9dd","CNN"]},prevItem:{title:"\ud83d\udcd6 \uba38\uc2e0\ub7ec\ub2dd\uc744 \ud65c\uc6a9\ud55c \uc6f9 \ucd5c\uc801\ud654",permalink:"/blog/ml-with-web-optimization"},nextItem:{title:"\ud83d\udcd6 \uc18c\ubb38\ub09c \uba85\uac15\uc758 \uae40\uc0c1\ud615\uc758 SQL \uc815\ubcf5",permalink:"/blog/conquest-sql"}},c={authorsImageUrls:[void 0]},p=[{value:"Book Info",id:"book-info",level:2}],d={toc:p};function s(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,o.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"book-info"},"Book Info"),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"\ucc45 \uc774\ubbf8\uc9c0\ub97c \ud074\ub9ad\ud558\uba74 \uad50\ubcf4\ubb38\uace0 \uc0ac\uc774\ud2b8\ub85c \uc774\ub3d9\ud569\ub2c8\ub2e4!")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"http://www.kyobobook.co.kr/product/detailViewKor.laf?ejkGb=KOR&mallGb=KOR&barcode=9788968484636&orderClick=LEa&Kc="},(0,n.kt)("img",{alt:"\ucc45",src:r(2652).Z,width:"458",height:"588"}))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\uc81c\ubaa9: \ubc11\ubc14\ub2e5\ubd99\ud130 \uc2dc\uc791\ud558\ub294 \ub525\ub7ec\ub2dd"),(0,n.kt)("li",{parentName:"ul"},"\uc800\uc790: Koki Saitoh(\uc0ac\uc774\ud1a0 \uace0\ud0a4)"),(0,n.kt)("li",{parentName:"ul"},"\uc5ed\uc790: \uac1c\uc55e\ub9f5\uc2dc"),(0,n.kt)("li",{parentName:"ul"},"\ucd9c\ud310\uc0ac: \ud55c\ube5b\ubbf8\ub514\uc5b4"),(0,n.kt)("li",{parentName:"ul"},"\ucd9c\uac04: 2017-01-03")))}s.isMDXComponent=!0},2652:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/deep-learning-from-scratch-0c4ad32fda69bb51b79c0079ed244f05.jpg"}}]);