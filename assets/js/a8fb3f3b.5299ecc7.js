"use strict";(self.webpackChunkmy_blog=self.webpackChunkmy_blog||[]).push([[5336],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>d});var n=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var m=n.createContext({}),o=function(e){var t=n.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},u=function(e){var t=o(e.components);return n.createElement(m.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},N=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,i=e.originalType,m=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),N=o(a),d=l,s=N["".concat(m,".").concat(d)]||N[d]||k[d]||i;return a?n.createElement(s,r(r({ref:t},u),{},{components:a})):n.createElement(s,r({ref:t},u))}));function d(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=a.length,r=new Array(i);r[0]=N;var p={};for(var m in t)hasOwnProperty.call(t,m)&&(p[m]=t[m]);p.originalType=e,p.mdxType="string"==typeof e?e:l,r[1]=p;for(var o=2;o<i;o++)r[o]=a[o];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}N.displayName="MDXCreateElement"},689:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>r,default:()=>k,frontMatter:()=>i,metadata:()=>p,toc:()=>o});var n=a(7462),l=(a(7294),a(3905));const i={title:"Data Engineering \uc2a4\ud130\ub514 6\uc8fc\ucc28",date:"2021-09-29",draft:!1,description:"PseudoLab Data Science Fellowship 1\uae30",sidebar_position:1},r="Introduction to Shell",p={unversionedId:"Group-Study/data-engineering/data-engineer-with-python-week-06",id:"Group-Study/data-engineering/data-engineer-with-python-week-06",title:"Data Engineering \uc2a4\ud130\ub514 6\uc8fc\ucc28",description:"PseudoLab Data Science Fellowship 1\uae30",source:"@site/docs/Group-Study/data-engineering/data-engineer-with-python-week-06.md",sourceDirName:"Group-Study/data-engineering",slug:"/Group-Study/data-engineering/data-engineer-with-python-week-06",permalink:"/docs/Group-Study/data-engineering/data-engineer-with-python-week-06",draft:!1,editUrl:"https://github.com/teddygood/teddygood.github.io/tree/main/docs/Group-Study/data-engineering/data-engineer-with-python-week-06.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Data Engineering \uc2a4\ud130\ub514 6\uc8fc\ucc28",date:"2021-09-29",draft:!1,description:"PseudoLab Data Science Fellowship 1\uae30",sidebar_position:1},sidebar:"sidebar",previous:{title:"Data Engineering \uc2a4\ud130\ub514 4\uc8fc\ucc28",permalink:"/docs/Group-Study/data-engineering/data-engineer-with-python-week-04"},next:{title:"Data Engineering \uc2a4\ud130\ub514 7\uc8fc\ucc28",permalink:"/docs/Group-Study/data-engineering/data-engineer-with-python-week-07"}},m={},o=[{value:"Manipulating files and directories",id:"manipulating-files-and-directories",level:2},{value:"\uc808\ub300 \uacbd\ub85c \uc0c1\ub300 \uacbd\ub85c",id:"\uc808\ub300-\uacbd\ub85c-\uc0c1\ub300-\uacbd\ub85c",level:3},{value:"Commands",id:"commands",level:3},{value:"Manipulating data",id:"manipulating-data",level:2},{value:"Combining tools",id:"combining-tools",level:2},{value:"Batch processing",id:"batch-processing",level:2},{value:"Creating new tools",id:"creating-new-tools",level:2}],u={toc:o};function k(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"introduction-to-shell"},"Introduction to Shell"),(0,l.kt)("h2",{id:"manipulating-files-and-directories"},"Manipulating files and directories"),(0,l.kt)("h3",{id:"\uc808\ub300-\uacbd\ub85c-\uc0c1\ub300-\uacbd\ub85c"},"\uc808\ub300 \uacbd\ub85c \uc0c1\ub300 \uacbd\ub85c"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"absolute path",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\ud30c\uc77c\uc774 \uac16\uace0 \uc788\ub294 \uace0\uc720\ud55c \uacbd\ub85c"))),(0,l.kt)("li",{parentName:"ul"},"relative path",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\ud604\uc7ac \uc704\uce58\ub97c \uae30\uc900\uc73c\ub85c \ud558\ub294 \uc0c1\ub300\uc801\uc778 \uacbd\ub85c")))),(0,l.kt)("h3",{id:"commands"},"Commands"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"cp"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"spring.csv \ubc0f summer.csv\ub97c \ud604\uc7ac \uc791\uc5c5 \ub514\ub809\ud1a0\ub9ac(/home/repl)\ub97c \ubcc0\uacbd\ud558\uc9c0 \uc54a\uace0 \ubc31\uc5c5 \ub514\ub809\ud1a0\ub9ac\ub85c \ubcf5\uc0ac",(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"cp seasonal/spring.csv seasonal/summer.csv backup\n"))))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"mv"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\ud30c\uc77c \uc774\ub3d9 + \uc774\ub984 \ubcc0\uacbd",(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"mv winter.csv winter.csv.bck\n"))))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"ls"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"-R"),": \ud558\uc704 \ub514\ub809\ud1a0\ub9ac\uae4c\uc9c0 \ubcf4\uc5ec\uc900\ub2e4."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"-F"),": \uc2e4\ud589 \ud30c\uc77c *, \ub514\ub809\ud1a0\ub9ac /, \uc18c\ucf13 =, \ub9c1\ud06c @ \ub4f1\uc73c\ub85c \ud30c\uc77c \uc774\ub984\uc758 \ub4a4\uc5d0 \ucd94\uac00 \ucd9c\ub825\ud55c\ub2e4."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"~"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"home directory")),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"ls ~\n")))),(0,l.kt)("h2",{id:"manipulating-data"},"Manipulating data"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"less"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\ud30c\uc77c \ub0b4\uc6a9\uc744 \ud655\uc778\ud558\ub294 \uba85\ub839\uc5b4"),(0,l.kt)("li",{parentName:"ul"},"more\uc640\uc758 \ucc28\uc774\uc810",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\ud55c \ubc88\uc5d0 \ubcf4\uc5ec\uc9c0\ub294 \ub9cc\ud07c\ub9cc \uc77d\uc5b4\uc11c \ucd9c\ub825"),(0,l.kt)("li",{parentName:"ul"},"more\ub294 \uc544\ub798\ub85c\ub9cc \ud398\uc774\uc9c0 \uc774\ub3d9 \uac00\ub2a5(\uc9c0\ub098\uac04 \ub0b4\uc6a9\uc744 \ubcfc \uc218 \uc5c6\uc74c), less\ub294 \uc704, \uc544\ub798 \ud398\uc774\uc9c0 \uc774\ub3d9\uc774 \uac00\ub2a5"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},":n"),": \ud398\uc774\uc9c0 \uc774\ub3d9"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},":q"),": \uc885\ub8cc"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"head"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\ud30c\uc77c\uc758 \uc55e\ubd80\ubd84\uc744 \uc9c0\uc815\ud55c\ub9cc\ud07c \ucd9c\ub825"),(0,l.kt)("li",{parentName:"ul"},"\uae30\ubcf8\uc740 10\uc904"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"-n"),"\uc744 \uc0ac\uc6a9\ud558\uc5ec \uc6d0\ud558\ub294 \ub77c\uc778\uae4c\uc9c0 \ud655\uc778",(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"head -n 5 seasonal/summer.csv\n"))))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"! \ub4a4\uc5d0 \uba85\ub839\uc5b4 \ub123\uc73c\uba74 \uc7ac\uc2e4\ud589")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"tail"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\ud30c\uc77c\uc758 \ub4b7\ubd80\ubd84\uc744 \uc9c0\uc815\ud55c\ub9cc\ud07c \ucd9c\ub825"),(0,l.kt)("li",{parentName:"ul"},"\uae30\ubcf8\uc740 10\uc904"),(0,l.kt)("li",{parentName:"ul"},"\uc22b\uc790 \uc55e\uc5d0 ",(0,l.kt)("inlineCode",{parentName:"li"},"+"),"\uac00 \uc788\uc744 \uacbd\uc6b0 K\ubc88\uc9f8\uae4c\uc9c0 \ucd9c\ub825",(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"tail -n +7 seasonal/spring.csv\n"))))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"history"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\uc9c0\uae08\uae4c\uc9c0 \uc4f4 \uba85\ub839\uc5b4\ub4e4 \ucd9c\ub825"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"grep"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"-c"),": \ud30c\uc77c \ub2f9 \ud328\ud134\uc774 \uc77c\uce58\ud558\ub294 \ub77c\uc778 \uac1c\uc218 \ucd9c\ub825"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"-h"),": \uacb0\uacfc \ucd9c\ub825 \uc2dc \ud30c\uc77c \uc774\ub984 \ubb34\uc2dc"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"-i"),": \ub300\uc18c\ubb38\uc790 \ubb34\uc2dc"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"-l"),": \ud328\ud134\uc774 \uc874\uc7ac\ud558\ub294 \ud30c\uc77c \uc774\ub984\ub9cc \ud45c\uc2dc"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"-n"),": \uacb0\uacfc \ucd9c\ub825 \uc2dc \ub77c\uc778 \uc55e\uc5d0 \ub77c\uc778 \ubc88\ud638 \ucd9c\ub825"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"-v"),": \ub9e4\uce6d\ub418\ub294 \ud328\ud134\uc774 \uc874\uc7ac\ud558\uc9c0 \uc54a\ub294 \ub77c\uc778 \uc120\ud0dd")))),(0,l.kt)("h2",{id:"combining-tools"},"Combining tools"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"redirection"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},">"),": \uae30\uc874 \ud30c\uc77c\uc758 \ub0b4\uc6a9 \uc0ad\uc81c\ud558\uace0 \uc0c8\ub85c\uc6b4 \uacb0\uacfc \uc800\uc7a5"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"pipe"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\uc55e \uba85\ub839\uc5b4\uc758 \uacb0\uacfc\ub97c \ub4a4\uc5d0 \ub098\uc624\ub294 \uba85\ub839\uc5b4\uc758 \uc785\ub825\uc73c\ub85c \ucc98\ub9ac\ud558\uae30 \uc704\ud574 \uc0ac\uc6a9"),(0,l.kt)("li",{parentName:"ul"},"\uba85\ub839\uc5b4\ub97c \uc870\ud569\ud558\uc5ec \uc0ac\uc6a9 \uac00\ub2a5")),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"wc -l seasonal/*.csv | grep -v total | sort -n | head -n 1\n"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"wc(word count)"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\ud30c\uc77c \ub0b4 \ubb38\uc790, \ub77c\uc778, \ub2e8\uc5b4 \uc218\ub97c \ucd9c\ub825"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"-c"),": \ubb38\uc790 \uc218"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"-l"),": \ub77c\uc778 \uc218"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"-w"),": \ub2e8\uc5b4 \uc218"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"cut"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\uac01 \uc904\ub9c8\ub2e4 \ud544\uc694\ud55c \ubd80\ubd84\ub9cc \uc798\ub77c\uc11c \ubc18\ud658"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"-d"),": \uad6c\ubd84\uc790"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"-f"),": \ucd94\ucd9c\ud560 \uad6c\uac04"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"sort"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"-n"),": \uc22b\uc790\ub85c \uc815\ub82c"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"-r"),": \uc5ed\uc21c"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"uniq"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\uc911\ubcf5\ub41c \ub0b4\uc6a9\uc758 \ud589\uc774 \uc5f0\uc18d\uc73c\ub85c \uc788\uc73c\uba74 \ud558\ub098\ub9cc \ub0a8\uae30\uace0 \uc0ad\uc81c"),(0,l.kt)("li",{parentName:"ul"},"\uc815\ub82c\ud558\uc5ec \uc21c\ucc28\uc801\uc73c\ub85c \ub9cc\ub4e0 \ud6c4 \uc0ac\uc6a9"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"-c"),": \uac19\uc740 \ub77c\uc778\uc774 \uba87 \ubc88 \ub098\uc624\ub294\uc9c0 \ud45c\uc2dc")))),(0,l.kt)("h2",{id:"batch-processing"},"Batch processing"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"set"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\ub85c\uceec \ud658\uacbd\ubcc0\uc218 \uc870\ud68c"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"echo"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\ubb38\uc790\uc5f4\uc744 \uadf8\ub300\ub85c \ud654\uba74\uc5d0 \ucd9c\ub825"),(0,l.kt)("li",{parentName:"ul"},"\ud658\uacbd \ubcc0\uc218\ub97c \ucd9c\ub825\ud560 \uc218\ub3c4 \uc788\ub2e4."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\ubcc0\uc218"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"="),"\uc744 \uc0ac\uc6a9\ud558\uc5ec \ub300\uc785\uc5f0\uc0b0",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\uc0ac\uc6a9 \uc608\uc81c")),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"testing=seasonal/winter.csv\nhead -n 1 $testing\n"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"$@"),": \uc785\ub825\ub41c \ubcc0\uc218\ub97c \uacf5\ubc31\uc73c\ub85c \uad6c\ubd84\ub41c \ubcc4\ub3c4\uc758 \ubb38\uc790\uc5f4\ub85c \ucde8\uae09"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\ud55c \uc904\uc5d0\uc11c \uc5ec\ub7ec \uba85\ub839\uc5b4\ub97c \uc218\ud589\ud558\uace0 \uc2f6\uc740 \uacbd\uc6b0 \uc138\ubbf8\ucf5c\ub860\uc744 \ub05d\uc5d0 \ubd99\uc5ec\uc900\ub2e4.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\ubc18\ubcf5\ubb38"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"for filetype in docx odt pdf\ndo\n    echo $filetype\ndone\n")),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"for filetype in docx odt pdf; do echo $filetype; done\n"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"wildcard character"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\ud2b9\uc815\ud55c \ud328\ud134\uc774 \uc788\ub294 \ubb38\uc790\uc5f4\uc774\ub098 \ud30c\uc77c\uc744 \ucc3e\uac70\ub098 \uae34 \uc774\ub984\uc744 \uc0dd\ub7b5\ud560 \ub54c \uc0ac\uc6a9"),(0,l.kt)("li",{parentName:"ul"},"\ub2e4\uc591\ud55c \ubb38\uc790\ub4e4\uc774 \uc788\uc74c "),(0,l.kt)("li",{parentName:"ul"},"\uc608\uc81c",(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"files=seasonal/*.csv\nfor f in files; do echo $f; done\n")))))),(0,l.kt)("h2",{id:"creating-new-tools"},"Creating new tools"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"nano \uc0ac\uc6a9",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Ctrl + K"),": \ub77c\uc778 \uc0ad\uc81c"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Ctrl + O"),": \ud30c\uc77c \uc800\uc7a5"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Ctrl + X"),": \uc5d0\ub514\ud130 \ub098\uac00\uae30")))))}k.isMDXComponent=!0}}]);