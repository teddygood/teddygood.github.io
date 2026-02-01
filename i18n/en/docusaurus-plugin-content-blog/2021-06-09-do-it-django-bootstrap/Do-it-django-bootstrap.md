---
authors: teddygood
date: '2021-06-09'
description: Everything You Need to Know About Server-Side JavaScript for the Modern
  Web
draft: false
keywords:
- Django
- Python
- Bootstrap
- Docker
slug: /Do-it-django-bootstrap
tags:
- Book Review
title: "\U0001F4D6Do It! Django + Bootstrap: The Ultimate Guide to Python Web Development"
---

## Book Info

:::tip
Click the book image to go to the Kyobobook site!
:::

[![책](../assets/review/Do-it-Django-Bootstrap.jpg)](http://www.kyobobook.co.kr/product/detailViewKor.laf?ejkGb=KOR&mallGb=KOR&barcode=9791163032069&orderClick=LET&Kc=)

- Title: Do it! Django + Bootstrap: The Ultimate Guide to Python Web Development
- Authors: Lee Seong-yong, Kim Tae-gon
- Publisher: Easys Publishing
- Release Date: 2021-01-18

{/* truncate */}


## Intro

I once saw people using Django in "Like Lions" and thought it looked like an easy stack for web beginners to study. Back then, I failed to learn Django because I didn't know how to study programming on my own. I guess I just wanted someone to spoon-feed me the knowledge. Anyway, after that, I gave up on Django and started learning other stacks.

Recently, I decided to study Django again and was considering what to learn from when I found out two Django books were released this year: `Do it! Jump to Django` and `Do it! Django + Bootstrap: The Ultimate Guide to Python Web Development`.

There were other options like the official Django documentation and *Two Scoops of Django*, but I didn’t read the latter because it’s in English and would take too long. There’s a Korean translation, but it was published in 2016 and uses older versions, so I didn’t choose it.

In the end, I decided to read one of the Do it! books and chose `Do it! Django + Bootstrap: The Ultimate Guide to Python Web Development` because it uses Docker. I also referenced [Jump to Django](https://wikidocs.net/book/4223) from Wikidocs while reading.

## Book Review

### Web Development, Deployment, and Operations

This book is 640 pages thick, which might make you think, "Why is a Django book so long?" But considering it includes all the code, covers Django, Bootstrap, and deployment, 640 pages isn’t even enough. I think it’s amazing that they managed to fit everything into one book—and this is the biggest strength of this book, in my opinion.

### Technologies Used

The book says it teaches you to build a blog, but you’re actually creating a community platform. You’ll implement login functionality, posting, and comments—basically CRUD (Create, Read, Update, Delete) operations commonly used in Django.

#### Frontend

The frontend section teaches the necessary parts of HTML, CSS, and JavaScript and how to use Bootstrap to style your app. Personally, I think it would have been better if they covered React instead of Bootstrap, but that would have made the book over 1,000 pages. Also, React is harder for beginners who haven’t mastered HTML, CSS, and JavaScript, so Bootstrap was a practical choice for quick implementation.  

Note that the Bootstrap version used in the book is outdated, so you might need to refer to the official documentation if you use the latest version.

#### Git

Every time you write code, you commit and push to GitHub. This was helpful because it showed me when to upload changes during a project.

#### Docker, AWS

This was my first time using Docker, so it was a bit challenging. The book gives a good introduction to deploying with Docker. It also uses AWS Lightsail, which I tried for the first time and found user-friendly for AWS beginners. Plus, the first month is free, so there’s no need to worry about costs (though I’ve had unexpected charges from AWS before, but it’s probably not a big deal).

#### TDD

Test-Driven Development (TDD) is something I’d only heard about from Java developers. This book introduced me to TDD in Django, and it takes up a significant portion of the content. You write test code before implementing features, which was the most fun part for me.

#### Django

This is the most important section. You’ll create a project, implement and use the MTV pattern, FBV, CBV, one-to-many, and many-to-many relationships. The code is thoroughly explained, which impressed me. The book also introduces useful Django packages. The only downside is the lack of content on Django REST framework.

### Concepts

While not super detailed, this book covers more than the basics of Django. As the subtitle says, "Learn Web Development by Building," it explains concepts step-by-step while building a project. So, you might find some concepts a bit lacking in depth.

The authors sometimes intentionally include mistakes to show common pitfalls. There are also "Good to Know" sections that explain additional concepts, which were interesting to read.

### Struggles

My biggest worry while reading was, "Will I struggle because of version differences?" I had the same concern when I first learned Django. In the end, I did face some deployment issues due to updated package versions and my lack of Docker experience. Thankfully, the author’s [Do It Django](https://doitdjango.com/) site had a Q&A section that helped me resolve problems.

This was the first time I had to refer to so many external documents while reading a book. I checked GitHub issues, official package docs, Stack Overflow, and more. That’s why this book took me longer to read.

I also tried using Bootstrap 5.0.1 instead of the book’s version (4.5) and had to rely heavily on the official Bootstrap documentation.

Fortunately, Django version differences didn’t cause major issues.  

Since I bought the first edition, there were indentation and typo errors, which added to the struggles. As someone who reads books carefully, I found this a bit disappointing.

## Recommended Readers

If you want to try the latest versions, I recommend studying HTML, CSS, and JavaScript from Opentutorials (생활코딩) first. For Django, basic Python knowledge (functions, classes, inheritance) is a must. While web scraping experience would be helpful, it’s not required.

This book is great for anyone who wants to experience web development with Python. You’ll quickly go through development, deployment, and operations.