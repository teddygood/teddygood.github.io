"use strict";(self.webpackChunkmy_blog=self.webpackChunkmy_blog||[]).push([[5428],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},c=Object.keys(e);for(o=0;o<c.length;o++)n=c[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(o=0;o<c.length;o++)n=c[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,f=u["".concat(l,".").concat(m)]||u[m]||s[m]||c;return n?o.createElement(f,a(a({ref:t},d),{},{components:n})):o.createElement(f,a({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,a=new Array(c);a[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,a[1]=i;for(var p=2;p<c;p++)a[p]=n[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6242:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>s,frontMatter:()=>c,metadata:()=>i,toc:()=>p});var o=n(7462),r=(n(7294),n(3905));const c={title:"Docker\ub97c \uc0ac\uc6a9\ud560 \ub54c DB URL \uc124\uc815\ud558\uae30",date:"2023-04-24",authors:"teddygood",draft:!1,slug:"/MongoDB-docker-connection",description:"DB URL \uc124\uc815\ud558\uae30",keywords:["docker","MongoDB"]},a=void 0,i={unversionedId:"Dev-Tips/MongoDB-docker-connection",id:"Dev-Tips/MongoDB-docker-connection",title:"Docker\ub97c \uc0ac\uc6a9\ud560 \ub54c DB URL \uc124\uc815\ud558\uae30",description:"DB URL \uc124\uc815\ud558\uae30",source:"@site/docs/Dev-Tips/MongoDB-docker-connection.md",sourceDirName:"Dev-Tips",slug:"/MongoDB-docker-connection",permalink:"/docs/MongoDB-docker-connection",draft:!1,editUrl:"https://github.com/teddygood/teddygood.github.io/tree/main/docs/Dev-Tips/MongoDB-docker-connection.md",tags:[],version:"current",frontMatter:{title:"Docker\ub97c \uc0ac\uc6a9\ud560 \ub54c DB URL \uc124\uc815\ud558\uae30",date:"2023-04-24",authors:"teddygood",draft:!1,slug:"/MongoDB-docker-connection",description:"DB URL \uc124\uc815\ud558\uae30",keywords:["docker","MongoDB"]},sidebar:"sidebar",previous:{title:"WSL2\uc5d0\uc11c Jupyter Lab \uc2e4\ud589 \ubb38\uc81c \ud574\uacb0",permalink:"/docs/Jupyter-lab-tcgetpgrp-failed"},next:{title:"Hugo PaperMod theme \ud3f0\ud2b8 \ubcc0\uacbd",permalink:"/docs/change-font-in-papermod"}},l={},p=[{value:"\ud83e\udd14 \ubb38\uc81c",id:"-\ubb38\uc81c",level:2},{value:"\ud83d\udea9 \ud574\uacb0",id:"-\ud574\uacb0",level:2},{value:"\ud83c\udf10 References",id:"-references",level:2}],d={toc:p};function s(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"-\ubb38\uc81c"},"\ud83e\udd14 \ubb38\uc81c"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},".env")," \ud30c\uc77c\uc5d0\uc11c ",(0,r.kt)("inlineCode",{parentName:"p"},"DATABASE_URL=mongodb://localhost:27017"),"\ub85c \uc124\uc815 \ud6c4 ",(0,r.kt)("inlineCode",{parentName:"p"},"docker-compose up -d")," \uba85\ub839\uc5b4\ub97c \uc0ac\uc6a9\ud558\ub2c8 \uc11c\ubc84\uc640 MongoDB\uac00 \uc5f0\uacb0\uc774 \ub418\uc9c0 \uc54a\ub294 \ud604\uc0c1\uc774 \ubc1c\uc0dd\ud588\ub2e4."),(0,r.kt)("p",null,"\ucc98\uc74c\uc5d0\ub294 \ud3ec\ud2b8\uac00 \uc0ac\uc6a9\uc911\uc778\uac00 \ud55c\ucc38\uc744 \uace0\ubbfc\ud588\ub2e4. \ubd84\uba85\ud788 \ub3c4\ucee4\uac00 \uc544\ub2cc \ub85c\uceec \ud658\uacbd\uc73c\ub85c \ub3cc\ub838\uc744 \ub54c\ub294 \uc798 \uc791\ub3d9\ub410\ub294\ub370 \uc65c \uc548 \ub418\ub294\uac00\uc5d0 \ub300\ud574 \uaf64 \ub9ce\uc740 \uc2dc\uac04\uc744 \uc18c\ube44\ud588\ub2e4."),(0,r.kt)("h2",{id:"-\ud574\uacb0"},"\ud83d\udea9 \ud574\uacb0"),(0,r.kt)("p",null,"\ud574\uacb0\uc740 \uac04\ub2e8\ud588\ub2e4. ",(0,r.kt)("inlineCode",{parentName:"p"},"localhost"),"\ub97c \ud604\uc7ac \uc0ac\uc6a9\ud558\uace0 \uc788\ub294 \uc11c\ubc84\uc758 \ucee8\ud14c\uc774\ub108 \uc774\ub984\uc73c\ub85c \ubc14\uafd4\uc8fc\uba74 \ub41c\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker ps\n")),(0,r.kt)("p",null,"\uc704 \uba85\ub839\uc5b4\ub97c \ud1b5\ud574 \ud604\uc7ac \uc0ac\uc6a9\uc911\uc778 \ucee8\ud14c\uc774\ub108\uc758 \uc774\ub984\uc744 \ud655\uc778 \ud6c4 ",(0,r.kt)("inlineCode",{parentName:"p"},".env")," \ud30c\uc77c\uc758 ",(0,r.kt)("inlineCode",{parentName:"p"},"DATABASE_URL"),"\uc744 ",(0,r.kt)("inlineCode",{parentName:"p"},"DATABASE_URL=mongodb://CONTAINER_NAME"),"\ucc98\ub7fc \uc218\uc815\ud574\uc8fc\uba74 \ub41c\ub2e4."),(0,r.kt)("h2",{id:"-references"},"\ud83c\udf10 References"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.mongodb.com/compatibility/docker"},"Docker and MongoDB")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://stackoverflow.com/questions/33336773/connecting-to-mongo-docker-container-from-host"},"Connecting to mongo docker container from host")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://stackoverflow.com/questions/7744147/pymongo-keeps-refusing-the-connection-at-27017"},"Pymongo keeps refusing the connection at 27017"))))}s.isMDXComponent=!0}}]);