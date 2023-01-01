"use strict";(self.webpackChunkmy_blog=self.webpackChunkmy_blog||[]).push([[6765],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>k});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(n),k=o,m=u["".concat(p,".").concat(k)]||u[k]||s[k]||a;return n?r.createElement(m,i(i({ref:t},d),{},{components:n})):r.createElement(m,i({ref:t},d))}));function k(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3212:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>s,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const a={title:"\ud83d\udcd6\ub7ec\ub2dd SQL",date:"2021-04-17",authors:"teddygood",tags:["Book Review"],draft:!1,slug:"/Learning-SQL",description:"\ub370\uc774\ud130 \uc0dd\uc131, \uac80\uc0c9, \uc870\uc791\uae4c\uc9c0 \ub370\uc774\ud130 \uc81c\ub300\ub85c \uc8fc\ubb34\ub974\uae30",keywords:["SQL","RDBMS","MySQL"]},i=void 0,l={permalink:"/blog/Learning-SQL",editUrl:"https://github.com/teddygood/teddygood.github.io/tree/main/blog/2021-04-17-learning-sql/Learning-SQL.md",source:"@site/blog/2021-04-17-learning-sql/Learning-SQL.md",title:"\ud83d\udcd6\ub7ec\ub2dd SQL",description:"\ub370\uc774\ud130 \uc0dd\uc131, \uac80\uc0c9, \uc870\uc791\uae4c\uc9c0 \ub370\uc774\ud130 \uc81c\ub300\ub85c \uc8fc\ubb34\ub974\uae30",date:"2021-04-17T00:00:00.000Z",formattedDate:"2021\ub144 4\uc6d4 17\uc77c",tags:[{label:"Book Review",permalink:"/blog/tags/book-review"}],hasTruncateMarker:!0,authors:[{name:"Chanho Lee",title:"\ub2e4\uc591\ud55c \ubd84\uc57c\ub97c \uacf5\ubd80\ud558\uace0 \uc788\ub294 \ud559\uc0dd",url:"https://github.com/teddygood",imageURL:"https://github.com/teddygood.png",key:"teddygood"}],frontMatter:{title:"\ud83d\udcd6\ub7ec\ub2dd SQL",date:"2021-04-17",authors:"teddygood",tags:["Book Review"],draft:!1,slug:"/Learning-SQL",description:"\ub370\uc774\ud130 \uc0dd\uc131, \uac80\uc0c9, \uc870\uc791\uae4c\uc9c0 \ub370\uc774\ud130 \uc81c\ub300\ub85c \uc8fc\ubb34\ub974\uae30",keywords:["SQL","RDBMS","MySQL"]},prevItem:{title:"\uc544\ub9c8\uc874 \uc6f9 \uc11c\ube44\uc2a4 AWS Discovery Book",permalink:"/blog/AWS-Discovery-Book"},nextItem:{title:"\u2328\ufe0f\ub9c8\ud06c\ub2e4\uc6b4(Markdown) \uc815\ub9ac",permalink:"/blog/markdown"}},p={authorsImageUrls:[void 0]},c=[{value:"Book Info",id:"book-info",level:2},{value:"\ud83c\udfacIntro",id:"intro",level:2},{value:"\ud83d\udcd6Book Review",id:"book-review",level:2},{value:"\ud83d\udd25SQL",id:"sql",level:3},{value:"\ud83d\udda5\ufe0f\uc2e4\uc2b5 \ud658\uacbd",id:"\ufe0f\uc2e4\uc2b5-\ud658\uacbd",level:3},{value:"\ud83d\udcd5\uc785\ubb38\uc5d0 \uadf8\uce58\uc9c0 \uc54a\ub294 \ucc45",id:"\uc785\ubb38\uc5d0-\uadf8\uce58\uc9c0-\uc54a\ub294-\ucc45",level:3},{value:"\ud83d\udcd5\uacf5\ubd80\ud558\uae30 \ud3b8\ud55c \ucc45",id:"\uacf5\ubd80\ud558\uae30-\ud3b8\ud55c-\ucc45",level:3},{value:"\ud83e\uddd1\u200d\ud83c\udfeb\ub300\uc0c1 \ub3c5\uc790",id:"\ub300\uc0c1-\ub3c5\uc790",level:2}],d={toc:c};function s(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"\ud55c\ube5b\ubbf8\ub514\uc5b4 <\ub098\ub294 \ub9ac\ubdf0\uc5b4\ub2e4> \ud65c\ub3d9\uc744 \uc704\ud574\uc11c \ucc45\uc744 \uc81c\uacf5\ubc1b\uc544 \uc791\uc131\ub41c \uc11c\ud3c9\uc785\ub2c8\ub2e4.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"\ub098\ub294 \ub9ac\ubdf0\uc5b4\ub2e4 2021",src:n(4764).Z,width:"820",height:"312"})),(0,o.kt)("h2",{id:"book-info"},"Book Info"),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"\ucc45 \uc774\ubbf8\uc9c0\ub97c \ud074\ub9ad\ud558\uba74 \uad50\ubcf4\ubb38\uace0 \uc0ac\uc774\ud2b8\ub85c \uc774\ub3d9\ud569\ub2c8\ub2e4!")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://product.kyobobook.co.kr/detail/S000001810371"},(0,o.kt)("img",{alt:"\ucc45",src:n(2232).Z,width:"800",height:"1027"}))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\uc81c\ubaa9: \ub7ec\ub2dd SQL"),(0,o.kt)("li",{parentName:"ul"},"\uc800\uc790: Alan Beaulieu"),(0,o.kt)("li",{parentName:"ul"},"\uc5ed\uc790: \ub958\uc218\ubbf8, \uc1a1\ud76c\uc815"),(0,o.kt)("li",{parentName:"ul"},"\ucd9c\ud310\uc0ac: \ud55c\ube5b\ubbf8\ub514\uc5b4"),(0,o.kt)("li",{parentName:"ul"},"\ucd9c\uac04: 2021-03-30")),(0,o.kt)("h2",{id:"intro"},"\ud83c\udfacIntro"),(0,o.kt)("p",null,'\ub098\ub294 \ucef4\ud4e8\ud130 \uacf5\ud559 \uc804\uacf5\uc0dd\uc774\uc9c0\ub9cc \uc544\uc9c1\uae4c\uc9c0 \ub370\uc774\ud130\ubca0\uc774\uc2a4 \uacf5\ubd80\ub97c \uc81c\ub300\ub85c \ud574\ubcf8 \uc801\uc774 \uc5c6\ub2e4. \uc6b0\ub9ac \ud559\uacfc\ub294 Computer Science\ubcf4\ub2e4 Computer Engineering\uc5d0 \ub354 \uac00\uae4c\uc6b4 \ud559\uacfc\uc774\uae30\uc5d0 4\ud559\ub144 2\ud559\uae30\uc5d0 \ub370\uc774\ud130\ubca0\uc774\uc2a4 \uacfc\ubaa9\uc774 \ubc30\uc815\ub418\uc5b4 \uc788\ub2e4. \uadf8\ub7ec\ub098 \ub098\ub294 \uc6f9 \ubc31\uc5d4\ub4dc\ub97c \uacf5\ubd80\ud558\ub2e4 \ubcf4\ub2c8 \uc790\uc5f0\uc2a4\ub7fd\uac8c SQL \uacf5\ubd80\uc758 \ud544\uc694\uc131\uc744 \ub290\ub07c\uac8c \ub410\uace0 "\uc5b8\uc820\uac00 \uacf5\ubd80\ub97c \ud574\uc57c\uaca0\ub2e4."\ub77c\uace0 \uc0dd\uac01\ud588\ub2e4. \ub9c8\uce68 \ud55c\ube5b\ubbf8\ub514\uc5b4 \ucd9c\ud310\uc0ac\uc758 ',(0,o.kt)("inlineCode",{parentName:"p"},"\ub098\ub294 \ub9ac\ubdf0\uc5b4\ub2e4"),"\uc5d0 \ucc38\uc5ec\ud558\uac8c \ub418\uc5b4 \uc774 \ucc45\uc744 \uc77d\uc744 \uc218 \uc788\uac8c \ub410\ub2e4."),(0,o.kt)("h2",{id:"book-review"},"\ud83d\udcd6Book Review"),(0,o.kt)("h3",{id:"sql"},"\ud83d\udd25SQL"),(0,o.kt)("p",null,"\uc774 \ucc45\uc740 \uc81c\ubaa9\uc5d0\uc11c\ub3c4 \uc54c \uc218 \uc788\ub4ef\uc774 SQL\uc744 \uacf5\ubd80\ud558\ub294 \ucc45\uc774\ub2e4. SQL\uc740 MySQL, ORACLE DATABASE, IBM DB2, Microsoft SQL Server, PostgreSQL \ub465\uacfc \uac19\uc774 \uc88b\ub958\uac00 \ub2e4\uc591\ud558\ub2e4. \uadf8\uc911 \uc774 \ucc45\uc740 \uac00\uc7a5 \ub300\uc911\uc801\uc774\ub77c\uace0 \ud560 \uc218 \uc788\ub294 MySQL\uc744 \uc911\uc810\uc73c\ub85c \uc124\uba85\ud55c\ub2e4. \uac00\ub054 MySQL \uc774\uc678\uc758 SQL \uc608\uc81c\ub4e4\uc774 \ub098\uc624\uae30\ub3c4 \ud558\uc9c0\ub9cc SQL \ubb38\ubc95 \uc790\uccb4\uac00 \uac70\uc758 \ube44\uc2b7\ud558\uc5ec \ud070 \uc5b4\ub824\uc6c0\uc740 \uc5c6\ub2e4."),(0,o.kt)("h3",{id:"\ufe0f\uc2e4\uc2b5-\ud658\uacbd"},"\ud83d\udda5\ufe0f\uc2e4\uc2b5 \ud658\uacbd"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"katacoda",src:n(9973).Z,width:"1635",height:"847"})),(0,o.kt)("p",null,"\ub300\ubd80\ubd84\uc758 SQL \ucc45\uc758 \uc608\uc81c\ub4e4\uc740 \ud14c\uc774\ube14\uc744 \uc9c1\uc811 \uc0dd\uc131\ud558\uc5ec \ub370\uc774\ud130\ub97c \ucd94\uac00\ud574\ubcf4\uae30\ub3c4 \ud558\uba70, \uc0ac\uc804\uc5d0 \ubbf8\ub9ac \ub9cc\ub4e4\uc5b4 \ub454 \ub370\uc774\ud130\ubca0\uc774\uc2a4\ub97c \uc9c1\uc811 \ub2e4\uc6b4 \ubc1b\uc544 \uc2e4\uc2b5\ud560 \uc218 \uc788\ub3c4\ub85d \ub418\uc5b4 \uc788\ub2e4. \uc774 \ucc45\uc5d0\uc11c\ub294 Sakila\ub77c\ub294 \ub370\uc774\ud130\ubca0\uc774\uc2a4\ub97c \uc0ac\uc6a9\ud55c\ub2e4. Sakila \ub370\uc774\ud130\ubca0\uc774\uc2a4\ub294 MySQL\uc5d0\uc11c \uac1c\ubc1c\ub41c \ub370\uc774\ud130\ubca0\uc774\uc2a4\ub85c \ucc45 \ub610\ub294 \ubb38\uc11c\uc758 \ud29c\ud1a0\ub9ac\uc5bc \ub4f1\uc758 \uc608\uc81c\uc5d0 \uc0ac\uc6a9\ud560 \uc218 \uc788\ub294 \ub370\uc774\ud130\ubca0\uc774\uc2a4\uc774\ub2e4."),(0,o.kt)("p",null,"\uc774 \ucc45\uc744 \uacf5\ubd80\ud558\uae30 \uc704\ud55c \ud658\uacbd\uc744 \uc138\ud305\ud558\uae30 \uc704\ud574\uc11c\ub294 MySQL\uc744 \uc124\uce58\ud558\uace0 Sakila \ub370\uc774\ud130\ubca0\uc774\uc2a4\uae4c\uc9c0 \ubc1b\uc544\uc57c \ud558\uc9c0\ub9cc \ud658\uacbd\uc744 \uad6c\uc131\ud558\ub294 \uac83\uc774 \uc5b4\ub824\uc6b4 \uc0ac\ub78c\ub4e4\uc744 \uc704\ud574 \uc774 \ucc45\uc758 \uc6d0\uc11c \ucd9c\ud310\uc0ac\uc778 O'REILLY\uc5d0\uc11c ",(0,o.kt)("a",{parentName:"p",href:"https://www.katacoda.com/"},"Katacoda"),"\ub77c\ub294 \uc2e4\uc2b5 \ud658\uacbd\uc744 \uc81c\uacf5\ud55c\ub2e4. \uc774\uc81c \ub9c9 \uacf5\ubd80\ub97c \uc2dc\uc791\ud55c \uc0ac\ub78c\ub4e4 \uc785\uc7a5\uc5d0\uc11c\ub294 \ub9e4\uc6b0 \ud3b8\ud558\uac8c \uacf5\ubd80\ud560 \uc218 \uc788\ub2e4. \uc774\ub807\uac8c \uacf5\ubd80\ud560 \uc218 \uc788\ub294 \ud658\uacbd\uc744 \uc81c\uacf5\ud558\ub294 \uac83\uc774 \uc26c\uc6b4 \uc77c\uc740 \uc544\ub2c8\uae30\uc5d0 \uac00\uc7a5 \uc778\uc0c1\uc801\uc778 \ubd80\ubd84\uc774\uc5c8\ub2e4. "),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"wsl2",src:n(5465).Z,width:"998",height:"460"})),(0,o.kt)("p",null,"\uc774\uc678\uc5d0\ub3c4 \ud658\uacbd\uc744 \uad6c\ucd95\ud560 \uc218 \uc788\ub294 \uc0ac\ub78c\uc740 \uc2a4\uc2a4\ub85c \ud658\uacbd\uc744 \uad6c\ucd95\ud558\uc5ec \ucc45\uc758 \uc608\uc81c\ub97c \ub530\ub77c \ud558\uba70 \uc2e4\uc2b5\uc744 \uc9c4\ud589\ud558\uba74 \ub41c\ub2e4. \ub098\ub294 WSL2(Windows Subsystem for Linux 2)\ub97c \uc0ac\uc6a9\ud558\uc5ec MySQL \ud658\uacbd\uc744 \uad6c\ucd95\ud588\ub2e4. \ucc98\uc74c\uc5d0\ub294 Windows\uc5d0\uc11c MySQL\uc744 \uc0ac\uc6a9\ud558\ub824 \ud588\uc73c\ub098 \uc774 \ucc45\uc740 \ud130\ubbf8\ub110\uc5d0\uc11c \ucffc\ub9ac\ub97c \uc791\uc131\ud558\uae30\uc5d0 \ub098\ub3c4 MySQL Workbench\ub97c \uc0ac\uc6a9\ud558\uc9c0 \uc54a\uace0 \ud130\ubbf8\ub110\uc5d0\uc11c \uc2e4\uc2b5\uc744 \uc9c4\ud589\ud588\ub2e4."),(0,o.kt)("h3",{id:"\uc785\ubb38\uc5d0-\uadf8\uce58\uc9c0-\uc54a\ub294-\ucc45"},"\ud83d\udcd5\uc785\ubb38\uc5d0 \uadf8\uce58\uc9c0 \uc54a\ub294 \ucc45"),(0,o.kt)("p",null,"\ub2e8\uc21c SQL \ucffc\ub9ac\ubb38\ub9cc\uc744 \uc0ac\uc6a9\ud558\ub294 \uac83\uc774 \uc544\ub2c8\ub77c SQL\uc758 \ubc30\uacbd\ubd80\ud130 \uae30\ucd08 \ubb38\ubc95\uc744 \uc124\uba85\ud558\uace0 \ub05d\uc5d0\ub294 \ubd84\ud560, \uad70\uc9d1\ud654, \uc0e4\ub529, \ube45\ub370\uc774\ud130 \uac19\uc774 SQL\uc744 \uc774\uc6a9\ud55c \uace0\uae09 \uae30\uc220\uc744 \uac04\ub2e8\ud558\uac8c \uc18c\uac1c\ud55c\ub2e4. \ud2b9\ud788 2015\ub144\uc5d0 \ucc98\uc74c \ub4f1\uc7a5\ud55c \uc624\ud508\uc18c\uc2a4\uc778 Apache Drill\uc744 \uc0ac\uc6a9\ud574\ubcf8\ub2e4. "),(0,o.kt)("h3",{id:"\uacf5\ubd80\ud558\uae30-\ud3b8\ud55c-\ucc45"},"\ud83d\udcd5\uacf5\ubd80\ud558\uae30 \ud3b8\ud55c \ucc45"),(0,o.kt)("p",null,"\uc774 \ucc45\uc740 455 \ud398\uc774\uc9c0\ub85c \uaf64 \ub450\uaebc\uc6b4 \ucc45\uc774\uc9c0\ub9cc Chapter\uac00 18\uae4c\uc9c0 \uc788\uc5b4 \uc870\uae08\uc529 \ubcf4\uae30 \uc88b\ub2e4. \ud558\ub8e8\uc5d0 \ud55c Chapter\uc529 \ubcf4\uba74 18\uc77c\uc774\uba74 \ub2e4 \uc77d\uc744 \uc218 \uc788\ub2e4. \uc774\ub807\uac8c \uc9e7\uac8c Chapter\uac00 \uad6c\uc131\ub418\uc5b4 \uc788\uc5b4 \ucc45\uc744 \uc77d\ub294\ub370 \ubd80\ub2f4\uc744 \ub35c\ud588\ub2e4."),(0,o.kt)("p",null,"\ub610\ud55c, \ud55c Chapter\uac00 \ub05d\ub0a0 \ub54c\ub9c8\ub2e4 ",(0,o.kt)("inlineCode",{parentName:"p"},"\ud559\uc2b5 \uc810\uac80 \uc2e4\uc2b5 \ubb38\uc81c"),"\uac00 \uc788\uc5b4 Chapter\uc758 \ub0b4\uc6a9\ub4e4\uc744 \uc810\uac80\ud560 \uc218 \uc788\uc5c8\ub2e4. \uaf64 \ub9c8\uc74c\uc5d0 \ub4e4\uc5c8\ub358 \ubd80\ubd84\uc774\ub2e4. \ubcf4\ud1b5 \uc774\ub7f0 \ucc45\ub4e4\uc740 \uc2e4\uc2b5 \uc608\uc81c\ub9cc \uc788\uace0 \ubcf5\uc2b5\ud560 \uc218 \uc788\ub294 \ubb38\uc81c\ub4e4\uc774 \uc5c6\uae30 \ub9c8\ub828\uc774\ub2e4. \uadf8\ub7ec\ub098 \uc774 \ucc45\uc740 \ubb38\uc81c\ub97c \uc81c\uacf5\ud558\uace0 \ubb38\uc81c\uc758 \uc815\ub2f5\uae4c\uc9c0 \ubd80\ub85d\uc5d0 \uae30\uc220\ub418\uc5b4 \uc788\ub2e4. \uc989, \uacf5\ubd80\ud55c \ub0b4\uc6a9\ub4e4\uc744 \uc810\uac80\ud558\uae30\uc5d0 \uc88b\uc740 \ucc45\uc774\uc5c8\ub2e4."),(0,o.kt)("p",null,"\ub9c8\uc9c0\ub9c9\uc73c\ub85c \uc2e4\uc2b5\ud560 \uc218 \uc788\ub294 \ucf54\ub4dc\uac00 \ub9ce\uc73c\uba70, \uc885\uc885 \uc608\uc81c \ucf54\ub4dc\ub9c8\ub2e4 \uc5b4\ub5a0\ud55c \uc0c1\ud669\uc5d0\uc11c \uc0ac\uc6a9\ud574\uc57c \ud558\ub294\uc9c0\uc5d0 \ub300\ud55c \uc124\uba85\uc774 \uc801\ud600 \uc788\uc5c8\ub2e4. SQL\uc744 \uc791\uc131\ud558\uba74\uc11c \uc5b4\ub824\uc6b4 \ubd80\ubd84\uc774 \uc788\uc744 \ub54c \ub808\ud37c\ub7f0\uc2a4\ub85c \ucc38\uace0\ud558\uba74\uc11c \uc77d\uae30\uc5d0\ub3c4 \uc88b\uc740 \ucc45\uc774\ub77c \uc0dd\uac01\ud55c\ub2e4."),(0,o.kt)("h2",{id:"\ub300\uc0c1-\ub3c5\uc790"},"\ud83e\uddd1\u200d\ud83c\udfeb\ub300\uc0c1 \ub3c5\uc790"),(0,o.kt)("p",null,"\uac00\ub054 \ud55c Chapter\uc5d0\uc11c \uc124\uba85\ud558\uace0\uc790 \ud558\ub294 \uc8fc\uc81c\uac00 \uc788\uc9c0\ub9cc, \uadf8 \uc8fc\uc81c\uc640 \uc870\uae08 \ubc97\uc5b4\ub09c \ub2e4\ub978 Chapter\uc758 \ucf54\ub4dc\ub97c \ubbf8\ub9ac \uc124\uba85\ud558\ub294 \uacbd\uc6b0\uac00 \uc788\ub2e4. \uadf8\ub807\uae30\uc5d0 SQL\uc744 \uc801\uc5b4\ub3c4 \ud55c \ubc88 \uacf5\ubd80\ud574\ubcf8 \uc0ac\ub78c\uc774 \uc77d\uc73c\uba74 \uc5bb\ub294 \uac83\uc774 \ub354 \ub9ce\uc744 \uac83\uc774\ub77c \uc0dd\uac01\ud55c\ub2e4."),(0,o.kt)("p",null,"SQL\uc744 \uc644\uc804\ud788 \ucc98\uc74c \uacf5\ubd80\ud558\uc2dc\ub294 \ub3c5\uc790\ub77c\uba74 \ub2e4\ub978 \ucc45\ub3c4 \uac19\uc774 \uc77d\uc73c\uba74\uc11c \uacf5\ubd80\ud558\ub294 \uac78 \ucd94\ucc9c\ud558\uace0, SQL\uc744 \uacf5\ubd80\ud574\ubcf8 \ub3c5\uc790\ub77c\uba74 \uc774 \ucc45\uc758 \ucf54\ub4dc\ub4e4\uc744 \uac04\ub2e8\ud558\uac8c \uc2e4\uc2b5\ud574\ubcf4\uba74\uc11c \ubcf5\uc2b5\ud558\ub294 \ubc29\ud5a5\uc73c\ub85c \uc77d\uc73c\uc2dc\uba74 \ub3c4\uc6c0 \ub420 \uac83\uc774\ub77c\uace0 \uc0dd\uac01\ud55c\ub2e4."))}s.isMDXComponent=!0},9973:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/mysql-environment-katacoda-23572bf81295beeba2ce44091f9d03ef.jpg"},5465:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/mysql-environment-wsl2-df7e071fc76cf8db60da62ea2840397a.jpg"},4764:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/I-am-reviewer-2021-749767a89f19d2f52fce4094c15c6e95.jpg"},2232:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/Learning-SQL-cf58514305208f4e59ff0f50949d4451.jpg"}}]);