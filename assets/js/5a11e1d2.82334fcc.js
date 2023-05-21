"use strict";(self.webpackChunkmy_blog=self.webpackChunkmy_blog||[]).push([[6375],{3905:(e,t,o)=>{o.d(t,{Zo:()=>d,kt:()=>m});var r=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var p=r.createContext({}),s=function(e){var t=r.useContext(p),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},d=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=s(o),m=n,f=u["".concat(p,".").concat(m)]||u[m]||c[m]||a;return o?r.createElement(f,i(i({ref:t},d),{},{components:o})):r.createElement(f,i({ref:t},d))}));function m(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,i=new Array(a);i[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var s=2;s<a;s++)i[s]=o[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,o)}u.displayName="MDXCreateElement"},9513:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=o(7462),n=(o(7294),o(3905));const a={title:"\ud83d\udcd6 Node.js \ubc31\uc5d4\ub4dc \uac1c\ubc1c\uc790 \ub418\uae30",date:"2023-05-21",authors:"teddygood",tags:["Book Review"],draft:!1,slug:"/become-a-node-js-engineer",description:"TypeScript + Node.js + Express + NestJS\ub85c \ubc30\uc6b0\ub294 \uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8 \ubc31\uc5d4\ub4dc \uc785\ubb38\uc790\ub97c \uc704\ud55c \ud480 \ud328\ud0a4\uc9c0",keywords:["TypeScript","Node.js","Express","NestJS"]},i=void 0,l={permalink:"/blog/become-a-node-js-engineer",editUrl:"https://github.com/teddygood/teddygood.github.io/tree/main/blog/2023-05-21-become-a-node-js-engineer/become-a-node-js-engineer.md",source:"@site/blog/2023-05-21-become-a-node-js-engineer/become-a-node-js-engineer.md",title:"\ud83d\udcd6 Node.js \ubc31\uc5d4\ub4dc \uac1c\ubc1c\uc790 \ub418\uae30",description:"TypeScript + Node.js + Express + NestJS\ub85c \ubc30\uc6b0\ub294 \uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8 \ubc31\uc5d4\ub4dc \uc785\ubb38\uc790\ub97c \uc704\ud55c \ud480 \ud328\ud0a4\uc9c0",date:"2023-05-21T00:00:00.000Z",formattedDate:"2023\ub144 5\uc6d4 21\uc77c",tags:[{label:"Book Review",permalink:"/blog/tags/book-review"}],hasTruncateMarker:!0,authors:[{name:"Chanho Lee",title:"\ub2e4\uc591\ud55c \ubd84\uc57c\ub97c \uacf5\ubd80\ud558\uace0 \uc788\ub294 \ud559\uc0dd",url:"https://github.com/teddygood",imageURL:"https://github.com/teddygood.png",key:"teddygood"}],frontMatter:{title:"\ud83d\udcd6 Node.js \ubc31\uc5d4\ub4dc \uac1c\ubc1c\uc790 \ub418\uae30",date:"2023-05-21",authors:"teddygood",tags:["Book Review"],draft:!1,slug:"/become-a-node-js-engineer",description:"TypeScript + Node.js + Express + NestJS\ub85c \ubc30\uc6b0\ub294 \uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8 \ubc31\uc5d4\ub4dc \uc785\ubb38\uc790\ub97c \uc704\ud55c \ud480 \ud328\ud0a4\uc9c0",keywords:["TypeScript","Node.js","Express","NestJS"]},nextItem:{title:"\ud83d\udcd6 \uac1c\ubc1c\uc790\ub97c \uc704\ud55c \uba38\uc2e0\ub7ec\ub2dd&\ub525\ub7ec\ub2dd",permalink:"/blog/AI-ML-4-Coders"}},p={authorsImageUrls:[void 0]},s=[{value:"Book Info",id:"book-info",level:2},{value:"Intro",id:"intro",level:2},{value:"Book Review",id:"book-review",level:2},{value:"\uc62c\uc778\uc6d0 \ucc45",id:"\uc62c\uc778\uc6d0-\ucc45",level:3},{value:"\ud0a4\uc6cc\ub4dc \uc81c\uc2dc",id:"\ud0a4\uc6cc\ub4dc-\uc81c\uc2dc",level:3},{value:"\ud2b8\ub80c\ub514\ud55c \ucc45",id:"\ud2b8\ub80c\ub514\ud55c-\ucc45",level:3},{value:"\ub300\uc0c1 \ub3c5\uc790",id:"\ub300\uc0c1-\ub3c5\uc790",level:2}],d={toc:s};function c(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"\uace8\ub4e0\ub798\ube57 \ucd9c\ud310\uc0ac\ub85c\ubd80\ud130 \ucc45\uc744 \uc81c\uacf5\ubc1b\uc544 \uc791\uc131\ud588\uc2b5\ub2c8\ub2e4.")),(0,n.kt)("h2",{id:"book-info"},"Book Info"),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"\ucc45 \uc774\ubbf8\uc9c0\ub97c \ud074\ub9ad\ud558\uba74 \uad50\ubcf4\ubb38\uace0 \uc0ac\uc774\ud2b8\ub85c \uc774\ub3d9\ud569\ub2c8\ub2e4!")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://product.kyobobook.co.kr/detail/S000201457949"},(0,n.kt)("img",{alt:"\ucc45",src:o(8803).Z,width:"458",height:"589"}))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\uc81c\ubaa9: Node.js \ubc31\uc5d4\ub4dc \uac1c\ubc1c\uc790 \ub418\uae30"),(0,n.kt)("li",{parentName:"ul"},"\uc800\uc790: \ubc15\uc2b9\uaddc"),(0,n.kt)("li",{parentName:"ul"},"\ucd9c\ud310\uc0ac: \uace8\ub4e0\ub798\ube57"),(0,n.kt)("li",{parentName:"ul"},"\ucd9c\uac04: 2023-04-15")),(0,n.kt)("h2",{id:"intro"},"Intro"),(0,n.kt)("p",null,'\ucd5c\uadfc Django, FastAPI\ub85c \ubb34\uc5b8\uac00 \ub9cc\ub4e4\uc5b4\ubcf4\ub824\uace0 \ub178\ub825\uc911\uc774\uc5c8\ub294\ub370 \uc218\ub9ce\uc740 \ucc44\uc6a9 \uacf5\uace0\ub4e4\uc744 \uc77d\uc5b4\ubcf4\ub2c8 \ud30c\uc774\uc36c \ubc31\uc5d4\ub4dc \uac1c\ubc1c\ub85c\ub294 \ucde8\uc5c5\uc5d0 \ud55c\uacc4\uac00 \uc788\uc744 \uac70\ub77c \uc0dd\uac01\ud558\uac8c \ub410\ub2e4. \uad73\uc774 \ud55c \uae30\uc220\ub9cc \ud314 \ud544\uc694\ub3c4 \uc5c6\uace0 \ub2e4\ub978 \uae30\uc220\ub4e4\ub3c4 \uacf5\ubd80\ud574\ubcf4\uace0 \uc2f6\ub2e4\uace0 \uc0dd\uac01\ud558\uc5ec \uc608\uc804\uc5d0 \uacbd\ud5d8\ud574\ubd24\ub358 Node.js\ub97c \uc120\ud0dd\ud558\uac8c \ub410\ub2e4. "Node.js \uac1c\ubc1c\uc790\uac00 \ub418\uae30 \uc704\ud574\uc11c\ub294 \uc5b4\ub5a4 \uac83\ub4e4\uc744 \uacf5\ubd80\ud574\uc57c \ud560\uae4c?" \ub77c\ub294 \uc0dd\uac01\uc5d0 \ucc44\uc6a9 \uacf5\uace0\ub4e4\uc744 \uc77d\uc5b4\ubd24\ub294\ub370 \uac00\ub054 NestJS\uac00 \uc801\ud600\uc788\ub294 \uac78 \ubcfc \uc218 \uc788\uc5c8\ub2e4. NestJS\ub294 \uc2a4\ud504\ub9c1\uacfc \ube44\uc2b7\ud55c \ub290\ub08c\uc758 \ud504\ub808\uc784\uc6cc\ud06c\ub77c\uace0 \ub9ce\uc774 \ub9d0\ud558\ub358\ub370 \uad81\uae08\ud574\uc11c \uc774 \uae30\uc220\ub3c4 \uacf5\ubd80\ud574\ubcf4\uace0 \uc2f6\uc5c8\ub2e4. \uadf8\ub7ec\ub358 \uc911 \ucd5c\uadfc \ud56b\ud55c IT \ucd9c\ud310\uc0ac\uc778 \uace8\ub4e0\ub798\ube57\uc5d0\uc11c \uc774 \ucc45\uc744 \ucd9c\uac04\ud558\uac8c \ub418\uc5b4 \ubd81\uc2a4\ud3ec\uc77c\ub7ec\ub97c \ubaa8\uc9d1\ud558\uace0 \uc788\uc5c8\ub2e4. Node.js \ubc31\uc5d4\ub4dc \uac1c\ubc1c\uc790\uac00 \ub418\uae30 \uc704\ud574 \ud544\uc694\ud55c \uae30\uc220\ub4e4\uc744 \ud55c\uad8c\uc5d0 \ub2f4\uace0 \uc788\ub2e4\uace0 \ud574\uc11c \uc9c0\uc6d0\ud588\uace0 \ub2f9\ucca8\ub418\uc5b4 \ucc45\uc744 \ubc1b\uac8c \ub418\uc5c8\ub2e4. '),(0,n.kt)("h2",{id:"book-review"},"Book Review"),(0,n.kt)("h3",{id:"\uc62c\uc778\uc6d0-\ucc45"},"\uc62c\uc778\uc6d0 \ucc45"),(0,n.kt)("p",null,"\uc774 \ucc45\uc740 Node.js \uac1c\ubc1c\uc790\uac00 \ub418\uae30 \uc704\ud55c \uae30\uc220\ub4e4\uc744 \uacf5\ubd80\ud560 \uc218 \uc788\ub294 \uc62c\uc778\uc6d0 \ucc45\uc774\ub2e4. \uc9c0\uae08\uae4c\uc9c0 \ub098\ub3c4 \ud55c \ubc88\uc5d0 \ub9ce\uc740 \uae30\uc220\ub4e4\uc744 \uacf5\ubd80\ud558\uace0 \uccb4\ud5d8\ud574\ubcfc \uc218 \uc788\ub294 \uc62c\uc778\uc6d0 \ucc45\ub4e4\uc744 \uc77d\uc5b4\uc654\uc9c0\ub9cc \ub2e8\uc5b8\ucf54 \uc774 \ucc45\uc774 \uc9c0\uae08\uae4c\uc9c0 \ucd5c\uace0\ub77c\uace0 \ub9d0\ud574\uc8fc\uace0 \uc2f6\ub2e4."),(0,n.kt)("p",null,'DB, \ub124\ud2b8\uc6cc\ud06c, Node.js, Express, JavaScript, TypeScript, NestJS \ub4f1 \uacf5\ubd80\ud574\uc57c \ud560 \uac83\ub4e4\uc774 \uc5b4\ub9c8\ubb34\uc2dc\ud558\uac8c \ub9ce\uc740\ub370 \uc774 \ucc45\uc740 \uc774 \ubaa8\ub4e0 \uac83\ub4e4\uc744 \ud55c \uad8c\uc5d0 \ub2f4\uc73c\ub824\uace0 \ub178\ub825\ud588\ub2e4. \uc138\ubd80\uc801\uc778 \uc124\uba85\uc774 \ub9ce\uc558\ub2e4. \ub2e4\uc2dc \ubd10\ub3c4 "\uc774\uac78 \uc5b4\ub5bb\uac8c \ub2e4 \ub2f4\uc558\uc9c0?"\ub77c\ub294 \uc0dd\uac01\uc774 \ub4e4 \uc815\ub3c4\uc774\ub2e4. '),(0,n.kt)("p",null,"DB, \ub124\ud2b8\uc6cc\ud06c \uadf8\ub9ac\uace0 \uc5b8\uc5b4\uc801\uc778 \ubd80\ubd84\uae4c\uc9c0\ub3c4 \uaf64 \uc790\uc138\ud558\uac8c \uc124\uba85\ud574\uc900\ub2e4. \uc194\uc9c1\ud788 \uc9c0\uae08\uae4c\uc9c0 \ubd10\uc654\ub358 \uc62c\uc778\uc6d0 \ucc45\ub4e4\uc740 \ub300\ucda9 \uc124\uba85\ud558\uc5ec \uad6c\uae00\ub9c1\uc744 \ud558\uba74\uc11c \uc77d\uc5b4\uc57c \ud558\ub294 \ucc45\ub4e4\ub3c4 \uaf64 \uc788\uc5c8\ub294\ub370 \uc774 \ucc45\uc740 \ub2ec\ub790\ub2e4. \uc124\uba85\uc774 \ub108\ubb34 \uc798 \ub418\uc5b4 \uc788\uc5b4\uc11c \ub180\ub77c\uc6b8 \uc815\ub3c4\uc600\ub2e4. "),(0,n.kt)("p",null,"\ud504\ub808\uc784\uc6cc\ud06c\uc5d0\ub9cc \uc9d1\uc911\ud558\ub2e4 \ubcf4\uba74 \uc5b8\uc5b4\uc801\uc778 \ubd80\ubd84\uc740 \uc124\uba85\uc774 \uc5c6\uae30 \ub9c8\ub828\uc778\ub370 \uc774 \ucc45\uc740 \ud0c0\uc785\uc2a4\ud06c\ub9bd\ud2b8\ub294 \ubd80\ub85d\uc73c\ub85c \ub530\ub85c \uc81c\uacf5\ud558\uae30\ub3c4 \ud558\uace0 \uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8\ub3c4 \ud544\uc218\uc801\uc73c\ub85c \uc54c\uc544\uc57c\ud558\ub294 \ubd80\ubd84\uc740 \uc124\uba85\ud574\uc900\ub2e4. \ud0c0\uc785\uc2a4\ud06c\ub9bd\ud2b8\uc5d0 \uc775\uc219\ud558\uc9c0 \uc54a\uc740 \ub098\ub3c4 \uc774 \ucc45\uc744 \ud3b8\ud558\uac8c \uc77d\uc744 \uc218 \uc788\uc5c8\ub2e4."),(0,n.kt)("p",null,"\ub610\ud55c, \ub9ac\ub205\uc2a4 \uba85\ub839\uc5b4\uc5d0 \uc775\uc219\ud558\uc9c0 \uc54a\uc740 \ub3c5\uc790\ub97c \uc704\ud574\uc11c \ubd80\ub85d\uc73c\ub85c \uba85\ub839\uc5b4\ub3c4 \uae30\uc220\ub418\uc5b4 \uc788\ub2e4. \uc815\ub9d0 \uc62c\uc778\uc6d0 \ucc45 \uc911 \uc774\ub807\uac8c \uc790\uc138\ud558\uac8c \uc124\uba85\ud574\uc8fc\ub294 \ucc45\uc740 \ucc98\uc74c\uc774\uc5c8\ub2e4."),(0,n.kt)("h3",{id:"\ud0a4\uc6cc\ub4dc-\uc81c\uc2dc"},"\ud0a4\uc6cc\ub4dc \uc81c\uc2dc"),(0,n.kt)("p",null,"\uc774 \ucc45 \ub610\ud55c \ud6c4\uc5d0 \uc5b4\ub5a4 \uac83\uc744 \ub354 \uacf5\ubd80\ud558\uba74 \uc88b\uc744\uc9c0 \ud0a4\uc6cc\ub4dc\ub97c \uc81c\uc2dc\ud574\uc900\ub2e4. \uc800\uc790\ubd84\uaed8\uc11c \uc62c\ub9ac\uc2e0 ",(0,n.kt)("a",{parentName:"p",href:"https://www.inflearn.com/course/%EC%B4%88%EB%B3%B4-%EB%B0%B1%EC%97%94%EB%93%9C-%EA%B0%9C%EB%B0%9C%EC%9E%90-%EB%A1%9C%EB%93%9C%EB%A7%B5"},"\uac15\uc758"),"\ub3c4 \ucc38\uace0\ud558\ub294 \uac83\uc744 \ucd94\ucc9c\ud55c\ub2e4. \uc774 \ucc45\uc744 \uc77d\uc73c\uba74\uc11c \ub354 \uacf5\ubd80\ud574\uc57c \ud560 \uac83\ub4e4\uc744 \ub354 \uba85\ud655\ud558\uac8c \uc54c \uc218 \uc788\uc5b4\uc11c \uc88b\uc558\ub2e4."),(0,n.kt)("h3",{id:"\ud2b8\ub80c\ub514\ud55c-\ucc45"},"\ud2b8\ub80c\ub514\ud55c \ucc45"),(0,n.kt)("p",null,"\uc774 \ucc45\uc740 \ucd5c\uadfc \ud56b\ud55c \uae30\uc220\uc778 NestJS\ub97c \uc0ac\uc6a9\ud55c\ub2e4\ub294 \uc810 \ub54c\ubb38\uc5d0 \ud2b8\ub80c\ub514\ud55c \ucc45\uc774\ub2e4. \ud604\uc7ac \ud55c\uad6d\uc5b4\ub85c \ucd9c\uac04\ub41c NestJS \ucc45\uc740 \uc774 \ucc45\uc774 \uc544\ub9c8 \ub450 \ubc88\uc9f8\uc77c \uac83\uc774\ub2e4. \uacf5\uc2dd \ubb38\uc11c\ub97c \uc77d\ub294 \uac83\ubcf4\ub2e4 \ucc45\uc73c\ub85c \uacf5\ubd80\ud558\ub294 \uac83\uc774 \ub354 \uc775\uc219\ud55c \ub3c5\uc790\uc5d0\uac8c\ub294 \uc815\ub9d0 \ub3c4\uc6c0\uc774 \ub9ce\uc774 \ub418\ub294 \ucc45\uc774\ub77c \uc0dd\uac01\ud55c\ub2e4. "),(0,n.kt)("h2",{id:"\ub300\uc0c1-\ub3c5\uc790"},"\ub300\uc0c1 \ub3c5\uc790"),(0,n.kt)("p",null,"\uc774 \ucc45\uc740 Node.js \ubc31\uc5d4\ub4dc \uac1c\ubc1c\uc790\uac00 \ub418\uae30 \uc704\ud55c \uae30\uc220\ub4e4\uc744 \uacf5\ubd80\ud558\uace0 \uc2f6\uc740 \uc0ac\ub78c\ub4e4\uc744 \uc704\ud55c \ucc45\uc774\ub2e4. \uc0ac\uc804 \uc9c0\uc2dd\uc73c\ub85c \uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8\ub97c \uc54c\uace0 \uc788\uc73c\uba74 \uc774 \ucc45\uc744 \uc77d\ub294\ub370 \ub3c4\uc6c0\uc774 \ub9ce\uc774 \ub420 \uac83\uc774\ub2e4."))}c.isMDXComponent=!0},8803:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/become-a-node-js-engineer-3f78104f57dd3d0c5fe6fbc3d4b9794c.jpg"}}]);