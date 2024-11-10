"use strict";(self.webpackChunkmy_blog=self.webpackChunkmy_blog||[]).push([[8627],{8496:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>s,contentTitle:()=>d,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>a});var t=i(4848),o=i(8453);const r={title:"\ud83d\udcd6 AWS\ub85c \uc2dc\uc791\ud558\ub294 \uc778\ud504\ub77c \uad6c\ucd95\uc758 \uc815\uc11d",date:"2022-07-21",authors:"teddygood",tags:["Book Review"],draft:!1,slug:"/building-infrastructure-starting-with-AWS",description:"\uacac\uace0\ud55c \uc5d4\ud130\ud504\ub77c\uc774\uc988 \ud504\ub85c\ub355\uc158 \ud658\uacbd\uc744 \ub9cc\ub4e4\uace0 \uc9c0\ud0a4\ub294 \ubc95 | I\u2665Cloud \uc81c\uc774\ud38d\uc758 \ud074\ub77c\uc6b0\ub4dc \uc2dc\ub9ac\uc988 23",keywords:["Amazon Web Service","\uc778\ud504\ub77c","\ud074\ub77c\uc6b0\ub4dc"]},d=void 0,l={permalink:"/en/blog/building-infrastructure-starting-with-AWS",editUrl:"https://github.com/teddygood/teddygood.github.io/tree/main/blog/2022-07-21-building-infrastructure-starting-with-AWS/building-infrastructure-starting-with-AWS.md",source:"@site/blog/2022-07-21-building-infrastructure-starting-with-AWS/building-infrastructure-starting-with-AWS.md",title:"\ud83d\udcd6 AWS\ub85c \uc2dc\uc791\ud558\ub294 \uc778\ud504\ub77c \uad6c\ucd95\uc758 \uc815\uc11d",description:"\uacac\uace0\ud55c \uc5d4\ud130\ud504\ub77c\uc774\uc988 \ud504\ub85c\ub355\uc158 \ud658\uacbd\uc744 \ub9cc\ub4e4\uace0 \uc9c0\ud0a4\ub294 \ubc95 | I\u2665Cloud \uc81c\uc774\ud38d\uc758 \ud074\ub77c\uc6b0\ub4dc \uc2dc\ub9ac\uc988 23",date:"2022-07-21T00:00:00.000Z",tags:[{inline:!0,label:"Book Review",permalink:"/en/blog/tags/book-review"}],hasTruncateMarker:!0,authors:[{name:"Chanho Lee",title:"\ub2e4\uc591\ud55c \ubd84\uc57c\ub97c \uacf5\ubd80\ud558\uace0 \uc788\ub294 \ud559\uc0dd",url:"https://github.com/teddygood",imageURL:"https://github.com/teddygood.png",key:"teddygood"}],frontMatter:{title:"\ud83d\udcd6 AWS\ub85c \uc2dc\uc791\ud558\ub294 \uc778\ud504\ub77c \uad6c\ucd95\uc758 \uc815\uc11d",date:"2022-07-21",authors:"teddygood",tags:["Book Review"],draft:!1,slug:"/building-infrastructure-starting-with-AWS",description:"\uacac\uace0\ud55c \uc5d4\ud130\ud504\ub77c\uc774\uc988 \ud504\ub85c\ub355\uc158 \ud658\uacbd\uc744 \ub9cc\ub4e4\uace0 \uc9c0\ud0a4\ub294 \ubc95 | I\u2665Cloud \uc81c\uc774\ud38d\uc758 \ud074\ub77c\uc6b0\ub4dc \uc2dc\ub9ac\uc988 23",keywords:["Amazon Web Service","\uc778\ud504\ub77c","\ud074\ub77c\uc6b0\ub4dc"]},unlisted:!1,prevItem:{title:"\ud83c\udfcd\ufe0f 5\uc6d4 \uc6b0\uc544\ud55c\ud14c\ud06c\uc138\ubbf8\ub098",permalink:"/en/blog/may-woowahan-tech-seminar"},nextItem:{title:"\ud83d\udcd6 \uc5d1\uc140, R, \ud30c\uc774\uc36c\uc73c\ub85c \uc2dc\uc791\ud558\ub294 \ub370\uc774\ud130 \ubd84\uc11d",permalink:"/en/blog/advancing-into-analytics"}},s={authorsImageUrls:[void 0]},a=[{value:"Book Info",id:"book-info",level:2},{value:"Intro",id:"intro",level:2},{value:"Book Review",id:"book-review",level:2},{value:"\ub2e8\uc21c\ud788 aws \uc11c\ube44\uc2a4\ub97c \uacf5\ubd80\ud558\ub294 \uac83\uc774 \uc544\ub2cc",id:"\ub2e8\uc21c\ud788-aws-\uc11c\ube44\uc2a4\ub97c-\uacf5\ubd80\ud558\ub294-\uac83\uc774-\uc544\ub2cc",level:3},{value:"\ub9ac\uc18c\uc2a4 \uc774\ubbf8\uc9c0",id:"\ub9ac\uc18c\uc2a4-\uc774\ubbf8\uc9c0",level:3},{value:"\ubd80\ub85d",id:"\ubd80\ub85d",level:3},{value:"\ub300\uc0c1\ub3c5\uc790",id:"\ub300\uc0c1\ub3c5\uc790",level:2}];function c(e){const n={a:"a",admonition:"admonition",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",ul:"ul",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsx)(n.p,{children:"\uc81c\uc774\ud38d <\ubbff\uace0 \ubcf4\ub294 IT \uc804\ubb38\uc11c \ub9ac\ubdf0\uc5b4> \ud65c\ub3d9\uc744 \uc704\ud574\uc11c \ucc45\uc744 \uc81c\uacf5\ubc1b\uc544 \uc791\uc131\ub41c \uc11c\ud3c9\uc785\ub2c8\ub2e4."})}),"\n",(0,t.jsx)(n.h2,{id:"book-info",children:"Book Info"}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsx)(n.p,{children:"\ucc45 \uc774\ubbf8\uc9c0\ub97c \ud074\ub9ad\ud558\uba74 \uad50\ubcf4\ubb38\uace0 \uc0ac\uc774\ud2b8\ub85c \uc774\ub3d9\ud569\ub2c8\ub2e4!"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://www.kyobobook.co.kr/product/detailViewKor.laf?ejkGb=KOR&mallGb=KOR&barcode=9791191600971&orderClick=LEa&Kc=",children:(0,t.jsx)(n.img,{alt:"\ucc45",src:i(1830).A+"",width:"690",height:"899"})})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\uc81c\ubaa9: AWS\ub85c \uc2dc\uc791\ud558\ub294 \uc778\ud504\ub77c \uad6c\ucd95\uc758 \uc815\uc11d"}),"\n",(0,t.jsx)(n.li,{children:"\uc800\uc790: Kenji Nakagaki(\ub098\uce74\uac00\ud0a4 \uac90\uc9c0)"}),"\n",(0,t.jsx)(n.li,{children:"\uc5ed\uc790: \uae40\ubaa8\uc138"}),"\n",(0,t.jsx)(n.li,{children:"\ucd9c\ud310\uc0ac: \uc81c\uc774\ud38d"}),"\n",(0,t.jsx)(n.li,{children:"\ucd9c\uac04: 2022-06-09"}),"\n"]}),"\n","\n",(0,t.jsx)(n.h2,{id:"intro",children:"Intro"}),"\n",(0,t.jsx)(n.p,{children:"\uc694\uc998\uc740 \uc5b4\uca4c\ub2e4 \uc544\ub9c8\uc874 \uc6f9 \uc11c\ube44\uc2a4\uc5d0\uc11c \uba54\uc77c\uc744 \ubc1b\uace0 \uc788\uc5b4 \ub2e4\uc591\ud55c \uad50\uc721\ub4e4\uc744 \ub4e4\uc5b4\ubcf4\ub77c\uace0 \ud64d\ubcf4 \uba54\uc77c\ub4e4\uc774 \uc800\uc5d0\uac8c \uc635\ub2c8\ub2e4. \uc804 \uc774\ub7f0 \uba54\uc77c\uc744 \ud1b5\ud574 aws\uc5d0\uc11c \ud074\ub77c\uc6b0\ub4dc \uae30\ucd08 \uad50\uc721\uc744 \uc9c4\ud589\ud55c\ub2e4\ub294 \uac83\uc744 \uc54c\uac8c \ub410\uc2b5\ub2c8\ub2e4. \uc544\ub9c8 \uc774\ub7f0 \uad50\uc721\ub4e4\uc774 \uc788\uc5c8\ub2e4\ub294 \uc0ac\uc2e4\uc744 \uc54c\uace0 \uc788\uc5c8\ub354\ub77c\uba74, \uad73\uc774 \ucc45\uc744 \uc77d\uc9c0 \uc54a\uc558\uc744\uc9c0\ub3c4 \ubaa8\ub974\uaca0\uc2b5\ub2c8\ub2e4."}),"\n",(0,t.jsx)(n.p,{children:"\uc804 \uc800\ub7f0 \uad50\uc721\ub4e4\uc774 \uc544\ub9c8\uc874 \uc6f9 \uc11c\ube44\uc2a4\uc5d0 \uad00\uc2ec\uc774 \uc788\uc9c0 \uc54a\ub2e4\uba74 \uc811\ud558\uae30 \ud798\ub4e4\ub2e4\uace0 \uc0dd\uac01\ud569\ub2c8\ub2e4. \uc800\ub294 aws\ub97c \uc0dd\ud65c\ucf54\ub529\uc5d0\uc11c \ucc98\uc74c \uacf5\ubd80\ud558\uac8c \ub410\uace0, \ub2e4\ub978 \ucc45\ub4e4\uc744 \ud1b5\ud574 \uc6f9 \uc11c\ube44\uc2a4 \ubc30\ud3ec\ub97c \uacf5\ubd80\ud558\uba70 \uc870\uae08\uc529 \uc811\ud588\uc5c8\uc2b5\ub2c8\ub2e4. \ubb3c\ub860 \uc0dd\ud65c\ucf54\ub529\uc5d0\uc11c\ub3c4 \uc798 \uc54c\ub824\uc8fc\uc9c0\ub9cc, \ub354 \uc790\uc138\ud788 \uacf5\ubd80\ud558\uae30 \uc704\ud574\uc11c \ucc45\uc744 \uc77d\uc5b4\ubcf4\uac8c \ub410\uc2b5\ub2c8\ub2e4."}),"\n",(0,t.jsx)(n.h2,{id:"book-review",children:"Book Review"}),"\n",(0,t.jsx)(n.h3,{id:"\ub2e8\uc21c\ud788-aws-\uc11c\ube44\uc2a4\ub97c-\uacf5\ubd80\ud558\ub294-\uac83\uc774-\uc544\ub2cc",children:"\ub2e8\uc21c\ud788 aws \uc11c\ube44\uc2a4\ub97c \uacf5\ubd80\ud558\ub294 \uac83\uc774 \uc544\ub2cc"}),"\n",(0,t.jsx)(n.p,{children:"\ub2e8\uc21c\ud788 aws \uc11c\ube44\uc2a4\uc5d0 \uad00\ub828\ub41c \ub0b4\uc6a9\uc774 \uc544\ub2c8\ub77c \uc880 \ub354 CS \uc9c0\uc2dd \uad00\uc810\uc73c\ub85c \uc4f0\uc5ec\uc838 \uc788\uc5b4 CS \uc9c0\uc2dd\uc774 \uaf64 \ubd80\uc871\ud55c \uc0ac\ub78c\ub3c4 \ud3b8\ud558\uac8c \uc77d\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc81c\uac00 \uadf8\ub7ac\uc2b5\ub2c8\ub2e4. \uc804 \uc804\uacf5\uc790\ub85c\uc11c \ub124\ud2b8\uc6cc\ud06c \uc218\uc5c5\uc744 \ub4e4\uc5c8\uc9c0\ub9cc, \uc774 \ucc45\uc744 \uc77d\uc73c\uba70 \uc81c\uac00 \ub124\ud2b8\uc6cc\ud06c \uc9c0\uc2dd\uc774 \uc5c4\uccad \ubd80\uc871\ud588\ub2e4\ub294 \uc0ac\uc2e4\uc744 \uae68\ub2eb\uac8c \ub410\uc2b5\ub2c8\ub2e4. \ucef4\ud4e8\ud130 \uc804\uacf5\uc790\ub77c\uba74 \ud070 \uc5b4\ub824\uc6c0 \uc5c6\uc774 \uc774 \ucc45\uc744 \uc77d\uc73c\uc2e4 \uc218 \uc788\uc744 \uac83 \uac19\uc2b5\ub2c8\ub2e4."}),"\n",(0,t.jsx)(n.p,{children:"\ub610\ud55c, \ucc45 \uc81c\ubaa9\uacfc \uc54c\ub9de\uac8c \ub2e8\uc21c\ud788 aws \uc11c\ube44\uc2a4\ub97c \ud558\ub098\ud558\ub098 \ubc30\uc6b0\ub294 \uac83\uc774 \uc544\ub2cc, \uc810\ud504 \uc11c\ubc84, \uce90\uc2dc \uc11c\ubc84 \ub4f1\uc744 \ubc30\uc6b0\uba70 \ub9d0 \uadf8\ub300\ub85c \uc778\ud504\ub77c \uad6c\ucd95\uc5d0 \uad00\uc810\uc744 \ub454 \ucc45\uc785\ub2c8\ub2e4. aws \uc11c\ube44\uc2a4\ub97c \uc810\ucc28\uc801\uc73c\ub85c \ucd94\uac00\ud574\ubcf4\uba74\uc11c \uacf5\ubd80\ud574\ubcf4\uace0 \uc2f6\uc740 \ubd84\ub4e4\uaed8 \ub3c4\uc6c0\uc774 \ub9ce\uc774 \ub420 \uac83\uc774\ub77c \uc0dd\uac01\ud569\ub2c8\ub2e4."}),"\n",(0,t.jsx)(n.h3,{id:"\ub9ac\uc18c\uc2a4-\uc774\ubbf8\uc9c0",children:"\ub9ac\uc18c\uc2a4 \uc774\ubbf8\uc9c0"}),"\n",(0,t.jsx)(n.p,{children:"\uc81c\uac00 \uc774 \ucc45\uc744 \uc77d\uc73c\uba74\uc11c \uac00\uc7a5 \uc88b\uac8c \ubcf8 \ubd80\ubd84\uc785\ub2c8\ub2e4. \ud55c chapter\ub9c8\ub2e4 \uc77d\uc744 \ub54c\ub9c8\ub2e4 \ub9ac\uc18c\uc2a4\uac00 \ucd94\uac00 \ub418\ub294\ub370 \uc2dc\uac01\uc801\uc73c\ub85c \ubb34\uc5c7\uc774 \ub2ec\ub77c\uc84c\ub294\uc9c0 \uc54c  \uc218 \uc788\uc5b4\uc11c \ucc45\uc744 \uc77d\ub294\ub370 \ub3c4\uc6c0\uc774 \ub410\uc2b5\ub2c8\ub2e4. \uc774 \ubc16\uc5d0\ub3c4 \uadf8\ub9bc\uc744 \ud1b5\ud574 \uc5b4\ub824\uc6b4 \ub0b4\uc6a9\uc744 \uc27d\uac8c \uc2dc\uac01\uc801\uc73c\ub85c \ubcf4\uc5ec\uc92c\ub2e4\ub294 \uc810\uc5d0\uc11c \ub108\ubb34 \uc77d\uae30 \ud3b8\ud588\uc2b5\ub2c8\ub2e4."}),"\n",(0,t.jsx)(n.h3,{id:"\ubd80\ub85d",children:"\ubd80\ub85d"}),"\n",(0,t.jsx)(n.p,{children:"\ubd80\ub85d\uc5d0\uc11c\ub294 \uc774 \ucc45\uc5d0\uc11c \uc4f4 \ub9ac\uc18c\uc2a4 \uc815\ubcf4\ub4e4\uacfc \ub9ac\uc18c\uc2a4 \uc0ad\uc81c \ubc29\ubc95 \ub4f1\uc744 \uc18c\uac1c\ud569\ub2c8\ub2e4. \uc774 \ubd80\ubd84\ub3c4 \ub9c8\uc74c\uc5d0 \ub4e4\uc5c8\ub358 \uac8c \ub9ac\uc18c\uc2a4 \uc0ad\uc81c \ubc29\ubc95\uc744 \ubab0\ub77c\uc11c \uc0ad\uc81c\ub97c \ubabb\ud558\uc2dc\ub294 \ubd84\ub4e4\ub3c4 \ub9ce\uc740\ub370 \uc774\ub807\uac8c \ub530\ub85c \uc0ad\uc81c \ubc29\ubc95\uc744 \uac04\ub2e8\ud558\uac8c\ub098\ub9c8 \uc54c\ub824\uc900\ub2e4\ub294 \uac83\uc774 \ud070 \ub3c4\uc6c0\uc774 \ub420 \uac83 \uac19\uc558\uc2b5\ub2c8\ub2e4."}),"\n",(0,t.jsx)(n.h2,{id:"\ub300\uc0c1\ub3c5\uc790",children:"\ub300\uc0c1\ub3c5\uc790"}),"\n",(0,t.jsx)(n.p,{children:"\uc778\ud504\ub77c \uad6c\ucd95\uc5d0 \uad00\uc2ec\uc774 \ub9ce\uc73c\uba70 \ub124\ud2b8\uc6cc\ud06c\ub97c \ud55c \ubc88\ucbe4 \uacf5\ubd80\ud574\ubcf4\uc2e0 \ubd84\ub4e4\uc774 \uc77d\uc73c\uc2dc\ub294 \uac78 \ucd94\ucc9c\ud569\ub2c8\ub2e4. \ub610\ud55c, \ub9ac\ub205\uc2a4 \uba85\ub839\uc5b4 \uc0ac\uc6a9 \uacbd\ud5d8\uc774 \uc788\uc5b4\uc57c \ud569\ub2c8\ub2e4. \ucc45\uc5d0\uc11c \uac04\ub2e8\ud558\uac8c \uc124\uba85\uc740 \ud574\uc8fc\uc9c0\ub9cc, \uadf8\ub798\ub3c4 \uc5b4\ub290\uc815\ub3c4 \uc0ac\uc6a9\ud560 \uc218 \uc788\uc5b4\uc57c \ucc45 \uc77d\ub294\ub370 \ubd88\ud3b8\ud568\uc774 \uc5c6\uc744 \uac83 \uac19\uc2b5\ub2c8\ub2e4. \uc774 \ucc45\uc758 \uae30\uc900 \ud658\uacbd\uc740 Windows10\uc774\uc9c0\ub9cc \ub2e4\ub978 OS\uc5d0 \uc775\uc219\ud558\uc2e0 \ubd84\ub4e4\uc774 \uc77d\uc5b4\ubcf4\uc154\ub3c4 \ud070 \uc5b4\ub824\uc6c0\uc740 \uc5c6\uc744 \uac83 \uac19\uc2b5\ub2c8\ub2e4."})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},1830:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/building-infrastructure-starting-with-AWS-65f38e36cdad1a02c93ef1ea5db4dd6d.jpg"},8453:(e,n,i)=>{i.d(n,{R:()=>d,x:()=>l});var t=i(6540);const o={},r=t.createContext(o);function d(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:d(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);