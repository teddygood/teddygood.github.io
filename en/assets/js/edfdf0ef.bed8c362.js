"use strict";(self.webpackChunkmy_blog=self.webpackChunkmy_blog||[]).push([[2217],{3327:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>a,frontMatter:()=>c,metadata:()=>d,toc:()=>u});var n=r(4848),o=r(8453);const c={title:"2024-08-18",date:"2024-08-18",draft:!1},i=void 0,d={id:"Trouble Shooting/pycharm-jupyter-error-in-ssh-environment",title:"2024-08-18",description:"\ud83e\udd14 \ubb38\uc81c",source:"@site/wiki/Trouble Shooting/pycharm-jupyter-error-in-ssh-environment.md",sourceDirName:"Trouble Shooting",slug:"/Trouble Shooting/pycharm-jupyter-error-in-ssh-environment",permalink:"/en/wiki/Trouble Shooting/pycharm-jupyter-error-in-ssh-environment",draft:!1,unlisted:!1,editUrl:"https://github.com/teddygood/teddygood.github.io/tree/main/wiki/Trouble Shooting/pycharm-jupyter-error-in-ssh-environment.md",tags:[],version:"current",frontMatter:{title:"2024-08-18",date:"2024-08-18",draft:!1},sidebar:"sidebar",previous:{title:"\ud504\ub85c\uc138\uc2a4 \uac15\uc81c \uc885\ub8cc",permalink:"/en/wiki/Trouble Shooting/port-is-already-in-use"},next:{title:"Alpine Linux\uc640 cryptography\uc758 \ud638\ud658\uc131 \ubb38\uc81c \ud574\uacb0",permalink:"/en/wiki/Trouble Shooting/python-lib-cryptography"}},s={},u=[{value:"\ud83e\udd14 \ubb38\uc81c",id:"-\ubb38\uc81c",level:2},{value:"Pycharm gateway jupyter notebook \ubb38\uc81c",id:"pycharm-gateway-jupyter-notebook-\ubb38\uc81c",level:3},{value:"Remote Development",id:"remote-development",level:3},{value:"\ud83d\udea9 \ud574\uacb0",id:"-\ud574\uacb0",level:2},{value:"\ud83c\udf10References",id:"references",level:2}];function A(e){const t={a:"a",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",ul:"ul",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"-\ubb38\uc81c",children:"\ud83e\udd14 \ubb38\uc81c"}),"\n",(0,n.jsx)(t.h3,{id:"pycharm-gateway-jupyter-notebook-\ubb38\uc81c",children:"Pycharm gateway jupyter notebook \ubb38\uc81c"}),"\n",(0,n.jsx)(t.p,{children:"\uc608\uc804\uc5d0 Pycharm\uc5d0\uc11c \uc11c\ubc84\uc5d0 SSH \uc5f0\uacb0\ud558\ub294 \ubc29\ubc95\uc744 \uc54c\uac8c \ub410\ub2e4. \uadfc\ub370 \uadf8 \ub2f9\uc2dc\uc5d0\ub3c4 Jupyter Notebook\uc744 \uc0ac\uc6a9\ud558\ub824\uace0 \ud588\ub294\ub370, \uadf8\ub54c\ub3c4 \uc548 \ub410\uc5c8\ub2e4. \uadf8\ub798\uc11c \uadf8\ub0e5 \ud3ec\uae30\ud558\uace0 Jupyter Lab\uc744 \uc0ac\uc6a9\ud558\uace0 \uc788\uc5c8\ub294\ub370, \uc6b0\uc5f0\ud788 \uc6b0\ub9ac\uc640 \ud568\uaed8 \uc878\uc5c5\uc791\ud488\uc744 \uc9c4\ud589\uc911\uc778 \uc870\uad50\ub2d8\uaed8\uc11c Pycharm\uc744 \uc774\uc6a9\ud55c\ub2e4\uace0 \ud558\uc154\uc11c \ud639\uc2dc\ub098 \ub418\ub098 \uc2f6\uc5b4 \ub2e4\uc2dc \uc2dc\ub3c4\ud574\ubd24\ub2e4. \uadf8\ub7ec\ub098 \uc5ec\uc804\ud788 \uc544\ub798\uc640 \uac19\uc740 \uc0c1\ud669\uc774\ub2e4."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"img.png",src:r(8155).A+"",width:"1312",height:"1004"})}),"\n",(0,n.jsx)(t.p,{children:"\ucc98\uc74c\uc5d0\ub294 \uc774 \ubb38\uc81c\ub97c \ud574\uacb0\ud574\ubcf4\ub824\uace0 \ud588\ub2e4. \uc800\uae30 Pycharm\uc5d0 Jupyter \ubd80\ubd84\uc5d0 \uc62c\ub77c\uc628 log\ub97c \uc77d\uc740 \ud6c4 password \ubb38\uc81c\ub77c\uace0 \uc0dd\uac01\uc774 \ub418\uc5b4\uc11c Jupyter Notebook \uc11c\ubc84\uc5d0 password\ub97c \ub123\uc5b4\ub3c4 \ubcf4\uace0 \uc5c6\uc560\uae30\ub3c4 \ud574\ubd24\ub2e4. \uadf8\ub7ec\ub098 \ub2ec\ub77c\uc9c0\ub294 \uac74 \uc5c6\uc5c8\ub2e4. \uc774\ub807\uac8c \ub118\uc5b4\uac00\uae30\ub294 \ub108\ubb34 \uc2eb\uc5c8\ub2e4. \ub0b4 \uad81\uae08\uc99d\uc744 \ubb34\uc870\uac74 \ud574\uacb0\ud558\uace0 \uc2f6\uc740 \uc0dd\uac01\uc5d0 \ub2e4\uc2dc \uad6c\uae00\ub9c1\uc744 \ud574\ubd24\uace0 \ubb38\uc81c\uac00 \ubb34\uc5c7\uc778\uc9c0 \ucc3e\uc558\ub2e4."}),"\n",(0,n.jsx)(t.h3,{id:"remote-development",children:"Remote Development"}),"\n",(0,n.jsxs)(t.p,{children:["\ubb38\uc81c\ub294 \ub9e4\uc6b0 \uac04\ub2e8\ud588\ub2e4. \uadf8\ub0e5 Jetbrains\uc5d0\uc11c \uc774 \ubd80\ubd84\uc744 \uc544\uc9c1 \uc9c0\uc6d0\ud558\uc9c0 \uc54a\ub294\ub2e4\ub294 \uac83\uc774\ub2e4. ",(0,n.jsx)(t.a,{href:"https://youtrack.jetbrains.com/issue/PY-71195/Remote-Development-Jupyter-Notebook-not-rendered",children:"\uc774 \ub9c1\ud06c"}),"\ub97c \ubcf4\uba74 \uc54c \uc218 \uc788\ub2e4."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"img_1.png",src:r(8403).A+"",width:"441",height:"173"})}),"\n",(0,n.jsx)(t.p,{children:"\uc800\uae30 \ub3d9\uadf8\ub77c\ubbf8\uc5d0 \uc810\uc774 4\uac1c \ucc0d\ud78c \uc544\uc774\ucf58\uc744 \ub9c8\uc6b0\uc2a4\ub85c \uac16\ub2e4 \ub300\ubcf4\uba74 \uc800\ub7f0 \ubb38\uad6c\uac00 \ub098\uc628\ub2e4. \ubb38\uad6c \uc544\ub798\uc5d0 \uc788\ub294 \ub9c1\ud06c\ub97c \ub204\ub974\uba74 YouTrack\uc5d0\uc11c issue\ub97c \uc791\uc131\ud560 \uc218 \uc788\ub294 \uacf3\uc774 \ub098\uc628\ub2e4. Jetbrains\uc5d0\uc11c YouTrack\uc774\ub77c\ub294 \uc11c\ube44\uc2a4\ub97c \ub9cc\ub4e4\uc5c8\uc73c\ub2c8 \ud639\uc2dc \uc774\ub7f0 IDE \uac1c\ubc1c\ub3c4 \uc5ec\uae30\uc11c \uad00\ub9ac\ud558\uc9c0 \uc54a\uc744\uae4c \uc2f6\uc5b4 \uc774 \ud0a4\uc6cc\ub4dc\ub97c \uc5f0\uacb0\uc9c0\uc5b4 \uac80\uc0c9\ud588\ub2e4."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"img_3.png",src:r(2883).A+"",width:"782",height:"300"})}),"\n",(0,n.jsx)(t.p,{children:"\uadf8\ub7ec\ub2c8 \ub0b4\uac00 \uc6d0\ud558\ub358 \uc815\ubcf4\ub97c \ucc3e\uc744 \uc218 \uc788\uc5c8\ub2e4. \uc774 \ub9c1\ud06c\uac00 \uc704\uc5d0\uc11c \uc5b8\uae09\ud55c \ub9c1\ud06c\uc774\ub2e4."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"img_2.png",src:r(4170).A+"",width:"1235",height:"750"})}),"\n",(0,n.jsx)(t.p,{children:"\ucc98\uc74c\uc5d0\ub294 \ub098\ub3c4 \uad6c\uae00\ub9c1 \ud560 \uc0dd\uac01\uc740 \uc548 \ud558\uace0 ChatGPT(GPT 4o)\uc5d0\uac8c \ubb3c\uc5b4\ubd24\ub2e4. \uc5d0\ub7ec \ub85c\uadf8\ub97c \ub358\uc838\uc8fc\uace0 \uc65c Pycharm\uc5d0\uc11c Jupyter Notebook\uc758 UI\uac00 \ubcf4\uc774\uc9c0 \uc54a\ub294\uc9c0 \ubb3c\uc5b4\ubd24\uc5c8\ub2e4. \uadf8\ub7ec\ub098 \uae30\uc5c5\uc5d0\uc11c \uc5c5\ub370\uc774\ud2b8\uac00 \uc548 \ub41c \ubd80\ubd84\uc774\uc5c8\uae30\uc5d0 ChatGPT\uac00 \ud574\uacb0\ud560 \uc218 \uc5c6\uc5c8\ub2e4."}),"\n",(0,n.jsx)(t.p,{children:"\uad6c\uae00 \uac80\uc0c9\uc774 GPT \uc774\ud6c4\ub85c \uc545\uc131 \ub9c1\ud06c\uac00 \ub9e4\uc6b0 \ub9ce\uc544\uc84c\uc9c0\ub9cc \uc544\uc9c1 \uad6c\uae00\ub9c1\uc744 \ubc84\ub9b4 \uc218\ub294 \uc5c6\ub2e4\uace0 \ub290\ub080\ub2e4. \uadf8\ub9ac\uace0 \ub108\ubb34 GPT\uc5d0\ub9cc \uc758\uc874\ud558\uc9c0 \ub9d0\uc790. \uc598\uac00 \ub300\ubd80\ubd84\uc758 \ubb38\uc81c\ub294 \ud574\uacb0\ud574\uc904 \uc218 \uc788\uaca0\uc9c0\ub9cc \ud574\uacb0\ud574\uc904 \uc218 \uc5c6\ub294 \ubb38\uc81c\ub3c4 \uc788\ub2e4."}),"\n",(0,n.jsx)(t.h2,{id:"-\ud574\uacb0",children:"\ud83d\udea9 \ud574\uacb0"}),"\n",(0,n.jsx)(t.p,{children:"\ud574\uacb0 \ubc29\ubc95\uc740 \uc544\uc9c1 \uc5c6\ub2e4. \uc5bc\ub978 Jetbrains\uac00 Remote \ud658\uacbd\uc5d0\uc11c Jupyter Notebook\uc744 \uc9c0\uc6d0\ud574\uc8fc\uae38 \ubc14\ub780\ub2e4. \uadf8 \uc804\uc5d0\ub294 vscode\ub97c \uc0ac\uc6a9\ud558\uac70\ub098 Jupyter Lab\uc744 \uc0ac\uc6a9\ud558\uc790."}),"\n",(0,n.jsx)(t.h2,{id:"references",children:"\ud83c\udf10References"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://youtrack.jetbrains.com/issue/PY-71195/Remote-Development-Jupyter-Notebook-not-rendered",children:"Remote Development: Jupyter Notebook not rendered"})}),"\n"]})]})}function a(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(A,{...e})}):A(e)}},4170:(e,t,r)=>{r.d(t,{A:()=>n});const n=r.p+"assets/images/ChatGPT-answer-to-question-97e606a15b0ce9f7573fce1eea5ed377.png"},2883:(e,t,r)=>{r.d(t,{A:()=>n});const n=r.p+"assets/images/gateway-google-1d60a2442cf15b0c3676e02b4336fe50.png"},8403:(e,t,r)=>{r.d(t,{A:()=>n});const n="data:image/png;base64,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"},8155:(e,t,r)=>{r.d(t,{A:()=>n});const n=r.p+"assets/images/pycharm-gateway-jupyter-error-fb080fee798eb610ac0e367b02225fcb.png"},8453:(e,t,r)=>{r.d(t,{R:()=>i,x:()=>d});var n=r(6540);const o={},c=n.createContext(o);function i(e){const t=n.useContext(c);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),n.createElement(c.Provider,{value:t},e.children)}}}]);