"use strict";(self.webpackChunkmy_blog=self.webpackChunkmy_blog||[]).push([[7655],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=s(r),m=a,f=u["".concat(p,".").concat(m)]||u[m]||c[m]||o;return r?n.createElement(f,i(i({ref:t},d),{},{components:r})):n.createElement(f,i({ref:t},d))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},5017:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=r(7462),a=(r(7294),r(3905));const o={title:"\ud504\ub85c\uc138\uc2a4 \uac15\uc81c \uc885\ub8cc",date:"2022-03-07",authors:"teddygood",draft:!1,slug:"/django-port-is-already-in-use",description:"\uc2e4\uc218 \ub54c\ubb38\uc5d0 \uc0dd\uae34 \ubb38\uc81c \ud574\uacb0",keywords:["Django","port","\ud504\ub85c\uc138\uc2a4 \uac15\uc81c \uc885\ub8cc","\uae54\ub054\ud55c \ud30c\uc774\uc36c \ud0c4\ud0c4\ud55c \ubc31\uc5d4\ub4dc"]},i=void 0,l={unversionedId:"Dev-Tips/django-port-is-already-in-use",id:"Dev-Tips/django-port-is-already-in-use",title:"\ud504\ub85c\uc138\uc2a4 \uac15\uc81c \uc885\ub8cc",description:"\uc2e4\uc218 \ub54c\ubb38\uc5d0 \uc0dd\uae34 \ubb38\uc81c \ud574\uacb0",source:"@site/docs/Dev-Tips/django-port-is-already-in-use.md",sourceDirName:"Dev-Tips",slug:"/django-port-is-already-in-use",permalink:"/docs/django-port-is-already-in-use",draft:!1,editUrl:"https://github.com/teddygood/teddygood.github.io/tree/main/docs/Dev-Tips/django-port-is-already-in-use.md",tags:[],version:"current",frontMatter:{title:"\ud504\ub85c\uc138\uc2a4 \uac15\uc81c \uc885\ub8cc",date:"2022-03-07",authors:"teddygood",draft:!1,slug:"/django-port-is-already-in-use",description:"\uc2e4\uc218 \ub54c\ubb38\uc5d0 \uc0dd\uae34 \ubb38\uc81c \ud574\uacb0",keywords:["Django","port","\ud504\ub85c\uc138\uc2a4 \uac15\uc81c \uc885\ub8cc","\uae54\ub054\ud55c \ud30c\uc774\uc36c \ud0c4\ud0c4\ud55c \ubc31\uc5d4\ub4dc"]},sidebar:"sidebar",previous:{title:"Hugo PaperMod theme \ud3f0\ud2b8 \ubcc0\uacbd",permalink:"/docs/change-font-in-papermod"},next:{title:"PyCharm\uc774 \uc815\ub82c\ud574\uc900 \uc774\uc0c1\ud55c \ucf54\ub4dc",permalink:"/docs/pycharm-reformat-code"}},p={},s=[{value:"\ud83e\udd14 \uc2e4\uc218 \ub54c\ubb38\uc5d0 \uc0dd\uae34 \uc5d0\ub7ec",id:"-\uc2e4\uc218-\ub54c\ubb38\uc5d0-\uc0dd\uae34-\uc5d0\ub7ec",level:2},{value:"\ud83d\udea9 \ud574\uacb0",id:"-\ud574\uacb0",level:2},{value:"\ud83c\udf10 References",id:"-references",level:2}],d={toc:s};function c(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"-\uc2e4\uc218-\ub54c\ubb38\uc5d0-\uc0dd\uae34-\uc5d0\ub7ec"},"\ud83e\udd14 \uc2e4\uc218 \ub54c\ubb38\uc5d0 \uc0dd\uae34 \uc5d0\ub7ec"),(0,a.kt)("p",null,"django\ub97c \uc2dc\uc791\ud558\uace0 \uc885\ub8cc\ud560 \ub54c ",(0,a.kt)("inlineCode",{parentName:"p"},"Ctrl-C"),"\ub97c \uc0ac\uc6a9\ud574\uc11c \uaebc\uc57c \ud588\ub294\ub370 ",(0,a.kt)("inlineCode",{parentName:"p"},"Ctrl-Z"),"\ub97c \uc0ac\uc6a9\ud588\ub2e4.\n\uc885\ub8cc\uac00 \uc81c\ub300\ub85c \ub41c \uc904 \uc54c\uc558\uc9c0\ub9cc, \ud504\ub85c\uc138\uc2a4\uac00 \uc911\ub2e8\ub41c \uac83\uc774\uc5c8\ub2e4."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"port-error-image",src:r(5095).Z,width:"616",height:"43"}),"  "),(0,a.kt)("p",null,"\uacb0\uad6d \uc704\uc758 ",(0,a.kt)("inlineCode",{parentName:"p"},"Error: That port is already in use."),"\ub77c\ub294 \uc5d0\ub7ec\uac00 \ubc1c\uc0dd\ud588\ub2e4."),(0,a.kt)("h2",{id:"-\ud574\uacb0"},"\ud83d\udea9 \ud574\uacb0"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"ps",src:r(641).Z,width:"474",height:"161"}),"  "),(0,a.kt)("p",null,"\ub300\ucda9 \ud504\ub85c\uc138\uc2a4\ub97c \uc885\ub8cc\ud558\uba74 \ub418\uc9c0 \uc54a\uc744\uae4c \uc0dd\uac01\ud588\uace0, ",(0,a.kt)("inlineCode",{parentName:"p"},"ps")," \uba85\ub839\uc5b4\ub97c \uc0ac\uc6a9\ud574\ubd24\uc73c\ub098 \uc5ed\uc2dc \uc5b4\ub5a4 PID\uac00 \uc7a5\uace0 \ud504\ub85c\uc138\uc2a4\uc778\uc9c0 \uc54c\uc544\ubcfc \uc218 \uc5c6\uc5c8\ub2e4."),(0,a.kt)("p",null,"\uacb0\uad6d \uc2a4\ud0dd\uc624\ubc84\ud50c\ub85c\uc6b0\uc5d0 \ub0c5\ub2e4 \uac80\uc0c9\ud574\ubc84\ub838\ub2e4.(Reference \ucc38\uace0)",(0,a.kt)("br",{parentName:"p"}),"\n","\uc5ed\uc2dc StackOverFlow\ub294 \uc815\ub2f5\uc744 \uc54c\ub824\uc92c\ub2e4.(\uc2a4\ud0dd\uc624\ubc84\ud50c\ub85c\uc6b0\ub294 \uc2e0\uc774\uc57c!)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"sudo lsof -t -i tcp:8000 | xargs kill -9\n")),(0,a.kt)("p",null,"\uc704\uc758 \uba85\ub839\uc5b4\ub97c \uc0ac\uc6a9\ud558\uba74 \ud574\uacb0\uc774 \ub41c\ub2e4."),(0,a.kt)("p",null,"\uac04\ub2e8\ud558\uac8c \uc815\ub9ac\ud558\uc790\uba74 ",(0,a.kt)("inlineCode",{parentName:"p"},"lsof"),"\ub294 \uc2dc\uc2a4\ud15c\uc5d0 \uc5f4\ub824\uc788\ub294 \ud30c\uc77c\uc5d0 \ub300\ud55c \uc815\ubcf4\ub97c \ucd9c\ub825\ud558\ub294 \uba85\ub839\uc5b4\ub2e4.\n\uc5ec\uae30\uc11c \uc0ac\uc6a9\ud55c ",(0,a.kt)("inlineCode",{parentName:"p"},"-i")," \uc635\uc158\uc740 \uc5f4\ub824\uc788\ub294 \ub124\ud2b8\uc6cc\ud06c \ud3ec\ud2b8 \uc815\ubcf4\ub97c \ud655\uc778\ud558\ub294 \uac83\uc774\uace0, ",(0,a.kt)("inlineCode",{parentName:"p"},"-t")," \uc635\uc158\uc740 \uadf8 \uc911 PID\ub9cc \ucd9c\ub825\ud55c\ub2e4\ub294 \uac83\uc774\ub2e4."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"xargs"),"\ub294 \ud30c\uc774\ud504 \uc774\uc804\uc758 \uba85\ub839\uc744 \uc778\uc790\ub85c \ubc1b\uc544 \ub2e4\uc74c \uba85\ub839\uc744 \uc2e4\ud589\ud560 \ub54c \uc8fc\ub85c \uc0ac\uc6a9\ud55c\ub2e4.  "),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"kill -9"),"\ub294 \uc720\uba85\ud574\uc11c \ub2e4\ub4e4 \uc544\uc2dc\uaca0\uc9c0\ub9cc SIGNAL \ub9ac\uc2a4\ud2b8 \uc911 ",(0,a.kt)("inlineCode",{parentName:"p"},"SIGKILL"),"\uc758 \ubc88\ud638\ub97c \uc635\uc158\uc73c\ub85c \uc0ac\uc6a9\ud55c \uac83\uc774\ub2e4."),(0,a.kt)("p",null,"\uba85\ub839\uc5b4\ub294 \uc6b0\ubd84\ud22c \ud658\uacbd\uc5d0\uc11c \uc0ac\uc6a9\ud588\uc9c0\ub9cc, \ub9e5\uc5d0\uc11c\ub3c4 \ub3cc\uc544\uac04\ub2e4\uace0 \ud55c\ub2e4."),(0,a.kt)("h2",{id:"-references"},"\ud83c\udf10 References"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://stackoverflow.com/questions/20239232/django-server-error-port-is-already-in-use"},"jango Server Error: port is already in use - stackoverflow")," "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://ghostweb.tistory.com/828"},"Ubuntu \ud504\ub85c\uc138\uc2a4 \uac15\uc81c \uc885\ub8cc\uc2dc\ud0a4\uae30")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://dev.plusblog.co.kr/44"},"lsof \uba85\ub839\uc5b4 \uc0ac\uc6a9\ubc95")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://inpa.tistory.com/entry/LINUX-%F0%9F%93%9A-xargs-%EB%AA%85%EB%A0%B9-%ED%8C%8C%EC%9D%B4%ED%94%84-%EC%99%80-%EC%B0%A8%EC%9D%B4%EC%A0%90-%EC%99%84%EB%B2%BD-%EC%A0%95%EB%A6%AC-%ED%91%9C%EC%A4%80%EC%9E%85%EB%A0%A5-%EC%9D%B8%EC%9E%90-%EC%B0%A8%EC%9D%B4#top"},"xargs \uba85\ub839 & \ud30c\uc774\ud504 \uc640 \ucc28\uc774\uc810 \uc644\ubcbd \uc815\ub9ac (\ud45c\uc900\uc785\ub825 / \uc778\uc790 \ucc28\uc774)"))))}c.isMDXComponent=!0},5095:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/port-error-message-41c3a8bf0118f4960204e109ed6ff635.jpg"},641:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/python-ps-e524765dbf8864e898d7b4f6aae9e9f1.jpg"}}]);