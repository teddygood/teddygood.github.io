"use strict";(self.webpackChunkmy_blog=self.webpackChunkmy_blog||[]).push([[6576],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>y});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=o.createContext({}),p=function(e){var t=o.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=p(e.components);return o.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(r),y=n,b=u["".concat(i,".").concat(y)]||u[y]||d[y]||a;return r?o.createElement(b,l(l({ref:t},s),{},{components:r})):o.createElement(b,l({ref:t},s))}));function y(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,l=new Array(a);l[0]=u;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:n,l[1]=c;for(var p=2;p<a;p++)l[p]=r[p];return o.createElement.apply(null,l)}return o.createElement.apply(null,r)}u.displayName="MDXCreateElement"},2849:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>p});var o=r(7462),n=(r(7294),r(3905));const a={title:"AttributeError: 'str' object has no attribute 'decode'",date:"2021-06-02",authors:"teddygood",tags:["\uc0bd\uc9c8\uae30\ub85d"],draft:!1,description:"\ud30c\uc774\uc36c \ub808\uac70\uc2dc \uc0bd\uc9c8\uae30\ub85d",keywords:["\ub808\uac70\uc2dc","\ud30c\uc774\uc36c","PyJWT","\uae54\ub054\ud55c \ud30c\uc774\uc36c \ud0c4\ud0c4\ud55c \ubc31\uc5d4\ub4dc"],sidebar_position:1},l=void 0,c={permalink:"/blog/python/AttributeError-str-decode",editUrl:"https://github.com/teddygood/teddygood.github.io/blog/python/AttributeError-str-decode.md",source:"@site/blog/python/AttributeError-str-decode.md",title:"AttributeError: 'str' object has no attribute 'decode'",description:"\ud30c\uc774\uc36c \ub808\uac70\uc2dc \uc0bd\uc9c8\uae30\ub85d",date:"2021-06-02T00:00:00.000Z",formattedDate:"2021\ub144 6\uc6d4 2\uc77c",tags:[{label:"\uc0bd\uc9c8\uae30\ub85d",permalink:"/blog/tags/\uc0bd\uc9c8\uae30\ub85d"}],hasTruncateMarker:!1,authors:[{name:"Chanho Lee",title:"\ub2e4\uc591\ud55c \ubd84\uc57c\ub97c \uacf5\ubd80\ud558\ub294 \uac83\uc774 \uc88b\uc740 \ud559\uc0dd",url:"https://github.com/teddygood",imageURL:"https://github.com/teddygood.png",key:"teddygood"}],frontMatter:{title:"AttributeError: 'str' object has no attribute 'decode'",date:"2021-06-02",authors:"teddygood",tags:["\uc0bd\uc9c8\uae30\ub85d"],draft:!1,description:"\ud30c\uc774\uc36c \ub808\uac70\uc2dc \uc0bd\uc9c8\uae30\ub85d",keywords:["\ub808\uac70\uc2dc","\ud30c\uc774\uc36c","PyJWT","\uae54\ub054\ud55c \ud30c\uc774\uc36c \ud0c4\ud0c4\ud55c \ubc31\uc5d4\ub4dc"],sidebar_position:1},prevItem:{title:"\uae54\ub054\ud55c \ud30c\uc774\uc36c \ud0c4\ud0c4\ud55c \ubc31\uc5d4\ub4dc",permalink:"/blog/review/python-backend-flask"},nextItem:{title:"Build package cryptography",permalink:"/blog/python/python-lib-cryptography"}},i={authorsImageUrls:[void 0]},p=[{value:"decode \uc5d0\ub7ec",id:"decode-\uc5d0\ub7ec",level:2},{value:"\ud574\uacb0",id:"\ud574\uacb0",level:2},{value:"\ub290\ub080\uc810",id:"\ub290\ub080\uc810",level:2},{value:"References",id:"references",level:2}],s={toc:p};function d(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,o.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"decode-\uc5d0\ub7ec"},"decode \uc5d0\ub7ec"),(0,n.kt)("p",null,"PyJWT\ub97c \ud65c\uc6a9\ud558\uc5ec JWT\ub97c \ub9cc\ub4e4\uace0 \uc788\uc5c8\ub294\ub370 \ubd84\uba85\ud788 \ucc45\uc5d0\uc11c \ub530\ub77c\ud55c \ucf54\ub4dc\uac00 \ub9de\ub294\ub370 \uc5d0\ub7ec\uac00 \ub5b4\ub2e4."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"token = jwt.encode(payload, app.config['JWT_SECRET_KEY'], 'HS256')\n\nreturn jsonify({'access_token': token.decode('UTF-8')})\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"AttributeError: 'str' object has no attribute 'decode'\n")),(0,n.kt)("p",null,'"\ubb50\uc9c0?"\ub77c\uace0 \uc0dd\uac01\ud558\uba74\uc11c \uc77c\ub2e8 \ucf54\ub4dc\ub97c \uc798\ubabb \uc37c\uc744 \uc218\ub3c4 \uc788\uc73c\ub2c8 \ucc45\uc5d0\uc11c \uc8fc\uc5b4\uc9c4 \ucf54\ub4dc\ub97c \ubcf5\ubd99\ud588\ub2e4. \uadf8\ub798\ub3c4 \uc5d0\ub7ec\ub294 \ub2e4\uc2dc \ub098\ud0c0\ub0ac\ub2e4.'),(0,n.kt)("h2",{id:"\ud574\uacb0"},"\ud574\uacb0"),(0,n.kt)("p",null,"\uc5d0\ub7ec\uac00 \ub2e4\uc2dc \ub098\ud0c0\ub098\ub2c8 \ubc29\ubc95\uc740 \uad6c\uae00\ub9c1 \ubc16\uc5d0 \uc5c6\uc5c8\ub2e4. \ubc14\ub85c stackoverflow\uac00 \ub728\uae38\ub798 \ud574\uacb0\uc740 \uae54\ub054\ud558\uac8c \ub410\ub2e4."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"token = jwt.encode(payload, app.config['JWT_SECRET_KEY'], 'HS256')\n\nreturn jsonify({'access_token': token})\n")),(0,n.kt)("p",null,"\uadf8\ub0e5 decode\ub97c \uc9c0\uc6cc\uc8fc\uba74 \ub418\ub294 \ubb38\uc81c\uc600\ub2e4. \uadfc\ub370 '\uc65c decode\uac00 \ubd99\uc5b4\uc788\ub358\uac78\uae4c?'\ub77c\ub294 \uc758\ubb38\uc774 \ub4e4\uc5c8\uace0 stackoverflow\ub97c \uacc4\uc18d \ud0d0\ud5d8\ud588\ub2e4."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"pyjwt-version-stackoverflow",src:r(6276).Z,width:"922",height:"429"})),(0,n.kt)("p",null,"\ub300\ucda9 \ubc84\uc804\uacfc \uad00\ub828\uc788\uc5b4 \ubcf4\uc774\ub294 \ub2f5\ubcc0\uc744 \ubc1c\uacac\ud588\uace0, \ubc14\ub85c \uacf5\uc2dd\ubb38\uc11c\ub97c \uc77d\uc5b4\ubcf4\ub294 \ubc29\ubc95\uc744 \uc120\ud0dd\ud588\ub2e4. \ud604\uc7ac \ub0b4\uac00 \uc4f0\uace0 \uc788\ub294 \ubc84\uc804\uc740 2.1.0\uc73c\ub85c \uac00\uc7a5 \ucd5c\uadfc \ubc84\uc804\uc774\ub2e4. \uc800 \ucf54\ub4dc\uac00 \ub808\uac70\uc2dc \ucf54\ub4dc\ub77c\ub294 \uc608\uc0c1\uc744 \ud574\ubcf4\uace0 PyJWT \uacf5\uc2dd \ubb38\uc11c\uc758 Changelog\ub97c \uc77d\uc5b4\ubd24\ub2e4."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"jwt-encode-return-type",src:r(8467).Z,width:"396",height:"94"})),(0,n.kt)("p",null,"\uc5ed\uc2dc\ub098 \ub0b4 \uc608\uc0c1\uc740 \ub9de\uc558\ub2e4. v2.0.0\uc73c\ub85c \ubc14\ub00c\uba74\uc11c ",(0,n.kt)("inlineCode",{parentName:"p"},"jwt.encode(...)"),"\uc758 return type\uc774 \ubc14\ub00c\uc5c8\ub2e4\ub294 \uac83. \uc608\uc804\uc5d0\ub294 \ud1a0\ud070\uc758 \ud0c0\uc785\uc744 byte string\uc73c\ub85c return\ud588\uc5c8\ub358 \uac83 \uac19\ub2e4. \ud604\uc7ac\ub294 str \ud0c0\uc785\uc73c\ub85c return\ub418\uace0 \ud30c\uc774\uc36c\uc5d0\uc11c \ubaa8\ub4e0 \ubb38\uc790\uc5f4\uc740 UTF-8\uc774\ubbc0\ub85c \ub531\ud788 \uc800\uac78 decode\ud560 \ud544\uc694\uac00 \uc5c6\ub2e4\ub294 \uc758\ubbf8\uc774\ub2e4."),(0,n.kt)("h2",{id:"\ub290\ub080\uc810"},"\ub290\ub080\uc810"),(0,n.kt)("p",null,"\uc5ed\uc2dc \ucc45\uc744 \uc77d\uc73c\uba74\uc11c \uacf5\ubd80\ud558\ub294 \ubc29\ubc95\ub3c4 \uc7a5\uc810\ub9cc \uc788\ub294 \uac83\uc774 \uc544\ub2c8\ub2e4. \uc5bc\ub9c8\ub098 \uc624\ub798 \ub410\ub290\ub0d0\uc5d0 \ub530\ub77c\uc11c \ub808\uac70\uc2dc \ucf54\ub4dc\uac00 \uc874\uc7ac\ud560 \uc218\ub3c4 \uc788\ub2e4. \ucc45\uc73c\ub85c \uacf5\ubd80\ud558\ub824\uba74 \uac00\uc7a5 \ucd5c\uadfc\uc5d0 \ub098\uc628 \ucc45\uc744 \uba3c\uc800 \uc77d\uc5b4\ubcf4\ub294 \uac83\uc774 \uc88b\uc744\ub4ef\ud558\ub2e4."),(0,n.kt)("h2",{id:"references"},"References"),(0,n.kt)("blockquote",null,(0,n.kt)("ul",{parentName:"blockquote"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://stackoverflow.com/questions/50979667/python-attributeerror-str-object-has-no-attribute-decode"},"stackoverflow")," "),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://stackoverflow.com/questions/65798281/attributeerror-str-object-has-no-attribute-decode-python-error/66065560#66065560"},"stackoverflow")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://pyjwt.readthedocs.io/en/latest/index.html"},"PyJWT")))))}d.isMDXComponent=!0},8467:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/jwt-encode-return-type-b354f6e5bb4efc9de039c9466d24227e.jpg"},6276:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/pyjwt-version-stackoverflow-ef060e95bc786a79981e87bf213108db.jpg"}}]);