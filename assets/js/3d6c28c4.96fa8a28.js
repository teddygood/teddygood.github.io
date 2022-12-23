"use strict";(self.webpackChunkmy_blog=self.webpackChunkmy_blog||[]).push([[9299],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>k});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),m=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},s=function(e){var t=m(e.components);return n.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=m(a),k=r,c=d["".concat(o,".").concat(k)]||d[k]||u[k]||i;return a?n.createElement(c,l(l({ref:t},s),{},{components:a})):n.createElement(c,l({ref:t},s))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=d;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:r,l[1]=p;for(var m=2;m<i;m++)l[m]=a[m];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},406:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>p,toc:()=>m});var n=a(7462),r=(a(7294),a(3905));const i={title:"Data Engineering \uc2a4\ud130\ub514 16\uc8fc\ucc28",date:"2021-12-06",draft:!1,description:"PseudoLab Data Science Fellowship 1\uae30",sidebar_position:1},l="Building Data Engineering Pipelines in Python",p={unversionedId:"Group-Study/data-engineering/data-engineer-with-python-week-16",id:"Group-Study/data-engineering/data-engineer-with-python-week-16",title:"Data Engineering \uc2a4\ud130\ub514 16\uc8fc\ucc28",description:"PseudoLab Data Science Fellowship 1\uae30",source:"@site/docs/Group-Study/data-engineering/data-engineer-with-python-week-16.md",sourceDirName:"Group-Study/data-engineering",slug:"/Group-Study/data-engineering/data-engineer-with-python-week-16",permalink:"/docs/Group-Study/data-engineering/data-engineer-with-python-week-16",draft:!1,editUrl:"https://github.com/teddygood/teddygood.github.io/tree/main/docs/Group-Study/data-engineering/data-engineer-with-python-week-16.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Data Engineering \uc2a4\ud130\ub514 16\uc8fc\ucc28",date:"2021-12-06",draft:!1,description:"PseudoLab Data Science Fellowship 1\uae30",sidebar_position:1},sidebar:"sidebar",previous:{title:"Data Engineering \uc2a4\ud130\ub514 15\uc8fc\ucc28",permalink:"/docs/Group-Study/data-engineering/data-engineer-with-python-week-15"},next:{title:"Data Engineering \uc2a4\ud130\ub514 20\uc8fc\ucc28",permalink:"/docs/Group-Study/data-engineering/data-engineer-with-python-week-20"}},o={},m=[{value:"Ingesting Data",id:"ingesting-data",level:2},{value:"Data lake",id:"data-lake",level:3},{value:"Singer",id:"singer",level:3},{value:"Creating a data transformation pipeline with PySpark",id:"creating-a-data-transformation-pipeline-with-pyspark",level:2},{value:"Testing your data pipeline",id:"testing-your-data-pipeline",level:2},{value:"Managing and orchestrating a workflow",id:"managing-and-orchestrating-a-workflow",level:2}],s={toc:m};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"building-data-engineering-pipelines-in-python"},"Building Data Engineering Pipelines in Python"),(0,r.kt)("p",null,"16\uc8fc\ucc28\uc5d0 \ub4e4\uc5c8\ub358 \uac15\uc758\ub294 \uc800\ud76c\uac00 \uc218\uac15\ud558\uace0 \uc788\ub294 career track\uc778 ",(0,r.kt)("inlineCode",{parentName:"p"},"Data Engineer with Python"),'\uc5d0\uc11c \uc0ac\ub77c\uc9c4 course\uc785\ub2c8\ub2e4. \ucd1d 6\uac1c\uc758 course\uac00 \uc0ac\ub77c\uc84c\uc73c\uba70 \uc544\uc9c1\uae4c\uc9c0 Old Track\uc73c\ub85c \ub4e4\uc744 \uc218 \uc788\uc9c0\ub9cc, \uc2a4\ud130\ub514\uc5d0\uc11c "New Track\uc73c\ub85c \uc5c5\ub370\uc774\ud2b8 \ub418\uba74\uc11c \uc0ac\ub77c\uc9c0\ub294 \uac15\uc758\ub4e4\uc740 \ub118\uc5b4\uac00\uc790."\ub77c\uace0 \uacb0\uc815\ub418\uc5c8\uae30 \ub54c\ubb38\uc5d0 16\uc8fc\ucc28\ub294 \ub354\uc774\uc0c1 \uc815\ub9ac\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4. \ub610\ud55c, \uc774\uc81c \uace7 \uc5f0\ub9d0\uc774\ub77c \uc800\ud76c\uac00 \uc9c4\ud589\ud558\ub358 Datacamp \uc2a4\ud130\ub514\ub294 \uc7a0\uc2dc \uc26c\uace0, \uc2a4\ud130\ub514 \uc2dc\uc791\ud55c\uc9c0 20\uc8fc\uc778 2022\ub144 1\uc6d4 6\uc77c\uc5d0 ',(0,r.kt)("inlineCode",{parentName:"p"},"Introduction to AWS Boto in Python"),"\ub85c \ub2e4\uc2dc \uc2dc\uc791\ud569\ub2c8\ub2e4."),(0,r.kt)("h2",{id:"ingesting-data"},"Ingesting Data"),(0,r.kt)("h3",{id:"data-lake"},"Data lake"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\uc624\ub298\ub0a0 \ub370\uc774\ud130\uc758 \uaddc\ubaa8\uc640 \ub370\uc774\ud130\uac00 \ud750\ub974\ub294 \uc18d\ub3c4\ub294 ",(0,r.kt)("inlineCode",{parentName:"p"},"data lake"),"\uc758 \ubd80\uc0c1\uc73c\ub85c \uc774\uc5b4\uc9d0"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\uc5ec\ub7ec \uc2dc\uc2a4\ud15c\uc73c\ub85c \uad6c\uc131\ub418\uba70 \uc77c\ubc18\uc801\uc73c\ub85c \uc5ec\ub7ec \uc601\uc5ed\uc73c\ub85c \uad6c\uc131\ub428",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\ud30c\uc774\ud504\ub77c\uc778\uc740 \uc124\uacc4\ud558\ub294 \uc0ac\ub78c\uc5d0 \ub530\ub77c \uc5b8\uc81c\ub4e0\uc9c0 \ub2ec\ub77c\uc9c8 \uc218 \uc788\uc73c\uba70, \uc774 \uacfc\uc815\uc774 \uc815\uc758\ub418\uc5b4 \uc9c4 \uac83\uc774 \uc544\ub2d8"),(0,r.kt)("li",{parentName:"ul"},"Landing",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\uc6b4\uc601\uccb4\uc81c\uc5d0\uc11c data lake\ub85c \ub370\uc774\ud130\ub97c \uac00\uc838\uc624\ub294 \uacfc\uc815\uc744 ingestion\uc774\ub77c\uace0 \ud568"),(0,r.kt)("li",{parentName:"ul"},"\uc608\uce21(predictive) \uc54c\uace0\ub9ac\uc998\uacfc \ub9c8\ucf00\ud305 \ud300\uc744 \uc704\ud55c A/B test dashboard \ub4f1 \ub370\uc774\ud130 \ub808\uc774\ud06c \uc704\uc5d0 \ub2e4\uc591\ud55c \uc885\ub958\uc758 \uc11c\ube44\uc2a4\ub97c \uad6c\ucd95"),(0,r.kt)("li",{parentName:"ul"},"raw data"))),(0,r.kt)("li",{parentName:"ul"},"Clean",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\ub370\uc774\ud130\ub97c \ubcc0\ud658\ud560 \ub54c, \ubcc0\ud658\uc758 \uc911\ubcf5\uc744 \ubc29\uc9c0\ud558\uae30 \uc704\ud574 \ud558\ub294 \uc791\uc5c5"))),(0,r.kt)("li",{parentName:"ul"},"Business",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"cleaning \ub41c \ub370\uc774\ud130\uc5d0 \ub610 \ub2e4\ub978 \ubcc0\ud658 \uc801\uc6a9"),(0,r.kt)("li",{parentName:"ul"},"\uc774\ud0c8 \ud560 \uac00\ub2a5\uc131\uc774 \uc788\ub294 \uace0\uac1d \uc608\uce21"),(0,r.kt)("li",{parentName:"ul"},"\ub3c4\uba54\uc778\ub9c8\ub2e4 \ud2b9\uc815 \ub370\uc774\ud130\ub97c business layer\uc5d0 \ub370\uc774\ud130 \uc800\uc7a5"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"data lake"),"\ub97c \ud0d0\uc0c9\ud558\uae30 \uc704\ud574 \uc77c\ubc18\uc801\uc73c\ub85c ",(0,r.kt)("inlineCode",{parentName:"li"},"data catalog"),"\uac00 \uc81c\uacf5\ub428",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\ub370\uc774\ud130 \uc704\uce58\uc640 \uc800\uc7a5\ub418\ub294 \ud615\uc2dd\uc5d0 \ub300\ud55c \uc138\ubd80 \uc815\ubcf4\ub97c \ucd94\uc0c1\ud654"),(0,r.kt)("li",{parentName:"ul"},"data catalog\ub97c \ucc38\uc870\ud558\uba74 \ucf54\ub4dc\ub97c \ud558\ub4dc\ucf54\ub529 \ud558\uc9c0 \uc54a\uc544\ub3c4 \ub428",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"\ud558\ub4dc\ucf54\ub529"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\ub370\uc774\ud130\ub97c \ucf54\ub4dc \ub0b4\ubd80\uc5d0 \uc9c1\uc811 \uc785\ub825\ud558\ub294 \uac83"),(0,r.kt)("li",{parentName:"ul"},"\uae30\uc220\uc801\uc73c\ub85c\ub294 \ub370\uc774\ud130\uac00 \uc2e4\ud589 \ubc14\uc774\ub108\ub9ac(exe \ud30c\uc77c \ub4f1)\uc5d0 \ud569\uccd0\uc838 \uc788\ub294 \uc0c1\ud0dc"),(0,r.kt)("li",{parentName:"ul"},"\uc8fc\ub85c \ud30c\uc77c \uacbd\ub85c, URL \ub610\ub294 IP \uc8fc\uc18c, \ube44\ubc00\ubc88\ud638, \ud654\uba74\uc5d0 \ucd9c\ub825\ub420 \ubb38\uc790\uc5f4 \ub4f1\uc774 \ub300\uc0c1"))))))))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\uc77c\ubc18\uc801\uc73c\ub85c \ub300\uaddc\ubaa8 batch\ub85c \ub370\uc774\ud130\ub97c \ucc98\ub9ac\ud558\ub294 pipeline\uc740 schedule\uc5d0 \ub530\ub77c \uc57c\uac04\uc5d0 \ucc98\ub9ac\ud560 \uc218\ub3c4 \uc788\uc74c")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"ETL pipeline: Extract, Transform, Load"))),(0,r.kt)("h3",{id:"singer"},"Singer"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\ub9ce\uc740 \ub370\uc774\ud130 \uc18c\uc2a4\uc640 \uc5f0\uacb0\ud560 \uc218 \uc788\ub294 \uc624\ud508\uc18c\uc2a4")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\ub370\uc774\ud130\ub97c \uc218\uc9d1\ud558\ub294 \ubc29\ubc95\uc740 \ub2e4\uc591\ud574\uc11c \uc870\uc9c1 \ub0b4\uc5d0\uc11c \ud504\ub85c\uc138\uc2a4\uac00 \ud45c\uc900\ud654 \ub418\uc5b4 \uc788\uc73c\uba74 \ud3b8\ub9ac")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The open-source standard for writing scripts that move data.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"data extraction script\uc640 data loading script\uac00 JSON \uae30\ubc18\uc758 \ub370\uc774\ud130 \ud615\uc2dd\uc744 \uc0ac\uc6a9\ud558\uc5ec stdout\uc744 \ud1b5\ud574 \ud1b5\uc2e0"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"extraction script\ub294 ",(0,r.kt)("inlineCode",{parentName:"li"},"tap"),", loading script\ub294 ",(0,r.kt)("inlineCode",{parentName:"li"},"target"),"\uc774\ub77c\uace0 \ubd88\ub9bc"),(0,r.kt)("li",{parentName:"ul"},"\uc5b4\ub5a4 \ud504\ub85c\uadf8\ub798\ubc0d \uc5b8\uc5b4\ub85c\ub4e0\uc9c0 \uc791\uc131\ud560 \uc218 \uc788\uc74c"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\ub370\uc774\ud130\ub97c \ud55c \uc7a5\uc18c\uc5d0\uc11c \ub2e4\ub978 \uacf3\uc73c\ub85c \uc774\ub3d9\ud558\ub294 \uc791\uc740 \ub370\uc774\ud130 \ud30c\uc774\ud504\ub77c\uc778\uc744 \ub9cc\ub4e4\uae30 \uc704\ud574 \uc27d\uac8c mix or match \ud560 \uc218 \uc788\uc74c")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"tap\uacfc target\uc740 \ud2b9\uc815 stream\uc73c\ub85c \uc1a1\uc2e0\ub418\uace0 \uc77d\ud788\ub294 ",(0,r.kt)("inlineCode",{parentName:"p"},"SCHEMA"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"STATE"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"RECORD"),"\uc758 3\uac00\uc9c0 \uba54\uc2dc\uc9c0\ub97c \uc0ac\uc6a9\ud558\uc5ec \ud1b5\uc2e0"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"stream\uc740 downstream\uc5d0\uc11c \uc120\ud0dd\ud560 \uc218 \uc788\ub294 \uba54\uc2dc\uc9c0\ub97c \uc804\uc1a1\ud558\ub294 \uac00\uc0c1 \uc704\uce58"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\uc8fc\uc81c\uc5d0 \ub530\ub77c \ub370\uc774\ud130\ub97c \ubd84\ud560\ud558\uae30 \uc704\ud574 \ub2e4\ub978 stream\uc744 \uc0ac\uc6a9\ud560 \uc218 \uc788\uc74c"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"SCHEMA \uba54\uc2dc\uc9c0\ub294 structured data\uc5d0 \uc8fc\uc11d\uc744 \ub2ec\uace0 \uac80\uc99d\ud560 \uc218 \uc788\ub294 JSON schema \ud615\ud0dc\uc774\uc5b4\uc57c \ud568"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\uc18d\uc131 \ub610\ub294 \ud544\ub4dc\uc758 \ub370\uc774\ud130 \uc720\ud615 \uc9c0\uc815")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"$id, $schema\ub97c \ud1b5\ud574 \uc2a4\ud0a4\ub9c8\ub97c \uace0\uc720\ud558\uac8c \uc9c0\uc815\ud560 \uc218 \uc788\uc73c\uba70,\uc0ac\uc6a9\uc911\uc778 JSON \uc2a4\ud0a4\ub9c8 \ubc84\uc804\uc744 \ub2e4\ub978 \uc0ac\uc6a9\uc790\uc5d0\uac8c \uc54c\ub824\uc8fc\ub294 \uae30\ub2a5\uc744 \ud568")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"example"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-python"},'columns = {"id","name","age","has_children"}\nusers = {(1, "Adrian", 32,False),\n        (2, "Ruanne", 28, False),\n        (3, "Hillary", 29, True)}\njson_schema = {\n    "properties": {"age": {"maximum": 130,\n                        "minimum": 1,\n                        "type": "integer"},\n                "has_children": {"type": "boolean"},\n                "id": {"type": "integer"},\n                "name": {"type": "string"}},\n    "$id": "http://yourdomain.com/schemas/my_user_schema.json",\n    "$schema": "http://json-schema.org/draft-07/schema#"\n}\n'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"write_schema \uc0ac\uc6a9"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"schema, \uc2a4\ud2b8\ub9bc \uc774\ub984, key_properties",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\uc2a4\ud2b8\ub9bc \uc774\ub984\uc740 \uc0ac\uc6a9\uc790 \ub9c8\uc74c\ub300\ub85c \uc124\uc815 \uac00\ub2a5"),(0,r.kt)("li",{parentName:"ul"},"key_properties\ub294 \uc2a4\ud2b8\ub9bc\uc758 \ub808\ucf54\ub4dc\uc5d0 \ub300\ud55c primary key\ub97c \uad6c\uc131\ud558\ub294 \ubb38\uc790\uc5f4 list\uc640 \uac19\uc544\uc57c \ud568"),(0,r.kt)("li",{parentName:"ul"},"primary key\uac00 \uc5c6\uc73c\uba74 \ube48 list\ub85c \uc9c0\uc815"))),(0,r.kt)("li",{parentName:"ul"},"\uc18d\ud55c \ub370\uc774\ud130\ub294 \ub3d9\uc77c\ud55c \uc2a4\ud2b8\ub9bc\uc73c\ub85c \uc804\uc1a1\ub418\uc5b4\uc57c \ud568")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-python"},'import singer\nsinger.write_schema(schema=json_schema,\n                    stream_name="DC_employees",\n                    key_properties=["id"])\n'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"JSON \uc9c1\ub82c\ud654(Serialize)"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\uac1d\uccb4\ub97c \ubb38\uc790\uc5f4\ub85c \ubcc0\ud658\ud558\ub294 \uc791\uc5c5")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\ud30c\uc774\uc36c ",(0,r.kt)("inlineCode",{parentName:"p"},"json")," \ub77c\uc774\ube0c\ub7ec\ub9ac \uc0ac\uc6a9")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\ub2e8\uc21c\ud788 \uac1d\uccb4\ub97c \ubb38\uc790\uc5f4\ub85c \ubcc0\ud658"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-python"},'import json\n\njson.dumps(json_schema["properties"]["age"])\n# \'{"maximum": 130, "minimum": 1, "type": "integer"}\'\n'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\ub3d9\uc77c\ud55c \ubb38\uc790\uc5f4\uc744 \ud30c\uc77c\uc5d0 \uc4f0\uae30"))),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-python"},'with open("foo.json", mode="w") as fh:\n    json.dump(obj=json_schema, fp=fh) # writes the json-serialized object\n'))))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"ingestion pipeline"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"user record\ub97c Singer RECORD \uba54\uc2dc\uc9c0\ub85c \ubcc0\ud658\ud558\uae30 \uc704\ud574 write record \ud568\uc218 \ud638\ucd9c",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-python"},'columns = ("id", "name", "age", "has_children")\nuser = {(1, "Adrian", 32, False),\n        (2, "Ruanne", 28, False),\n        (3, "Hillary", 29, True)}\n')),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-python"},'singer.write_record(stream_name="DC_employees",\n                    record=dict(zip(columns, user.pop())))\n# v{"type": "RECORD", "stream": "DC_employees", "record": {"id": 1, "name": "Adrian", "age": 32, "has_children": false}}\n')),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"stream_name\uc740 \uc774\uc804\uc5d0 schema \uba54\uc2dc\uc9c0\uc5d0\uc11c \uc9c0\uc815\ud55c \uc2a4\ud2b8\ub9bc\uacfc \uc77c\uce58\ud574\uc57c \ud568"))),(0,r.kt)("li",{parentName:"ul"},"\ub450 \uac1c\uc758 \ud0a4\uac00 \uc788\ub294 \uc0ac\uc804\uc744 \uc0ac\uc6a9\ud558\uc5ec \uc911\ucca9\ub41c JSON\ucc98\ub7fc \uac70\uc758 \ub3d9\uc77c\ud558\uac8c \uc0ac\uc6a9",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-python"},'fixed_dict = {"type": "RECORD", "stream": "DC_employee"}\nrecored_msg = {**fixed_dict, "record": dict(zip(columns, users.pop()))}\nprint(json.dumps(record_msg))\n'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"write_record")," \ub300\uc2e0 ",(0,r.kt)("inlineCode",{parentName:"li"},"write_recods"),"\ub97c \uc0ac\uc6a9\ud558\uba74 \ub9ce\uc740 record\ub97c \ucc98\ub9ac\ud560 \uc218 \uc788\uc74c"),(0,r.kt)("li",{parentName:"ul"},"STATE \uba54\uc2dc\uc9c0\ub294 \uc77c\ubc18\uc801\uc73c\ub85c \uc0c1\ud0dc\ub97c \ucd94\uc801\ud558\uae30 \uc704\ud574 \uc0ac\uc6a9\ub418\uba70, \ud2b9\uc815 \uc2dc\uc810\uc5d0 \uc788\ub294 \ubc29\uc2dd",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\ud504\ub85c\uc138\uc2a4\uc758 \uba54\ubaa8\ub9ac\uc758 \ud615\ud0dc"),(0,r.kt)("li",{parentName:"ul"},"tap \uc2e4\ud589\uc774 \uc131\uacf5\uc801\uc73c\ub85c \ub05d\ub098\uba74 state \uba54\uc2dc\uc9c0\ub85c \ub0b4\ubcf4\ub294 \uac83"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"write_state"),"\ub97c \uc0ac\uc6a9\ud558\uc5ec \ub0b4\ubcf4\ub0c4",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-python"},'singer.write_state(value={"max-last-updated-on": some_variable})\n')))))))),(0,r.kt)("h2",{id:"creating-a-data-transformation-pipeline-with-pyspark"},"Creating a data transformation pipeline with PySpark"),(0,r.kt)("h2",{id:"testing-your-data-pipeline"},"Testing your data pipeline"),(0,r.kt)("h2",{id:"managing-and-orchestrating-a-workflow"},"Managing and orchestrating a workflow"))}u.isMDXComponent=!0}}]);