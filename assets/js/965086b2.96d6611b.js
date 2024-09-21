"use strict";(self.webpackChunkmy_blog=self.webpackChunkmy_blog||[]).push([[6471],{8252:(e,r,i)=>{i.r(r),i.d(r,{assets:()=>t,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var n=i(4848),s=i(8453);const o={title:"DRF Serializers",date:"2024-05-28",draft:!1},l=void 0,a={id:"Django/DRF-Serializers",title:"DRF Serializers",description:"Serializer",source:"@site/wiki/Django/DRF-Serializers.md",sourceDirName:"Django",slug:"/Django/DRF-Serializers",permalink:"/wiki/Django/DRF-Serializers",draft:!1,unlisted:!1,editUrl:"https://github.com/teddygood/teddygood.github.io/tree/main/wiki/Django/DRF-Serializers.md",tags:[],version:"current",frontMatter:{title:"DRF Serializers",date:"2024-05-28",draft:!1},sidebar:"sidebar",previous:{title:"Hugo PaperMod theme \ud3f0\ud2b8 \ubcc0\uacbd",permalink:"/wiki/Blog/change-papermod-theme-font"},next:{title:"Flask",permalink:"/wiki/Flask/"}},t={},d=[{value:"Serializer",id:"serializer",level:2},{value:"\uac04\ub2e8 \uc0ac\uc6a9\ubc95",id:"\uac04\ub2e8-\uc0ac\uc6a9\ubc95",level:2},{value:"model \uc815\uc758",id:"model-\uc815\uc758",level:3},{value:"Serializer \uc815\uc758",id:"serializer-\uc815\uc758",level:3},{value:"Serializer \ud65c\uc6a9",id:"serializer-\ud65c\uc6a9",level:3},{value:"\ud83c\udf10 References",id:"-references",level:2}];function c(e){const r={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h2,{id:"serializer",children:"Serializer"}),"\n",(0,n.jsx)(r.p,{children:"\uc9c1\ub82c\ud654(serializer)\uc640 \uc5ed\uc9c1\ub82c\ud654(deserialize) \uae30\ub2a5\uc744 \ub3d9\uc2dc\uc5d0 \uac16\uace0 \uc788\ub294 DRF\uc758 \uae30\ub2a5\uc774\ub2e4. \ud074\ub77c\uc774\uc5b8\ud2b8\uc640 \uc11c\ubc84 API \uac04 \ub370\uc774\ud130 \uc591\uc2dd\uc744 \ub9de\ucdb0\uc8fc\ub294 \ubcc0\ud658\uae30\ub77c\uace0 \uc0dd\uac01\ud558\uba74 \ub41c\ub2e4. serializer\ub294 python object\ub97c JSON \uac19\uc740 \ub370\uc774\ud130 \ud3ec\ub9f7\uc73c\ub85c \ubcc0\ud658\ud558\ub294 \uac70\uace0, deserializer\ub294 JSON \ub370\uc774\ud130\ub97c python object\ub85c \ubcc0\ud658\ud558\ub294 \uac83\uc744 \uc758\ubbf8\ud55c\ub2e4. DRF\uc758 Serializer\ub294 \uc774\ub7f0 \uc791\uc5c5\uc744 \uc790\ub3d9\uc73c\ub85c \ucc98\ub9ac\ud574\uc918\uc11c API \uac1c\ubc1c\uc744 \uc27d\uac8c \ub9cc\ub4e4\uc5b4\uc900\ub2e4."}),"\n",(0,n.jsx)(r.h2,{id:"\uac04\ub2e8-\uc0ac\uc6a9\ubc95",children:"\uac04\ub2e8 \uc0ac\uc6a9\ubc95"}),"\n",(0,n.jsx)(r.h3,{id:"model-\uc815\uc758",children:"model \uc815\uc758"}),"\n",(0,n.jsxs)(r.p,{children:["\uba3c\uc800 ",(0,n.jsx)(r.code,{children:"models.py"}),"\ub97c \ub9cc\ub4e4\uc5b4 Django \ubaa8\ub378\uc744 \uc815\uc758\ud55c\ub2e4. \uc608\ub97c \ub4e4\uc5b4 Book \ubaa8\ub378\uc744 \uc815\uc758\ud574\ubcf8\ub2e4."]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:"from django.db import models  \n  \nclass Book(models.Model):  \n    title = models.CharField(max_length=100)  \n    author = models.CharField(max_length=100)  \n    published_date = models.DateField()  \n    isbn = models.CharField(max_length=13)\n"})}),"\n",(0,n.jsx)(r.h3,{id:"serializer-\uc815\uc758",children:"Serializer \uc815\uc758"}),"\n",(0,n.jsxs)(r.p,{children:["\ub2e4\uc74c\uc73c\ub85c ",(0,n.jsx)(r.code,{children:"serializers.py"}),"\ub97c \ub9cc\ub4e4\uace0 serializer\ub97c \uc815\uc758\ud55c\ub2e4."]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:"from rest_framework import serializers  \nfrom .models import Book  \n  \nclass BookSerializer(serializers.ModelSerializer):  \n    class Meta:  \n        model = Book  \n        fields = ['id', 'title', 'author', 'published_date', 'isbn']\n"})}),"\n",(0,n.jsx)(r.h3,{id:"serializer-\ud65c\uc6a9",children:"Serializer \ud65c\uc6a9"}),"\n",(0,n.jsxs)(r.p,{children:["\uc774\ubc88\uc5d0\ub294 Serializer \uc778\uc2a4\ud134\uc2a4\ub97c \uc0dd\uc131\ud558\uace0 \ub370\uc774\ud130\ub97c \uc9c1\ub82c\ud654\ud574\ubcf8\ub2e4. ",(0,n.jsx)(r.code,{children:"views.py"}),"\uc5d0 \ucf54\ub4dc\ub97c \uc791\uc131\ud55c\ub2e4."]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:"from rest_framework.decorators import api_view  \nfrom rest_framework.response import Response  \nfrom .models import Book  \nfrom .serializers import BookSerializer  \n  \n@api_view(['GET'])  \ndef get_book(request, pk):  \n    try:  \n        book = Book.objects.get(pk=pk)  \n    except Book.DoesNotExist:  \n        return Response(status=404)  \n  \n    serializer = BookSerializer(book)  \n    return Response(serializer.data)\n"})}),"\n",(0,n.jsxs)(r.p,{children:["\uc704\uc758 \ucf54\ub4dc\uc5d0\uc11c ",(0,n.jsx)(r.code,{children:"get_book"}),"\uc740 Book model \uc778\uc2a4\ud134\uc2a4\ub97c JSON\uc73c\ub85c \ubcc0\ud658\ud558\uc5ec \ud074\ub77c\uc774\uc5b8\ud2b8\uc5d0 \ubc18\ud658\ud55c\ub2e4."]}),"\n",(0,n.jsx)(r.p,{children:"\ub2e4\uc74c\uc73c\ub85c \uc5ed\uc9c1\ub82c\ud654\ub97c \ud574\ubcf8\ub2e4. POST\ub97c \uc0ac\uc6a9\ud558\uc5ec \ud074\ub77c\uc774\uc5b8\ud2b8\ub85c\ubd80\ud130 \ubc1b\uc740 JSON \ub370\uc774\ud130\ub97c Python object\ub85c \ubcc0\ud658\ud560 \uc218 \uc788\ub2e4."}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:"@api_view(['POST'])  \ndef create_book(request):  \n    serializer = BookSerializer(data=request.data)  \n    if serializer.is_valid():  \n        serializer.save()  \n        return Response(serializer.data, status=201)  \n    return Response(serializer.errors, status=400)\n"})}),"\n",(0,n.jsxs)(r.p,{children:["\uc704\uc758 \ucf54\ub4dc\uc5d0\uc11c ",(0,n.jsx)(r.code,{children:"create_book"}),"\uc740 \ud074\ub77c\uc774\uc5b8\ud2b8\ub85c\ubd80\ud130 \ubc1b\uc740 JSON \ub370\uc774\ud130\ub97c Book \uc778\uc2a4\ud134\uc2a4\ub85c \ubcc0\ud658\ud558\uace0 \ub370\uc774\ud130\ubca0\uc774\uc2a4\uc5d0 \uc800\uc7a5\ud55c\ub2e4."]}),"\n",(0,n.jsx)(r.h2,{id:"-references",children:"\ud83c\udf10 References"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"https://www.django-rest-framework.org/api-guide/serializers/",children:"DRF Serializers"})}),"\n"]})]})}function h(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},8453:(e,r,i)=>{i.d(r,{R:()=>l,x:()=>a});var n=i(6540);const s={},o=n.createContext(s);function l(e){const r=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),n.createElement(o.Provider,{value:r},e.children)}}}]);