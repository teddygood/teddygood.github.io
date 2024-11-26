"use strict";(self.webpackChunkmy_blog=self.webpackChunkmy_blog||[]).push([[5177],{9047:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var l=i(4848),t=i(8453);const r={title:"\ud83d\udc0b Python \ud504\ub85c\uc81d\ud2b8\ub97c \uc704\ud55c Docker \ubca0\uc774\uc2a4 \uc774\ubbf8\uc9c0 \uc120\ud0dd \uc2dc Alpine Linux\ub97c \ud53c\ud574\uc57c \ud558\ub294 \uc774\uc720",date:"2024-11-24",authors:"teddygood",tags:["Troubleshooting"],draft:!1,slug:"/python-alpine-linux",description:"\ud30c\uc774\uc36c \ubc31\uc5d4\ub4dc \ub3c4\ucee4\ub85c \ubc30\ud3ec\ud558\ub824\ub2e4\uac00 \ubc1c\uc0dd\ud55c \ubb38\uc81c \ud574\uacb0",keywords:["Docker","Python","Alpine Linux"]},o=void 0,s={permalink:"/en/blog/python-alpine-linux",editUrl:"https://github.com/teddygood/teddygood.github.io/tree/main/blog/2024-11-24-python-alpine-linux/2024-11-24-python-alpine-linux.md",source:"@site/blog/2024-11-24-python-alpine-linux/2024-11-24-python-alpine-linux.md",title:"\ud83d\udc0b Python \ud504\ub85c\uc81d\ud2b8\ub97c \uc704\ud55c Docker \ubca0\uc774\uc2a4 \uc774\ubbf8\uc9c0 \uc120\ud0dd \uc2dc Alpine Linux\ub97c \ud53c\ud574\uc57c \ud558\ub294 \uc774\uc720",description:"\ud30c\uc774\uc36c \ubc31\uc5d4\ub4dc \ub3c4\ucee4\ub85c \ubc30\ud3ec\ud558\ub824\ub2e4\uac00 \ubc1c\uc0dd\ud55c \ubb38\uc81c \ud574\uacb0",date:"2024-11-24T00:00:00.000Z",tags:[{inline:!0,label:"Troubleshooting",permalink:"/en/blog/tags/troubleshooting"}],hasTruncateMarker:!1,authors:[{name:"Chanho Lee",title:"\ub2e4\uc591\ud55c \ubd84\uc57c\ub97c \uacf5\ubd80\ud558\uace0 \uc788\ub294 \ud559\uc0dd",url:"https://github.com/teddygood",imageURL:"https://github.com/teddygood.png",key:"teddygood"}],frontMatter:{title:"\ud83d\udc0b Python \ud504\ub85c\uc81d\ud2b8\ub97c \uc704\ud55c Docker \ubca0\uc774\uc2a4 \uc774\ubbf8\uc9c0 \uc120\ud0dd \uc2dc Alpine Linux\ub97c \ud53c\ud574\uc57c \ud558\ub294 \uc774\uc720",date:"2024-11-24",authors:"teddygood",tags:["Troubleshooting"],draft:!1,slug:"/python-alpine-linux",description:"\ud30c\uc774\uc36c \ubc31\uc5d4\ub4dc \ub3c4\ucee4\ub85c \ubc30\ud3ec\ud558\ub824\ub2e4\uac00 \ubc1c\uc0dd\ud55c \ubb38\uc81c \ud574\uacb0",keywords:["Docker","Python","Alpine Linux"]},unlisted:!1,prevItem:{title:"\ud83d\udcd6 \uc18c\ud504\ud2b8\uc6e8\uc5b4 \uc5d4\uc9c0\ub2c8\uc5b4 \uac00\uc774\ub4dc\ubd81",permalink:"/en/blog/The-SE-guidebook"},nextItem:{title:"\u272810\uc6d4 \ud68c\uace0",permalink:"/en/blog/Oct-Recap"}},c={authorsImageUrls:[void 0]},d=[{value:"Introduction",id:"introduction",level:2},{value:"\uccab \ubc88\uc9f8 \ubb38\uc81c",id:"\uccab-\ubc88\uc9f8-\ubb38\uc81c",level:2},{value:"Alpine Linux\uc640 cryptography\uc758 \ud638\ud658\uc131 \ubb38\uc81c",id:"alpine-linux\uc640-cryptography\uc758-\ud638\ud658\uc131-\ubb38\uc81c",level:3},{value:"\ud574\uacb0",id:"\ud574\uacb0",level:3},{value:"\ub450 \ubc88\uc9f8 \ubb38\uc81c",id:"\ub450-\ubc88\uc9f8-\ubb38\uc81c",level:2},{value:"\ube4c\ub4dc\uac00 \uc624\ub798 \uac78\ub9ac\ub2e4\uac00 \uc548 \ub418\ub294 \ubb38\uc81c",id:"\ube4c\ub4dc\uac00-\uc624\ub798-\uac78\ub9ac\ub2e4\uac00-\uc548-\ub418\ub294-\ubb38\uc81c",level:3},{value:"\ud574\uacb0",id:"\ud574\uacb0-1",level:3},{value:"Alpine Linux\uac00 \ud30c\uc774\uc36c \ud658\uacbd\uc5d0\uc11c \uc801\uc808\ud558\uc9c0 \uc54a\uc740 \uc774\uc720",id:"alpine-linux\uac00-\ud30c\uc774\uc36c-\ud658\uacbd\uc5d0\uc11c-\uc801\uc808\ud558\uc9c0-\uc54a\uc740-\uc774\uc720",level:2},{value:"\ud83c\udf10References",id:"references",level:2}];function h(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,l.jsx)(n.p,{children:"Django\ub97c \ud65c\uc6a9\ud558\uc5ec \ube14\ub85c\uadf8\ub97c \ub9cc\ub4e4\uc5b4\ubcf4\ub294 \ud504\ub85c\uc81d\ud2b8\ub97c \uc9c4\ud589\ud558\ub2e4\uac00 docker\ub85c \ud658\uacbd\uc744 \uc62e\uae30\ub294 \ub3c4\uc911 \uc5ec\ub7ec \uc5d0\ub7ec\ub4e4\uc744 \ub9cc\ub0ac\ub2e4. \uc774 \uae00\uc740 \ubb38\uc81c\ub97c \ud574\uacb0\ud558\uba74\uc11c \uc5bb\uc740 \uc9c0\uc2dd\uc744 \uacf5\uc720\ud558\uace0\uc790 \uc791\uc131\ud55c \uae00\uc774\ub2e4."}),"\n",(0,l.jsx)(n.h2,{id:"\uccab-\ubc88\uc9f8-\ubb38\uc81c",children:"\uccab \ubc88\uc9f8 \ubb38\uc81c"}),"\n",(0,l.jsx)(n.h3,{id:"alpine-linux\uc640-cryptography\uc758-\ud638\ud658\uc131-\ubb38\uc81c",children:"Alpine Linux\uc640 cryptography\uc758 \ud638\ud658\uc131 \ubb38\uc81c"}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"Dockerfile"}),", ",(0,l.jsx)(n.code,{children:"docker-compose.yml"})," \ud30c\uc77c\uc744 \uc791\uc131 \ud6c4 \ub9c8\uc9c0\ub9c9\uc73c\ub85c \ube4c\ub4dc\ub97c \ud558\ub358 \uc911 \uc544\ub798\uc758 \uc5d0\ub7ec\ub97c \ub9cc\ub0ac\ub2e4."]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"ERROR: No matching distribution found for cryptography==3.4.7\n"})}),"\n",(0,l.jsxs)(n.p,{children:["\ud604\uc7ac Dockerfile\uc5d0\uc11c \uc0ac\uc6a9\ud558\ub294 image \ubc84\uc804\uacfc requirements.txt\uc5d0 \uc801\ud78c cryptography \ubc84\uc804\uc740 \uc544\ub798\uc640 \uac19\ub2e4. \uc774\ub807\uac8c \uc124\uc815\ud574\ub450\uace0 ",(0,l.jsx)(n.code,{children:"docker-compose"}),"\ub85c \ube4c\ub4dc\ub97c \ud558\ub824\uace0 \ud588\ub294\ub370 \uc5d0\ub7ec\uac00 \ubc1c\uc0dd\ud55c \uac83\uc774\ub2e4."]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-Dockerfile",children:"FROM python:3.8-alpine\n"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"cryptography==3.4.7\n"})}),"\n",(0,l.jsx)(n.h3,{id:"\ud574\uacb0",children:"\ud574\uacb0"}),"\n",(0,l.jsx)(n.p,{children:"alpine linux\uc640 python\uc5d0\uc11c \uc554\ud638\ud654 \uc54c\uace0\ub9ac\uc998\uc774 \uad6c\ud604\ub41c \ud328\ud0a4\uc9c0\uc778 cryptography\uc758 \ud638\ud658\uc131 \ubb38\uc81c\ub77c\uace0 \uc0dd\uac01\ud588\uace0, cryptography\uc758 \uacf5\uc2dd \ubb38\uc11c\ub97c \ucc38\uace0\ud558\uc5ec \ud574\uacb0\ucc45\uc744 \ucc3e\uc544\ubcf4\uc558\ub2e4."}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{alt:"crypto-doc",src:i(6679).A+"",width:"748",height:"503"})}),"\n",(0,l.jsxs)(n.p,{children:["\ub300\ub7b5 \uc694\uc57d\ud558\uba74 cryptography \ud328\ud0a4\uc9c0\ub294 Rust\ub97c \ube4c\ub4dc\ud560 \ub54c \uc0ac\uc6a9\ud55c\ub2e4. \uc989, Rust\uc758 \ud328\ud0a4\uc9c0 \uad00\ub9ac\uc790\uc774\uc790 \ube4c\ub4dc \ub3c4\uad6c\uc778 ",(0,l.jsx)(n.strong,{children:"cargo"}),"\ub97c \uac19\uc774 \uc124\uce58\ud574\uc57c\uc9c0 \ub3cc\uc544\uac04\ub2e4\ub294 \uac83\uc774\ub2e4."]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"$ sudo apk add gcc musl-dev python3-dev libffi-dev openssl-dev cargo\n"})}),"\n",(0,l.jsx)(n.p,{children:"\uc704\uc758 \ucf54\ub4dc\ub97c Dockerfile\uc5d0 \ucd94\uac00\ud558\uba74\uc11c \uccab \ubc88\uc9f8 \ubb38\uc81c\ub294 \uc798 \ud574\uacb0\ud560 \uc218 \uc788\uc5c8\ub2e4."}),"\n",(0,l.jsx)(n.h2,{id:"\ub450-\ubc88\uc9f8-\ubb38\uc81c",children:"\ub450 \ubc88\uc9f8 \ubb38\uc81c"}),"\n",(0,l.jsx)(n.h3,{id:"\ube4c\ub4dc\uac00-\uc624\ub798-\uac78\ub9ac\ub2e4\uac00-\uc548-\ub418\ub294-\ubb38\uc81c",children:"\ube4c\ub4dc\uac00 \uc624\ub798 \uac78\ub9ac\ub2e4\uac00 \uc548 \ub418\ub294 \ubb38\uc81c"}),"\n",(0,l.jsx)(n.p,{children:"\uc704\uc758 \uba85\ub839\uc5b4\ub97c Dockerfile\uc5d0 \ucd94\uac00\ud558\uace0 \ub2e4\uc2dc build \ud558\uba74 \ub2f9\uc5f0\ud788 \uc798 \uc791\ub3d9\ub420 \uac70\ub77c \uc0dd\uac01\ud588\uc73c\ub098 \uc544\ub798\uc640 \uac19\uc774 \ub2e4\uc2dc \ud55c \ubc88 \uc5d0\ub7ec\uac00 \ubc1c\uc0dd\ud588\ub2e4. \uc774\ubbf8\uc9c0\ub97c \ubcf4\uba74 \uc54c \uc218 \uc788\ub4ef\uc774 still running\uc774 \uc9c0\uc18d\ub418\ub294 \uc0c1\ud669\uc774\ub2e4. \ub300\ub7b5 10\ubd84 \uc815\ub3c4 \uadf8\ub300\ub85c \ub194\ub480\ub294\ub370\ub3c4 \ube4c\ub4dc\uac00 \uc548 \ub418\uace0 \uacc4\uc18d \uc9c4\ud589\ud558\ub2e4\uac00 \uc885\ub8cc\uac00 \ub41c\ub2e4."}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{alt:"\ub354 \uc0c1\uc138\ud55c details",src:i(5963).A+"",width:"727",height:"109"})}),"\n",(0,l.jsx)(n.h3,{id:"\ud574\uacb0-1",children:"\ud574\uacb0"}),"\n",(0,l.jsx)(n.p,{children:"\uacc4\uc18d \uad6c\uae00\ub9c1\uc744 \ud558\uba74\uc11c \uc774 \ubb38\uc81c\ub97c \ud574\uacb0\ud558\ub824 \ud588\uc73c\uba70, cryptography \ub77c\uc774\ube0c\ub7ec\ub9ac\uc640\uc758 \ubb38\uc81c\uc77c \uc218\ub3c4 \uc788\ub2e4\uace0 \uc0dd\uac01\ud558\uc5ec \uacf5\uc2dd \ubb38\uc11c\ub3c4 \ub2e4\uc2dc \ub2e4 \uc77d\uc5b4\ubcf4\uace0, \ub77c\uc774\ube0c\ub7ec\ub9ac\uc758 GitHub \uc774\uc288\ub3c4 \ucc3e\uc544\ubcf4\uc558\ub2e4."}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{alt:"\ub354 \uc0c1\uc138\ud55c details",src:i(7593).A+"",width:"1019",height:"833"})}),"\n",(0,l.jsx)(n.p,{children:"\ub300\ub7b5\uc801\uc73c\ub85c \ube44\uc2b7\ud55c \uc774\uc288\ub97c \ucc3e\uc744 \uc218 \uc788\uc5c8\ub2e4. \uc704\uc758 \uc774\ubbf8\uc9c0\ub294 cryptography GitHub \uc800\uc7a5\uc18c\uc5d0\uc11c \uac00\uc838\uc628 \ud55c \uc774\uc288 \uc774\ubbf8\uc9c0\ub2e4. \ud604\uc7ac\uc758 \uc0c1\ud669\uacfc \ube44\uc2b7\ud558\uc5ec \ub2f5\ubcc0\uc744 \ucc38\uace0\ud560 \uc218 \uc788\uc5c8\ub2e4."}),"\n",(0,l.jsx)(n.p,{children:"\ub300\ub7b5 \uc694\uc57d\ud558\uc790\uba74 \uc544\ub798\uc640 \uac19\ub2e4."}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsx)(n.li,{children:"Alpine Linux\uc5d0\uc11c Python \ud328\ud0a4\uc9c0\ub97c \ube4c\ub4dc\ud558\ub294 \uc791\uc5c5\uc774 \ub290\ub9ac\uba70, \ud2b9\ud788 CI/CD \ud658\uacbd\uc5d0\uc11c \ub9e4\ubc88 \ube4c\ub4dc\ud574\uc57c \ud558\ub294 \uacbd\uc6b0 \ube44\ud6a8\uc728\uc801\uc774\ub2e4."}),"\n",(0,l.jsx)(n.li,{children:"Python\uc758 pip \ubc0f \ud720 \ud328\ud0a4\uc9d5\uacfc \uad00\ub828\ud558\uc5ec Alpine\uacfc \ud638\ud658 \uac00\ub2a5\ud55c \ud720\uc744 \uc5c5\ub85c\ub4dc\ud558\ub294 \uc791\uc5c5\uc774 \ud544\uc694\ud558\uc9c0\ub9cc, \uc774\ub294 pip/wheel/packaging \ubc0f \uad00\ub828 PEP \ub17c\uc758\uac00 \ud544\uc694\ud558\ub2e4."}),"\n",(0,l.jsx)(n.li,{children:"\ucd5c\uc2e0 Alpine \ud658\uacbd\uc5d0\uc11c Python \ud328\ud0a4\uc9c0\ub97c \uc81c\ub300\ub85c \uc124\uce58\ud558\ub824\uba74 \ucd5c\uc2e0 Rust \ucef4\ud30c\uc77c\ub7ec\uac00 \ud544\uc694\ud558\ub2e4."}),"\n",(0,l.jsx)(n.li,{children:"Alpine\uc5d0\uc11c \ubc1c\uc0dd\ud558\ub294 \uc774\uc640 \uac19\uc740 \ubb38\uc81c\ub294 \ubb38\uc11c\ud654\ub418\uc5b4 \uc788\uace0, \ud604\uc7ac\ub85c\uc11c\ub294 \uac1c\uc120 \uc0ac\ud56d\uc774 \uc5c6\uc73c\ubbc0\ub85c \ucd94\uac00\uc801\uc778 \ubb38\uc81c\uac00 \uc788\ub2e4\uba74 \uc0c8\ub85c\uc6b4 \uc774\uc288\ub97c \uc5f4\uac70\ub098 PR(Pull Request)\uc744 \uc81c\ucd9c\ud574\uc57c \ud55c\ub2e4."}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"\uc774 \ub2f5\ubcc0\uc5d0\uc11c\uc758 \ud575\uc2ec\uc740 \uacb0\uad6d 1\ubc88\uacfc 2\ubc88\uc774\uc5c8\ub2e4. \uc989, Alpine \ub9ac\ub205\uc2a4\uac00 \ubb38\uc81c\uc600\uace0, \uc544\ub798\uc640 \uac19\uc774 \uc774\ubbf8\uc9c0\ub9cc \ubc14\uafc8\uc73c\ub85c\uc11c \ubb38\uc81c\ub97c \ud574\uacb0\ud560 \uc218 \uc788\uc5c8\ub2e4."}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-Dockerfile",children:"FROM python:3.8-slim-buster\n"})}),"\n",(0,l.jsx)(n.p,{children:"\uadfc\ub370 \ubb38\uc81c\ub9cc \ud574\uacb0\ud558\uba74 \ub05d\uc77c\uae4c? \uadf8\uac74 \uc544\ub2c8\ub2e4. \uc774\uc720\ub97c \uc54c\uc544\ubcf4\uc790."}),"\n",(0,l.jsx)(n.h2,{id:"alpine-linux\uac00-\ud30c\uc774\uc36c-\ud658\uacbd\uc5d0\uc11c-\uc801\uc808\ud558\uc9c0-\uc54a\uc740-\uc774\uc720",children:"Alpine Linux\uac00 \ud30c\uc774\uc36c \ud658\uacbd\uc5d0\uc11c \uc801\uc808\ud558\uc9c0 \uc54a\uc740 \uc774\uc720"}),"\n",(0,l.jsx)(n.p,{children:"\ub0b4\uac00 alpine linux\ub97c \uc0ac\uc6a9\ud55c \uc774\uc720\ub294 Ubuntu linux\uc640 \ube44\uad50\ud588\uc744 \ub54c \uc6a9\ub7c9\ub3c4 \uc791\uace0 \ube4c\ub4dc\ud560 \ub54c \ub354 \ube60\ub974\uae30 \ub54c\ubb38\uc774\ub2e4. \uc989, \uacbd\ub7c9\ud654\uac00 \uc798 \ub418\uc5b4 \uc788\uae30 \ub54c\ubb38\uc774\ub2e4. \uadf8\ub7ec\ub098 \uc774 \uc774\ubbf8\uc9c0\ub294 python \ud658\uacbd\uc5d0\uc11c\ub294 \uc801\uc808\ud558\uc9c0 \uc54a\ub2e4."}),"\n",(0,l.jsxs)(n.p,{children:["\uadf8 \uc774\uc720\ub294 \uc0ac\uc6a9\ud558\ub294 \ub77c\uc774\ube0c\ub7ec\ub9ac\uc758 \ucc28\uc774\uc5d0\uc11c \uc2dc\uc791\ub41c\ub2e4. \ub300\ubd80\ubd84\uc758 \ub9ac\ub205\uc2a4 \ubc30\ud3ec\ud310\uc740 \ud30c\uc774\uc36c\uc744 \ud3ec\ud568\ud55c \ubaa8\ub4e0 C\uc5b8\uc5b4 \ud504\ub85c\uadf8\ub7a8\uc5d0 \ud544\uc694\ud55c C\uc5b8\uc5b4 \ud45c\uc900 \ub77c\uc774\ube0c\ub7ec\ub9ac\uc778 GNU \ub77c\uc774\ube0c\ub7ec\ub9ac(glibc)\ub97c \uc0ac\uc6a9\ud55c\ub2e4. \uadf8\ub7ec\ub098 Alpine Linux\ub294 \uc880 \ub354 \uacbd\ub7c9\ud654\ud558\uae30 \uc704\ud558\uc5ec GNU \ub77c\uc774\ube0c\ub7ec\ub9ac\ub97c \uc0ac\uc6a9\ud558\ub294 \uac83\uc774 \uc544\ub2c8\ub77c musl \ub77c\uc774\ube0c\ub7ec\ub9ac\ub97c \uc0ac\uc6a9\ud55c\ub2e4. \uc774 musl \ub77c\uc774\ube0c\ub7ec\ub9ac\ub294 GNU \ub77c\uc774\ube0c\ub7ec\ub9ac\ub85c \ucef4\ud30c\uc77c \ub41c ",(0,l.jsx)(n.code,{children:"Wheel \ubc14\uc774\ub108\ub9ac"}),"\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\ub294\ub2e4. \uadf8\ub807\uae30 \ub54c\ubb38\uc5d0 ",(0,l.jsx)(n.code,{children:".whl"})," \ud655\uc7a5\uc790\ub97c \uac16\ub294 \ud328\ud0a4\uc9c0\ub97c \ub2e4\uc6b4 \ubc1b\ub294 \uac83\uc774 \uc544\ub2c8\ub77c ",(0,l.jsx)(n.code,{children:".tar.gz"})," \ud655\uc7a5\uc790 \ud30c\uc77c\uc744 \ub2e4\uc6b4 \ubc1b\uac8c \ub41c\ub2e4. \uc989, alpine linux\ub97c \uc0ac\uc6a9\ud558\ub294 \uacbd\uc6b0 \uc0ac\uc6a9\ud558\ub294 \ubaa8\ub4e0 \ud30c\uc774\uc36c \ud328\ud0a4\uc9c0\uc758 C \ucf54\ub4dc\ub97c \ucef4\ud30c\uc77c \ud574\uc57c \ud558\ubbc0\ub85c \ube4c\ub4dc \uc2dc\uac04\ub3c4 \uc624\ub798 \uac78\ub9ac\uba70 \uc6a9\ub7c9\ub3c4 \ucee4\uc9c4\ub2e4\ub294 \uac83\uc774\ub2e4."]}),"\n",(0,l.jsx)(n.p,{children:"\ucd5c\uadfc \ub300\ubd80\ubd84\uc758 \ud30c\uc774\uc36c \ud328\ud0a4\uc9c0\uc5d0\ub294 PyPI\uc758 Wheel \ubc14\uc774\ub108\ub9ac\uac00 \ud3ec\ud568\ub418\uc5b4 \uc788\uc5b4 \uc124\uce58 \uc2dc\uac04\uc774 \ube60\ub974\ub2e4. Wheel\uc740 \uc0ac\uc2e4 .whl \ud655\uc7a5\uc790\uc640 \ud2b9\ubcc4\ud55c \ud615\uc2dd\uc758 \ud30c\uc77c \uc774\ub984\uc73c\ub85c \uc774\ub8e8\uc5b4\uc9c4 ZIP \ud615\uc2dd\uc744 \uc544\uce74\uc774\ube0c\ud55c \uac83\uc774\ub2e4. \uc27d\uac8c \ub9d0\ud558\uba74 \ud655\uc7a5\uc790\ub9cc \ubc14\uafbc \uac83\uc774\ub2e4."}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsx)(n.li,{children:"\ube4c\ub4dc\uac00 \ub290\ub9ac\ub2e4."}),"\n",(0,l.jsx)(n.li,{children:"\uc774\ubbf8\uc9c0 \uc6a9\ub7c9\uc774 \ucee4\uc9c4\ub2e4."}),"\n",(0,l.jsx)(n.li,{children:"\uc2dc\uac04\uc774 \ub9ce\uc774 \ub0ad\ube44\ub41c\ub2e4.(\ube4c\ub4dc\ud558\ub294 \uacfc\uc815)"}),"\n",(0,l.jsx)(n.li,{children:"\ub7f0\ud0c0\uc784 \ubc84\uadf8\ub4e4\uc744 \ub9cc\ub0a0 \uc218 \uc788\ub2e4."}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"\uc704\uc758 \uc774\uc720\ub4e4\ub85c \uc778\ud574, Python \ud658\uacbd\uc5d0\uc11c\ub294 Alpine Linux\ubcf4\ub2e4\ub294 Debian \uae30\ubc18\uc758 slim \uc774\ubbf8\uc9c0\ub098 Ubuntu \uae30\ubc18 \uc774\ubbf8\uc9c0\ub97c \uc0ac\uc6a9\ud558\ub294 \uac83\uc774 \ub354 \uc801\ud569\ud558\ub2e4."}),"\n",(0,l.jsx)(n.h2,{id:"references",children:"\ud83c\udf10References"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"https://cryptography.io/en/latest/installation/",children:"Cryptography installation"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"https://github.com/pyca/cryptography/issues/5776",children:"Dependencies to build on Alpine Linux?"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"https://jonnung.dev/docker/2020/04/08/optimizing-docker-images/",children:"\ub3c4\ucee4 \uc774\ubbf8\uc9c0 \uc798 \ub9cc\ub4dc\ub294 \ubc29\ubc95"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"https://pythonspeed.com/articles/alpine-docker-python/",children:"Using Alpine can make Python Docker builds 50x slower"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"https://pythonspeed.com/articles/base-image-python-docker-images/",children:"The best Dockeer base image for Python application"})}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(h,{...e})}):h(e)}},7593:(e,n,i)=>{i.d(n,{A:()=>l});const l=i.p+"assets/images/alpine-linux-build-issue-18101324b11176113bb1b45925f4cb06.jpg"},5963:(e,n,i)=>{i.d(n,{A:()=>l});const l=i.p+"assets/images/crypto-building-error-d1fd632da6ad156fe5b2992ae3ad5b27.jpg"},6679:(e,n,i)=>{i.d(n,{A:()=>l});const l=i.p+"assets/images/cryptography-doc-7920a97dd96ca33edacacfbb8e6f2c1b.jpg"},8453:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>s});var l=i(6540);const t={},r=l.createContext(t);function o(e){const n=l.useContext(r);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),l.createElement(r.Provider,{value:n},e.children)}}}]);