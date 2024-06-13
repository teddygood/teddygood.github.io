"use strict";(self.webpackChunkmy_blog=self.webpackChunkmy_blog||[]).push([[2046],{9227:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>d,toc:()=>a});var n=o(4848),r=o(8453);const i={title:"\ud83d\udcd6 \ud14c\ub77c\ud3fc\uc73c\ub85c \uc2dc\uc791\ud558\ub294 IaC",date:"2023-06-24",authors:"teddygood",tags:["Book Review"],draft:!1,slug:"/terraform101",description:"\ud14c\ub77c\ud3fc \uc785\ubb38\ubd80\ud130 \uc2e4\ubb34 \uc801\uc6a9\uae4c\uc9c0 \uc62c\uc778\uc6d0 \uac00\uc774\ub4dc",keywords:["\ud14c\ub77c\ud3fc","IaC","DevOps"]},s=void 0,d={permalink:"/en/blog/terraform101",editUrl:"https://github.com/teddygood/teddygood.github.io/tree/main/blog/2023-06-24-terraform101/terraform101.md",source:"@site/blog/2023-06-24-terraform101/terraform101.md",title:"\ud83d\udcd6 \ud14c\ub77c\ud3fc\uc73c\ub85c \uc2dc\uc791\ud558\ub294 IaC",description:"\ud14c\ub77c\ud3fc \uc785\ubb38\ubd80\ud130 \uc2e4\ubb34 \uc801\uc6a9\uae4c\uc9c0 \uc62c\uc778\uc6d0 \uac00\uc774\ub4dc",date:"2023-06-24T00:00:00.000Z",tags:[{inline:!0,label:"Book Review",permalink:"/en/blog/tags/book-review"}],hasTruncateMarker:!0,authors:[{name:"Chanho Lee",title:"\ub2e4\uc591\ud55c \ubd84\uc57c\ub97c \uacf5\ubd80\ud558\uace0 \uc788\ub294 \ud559\uc0dd",url:"https://github.com/teddygood",imageURL:"https://github.com/teddygood.png",key:"teddygood"}],frontMatter:{title:"\ud83d\udcd6 \ud14c\ub77c\ud3fc\uc73c\ub85c \uc2dc\uc791\ud558\ub294 IaC",date:"2023-06-24",authors:"teddygood",tags:["Book Review"],draft:!1,slug:"/terraform101",description:"\ud14c\ub77c\ud3fc \uc785\ubb38\ubd80\ud130 \uc2e4\ubb34 \uc801\uc6a9\uae4c\uc9c0 \uc62c\uc778\uc6d0 \uac00\uc774\ub4dc",keywords:["\ud14c\ub77c\ud3fc","IaC","DevOps"]},unlisted:!1,prevItem:{title:"\ud83d\udcd6 MLOps \uc2e4\uc804 \uac00\uc774\ub4dc",permalink:"/en/blog/practical-MLOps"},nextItem:{title:"\ud83d\udcd6 Docs for Developers \uae30\uc220 \ubb38\uc11c \uc791\uc131 \uc644\ubcbd \uac00\uc774\ub4dc",permalink:"/en/blog/docs-for-developers"}},l={authorsImageUrls:[void 0]},a=[{value:"Book Info",id:"book-info",level:2},{value:"Intro",id:"intro",level:2},{value:"Book Review",id:"book-review",level:2},{value:"\ucd08\uc2ec\uc790\ub3c4 \uc77d\uc744\ub9cc\ud55c \ucc45",id:"\ucd08\uc2ec\uc790\ub3c4-\uc77d\uc744\ub9cc\ud55c-\ucc45",level:3},{value:"\ub300\uc0c1 \ub3c5\uc790",id:"\ub300\uc0c1-\ub3c5\uc790",level:2}];function c(e){const t={a:"a",admonition:"admonition",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",ul:"ul",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.admonition,{type:"info",children:(0,n.jsx)(t.p,{children:"\ud55c\ube5b\ubbf8\ub514\uc5b4 <\ub098\ub294 \ub9ac\ubdf0\uc5b4\ub2e4> \ud65c\ub3d9\uc744 \uc704\ud574\uc11c \ucc45\uc744 \uc81c\uacf5\ubc1b\uc544 \uc791\uc131\ub41c \uc11c\ud3c9\uc785\ub2c8\ub2e4."})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"\ub098\ub294 \ub9ac\ubdf0\uc5b4\ub2e4 2023",src:o(4083).A+"",width:"820",height:"312"})}),"\n",(0,n.jsx)(t.h2,{id:"book-info",children:"Book Info"}),"\n",(0,n.jsx)(t.admonition,{type:"tip",children:(0,n.jsx)(t.p,{children:"\ucc45 \uc774\ubbf8\uc9c0\ub97c \ud074\ub9ad\ud558\uba74 \uad50\ubcf4\ubb38\uace0 \uc0ac\uc774\ud2b8\ub85c \uc774\ub3d9\ud569\ub2c8\ub2e4!"})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"https://product.kyobobook.co.kr/detail/S000202478097",children:(0,n.jsx)(t.img,{alt:"\ucc45",src:o(5374).A+"",width:"458",height:"588"})})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"\uc81c\ubaa9: \ud14c\ub77c\ud3fc\uc73c\ub85c \uc2dc\uc791\ud558\ub294 IaC"}),"\n",(0,n.jsx)(t.li,{children:"\uc800\uc790: \uae40\ubbfc\uc218, \uae40\uc7ac\uc900, \uc774\uaddc\uc11d, \uc774\uc720\uc885"}),"\n",(0,n.jsx)(t.li,{children:"\ucd9c\ud310\uc0ac: \ud55c\ube5b\ubbf8\ub514\uc5b4"}),"\n",(0,n.jsx)(t.li,{children:"\ucd9c\uac04: 2023-05-24"}),"\n"]}),"\n","\n",(0,n.jsx)(t.h2,{id:"intro",children:"Intro"}),"\n",(0,n.jsx)(t.p,{children:"\uc0ac\uc2e4 \ub09c DevOps\ub294 \uc544\ub294 \uac83\uc774 \ubcc4\ub85c \uc5c6\ub294 \ud559\uc0dd\uc774\ub2e4. \ucfe0\ubc84\ub124\ud2f0\uc2a4\uc640 \ub3c4\ucee4\ub97c \uc7a0\uae50 \uacf5\ubd80\ud574\ubcf4\uae34 \ud588\uc9c0\ub9cc \uae4a\uac8c \uacf5\ubd80\ud558\uc9c0\ub294 \uc54a\uc558\ub2e4. \uadf8\ub807\uae30\uc5d0 \uc774 \ucc45\uc744 \uc120\ud0dd\ud588\uc744 \ub54c \ub450\ub824\uc6c0\ub3c4 \uc788\uc5c8\uc73c\ub098, \uc5b8\uc820\uac00\ub294 DevOps \ucabd\ub3c4 \uacf5\ubd80\ud574\ubcf4\uace0 \uc2f6\uc5c8\uae30\uc5d0 \uc774 \ucc45\uc744 \uc120\ud0dd\ud588\ub2e4. \ud14c\ub77c\ud3fc\uc774\ub77c\ub294 \uc6a9\uc5b4\ub3c4 \uac00\ub054 \uae30\uc5c5\ub4e4\uc758 CI/CD \ud30c\uc774\ud504\ub77c\uc778 \uc774\ubbf8\uc9c0\uc5d0\uc11c\ub9cc \ubcf4\uac70\ub098, \uc5bc\ud54f \ub4e4\uc5b4\ubcf4\uae30\ub9cc \ud588\uc9c0 \uc815\ud655\ud788 \ubb34\uc5c7\uc778\uc9c0\ub294 \ubab0\ub790\ub2e4. \uadf8\ub798\uc11c \uc774 \ucc45\uc744 \uc77d\uc73c\uba74\uc11c \ud14c\ub77c\ud3fc\uc774 \ubb34\uc5c7\uc778\uc9c0, \uc5b4\ub5bb\uac8c \uc0ac\uc6a9\ud558\ub294\uc9c0 \uc54c\uace0 \uc2f6\uc5c8\ub2e4."}),"\n",(0,n.jsx)(t.h2,{id:"book-review",children:"Book Review"}),"\n",(0,n.jsx)(t.h3,{id:"\ucd08\uc2ec\uc790\ub3c4-\uc77d\uc744\ub9cc\ud55c-\ucc45",children:"\ucd08\uc2ec\uc790\ub3c4 \uc77d\uc744\ub9cc\ud55c \ucc45"}),"\n",(0,n.jsx)(t.p,{children:"\uc704\uc5d0\uc11c\ub3c4 \uc5b8\uae09\ud588\ub4ef\uc774 \uc774 \ucc45\uc744 \uc77d\uae30 \uc804 \ub450\ub824\uc6c0\uc774 \ub9ce\uc558\uc5c8\ub2e4. \uc608\uc804\uc5d0 \ucfe0\ubc84\ub124\ud2f0\uc2a4, \ub3c4\ucee4\ub97c \uacf5\ubd80\ud574\ubcfc \ub54c '\uadf8\ub0e5 \ud558\uba74 \ub418\uaca0\uc9c0'\ub77c\ub294 \uc2ec\uc815\uc73c\ub85c \uacf5\ubd80\ub97c \ud588\ub294\ub370 \uc0dd\uac01\ubcf4\ub2e4 \uc5b4\ub824\uc6e0\uc5b4\uc11c \ud14c\ub77c\ud3fc\ub3c4 \uc5b4\ub835\uc9c0 \uc54a\uc744\uae4c \uc0dd\uac01\ud588\uc5c8\ub2e4. \uac8c\ub2e4\uac00 DevOps \ucd08\uc2ec\uc790\ub77c \uacf5\ubd80\ud558\uba74\uc11c \ubaa8\ub974\ub294 \uc6a9\uc5b4\ub3c4 \ubd84\uba85\ud788 \ub9ce\uc744 \uac70\ub77c \uc0dd\uac01\ud574\uc11c \ucc45\uc744 \uc77d\uae30\ub3c4 \uc804\uc5d0 \uac81\uc744 \uba39\uc5c8\uc5c8\ub2e4. \uadf8\ub7ec\ub098 \ub450\ub824\uc6c0\uc740 \ucc45\uc744 \uc77d\uc73c\uba70 \uc810\ucc28 \uc0ac\ub77c\uc84c\uace0, \uc774 \ucc45\uc740 \ucd08\uc2ec\uc790\ub3c4 \uc77d\uc73c\ub824\uace0 \ub178\ub825\ub9cc \ud55c\ub2e4\uba74 \uc77d\uc744\ub9cc\ud55c \ucc45\uc774\ub77c\ub294 \uac83\uc744 \ub290\uaf08\ub2e4."}),"\n",(0,n.jsx)(t.p,{children:"\ud14c\ub77c\ud3fc\uc758 \uae30\ubcf8 \uc0ac\uc6a9\ubc95\ubd80\ud130, \ub3d9\uc791 \ubc29\uc2dd, \uc5b4\ub5bb\uac8c \uc801\uc6a9\ud558\uace0 \uc0ac\uc6a9\ud558\ub294\uc9c0 \ub4f1 \ud14c\ub77c\ud3fc\uc744 \uc5b4\ub5bb\uac8c \ud65c\uc6a9\ud560 \uc218 \uc788\ub294\uc9c0 \uc124\uba85\ud55c\ub2e4. \ud06c\uac8c 1\ubd80\uc640 2\ubd80\ub85c \ub098\ub258\uc5b4\uc9c0\ub294\ub370 1\ubd80\uc5d0\uc11c\ub294 \uae30\ubcf8\uc801\uc73c\ub85c \ud14c\ub77c\ud3fc\uc744 \uc5b4\ub5bb\uac8c \uc0ac\uc6a9\ud558\ub294\uc9c0 \uadf8\ub9ac\uace0 \ud504\ub85c\ubc14\uc774\ub354, \ub3d9\uc791 \ubc29\uc2dd \ub4f1\uc744 \uc124\uba85\ud55c\ub2e4. 2\ubd80\uc5d0\uc11c\ub294 \ud14c\ub77c\ud3fc\uc73c\ub85c \ud504\ub85c\ube44\uc800\ub2dd\uc744 \ud558\uba74\uc11c \uc0ac\uc6a9 \uaddc\ubaa8\uac00 \ud655\uc7a5\ub418\ub294 \ubaa8\ubc94 \uc0ac\ub840\ub97c \uc54c\ub824\uc900\ub2e4. \uc774 \ubd80\ubd84\uc774 \ub098\ub294 \uc7a5\uc810\uc774\ub77c \uc0dd\uac01\ud588\ub2e4. \ub2e4\ub978 \ud300 \ub610\ub294 \uc870\uc9c1\uacfc \ud611\uc5c5\ud558\ub294 \ubc29\ubc95\uc744 \uc54c\ub824\uc8fc\uae30 \ub54c\ubb38\uc774\ub2e4. \ub098\uc911\uc5d0 \ud14c\ub77c\ud3fc\uc744 \ub3c4\uc785\ud560 \uc77c\uc774 \uc0dd\uae34\ub2e4\uba74 \uc774 \ucc45\uc744 \ub2e4\uc2dc \ubcfc \uc608\uc815\uc774\ub2e4."}),"\n",(0,n.jsx)(t.h2,{id:"\ub300\uc0c1-\ub3c5\uc790",children:"\ub300\uc0c1 \ub3c5\uc790"}),"\n",(0,n.jsx)(t.p,{children:"\ub300\uc0c1 \ub3c5\uc790\ub294 DevOps\uc5d0 \uad00\uc2ec\uc774 \uc788\uae30 \ubcf4\ub2e4\ub294 \ud14c\ub77c\ud3fc\uc774\ub77c\ub294 \uae30\uc220\uc5d0 \ub300\ud574 \uba3c\uc800 \uc54c\uace0 \uacf5\ubd80\ud558\uace0 \uc2f6\uc740 \uc0ac\ub78c\ub4e4\uc5d0\uac8c \ucd94\ucc9c\ud55c\ub2e4. \ud2b9\ud788 \uc778\ud504\ub77c \uc5d4\uc9c0\ub2c8\uc5b4, \ub370\ube0c\uc635\uc2a4 \uc5d4\uc9c0\ub2c8\uc5b4 \ub4f1 \uc11c\ube44\uc2a4\ub97c \uc124\uacc4\ud558\uace0 \uad00\ub9ac\ud558\ub294 \uc9c1\uad70\uc5d0\uac8c \uc5b4\uc6b8\ub9ac\ub294 \ucc45\uc774 \uc544\ub2cc\uac00 \uc2f6\ub2e4."})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},4083:(e,t,o)=>{o.d(t,{A:()=>n});const n=o.p+"assets/images/I-am-reviewer-2023-15f66121dfef41c3a85be9f34b706e71.jpg"},5374:(e,t,o)=>{o.d(t,{A:()=>n});const n=o.p+"assets/images/terraform101-2c81c0cb75e5a4fd2cf758ae195045f6.jpg"},8453:(e,t,o)=>{o.d(t,{R:()=>s,x:()=>d});var n=o(6540);const r={},i=n.createContext(r);function s(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);