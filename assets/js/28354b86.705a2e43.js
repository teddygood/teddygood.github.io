"use strict";(self.webpackChunkmy_blog=self.webpackChunkmy_blog||[]).push([[3066],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>y});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),u=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=u(r),y=a,g=d["".concat(i,".").concat(y)]||d[y]||c[y]||l;return r?n.createElement(g,p(p({ref:t},s),{},{components:r})):n.createElement(g,p({ref:t},s))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,p=new Array(l);p[0]=d;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:a,p[1]=o;for(var u=2;u<l;u++)p[u]=r[u];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5668:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>p,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var n=r(7462),a=(r(7294),r(3905));const l={title:"Tcgetpgrp Failed",date:"2022-07-16",authors:"teddygood",tags:["\uc0bd\uc9c8\uae30\ub85d"],draft:!1,description:"jupyter lab \uc2e4\ud589 \uc624\ub958",keywords:["Jupyter","WSL","Jupyter Notebook","Jupyter Lab"],sidebar_position:1},p=void 0,o={permalink:"/blog/python/Jupyter-lab-tcgetpgrp-failed",editUrl:"https://github.com/teddygood/teddygood.github.io/blog/python/Jupyter-lab-tcgetpgrp-failed.md",source:"@site/blog/python/Jupyter-lab-tcgetpgrp-failed.md",title:"Tcgetpgrp Failed",description:"jupyter lab \uc2e4\ud589 \uc624\ub958",date:"2022-07-16T00:00:00.000Z",formattedDate:"2022\ub144 7\uc6d4 16\uc77c",tags:[{label:"\uc0bd\uc9c8\uae30\ub85d",permalink:"/blog/tags/\uc0bd\uc9c8\uae30\ub85d"}],hasTruncateMarker:!1,authors:[{name:"Chanho Lee",title:"\ub2e4\uc591\ud55c \ubd84\uc57c\ub97c \uacf5\ubd80\ud558\ub294 \uac83\uc774 \uc88b\uc740 \ud559\uc0dd",url:"https://github.com/teddygood",imageURL:"https://github.com/teddygood.png",key:"teddygood"}],frontMatter:{title:"Tcgetpgrp Failed",date:"2022-07-16",authors:"teddygood",tags:["\uc0bd\uc9c8\uae30\ub85d"],draft:!1,description:"jupyter lab \uc2e4\ud589 \uc624\ub958",keywords:["Jupyter","WSL","Jupyter Notebook","Jupyter Lab"],sidebar_position:1},prevItem:{title:"\ud63c\uc790 \uacf5\ubd80\ud558\ub294 \ucef4\ud4e8\ud130 \uad6c\uc870+\uc6b4\uc601\uccb4\uc81c",permalink:"/blog/review/computer-structure-and-OS-to-study-alone"},nextItem:{title:"That port is already in use.",permalink:"/blog/python/django-port-is-already-in-use"}},i={authorsImageUrls:[void 0]},u=[{value:"\ubb38\uc81c",id:"\ubb38\uc81c",level:2},{value:"\ud574\uacb0 \ubc29\ubc95 1",id:"\ud574\uacb0-\ubc29\ubc95-1",level:2},{value:"\ud574\uacb0 \ubc29\ubc95 2",id:"\ud574\uacb0-\ubc29\ubc95-2",level:2},{value:"Appendix",id:"appendix",level:2},{value:"References",id:"references",level:2}],s={toc:u};function c(e){let{components:t,...l}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\ubb38\uc81c"},"\ubb38\uc81c"),(0,a.kt)("p",null,"\ubcf4\ud1b5 \uc8fc\ud53c\ud130 \ub178\ud2b8\ubd81 \ub610\ub294 \uc8fc\ud53c\ud130 \ub7a9\uc744 \uc0ac\uc6a9\ud560 \ub54c ",(0,a.kt)("inlineCode",{parentName:"p"},"jupyter notebook")," \ub610\ub294 ",(0,a.kt)("inlineCode",{parentName:"p"},"jupyter lab"),"\uc774\ub77c\ub294 \uba85\ub839\uc5b4\ub97c \uce58\uace0 \ub4e4\uc5b4\uac04\ub2e4. \ubcf4\ud1b5\uc740 \ube0c\ub77c\uc6b0\uc800\uc640 \ud568\uaed8 \uc8fc\ud53c\ud130\uac00 \uc2e4\ud589\ub418\ub294\ub370 \ube0c\ub77c\uc6b0\uc800\uac00 \uc5f4\ub9ac\uc9c0\ub3c4 \uc54a\uace0 \uc8fc\ud53c\ud130\uac00 \uc2e4\ud589\ub410\ub294\uc9c0\ub3c4 \ubaa8\ub974\ub294 \ubb38\uc81c\ub97c \ub9cc\ub0ac\ub2e4."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"\ubb38\uc81c",src:r(2186).Z,width:"763",height:"110"})),(0,a.kt)("p",null,"WSL\uc5d0\uc11c Jupyter Lab\uc744 \uc2e4\ud589\uc2dc\ud0a4\uba74 \uc704\uc758 \uc5d0\ub7ec \ubb38\uc7a5\uc774 1\ucd08\ub3c4 \uc548 \ub418\uac8c \ube60\ub974\uac8c \uc0ac\ub77c\uc9c0\uace0 \uac11\uc790\uae30 \ud130\ubbf8\ub110\uc774 clear\ub418\ub294 \uc0c1\ud669\uc774\ub2e4. Jupyter \uc11c\ubc84\uac00 \ub3cc\uc544\uac00\uace0 \uc788\ub294\uc9c0\ub3c4 \uc54c \uc218\uac00 \uc5c6\uc5c8\ub2e4. "),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"\uc8fc\ud53c\ud130 \ub85c\uadf8\uc778",src:r(7160).Z,width:"560",height:"859"})),(0,a.kt)("p",null,"\ud639\uc2dc\ub098 \uc11c\ubc84\uac00 \uc791\ub3d9\ud558\uace0 \uc788\ub294 \uac83\uc77c \uc218\ub3c4 \uc788\uc73c\ub2c8 Jupyter \uc8fc\uc18c\uc778 ",(0,a.kt)("inlineCode",{parentName:"p"},"localhost:8888"),"\uc5d0 \uc811\uc18d\ud574\ubd24\ub2e4. \uc11c\ubc84\ub294 \uc81c\ub300\ub85c \uc791\ub3d9\ud558\uace0 \uc788\ub294 \uac83\uc744 \ud655\uc778. \uadfc\ub370 \ubb38\uc81c\ub294 \ud1a0\ud070 \uac12\uc744 \ubaa8\ub978\ub2e4\ub294 \uac83\uc774\ub2e4. \ubcf4\ud1b5 Jupyter\ub97c \uc2e4\ud589\uc2dc\ud0ac \ub54c \ud130\ubbf8\ub110\uc5d0\uc11c \ud1a0\ud070\uc744 \ucd9c\ub825\uc2dc\ucf1c \ubcf4\uc5ec\uc900\ub2e4. \uc6b0\ub9ac\ub294 \uadf8\uac78 \ubcf5\uc0ac, \ubd99\uc5ec\ub123\uae30\ub97c \ud558\uba74 \ub41c\ub2e4. \uadf8\ub7ec\ub098 \uc9c0\uae08 \uc0c1\ud669\uc740 \ud130\ubbf8\ub110 \uc870\ucc28\ub3c4 clear\ub418\uc5b4 \uc788\uc73c\ubbc0\ub85c \ud1a0\ud070 \uac12\uc744 \ubaa8\ub978\ub2e4."),(0,a.kt)("h2",{id:"\ud574\uacb0-\ubc29\ubc95-1"},"\ud574\uacb0 \ubc29\ubc95 1"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"jupyter server list\n")),(0,a.kt)("p",null,"\uac00\uc7a5 \uc26c\uc6b4 \ubc29\ubc95\uc740 \ud130\ubbf8\ub110\uc744 \ud55c \uac1c \ub354 \uc5f4\uc5b4\uc11c \uc704\uc758 \uba85\ub839\uc5b4\ub97c \ub204\ub978 \ud6c4, \ud1a0\ud070 \uac12\uc744 \ud655\uc778\ud558\uc5ec \uc8fc\ud53c\ud130 \ub7a9\uc5d0 \uc811\uc18d\ud558\uba74 \ub41c\ub2e4."),(0,a.kt)("h2",{id:"\ud574\uacb0-\ubc29\ubc95-2"},"\ud574\uacb0 \ubc29\ubc95 2"),(0,a.kt)("p",null,"\uadfc\ub370 \uc704\uc758 \ubc29\ubc95\uc73c\ub85c \uc4f0\uba74 \uc194\uc9c1\ud788 \ub108\ubb34 \ubd88\ud3b8\ud558\uace0 \uc65c \uc800\ub7f0 \ubb38\uc81c\uac00 \uc0dd\uacbc\ub294\uc9c0 \uad81\uae08\ud558\uc5ec stackoverflow\uc5d0\uc11c \uac80\uc0c9\uc744 \uc880 \ud574\ubd24\ub2e4. \uc815\ud655\ud55c \uc6d0\uc778\uc740 \ubaa8\ub974\uaca0\uc73c\ub098 \ub2e4\ub978 \ud574\uacb0 \ubc29\ubc95 \ud558\ub098\ub97c \uc54c \uc218 \uc788\uc5c8\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"jupyter lab --no-browser\n")),(0,a.kt)("p",null,"\uac04\ub2e8\ud558\ub2e4. \uadf8\ub0e5 \uc704\uc758 \uba85\ub839\uc5b4\ub97c \uc2e4\ud589\uc2dc\ud0a4\uba74 \ub41c\ub2e4. \uc8fc\ud53c\ud130\ub97c \uc2e4\ud589\ub420 \ub54c \uac19\uc774 \ucf1c\uc9c0\ub294 \ube0c\ub77c\uc6b0\uc800\ub97c \uc0ac\uc6a9\ud558\uc9c0 \uc54a\uaca0\ub2e4\ub294 \uc758\ubbf8\uc774\ub2e4."),(0,a.kt)("p",null,"\uadf8\ub7fc \uc5b4\ub5bb\uac8c \uc8fc\ud53c\ud130\uc5d0 \uc811\uc18d\ud574\uc57c \ud558\ub294\uac00?  "),(0,a.kt)("p",null,"\uc8fc\uc18c\ub294 \uc8fc\ud53c\ud130\ub97c \uc2e4\ud589\uc2dc\ud0a4\uba74 \ud130\ubbf8\ub110\uc5d0 \ub098\uc628\ub2e4. \uc989, \uc6b0\ub9ac\uac00 \uc9c1\uc811 \ube0c\ub77c\uc6b0\uc800\ub97c \ucf1c\uc11c \uc8fc\uc18c\ub97c \uc785\ub825\ud558\uba74 \ub41c\ub2e4. "),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"\uc8fc\ud53c\ud130 \ub7a9",src:r(3891).Z,width:"1920",height:"929"})),(0,a.kt)("p",null,"\uadf8\ub7fc \uc704\uc640 \uac19\uc774 \uc81c\ub300\ub85c \uc0ac\uc774\ud2b8\uc5d0 \uc811\uc18d\ud560 \uc218 \uc788\uac8c \ub41c\ub2e4."),(0,a.kt)("h2",{id:"appendix"},"Appendix"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"\uc8fc\ud53c\ud130 \ub7a9",src:r(1151).Z,width:"1152",height:"484"})),(0,a.kt)("p",null,"GitHub\uc5d0 \uc788\ub294 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/jupyterlab/jupyterlab/issues/10413"},"jupyter lab Repo\uc758 issue"),"\ub97c \ud655\uc778\ud558\ub2c8 \ub098\ub791 \uac19\uc740 \ubb38\uc81c\ub97c \uc811\ud55c \uc0ac\ub78c\uc774 \uc788\uc5c8\uace0 \ub204\uad70\uac00\uc758 \ub2f5\ubcc0\uc744 \ud655\uc778\ud560 \uc218 \uc788\uc5c8\ub2e4. \uadf8\uc758 \ub2f5\ubcc0\uc744 \ub300\ucda9 \uc694\uc57d\ud558\uba74 \uc8fc\ud53c\ud130\ub791\uc740 \uad00\ub828\uc774 \uc5c6\uc73c\uba70 WSL\uacfc \uad00\ub828\uc774 \uc788\ub2e4\uace0 \ud55c\ub2e4. "),(0,a.kt)("p",null,"\ub300\ub7b5\uc801\uc73c\ub85c \uc608\uc0c1\ud574\ubcf4\uba74 \uc544\ub9c8 WSL\uc740 CLI\ub85c \uc774\ub8e8\uc5b4\uc9c4 \ud658\uacbd\uc774\ub77c \ube0c\ub77c\uc6b0\uc800\uac00 \uc5c6\uc73c\ub2c8 \uac70\uae30\uc11c \ube0c\ub77c\uc6b0\uc800\ub97c \uc791\ub3d9\uc2dc\ud0a4\ub824\uace0 \ud560 \ub54c \ubb38\uc81c\uac00 \uc0dd\uae38 \uc218 \uc788\ub2e4\uace0 \uc0dd\uac01\ud55c\ub2e4. "),(0,a.kt)("p",null,"\ub354 \uc0dd\uac01\ud574\ubcf4\uba74 WSL \uc790\uccb4\uac00 \uc560\ucd08\uc5d0 \uac00\uc0c1\ud658\uacbd\uc774\ub77c \uac70\uae30\uc11c \uc791\ub3d9\uc2dc\ucf1c \uc2e4\uc81c \ud658\uacbd\uc758 \ube0c\ub77c\uc6b0\uc800\ub97c \uc5ec\ub294 \uac83\uc774 \ubb38\uc81c\uac00 \uc788\uc744 \uc218\ub3c4 \uc788\ub2e4\uace0 \uc0dd\uac01\uc774 \ub4e0\ub2e4. "),(0,a.kt)("p",null,"\uadfc\ub370 \uadf8\ub807\uae30\uc5d0\ub294 WSL\uc5d0\uc11c VS Code\ub294 \ub108\ubb34 \uc798 \uc791\ub3d9\uc774 \ub418\ub294\ub370? \uc9c4\uc9dc \uc774\uc720\ub97c \ubaa8\ub974\uaca0\ub2e4."),(0,a.kt)("p",null,"\uc5b4\uca0c\ub4e0 \ub098\ub294 1\ubc88 \ubc29\ubc95\uc740 \uadc0\ucc2e\uc73c\ub2c8 WSL\uc5d0\uc11c Jupyter\ub97c \uc0ac\uc6a9\ud560 \uacbd\uc6b0\uc5d0\ub294 \uc544\ub9c8 2\ubc88 \ubc29\ubc95\uc744 \uc0ac\uc6a9\ud558\uc9c0 \uc54a\uc744\uae4c \uc2f6\ub2e4."),(0,a.kt)("h2",{id:"references"},"References"),(0,a.kt)("blockquote",null,(0,a.kt)("ul",{parentName:"blockquote"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://stackoverflow.com/questions/50882266/using-jupyter-with-windows-subsystem-for-linux"},"stackoverflow")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/jupyterlab/jupyterlab/issues/10413"},"jupyterlab repo issue")))))}c.isMDXComponent=!0},1151:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/github-issue-jupyter-0ec4b2d9e79e4de483d1e0f2fa7f261d.png"},3891:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/jupyter-lab-1c41fd1ae8a79968675ff33206860ac7.png"},7160:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/jupyter-login-c2a1493dc87bcf80f39ddb6de2a4027b.png"},2186:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/tcgetpgrp-failed-850d81b9688d88fbfec4ab88ae212f7b.png"}}]);