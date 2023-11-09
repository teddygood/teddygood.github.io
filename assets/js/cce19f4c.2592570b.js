"use strict";(self.webpackChunkmy_blog=self.webpackChunkmy_blog||[]).push([[1744],{9200:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>i,contentTitle:()=>d,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var c=n(5893),t=n(1151);const r={title:"Docker\ub97c \uc0ac\uc6a9\ud560 \ub54c DB URL \uc124\uc815\ud558\uae30",date:"2023-04-24",authors:"teddygood",draft:!1,slug:"/MongoDB-docker-connection",description:"DB URL \uc124\uc815\ud558\uae30",keywords:["docker","MongoDB"]},d=void 0,s={id:"etc/MongoDB-docker-connection",title:"Docker\ub97c \uc0ac\uc6a9\ud560 \ub54c DB URL \uc124\uc815\ud558\uae30",description:"DB URL \uc124\uc815\ud558\uae30",source:"@site/docs/etc/MongoDB-docker-connection.md",sourceDirName:"etc",slug:"/MongoDB-docker-connection",permalink:"/docs/MongoDB-docker-connection",draft:!1,unlisted:!1,editUrl:"https://github.com/teddygood/teddygood.github.io/tree/main/docs/etc/MongoDB-docker-connection.md",tags:[],version:"current",frontMatter:{title:"Docker\ub97c \uc0ac\uc6a9\ud560 \ub54c DB URL \uc124\uc815\ud558\uae30",date:"2023-04-24",authors:"teddygood",draft:!1,slug:"/MongoDB-docker-connection",description:"DB URL \uc124\uc815\ud558\uae30",keywords:["docker","MongoDB"]},sidebar:"sidebar",previous:{title:"WSL2\uc5d0\uc11c Jupyter Lab \uc2e4\ud589 \ubb38\uc81c \ud574\uacb0",permalink:"/docs/Jupyter-lab-tcgetpgrp-failed"},next:{title:"Hugo PaperMod theme \ud3f0\ud2b8 \ubcc0\uacbd",permalink:"/docs/change-font-in-papermod"}},i={},l=[{value:"\ud83e\udd14 \ubb38\uc81c",id:"-\ubb38\uc81c",level:2},{value:"\ud83d\udea9 \ud574\uacb0",id:"-\ud574\uacb0",level:2},{value:"\ud83c\udf10 References",id:"-references",level:2}];function a(e){const o={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(o.h2,{id:"-\ubb38\uc81c",children:"\ud83e\udd14 \ubb38\uc81c"}),"\n",(0,c.jsxs)(o.p,{children:[(0,c.jsx)(o.code,{children:".env"})," \ud30c\uc77c\uc5d0\uc11c ",(0,c.jsx)(o.code,{children:"DATABASE_URL=mongodb://localhost:27017"}),"\ub85c \uc124\uc815 \ud6c4 ",(0,c.jsx)(o.code,{children:"docker-compose up -d"})," \uba85\ub839\uc5b4\ub97c \uc0ac\uc6a9\ud558\ub2c8 \uc11c\ubc84\uc640 MongoDB\uac00 \uc5f0\uacb0\uc774 \ub418\uc9c0 \uc54a\ub294 \ud604\uc0c1\uc774 \ubc1c\uc0dd\ud588\ub2e4."]}),"\n",(0,c.jsx)(o.p,{children:"\ucc98\uc74c\uc5d0\ub294 \ud3ec\ud2b8\uac00 \uc0ac\uc6a9\uc911\uc778\uac00 \ud55c\ucc38\uc744 \uace0\ubbfc\ud588\ub2e4. \ubd84\uba85\ud788 \ub3c4\ucee4\uac00 \uc544\ub2cc \ub85c\uceec \ud658\uacbd\uc73c\ub85c \ub3cc\ub838\uc744 \ub54c\ub294 \uc798 \uc791\ub3d9\ub410\ub294\ub370 \uc65c \uc548 \ub418\ub294\uac00\uc5d0 \ub300\ud574 \uaf64 \ub9ce\uc740 \uc2dc\uac04\uc744 \uc18c\ube44\ud588\ub2e4."}),"\n",(0,c.jsx)(o.h2,{id:"-\ud574\uacb0",children:"\ud83d\udea9 \ud574\uacb0"}),"\n",(0,c.jsxs)(o.p,{children:["\ud574\uacb0\uc740 \uac04\ub2e8\ud588\ub2e4. ",(0,c.jsx)(o.code,{children:"localhost"}),"\ub97c \ud604\uc7ac \uc0ac\uc6a9\ud558\uace0 \uc788\ub294 \uc11c\ubc84\uc758 \ucee8\ud14c\uc774\ub108 \uc774\ub984\uc73c\ub85c \ubc14\uafd4\uc8fc\uba74 \ub41c\ub2e4."]}),"\n",(0,c.jsx)(o.pre,{children:(0,c.jsx)(o.code,{className:"language-bash",children:"docker ps\n"})}),"\n",(0,c.jsxs)(o.p,{children:["\uc704 \uba85\ub839\uc5b4\ub97c \ud1b5\ud574 \ud604\uc7ac \uc0ac\uc6a9\uc911\uc778 \ucee8\ud14c\uc774\ub108\uc758 \uc774\ub984\uc744 \ud655\uc778 \ud6c4 ",(0,c.jsx)(o.code,{children:".env"})," \ud30c\uc77c\uc758 ",(0,c.jsx)(o.code,{children:"DATABASE_URL"}),"\uc744 ",(0,c.jsx)(o.code,{children:"DATABASE_URL=mongodb://CONTAINER_NAME"}),"\ucc98\ub7fc \uc218\uc815\ud574\uc8fc\uba74 \ub41c\ub2e4."]}),"\n",(0,c.jsx)(o.h2,{id:"-references",children:"\ud83c\udf10 References"}),"\n",(0,c.jsxs)(o.ul,{children:["\n",(0,c.jsx)(o.li,{children:(0,c.jsx)(o.a,{href:"https://www.mongodb.com/compatibility/docker",children:"Docker and MongoDB"})}),"\n",(0,c.jsx)(o.li,{children:(0,c.jsx)(o.a,{href:"https://stackoverflow.com/questions/33336773/connecting-to-mongo-docker-container-from-host",children:"Connecting to mongo docker container from host"})}),"\n",(0,c.jsx)(o.li,{children:(0,c.jsx)(o.a,{href:"https://stackoverflow.com/questions/7744147/pymongo-keeps-refusing-the-connection-at-27017",children:"Pymongo keeps refusing the connection at 27017"})}),"\n"]})]})}function h(e={}){const{wrapper:o}={...(0,t.a)(),...e.components};return o?(0,c.jsx)(o,{...e,children:(0,c.jsx)(a,{...e})}):a(e)}},1151:(e,o,n)=>{n.d(o,{Z:()=>s,a:()=>d});var c=n(7294);const t={},r=c.createContext(t);function d(e){const o=c.useContext(r);return c.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function s(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),c.createElement(r.Provider,{value:o},e.children)}}}]);