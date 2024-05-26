"use strict";(self.webpackChunkmy_blog=self.webpackChunkmy_blog||[]).push([[9448],{3175:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>d,toc:()=>l});var n=r(5893),o=r(1151);const s={title:"\uac04\ub2e8\ud55c PyJWT \ub808\uac70\uc2dc \ucf54\ub4dc \uc218\uc815 \uacbd\ud5d8",date:"2021-06-02",authors:"teddygood",draft:!1,slug:"/AttributeError-str-decode",description:"\ud30c\uc774\uc36c \ub808\uac70\uc2dc \uc0bd\uc9c8\uae30\ub85d",keywords:["\ub808\uac70\uc2dc","\ud30c\uc774\uc36c","PyJWT","\uae54\ub054\ud55c \ud30c\uc774\uc36c \ud0c4\ud0c4\ud55c \ubc31\uc5d4\ub4dc"]},i=void 0,d={id:"Trouble Shooting/AttributeError-str-decode",title:"\uac04\ub2e8\ud55c PyJWT \ub808\uac70\uc2dc \ucf54\ub4dc \uc218\uc815 \uacbd\ud5d8",description:"\ud30c\uc774\uc36c \ub808\uac70\uc2dc \uc0bd\uc9c8\uae30\ub85d",source:"@site/wiki/Trouble Shooting/AttributeError-str-decode.md",sourceDirName:"Trouble Shooting",slug:"/AttributeError-str-decode",permalink:"/wiki/AttributeError-str-decode",draft:!1,unlisted:!1,editUrl:"https://github.com/teddygood/teddygood.github.io/tree/main/wiki/Trouble Shooting/AttributeError-str-decode.md",tags:[],version:"current",frontMatter:{title:"\uac04\ub2e8\ud55c PyJWT \ub808\uac70\uc2dc \ucf54\ub4dc \uc218\uc815 \uacbd\ud5d8",date:"2021-06-02",authors:"teddygood",draft:!1,slug:"/AttributeError-str-decode",description:"\ud30c\uc774\uc36c \ub808\uac70\uc2dc \uc0bd\uc9c8\uae30\ub85d",keywords:["\ub808\uac70\uc2dc","\ud30c\uc774\uc36c","PyJWT","\uae54\ub054\ud55c \ud30c\uc774\uc36c \ud0c4\ud0c4\ud55c \ubc31\uc5d4\ub4dc"]},sidebar:"sidebar",previous:{title:"MIG devices",permalink:"/wiki/MIG-devices"},next:{title:"WSL2\uc5d0\uc11c Jupyter Lab \uc2e4\ud589 \ubb38\uc81c \ud574\uacb0",permalink:"/wiki/Jupyter-lab-tcgetpgrp-failed-on-WSL2"}},c={},l=[{value:"\ud83e\udd14 \ubb38\uc81c",id:"-\ubb38\uc81c",level:2},{value:"\ud83d\udea9 \ud574\uacb0",id:"-\ud574\uacb0",level:2},{value:"\ud83c\udff4 \uac04\ub2e8\ud55c \uace0\ucc30",id:"-\uac04\ub2e8\ud55c-\uace0\ucc30",level:2},{value:"\ud83c\udf10 References",id:"-references",level:2}];function a(e){const t={a:"a",code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"-\ubb38\uc81c",children:"\ud83e\udd14 \ubb38\uc81c"}),"\n",(0,n.jsx)(t.p,{children:"PyJWT\ub97c \ud65c\uc6a9\ud558\uc5ec JWT(JSON Web Token)\ub97c \ub9cc\ub4e4\uace0 \uc788\uc5c8\ub294\ub370 \uc5d0\ub7ec\uac00 \ub5b4\ub2e4."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:"token = jwt.encode(payload, app.config['JWT_SECRET_KEY'], 'HS256')\n\nreturn jsonify({'access_token': token.decode('UTF-8')})\n"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"AttributeError: 'str' object has no attribute 'decode'\n"})}),"\n",(0,n.jsx)(t.p,{children:'"\ucc45\uc758 \ucf54\ub4dc\uc640 \ub611\uac19\uc774 \uc37c\ub294\ub370 \ubb50\uc9c0?"\ub77c\uace0 \uc0dd\uac01\ud558\uba74\uc11c \uc77c\ub2e8 \ucf54\ub4dc\ub97c \uc798\ubabb \uc37c\uc744 \uc218\ub3c4 \uc788\uc73c\ub2c8 \ucc45\uc5d0\uc11c \uc8fc\uc5b4\uc9c4 \ucf54\ub4dc\ub97c \ubcf5\ubd99\ud588\ub2e4. \uadf8\ub798\ub3c4 \uc5d0\ub7ec\ub294 \ub2e4\uc2dc \ub098\ud0c0\ub0ac\ub2e4.'}),"\n",(0,n.jsx)(t.h2,{id:"-\ud574\uacb0",children:"\ud83d\udea9 \ud574\uacb0"}),"\n",(0,n.jsx)(t.p,{children:"\uc5d0\ub7ec\uac00 \ub2e4\uc2dc \ub098\ud0c0\ub098\ub2c8 \ubc29\ubc95\uc740 \uad6c\uae00\ub9c1 \ubc16\uc5d0 \uc5c6\uc5c8\ub2e4. \ubc14\ub85c stackoverflow\uac00 \ub728\uae38\ub798 \ud574\uacb0\uc740 \uae54\ub054\ud558\uac8c \ub410\ub2e4."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:"token = jwt.encode(payload, app.config['JWT_SECRET_KEY'], 'HS256')\n\nreturn jsonify({'access_token': token})\n"})}),"\n",(0,n.jsx)(t.p,{children:"\uadf8\ub0e5 decode\ub97c \uc9c0\uc6cc\uc8fc\uba74 \ub418\ub294 \ubb38\uc81c\uc600\ub2e4. \uadfc\ub370 '\uc65c decode\uac00 \ubd99\uc5b4\uc788\ub358\uac78\uae4c?'\ub77c\ub294 \uc758\ubb38\uc774 \ub4e4\uc5c8\uace0 stackoverflow\ub97c \uacc4\uc18d \ud0d0\ud5d8\ud588\ub2e4."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"pyjwt-version-stackoverflow",src:r(8930).Z+"",width:"922",height:"429"})}),"\n",(0,n.jsx)(t.p,{children:"\ub300\ucda9 \ubc84\uc804\uacfc \uad00\ub828\uc788\uc5b4 \ubcf4\uc774\ub294 \ub2f5\ubcc0\uc744 \ubc1c\uacac\ud588\uace0, \ubc14\ub85c \uacf5\uc2dd\ubb38\uc11c\ub97c \uc77d\uc5b4\ubcf4\ub294 \ubc29\ubc95\uc744 \uc120\ud0dd\ud588\ub2e4. \ud604\uc7ac \ub0b4\uac00 \uc4f0\uace0 \uc788\ub294 \ubc84\uc804\uc740 2.1.0\uc73c\ub85c \uac00\uc7a5 \ucd5c\uadfc \ubc84\uc804\uc774\ub2e4. \uc800 \ucf54\ub4dc\uac00 \ub808\uac70\uc2dc \ucf54\ub4dc\ub77c\ub294 \uc608\uc0c1\uc744 \ud574\ubcf4\uace0 PyJWT \uacf5\uc2dd \ubb38\uc11c\uc758 Changelog\ub97c \uc77d\uc5b4\ubd24\ub2e4."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"jwt-encode-return-type",src:r(6260).Z+"",width:"396",height:"94"})}),"\n",(0,n.jsxs)(t.p,{children:["\uc5ed\uc2dc\ub098 \ub0b4 \uc608\uc0c1\uc740 \ub9de\uc558\ub2e4. v2.0.0\uc73c\ub85c \ubc14\ub00c\uba74\uc11c ",(0,n.jsx)(t.code,{children:"jwt.encode(...)"}),"\uc758 return type\uc774 \ubc14\ub00c\uc5c8\ub2e4\ub294 \uac83. \uc608\uc804\uc5d0\ub294 \ud1a0\ud070\uc758 \ud0c0\uc785\uc744 byte string\uc73c\ub85c return\ud588\uc5c8\ub358 \uac83 \uac19\ub2e4. \ud604\uc7ac\ub294 str \ud0c0\uc785\uc73c\ub85c return\ub418\uace0 \ud30c\uc774\uc36c\uc5d0\uc11c \ubaa8\ub4e0 \ubb38\uc790\uc5f4\uc740 UTF-8\uc774\ubbc0\ub85c \ub531\ud788 \uc800\uac78 decode\ud560 \ud544\uc694\uac00 \uc5c6\ub2e4\ub294 \uc758\ubbf8\uc774\ub2e4."]}),"\n",(0,n.jsx)(t.h2,{id:"-\uac04\ub2e8\ud55c-\uace0\ucc30",children:"\ud83c\udff4 \uac04\ub2e8\ud55c \uace0\ucc30"}),"\n",(0,n.jsx)(t.p,{children:"\uc5ed\uc2dc \ucc45\uc744 \uc77d\uc73c\uba74\uc11c \uacf5\ubd80\ud558\ub294 \ubc29\ubc95\ub3c4 \uc7a5\uc810\ub9cc \uc788\ub294 \uac83\uc774 \uc544\ub2c8\ub2e4. \uc5bc\ub9c8\ub098 \uc624\ub798 \ub410\ub290\ub0d0\uc5d0 \ub530\ub77c\uc11c \ub808\uac70\uc2dc \ucf54\ub4dc\uac00 \uc874\uc7ac\ud560 \uc218\ub3c4 \uc788\ub2e4. \ucc45\uc73c\ub85c \uacf5\ubd80\ud558\ub824\uba74 \uac00\uc7a5 \ucd5c\uadfc\uc5d0 \ub098\uc628 \ucc45\uc744 \uba3c\uc800 \uc77d\uc5b4\ubcf4\ub294 \uac83\uc774 \uc88b\uc744\ub4ef\ud558\ub2e4."}),"\n",(0,n.jsx)(t.h2,{id:"-references",children:"\ud83c\udf10 References"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://stackoverflow.com/questions/50979667/python-attributeerror-str-object-has-no-attribute-decode",children:"Python AttributeError: 'str' object has no attribute 'decode'"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://stackoverflow.com/questions/65798281/attributeerror-str-object-has-no-attribute-decode-python-error/",children:"AttributeError: 'str' object has no attribute 'decode' python error"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://pyjwt.readthedocs.io/en/latest/index.html",children:"PyJWT"})}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},6260:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/jwt-encode-return-type-b354f6e5bb4efc9de039c9466d24227e.jpg"},8930:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/pyjwt-version-stackoverflow-ef060e95bc786a79981e87bf213108db.jpg"},1151:(e,t,r)=>{r.d(t,{Z:()=>d,a:()=>i});var n=r(7294);const o={},s=n.createContext(o);function i(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);