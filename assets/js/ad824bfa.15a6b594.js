"use strict";(self.webpackChunkmy_blog=self.webpackChunkmy_blog||[]).push([[7409],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>y});var n=r(7294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var i=n.createContext({}),c=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,a=e.originalType,i=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=c(r),y=l,g=d["".concat(i,".").concat(y)]||d[y]||s[y]||a;return r?n.createElement(g,p(p({ref:t},u),{},{components:r})):n.createElement(g,p({ref:t},u))}));function y(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=r.length,p=new Array(a);p[0]=d;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:l,p[1]=o;for(var c=2;c<a;c++)p[c]=r[c];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2354:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>p,default:()=>s,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var n=r(7462),l=(r(7294),r(3905));const a={title:"Build package cryptography",date:"2021-06-02",authors:"teddygood",tags:["\uc0bd\uc9c8\uae30\ub85d"],draft:!1,description:"\ud638\ud658\uc131 \ubb38\uc81c",keywords:["Python","Docker","Alpine Linux","cryptography"],sidebar_position:1},p=void 0,o={permalink:"/blog/python/python-lib-cryptography",editUrl:"https://github.com/teddygood/teddygood.github.io/blog/python/python-lib-cryptography.md",source:"@site/blog/python/python-lib-cryptography.md",title:"Build package cryptography",description:"\ud638\ud658\uc131 \ubb38\uc81c",date:"2021-06-02T00:00:00.000Z",formattedDate:"2021\ub144 6\uc6d4 2\uc77c",tags:[{label:"\uc0bd\uc9c8\uae30\ub85d",permalink:"/blog/tags/\uc0bd\uc9c8\uae30\ub85d"}],hasTruncateMarker:!1,authors:[{name:"Chanho Lee",title:"\ub2e4\uc591\ud55c \ubd84\uc57c\ub97c \uacf5\ubd80\ud558\ub294 \uac83\uc774 \uc88b\uc740 \ud559\uc0dd",url:"https://github.com/teddygood",imageURL:"https://github.com/teddygood.png",key:"teddygood"}],frontMatter:{title:"Build package cryptography",date:"2021-06-02",authors:"teddygood",tags:["\uc0bd\uc9c8\uae30\ub85d"],draft:!1,description:"\ud638\ud658\uc131 \ubb38\uc81c",keywords:["Python","Docker","Alpine Linux","cryptography"],sidebar_position:1},prevItem:{title:"PyJWT \ub808\uac70\uc2dc \ucf54\ub4dc \uc218\uc815",permalink:"/blog/python/AttributeError-str-decode"},nextItem:{title:"PyCharm\uc744 \uc815\ub82c\ud574\uc900 \uc774\uc0c1\ud55c \ucf54\ub4dc",permalink:"/blog/python/pycharm-reformat-code"}},i={authorsImageUrls:[void 0]},c=[{value:"alpine linux\uc640 cryptography\uc758 \ud638\ud658\uc131 \ubb38\uc81c",id:"alpine-linux\uc640-cryptography\uc758-\ud638\ud658\uc131-\ubb38\uc81c",level:2},{value:"\uccab \ubc88\uc9f8 \ubb38\uc81c \ud574\uacb0",id:"\uccab-\ubc88\uc9f8-\ubb38\uc81c-\ud574\uacb0",level:2},{value:"\ube4c\ub4dc\uac00 \uc624\ub798 \uac78\ub9ac\ub294 \ubb38\uc81c",id:"\ube4c\ub4dc\uac00-\uc624\ub798-\uac78\ub9ac\ub294-\ubb38\uc81c",level:2},{value:"\ub450 \ubc88\uc9f8 \ubb38\uc81c \ud574\uacb0",id:"\ub450-\ubc88\uc9f8-\ubb38\uc81c-\ud574\uacb0",level:2},{value:"alpine linux\uac00 \ud30c\uc774\uc36c \ud658\uacbd\uc5d0\uc11c \uc801\uc808\ud558\uc9c0 \uc54a\uc740 \uc774\uc720",id:"alpine-linux\uac00-\ud30c\uc774\uc36c-\ud658\uacbd\uc5d0\uc11c-\uc801\uc808\ud558\uc9c0-\uc54a\uc740-\uc774\uc720",level:3},{value:"\uadf8\ub7fc \uc5b4\ub5a4 OS\ub97c \uc0ac\uc6a9\ud574\uc57c \ud560\uae4c?",id:"\uadf8\ub7fc-\uc5b4\ub5a4-os\ub97c-\uc0ac\uc6a9\ud574\uc57c-\ud560\uae4c",level:3},{value:"References",id:"references",level:2}],u={toc:c};function s(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"alpine-linux\uc640-cryptography\uc758-\ud638\ud658\uc131-\ubb38\uc81c"},"alpine linux\uc640 cryptography\uc758 \ud638\ud658\uc131 \ubb38\uc81c"),(0,l.kt)("p",null,"Django \ube14\ub85c\uadf8 \ud504\ub85c\uc81d\ud2b8\ub97c docker\ub85c \uc62e\uae30\ub294 \ub3c4\uc911 \uc5d0\ub7ec\uac00 \ub5b4\ub2e4. alpine linux\uc640 python\uc5d0\uc11c \uc554\ud638\ud654 \uc54c\uace0\ub9ac\uc998\uc774 \uad6c\ud604\ub41c \ud328\ud0a4\uc9c0\uc778 cryptography\uc758 \ud638\ud658\uc131 \ubb38\uc81c\uc600\ub2e4. "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-Dockerfile"},"FROM python:3.8-alpine\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"cryptography==3.4.7\n")),(0,l.kt)("p",null,"\ud604\uc7ac Dockerfile\uc5d0\uc11c \uc0ac\uc6a9\ud558\ub294 image \ubc84\uc804\uacfc requirements.txt\uc5d0 \uc801\ud78c cryptography \ubc84\uc804\uc740 \uc704\uc640 \uac19\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"docker-compose build\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"ERROR: No matching distribution found for cryptography==3.4.7\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Dockerfile"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"docker-compose.yml"),"\uc744 \ub2e4 \ub9cc\ub4e4\uace0 \ub09c \ud6c4\uc5d0 \ub9c8\uc9c0\ub9c9\uc73c\ub85c \uc704\uc758 \uba85\ub839\uc5b4\ub85c \ube4c\ub4dc\ub97c \ud558\ub358 \uc911 \uc704\uc758 Error\ub97c \ub9cc\ub0ac\ub2e4. "),(0,l.kt)("h2",{id:"\uccab-\ubc88\uc9f8-\ubb38\uc81c-\ud574\uacb0"},"\uccab \ubc88\uc9f8 \ubb38\uc81c \ud574\uacb0"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"crypto-doc",src:r(23).Z,width:"748",height:"503"})),(0,l.kt)("p",null,"\uc544\ubb34\ub9ac \uad6c\uae00\ub9c1\uc744 \ud574\ub3c4 \ucc3e\uc9c0\ub97c \ubabb \ud574\uc11c \uacf5\uc2dd \ubb38\uc11c\ub97c \ubcf4\uae30\ub85c \uacb0\uc815\ud588\uace0 \uc5b4\ub290\uc815\ub3c4 \ud574\uacb0\ucc45\uc744 \ucc3e\uc558\ub2e4."),(0,l.kt)("p",null,"\ub300\ub7b5 \uc694\uc57d\ud558\uba74 cryptography \ud328\ud0a4\uc9c0\ub294 Rust\ub97c \uc0ac\uc6a9\ud558\uae30\uc5d0 Rust compiler\ub3c4 \uac19\uc774 \ub2e4\uc6b4\ub85c\ub4dc \ud574\uc57c\uc9c0 \ub3cc\uc544\uac04\ub2e4\ub294 \uac83\uc774\ub2e4. Rust\ub294 cryptography\ub97c \ube4c\ub4dc\ud560 \ub54c \ud544\uc694\ud558\uba70 stackoverflow\uc5d0\uc11c \ucc38\uace0\ud55c \ub2f5\ubcc0\uc5d0\uc11c\ub294 rust \uc124\uce58\ub97c \uc2a4\ud0b5\ud558\ub294 \uba85\ub839\uc5b4\ub97c \ucd94\uac00\ud558\ub294 \ubc29\ubc95\ub3c4 \uc54c \uc218 \uc788\uc5c8\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-Dockerfile"},"ENV CRYPTOGRAPHY_DONT_BUILD_RUST=1\n")),(0,l.kt)("p",null,"multi-stage\ub97c \uc0ac\uc6a9\ud558\uc5ec \ube4c\ub4dc\ud558\ub77c\uace0 \ud55c\ub2e4. \ubb3c\ub860 multi-stage\ub97c \uc0ac\uc6a9\ud558\uba74 \uc774\ubbf8\uc9c0\ub97c \uacbd\ub7c9\ud654\ud558\ub294 \uac83\ub3c4 \uc88b\uc740 \ubc29\ubc95\uc774\uc9c0\ub9cc \ub3c4\ucee4\ub97c \uc790\uc138\ud788 \ubc30\uc6b4 \uc0ac\ub78c\uc774 \uc544\ub2c8\ub77c \uc798 \ubaa8\ub974\uae30 \ub54c\ubb38\uc5d0 \uc774 \ubc29\ubc95\uc740 \ud328\uc2a4\ud588\ub2e4. "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ sudo apk add gcc musl-dev python3-dev libffi-dev openssl-dev cargo\n")),(0,l.kt)("p",null,"\uc704\uc758 \uba85\ub839\uc5b4\ub97c Dockerfile\uc5d0 \ucd94\uac00\ud558\uba74\uc11c \uccab \ubc88\uc9f8 \ubb38\uc81c\ub294 \ub05d\ub0ac\ub2e4."),(0,l.kt)("h2",{id:"\ube4c\ub4dc\uac00-\uc624\ub798-\uac78\ub9ac\ub294-\ubb38\uc81c"},"\ube4c\ub4dc\uac00 \uc624\ub798 \uac78\ub9ac\ub294 \ubb38\uc81c"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"\ub354 \uc0c1\uc138\ud55c details",src:r(2350).Z,width:"727",height:"109"})),(0,l.kt)("p",null,"\uc704\uc758 \uba85\ub839\uc5b4\ub97c Dockerfile\uc5d0 \ucd94\uac00\ud558\uace0 \ub2e4\uc2dc build \ud558\ub2c8 \uc704\uc640 \uac19\uc774 \uc5d0\ub7ec \uc544\ub2cc \uc5d0\ub7ec\uac00 \ub5b4\ub2e4. \uc774\ubbf8\uc9c0\ub97c \ubcf4\uba74 \uc54c \uc218 \uc788\ub4ef\uc774 still running\uc774 \uc9c0\uc18d\ub418\ub294 \uc0c1\ud669\uc774\ub2e4. \ub300\ub7b5 10\ubd84 \uc815\ub3c4 \uadf8\ub300\ub85c \ub194\ub480\ub294\ub370\ub3c4 \ube4c\ub4dc\uac00 \uc548 \ub418\ub294 \uc0c1\ud669\uc774\ub2e4."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"\ub354 \uc0c1\uc138\ud55c details",src:r(5865).Z,width:"1019",height:"833"})),(0,l.kt)("p",null,"cryptography GitHub \uc800\uc7a5\uc18c\uc5d0\uc11c \uac00\uc838\uc628 \uc774\uc288 \uc774\ubbf8\uc9c0\ub2e4. \ud604\uc7ac\uc758 \uc0c1\ud669\uacfc \uac19\uae38\ub798 \ub2f5\ubcc0\uc744 \ucc38\uace0\ud558\ub824 \ud588\uc73c\ub098 \ub0b4 \uc9c0\uc2dd\uc73c\ub85c\ub294 \uc774\ud574 \ubd88\uac00\uc600\ub2e4. \ub300\ub7b5 \uc694\uc57d\ud558\uc790\uba74 \ud30c\uc774\uc36c \ud328\ud0a4\uc9c0 \ud3ec\ub9f7\uacfc \uad00\ub828\ub41c \ub2f5\ubcc0\uacfc alpine linux\uc5d0 \ub300\ud574 \uacf5\uc2dd \ubb38\uc11c\ub85c \uc798 \uc815\ub9ac\ub418\uc5b4 \uc788\ub2e4\ub294 \ub0b4\uc6a9\uc774\ub2e4. \uacb0\ub860\uc801\uc73c\ub85c\ub294 \ub3c4\uc6c0\uc774 \uc548 \ub410\uc9c0\ub9cc, \ud639\uc2dc \uc800 \ub2f5\ubcc0\uc73c\ub85c \ud574\uacb0\ud560 \uc218 \uc788\ub294 \ubd84\uc774 \uc788\uc744 \uc218 \uc788\uae30\uc5d0 \uac00\uc838\uc640\ubd24\ub2e4."),(0,l.kt)("p",null,"\ud604 \uc2dc\uc810\uc758 \ubb38\uc81c\ub294 \ube4c\ub4dc\uac00 \uc624\ub798 \uac78\ub9b0\ub2e4\ub294 \uac83\uc774\ub2e4. \uc774 \ubb38\uc81c\ub97c \ud574\uacb0\ud558\uae30 \uc704\ud574 \ub2e4\uc2dc \uad6c\uae00\ub9c1\uc744 \ud558\uba74\uc11c \ub3c4\ucee4\uc5d0 \ub300\ud574 \uacf5\ubd80\ud558\uac8c \ub410\uace0, \ud30c\uc774\uc36c \ud658\uacbd\uc5d0\uc11c \ub3c4\ucee4\ub97c \uc774\uc6a9\ud560 \ub54c \uc5b4\ub5a4 OS\ub97c \uc0ac\uc6a9\ud558\ub294 \uac83\uc774 \ub354 \uc720\ub9ac\ud55c \uac00\uc5d0 \ub300\ud574 \uacf5\ubd80\ud588\ub2e4."),(0,l.kt)("h2",{id:"\ub450-\ubc88\uc9f8-\ubb38\uc81c-\ud574\uacb0"},"\ub450 \ubc88\uc9f8 \ubb38\uc81c \ud574\uacb0"),(0,l.kt)("h3",{id:"alpine-linux\uac00-\ud30c\uc774\uc36c-\ud658\uacbd\uc5d0\uc11c-\uc801\uc808\ud558\uc9c0-\uc54a\uc740-\uc774\uc720"},"alpine linux\uac00 \ud30c\uc774\uc36c \ud658\uacbd\uc5d0\uc11c \uc801\uc808\ud558\uc9c0 \uc54a\uc740 \uc774\uc720"),(0,l.kt)("p",null,"\ub300\ubd80\ubd84\uc758 \uc0ac\ub78c\ub4e4\uc774 \ub3c4\ucee4\ub97c \ucc98\uc74c \uc0ac\uc6a9\ud560 \ub54c alpine linux\ub85c \uc0ac\uc6a9\ud558\ub294\ub370 \uadf8 \uc774\uc720\ub294 Ubuntu linux\uc640 \ube44\uad50\ud588\uc744 \ub54c \uc6a9\ub7c9\ub3c4 \uc791\uace0 \ube4c\ub4dc\ud560 \ub54c \ub354 \ube60\ub974\uae30 \ub54c\ubb38\uc774\ub2e4. \uadf8\ub7ec\ub098 python \ud658\uacbd\uc5d0\uc11c\ub294 \uc801\uc808\ud558\uc9c0 \uc54a\ub2e4."),(0,l.kt)("p",null,"\uadf8 \uc774\uc720\ub294 \uc0ac\uc6a9\ud558\ub294 \ub77c\uc774\ube0c\ub7ec\ub9ac\uc758 \ucc28\uc774\uc5d0\uc11c \uc2dc\uc791\ub41c\ub2e4. \ub300\ubd80\ubd84\uc758 \ub9ac\ub205\uc2a4 \ubc30\ud3ec\ud310\uc740 \ud30c\uc774\uc36c\uc744 \ud3ec\ud568\ud55c \ubaa8\ub4e0 C\uc5b8\uc5b4 \ud504\ub85c\uadf8\ub7a8\uc5d0 \ud544\uc694\ud55c C\uc5b8\uc5b4 \ud45c\uc900 \ub77c\uc774\ube0c\ub7ec\ub9ac\uc778 GNU \ub77c\uc774\ube0c\ub7ec\ub9ac(glibc)\ub97c \uc0ac\uc6a9\ud55c\ub2e4. \uadf8\ub7ec\ub098 Alpine Linux\ub294 \uc880 \ub354 \uacbd\ub7c9\ud654\ud558\uae30 \uc704\ud558\uc5ec GNU \ub77c\uc774\ube0c\ub7ec\ub9ac\ub97c \uc0ac\uc6a9\ud558\ub294 \uac83\uc774 \uc544\ub2c8\ub77c musl \ub77c\uc774\ube0c\ub7ec\ub9ac\ub97c \uc0ac\uc6a9\ud55c\ub2e4. \uc774 musl \ub77c\uc774\ube0c\ub7ec\ub9ac\ub294 GNU \ub77c\uc774\ube0c\ub7ec\ub9ac\ub85c \ucef4\ud30c\uc77c \ub41c ",(0,l.kt)("inlineCode",{parentName:"p"},"Wheel \ubc14\uc774\ub108\ub9ac"),"\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\ub294\ub2e4. \uadf8\ub807\uae30 \ub54c\ubb38\uc5d0 ",(0,l.kt)("inlineCode",{parentName:"p"},".whl")," \ud655\uc7a5\uc790\ub97c \uac16\ub294 \ud328\ud0a4\uc9c0\ub97c \ub2e4\uc6b4 \ubc1b\ub294 \uac83\uc774 \uc544\ub2c8\ub77c ",(0,l.kt)("inlineCode",{parentName:"p"},".tar.gz")," \ud655\uc7a5\uc790 \ud30c\uc77c\uc744 \ub2e4\uc6b4 \ubc1b\uac8c \ub41c\ub2e4. \uadf8\ub807\uae30 \ub54c\ubb38\uc5d0 alpine linux\ub97c \uc0ac\uc6a9\ud558\ub294 \uacbd\uc6b0 \uc0ac\uc6a9\ud558\ub294 \ubaa8\ub4e0 \ud30c\uc774\uc36c \ud328\ud0a4\uc9c0\uc758 C\ucf54\ub4dc\ub97c \ucef4\ud30c\uc77c \ud574\uc57c \ud558\ubbc0\ub85c \ube4c\ub4dc \uc2dc\uac04\ub3c4 \uc624\ub798 \uac78\ub9ac\uba70 \uc6a9\ub7c9\ub3c4 \ucee4\uc9c4\ub2e4\ub294 \uac83\uc774\ub2e4. "),(0,l.kt)("p",null,"\ucd5c\uadfc \ub300\ubd80\ubd84\uc758 \ud30c\uc774\uc36c \ud328\ud0a4\uc9c0\uc5d0\ub294 PyPI\uc758 Wheel \ubc14\uc774\ub108\ub9ac\uac00 \ud3ec\ud568\ub418\uc5b4 \uc788\uc5b4 \uc124\uce58 \uc2dc\uac04\uc774 \ube60\ub974\ub2e4. Wheel\uc740 \uc0ac\uc2e4 .whl \ud655\uc7a5\uc790\uc640 \ud2b9\ubcc4\ud55c \ud615\uc2dd\uc758 \ud30c\uc77c \uc774\ub984\uc73c\ub85c \uc774\ub8e8\uc5b4\uc9c4 ZIP \ud615\uc2dd\uc744 \uc544\uce74\uc774\ube0c\ud55c \uac83\uc774\ub2e4. \uc27d\uac8c \ub9d0\ud558\uba74 \ud655\uc7a5\uc790\ub9cc \ubc14\uafbc \uac83\uc774\ub2e4."),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\ube4c\ub4dc\uac00 \ub290\ub9ac\ub2e4."),(0,l.kt)("li",{parentName:"ol"},"\uc774\ubbf8\uc9c0 \uc6a9\ub7c9\uc774 \ucee4\uc9c4\ub2e4."),(0,l.kt)("li",{parentName:"ol"},"\uc2dc\uac04\uc774 \ub9ce\uc774 \ub0ad\ube44\ub41c\ub2e4.(\ube4c\ub4dc\ud558\ub294 \uacfc\uc815)"),(0,l.kt)("li",{parentName:"ol"},"\ub7f0\ud0c0\uc784 \ubc84\uadf8\ub4e4\uc744 \ub9cc\ub0a0 \uc218 \uc788\ub2e4.")),(0,l.kt)("p",null,"\uac04\ub2e8\ud558\uac8c \uc694\uc57d\ud558\uc790\uba74 \uc704\uc758 \uc774\uc720\ub4e4\uc774 Alpine Linux\uac00 python \ud658\uacbd\uc5d0\uc11c \uc801\uc808\ud558\uc9c0 \uc54a\uc740 \uc774\uc720\uc774\ub2e4."),(0,l.kt)("h3",{id:"\uadf8\ub7fc-\uc5b4\ub5a4-os\ub97c-\uc0ac\uc6a9\ud574\uc57c-\ud560\uae4c"},"\uadf8\ub7fc \uc5b4\ub5a4 OS\ub97c \uc0ac\uc6a9\ud574\uc57c \ud560\uae4c?"),(0,l.kt)("p",null,"\uc131\ub2a5\uc5d0 \uad00\uc2ec \uc788\uc73c\uba74 ubuntu, \uac00\ubccd\uac8c \ub3c4\ucee4\ub97c \uc2dc\uc791\ud574\ubcf4\ub824\uba74 alpine\uc774 \uc88b\uaca0\uc9c0\ub9cc \ud604\uc7ac \ub098\ub294 \ud30c\uc774\uc36c \ud658\uacbd\uc5d0\uc11c \ub3c4\ucee4\ub97c \uc0ac\uc6a9\ud574\ubcf4\ub824 \ud558\ub2c8 Debian buster\ub97c \uae30\ubc18\uc73c\ub85c \ud55c 3.8-slim-buster\ub97c \uc0ac\uc6a9\ud55c\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-Dockerfile"},"RUN apk update \\\n&& apk add postgresql-dev gcc python3-dev musl-dev zlib-dev jpeg-dev libffi-dev openssl-dev cargo\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-Dockerfile"},"FROM python:3.8-slim-buster\n")),(0,l.kt)("p",null,"\uc704\uc758 apk\ub85c \ud328\ud0a4\uc9c0 \uc124\uce58\ud55c \ubd80\ubd84\uc758 \uba85\ub839\uc5b4\ub97c \uc9c0\uc6b0\uace0, slim-buster\ub85c \ubc14\uafd4\uc900\ub2e4."),(0,l.kt)("p",null,"\uc774\ud6c4 \ub2e4\uc2dc build \ud588\uc744 \ub54c \uc798 \ub418\ub294 \ubaa8\uc2b5\uc744 \ud655\uc778\ud560 \uc218 \uc788\ub2e4."),(0,l.kt)("h2",{id:"references"},"References"),(0,l.kt)("blockquote",null,(0,l.kt)("ul",{parentName:"blockquote"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://cryptography.io/en/latest/installation/"},"Cryptography installation")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/pyca/cryptography/issues/5776"},"Dependencies to build on Alpine Linux?")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://jonnung.dev/docker/2020/04/08/optimizing-docker-images/"},"\ub3c4\ucee4 \uc774\ubbf8\uc9c0 \uc798 \ub9cc\ub4dc\ub294 \ubc29\ubc95")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://pythonspeed.com/articles/alpine-docker-python/"},"Using Alpine can make Python Docker builds 50x slower")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://pythonspeed.com/articles/base-image-python-docker-images/"},"The best Dockeer base image for Python application")))))}s.isMDXComponent=!0},5865:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/alpine-linux-build-issue-18101324b11176113bb1b45925f4cb06.jpg"},2350:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/crypto-building-error-d1fd632da6ad156fe5b2992ae3ad5b27.jpg"},23:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/cryptography-doc-7920a97dd96ca33edacacfbb8e6f2c1b.jpg"}}]);