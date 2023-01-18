"use strict";(self.webpackChunkmy_blog=self.webpackChunkmy_blog||[]).push([[7679],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>c});var n=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var s=n.createContext({}),o=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=o(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),k=o(a),c=l,d=k["".concat(s,".").concat(c)]||k[c]||u[c]||r;return a?n.createElement(d,i(i({ref:t},m),{},{components:a})):n.createElement(d,i({ref:t},m))}));function c(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,i=new Array(r);i[0]=k;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:l,i[1]=p;for(var o=2;o<r;o++)i[o]=a[o];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},970:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>p,toc:()=>o});var n=a(7462),l=(a(7294),a(3905));const r={title:"Data Engineering \uc2a4\ud130\ub514 20\uc8fc\ucc28",date:"2022-01-10",draft:!1,description:"PseudoLab Data Science Fellowship 1\uae30",sidebar_position:1},i="Introduction to AWS Boto in Python",p={unversionedId:"Group-Study/data-engineering/data-engineer-with-python-week-20",id:"Group-Study/data-engineering/data-engineer-with-python-week-20",title:"Data Engineering \uc2a4\ud130\ub514 20\uc8fc\ucc28",description:"PseudoLab Data Science Fellowship 1\uae30",source:"@site/docs/Group-Study/data-engineering/data-engineer-with-python-week-20.md",sourceDirName:"Group-Study/data-engineering",slug:"/Group-Study/data-engineering/data-engineer-with-python-week-20",permalink:"/docs/Group-Study/data-engineering/data-engineer-with-python-week-20",draft:!1,editUrl:"https://github.com/teddygood/teddygood.github.io/tree/main/docs/Group-Study/data-engineering/data-engineer-with-python-week-20.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Data Engineering \uc2a4\ud130\ub514 20\uc8fc\ucc28",date:"2022-01-10",draft:!1,description:"PseudoLab Data Science Fellowship 1\uae30",sidebar_position:1},sidebar:"sidebar",previous:{title:"Data Engineering \uc2a4\ud130\ub514 16\uc8fc\ucc28",permalink:"/docs/Group-Study/data-engineering/data-engineer-with-python-week-16"},next:{title:"Data Engineering \uc2a4\ud130\ub514 22\uc8fc\ucc28",permalink:"/docs/Group-Study/data-engineering/data-engineer-with-python-week-22"}},s={},o=[{value:"Putting Files in the Cloud!",id:"putting-files-in-the-cloud",level:2},{value:"Boto3",id:"boto3",level:3},{value:"IAM",id:"iam",level:3},{value:"\ub300\ud45c\uc801\uc778 AWS \uc11c\ube44\uc2a4 \uac04\ub2e8\ud788 \uc815\ub9ac",id:"\ub300\ud45c\uc801\uc778-aws-\uc11c\ube44\uc2a4-\uac04\ub2e8\ud788-\uc815\ub9ac",level:3},{value:"S3",id:"s3",level:3},{value:"Sharing Files Securely",id:"sharing-files-securely",level:2},{value:"AWS Permission System in S3",id:"aws-permission-system-in-s3",level:3},{value:"ACL",id:"acl",level:3},{value:"URL",id:"url",level:3},{value:"AWS \uc811\uadfc \uc21c\uc11c",id:"aws-\uc811\uadfc-\uc21c\uc11c",level:3},{value:"private file",id:"private-file",level:3},{value:"Presigned URL",id:"presigned-url",level:3},{value:"\ub2e4\uc218\uc758 \ud30c\uc77c\uc744 \ud558\ub098\uc758 DataFrame\uc5d0 \ub85c\ub4dc\ud558\uae30",id:"\ub2e4\uc218\uc758-\ud30c\uc77c\uc744-\ud558\ub098\uc758-dataframe\uc5d0-\ub85c\ub4dc\ud558\uae30",level:3},{value:"Case Study: Generating a Report Repository",id:"case-study-generating-a-report-repository",level:3},{value:"Reporting and Notifying",id:"reporting-and-notifying",level:2},{value:"Pattern Recognition",id:"pattern-recognition",level:2},{value:"References",id:"references",level:2}],m={toc:o};function u(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"introduction-to-aws-boto-in-python"},"Introduction to AWS Boto in Python"),(0,l.kt)("h2",{id:"putting-files-in-the-cloud"},"Putting Files in the Cloud!"),(0,l.kt)("h3",{id:"boto3"},"Boto3"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Python\uc6a9 AWS SDK"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"SDK"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Software Development Kit"),(0,l.kt)("li",{parentName:"ul"},"\uac1c\ubc1c\uc5d0 \ub3c4\uc6c0\uc774 \ub3c4\ub9ac \uac1c\ubc1c \ub3c4\uad6c \ud504\ub85c\uadf8\ub7a8, \ub514\ubc84\uae45 \ud504\ub85c\uadf8\ub7a8, \ubb38\uc11c, API \ub4f1"),(0,l.kt)("li",{parentName:"ul"},"\uc608\uc2dc",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Java\ub97c \uc0ac\uc6a9\ud558\uae30 \uc804 JDK \uc124\uce58"))))))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Python \uc560\ud50c\ub9ac\ucf00\uc774\uc158, \ub77c\uc774\ube0c\ub7ec\ub9ac \ub610\ub294 \uc2a4\ud06c\ub9bd\ud2b8\ub97c S3, EC2, DynamoDB \ub4f1 AWS \uc11c\ube44\uc2a4\uc640 \uc27d\uac8c \ud1b5\ud569\ud560 \uc218 \uc788\uc74c")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\uc0ac\uc6a9 \uc608\uc2dc"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-python"},"import boto3\n\n# \uc0ac\uc6a9\ud560 \uc11c\ube44\uc2a4\ub97c \uc9c0\uc815\ud558\uace0 AWS region, key id, secret access key \uc785\ub825\ns3 = boto3.client('s3',\n                region_name='us-east-1',\n                aws_access_key_id=AWS_KEY_ID,\n                aws_secret_access_key=AWS_SECRET) \n\nresponse = s3.list_buckets()\n")))),(0,l.kt)("h3",{id:"iam"},"IAM"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"IAM(Identity Access Management)"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"AWS \ub9ac\uc18c\uc2a4\uc5d0 \ub300\ud55c \uc561\uc138\uc2a4\ub97c \uc548\uc804\ud558\uac8c \uc81c\uc5b4\ud560 \uc218 \uc788\ub294 \uc6f9 \uc11c\ube44\uc2a4"),(0,l.kt)("li",{parentName:"ul"},"IAM\uc744 \uc0ac\uc6a9\ud558\uc5ec \ub9ac\uc18c\uc2a4\ub97c \uc0ac\uc6a9\ud558\ub3c4\ub85d \uc778\uc99d(\ub85c\uadf8\uc778) \ubc0f \uad8c\ud55c\uc774 \ubd80\uc5ec\ub41c \ub300\uc0c1\uc744 \uc81c\uc5b4"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"AWS \uacc4\uc815\uc744 \ucc98\uc74c \uc0dd\uc131\ud560 \ub54c \ud574\ub2f9 \uacc4\uc815\uc758 \ubaa8\ub4e0 AWS \uc11c\ube44\uc2a4 \ubc0f \ub9ac\uc18c\uc2a4\uc5d0 \ub300\ud55c \uc644\uc804\ud55c \uc5d1\uc138\uc2a4 \uad8c\ud55c\uc774 \uc788\ub294 SSO(Single Sign-In) ID\ub85c \uc2dc\uc791"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"\ub8e8\ud2b8 \uc0ac\uc6a9\uc790")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\ub8e8\ud2b8 \uc0ac\uc6a9\uc790\ub97c \uc774\uc6a9\ud558\uc5ec \ud558\uc704\uc5d0 ",(0,l.kt)("inlineCode",{parentName:"p"},"IAM \uc0ac\uc6a9\uc790"),"\ub97c \uc0dd\uc131"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\uac1c\ubcc4\ub85c key id, secret access key \uc0dd\uc131\ud558\uae30 \uc704\ud574 IAM\uc744 \uc0ac\uc6a9")))),(0,l.kt)("h3",{id:"\ub300\ud45c\uc801\uc778-aws-\uc11c\ube44\uc2a4-\uac04\ub2e8\ud788-\uc815\ub9ac"},"\ub300\ud45c\uc801\uc778 AWS \uc11c\ube44\uc2a4 \uac04\ub2e8\ud788 \uc815\ub9ac"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"IAM",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Identity Access Management"),(0,l.kt)("li",{parentName:"ul"},"\ubcf4\uc548 \uc11c\ube44\uc2a4"))),(0,l.kt)("li",{parentName:"ul"},"S3",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Simple Storage Service"),(0,l.kt)("li",{parentName:"ul"},"\ud074\ub77c\uc6b0\ub4dc \uc11c\ube44\uc2a4"))),(0,l.kt)("li",{parentName:"ul"},"SNS",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Simple Notification Service"),(0,l.kt)("li",{parentName:"ul"},"\uba54\uc2dc\uc9c0(\uc774\uba54\uc77c, \ubb38\uc790) \uc11c\ube44\uc2a4"))),(0,l.kt)("li",{parentName:"ul"},"Comprehend",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"NLP(\uc790\uc5f0\uc5b4 \ucc98\ub9ac) \uc11c\ube44\uc2a4"),(0,l.kt)("li",{parentName:"ul"},"\ud14d\uc2a4\ud2b8\uc5d0\uc11c \uc720\uc6a9\ud55c \uad00\uacc4\ub97c \ucc3e\uc544\ub0c4"))),(0,l.kt)("li",{parentName:"ul"},"Rekognition",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"CV(Computer Vision) \uc11c\ube44\uc2a4"),(0,l.kt)("li",{parentName:"ul"},"\uc774\ubbf8\uc9c0 \ubc0f \ube44\ub514\uc624\uc5d0\uc11c \uc815\ubcf4 \ub4f1\uc744 \ucd94\ucd9c"))),(0,l.kt)("li",{parentName:"ul"},"RDS",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Relational Database Service"),(0,l.kt)("li",{parentName:"ul"},"\ud074\ub77c\uc6b0\ub4dc\uc5d0\uc11c \uad00\uacc4\ud615 \ub370\uc774\ud130\ubca0\uc774\uc2a4 \uac04\ud3b8 \uc124\uc815, \uc6b4\uc601 \ubc0f \ud655\uc7a5"))),(0,l.kt)("li",{parentName:"ul"},"EC2",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Elastic Compute Cloud"),(0,l.kt)("li",{parentName:"ul"},"\ud074\ub77c\uc6b0\ub4dc \uc11c\ube44\uc2a4 "))),(0,l.kt)("li",{parentName:"ul"},"Lambda",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"EC2\uc640 \ub2e4\ub974\uac8c \ubcc4\ub3c4\uc758 \uc11c\ubc84 \uc138\ud305 \uc5c6\uc774 \ubc14\ub85c \ucf54\ub4dc\ub97c \ud568\uc218\ub85c \uc2e4\ud589\ud560 \uc218 \uc788\ub294 \uc11c\ube44\uc2a4 ")))),(0,l.kt)("h3",{id:"s3"},"S3"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\ubc84\ud0b7(bucket): \uac1d\uccb4\uac00 \ud30c\uc77c\uc774\ub77c\uba74 \ubc84\ud0b7\uc740 \uc5f0\uad00\ub41c \uac1d\uccb4\ub4e4\uc744 \ubaa8\uc740 \ucd5c\uc0c1\uc704 \ub514\ub809\ud1a0\ub9ac"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"string \ud615\ud0dc\uc758 \uace0\uc720 name\uc744 \uac00\uc9d0 ")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\ub9ce\uc740 \uac1d\uccb4\ub4e4\uc774 \ud3ec\ud568\ub428")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"bucket \ub2e8\uc704\ub85c region(\ub9ac\uc804, \uc9c0\uc5ed)\uc744 \uc9c0\uc815")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"bucket\uc5d0 \ud3ec\ud568\ub41c \ubaa8\ub4e0 \uac1d\uccb4\uc5d0 \ub300\ud574 \uac01\uac01 \uc778\uc99d\uacfc \uc811\uc18d \uc81c\ud55c\uc744 \uac78 \uc218 \uc788\uc74c -> \ubc84\ud0b7 \uc815\ucc45")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\uc790\uc2e0\uc758 \ud65c\ub3d9\uc5d0 \ub300\ud55c \ub85c\uadf8\ub97c \uc0dd\uc131\ud558\uace0 \ub2e4\ub978 \ubc84\ud0b7\uc5d0 \uc500")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\ubc84\ud0b7 \ub9cc\ub4e4\uae30"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-python"},"import boto3\ns3 = boto3.client('s3', region_name='us-east-1',\n                        aws_access_key_id=AWS_KEY_ID,\n                        aws_secret_access_key=AWS_SECRET)\n\nbucket = s3.create_bucket(Bucket='gid-requests') # bucket name \n"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\ubc84\ud0b7 \uc774\ub984\uc740 \uace0\uc720\ud574\uc57c\ud568")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"S3\uc5d0 \uc788\ub294 \ubaa8\ub4e0 \ubc84\ud0b7 \ub9ac\uc2a4\ud2b8 \uac00\uc838\uc624\uae30"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-python"},"import boto3\n\ns3 = boto3.client('s3', region_name='us-east-1',\n                        aws_access_key_id=AWS_KEY_ID,\n                        aws_secret_access_key=AWS_SECRET)\n\nbucket_response = s3.list_buckets() \nbuckets = bucket_response['Buckets']\nprint(buckets) # bucket\uc758 \ubaa8\ub4e0 \uc815\ubcf4 \ucd9c\ub825\n\n# bucket \uc774\ub984\ub9cc \ucd9c\ub825\nfor buckets in bucket_response['Buckets']:\n    print(buckets['Name'])\n"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\ubc84\ud0b7 \uc0ad\uc81c"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-python"},"s3 = boto3.client('s3', region_name='us-east-1',\n                        aws_access_key_id=AWS_KEY_ID,\n                        aws_secret_access_key=AWS_SECRET)\n\nresponse = s3.delete_bucket('gid-requests') \n"))))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\uac1d\uccb4(object): S3\uc5d0 \uc800\uc7a5\ub41c \ub370\uc774\ud130(\ud30c\uc77c)"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\uace0\uc720\ud55c key\ub97c \uac00\uc9d0"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"key\ub294 \ubc84\ud0b7 root\uc5d0\uc11c \uc804\uccb4 \uacbd\ub85c"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\ud558\ub098\uc758 \ubc84\ud0b7\uc5d0\ub9cc \uc18d\ud560 \uc218 \uc788\uc74c")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\ud30c\uc77c \uc5c5\ub85c\ub4dc"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Filename"),"\uc740 \ub85c\uceec \ud30c\uc77c \uacbd\ub85c, ",(0,l.kt)("inlineCode",{parentName:"li"},"Bucket"),"\uc740 \uc5c5\ub85c\ub4dc \ud560 \ubc84\ud0b7\uc758 \uc774\ub984, ",(0,l.kt)("inlineCode",{parentName:"li"},"Key"),"\ub294 \uac1d\uccb4\uc758 \uc774\ub984 \uc9c0\uc815(AWS\uc5d0 \uc62c\ub77c\uac00\ub294 \uacbd\ub85c)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"upload_file")," \uba54\uc18c\ub4dc\ub294 \ubc18\ud658 \uac12\uc774 \uc5c6\uc74c")),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-python"},"s3 = boto3.client('s3', region_name = 'us-east-1',\n                  aws_access_key_id=AWS_KEY_ID,\n                  aws_secret_access_key=AWS_SECRET)\n\ns3.upload_file(Filename='gid_requests_2019_01_01.csv',\n              Bucket='gid-requests',\n              Key='gid_requets_2019_01_01.csv')\n"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\ubc84\ud0b7\uc758 \uac1d\uccb4 \ub9ac\uc2a4\ud305"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Bucket"),"\uc740 \uc774\ub984, ",(0,l.kt)("inlineCode",{parentName:"li"},"MaxKeys"),"\ub294 response \uac1d\uccb4 \uac1c\uc218 \uc81c\ud55c, ",(0,l.kt)("inlineCode",{parentName:"li"},"Prefix"),"\ub294 \uc81c\uacf5\ud558\ub294 \ubb38\uc790\uc5f4\ub85c \uc2dc\uc791\ud558\ub294 \uac1d\uccb4\uc5d0 \ub300\ud55c response\uac00 \uc81c\ud55c\ub428")),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-python"},"response = s3.list_objects(Bucket='gid-requests',\n                          MaxKeys=2,\n                          Prefix='gid_requests_2019_')\n\nprint(response)\n"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\uac1d\uccb4 metatdata \ubc1b\uae30"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\uac1d\uccb4\uc5d0 \ub300\ud55c \ub354 \ub9ce\uc740 \uc815\ubcf4\ub97c \uc5bb\uae30 \uc704\ud574 \uc0ac\uc6a9")),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-python"},"response = s3.head_object(Bucket='gid-requets',\n                          Key='gid_requets_2018_12_30.csv')\n\nprint(response)\n"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\ud30c\uc77c \ub2e4\uc6b4\ub85c\ub4dc"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-python"},"s3.download_file(Filename='gid_requests_downed.csv',\n                Bucket='gid-requests',\n                Key='gid_requests_2018_12_30.csv')\n"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\uac1d\uccb4 \uc0ad\uc81c"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-python"},"s3.delete_object(Bucket='gid-requests',\n                Key='gid_requests_2018_12_30.csv')\n")))))),(0,l.kt)("h2",{id:"sharing-files-securely"},"Sharing Files Securely"),(0,l.kt)("h3",{id:"aws-permission-system-in-s3"},"AWS Permission System in S3"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"IAM\uc744 \uc0ac\uc6a9\ud558\uc5ec AWS \uc11c\ube44\uc2a4, \ubc84\ud0b7 \ubc0f \uac1d\uccb4\uc5d0 \ub300\ud55c \uc0ac\uc6a9\uc790\uc758 \uc811\uadfc \uc81c\uc5b4",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"IAM\uc740 \ubaa8\ub4e0 AWS \uc11c\ube44\uc2a4\uc5d0 \uc801\uc6a9\ub428"))),(0,l.kt)("li",{parentName:"ul"},"Bucket Policy(\ubc84\ud0b7 \uc815\ucc45)\ub97c \ud1b5\ud574 \ubc84\ud0b7\uacfc \uac1d\uccb4\ub97c \uc81c\uc5b4",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"IAM\uacfc Bucket Policy\ub294 \uc0ac\uc6a9\uc790\uac00 \ub2e4\uc218\uc778 \ud658\uacbd\uc5d0\uc11c \uc720\uc6a9\ud568"))),(0,l.kt)("li",{parentName:"ul"},"ACL(Access Control List, \uc561\uc138\uc2a4 \uc81c\uc5b4 \ubaa9\ub85d)\uc744 \ud1b5\ud574 \ubc84\ud0b7 \ub0b4\uc758 \ud2b9\uc815 \uac1d\uccb4\uc5d0 \ub300\ud55c \uad8c\ud55c\uc744 \uc124\uc815\ud560 \uc218 \uc788\uc74c"),(0,l.kt)("li",{parentName:"ul"},"Presigned(\ubbf8\ub9ac \uc11c\uba85\ub41c) URL\uc744 \uc0ac\uc6a9\ud558\uba74, \uac1d\uccb4\uc5d0 \uc784\uc2dc\ub85c \uc561\uc138\uc2a4 \ud560 \uc218 \uc788dma")),(0,l.kt)("h3",{id:"acl"},"ACL"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\ubc84\ud0b7\uacfc \uac1d\uccb4\uc5d0 \ub300\ud55c \uc811\uadfc \uad00\ub9ac")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"access\ub97c \ud5c8\uc6a9\ud560 AWS \uacc4\uc815\uc774\ub098 \uadf8\ub8f9\uc758 access \uc720\ud615\uc744 \uc815\uc758")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"response\ub97c \ubc1b\uc73c\uba74 ACL\uc744 \ud655\uc778\ud574 \ud544\uc694\ud55c \uc811\uadfc \uad8c\ud55c\uc744 \ubcf4\uc720\ud558\uace0 \uc788\ub294\uc9c0 \ud310\ub2e8")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"private, public\uc774 \uc788\uc73c\uba70 \uae30\ubcf8\uc740 ",(0,l.kt)("inlineCode",{parentName:"p"},"private"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"put_objects_acl")," \uba54\uc18c\ub4dc\ub97c \uc0ac\uc6a9\ud558\uc5ec public-read\ub85c \ubcc0\uacbd"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-python"},"s3.upload_file(Filename='potholes.csv',\n              Bucket='gid-requests',\n              Key='potholes.csv')\n\ns3.put_objects_acl(Bucket='gid-requests',\n                  Key='potholes.csv',\n                  ACL='public-read')\n"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\uc5c5\ub85c\ub4dc \ud560 \ub54c\ubd80\ud130 public-read\ub85c \uc124\uc815"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-python"},"s3.upload_file(Bucket='gid-requests',\n              Filename='potholes.csv',\n              Key='potholes.csv',\n              ExtraArgs={'ACL':'public-read'})\n")))),(0,l.kt)("h3",{id:"url"},"URL"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\uc8fc\uc18c",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"https://{bucket}.s3.amazonaws.com/{key}")),(0,l.kt)("li",{parentName:"ul"},"e.g. ",(0,l.kt)("inlineCode",{parentName:"li"},"https://gid-requests.s3.amazonaws.com/2019/potholes.csv")))),(0,l.kt)("li",{parentName:"ul"},"object\uc758 public URL \uc0dd\uc131 -> presigned URL\uacfc \ub2e4\ub984",(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-python"},'url = "https://{}.s3.amazonaws.com/{}".format("gid-requests", "2019/potholes.csv")\ndf = pd.read_csv(url)\n')))),(0,l.kt)("h3",{id:"aws-\uc811\uadfc-\uc21c\uc11c"},"AWS \uc811\uadfc \uc21c\uc11c"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\uba3c\uc800 Presigned URL\uc778\uc9c0 \ud655\uc778\ud568"),(0,l.kt)("li",{parentName:"ul"},"\ud6c4\uc5d0 IAM, Bucket Policy, ACL\uc744 \ud655\uc778")),(0,l.kt)("h3",{id:"private-file"},"private file"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\ud30c\uc77c\uc5d0 \ub300\ud574 ACL\uc5d0\uc11c ",(0,l.kt)("inlineCode",{parentName:"p"},"public-read"),"\uc744 \uc124\uc815\ud558\uc9c0 \uc54a\uc73c\uba74 AWS\ub294 \uae30\ubcf8\uc801\uc73c\ub85c ",(0,l.kt)("inlineCode",{parentName:"p"},"private"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"pandas read_csv\ub97c \uc0ac\uc6a9\ud558\uc5ec Public Object URL\uc5d0 \uc811\uadfc\ud558\ub824 \ud558\uba74 ",(0,l.kt)("inlineCode",{parentName:"p"},"HTTP Error 403: Forbidden"),"\uc774 \ubc1c\uc0dd"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\uc774\ub97c \ud574\uacb0\ud558\uae30 \uc704\ud574 ",(0,l.kt)("inlineCode",{parentName:"p"},"download_file")," \uba54\uc18c\ub4dc \uc0ac\uc6a9"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\ud30c\uc77c\uc774 \ub9ce\uc774 \ubcc0\uacbd\ub418\uc9c0 \uc54a\uc744 \ub54c \uc0ac\uc6a9")),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-python"},"s3.download_file(Filename='potholes_local.csv',\n                Bucket='gid-staging',\n                Key='2019/potholes_private.csv')\n\npd.read_csv('./potholes_local.csv')\n"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"boto3\uc758 ",(0,l.kt)("inlineCode",{parentName:"p"},"get_object")," \uba54\uc18c\ub4dc\ub97c \uc0ac\uc6a9\ud558\uc5ec S3\uc758 \ud30c\uc77c\uc5d0 \uc811\uadfc\ud558\ub294 \uac83\uc774 \ub354 \uac04\ub2e8\ud55c \ubc29\ubc95"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-python"},"obj = s3.get_object(Bucket='gid-requests', Key='2019/potholes.csv')\nprint(obj)\n\npd.read_csv(obj['Body']) # csv \ud30c\uc77c\ucc98\ub7fc \uc77d\uc74c\n")))))),(0,l.kt)("h3",{id:"presigned-url"},"Presigned URL"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"S3 private object\uc5d0 \ub300\ud55c \uc811\uadfc \uad8c\ud55c\uc744 \uc77c\uc2dc\uc801\uc73c\ub85c \ubd80\uc5ec\ud560 \uc218 \uc788\uc74c")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\uc9c0\uc815\ub41c \uae30\uac04 \ub0b4 \ub9cc\ub8cc\ub418\ub294 \ud2b9\uc218\ud55c URL")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\ud30c\uc77c \uc5c5\ub85c\ub4dc, presigned URL \uc0dd\uc131"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-python"},"s3.upload_file(Filename='./potholes.csv',\n               Key='potholes.key',\n               Bucket='gid-requests')\n\nshare_url = s3.generate_presigned_url(ClientMethod='get_object',\n                                      ExpiresIn=3600, # \uc81c\ud55c \uc2dc\uac04\n                                      Params={'Bucket': 'gid-requests', 'Key': 'potholes.csv'})\npd.read_csv(share_url)\n")))),(0,l.kt)("h3",{id:"\ub2e4\uc218\uc758-\ud30c\uc77c\uc744-\ud558\ub098\uc758-dataframe\uc5d0-\ub85c\ub4dc\ud558\uae30"},"\ub2e4\uc218\uc758 \ud30c\uc77c\uc744 \ud558\ub098\uc758 DataFrame\uc5d0 \ub85c\ub4dc\ud558\uae30"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"# Create list to hold our DataFrames\ndf_list = []\n\n# Request the list of csv's from S3 with prefix; Get contents\nresponse = s3.list_objects(\nBucket='gid-requests',\nPrefix='2019/')\n\n# Get response contents\nrequest_files = response['Contents']\n\n# Iterate over each object\nfor file in request_files:\n    obj = s3.get_object(Bucket='gid-requests', Key=file['Key'])\n\n    # Read it as DataFrame\n    obj_df = pd.read_csv(obj['Body'])\n\n    # Append DataFrame to list\n    df_list.append(obj_df)\n\n# Concatenate all the DataFrames in the list\ndf = pd.concat(df_list)\n\n# Preview the DataFrame\ndf.head()\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"S3\ub294 HTML \ud398\uc774\uc9c0 \uc81c\uacf5\ud568"),(0,l.kt)("li",{parentName:"ul"},"pandas\ub97c \uc0ac\uc6a9\ud558\uc5ec DataFrame\uc744 html\ub85c \ubcc0\uacbd \ud6c4 S3\uc5d0 \uc62c\ub9ac\uae30",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"render_links: \ubaa8\ub4e0 URL\uc744 \ud074\ub9ad\ud560 \uc218 \uc788\ub3c4\ub85d \ubc18\ud658"),(0,l.kt)("li",{parentName:"ul"},"columns: \ub80c\ub354\ub9c1\ud558\ub824\ub294 column\ub9cc list\ub85c \uc804\ub2ec"),(0,l.kt)("li",{parentName:"ul"},"border: 0\uc774\uba74 \ud14c\ub450\ub9ac \uc81c\uac70, 1\uc774\uba74 \ud14c\ub450\ub9ac \ud45c\uc2dc")),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-python"},"df.to_html('table_agg.html',\n            render_links=True,\n            columns['service_name', 'request_count', 'info_link'],\n            border=0)\n")),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\uc5c5\ub85c\ub4dc \ud558\ub294 \ubc29\ubc95\uc740 \ub2e4\ub978 \ud30c\uc77c\uc744 \uc5c5\ub85c\ub4dc\ud558\ub294 \ubc29\ubc95\uacfc \ub3d9\uc77c",(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-python"},"s3.upload_file(\n  Filename='./table_agg.html',\n  Bucket='datacamp-website',\n  Key='table.html',\n  ExtraArgs = {\n    'ContentType': 'text/html',\n    'ACL': 'public-read'}\n)\n")),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"https://datacamp-website.s3.amazonaws.com/table.html")))))),(0,l.kt)("li",{parentName:"ul"},"\uc774\ubbf8\uc9c0 \uc5c5\ub85c\ub4dc",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ContentType"),"\uc744 \uc870\uc815\ud558\uba74 \ub2e4\ub978 \ud0c0\uc785\uc758 \ud30c\uc77c\ub3c4 \uc62c\ub9b4 \uc218 \uc788\uc74c",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"IANA: Internet Assigned Numbers Authority, \uc778\ud130\ub137 \ud560\ub2f9 \ubc88\ud638 \uad00\ub9ac\uae30\uac04",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"JSON: application/json"),(0,l.kt)("li",{parentName:"ul"},"PNG: image/png"),(0,l.kt)("li",{parentName:"ul"},"PDF: application/pdf"),(0,l.kt)("li",{parentName:"ul"},"CSV: test/csv"),(0,l.kt)("li",{parentName:"ul"},"\uc790\uc138\ud55c \uac74 ",(0,l.kt)("a",{parentName:"li",href:"https://www.iana.org/assignments/media-types/media-types.xhtml"},"IANA documentation")," \ucc38\uace0")))))),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-python"},"s3.upload_file(\n  Filename='./plot_image.png',\n  Bucket='datacamp-website',\n  Key='plot_image.png',\n  ExtraArgs = {\n    'ContentType': 'image/png',\n    'ACL': 'public-read'}\n)\n"))),(0,l.kt)("li",{parentName:"ul"},"\ub2e4\uc218\uc758 HTML \ub610\ub294 \uc774\ubbf8\uc9c0 \ud30c\uc77c \uacf5\uc720\ud558\uae30 \uc704\ud574 index page \uc0dd\uc131",(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-python"},"# List the gid-reports bucket objects starting with 2019/\nr = s3.list_objects(Bucket='gid-reports', Prefix='2019/')\n# Convert the response contents to DataFrame\nobjects_df = pd.DataFrame(r['Contents'])\n")),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-python"},"# Create a column \"Link\" that contains website url + key\nbase_url = \"http://datacamp-website.s3.amazonaws.com/\"\nobjects_df['Link'] = base_url + objects_df['Key']\n")),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-python"},"# Write DataFrame to html\nobjects_df.to_html('report_listing.html',\n                  columns=['Link', 'LastModified', 'Size'],\n                  render_links=True)\n")),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-python"},"s3.upload_file(\n  Filename='./report_listing.html',\n  Bucket='datacamp-website',\n  Key='index.html',\n  ExtraArgs = {\n  'ContentType': 'text/html',\n  'ACL': 'public-read'}\n)\n")))),(0,l.kt)("h3",{id:"case-study-generating-a-report-repository"},"Case Study: Generating a Report Repository"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\ub9e4\uc6d4 \uc0ac\ub840 \uc720\ud615\ubcc4\ub85c \uc694\uccad\uc744 \ubc1b\uc740 \ud69f\uc218\uc5d0 repository \uc0ac\uc774\ud2b8 \uc0dd\uc131"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"raw data\uc5d0\uc11c \ud574\ub2f9 \uc6d4\uc758 \ud30c\uc77c \ub2e4\uc6b4\ub85c\ub4dc"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"gid-requests")," bucket\uc5d0\uc11c raw data \uac00\uc838\uc634 "),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\ub9e4\uc77c CSV\uac00 \uc0dd\uc131\ub418\ub294 \ubc84\ud0b7")),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-python"},"# Create list to hold our DataFrames\ndf_list = []\n\n# Request the list of csv's from S3 with prefix; Get contents\nresponse = s3.list_objects(\n  Bucket='gid-requests',\n  Prefix='2019_jan')\n\n# Get response contents\nrequest_files = response['Contents']\n")),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-python"},"# Iterate over each object\nfor file in request_files:\n    obj = s3.get_object(Bucket='gid-requests', Key=file['Key'])\n\n    # Read it as DataFrame\n    obj_df = pd.read_csv(obj['Body'])\n\n    # Append DataFrame to list\n    df_list.append(obj_df)\n"))))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\ud558\ub098\uc758 csv\ub85c concatenate"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-python"},"# Concatenate all the DataFrames in the list\ndf = pd.concat(df_list)\n\n# Preview the DataFrame\ndf.head()\n"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\uc9d1\uacc4\ud55c DataFrame \uc0dd\uc131")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"CSV, HTML\uc5d0\uc11c DataFrame\uc73c\ub85c \uc4f0\uae30"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"df.to_csv('jan_final_report.csv')")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"df.to_html('jan_final_report.html')")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Bokeh\ub85c plot \uc0dd\uc131 \ud6c4 HTML\ub85c \uc800\uc7a5"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"jan_final_chart.html")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"gid-reports")," bucket \uc0dd\uc131")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"3\uac1c\uc758 \ud30c\uc77c\uc744 S3\uc5d0 \uc5c5\ub85c\ub4dc"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-python"},"# Upload Aggregated CSV to S3\ns3.upload_file(Filename='./jan_final_report.csv',\n              Key='2019/jan/final_report.csv',\n              Bucket='gid-reports',\n              ExtraArgs = {'ACL': 'public-read'})\n# Upload HTML table to S3\ns3.upload_file(Filename='./jan_final_report.html',\n              Key='2019/jan/final_report.html',\n              Bucket='gid-reports',\n              ExtraArgs = {\n                'ContentType': 'text/html',\n                'ACL': 'public-read'})\n# Upload Aggregated Chart to S3\ns3.upload_file(Filename='./jan_final_chart.html',\n              Key='2019/jan/final_chart.html',\n              Bucket='gid-reports',\n              ExtraArgs = {\n                'ContentType': 'text/html',\n                'ACL': 'public-read'})\n"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\ubaa8\ub4e0 \ud30c\uc77c\uc758 \ub9ac\uc2a4\ud2b8\ub97c \ubcf4\uc5ec\uc8fc\ub294 ",(0,l.kt)("inlineCode",{parentName:"p"},"index.html")," \uc0dd\uc131"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-python"},"# List the gid-reports bucket objects starting with 2019/\nr = s3.list_objects(Bucket='gid-reports', Prefix='2019/')\n# Convert the response contents to DataFrame\nobjects_df = pd.DataFrame(r['Contents'])\n# Create a column \"Link\" that contains website url + key\nbase_url = \"https://gid-reports.s3.amazonaws.com/\"\nobjects_df['Link'] = base_url + objects_df['Key']\n")),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-python"},"# Write DataFrame to html\nobjects_df.to_html('report_listing.html',\n                  columns=['Link', 'LastModified', 'Size'],\n                  render_links=True)\n")),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-python"},"# Upload the file to gid-reports bucket root.\ns3.upload_file(\n  Filename='./report_listing.html',\n  Key='index.html',\n  Bucket='gid-reports',\n  ExtraArgs = {\n    'ContentType': 'text/html',\n    'ACL': 'public-read'\n  })\n")),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"http://gid-reports.s3.amazonaws.com/index.html"))))))),(0,l.kt)("h2",{id:"reporting-and-notifying"},"Reporting and Notifying"),(0,l.kt)("h2",{id:"pattern-recognition"},"Pattern Recognition"),(0,l.kt)("h2",{id:"references"},"References"),(0,l.kt)("blockquote",null,(0,l.kt)("ul",{parentName:"blockquote"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/ko_kr/IAM/latest/UserGuide/introduction.html"},"[AWS] IAM\uc774\ub780 \ubb34\uc5c7\uc785\ub2c8\uae4c?")))))}u.isMDXComponent=!0}}]);