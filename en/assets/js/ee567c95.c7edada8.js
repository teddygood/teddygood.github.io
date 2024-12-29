"use strict";(self.webpackChunkmy_blog=self.webpackChunkmy_blog||[]).push([[6460],{2578:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>a,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var r=n(4848),i=n(8453);const s={title:"WSL2\uc5d0\uc11c Jupyter Lab \uc2e4\ud589 \ubb38\uc81c \ud574\uacb0",date:"2022-07-16",draft:!1},l=void 0,o={id:"Trouble Shooting/Jupyter-lab-tcgetpgrp-failed-on-wsl2",title:"WSL2\uc5d0\uc11c Jupyter Lab \uc2e4\ud589 \ubb38\uc81c \ud574\uacb0",description:"\ud83e\udd14 \ubb38\uc81c",source:"@site/wiki/Trouble Shooting/Jupyter-lab-tcgetpgrp-failed-on-wsl2.md",sourceDirName:"Trouble Shooting",slug:"/Trouble Shooting/Jupyter-lab-tcgetpgrp-failed-on-wsl2",permalink:"/en/wiki/Trouble Shooting/Jupyter-lab-tcgetpgrp-failed-on-wsl2",draft:!1,unlisted:!1,editUrl:"https://github.com/teddygood/teddygood.github.io/tree/main/wiki/Trouble Shooting/Jupyter-lab-tcgetpgrp-failed-on-wsl2.md",tags:[],version:"current",frontMatter:{title:"WSL2\uc5d0\uc11c Jupyter Lab \uc2e4\ud589 \ubb38\uc81c \ud574\uacb0",date:"2022-07-16",draft:!1},sidebar:"sidebar",previous:{title:"\uac04\ub2e8\ud55c PyJWT \ub808\uac70\uc2dc \ucf54\ub4dc \uc218\uc815 \uacbd\ud5d8",permalink:"/en/wiki/Trouble Shooting/AttributeError-str-decode"},next:{title:"Docker\ub97c \uc0ac\uc6a9\ud560 \ub54c DB URL \uc124\uc815\ud558\uae30",permalink:"/en/wiki/Trouble Shooting/MongoDB-docker-connection"}},d={},c=[{value:"\ud83e\udd14 \ubb38\uc81c",id:"-\ubb38\uc81c",level:2},{value:"\ud83d\udea9 \ud574\uacb0",id:"-\ud574\uacb0",level:2},{value:"\ubc29\ubc95 1",id:"\ubc29\ubc95-1",level:3},{value:"\ubc29\ubc95 2",id:"\ubc29\ubc95-2",level:3},{value:"\u2714\ufe0f Appendix",id:"\ufe0f-appendix",level:2},{value:"\ud83c\udf10 References",id:"-references",level:2}];function p(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"-\ubb38\uc81c",children:"\ud83e\udd14 \ubb38\uc81c"}),"\n",(0,r.jsxs)(t.p,{children:["\ubcf4\ud1b5 \uc8fc\ud53c\ud130 \ub178\ud2b8\ubd81 \ub610\ub294 \uc8fc\ud53c\ud130 \ub7a9\uc744 \uc0ac\uc6a9\ud560 \ub54c ",(0,r.jsx)(t.code,{children:"jupyter notebook"})," \ub610\ub294 ",(0,r.jsx)(t.code,{children:"jupyter lab"}),"\uc774\ub77c\ub294 \uba85\ub839\uc5b4\ub97c \uce58\uace0 \ub4e4\uc5b4\uac04\ub2e4. \ubcf4\ud1b5\uc740 \ube0c\ub77c\uc6b0\uc800\uc640 \ud568\uaed8 \uc8fc\ud53c\ud130\uac00 \uc2e4\ud589\ub418\ub294\ub370 \ube0c\ub77c\uc6b0\uc800\uac00 \uc5f4\ub9ac\uc9c0\ub3c4 \uc54a\uace0 \uc8fc\ud53c\ud130\uac00 \uc2e4\ud589\ub410\ub294\uc9c0\ub3c4 \ubaa8\ub974\ub294 \ubb38\uc81c\ub97c \ub9cc\ub0ac\ub2e4."]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"\ubb38\uc81c",src:n(1499).A+"",width:"763",height:"110"})}),"\n",(0,r.jsx)(t.p,{children:"WSL2\uc5d0\uc11c Jupyter Lab\uc744 \uc2e4\ud589\uc2dc\ud0a4\uba74 \uc704\uc758 \uc5d0\ub7ec \ubb38\uc7a5\uc774 1\ucd08\ub3c4 \uc548 \ub418\uac8c \ube60\ub974\uac8c \uc0ac\ub77c\uc9c0\uace0 \uac11\uc790\uae30 \ud130\ubbf8\ub110\uc774 clear\ub418\ub294 \uc0c1\ud669\uc774\ub2e4. Jupyter \uc11c\ubc84\uac00 \ub3cc\uc544\uac00\uace0 \uc788\ub294\uc9c0\ub3c4 \uc54c \uc218\uac00 \uc5c6\uc5c8\ub2e4."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"\uc8fc\ud53c\ud130 \ub85c\uadf8\uc778",src:n(3198).A+"",width:"560",height:"859"})}),"\n",(0,r.jsxs)(t.p,{children:["\ud639\uc2dc\ub098 \uc11c\ubc84\uac00 \uc791\ub3d9\ud558\uace0 \uc788\ub294 \uac83\uc77c \uc218\ub3c4 \uc788\uc73c\ub2c8 Jupyter \uc8fc\uc18c\uc778 ",(0,r.jsx)(t.code,{children:"localhost:8888"}),"\uc5d0 \uc811\uc18d\ud574\ubd24\ub2e4. \uc11c\ubc84\ub294 \uc81c\ub300\ub85c \uc791\ub3d9\ud558\uace0 \uc788\ub294 \uac83\uc744 \ud655\uc778. \uadfc\ub370 \ubb38\uc81c\ub294 \ud1a0\ud070 \uac12\uc744 \ubaa8\ub978\ub2e4\ub294 \uac83\uc774\ub2e4. \ubcf4\ud1b5 Jupyter\ub97c \uc2e4\ud589\uc2dc\ud0ac \ub54c \ud130\ubbf8\ub110\uc5d0\uc11c \ud1a0\ud070\uc744 \ucd9c\ub825\uc2dc\ucf1c \ubcf4\uc5ec\uc900\ub2e4. \uc6b0\ub9ac\ub294 \uadf8\uac78 \ubcf5\uc0ac, \ubd99\uc5ec\ub123\uae30\ub97c \ud558\uba74 \ub41c\ub2e4. \uadf8\ub7ec\ub098 \uc9c0\uae08 \uc0c1\ud669\uc740 \ud130\ubbf8\ub110 \uc870\ucc28\ub3c4 clear\ub418\uc5b4 \uc788\uc73c\ubbc0\ub85c \ud1a0\ud070 \uac12\uc744 \ubaa8\ub978\ub2e4."]}),"\n",(0,r.jsx)(t.h2,{id:"-\ud574\uacb0",children:"\ud83d\udea9 \ud574\uacb0"}),"\n",(0,r.jsx)(t.h3,{id:"\ubc29\ubc95-1",children:"\ubc29\ubc95 1"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"jupyter server list\n"})}),"\n",(0,r.jsx)(t.p,{children:"\uac00\uc7a5 \uc26c\uc6b4 \ubc29\ubc95\uc740 \ud130\ubbf8\ub110\uc744 \ud55c \uac1c \ub354 \uc5f4\uc5b4\uc11c \uc704\uc758 \uba85\ub839\uc5b4\ub97c \ub204\ub978 \ud6c4, \ud1a0\ud070 \uac12\uc744 \ud655\uc778\ud558\uc5ec \uc8fc\ud53c\ud130 \ub7a9\uc5d0 \uc811\uc18d\ud558\uba74 \ub41c\ub2e4."}),"\n",(0,r.jsx)(t.h3,{id:"\ubc29\ubc95-2",children:"\ubc29\ubc95 2"}),"\n",(0,r.jsx)(t.p,{children:"\uadfc\ub370 \uc704\uc758 \ubc29\ubc95\uc73c\ub85c \uc4f0\uba74 \uc194\uc9c1\ud788 \ub108\ubb34 \ubd88\ud3b8\ud558\uace0 \uc65c \uc800\ub7f0 \ubb38\uc81c\uac00 \uc0dd\uacbc\ub294\uc9c0 \uad81\uae08\ud558\uc5ec stackoverflow\uc5d0\uc11c \uac80\uc0c9\uc744 \uc880 \ud574\ubd24\ub2e4. \uc815\ud655\ud55c \uc6d0\uc778\uc740 \ubaa8\ub974\uaca0\uc73c\ub098 \ub2e4\ub978 \ud574\uacb0 \ubc29\ubc95 \ud558\ub098\ub97c \uc54c \uc218 \uc788\uc5c8\ub2e4."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"jupyter lab --no-browser\n"})}),"\n",(0,r.jsx)(t.p,{children:"\uac04\ub2e8\ud558\ub2e4. \uadf8\ub0e5 \uc704\uc758 \uba85\ub839\uc5b4\ub97c \uc2e4\ud589\uc2dc\ud0a4\uba74 \ub41c\ub2e4. \uc8fc\ud53c\ud130\ub97c \uc2e4\ud589\ub420 \ub54c \uac19\uc774 \ucf1c\uc9c0\ub294 \ube0c\ub77c\uc6b0\uc800\ub97c \uc0ac\uc6a9\ud558\uc9c0 \uc54a\uaca0\ub2e4\ub294 \uc758\ubbf8\uc774\ub2e4."}),"\n",(0,r.jsx)(t.p,{children:"\uadf8\ub7fc \uc5b4\ub5bb\uac8c \uc8fc\ud53c\ud130\uc5d0 \uc811\uc18d\ud574\uc57c \ud558\ub294\uac00?"}),"\n",(0,r.jsx)(t.p,{children:"\uc8fc\uc18c\ub294 \uc8fc\ud53c\ud130\ub97c \uc2e4\ud589\uc2dc\ud0a4\uba74 \ud130\ubbf8\ub110\uc5d0 \ub098\uc628\ub2e4. \uc989, \uc6b0\ub9ac\uac00 \uc9c1\uc811 \ube0c\ub77c\uc6b0\uc800\ub97c \ucf1c\uc11c \uc8fc\uc18c\ub97c \uc785\ub825\ud558\uba74 \ub41c\ub2e4."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"\uc8fc\ud53c\ud130 \ub7a9",src:n(9504).A+"",width:"1920",height:"929"})}),"\n",(0,r.jsx)(t.p,{children:"\uadf8\ub7fc \uc704\uc640 \uac19\uc774 \uc81c\ub300\ub85c \uc0ac\uc774\ud2b8\uc5d0 \uc811\uc18d\ud560 \uc218 \uc788\uac8c \ub41c\ub2e4."}),"\n",(0,r.jsx)(t.h2,{id:"\ufe0f-appendix",children:"\u2714\ufe0f Appendix"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"\uc8fc\ud53c\ud130 \ub7a9",src:n(94).A+"",width:"1152",height:"484"})}),"\n",(0,r.jsxs)(t.p,{children:["GitHub\uc5d0 \uc788\ub294 ",(0,r.jsx)(t.a,{href:"https://github.com/jupyterlab/jupyterlab/issues/10413",children:"jupyter lab Repo\uc758 issue"}),"\ub97c \ud655\uc778\ud558\ub2c8 \ub098\ub791 \uac19\uc740 \ubb38\uc81c\ub97c \uc811\ud55c \uc0ac\ub78c\uc774 \uc788\uc5c8\uace0 \ub204\uad70\uac00\uc758 \ub2f5\ubcc0\uc744 \ud655\uc778\ud560 \uc218 \uc788\uc5c8\ub2e4. \uadf8\uc758 \ub2f5\ubcc0\uc744 \uc694\uc57d\ud558\uba74 \uc8fc\ud53c\ud130\ub791\uc740 \uad00\ub828\uc774 \uc5c6\uc73c\uba70 WSL\uacfc \uad00\ub828\uc774 \uc788\ub2e4\uace0 \ud55c\ub2e4."]}),"\n",(0,r.jsx)(t.p,{children:"\ub300\ub7b5\uc801\uc73c\ub85c \uc608\uc0c1\ud574\ubcf4\uba74 \uc544\ub9c8 WSL\uc740 CLI\ub85c \uc774\ub8e8\uc5b4\uc9c4 \ud658\uacbd\uc774\ub77c \ube0c\ub77c\uc6b0\uc800\uac00 \uc5c6\uc73c\ub2c8 \uac70\uae30\uc11c \ube0c\ub77c\uc6b0\uc800\ub97c \uc791\ub3d9\uc2dc\ud0a4\ub824\uace0 \ud560 \ub54c \ubb38\uc81c\uac00 \uc0dd\uae38 \uc218 \uc788\ub2e4\uace0 \uc0dd\uac01\ud55c\ub2e4."}),"\n",(0,r.jsx)(t.p,{children:"\ub354 \uc0dd\uac01\ud574\ubcf4\uba74 WSL \uc790\uccb4\uac00 \uc560\ucd08\uc5d0 \uac00\uc0c1\ud658\uacbd\uc774\ub77c \uac70\uae30\uc11c \uc791\ub3d9\uc2dc\ucf1c \uc2e4\uc81c \ud658\uacbd\uc758 \ube0c\ub77c\uc6b0\uc800\ub97c \uc5ec\ub294 \uac83\uc774 \ubb38\uc81c\uac00 \uc788\uc744 \uc218\ub3c4 \uc788\ub2e4\uace0 \uc0dd\uac01\uc774 \ub4e0\ub2e4."}),"\n",(0,r.jsx)(t.p,{children:"\uadfc\ub370 \uadf8\ub807\uae30\uc5d0\ub294 WSL\uc5d0\uc11c VS Code\ub294 \ub108\ubb34 \uc798 \uc791\ub3d9\uc774 \ub418\ub294\ub370? \uc774\uc720\ub97c \ubaa8\ub974\uaca0\ub2e4."}),"\n",(0,r.jsx)(t.p,{children:"\uc5b4\uca0c\ub4e0 \ub098\ub294 1\ubc88 \ubc29\ubc95\uc740 \uadc0\ucc2e\uc73c\ub2c8 WSL\uc5d0\uc11c Jupyter\ub97c \uc0ac\uc6a9\ud560 \uacbd\uc6b0\uc5d0\ub294 \uc544\ub9c8 2\ubc88 \ubc29\ubc95\uc744 \uc0ac\uc6a9\ud558\uc9c0 \uc54a\uc744\uae4c \uc2f6\ub2e4."}),"\n",(0,r.jsx)(t.h2,{id:"-references",children:"\ud83c\udf10 References"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://stackoverflow.com/questions/50882266/using-jupyter-with-windows-subsystem-for-linux",children:"https://stackoverflow.com/questions/50882266/using-jupyter-with-windows-subsystem-for-linux"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://github.com/jupyterlab/jupyterlab/issues/10413",children:"Jupyter Lab hangs on startup and then 'tcgetpgrp failed: Not a tty' appears (in WSL2)"})}),"\n"]})]})}function a(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},94:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/github-issue-jupyter-0ec4b2d9e79e4de483d1e0f2fa7f261d.png"},9504:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/jupyter-lab-1c41fd1ae8a79968675ff33206860ac7.png"},3198:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/jupyter-login-c2a1493dc87bcf80f39ddb6de2a4027b.png"},1499:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/tcgetpgrp-failed-850d81b9688d88fbfec4ab88ae212f7b.png"},8453:(e,t,n)=>{n.d(t,{R:()=>l,x:()=>o});var r=n(6540);const i={},s=r.createContext(i);function l(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);