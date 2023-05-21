"use strict";(self.webpackChunkmy_blog=self.webpackChunkmy_blog||[]).push([[1880],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),d=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=d(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=d(n),m=o,k=u["".concat(p,".").concat(m)]||u[m]||c[m]||a;return n?r.createElement(k,l(l({ref:t},s),{},{components:n})):r.createElement(k,l({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var d=2;d<a;d++)l[d]=n[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1763:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>a,metadata:()=>i,toc:()=>d});var r=n(7462),o=(n(7294),n(3905));const a={title:"\ud83d\udcd6 \ud55c \uad8c\uc73c\ub85c \ub05d\ub0b4\ub294 Node & Express",date:"2021-05-20",authors:"teddygood",tags:["Book Review"],draft:!1,slug:"/web-development-with-node-and-express",description:"\ubaa8\ub358 \uc6f9\uc744 \uc704\ud55c \uc11c\ubc84 \uc0ac\uc774\ub4dc \uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8\uc758 \ubaa8\ub4e0 \uac83",keywords:["Node.js","Express","\ubc31\uc5d4\ub4dc","JavaScirpt"]},l=void 0,i={permalink:"/blog/web-development-with-node-and-express",editUrl:"https://github.com/teddygood/teddygood.github.io/tree/main/blog/2021-05-20-web-development-with-node-and-express/web-development-with-node-and-express.md",source:"@site/blog/2021-05-20-web-development-with-node-and-express/web-development-with-node-and-express.md",title:"\ud83d\udcd6 \ud55c \uad8c\uc73c\ub85c \ub05d\ub0b4\ub294 Node & Express",description:"\ubaa8\ub358 \uc6f9\uc744 \uc704\ud55c \uc11c\ubc84 \uc0ac\uc774\ub4dc \uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8\uc758 \ubaa8\ub4e0 \uac83",date:"2021-05-20T00:00:00.000Z",formattedDate:"2021\ub144 5\uc6d4 20\uc77c",tags:[{label:"Book Review",permalink:"/blog/tags/book-review"}],hasTruncateMarker:!1,authors:[{name:"Chanho Lee",title:"\ub2e4\uc591\ud55c \ubd84\uc57c\ub97c \uacf5\ubd80\ud558\uace0 \uc788\ub294 \ud559\uc0dd",url:"https://github.com/teddygood",imageURL:"https://github.com/teddygood.png",key:"teddygood"}],frontMatter:{title:"\ud83d\udcd6 \ud55c \uad8c\uc73c\ub85c \ub05d\ub0b4\ub294 Node & Express",date:"2021-05-20",authors:"teddygood",tags:["Book Review"],draft:!1,slug:"/web-development-with-node-and-express",description:"\ubaa8\ub358 \uc6f9\uc744 \uc704\ud55c \uc11c\ubc84 \uc0ac\uc774\ub4dc \uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8\uc758 \ubaa8\ub4e0 \uac83",keywords:["Node.js","Express","\ubc31\uc5d4\ub4dc","JavaScirpt"]},prevItem:{title:"\ud83d\udcd6 Do it! \uc7a5\uace0+\ubd80\ud2b8\uc2a4\ud2b8\ub7a9 \ud30c\uc774\uc36c \uc6f9 \uac1c\ubc1c\uc758 \uc815\uc11d",permalink:"/blog/Do-it-django-bootstrap"},nextItem:{title:"\ud83d\udcd6 \uc544\ub9c8\uc874 \uc6f9 \uc11c\ube44\uc2a4 AWS Discovery Book",permalink:"/blog/AWS-Discovery-Book"}},p={authorsImageUrls:[void 0]},d=[{value:"Book Info",id:"book-info",level:2},{value:"\uc774 \ucc45\uc744 \uc77d\uac8c \ub41c \uc774\uc720",id:"\uc774-\ucc45\uc744-\uc77d\uac8c-\ub41c-\uc774\uc720",level:2},{value:"\ucc45 \ub9ac\ubdf0",id:"\ucc45-\ub9ac\ubdf0",level:2},{value:"\ub300\uc0c1 \ub3c5\uc790",id:"\ub300\uc0c1-\ub3c5\uc790",level:2}],s={toc:d};function c(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,r.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"\ub098\ub294 \ub9ac\ubdf0\uc5b4\ub2e4 2021",src:n(4764).Z,width:"820",height:"312"})),(0,o.kt)("h2",{id:"book-info"},"Book Info"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"http://www.kyobobook.co.kr/product/detailViewKor.laf?ejkGb=KOR&mallGb=KOR&barcode=9791162244227&orderClick=LAG&Kc="},(0,o.kt)("img",{alt:"\ucc45",src:n(8609).Z,width:"690",height:"886"}))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\uc81c\ubaa9: \ud55c \uad8c\uc73c\ub85c \ub05d\ub0b4\ub294 Node & Express"),(0,o.kt)("li",{parentName:"ul"},"\uc800\uc790: Ethan Brown"),(0,o.kt)("li",{parentName:"ul"},"\uc5ed\uc790: \ud55c\uc120\uc6a9"),(0,o.kt)("li",{parentName:"ul"},"\ucd9c\ud310\uc0ac: \ud55c\ube5b\ubbf8\ub514\uc5b4"),(0,o.kt)("li",{parentName:"ul"},"\ucd9c\uac04: 2021-05-01")),(0,o.kt)("h2",{id:"\uc774-\ucc45\uc744-\uc77d\uac8c-\ub41c-\uc774\uc720"},"\uc774 \ucc45\uc744 \uc77d\uac8c \ub41c \uc774\uc720"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'"\ud55c\ube5b\ubbf8\ub514\uc5b4 <\ub098\ub294 \ub9ac\ubdf0\uc5b4\ub2e4> \ud65c\ub3d9\uc744 \uc704\ud574\uc11c \ucc45\uc744 \uc81c\uacf5\ubc1b\uc544 \uc791\uc131\ub41c \uc11c\ud3c9\uc785\ub2c8\ub2e4."\n')),(0,o.kt)("p",null,"\uc774 \ucc45\uc740 \ud55c\ube5b\ubbf8\ub514\uc5b4\uc5d0\uc11c \uc9c4\ud589\ud558\ub294 ",(0,o.kt)("inlineCode",{parentName:"p"},"\ub098\ub294 \ub9ac\ubdf0\uc5b4\ub2e4 2021"),"\uc5d0 \ucc38\uc5ec\ud558\uac8c \ub418\uc5b4 \uc77d\uac8c \ub410\uc2b5\ub2c8\ub2e4. \ub9e4 \ub2ec\ub9c8\ub2e4 \ub098\ub294 \ub9ac\ubdf0\uc5b4\ub2e4 \ud65c\ub3d9\uc5d0 \uc81c\uacf5\ub418\ub294 \ucc45\uc740 \uc5b8\uc81c\ub098 \uc88b\uc740 \ucc45\ub4e4\uc774\uc5c8\uc2b5\ub2c8\ub2e4. \uadfc\ub370 \ud2b9\ud788 \uc774\ubc88 5\uc6d4 \ub2ec \ub9ac\ubdf0 \ud76c\ub9dd \ub3c4\uc11c\ub4e4\uc740 \uc81c\uac00 \uac1c\uc778\uc801\uc73c\ub85c \uacf5\ubd80\ud558\uace0 \uc2f6\uc740 \ubd84\uc57c\ub4e4\uc774\uc5c8\uae30\uc5d0 \uc120\ud0dd\ud560 \ub54c \ub108\ubb34 \uace0\ubbfc\ub410\uc2b5\ub2c8\ub2e4. \uacb0\uad6d ",(0,o.kt)("inlineCode",{parentName:"p"},"\ub370\uc774\ud130 \uacfc\ud559\uc744 \uc704\ud55c \ud1b5\uacc4(2\ud310)"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"\uace0\uc131\ub2a5 \ud30c\uc774\uc36c(2\ud310)"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"\ud55c \uad8c\uc73c\ub85c \ub05d\ub0b4\ub294 Node & Express(2\ud310)"),"\uc744 \uc120\ud0dd\ud588\uc9c0\ub9cc \ub9ac\uc2a4\ud2b8\uc5d0 \uc788\ub358 \ub2e4\ub978 \ucc45\ub4e4\ub3c4 \uae30\ud68c\uac00 \ub41c\ub2e4\uba74 \uc77d\uace0 \uc774 \ube14\ub85c\uadf8\uc5d0 \ub9ac\ubdf0\ub97c \uc4f8 \uc608\uc815\uc785\ub2c8\ub2e4."),(0,o.kt)("h2",{id:"\ucc45-\ub9ac\ubdf0"},"\ucc45 \ub9ac\ubdf0"),(0,o.kt)("p",null,"\ucc98\uc74c \uc774 \ucc45\uc744 \ubc1b\uc558\uc744 \ub54c\ub294 Node.js\uc640 Express\ub97c \ud55c \uad8c\uc5d0 \ub05d\ub0b4\uae30\uc5d0\ub294 \uc5b4\ub835\uc9c0 \uc54a\uc744\uae4c \uc0dd\uac01\ud588\uc2b5\ub2c8\ub2e4. \uadf8\ub7ec\ub098 \uc77d\uc5b4\ubcf4\ub2c8 \uc120\uc218 \uc9c0\uc2dd\uc774 \uc788\uc73c\uba70, \uad6c\uae00\ub9c1\uc744 \ud560 \uc218 \uc788\ub2e4\ub294 \uac00\uc815\ud558\uc5d0 \uacf5\ubd80\ud558\uae30\uc5d0\ub294 \uc88b\uc740 \ucc45\uc774\ub77c\uace0 \ub290\uaf08\uc2b5\ub2c8\ub2e4. "),(0,o.kt)("p",null,"\ub2e8\uc21c\ud788 \uc6f9 \uc0ac\uc774\ud2b8\ub97c \ub9cc\ub4dc\ub294 \uac83\uc744 \ubaa9\uc801\uc73c\ub85c \ud558\ub294 \uac83\uc774 \uc544\ub2cc \ubc30\ud3ec \uacfc\uc815\uae4c\uc9c0 \uacf5\ubd80\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ub610\ud55c, \uc2e4\ubb34 \ud658\uacbd\uacfc \uc720\uc0ac\ud55c \ud658\uacbd\uc5d0\uc11c \ud14c\uc2a4\ud2b8\ub97c \ud558\uba70, DB \uc5f0\uacb0\ub3c4 \ud574\ubcf4\uace0 \uc720\uc9c0 \ubcf4\uc218 \uacc4\ud68d\ub3c4 \uc870\uae08 \ub2e4\ub8f9\ub2c8\ub2e4. \uc774\ubc16\uc5d0\ub3c4 REST API, HTTP, QA, \ucfe0\ud0a4 \ub4f1\uc744 \uac04\ub2e8\ud558\uac8c \ub2e4\ub904\ubd05\ub2c8\ub2e4. \uc810\uc810 \ub05d\uc73c\ub85c \uac00\uba74 \ub370\uc774\ud130\ubca0\uc774\uc2a4\ub3c4 \ub2e4\ub8e8\uace0, React\ub3c4 \uc870\uae08 \uc0ac\uc6a9\ud574\ubcf4\ub294 \ucc45\uc774\ub2c8 \uc774\ub7f0 \ubd80\ubd84\uc5d0\uc11c\ub3c4 \uc120\uc218 \uc9c0\uc2dd\uc774 \uc788\uc73c\uba74 \uc88b\uc744 \uac83\uc774\ub77c\uace0 \uc0dd\uac01\ud569\ub2c8\ub2e4."),(0,o.kt)("p",null,"\ucda9\ubd84\ud55c \ud575\uc2ec \ub0b4\uc6a9\ub9cc \uc804\ub2ec\ud558\uba70, \ubc29\ub300\ud55c \ub0b4\uc6a9\ub4e4\uc744 \uae4a\uac8c\uae4c\uc9c0 \ub2e4\ub8e8\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4. \uc774\ub7f0 \ubd80\ubd84\uc740 node.js\uc5d0 \ub300\ud574 \uc219\ub828\uc790\uc774\uc2dc\uba74 \uc88b\uc544\ud558\uc2e4 \uc218 \uc788\uaca0\uc9c0\ub9cc, \uac1c\uc778\uc801\uc73c\ub85c \uc800 \uac19\uc740 \ucd08\ubcf4\uc790\uc5d0\uac8c\ub294 \ub9ce\uc774 \uc5b4\ub824\uc6e0\uc2b5\ub2c8\ub2e4."),(0,o.kt)("p",null,"\uc544\ubb34\ub798\ub3c4 \ucc45\uc758 \ud398\uc774\uc9c0 \uc218\ub97c \uc904\uc774\uae30 \uc704\ud574\uc11c \ucc45\uc5d0\uc11c\ub294 \uc608\uc81c\uc758 \uaf2d \ud544\uc694\ud55c \ubd80\ubd84\ub9cc \uc18c\uac1c\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4. \uc804\uccb4 \uad6c\uc870\ub97c \ud655\uc778\ud558\ub294 \uac83\uc740 \uc800\uc790\uc758 ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/EthanRBrown/web-development-with-node-and-express-2e"},"GitHub"),"\uc744 \ucc38\uace0\ud558\uc2dc\uba74 \ub3c4\uc6c0\uc774 \ub420 \uac83\uc785\ub2c8\ub2e4. "),(0,o.kt)("h2",{id:"\ub300\uc0c1-\ub3c5\uc790"},"\ub300\uc0c1 \ub3c5\uc790"),(0,o.kt)("p",null,"\uc800\ub294 Node.js\uc5d0 \uad00\ud55c \uc9c0\uc2dd\uc774 \uc5c6\uc73c\uba70, \uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8\uc5d0 \ub300\ud574\uc11c\ub294 \uc544\uc8fc \uc870\uae08\uc758 \uc9c0\uc2dd\ub9cc \uc788\uc5c8\uc2b5\ub2c8\ub2e4. \uc800\ucc98\ub7fc \uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8\uc5d0 \ub300\ud55c \uae4a\uc740 \uc774\ud574\uac00 \uc5c6\uc73c\uc2e0 \ubd84\ub4e4\uc740 \uc77d\uae30 \ud798\ub4dc\uc2e0 \ucc45\uc774\ubbc0\ub85c \uc774 \ucc45\uc744 \uc0ac\uae30 \uc804\uc5d0 \uc870\uae08 \uace0\ub824\ud558\uc2dc\uae38 \ubc14\ub77c\uaca0\uc2b5\ub2c8\ub2e4. "),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"\uc0ac\uc804 \uc9c0\uc2dd",src:n(4491).Z,width:"239",height:"102"}),"  "),(0,o.kt)("p",null,"\uc704\uc758 \uc774\ubbf8\uc9c0\ub97c \ubcf4\uba74 \uc54c \uc218 \uc788\ub4ef\uc774 \uc774 \ucc45\uc758 \ucd9c\ud310\uc0ac \ub9ac\ubdf0\uc5d0\ub3c4 \uc0ac\uc804 \uc9c0\uc2dd\uc5d0 ",(0,o.kt)("inlineCode",{parentName:"p"},"\uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8 \ucd08\uc911\uae09"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"\ub178\ub4dc & \uc775\uc2a4\ud504\ub808\uc2a4 \ucd08\uae09"),"\uc758 \uc9c0\uc2dd\uc774 \ud544\uc694\ud558\ub2e4\uace0 \uae30\uc220\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4."),(0,o.kt)("p",null,"\ubb3c\ub860 \uc800\ucc98\ub7fc \uc0ac\uc804 \uc9c0\uc2dd\uc774 \uc5c6\uc73c\uba74 \uad6c\uae00\ub9c1 \ud558\uba74\uc11c \ub2e4\ub978 \uac15\uc758, \ucc45\ub3c4 \ucc38\uace0\ud558\uba74\uc11c \ube61\uc138\uac8c \uacf5\ubd80\ud558\uba74 \ub429\ub2c8\ub2e4. "),(0,o.kt)("p",null,"node.js\uc758 \uac1c\ub150\uc740 \uc5b4\ub290\uc815\ub3c4 \uac16\uace0 \uc788\uc9c0\ub9cc, \ud504\ub85c\uc81d\ud2b8 \uacbd\ud5d8\uc774 \ubd80\uc871\ud558\uc2e0 \ubd84\ub4e4\uaed8 \ucd94\ucc9c\ub4dc\ub9bd\ub2c8\ub2e4. \ud2b9\ud788 \uc6f9 \uc0ac\uc774\ud2b8\ub97c \ubc30\ud3ec\uae4c\uc9c0 \ud558\ub294 \ud504\ub85c\uc81d\ud2b8\ub97c \ud574\ubcf4\uace0 \uc2f6\uc740 \ubd84\ub4e4\uaed8 \ub3c4\uc6c0\uc774 \ub420 \uac83\uc774\ub77c\uace0 \uc608\uc0c1\ub429\ub2c8\ub2e4."))}c.isMDXComponent=!0},4491:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/prior-knowledge-node-js-0bf5dc11a4a06566e7cdc99b001e6f78.jpg"},4764:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/I-am-reviewer-2021-749767a89f19d2f52fce4094c15c6e95.jpg"},8609:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/web-development-with-node-and-express-f5d814a385eecdc63aff45bcdaea59e7.jpg"}}]);