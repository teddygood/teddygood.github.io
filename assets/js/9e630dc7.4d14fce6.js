"use strict";(self.webpackChunkmy_blog=self.webpackChunkmy_blog||[]).push([[9979],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>k});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=u(r),k=o,f=s["".concat(c,".").concat(k)]||s[k]||d[k]||a;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function k(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=s;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},1719:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var n=r(7462),o=(r(7294),r(3905));const a={title:"\ud83d\udcd6 \ucee8\ud14c\uc774\ub108 \uc778\ud504\ub77c \ud658\uacbd \uad6c\ucd95\uc744 \uc704\ud55c \ucfe0\ubc84\ub124\ud2f0\uc2a4/\ub3c4\ucee4",date:"2021-10-30",authors:"teddygood",tags:["Book Review"],draft:!1,slug:"/k8s-and-docker-for-container-infrastructure",description:"\ucee8\ud14c\uc774\ub108 \uc778\ud504\ub77c \ud658\uacbd\uc744 \uc774\ud574\ud558\uace0 \uc9c1\uc811 \uad6c\ucd95\ud574 \ubcf4\uc790!",keywords:["Docker","Kubernetes","k8s"]},i=void 0,l={permalink:"/blog/k8s-and-docker-for-container-infrastructure",editUrl:"https://github.com/teddygood/teddygood.github.io/tree/main/blog/2021-10-30-k8s-and-docker-for-container-infrastructure/k8s-and-docker-for-container-infrastructure.md",source:"@site/blog/2021-10-30-k8s-and-docker-for-container-infrastructure/k8s-and-docker-for-container-infrastructure.md",title:"\ud83d\udcd6 \ucee8\ud14c\uc774\ub108 \uc778\ud504\ub77c \ud658\uacbd \uad6c\ucd95\uc744 \uc704\ud55c \ucfe0\ubc84\ub124\ud2f0\uc2a4/\ub3c4\ucee4",description:"\ucee8\ud14c\uc774\ub108 \uc778\ud504\ub77c \ud658\uacbd\uc744 \uc774\ud574\ud558\uace0 \uc9c1\uc811 \uad6c\ucd95\ud574 \ubcf4\uc790!",date:"2021-10-30T00:00:00.000Z",formattedDate:"2021\ub144 10\uc6d4 30\uc77c",tags:[{label:"Book Review",permalink:"/blog/tags/book-review"}],hasTruncateMarker:!1,authors:[{name:"Chanho Lee",title:"\ub2e4\uc591\ud55c \ubd84\uc57c\ub97c \uacf5\ubd80\ud558\uace0 \uc788\ub294 \ud559\uc0dd",url:"https://github.com/teddygood",imageURL:"https://github.com/teddygood.png",key:"teddygood"}],frontMatter:{title:"\ud83d\udcd6 \ucee8\ud14c\uc774\ub108 \uc778\ud504\ub77c \ud658\uacbd \uad6c\ucd95\uc744 \uc704\ud55c \ucfe0\ubc84\ub124\ud2f0\uc2a4/\ub3c4\ucee4",date:"2021-10-30",authors:"teddygood",tags:["Book Review"],draft:!1,slug:"/k8s-and-docker-for-container-infrastructure",description:"\ucee8\ud14c\uc774\ub108 \uc778\ud504\ub77c \ud658\uacbd\uc744 \uc774\ud574\ud558\uace0 \uc9c1\uc811 \uad6c\ucd95\ud574 \ubcf4\uc790!",keywords:["Docker","Kubernetes","k8s"]},prevItem:{title:"\ud83d\udcd6 \uac1c\ubc1c\uc790\uc758 \uae00\uc4f0\uae30",permalink:"/blog/developer-writing"},nextItem:{title:"\ud83d\udcd6 \uc81c\ub300\ub85c \ubc30\uc6b0\ub294 \uc218\ud559\uc801 \ucd5c\uc801\ud654",permalink:"/blog/mathematical-optimization"}},c={authorsImageUrls:[void 0]},u=[{value:"Book Info",id:"book-info",level:2},{value:"\uc774\ubbf8\uc9c0\ub97c \ud1b5\ud55c \uc790\uc138\ud55c \uc124\uba85",id:"\uc774\ubbf8\uc9c0\ub97c-\ud1b5\ud55c-\uc790\uc138\ud55c-\uc124\uba85",level:2},{value:"\uc2e4\uc2b5\ud558\uae30 \uc704\ud55c \ub2e4\uc591\ud55c \ub3c4\uad6c\ub4e4",id:"\uc2e4\uc2b5\ud558\uae30-\uc704\ud55c-\ub2e4\uc591\ud55c-\ub3c4\uad6c\ub4e4",level:2},{value:"\ubc84\uc804",id:"\ubc84\uc804",level:2},{value:"\uc544\uc26c\uc6e0\ub358 \uc810",id:"\uc544\uc26c\uc6e0\ub358-\uc810",level:2},{value:"\ub300\uc0c1 \ub3c5\uc790",id:"\ub300\uc0c1-\ub3c5\uc790",level:2}],p={toc:u};function d(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("center",null,"\uae38\ubc97 '16\ucc28 \uac1c\ubc1c\uc790 \ub9ac\ubdf0\uc5b4' \ud65c\ub3d9\uc744 \uc704\ud574\uc11c \ucc45\uc744 \uc81c\uacf5\ubc1b\uc544 \uc791\uc131\ub41c \uc11c\ud3c9\uc785\ub2c8\ub2e4."))),(0,o.kt)("h2",{id:"book-info"},"Book Info"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"http://www.kyobobook.co.kr/product/detailViewKor.laf?ejkGb=KOR&mallGb=KOR&barcode=9791165215743&orderClick=LEa&Kc="},(0,o.kt)("img",{alt:"\ucc45",src:r(9287).Z,width:"799",height:"1027"}))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\uc81c\ubaa9: \ucee8\ud14c\uc774\ub108 \uc778\ud504\ub77c \ud658\uacbd \uad6c\ucd95\uc744 \uc704\ud55c \ucfe0\ubc84\ub124\ud2f0\uc2a4/\ub3c4\ucee4"),(0,o.kt)("li",{parentName:"ul"},"\uc800\uc790: \uc870\ud6c8, \uc2ec\uadfc\uc6b0, \ubb38\uc131\uc8fc"),(0,o.kt)("li",{parentName:"ul"},"\ucd9c\ud310\uc0ac: \uae38\ubc97"),(0,o.kt)("li",{parentName:"ul"},"\ucd9c\uac04: 2021-06-07")),(0,o.kt)("h2",{id:"\uc774\ubbf8\uc9c0\ub97c-\ud1b5\ud55c-\uc790\uc138\ud55c-\uc124\uba85"},"\uc774\ubbf8\uc9c0\ub97c \ud1b5\ud55c \uc790\uc138\ud55c \uc124\uba85"),(0,o.kt)("p",null,"\uc644\uc804\ud55c \uceec\ub7ec\ub294 \uc544\ub2c8\uc9c0\ub9cc, \uc774\ubbf8\uc9c0\ub97c \ud65c\uc6a9\ud55c \uc790\uc138\ud55c \uc124\uba85\uc744 \ubcf4\uc5ec\uc90d\ub2c8\ub2e4. \uc77c\ubc18\uc801\uc778 \ucc45\uc774\ub77c\uba74 \uc5b4\ucc28\ud53c \uac1c\ubc1c\uc790\uac00 \uc77d\uc744 \ucc45\uc774\ub77c\uace0 \uac00\uc815\ud558\uace0 \uc124\uce58 \uacfc\uc815 \ub530\uc704\ub294 \ub118\uc5b4\uac08 \ud150\ub370 \uadf8\ub7f0 \uacfc\uc815\ub4e4\uc870\ucc28 \uc774\ubbf8\uc9c0\ub85c \ucc45\uc5d0 \uc124\uba85\ud574\uc8fc\uc154\uc11c \ub108\ubb34 \ub3c4\uc6c0\uc774 \ub410\uc2b5\ub2c8\ub2e4. \ud504\ub85c\uadf8\ub7a8 \uc124\uce58 \uacfc\uc815 \uc774\uc678\uc5d0\ub3c4 \uc815\uc0c1\uc801\uc73c\ub85c \uc791\ub3d9\ud558\uc9c0 \uc54a\uc740 \uacbd\uc6b0\uc5d0 \ub300\ud574\uc11c\ub3c4 \uae00 \ub610\ub294 \uc774\ubbf8\uc9c0\ub85c \uc124\uba85\ud574\uc8fc\uc154\uc11c \ub108\ubb34 \ud3b8\ud558\uac8c \uc77d\uc744 \uc218 \uc788\uc5c8\uc2b5\ub2c8\ub2e4."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"\uae38\ubc97")," \ucd9c\ud310\uc0ac\uc758 \ucc45\uc740 \ud55c \uc7a5\uc744 \ud3bc\uce58\uba74 \uc800\uc790 \ubc0f \uc5ed\uc790\uc758 \uc18c\uac1c\uac00 \uc801\ud600 \uc788\uace0 ",(0,o.kt)("inlineCode",{parentName:"p"},"\ub3c5\uc790\uc758 1\ucd08\ub97c \uc544\uaef4\uc8fc\ub294 \uc815\uc131\uc744 \ub9cc\ub098\ubcf4\uc138\uc694!"),"\ub77c\ub294 \ubb38\uad6c\uac00 \uc801\ud600\uc788\uc2b5\ub2c8\ub2e4. \uc194\uc9c1\ud788 \uc774 \ubb38\uad6c\ub294 \ud06c\uac8c \uc640 \ub2ff\uc9c0 \uc54a\uc558\ub294\ub370 \uadf8\ub2e4\uc74c  ",(0,o.kt)("inlineCode",{parentName:"p"},"\uc138\uc0c1\uc774 \uc544\ubb34\ub9ac \ubc14\uc058\uac8c \ub3cc\uc544\uac00\ub354\ub77c\ub3c4 \ucc45\uae4c\uc9c0 \uc544\ubb34\ub807\uac8c\ub098 \ube68\ub9ac \ub9cc\ub4e4 \uc218\ub294 \uc5c6\uc2b5\ub2c8\ub2e4."),"\ub77c\uace0 \uc801\ud600\uc838 \uc788\ub294 \ubb38\uad6c\uac00 \uc804 \ud06c\uac8c \uc640 \ub2ff\uc558\uc2b5\ub2c8\ub2e4. \ucc45\uc5d0\uc11c \uc800\uc790\ubd84\uaed8\uc11c \uc124\uba85\ud558\uc168\ub4ef\uc774 IT\ub9cc\ud07c \ube60\ub974\uac8c \ubcc0\ud654\ud558\ub294 \ubd84\uc57c\uac00 \uc5c6\uc2b5\ub2c8\ub2e4. \uadf8\ub807\uae30\uc5d0 \ucc45 \ub610\ud55c \uae30\uc220\uc774 \ube60\ub974\uac8c \ubcc0\ud654\ud558\ub354\ub77c\ub3c4 \ucc45\uae4c\uc9c0 \uc544\ubb34\ub807\uac8c\ub098 \ube60\ub974\uac8c \ub9cc\ub4e4\uc5b4\uc57c \ud55c\ub2e4\uace0 \uc0dd\uac01\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4."),(0,o.kt)("h2",{id:"\uc2e4\uc2b5\ud558\uae30-\uc704\ud55c-\ub2e4\uc591\ud55c-\ub3c4\uad6c\ub4e4"},"\uc2e4\uc2b5\ud558\uae30 \uc704\ud55c \ub2e4\uc591\ud55c \ub3c4\uad6c\ub4e4"),(0,o.kt)("p",null,"\uc774 \ucc45\uc5d0\uc11c\ub294 Kubernetes, Docker\ubfd0\ub9cc \uc544\ub2c8\ub77c \uc2e4\uc2b5\uc744 \uc704\ud574 \ub2e4\uc591\ud55c \ub3c4\uad6c\ub4e4\uc744 \uc0ac\uc6a9\ud569\ub2c8\ub2e4. \uac00\uc0c1 \ucef4\ud4e8\ud130\ub97c \ub9cc\ub4dc\ub294 Oracle VM VirtualBox, \uc0ac\uc6a9\uc790\uc758 \uc694\uad6c\uc5d0 \ub9de\uac8c \uc2dc\uc2a4\ud15c \uc790\uc6d0\uc744 \ud560\ub2f9, \ubc30\uce58, \ubc30\ud3ec\ud574 \ub450\uc5c8\ub2e4\uac00 \ud544\uc694\ud560 \ub54c \uc2dc\uc2a4\ud15c\uc744 \uc0ac\uc6a9\ud560 \uc218 \uc788\ub294 \uc0c1\ud0dc\ub85c \ub9cc\ub4dc\ub294 \ud504\ub85c\ube44\uc800\ub2dd \ub3c4\uad6c\uc778 ",(0,o.kt)("inlineCode",{parentName:"p"},"Vagrant"),"\ub97c \uc0ac\uc6a9\ud569\ub2c8\ub2e4. \uc774 \ubc16\uc5d0\ub3c4 CI/CD\ub97c \uc704\ud55c Jenkins, \ucee8\ud14c\uc774\ub108 \uc778\ud504\ub77c \ud658\uacbd\uc5d0\uc11c \ubaa8\ub2c8\ud130\ub9c1 \ub370\uc774\ud130\ub97c ",(0,o.kt)("inlineCode",{parentName:"p"},"Prometheus"),"\ub85c \uc218\uc9d1\ud558\uace0 \uc218\uc9d1\ud55c \uc815\ubcf4\ub97c \ud1b5\ud569\ud558\uc5ec ",(0,o.kt)("inlineCode",{parentName:"p"},"Grafana"),"\ub85c \uc2dc\uac01\ud654\ud569\ub2c8\ub2e4. \ucd5c\uadfc DevOps \ucabd\uc73c\ub85c \uacf5\ubd80\ub97c \ud574\ubcf4\uace0 \uc2f6\ub2e4\ub294 \uc0dd\uac01\uc744 \uac16\uace0 \uc788\uc5c8\ub294\ub370 \uc774\ubc88 \uae30\ud68c\uc5d0 \uc774 \ucc45\uc73c\ub85c DevOps\uc758 \uc804\uccb4\uc801\uc778 \uacfc\uc815\uc744 \uac04\uc811\uc801\uc73c\ub85c \uccb4\ud5d8\ud574\ubcfc \uc218 \uc788\uc5b4\uc11c \ub3c4\uc6c0\uc774 \ub410\uc2b5\ub2c8\ub2e4."),(0,o.kt)("h2",{id:"\ubc84\uc804"},"\ubc84\uc804"),(0,o.kt)("p",null,"\ucc45\uc5d0\uc11c \uc9c0\uc815\ud55c \ubc84\uc804\uc744 \uc0ac\uc6a9\ud558\ub294 \uac83\uc744 \ucd94\ucc9c\ud574 \ub4dc\ub9bd\ub2c8\ub2e4. \uac00\uc7a5 \ucd5c\uadfc \ubc84\uc804\uc744 \uc0ac\uc6a9\ud558\ub824\uace0 \ud558\ub2e4\uac00 \uc2dc\uac04\uc744 \ub9ce\uc774 \ubc84\ub838\uc2b5\ub2c8\ub2e4. \uc774\ub7f0 \uae30\uc220\ub4e4\uc740 \uac00\uc7a5 \ucd5c\uadfc \ubc84\uc804\uc73c\ub85c \uacf5\ubd80\ud558\ub294 \uac83\uc774 \uc88b\ub2e4\uace0 \ud56d\uc0c1 \uacf5\ubd80\ud560 \ub54c\ub9c8\ub2e4 \ub290\uaf08\ub294\ub370 \ub2e4\uc2dc \uc0dd\uac01\ud574\ubcf4\ub2c8 \uc9c0\uae08 \ub2f9\uc7a5 \ud604\uc5c5\uc5d0 \ub6f0\uc5b4\ub4e4 \uac83\ub3c4 \uc544\ub2c8\uace0, \ud604\uc5c5\uc5d0\uc11c\ub3c4 \uc774\ub807\uac8c \ucd5c\uc2e0 \ubc84\uc804\uc744 \uc4f0\ub294 \uacf3\uc740 \ub4dc\ubb3c\ub2e4\uace0 \uc0dd\uac01\ud558\uae30 \ub54c\ubb38\uc5d0 \ud06c\uac8c \uc758\ubbf8 \uc5c6\uc744 \uac83\uc73c\ub85c \uc608\uc0c1\uc774 \ub429\ub2c8\ub2e4. \uc790\uc2e0\uc774 OS\uc758 \uac70\uc758 \ubaa8\ub4e0 \ubd80\ubd84\uc744 \uc124\uc815\ud558\uace0 \uad00\ub9ac\ud560 \uc218 \uc788\uc73c\uba74 \ucc45\uc758 \uc608\uc81c\uc640 \uac19\uc774 \ub530\ub77c \ud558\uc9c0 \uc54a\uc544\ub3c4 \uad1c\ucc2e\uc9c0\ub9cc, \uadf8\ub7f0 \ubd80\ubd84\uc5d0\uc11c \ubd80\uc871\ud568\uc744 \ub290\ub080\ub2e4\uba74 \ucc45\uc758 \uc608\uc2dc\ub97c \uadf8\ub300\ub85c \ub530\ub77c \ud558\uc2dc\ub294 \uac83\uc744 \ucd94\ucc9c\ud569\ub2c8\ub2e4."),(0,o.kt)("h2",{id:"\uc544\uc26c\uc6e0\ub358-\uc810"},"\uc544\uc26c\uc6e0\ub358 \uc810"),(0,o.kt)("p",null,"\uac00\uc0c1\uba38\uc2e0 \uc774\ubbf8\uc9c0\uc758 \uba54\ubaa8\ub9ac\ub97c \ub108\ubb34 \ud06c\uac8c \uc7a1\uace0 \ub3cc\ub824\uc11c \uadf8\ub7f0\uc9c0 \ub7a8 8\uae30\uac00 \ub178\ud2b8\ubd81\uc5d0\uc11c \ubc84\uac70\uc6e0\uc2b5\ub2c8\ub2e4. \uc774 \ucc45\uc758 \ub0b4\uc6a9\uc744 \uc2e4\uc2b5\ud574\ubcf4\uae30 \uc704\ud55c \ucef4\ud4e8\ud130\uc758 \ucd5c\uc800 \uc0ac\uc591\uc774 \ud45c\uae30\uac00 \ub418\uc5c8\ub2e4\uba74 \ub3c5\uc790\uc5d0\uac8c \ub354 \ub3c4\uc6c0\uc774 \ub410\uc744 \uac83 \uac19\uc2b5\ub2c8\ub2e4."),(0,o.kt)("p",null,"\uc800\uc790\ubd84\uaed8\uc11c \uc0ac\uc804\uc5d0 \ud544\uc694\uc5d0 \ub9de\uac8c \uc6b4\uc601\uccb4\uc81c \uc774\ubbf8\uc9c0\ub97c \uc218\uc815\ud574\ub193\uc73c\uc154\uc11c \uc800\ud76c\ub294 Vagrant Cloud\uc5d0\uc11c \ub0b4\ub824\ubc1b\uae30\ub9cc \ud558\uba74 \ub429\ub2c8\ub2e4. \uae30\ubcf8\uc801\uc778 \ud658\uacbd\uc744 \uc81c\uacf5\ud574\uc8fc\ub294 \uac83\uc740 \ub108\ubb34 \ud3b8\ud588\uc9c0\ub9cc, \ud544\uc694\uc5d0 \ub9de\uac8c \uc774\ubbf8\uc9c0\ub97c \uc124\uc815\ud558\ub294 \ubd80\ubd84\uc774 \ucc45\uc5d0 \ub2f4\uae30\uc9c0 \uc54a\uc544\uc11c \uc870\uae08 \uc544\uc26c\uc6e0\uc2b5\ub2c8\ub2e4. \ubb3c\ub860 Vagrant Cloud\uc5d0 \uc218\uc815\ud55c \ubc84\uc804\ub9c8\ub2e4 \uc5b4\ub5a4 \ubd80\ubd84\uc744 \uc218\uc815\ud588\ub294\uc9c0 \uac04\ub2e8\ud55c \uc124\uba85\uc774 \ub098\uc640 \uc788\uc9c0\ub9cc, ",(0,o.kt)("inlineCode",{parentName:"p"},"\uc774\ub7f0 \ubd80\ubd84\ub3c4 \ucc45\uc5d0 \ub2f4\uacbc\uc73c\uba74 \uc5b4\ub560\uc744\uae4c"),"\ub77c\ub294 \uc0dd\uac01\uc774 \ub4e4\uc5c8\uc2b5\ub2c8\ub2e4. \uc544\ubb34\ub798\ub3c4 \uc774 \ucc45\uc758 \uc911\uc2ec\uc740 \ucfe0\ubc84\ub124\ud2f0\uc2a4\uc640 \ub3c4\ucee4\uc774\ub2e4 \ubcf4\ub2c8 \ub9ac\ub205\uc2a4 \ud658\uacbd\uc744 \uc138\ud305\ud558\ub294 \ubd80\ubd84\uc740 \ucc45\uc5d0 \ub123\uc9c0 \uc54a\uc73c\uc2e0 \uac83 \uac19\uc2b5\ub2c8\ub2e4."),(0,o.kt)("h2",{id:"\ub300\uc0c1-\ub3c5\uc790"},"\ub300\uc0c1 \ub3c5\uc790"),(0,o.kt)("p",null,"\uac1c\ubc1c \ucd08\uc2ec\uc790\uc5d0\uac8c \uc26c\uc6b4 \ucc45\uc774\ub77c\uace0\ub294 \uc0dd\uac01\uc774 \ub4e4\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4. \ub9ac\ub205\uc2a4\ub97c \uac00\ub974\uccd0\uc8fc\ub294 \ucc45\uc774 \uc544\ub2c8\uae30 \ub54c\ubb38\uc5d0 \uae30\ubcf8\uc801\uc73c\ub85c UNIX \uba85\ub839\uc5b4\uc5d0 \ub300\ud55c \uc9c0\uc2dd, \uc6b4\uc601\uccb4\uc81c\uc5d0 \uad00\ud55c \uc9c0\uc2dd, \uc258 \uc2a4\ud06c\ub9bd\ud2b8\uc5d0 \ub300\ud55c \uc9c0\uc2dd\uc744 \uc5b4\ub290 \uc815\ub3c4 \uac16\uace0 \uc788\uc5b4\uc57c \ud569\ub2c8\ub2e4. \ub610\ud55c, \ucfe0\ubc84\ub124\ud2f0\uc2a4, \ub3c4\ucee4\uc5d0 \ub300\ud55c \uae30\ucd08 \uc9c0\uc2dd\ub3c4 \ud544\uc694\ud558\ub2e4\uace0 \uc0dd\uac01\ud569\ub2c8\ub2e4. \uc774\ub807\uac8c \ub9ce\uc740 \uc0ac\uc804 \uc9c0\uc2dd\uc774 \ud544\uc694\ud55c \ucc45\uc774\uc9c0\ub9cc, \ucfe0\ubc84\ub124\ud2f0\uc2a4, \ub3c4\ucee4 \uae30\uc220\uc5d0 \uad00\uc2ec \uc788\uc73c\uc2dc\uace0 \ucee8\ud14c\uc774\ub108 \uc778\ud504\ub77c \ud658\uacbd \uad6c\ucd95\uc744 \ud574\ubcf4\uc2dc\uace0 \uc2f6\uc740 \ubd84\uc740 \uaf2d \uc77d\uc5b4\ubcf4\uba74 \uc88b\uc744 \ucc45\uc774\ub77c\uace0 \uc0dd\uac01\ud569\ub2c8\ub2e4."))}d.isMDXComponent=!0},9287:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/k8s-and-docker-for-container-infrastructure-2c748a9312bc956791ef673f3878a5f9.jpg"}}]);