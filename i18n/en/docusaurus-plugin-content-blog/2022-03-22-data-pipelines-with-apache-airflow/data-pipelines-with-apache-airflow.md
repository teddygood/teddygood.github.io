---
authors: teddygood
date: '2022-03-22'
description: Building and Managing Custom Components in Airflow-Centric Workflows
  | I♥Cloud Jpub's Cloud Series 22
draft: false
keywords:
- Airflow
- Apache
- Pipeline
- Data Engineering
slug: /data-pipelines-with-apache-airflow
tags:
- Book Review
title: "\U0001F4D6Apache Airflow-based data pipeline"
---

:::info  
This review was written as part of the Jpub \<Trusted IT Book Reviewer\> activity, with the book provided for review.  
:::

## Book Info

:::tip  
Click the book image to go to the Kyobook store!  
:::

[![Book](../assets/review/data-pipelines-with-apache-airflow.jpg)](https://www.kyobobook.co.kr/product/detailViewKor.laf?ejkGb=KOR&mallGb=KOR&barcode=9791191600681&orderClick=LEa&Kc=)

- **Title**: Data Pipelines with Apache Airflow  
- **Authors**: Bas P. Harenslak, Julian Rutger de Ruiter  
- **Translators**: Kim Jeongmin, Moon Sunhong  
- **Publisher**: Jpub  
- **Publication Date**: March 16, 2022  

<!-- truncate -->

## Book Review

### Structure

The book is divided into four main parts: *Basics*, *Intermediate*, *Practice*, and *Using Airflow in the Cloud*.  
The *Basics* section covers data pipeline concepts, defining Airflow DAGs (Directed Acyclic Graphs), scheduling, and dependency management. Here, you’ll work with the Taskflow API introduced in Airflow 2.x.  
The *Intermediate* part teaches how to run tasks in external systems, testing, and building pipelines with containers. The use of examples to explain concepts was particularly impressive.  
In *Practice*, the focus shifts to building efficient, maintainable pipelines and considerations for deploying Airflow in production. It’s not just theoretical—detailed explanations make this a great reference for future use.  
*Using Airflow in the Cloud* walks through designing architectures for deploying Airflow on AWS, Azure, and GCP. It’s not just about *how*—the inclusion of examples makes this section stand out.

### Docker Environment

Almost every chapter includes a *docker-compose.yml* file, allowing you to run the code easily in a Docker environment. This is the book’s strongest feature. I tried setting up the environment locally and also with Docker, and Docker was undeniably more convenient. If you’re reading this book, definitely take advantage of the Docker setup.

### Appendices

The appendices are also packed with useful information. For example, *Appendix A: Example Code Execution* briefly explains the code structure and provides commands to run examples using Docker. Even if you’ve never used Docker before, this appendix makes it easy to set up the environment. *Appendix B: Airflow 2 Package Structure* compares the package differences between Airflow 1 and 2. These thoughtful additions were a nice touch.

## Intended Audience

As stated in the introduction, this book is aimed at DevOps engineers, data engineers, and machine learning engineers with intermediate or advanced Python skills. If you’re just starting in data engineering or lack foundational CS knowledge, it might be challenging. However, this is currently the only Korean IT book dedicated to Airflow, making it a worthwhile read if you’re interested in pipelines or Airflow. While it’s a bit difficult, the abundance of situational examples makes it highly recommended for anyone planning to use Airflow.