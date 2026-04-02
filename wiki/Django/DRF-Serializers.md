---
title: "DRF Serializers"
date: '2024-05-28'
draft: false
---

## Serializer

직렬화(serializer)와 역직렬화(deserialize) 기능을 동시에 갖고 있는 DRF의 기능이다. 클라이언트와 서버 API 간 데이터 양식을 맞춰주는 변환기라고 생각하면 된다. serializer는 python object를 JSON 같은 데이터 포맷으로 변환하는 거고, deserializer는 JSON 데이터를 python object로 변환하는 것을 의미한다. DRF의 Serializer는 이런 작업을 자동으로 처리해줘서 API 개발을 쉽게 만들어준다.

## 간단 사용법
### model 정의

먼저 `models.py`를 만들어 Django 모델을 정의한다. 예를 들어 Book 모델을 정의해본다.

```python
from django.db import models  
  
class Book(models.Model):  
    title = models.CharField(max_length=100)  
    author = models.CharField(max_length=100)  
    published_date = models.DateField()  
    isbn = models.CharField(max_length=13)
```
### Serializer 정의

다음으로 `serializers.py`를 만들고 serializer를 정의한다.

```python
from rest_framework import serializers  
from .models import Book  
  
class BookSerializer(serializers.ModelSerializer):  
    class Meta:  
        model = Book  
        fields = ['id', 'title', 'author', 'published_date', 'isbn']
```

### Serializer 활용

이번에는 Serializer 인스턴스를 생성하고 데이터를 직렬화해본다. `views.py`에 코드를 작성한다.

```python
from rest_framework.decorators import api_view  
from rest_framework.response import Response  
from .models import Book  
from .serializers import BookSerializer  
  
@api_view(['GET'])  
def get_book(request, pk):  
    try:  
        book = Book.objects.get(pk=pk)  
    except Book.DoesNotExist:  
        return Response(status=404)  
  
    serializer = BookSerializer(book)  
    return Response(serializer.data)
```

위의 코드에서 `get_book`은 Book model 인스턴스를 JSON으로 변환하여 클라이언트에 반환한다.

다음으로 역직렬화를 해본다. POST를 사용하여 클라이언트로부터 받은 JSON 데이터를 Python object로 변환할 수 있다.

```python
@api_view(['POST'])  
def create_book(request):  
    serializer = BookSerializer(data=request.data)  
    if serializer.is_valid():  
        serializer.save()  
        return Response(serializer.data, status=201)  
    return Response(serializer.errors, status=400)
```

위의 코드에서 `create_book`은 클라이언트로부터 받은 JSON 데이터를 Book 인스턴스로 변환하고 데이터베이스에 저장한다.

## References

- [DRF Serializers](https://www.django-rest-framework.org/api-guide/serializers/)
