"use strict";(self.webpackChunkmy_blog=self.webpackChunkmy_blog||[]).push([[7779],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>s});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),c=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),g=c(r),s=o,y=g["".concat(i,".").concat(s)]||g[s]||d[s]||a;return r?n.createElement(y,p(p({ref:t},u),{},{components:r})):n.createElement(y,p({ref:t},u))}));function s(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,p=new Array(a);p[0]=g;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:o,p[1]=l;for(var c=2;c<a;c++)p[c]=r[c];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},4706:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>p,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var n=r(7462),o=(r(7294),r(3905));const a={title:"WSL2\uc5d0\uc11c Jupyter Lab \uc2e4\ud589 \ubb38\uc81c",date:"2022-07-16",authors:"teddygood",tags:["Problem Solving"],draft:!1,slug:"/Jupyter-lab-tcgetpgrp-failed",description:"Tcgetpgrp Failed",keywords:["Jupyter","WSL2","Jupyter Notebook","Jupyter Lab"]},p=void 0,l={permalink:"/blog/Jupyter-lab-tcgetpgrp-failed",editUrl:"https://github.com/teddygood/teddygood.github.io/blog/2022-07-16-Jupyter-lab-tcgetpgrp-failed/Jupyter-lab-tcgetpgrp-failed.md",source:"@site/blog/2022-07-16-Jupyter-lab-tcgetpgrp-failed/Jupyter-lab-tcgetpgrp-failed.md",title:"WSL2\uc5d0\uc11c Jupyter Lab \uc2e4\ud589 \ubb38\uc81c",description:"Tcgetpgrp Failed",date:"2022-07-16T00:00:00.000Z",formattedDate:"2022\ub144 7\uc6d4 16\uc77c",tags:[{label:"Problem Solving",permalink:"/blog/tags/problem-solving"}],hasTruncateMarker:!0,authors:[{name:"Chanho Lee",title:"\ub2e4\uc591\ud55c \ubd84\uc57c\ub97c \uacf5\ubd80\ud558\uace0 \uc788\ub294 \ud559\uc0dd",url:"https://github.com/teddygood",imageURL:"https://github.com/teddygood.png",key:"teddygood"}],frontMatter:{title:"WSL2\uc5d0\uc11c Jupyter Lab \uc2e4\ud589 \ubb38\uc81c",date:"2022-07-16",authors:"teddygood",tags:["Problem Solving"],draft:!1,slug:"/Jupyter-lab-tcgetpgrp-failed",description:"Tcgetpgrp Failed",keywords:["Jupyter","WSL2","Jupyter Notebook","Jupyter Lab"]},prevItem:{title:"\ud63c\uc790 \uacf5\ubd80\ud558\ub294 \ucef4\ud4e8\ud130 \uad6c\uc870+\uc6b4\uc601\uccb4\uc81c",permalink:"/blog/computer-structure-and-OS-to-study-alone"},nextItem:{title:"Hugo PaperMod theme \ud3f0\ud2b8 \ubcc0\uacbd\ud558\uae30",permalink:"/blog/change-font-in-papermod"}},i={authorsImageUrls:[void 0]},c=[{value:"\ubb38\uc81c",id:"\ubb38\uc81c",level:2}],u={toc:c};function d(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\ubb38\uc81c"},"\ubb38\uc81c"),(0,o.kt)("p",null,"\ubcf4\ud1b5 \uc8fc\ud53c\ud130 \ub178\ud2b8\ubd81 \ub610\ub294 \uc8fc\ud53c\ud130 \ub7a9\uc744 \uc0ac\uc6a9\ud560 \ub54c ",(0,o.kt)("inlineCode",{parentName:"p"},"jupyter notebook")," \ub610\ub294 ",(0,o.kt)("inlineCode",{parentName:"p"},"jupyter lab"),"\uc774\ub77c\ub294 \uba85\ub839\uc5b4\ub97c \uce58\uace0 \ub4e4\uc5b4\uac04\ub2e4. \ubcf4\ud1b5\uc740 \ube0c\ub77c\uc6b0\uc800\uc640 \ud568\uaed8 \uc8fc\ud53c\ud130\uac00 \uc2e4\ud589\ub418\ub294\ub370 \ube0c\ub77c\uc6b0\uc800\uac00 \uc5f4\ub9ac\uc9c0\ub3c4 \uc54a\uace0 \uc8fc\ud53c\ud130\uac00 \uc2e4\ud589\ub410\ub294\uc9c0\ub3c4 \ubaa8\ub974\ub294 \ubb38\uc81c\ub97c \ub9cc\ub0ac\ub2e4."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"\ubb38\uc81c",src:r(2031).Z,width:"763",height:"110"})),(0,o.kt)("p",null,"WSL2\uc5d0\uc11c Jupyter Lab\uc744 \uc2e4\ud589\uc2dc\ud0a4\uba74 \uc704\uc758 \uc5d0\ub7ec \ubb38\uc7a5\uc774 1\ucd08\ub3c4 \uc548 \ub418\uac8c \ube60\ub974\uac8c \uc0ac\ub77c\uc9c0\uace0 \uac11\uc790\uae30 \ud130\ubbf8\ub110\uc774 clear\ub418\ub294 \uc0c1\ud669\uc774\ub2e4. Jupyter \uc11c\ubc84\uac00 \ub3cc\uc544\uac00\uace0 \uc788\ub294\uc9c0\ub3c4 \uc54c \uc218\uac00 \uc5c6\uc5c8\ub2e4. "),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"\uc8fc\ud53c\ud130 \ub85c\uadf8\uc778",src:r(2156).Z,width:"560",height:"859"})),(0,o.kt)("p",null,"\ud639\uc2dc\ub098 \uc11c\ubc84\uac00 \uc791\ub3d9\ud558\uace0 \uc788\ub294 \uac83\uc77c \uc218\ub3c4 \uc788\uc73c\ub2c8 Jupyter \uc8fc\uc18c\uc778 ",(0,o.kt)("inlineCode",{parentName:"p"},"localhost:8888"),"\uc5d0 \uc811\uc18d\ud574\ubd24\ub2e4. \uc11c\ubc84\ub294 \uc81c\ub300\ub85c \uc791\ub3d9\ud558\uace0 \uc788\ub294 \uac83\uc744 \ud655\uc778. \uadfc\ub370 \ubb38\uc81c\ub294 \ud1a0\ud070 \uac12\uc744 \ubaa8\ub978\ub2e4\ub294 \uac83\uc774\ub2e4. \ubcf4\ud1b5 Jupyter\ub97c \uc2e4\ud589\uc2dc\ud0ac \ub54c \ud130\ubbf8\ub110\uc5d0\uc11c \ud1a0\ud070\uc744 \ucd9c\ub825\uc2dc\ucf1c \ubcf4\uc5ec\uc900\ub2e4. \uc6b0\ub9ac\ub294 \uadf8\uac78 \ubcf5\uc0ac, \ubd99\uc5ec\ub123\uae30\ub97c \ud558\uba74 \ub41c\ub2e4. \uadf8\ub7ec\ub098 \uc9c0\uae08 \uc0c1\ud669\uc740 \ud130\ubbf8\ub110 \uc870\ucc28\ub3c4 clear\ub418\uc5b4 \uc788\uc73c\ubbc0\ub85c \ud1a0\ud070 \uac12\uc744 \ubaa8\ub978\ub2e4."))}d.isMDXComponent=!0},2156:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/jupyter-login-c2a1493dc87bcf80f39ddb6de2a4027b.png"},2031:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/tcgetpgrp-failed-850d81b9688d88fbfec4ab88ae212f7b.png"}}]);