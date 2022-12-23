"use strict";(self.webpackChunkmy_blog=self.webpackChunkmy_blog||[]).push([[1427],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>k});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var m=n.createContext({}),o=function(e){var t=n.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},s=function(e){var t=o(e.components);return n.createElement(m.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},N=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,m=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),N=o(a),k=r,c=N["".concat(m,".").concat(k)]||N[k]||u[k]||i;return a?n.createElement(c,l(l({ref:t},s),{},{components:a})):n.createElement(c,l({ref:t},s))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=N;var p={};for(var m in t)hasOwnProperty.call(t,m)&&(p[m]=t[m]);p.originalType=e,p.mdxType="string"==typeof e?e:r,l[1]=p;for(var o=2;o<i;o++)l[o]=a[o];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}N.displayName="MDXCreateElement"},755:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>p,toc:()=>o});var n=a(7462),r=(a(7294),a(3905));const i={title:"Data Engineering \uc2a4\ud130\ub514 22\uc8fc\ucc28",date:"2022-01-20",draft:!1,description:"PseudoLab Data Science Fellowship 1\uae30",sidebar_position:1},l="Introduction to Relational Databases in SQL",p={unversionedId:"Group-Study/data-engineering/data-engineer-with-python-week-22",id:"Group-Study/data-engineering/data-engineer-with-python-week-22",title:"Data Engineering \uc2a4\ud130\ub514 22\uc8fc\ucc28",description:"PseudoLab Data Science Fellowship 1\uae30",source:"@site/docs/Group-Study/data-engineering/data-engineer-with-python-week-22.md",sourceDirName:"Group-Study/data-engineering",slug:"/Group-Study/data-engineering/data-engineer-with-python-week-22",permalink:"/docs/Group-Study/data-engineering/data-engineer-with-python-week-22",draft:!1,editUrl:"https://github.com/teddygood/teddygood.github.io/tree/main/docs/Group-Study/data-engineering/data-engineer-with-python-week-22.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Data Engineering \uc2a4\ud130\ub514 22\uc8fc\ucc28",date:"2022-01-20",draft:!1,description:"PseudoLab Data Science Fellowship 1\uae30",sidebar_position:1},sidebar:"sidebar",previous:{title:"Data Engineering \uc2a4\ud130\ub514 20\uc8fc\ucc28",permalink:"/docs/Group-Study/data-engineering/data-engineer-with-python-week-20"},next:{title:"Data Engineering \uc2a4\ud130\ub514 24\uc8fc\ucc28",permalink:"/docs/Group-Study/data-engineering/data-engineer-with-python-week-24"}},m={},o=[{value:"Your first database",id:"your-first-database",level:2},{value:"Relational database",id:"relational-database",level:3},{value:"Entity-Relationship Diagram",id:"entity-relationship-diagram",level:3},{value:"Migrate DB after update",id:"migrate-db-after-update",level:3},{value:"Enforce data consistency with attribute constraints",id:"enforce-data-consistency-with-attribute-constraints",level:2},{value:"Integrity constraints",id:"integrity-constraints",level:3},{value:"Constaint\uac00 \ud544\uc694\ud55c \uc774\uc720",id:"constaint\uac00-\ud544\uc694\ud55c-\uc774\uc720",level:3},{value:"Data type casting",id:"data-type-casting",level:3},{value:"Domain integrity",id:"domain-integrity",level:3},{value:"PostgreSQL\uc5d0\uc11c \uac00\uc7a5 \uc77c\ubc18\uc801\uc778 type",id:"postgresql\uc5d0\uc11c-\uac00\uc7a5-\uc77c\ubc18\uc801\uc778-type",level:3},{value:"NULL constraint",id:"null-constraint",level:3},{value:"Unique constraint",id:"unique-constraint",level:3},{value:"Uniquely identify records with key constraints",id:"uniquely-identify-records-with-key-constraints",level:2},{value:"Key",id:"key",level:3},{value:"Primary key",id:"primary-key",level:3},{value:"Natural key and Surrogate key",id:"natural-key-and-surrogate-key",level:3},{value:"Glue together tables with foreign keys",id:"glue-together-tables-with-foreign-keys",level:2},{value:"Foreign key",id:"foreign-key",level:3},{value:"N:M-relationships \uad6c\ud604",id:"nm-relationships-\uad6c\ud604",level:3},{value:"Referential integrity",id:"referential-integrity",level:3},{value:"References",id:"references",level:2}],s={toc:o};function u(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,n.Z)({},s,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"introduction-to-relational-databases-in-sql"},"Introduction to Relational Databases in SQL"),(0,r.kt)("h2",{id:"your-first-database"},"Your first database"),(0,r.kt)("h3",{id:"relational-database"},"Relational database"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\ud604\uc2e4\uc758 entity\ub97c table\ub85c \uad6c\ud604")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"entity\ub97c \ud55c \ubc88\ub9cc \uc800\uc7a5\ud558\uc5ec \uc911\ubcf5\uc131 \uc904\uc784")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"data integrity by relationship"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\uc218\uba85 \uc8fc\uae30\ub97c \uac70\uce58\uba70 \ub370\uc774\ud130\uc758 \uc815\ud655\uc131, \uc77c\uad00\uc131, \uc720\ud6a8\uc131\uc744 \uc720\uc9c0\ud558\uace0 \ubcf4\uc99d\ud558\ub294 \uac83"),(0,r.kt)("li",{parentName:"ul"},"DBMS\uc758 \uc911\uc694\ud55c \uae30\ub2a5"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\uc138 \uac00\uc9c0 \uc911\uc694 \uac1c\ub150"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"constraint(\uc81c\uc57d \uc870\uac74)",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\ud14c\uc774\ube14\uc758 \ud558\ub098 \uc774\uc0c1\uc758 \uc5f4\uc5d0 \uc801\uc6a9\ub418\ub294 \uc0ac\ud56d"))),(0,r.kt)("li",{parentName:"ul"},"key(\ud0a4)"),(0,r.kt)("li",{parentName:"ul"},"referential integrity(\ucc38\uc870 \ubb34\uacb0\uc131)",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\ucc38\uc870 \uad00\uacc4\uc5d0 \uc788\ub294 \ub450 \ud14c\uc774\ube14\uc758 \ub370\uc774\ud130\uac00 \ud56d\uc0c1 \uc77c\uad00\ub41c \uac12\uc744 \uac16\ub3c4\ub85d \uc720\uc9c0\ub418\ub294 \uac83"),(0,r.kt)("li",{parentName:"ul"},"\ud14c\uc774\ube14\uac04\uc758 \uad00\uacc4\ub97c \uad6c\uc131\ud558\ub294 \ud0a4\uac00 \ud56d\uc0c1 \uc720\ud6a8\ud558\ub3c4\ub85d foreign key constraint\ub85c \uad00\ub9ac"))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\uac04\ub2e8\ud55c \uc0ac\uc6a9 \uc608\uc81c"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"-- Query the right table in information_schema\nSELECT table_name \nFROM information_schema.tables\n-- Specify the correct table_schema value\nWHERE table_schema = 'public';\n\n-- Query the right table in information_schema to get columns\nSELECT column_name, data_type \nFROM information_schema.columns \nWHERE table_name = 'university_professors' AND table_schema = 'public';\n\n-- Query the first five rows of our table\nSELECT * \nFROM university_professors \nLIMIT 5;\n")))),(0,r.kt)("h3",{id:"entity-relationship-diagram"},"Entity-Relationship Diagram"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"entity-relationship diagram",src:a(1644).Z,width:"949",height:"611"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\uc0ac\uac01\ud615\uc740 entity(\uac04\ub2e8\ud558\uac8c table\uc774\ub77c \uc0dd\uac01) \uc720\ud615, \uc6d0\uc740 attribute(column)\uc744 \uc758\ubbf8"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\ubcc4\uac1c\ub85c instance\ub97c row\ub77c\uace0 \uc0dd\uac01\ud558\uba74 \ud3b8\ud560\ub4ef"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\ud14c\uc774\ube14 \uc0dd\uc131, entity type \uc124\uc815"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"-- Create a table for the professors entity type\nCREATE TABLE professors (\nfirstname text,\nlastname text\n);\n\n-- Print the contents of this table\nSELECT * \nFROM professors\n\n-- Create a table for the universities entity type\nCREATE TABLE universities (\nuniversity_shortname text,\nuniversity text,\nuniversity_city text\n);\n\n-- Print the contents of this table\nSELECT * \nFROM universities\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"ALTER"),"\uc744 \uc0ac\uc6a9\ud558\uc5ec \ud14c\uc774\ube14 \uc218\uc815"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"-- Add the university_shortname column\nALTER TABLE professors\nADD COLUMN university_shortname text;\n\n-- Print the contents of this table\nSELECT * \nFROM professors\n")))),(0,r.kt)("h3",{id:"migrate-db-after-update"},"Migrate DB after update"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"DISTINCT"),"\ub97c \uc0ac\uc6a9\ud558\uc5ec \uc911\ubcf5 \uc81c\uac70"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT COUNT(DISTINCT organization)\nFROM university_professors;\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"INSERT INTO")," \uad6c\ubb38"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'INSERT INTO table_name (column_a, column_b)\nVALUES ("value_a", "value_b");\n'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"column\uc758 \uc774\ub984\uc744 \ubc14\uafb8\uace0 column \uc0ad\uc81c"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"-- Rename the organisation column\nALTER TABLE affiliations\nRENAME COLUMN organisation TO organization;\n\n-- Delete the university_shortname column\nALTER TABLE affiliations\nDROP COLUMN university_shortname;\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\uc0c8\ub85c\uc6b4 \ud14c\uc774\ube14\ub85c \uc911\ubcf5\ub41c \ub370\uc774\ud130\ub294 \uc81c\uc678\ud558\uace0 \ubcf5\uc0ac"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"-- Insert unique professors into the new table\nINSERT INTO professors \nSELECT DISTINCT firstname, lastname, university_shortname \nFROM university_professors;\n\n-- Doublecheck the contents of professors\nSELECT * \nFROM professors;\n")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"-- Insert unique affiliations into the new table\nINSERT INTO affiliations \nSELECT DISTINCT firstname, lastname, function, organization \nFROM university_professors;\n\n-- Doublecheck the contents of affiliations\nSELECT * \nFROM affiliations;\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"migration \ud6c4 \ud544\uc694\uc5c6\ub294 table \uc0ad\uc81c"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"-- Delete the university_professors table\nDROP TABLE university_professors;\n")))),(0,r.kt)("h2",{id:"enforce-data-consistency-with-attribute-constraints"},"Enforce data consistency with attribute constraints"),(0,r.kt)("h3",{id:"integrity-constraints"},"Integrity constraints"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Attribute constraint",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Column integrity"),(0,r.kt)("li",{parentName:"ul"},"Domain integrity"),(0,r.kt)("li",{parentName:"ul"},"e.g. data type on column"))),(0,r.kt)("li",{parentName:"ul"},"Key constraint",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Entity integrity"),(0,r.kt)("li",{parentName:"ul"},"e.g. primary key"))),(0,r.kt)("li",{parentName:"ul"},"Referential integrity ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"foreign key\ub85c \uad00\ub9ac")))),(0,r.kt)("h3",{id:"constaint\uac00-\ud544\uc694\ud55c-\uc774\uc720"},"Constaint\uac00 \ud544\uc694\ud55c \uc774\uc720"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\uc81c\uc57d \uc870\uac74\uc774 \uc788\uc74c\uc73c\ub85c\uc11c \ub370\uc774\ud130\ub97c \ub3d9\uc77c\ud55c \ud615\ud0dc\ub97c \uac16\uac8c \ud568",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\uc77c\uad00\uc131 \uc81c\uacf5"),(0,r.kt)("li",{parentName:"ul"},"\ub370\uc774\ud130 \ud004\ub9ac\ud2f0 \ubb38\uc81c \ud574\uacb0 -> Data Scientist\uac00 \ud3b8\ud558\ub3c4\ub85d \uc81c\uacf5")))),(0,r.kt)("h3",{id:"data-type-casting"},"Data type casting"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\ud14c\uc774\ube14 \uc0dd\uc131 \ud6c4 \ub370\uc774\ud130 \ub123\uae30"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE transactions (\ntransaction_date date, \namount integer,\nfee text\n);\n\n-- Let's add a record to the table\nINSERT INTO transactions (transaction_date, amount, fee) \nVALUES ('2018-09-24', 5454, '30');\n\n-- Doublecheck the contents\nSELECT *\nFROM transactions;\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"type casting"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"-- Calculate the net amount as amount + fee\nSELECT transaction_date, amount + CAST(fee AS integer) AS net_amount \nFROM transactions;\n")))),(0,r.kt)("h3",{id:"domain-integrity"},"Domain integrity"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"table\uc5d0 \uc874\uc7ac\ud558\ub294 field(column)\uc758 \ubb34\uacb0\uc131\uc744 \ubcf4\uc7a5\ud558\uae30 \uc704\ud55c \uac83\uc73c\ub85c field\uc758 \ud0c0\uc785, NULL\uac12 \ud5c8\uc6a9 \ub4f1\uc5d0 \ub300\ud55c \uc0ac\ud56d\uc744 \uc815\uc758"),(0,r.kt)("li",{parentName:"ul"},"\uc62c\ubc14\ub978 \ub370\uc774\ud130\uc758 \uc785\ub825 \ub418\uc5c8\ub294\uc9c0\ub97c \ud655\uc778\ud558\ub294 \uac83"),(0,r.kt)("li",{parentName:"ul"},"Domain integrity\uac00 \uae68\uc9c0\ub294 \uacbd\uc6b0 \uc608\uc2dc",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\uc804\ud654\ubc88\ud638 field\uc5d0 \uc54c\ud30c\ubcb3\uc774 \uc785\ub825\ub418\ub294 \uacbd\uc6b0")))),(0,r.kt)("h3",{id:"postgresql\uc5d0\uc11c-\uac00\uc7a5-\uc77c\ubc18\uc801\uc778-type"},"PostgreSQL\uc5d0\uc11c \uac00\uc7a5 \uc77c\ubc18\uc801\uc778 type"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"text"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\ubaa8\ub4e0 \uae38\uc774\uc758 \ubb38\uc790\uc5f4 \ud5c8\uc6a9"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"varchar(n)"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\uac00\ubcc0 \uae38\uc774"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"char(n)"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"fixed-length(\uace0\uc815 \uae38\uc774) string"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"boolean"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"TRUE, FALSE, NULL(unknown)"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"date"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\uc2dc\uac04 \uc81c\uc678, 4 byte"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"time"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\ub0a0\uc9dc \uc81c\uc678, 8 byte"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"timestamp"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\uc2dc\uac04, \ub0a0\uc9dc \ubaa8\ub450 \ud3ec\ud568, 8 byte"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"numeric"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\uc77c\ubc18\uc801\uc778 \uc22b\uc790\ub4e4, \uc18c\uc218\ub3c4 \uac00\ub2a5"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"integer"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\uc815\uc218\ub9cc \ud5c8\uc6a9"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\uc774\ubc16\uc5d0\ub3c4 \ub2e4\ub978 type\ub4e4\uc774 \uc874\uc7ac\ud558\uba70 \ub300\ubd80\ubd84 SQL \ud45c\uc900\uc744 \ub530\ub984")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\uc790\uc138\ud55c \uac74 PostgreSQL documentation \ud655\uc778 ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"ALTER COLUMN"),"\uc744 \ud65c\uc6a9\ud558\uc5ec type \ubcc0\uacbd"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"-- Select the university_shortname column\nSELECT DISTINCT(university_shortname) \nFROM professors;\n\n-- Specify the correct fixed-length character type\nALTER TABLE professors\nALTER COLUMN university_shortname\nTYPE char(3);\n\n-- Change the type of firstname\nALTER TABLE professors\nALTER COLUMN firstname\nTYPE varchar(64);\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"USING"),"\uc744 \uc0ac\uc6a9\ud558\uc5ec \ud0c0\uc785 \ubcc0\uacbd"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"SUBSTRING"),"\uc744 \uc0ac\uc6a9\ud558\uc5ec firstname\uc744 16\uc790\ub85c \uc904\uc784")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"-- Convert the values in firstname to a max. of 16 characters\nALTER TABLE professors \nALTER COLUMN firstname \nTYPE varchar(16) \nUSING SUBSTRING(firstname FROM 1 FOR 16);\n")))),(0,r.kt)("h3",{id:"null-constraint"},"NULL constraint"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"field\uc758 NULL constraint\ub294 NULL \uc0c1\ud0dc\uac00 \uc874\uc7ac\ud558\ub294\uc9c0\ub97c \uc9c0\uc815"),(0,r.kt)("li",{parentName:"ul"},"NULL\uc740 \uc54c \uc218 \uc5c6\uac70\ub098 \uacb0\uc815\ub418\uc9c0 \uc54a\uc740 \ud2b9\uc218\ud55c \uc0c1\ud0dc\ub97c \uc758\ubbf8"),(0,r.kt)("li",{parentName:"ul"},"\ud5c8\uc6a9\ud558\uace0 \uc2f6\uc9c0 \uc54a\ub2e4\uba74 \ud14c\uc774\ube14\uc744 \uc0dd\uc131\ud560 \ub54c ",(0,r.kt)("inlineCode",{parentName:"li"},"NOT NULL"),"\uc744 \ucd94\uac00",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE students (\nssn integer not null,\nlastname varchar(64) not null,\nhome_phone integer,\noffice_phone integer\n);\n"))),(0,r.kt)("li",{parentName:"ul"},"\ud14c\uc774\ube14 \uc0dd\uc131 \ud6c4 \uc81c\uc57d \ucd94\uac00",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE students\nALTER COLUMN home_phone\nSET NOT NULL;\n"))),(0,r.kt)("li",{parentName:"ul"},"\ud14c\uc774\ube14 \uc0dd\uc131 \ud6c4 \uc81c\uc57d \uc0ad\uc81c",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE students\nALTER COLUMN home_phone\nDROP NOT NULL;\n")))),(0,r.kt)("h3",{id:"unique-constraint"},"Unique constraint"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\uc5f4\uc5d0 \ub300\ud55c \uc911\ubcf5 \ud56d\ubaa9\uc774 \uc5c6\ub294\uc9c0 \ud655\uc778"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"UNIQUE"),"\ub9cc \ubd99\uc5ec\uc8fc\uba74 \ub428",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE table_name (\n  column_name UNIQUE\n)\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ADD CONSTRAINT"),"\ub97c \uc0ac\uc6a9\ud558\uc5ec \uae30\uc874 \ud14c\uc774\ube14\uc5d0 \uc81c\uc57d \ucd94\uac00",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"NULL \uc81c\uc57d \uc870\uac74\uacfc \ud5f7\uac08\ub9b4 \uc218 \uc788\uc73c\ub2c8 \uc8fc\uc758")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE table_name\nADD CONSTRAINT some_name UNIQUE(column_name);\n")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\uc608\uc2dc",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"-- Make universities.university_shortname unique\nALTER TABLE universities\nADD CONSTRAINT university_shortname_unq UNIQUE(university_shortname);\n")))))),(0,r.kt)("h2",{id:"uniquely-identify-records-with-key-constraints"},"Uniquely identify records with key constraints"),(0,r.kt)("h3",{id:"key"},"Key"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\ud14c\uc774\ube14\uc758 \ud2b9\uc815 record(row)\ub97c \uc77d\uac70\ub098 \ubcc0\uacbd\ud558\ub824\uba74 record\ub07c\ub9ac \uad6c\ubd84\ud560 \uc218 \uc788\ub294 \uace0\uc720\uc758 key(\uc2dd\ubcc4\uc790)\uac00 \ud544\uc694"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\uac12\uc774 \uaf2d \uc788\uc5b4\uc57c \ud568 -> NULL X"),(0,r.kt)("li",{parentName:"ul"},"\uace0\uc720\uac12\uc744 \uac00\uc838\uc57c \ud568 -> \uc911\ubcf5 X"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"superkey"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"attribute\ub4e4\uc758 \uc9d1\ud569\uc73c\ub85c \uad6c\uc131\ub41c key"),(0,r.kt)("li",{parentName:"ul"},"Unique\ub294 \ub9cc\uc871\ud558\uc9c0\ub9cc Minimality\ub294 \ub9cc\uc871\ud558\uc9c0 \uc54a\uc74c",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Unique: \ud558\ub098\uc758 key \uac12\uc73c\ub85c \ud558\ub098\uc758 tuple\uc744 \uc720\uc77c\ud558\uac8c \uc2dd\ubcc4\ud560 \uc218 \uc788\uc5b4\uc57c \ud558\ub294 \uc870\uac74"),(0,r.kt)("li",{parentName:"ul"},"Minimality: key\ub97c \uad6c\uc131\ud558\ub294 attribute \uc911 \ud558\ub098\ub77c\ub3c4 \uc81c\uc678\ub420 \uacbd\uc6b0 \uc720\uc77c\ud558\uac8c \uc2dd\ubcc4\ud560 \uc218 \uc5c6\ub3c4\ub85d \uaf2d \ud544\uc694\ud55c \ucd5c\uc18c\uc758 attribute\ub85c \uad6c\uc131\ub418\uc5b4\uc57c \ud55c\ub2e4\ub294 \uc870\uac74"))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"candidate key(\ud6c4\ubcf4 \ud0a4)"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"minimal superkey"),(0,r.kt)("li",{parentName:"ul"},"attribute\ub97c \uc81c\uac70\ud558\uc5ec \ub354 \uac04\ub2e8\ud55c superkey\ub85c \ucd95\uc18c\ud560 \uc218 \uc5c6\ub294 superkey"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"SELECT, COUNT, DISTINCT"),"\ub97c \uc0ac\uc6a9\ud558\uc5ec key \uc2dd\ubcc4"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT COUNT(DISTINCT(firstname, lastname)) \nFROM professors;\n")))),(0,r.kt)("h3",{id:"primary-key"},"Primary key"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\ud14c\uc774\ube14\uc758 \uac01 \ud589(record)\uc744 \uace0\uc720 \uc2dd\ubcc4\uc790\ub85c \uc0ac\uc6a9\ud560 \uc218 \uc788\ub294 \ud558\ub098 \uc774\uc0c1\uc758 \uc5f4"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\uc911\ubcf5 \ub610\ub294 NULL \uac12\uc744 \ud5c8\uc6a9\ud558\uc9c0 \uc54a\ub294 \uc5f4\uc5d0 \uc815\uc758\ud574\uc57c \ud568 "),(0,r.kt)("li",{parentName:"ul"},"2\uac1c \uc774\uc0c1\uc758 \uc5f4\uc774 \uacb0\ud569\ud558\uc5ec \uace0\uc720\ud55c \uac12\uc744 \uac00\uc9c0\ub294 \uae30\ubcf8 \ud0a4\ub294 ",(0,r.kt)("inlineCode",{parentName:"li"},"compound key(\ubcf5\ud569 \ud0a4)"),"\ub77c\uace0 \ubd80\ub984 "))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\uac70\uc758 \ubaa8\ub4e0 DB\uc758 table\uc5d0\ub294 candidate key\uc5d0\uc11c \uc0ac\uc6a9\uc790\uac00 \uc120\ud0dd\ud55c primary key\uac00 \uc788\uc5b4\uc57c \ud568"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\uae30\ubcf8 \ud0a4\uac00 \uc544\ub2cc \ud6c4\ubcf4 \ud0a4\ub294 alternate key(\ub300\ub9ac \ud0a4)\ub77c\uace0 \ud568"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\uc2dc\uac04\uc774 \uc9c0\ub098\ub3c4 \ubcc0\uacbd\ub418\uc9c0 \uc54a\uc544\uc57c \ud568")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\uc6d0\ub798 \ucf54\ub4dc"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE products (\n  product_no integer UNIQUE NOT NULL,\n  name text,\n  price numeric\n);\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"primary key \uc9c0\uc815"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE products (\n  product_no integer PRIMARY KEY,\n  name text,\n  price numeric\n);\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\ub458 \uc774\uc0c1\uc758 primary key \uc9c0\uc815"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE example (\n  a integer,\n  b integer,\n  c integer,\n  PRIMARY KEY (a, c)\n);\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\uae30\uc874 \ud14c\uc774\ube14\uc5d0 primary key \uc81c\uc57d \uc870\uac74 \ucd94\uac00"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE table_name\nADD CONSTRAINT some_name PRIMARY KEY (column_name)  \n")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\uc608\uc2dc"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"-- Rename the organization column to id\nALTER TABLE organizations\nRENAME COLUMN organization TO id;\n\n-- Make id a primary key\nALTER TABLE organizations\nADD CONSTRAINT organization_pk PRIMARY KEY (id);\n")))))),(0,r.kt)("h3",{id:"natural-key-and-surrogate-key"},"Natural key and Surrogate key"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"primary key\ub294 \uac00\ub2a5\ud55c \uc801\uc740 \uc218\uc758 column\uc73c\ub85c \uad6c\uc131")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"record\uc758 primary key\ub294 \uc2dc\uac04\uc774 \uc9c0\ub098\ub3c4 \ubcc0\uacbd\ub418\uc9c0 \uc54a\uc544\uc57c \ud568")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"natural key(\uc790\uc5f0 \ud0a4)"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"entity\uc758 \uc815\ubcf4 \uc911 \uace0\uc720\ud55c \uac12\uc744 \uac00\uc838\uc11c \uac01 row\ub9c8\ub2e4 \uc2dd\ubcc4\ud560 \uc218 \uc788\ub294 \uc758\ubbf8\ub97c \uac00\uc9c0\ub294 column"),(0,r.kt)("li",{parentName:"ul"},"\ubc88\ud638\uac00 \uc544\ub2cc \uace0\uc720 \uac12"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"surrogate key(\ub300\ub9ac \ud0a4)"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"entity\uc5d0\uc11c \ud30c\uc0dd\ub41c \uc815\ubcf4\uac00 \uc544\ub2cc \uc784\uc758\uc758 \uace0\uc720 \uc2dd\ubcc4\uc790")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"\uc77c\ub828\ubc88\ud638"),"\uc640 \uac19\uc740 \uac00\uc0c1\uc758 \uac12\uc73c\ub85c \uae30\ubcf8 \ud0a4\uc758 \uc5ed\ud560\uc744 \ud558\ub294 column")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"postgreSQL\uc758 ",(0,r.kt)("inlineCode",{parentName:"p"},"serial"),"\uc744 \uc0ac\uc6a9\ud558\uc5ec \ucd94\uac00\ud558\ub294 \ubc29\ubc95"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\ubaa8\ub4e0 \ub808\ucf54\ub4dc\uc5d0 \ubc88\ud638\uac00 \uc0dd\uae30\uba70 \uc0c8\ub85c\uc6b4 \uac12\uc774 \ucd94\uac00\ub420 \ub54c\ub9c8\ub2e4 \uc790\ub3d9\uc73c\ub85c \uc99d\uac00\ub428")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE cars\nADD COLUMN id serial PRIMARY KEY;\n")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\uc608\uc2dc"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE professors \nADD COLUMN id serial;\n\n-- Make id a primary key\nALTER TABLE professors \nADD CONSTRAINT professors_pkey PRIMARY KEY (id);\n"))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"CONCAT"),"\uc744 \uc0ac\uc6a9\ud558\uc5ec \ub450 \uac1c\uc758 \uae30\uc874 \uc5f4\uc744 \uc0c8 \uc5f4\ub85c \uacb0\ud569"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE table_name\nADD COLUMN column_c varchar(256);\n\nUPDATE table_name\nSET column_c = CONCAT(column_a, column_b)\n\nALTER TABLE table_name\nADD CONSTRAINT pk PRIMARY KEY (column_c);\n")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\uc608\uc2dc"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"-- Count the number of distinct rows with columns make, model\nSELECT COUNT(DISTINCT(make, model)) \nFROM cars;\n\n-- Add the id column\nALTER TABLE cars\nADD COLUMN id varchar(128);\n\n-- Update id with make + model\nUPDATE cars\nSET id = CONCAT(make, model);\n\n-- Make id a primary key\nALTER TABLE cars\nADD CONSTRAINT id_pk PRIMARY KEY(id);\n")))))))),(0,r.kt)("h2",{id:"glue-together-tables-with-foreign-keys"},"Glue together tables with foreign keys"),(0,r.kt)("h3",{id:"foreign-key"},"Foreign key"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\ub2e4\ub978 table\uc758 primary key\ub97c \uc2dd\ubcc4\ud558\ub294 \ub370 \uc0ac\uc6a9\ud560 \uc218 \uc788\ub294 \ud558\ub098 \uc774\uc0c1\uc758 \uc5f4")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\ub3c4\uba54\uc778\uacfc \ub370\uc774\ud130 \uc720\ud615\uc774 \uae30\ubcf8 \ud0a4 \uc911 \ud558\ub098\uc640 \ub3d9\uc77c\ud574\uc57c \ud568")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\ucc38\uc870\ub41c \ud14c\uc774\ube14\uc758 \uae30\ubcf8 \ud0a4\uc5d0 \uac12\uc73c\ub85c \uc874\uc7ac\ud558\ub294 \uc678\ub798 \ud0a4 \uac12\ub9cc \ud5c8\uc6a9 -> \uc678\ub798 \ud0a4 \uc81c\uc57d \uc870\uac74(Referential integrity)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\uc678\ub798 \ud0a4\uac00 \ubc18\ub4dc\uc2dc \uc2e4\uc81c \ud0a4\uc77c \ud544\uc694\ub294 \uc5c6\uc74c -> \uc911\ubcf5, NULL \uac12 \ud5c8\uc6a9\ub418\uae30 \ub54c\ubb38")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\uae30\uc874 \ud14c\uc774\ube14\uc5d0 \uc678\ub798 \ud0a4 \ucd94\uac00 \ubc29\ubc95"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE a\nADD CONSTRAINT a_fkey FOREIGN KEY (b_id) REFERENCES b (id);\n")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\uc608\uc81c"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"-- Rename the university_shortname column\nALTER TABLE professors\nRENAME COLUMN university_shortname TO university_id;\n\n-- Add a foreign key on professors referencing universities\nALTER TABLE professors \nADD CONSTRAINT professors_fkey FOREIGN KEY (university_id) REFERENCES universities (id);\n"))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\ud14c\uc774\ube14\uc744 \uc0dd\uc131\ud558\uba74\uc11c \uc678\ub798 \ud0a4 \uc0dd\uc131"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE manufacturers (\n  name varchar(255) PRIMARY KEY);\n\nINSERT INTO manufacturers\nVALUES ('Ford'), ('VW'), ('GM');\nCREATE TABLE cars (\n  model varchar(255) PRIMARY KEY,\n  manufacturer_name varchar(255) REFERENCES manufacturers (name));\n\nINSERT INTO cars\nVALUES ('Ranger', 'Ford'), ('Beetle', 'VW');\n")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"-- Throws an error!\n-- \uc678\ub798 \ud0a4 \uc81c\uc57d \uc870\uac74\uc73c\ub85c \uc778\ud574 \uc800\uc7a5\ub418\uc9c0 \uc54a\uc740 \ub370\uc774\ud130\ub97c \ucd94\uac00\ud560 \uc218 \uc5c6\uc74c\nINSERT INTO cars\nVALUES ('Tundra', 'Toyota');  \n")))),(0,r.kt)("h3",{id:"nm-relationships-\uad6c\ud604"},"N:M-relationships \uad6c\ud604"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ub450 entity\ub97c \uac00\ub9ac\ud0a4\ub294 \ub450 \uac1c\uc758 \uc678\ub798 \ud0a4 \uc0ac\uc6a9"),(0,r.kt)("li",{parentName:"ul"},"primary key\uac00 \uc5c6\uc74c"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE affiliations (\nprofessor_id integer REFERENCES professors (id),\norganization_id varchar(256) REFERENCES organizations (id),\nfunction varchar(256)\n);\n")))),(0,r.kt)("h3",{id:"referential-integrity"},"Referential integrity"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\ub2e4\ub978 \ud14c\uc774\ube14\uc758 \ub808\ucf54\ub4dc\ub97c \ucc38\uc870\ud558\ub294 \ub808\ucf54\ub4dc\ub294 \ud56d\uc0c1 \uae30\uc874 \ub808\ucf54\ub4dc\ub97c \ucc38\uc870\ud574\uc57c \ud568")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\uc874\uc7ac\ud558\uc9c0 \uc54a\ub294 \ub808\ucf54\ub4dc\ub97c \uac00\ub9ac\ud0ac \uc218 \uc5c6\uc74c -> \uc870\uac74 \uc704\ubc18")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\uc774\ubbf8 \ucc38\uc870\ub41c \ud14c\uc774\ube14\uc758 \ub808\ucf54\ub4dc\uac00 \uc0ad\uc81c\ub418\uba74 \uc870\uac74\uc5d0 \uc704\ubc18\ub428")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\ub450 \uac1c\uc758 \ud14c\uc774\ube14\uacfc \uad00\ub828\uc788\ub294 \uc81c\uc57d \uc870\uac74\uc774\uae30\uc5d0 \uc678\ub798 \ud0a4\uc640 \uc5f0\uad00\ub428")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"ON DELETE NO ACTION")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\ud14c\uc774\ube14\uc5d0 \uc788\ub294 \uae30\uc874 \ud589\uc758 \uc678\ub798 \ud0a4\uc5d0\uc11c \ucc38\uc870\ud558\ub294 \ud0a4\uac00 \uc788\ub294 \ud589\uc744 \uc0ad\uc81c\ud558\ub824 \ud560 \ub54c \uc624\ub958\ub97c \ubc1c\uc0dd\uc2dc\ud0a4\uace0 DELETE \ucde8\uc18c(RESTRICT)")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE a (\n  id integer PRIMARY KEY,\n  column_a varchar(64),\n  ...,\n  b_id integer REFERENCES b (id) ON DELETE NO ACTION\n);\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"ON DELETE CASCADE")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\ucc38\uc870\ub418\ub294 \ubd80\ubaa8 \ud14c\uc774\ube14\uc758 \uae30\ubcf8 \ud0a4 \uac12\uc5d0 \ub300\ud55c \ubcc0\uacbd \uc0ac\ud56d\uc744 \uc790\uc2dd \ud14c\uc774\ube14\uc5d0\ub3c4 \uc801\uc6a9 -> \uc0ad\uc81c")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE a (\n  id integer PRIMARY KEY,\n  column_a varchar(64),\n  ...\n  b_id integer REFERENCES b (id)\n);\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"RESTRICT"),"\uc640 ",(0,r.kt)("inlineCode",{parentName:"p"},"NO ACTION"),"\uc740 ",(0,r.kt)("inlineCode",{parentName:"p"},"MySQL"),"\uc5d0\uc11c\ub294 \ub3d9\uc77c\ud55c \uc758\ubbf8\ub97c \uac00\uc9d0")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"PostgreSQL")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"RESTRICT"),": \ucc38\uc870\ub41c \ub370\uc774\ud130\uac00 \uc788\uc744 \uacbd\uc6b0 \uc0ad\uc81c\ud558\uc9c0 \uc54a\uc73c\uba70 integrity \uac80\uc99d\uc744 tramsaction \uc774\uc804\uc5d0 \uc2e4\ud589"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"NO ACTION"),": \ub370\uc774\ud130 \ubcc0\uacbd \ub610\ub294 \uc0ad\uc81c\ub97c \uc9c4\ud589\ud558\uace0 \ubcc0\uacbd \ub610\ub294 \uc0ad\uc81c\ub41c \ub370\uc774\ud130\uc758 integrity\ub97c \uac80\uc0ac"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"SET NULL"),": \ub808\ucf54\ub4dc\uc758 \uc678\ub798 \ud0a4 \uac12\uc744 NULL\ub85c \uc124\uc815")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"SET DEFAULT"),": \uc5f4\uc5d0 \ub300\ud55c \uae30\ubcf8\uac12\uc744 \uc9c0\uc815\ud55c \uacbd\uc6b0 \uc791\ub3d9, default \uac12\uc73c\ub85c \uc790\ub3d9 \ubcc0\uacbd"))),(0,r.kt)("h2",{id:"references"},"References"),(0,r.kt)("blockquote",null,(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},"Alan Beaulieu, Learning SQL: Generate, Manipulate, and Retrieve Data, o'reilly, 2020"))))}u.isMDXComponent=!0},1644:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/entity-relationship-844b6b5b9e3ecac713bb5e717420d713.jpg"}}]);