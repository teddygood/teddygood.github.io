"use strict";(self.webpackChunkmy_blog=self.webpackChunkmy_blog||[]).push([[1921],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>g});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),d=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=d(e.components);return n.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=d(r),g=o,m=u["".concat(p,".").concat(g)]||u[g]||s[g]||a;return r?n.createElement(m,i(i({ref:t},c),{},{components:r})):n.createElement(m,i({ref:t},c))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var d=2;d<a;d++)i[d]=r[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},3333:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>s,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var n=r(7462),o=(r(7294),r(3905));const a={title:"\ud504\ub85c\uc138\uc2a4 \uac15\uc81c \uc885\ub8cc\ud558\uae30",date:"2022-03-07",authors:"teddygood",tags:["\uac1c\ubc1c\ud558\ub2e4\uac00 \ub9cc\ub09c \ubb38\uc81c"],draft:!1,description:"\uc2e4\uc218 \ub54c\ubb38\uc5d0 \uc0dd\uae34 \ubb38\uc81c \ud574\uacb0",keywords:["Django","port","\ud504\ub85c\uc138\uc2a4 \uac15\uc81c \uc885\ub8cc","\uae54\ub054\ud55c \ud30c\uc774\uc36c \ud0c4\ud0c4\ud55c \ubc31\uc5d4\ub4dc"]},i=void 0,l={permalink:"/blog/2022/03/07/django-port-is-already-in-use/django-port-is-already-in-use",editUrl:"https://github.com/teddygood/teddygood.github.io/blog/2022-03-07-django-port-is-already-in-use/django-port-is-already-in-use.md",source:"@site/blog/2022-03-07-django-port-is-already-in-use/django-port-is-already-in-use.md",title:"\ud504\ub85c\uc138\uc2a4 \uac15\uc81c \uc885\ub8cc\ud558\uae30",description:"\uc2e4\uc218 \ub54c\ubb38\uc5d0 \uc0dd\uae34 \ubb38\uc81c \ud574\uacb0",date:"2022-03-07T00:00:00.000Z",formattedDate:"2022\ub144 3\uc6d4 7\uc77c",tags:[{label:"\uac1c\ubc1c\ud558\ub2e4\uac00 \ub9cc\ub09c \ubb38\uc81c",permalink:"/blog/tags/\uac1c\ubc1c\ud558\ub2e4\uac00-\ub9cc\ub09c-\ubb38\uc81c"}],hasTruncateMarker:!0,authors:[{name:"Chanho Lee",title:"\ub2e4\uc591\ud55c \ubd84\uc57c\ub97c \uacf5\ubd80\ud558\uace0 \uc788\ub294 \ud559\uc0dd",url:"https://github.com/teddygood",imageURL:"https://github.com/teddygood.png",key:"teddygood"}],frontMatter:{title:"\ud504\ub85c\uc138\uc2a4 \uac15\uc81c \uc885\ub8cc\ud558\uae30",date:"2022-03-07",authors:"teddygood",tags:["\uac1c\ubc1c\ud558\ub2e4\uac00 \ub9cc\ub09c \ubb38\uc81c"],draft:!1,description:"\uc2e4\uc218 \ub54c\ubb38\uc5d0 \uc0dd\uae34 \ubb38\uc81c \ud574\uacb0",keywords:["Django","port","\ud504\ub85c\uc138\uc2a4 \uac15\uc81c \uc885\ub8cc","\uae54\ub054\ud55c \ud30c\uc774\uc36c \ud0c4\ud0c4\ud55c \ubc31\uc5d4\ub4dc"]},prevItem:{title:"Hugo PaperMod theme \ud3f0\ud2b8 \ubcc0\uacbd\ud558\uae30",permalink:"/blog/2022/07/14/change-font-in-papermod/change-font-in-papermod"},nextItem:{title:"\ubc15\ubbf8\uc815\uc758 \uae43&\uae43\ud5c8\ube0c \uc785\ubb38",permalink:"/blog/2021/10/08/Git-GitHub-introduction/Git-GitHub-introduction"}},p={authorsImageUrls:[void 0]},d=[{value:"\uc2e4\uc218 \ub54c\ubb38\uc5d0 \uc0dd\uae34 \uc5d0\ub7ec",id:"\uc2e4\uc218-\ub54c\ubb38\uc5d0-\uc0dd\uae34-\uc5d0\ub7ec",level:2}],c={toc:d};function s(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\uc2e4\uc218-\ub54c\ubb38\uc5d0-\uc0dd\uae34-\uc5d0\ub7ec"},"\uc2e4\uc218 \ub54c\ubb38\uc5d0 \uc0dd\uae34 \uc5d0\ub7ec"),(0,o.kt)("p",null,"django\ub97c \uc2dc\uc791\ud558\uace0 \uc885\ub8cc\ud560 \ub54c ",(0,o.kt)("inlineCode",{parentName:"p"},"Ctrl-C"),"\ub97c \uc0ac\uc6a9\ud574\uc11c \uaebc\uc57c \ud588\ub294\ub370 ",(0,o.kt)("inlineCode",{parentName:"p"},"Ctrl-Z"),"\ub97c \uc0ac\uc6a9\ud588\ub2e4.\n\uc885\ub8cc\uac00 \uc81c\ub300\ub85c \ub41c \uc904 \uc54c\uc558\uc9c0\ub9cc, \ud504\ub85c\uc138\uc2a4\uac00 \uc911\ub2e8\ub41c \uac83\uc774\uc5c8\ub2e4."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"port-error-image",src:r(7433).Z,width:"616",height:"43"}),"  "),(0,o.kt)("p",null,"\uacb0\uad6d \uc704\uc758 ",(0,o.kt)("inlineCode",{parentName:"p"},"Error: That port is already in use."),"\ub77c\ub294 \uc5d0\ub7ec\uac00 \ubc1c\uc0dd\ud588\ub2e4."))}s.isMDXComponent=!0},7433:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/port-error-message-41c3a8bf0118f4960204e109ed6ff635.jpg"}}]);