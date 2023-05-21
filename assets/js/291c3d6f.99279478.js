"use strict";(self.webpackChunkmy_blog=self.webpackChunkmy_blog||[]).push([[2171],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>f});var r=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var p=r.createContext({}),s=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,o=e.mdxType,n=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=s(a),f=o,k=d["".concat(p,".").concat(f)]||d[f]||u[f]||n;return a?r.createElement(k,l(l({ref:t},c),{},{components:a})):r.createElement(k,l({ref:t},c))}));function f(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=a.length,l=new Array(n);l[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var s=2;s<n;s++)l[s]=a[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},6368:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>n,metadata:()=>i,toc:()=>s});var r=a(7462),o=(a(7294),a(3905));const n={title:"\ud83d\udcd6 fastai\uc640 \ud30c\uc774\ud1a0\uce58\uac00 \ub9cc\ub098 \uaf43\ud53c\uc6b4 \ub525\ub7ec\ub2dd",date:"2021-09-19",authors:"teddygood",tags:["Book Review"],draft:!1,slug:"/fastai-and-pytorch",description:"\ubc15\uc0ac \ud559\uc704 \uc5c6\uc774 AI\ub97c \ud3fc\ub098\uac8c \uad6c\ud604\ud558\ub294 \ubc95",keywords:["PyTorch","fastai","\ub525\ub7ec\ub2dd"]},l=void 0,i={permalink:"/blog/fastai-and-pytorch",editUrl:"https://github.com/teddygood/teddygood.github.io/tree/main/blog/2021-09-19-fastai-and-pytorch/fastai-and-pytorch.md",source:"@site/blog/2021-09-19-fastai-and-pytorch/fastai-and-pytorch.md",title:"\ud83d\udcd6 fastai\uc640 \ud30c\uc774\ud1a0\uce58\uac00 \ub9cc\ub098 \uaf43\ud53c\uc6b4 \ub525\ub7ec\ub2dd",description:"\ubc15\uc0ac \ud559\uc704 \uc5c6\uc774 AI\ub97c \ud3fc\ub098\uac8c \uad6c\ud604\ud558\ub294 \ubc95",date:"2021-09-19T00:00:00.000Z",formattedDate:"2021\ub144 9\uc6d4 19\uc77c",tags:[{label:"Book Review",permalink:"/blog/tags/book-review"}],hasTruncateMarker:!1,authors:[{name:"Chanho Lee",title:"\ub2e4\uc591\ud55c \ubd84\uc57c\ub97c \uacf5\ubd80\ud558\uace0 \uc788\ub294 \ud559\uc0dd",url:"https://github.com/teddygood",imageURL:"https://github.com/teddygood.png",key:"teddygood"}],frontMatter:{title:"\ud83d\udcd6 fastai\uc640 \ud30c\uc774\ud1a0\uce58\uac00 \ub9cc\ub098 \uaf43\ud53c\uc6b4 \ub525\ub7ec\ub2dd",date:"2021-09-19",authors:"teddygood",tags:["Book Review"],draft:!1,slug:"/fastai-and-pytorch",description:"\ubc15\uc0ac \ud559\uc704 \uc5c6\uc774 AI\ub97c \ud3fc\ub098\uac8c \uad6c\ud604\ud558\ub294 \ubc95",keywords:["PyTorch","fastai","\ub525\ub7ec\ub2dd"]},prevItem:{title:"\ud83d\udcd6 \ud30c\uc774\uc36c \uba38\uc2e0\ub7ec\ub2dd \ud310\ub2e4\uc2a4 \ub370\uc774\ud130 \ubd84\uc11d",permalink:"/blog/pandas-data-analysis"},nextItem:{title:"\ud83d\udcd6 \uae54\ub054\ud55c \ud30c\uc774\uc36c \ud0c4\ud0c4\ud55c \ubc31\uc5d4\ub4dc",permalink:"/blog/python-backend-flask"}},p={authorsImageUrls:[void 0]},s=[{value:"Book Info",id:"book-info",level:2},{value:"\ucc45 \ub9ac\ubdf0",id:"\ucc45-\ub9ac\ubdf0",level:2},{value:"\ud480\uceec\ub7ec",id:"\ud480\uceec\ub7ec",level:3},{value:"TIP",id:"tip",level:3},{value:"\ud558\ud5a5\uc2dd",id:"\ud558\ud5a5\uc2dd",level:3},{value:"\uac1c\ubc1c \ud658\uacbd",id:"\uac1c\ubc1c-\ud658\uacbd",level:3},{value:"\uc9c8\ubb38\uc9c0(Questionnaire)",id:"\uc9c8\ubb38\uc9c0questionnaire",level:3},{value:"\ub300\uc0c1\ub3c5\uc790",id:"\ub300\uc0c1\ub3c5\uc790",level:2}],c={toc:s};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("center",null,"\ud55c\ube5b\ubbf8\ub514\uc5b4 <\ub098\ub294 \ub9ac\ubdf0\uc5b4\ub2e4> \ud65c\ub3d9\uc744 \uc704\ud574\uc11c \ucc45\uc744 \uc81c\uacf5\ubc1b\uc544 \uc791\uc131\ub41c \uc11c\ud3c9\uc785\ub2c8\ub2e4."))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"\ub098\ub294 \ub9ac\ubdf0\uc5b4\ub2e4 2021",src:a(4764).Z,width:"820",height:"312"})),(0,o.kt)("h2",{id:"book-info"},"Book Info"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("center",null,"\ucc45\uc744 \ub204\ub974\uba74 \uad50\ubcf4\ubb38\uace0 \uc0ac\uc774\ud2b8\ub85c \uc5f0\uacb0\ub429\ub2c8\ub2e4!"))),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"http://www.kyobobook.co.kr/product/detailViewKor.laf?ejkGb=KOR&mallGb=KOR&barcode=9791162244630&orderClick=LEa&Kc="},(0,o.kt)("img",{alt:"\ucc45",src:a(1586).Z,width:"458",height:"556"}))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\uc81c\ubaa9: fastai\uc640 \ud30c\uc774\ud1a0\uce58\uac00 \ub9cc\ub098 \uaf43\ud53c\uc6b4 \ub525\ub7ec\ub2dd"),(0,o.kt)("li",{parentName:"ul"},"\uc800\uc790: Jeremy Howard, Sylvain Gugger"),(0,o.kt)("li",{parentName:"ul"},"\uc5ed\uc790: \ubc15\ucc2c\uc131, \uae40\uc9c0\uc740"),(0,o.kt)("li",{parentName:"ul"},"\ucd9c\ud310\uc0ac: \ud55c\ube5b\ubbf8\ub514\uc5b4"),(0,o.kt)("li",{parentName:"ul"},"\ucd9c\uac04: 2021-08-10")),(0,o.kt)("h2",{id:"\ucc45-\ub9ac\ubdf0"},"\ucc45 \ub9ac\ubdf0"),(0,o.kt)("h3",{id:"\ud480\uceec\ub7ec"},"\ud480\uceec\ub7ec"),(0,o.kt)("p",null,"\ub2e4\ub978 \ubd84\ub4e4\uc758 \ub9ac\ubdf0\ub4e4\uc744 \ubcf4\uc2dc\uba74 \uc544\uc2dc\ub4ef\uc774 \uc774 \ucc45\uc740 \ud480\uceec\ub7ec\uc785\ub2c8\ub2e4. \uc815\ub9d0 \ubcc4 \uac70 \uc544\ub2c8\uc9c0\ub9cc \uc774\ub7f0 \ubc88\uc5ed\uc11c\ub4e4\uc744 \ud480\uceec\ub7ec\ub85c \ub9cc\ub098\uba74 \uae30\ubd84\uc774 \uadf8\ub807\uac8c \uc88b\ub354\ub77c\uace0\uc694. \ub610\ud55c, 720p\ub77c\ub294 \ub450\uaebc\uc6b4 \ucc45\uc778\ub370\ub3c4 \ubd88\uad6c\ud558\uace0 \ud480\uceec\ub7ec\ub85c \uc778\uc1c4\ud55c \ucd9c\ud310\uc0ac\uac00 \uc815\ub9d0 \ub300\ub2e8\ud558\ub2e4\uace0 \ub290\uaef4\uc9d1\ub2c8\ub2e4. \ub355\ubd84\uc5d0 \uc2dc\uac01\uc801\uc73c\ub85c\ub3c4 \ud3b8\ud558\uac8c \ubcfc \uc218 \uc788\uc5c8\uc2b5\ub2c8\ub2e4."),(0,o.kt)("h3",{id:"tip"},"TIP"),(0,o.kt)("p",null,"\uc774 \ucc45\uc758 \uc800\uc790 2\uba85\uacfc \ud568\uaed8 Alexis Gallagher\ub77c\ub294 \uc0ac\ub78c\uc774 \uc218\ud559\uacfc \uacf5\ud559\uc801 \ubc30\uacbd\uc9c0\uc2dd\uc774 \uc801\uac70\ub098 \uc2e4\uc81c\ub85c \ucf54\ub529 \uacbd\ud5d8\uc774 \uc5c6\ub294 \uc0ac\ub78c\ub4e4\uc744 \uc704\ud55c TIP\uc744 \uc54c\ub824\uc90d\ub2c8\ub2e4. \uac01 \ubd84\uc57c\uc5d0 \ub300\ud55c \uba58\ud1a0\uac00 \ub098\uc640\uc11c \ud55c \ubc88\uc529 \uc870\uc5b8\ud574\uc8fc\uace0 \uc54c\ub824\uc8fc\ub294 \ub290\ub08c\uc785\ub2c8\ub2e4. \ub9e4\uc6b0 \ub3c4\uc6c0\uc774 \ub410\uc2b5\ub2c8\ub2e4."),(0,o.kt)("h3",{id:"\ud558\ud5a5\uc2dd"},"\ud558\ud5a5\uc2dd"),(0,o.kt)("p",null,"\uc77c\ubc18\uc801\uc778 \uba38\uc2e0\ub7ec\ub2dd, \ub525\ub7ec\ub2dd \ucc45\uc774\uc5c8\ub2e4\uba74 \ubc11\ubc14\ub2e5\ubd80\ud130 \ubb34\uc5b8\uac00\ub97c \uad6c\ud604\ud558\uc5ec \ud558\ub098\ud558\ub098 \ub2e8\uacc4\ub97c \uc62c\ub77c\uac00\ub294 \ub290\ub08c\uc778\ub370 \uc774 \ucc45\uc740 \ub2e4\ub985\ub2c8\ub2e4. \uc774 \ucc45\uc740 top-down(\ud558\ud5a5\uc2dd)\uc73c\ub85c \uc4f0\uc5ec\uc9c4 \ucc45\uc785\ub2c8\ub2e4. \uc77c\ubc18\uc801\uc778 \uac15\uc758 \ub610\ub294 \ucc45\uacfc\ub294 \uc815\ubc18\ub300\uc758 \ubc29\uc2dd\uc774\uae30 \ub54c\ubb38\uc5d0 \ub525\ub7ec\ub2dd\uc5d0 \ub300\ud55c \uc0ac\uc804 \uc9c0\uc2dd\uc774 \uc788\uc73c\uba74 \uc880 \ub354 \uc77d\uae30 \uc26c\uc6b8 \uac83 \uac19\uc2b5\ub2c8\ub2e4."),(0,o.kt)("p",null,"\ucc98\uc74c\ubd80\ud130 \ubaa8\ub378\uc744 \ub9cc\ub4e4\uc5b4\ubcf4\uace0 \uc0ac\uc6a9\ud574\ubcf4\ub294\ub370 \uc774\ub7f0 \uacfc\uc815 \uc18d\uc5d0\uc11c \ubaa8\ub4e0 \uac1c\ub150\ub4e4\uc744 \uc774\ud574\ud558\uae30\ub294 \uc5b4\ub835\uc2b5\ub2c8\ub2e4. \uc774\ub7ec\ud55c \ucd08\ubc18\ubd80\uc5d0\uc11c\ub294 \uadf8\uc800 \ub525\ub7ec\ub2dd\uc5d0 \ub300\ud55c \ud765\ubbf8\ub97c \ub290\ub07c\ub294\ub370 \ubaa9\ud45c\ub97c \uac16\uae30\ub97c \ubc14\ub78d\ub2c8\ub2e4. \ud6c4\uc5d0 \ub0b4\ubd80\uc801\uc73c\ub85c \uc5b4\ub5bb\uac8c \uc791\ub3d9\ub418\ub294\uc9c0 \uc124\uba85\ud569\ub2c8\ub2e4. "),(0,o.kt)("h3",{id:"\uac1c\ubc1c-\ud658\uacbd"},"\uac1c\ubc1c \ud658\uacbd"),(0,o.kt)("p",null,"\uc774 \ucc45\uc740 Jupyter Notebook\uc744 \uc0ac\uc6a9\ud569\ub2c8\ub2e4. \uadf8\ub7ec\ub098 \uc774\ub7f0 \ud658\uacbd\uc744 \uad6c\uc131\ud558\ub294 \ubc29\ubc95\uae4c\uc9c0 \uc790\uc138\ud788 \uc54c\ub824\uc8fc\uc9c0\ub294 \uc54a\uc2b5\ub2c8\ub2e4. \uadf8\ub807\uae30\uc5d0 \uc790\uc2e0\uc774 \ud658\uacbd\uc744 \uad6c\uc131\ud560 \uc904 \uc54c\uc544\uc57c \ud569\ub2c8\ub2e4. \uc804 GPU\uac00 \ub9e4\uc6b0 \uc88b\uc9c0 \uc54a\uae30 \ub54c\ubb38\uc5d0 \uad6c\uae00\uc5d0\uc11c \uc81c\uacf5\ud558\ub294 ",(0,o.kt)("a",{parentName:"p",href:"https://colab.research.google.com/"},"Colab"),"\uc744 \uc0ac\uc6a9\ud588\uc2b5\ub2c8\ub2e4. \uadfc\ub370 \uc804 Colab Pro\ub97c \uc0ac\uc6a9\ud588\ub294\ub370 \uc65c \uc800\uc790\uc758 \ud658\uacbd\uc5d0\uc11c \ucf54\ub4dc\ub97c \uc2e4\ud589\uc2dc\ud0a4\ub294 \uac83\ubcf4\ub2e4 \ub354 \uc624\ub798 \uac78\ub9ac\ub294\uc9c0 \uc544\uc9c1\ub3c4 \uc798 \ubaa8\ub974\uaca0\uc2b5\ub2c8\ub2e4."),(0,o.kt)("p",null,"\uc800\ucc98\ub7fc GPU\uac00 \uc88b\uc9c0 \uc54a\ub2e4\uba74 Colab \uc0ac\uc6a9 \ubc29\ubc95\ub3c4 \uc54c\uc544\uc57c\uaca0\uc8e0. \ucc45\uc5d0\uc11c\ub294 \uc790\uc138\ud788 \uc124\uba85\ub418\uc5b4 \uc788\uc9c0 \uc54a\uc9c0\ub9cc ",(0,o.kt)("a",{parentName:"p",href:"https://course.fast.ai/start_colab"},"fast.ai course"),"\uc5d0\uc11c Colab\uc744 \uc0ac\uc6a9\ud558\uc5ec \ucf54\ub4dc\ub97c \uc0ac\uc6a9\ud558\ub294 \ubc29\ubc95\uc744 \uc54c\ub824\uc90d\ub2c8\ub2e4. "),(0,o.kt)("h3",{id:"\uc9c8\ubb38\uc9c0questionnaire"},"\uc9c8\ubb38\uc9c0(Questionnaire)"),(0,o.kt)("p",null,"\uac01 \uc7a5\uc774 \ub05d\ub0a0 \ub54c\ub9c8\ub2e4 \uc9c8\ubb38\uc9c0\uac00 \uc8fc\uc5b4\uc9d1\ub2c8\ub2e4. \uac1c\uc778\uc801\uc73c\ub85c \uc804 \uc774 \uc9c8\ubb38\uc9c0\uac00 \ub3c5\ud2b9\ud558\ub2e4\uace0 \ub290\uaf08\uace0 \uc815\ub9d0 \ub3c4\uc6c0\uc774 \ub9ce\uc774 \ub410\uc2b5\ub2c8\ub2e4. \uc774 \uc9c8\ubb38\uc9c0\ub294 \uac01 \uc7a5\uc744 \uacf5\ubd80\ud558\uae30 \uc804\uc5d0 \uba3c\uc800 \uc77d\uc5b4\ub3c4 \uc88b\uace0 \ud55c \uc7a5\uc744 \ub2e4 \uc77d\uace0 \ud6c4\uc5d0 \ubcf5\uc2b5\uc6a9\uc73c\ub85c \uc77d\uc5b4\ubd10\ub3c4 \uc88b\uc2b5\ub2c8\ub2e4. \uc0ac\uc804\uc5d0 \uc77d\uc73c\uba74 \uc5b4\ub5a4 \ubd80\ubd84\uc5d0 \uc9d1\uc911\ud560 \uc9c0 \ubbf8\ub9ac \uc54c \uc218 \uc788\uace0 \uacf5\ubd80\ud55c \ud6c4\uc5d0 \uc77d\uc73c\uba74 \uc790\uc2e0\uc774 \uc81c\ub300\ub85c \uacf5\ubd80\ud588\uc5c8\ub294\uc9c0 \uc9c0\uc2dd\uc744 \uc810\uac80\ud560 \uc218 \uc788\uaca0\uc8e0. \ucc45\uc744 \uc798 \uc77d\uc5c8\ub2e4\uba74 \ub300\ubd80\ubd84\uc758 \uc9c8\ubb38\ub4e4\uc740 \ub300\ub2f5\ud560 \uc218 \uc788\uc744 \uac83\uc785\ub2c8\ub2e4. \uadf8\ub798\ub3c4 \uc9c8\ubb38\uc9c0\uc758 \uc815\ub2f5\uc744 \ubaa8\ub974\uba74 ",(0,o.kt)("a",{parentName:"p",href:"https://forums.fast.ai/t/fastbook-questionnaire-solutions-megathread/76955"},"Fastbook questionnaire solutions - fast.ai forum"),"\uc5d0\uc11c solution\uc774 \uc8fc\uc5b4\uc9c0\ub2c8 \ucc38\uace0\ud558\uc2dc\uba74 \uc88b\uc744 \uac83 \uac19\uc2b5\ub2c8\ub2e4. \ub098\uc911\uc5d0 \uae30\ud68c\uac00 \ub41c\ub2e4\uba74 \ube14\ub85c\uadf8\uc5d0 \uc9c8\ubb38\uc9c0\uc5d0 \ub300\ud55c \uc194\ub8e8\uc158\uc744 \uc62c\ub824\ubcfc \uc608\uc815\uc785\ub2c8\ub2e4."),(0,o.kt)("h2",{id:"\ub300\uc0c1\ub3c5\uc790"},"\ub300\uc0c1\ub3c5\uc790"),(0,o.kt)("p",null,"\ucc45\uc5d0\uc11c\ub294 1\ub144 \uc815\ub3c4\uc758 \ucf54\ub529 \uacbd\ud5d8, \uace0\ub4f1\ud559\uad50 \uc774\uc0c1\uc758 \uc218\ud559 \uacfc\uc815\uc744 \ub9c8\uce5c \uc0ac\ub78c\uc744 \ub300\uc0c1\uc73c\ub85c \ud569\ub2c8\ub2e4. \uadf8\ub7ec\ub098 \uc804 \uc774 \ucc45\uc744 \uc77d\uae30 \uc804\uc5d0 \ucd94\uac00\uc801\uc73c\ub85c \ud30c\uc774\uc36c, PyTorch, \uc870\uae08\uc758 \ub525\ub7ec\ub2dd \uc9c0\uc2dd\uc774 \uc788\uc73c\uba74 \ucc45\uc744 \uc77d\ub294 \ub370 \ub354 \ud3b8\ud560 \uac83\uc774\ub77c\uace0 \uc608\uc0c1\ub429\ub2c8\ub2e4. "),(0,o.kt)("p",null,"\uc804 \ub525\ub7ec\ub2dd\uc774 \uacf5\ubd80\ud558\uae30 \uc5b4\ub824\uc6b4 \uc774\uc720\uac00 '\ub2e4\uc591\ud55c \uac1c\ub150\ub4e4\uacfc \uae30\ucd08 \uc9c0\uc2dd\ub4e4'\uc774\ub77c\uace0 \uc0dd\uac01\ud569\ub2c8\ub2e4. \uac1c\ub150\uc744 \uc138\ubd80\uc801\uc73c\ub85c \ub2e4 \uc124\uba85\ud574\uc918\ub3c4 \uac11\uc790\uae30 \ubb34\uc218\ud788 \ub9ce\uc740 \uac1c\ub150\ub4e4\uc774 \ub4f1\uc7a5\ud558\uba74 \uba38\ub9ac\uac00 \ud63c\ub780\uc2a4\ub7ec\uc6cc\uc9d1\ub2c8\ub2e4. \ub610\ud55c, \ub525\ub7ec\ub2dd\uc744 \uacf5\ubd80\ud558\uae30 \uc704\ud574\uc11c \uae30\ucd08 \uc9c0\uc2dd\uc774 \ucda9\ubd84\ud558\uc9c0 \uc54a\ub2e4\uba74 \uc774\ud574\ud558\uae30 \uc5b4\ub824\uc6b8 \uc218\ub3c4 \uc788\ub2e4\uace0 \uc0dd\uac01\ud569\ub2c8\ub2e4. \uadf8\ub807\uae30\uc5d0 \uc774 \ucc45\uc744 \uc77d\uc744 \ub54c \ube60\ub974\uac8c \uc77d\uae30 \ubcf4\ub2e4\ub294 \ucc9c\ucc9c\ud788 \uc2dc\uac04\uc801 \uc5ec\uc720\ub97c \ub450\uace0 \uc774\ud574\ud558\uba74\uc11c \uc77d\uc73c\uc2dc\ub294 \uac78 \ucd94\ucc9c\ub4dc\ub9bd\ub2c8\ub2e4."))}u.isMDXComponent=!0},4764:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/I-am-reviewer-2021-749767a89f19d2f52fce4094c15c6e95.jpg"},1586:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/fastai-and-pytorch-236cc63e4a4004ca1dd7a3c26d8eb0c4.jpg"}}]);