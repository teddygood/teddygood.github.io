---
authors: teddygood
date: '2021-10-30'
description: Let's understand and build a container infrastructure environment!
draft: false
keywords:
- Docker
- Kubernetes
- k8s
slug: /k8s-and-docker-for-container-infrastructure
tags:
- Book Review
title: "\U0001F4D6Kubernetes/Docker for building a container infrastructure environment"
---

:::info  
This review was written after receiving the book as part of the *Gilbut 16th Developer Reviewer* program.  
:::

## Book Info

:::tip  
Click the book image to go to the Kyobobook site!  
:::

[![Book](../assets/review/k8s-and-docker-for-container-infrastructure.jpg)](http://www.kyobobook.co.kr/product/detailViewKor.laf?ejkGb=KOR&mallGb=KOR&barcode=9791165215743&orderClick=LEa&Kc=)

- Title: Kubernetes/Docker for Container Infrastructure Setup  
- Authors: Jo Hoon, Shim Geun-woo, Moon Sung-joo  
- Publisher: Gilbut  
- Publication Date: June 7, 2021  

<!-- truncate -->

## Book Review

### Detailed Explanations with Images  

While not fully in color, the book provides thorough explanations with images. Most technical books assume readers are developers and skip installation steps, but this one includes detailed visual guides for those processes. It also explains troubleshooting scenarios with text and images, making it very reader-friendly.  

*Gilbut*’s books often include a page with author/translator introductions and the phrase, *"Experience the dedication that saves you 1 second!"* Honestly, that slogan didn’t resonate much, but the follow-up line—*"No matter how fast the world moves, books can’t be rushed."*—did. As the authors note, IT evolves rapidly, but that doesn’t mean books should be hastily produced.  

### Tools for Hands-On Practice  

Beyond Kubernetes and Docker, the book introduces tools like *Oracle VM VirtualBox* for virtual machines and *Vagrant* for provisioning. It also covers *Jenkins* for CI/CD, *Prometheus* for monitoring, and *Grafana* for visualization. Since I’ve been interested in DevOps, this book gave me a practical overview of the entire workflow.  

### Version Considerations  

I recommend sticking to the versions specified in the book. I wasted time trying the latest versions, but realized that unless you’re immediately joining a cutting-edge project (which is rare), following the book’s setup is more efficient. If you’re confident in customizing OS configurations, you can deviate, but otherwise, the book’s examples are safer.  

### Areas for Improvement  

The virtual machine images required a lot of RAM, which was challenging on my 8GB laptop. Including minimum system requirements would have been helpful.  

The authors pre-configured OS images available on *Vagrant Cloud*, which was convenient, but I wish the book explained how to customize those images. While Vagrant Cloud notes changes made to each version, I thought, *"Wouldn’t it be better if this was in the book?"* Since the focus is on Kubernetes and Docker, Linux setup details were likely omitted.  

### Recommended Readers  

This isn’t a beginner-friendly book. It assumes familiarity with UNIX commands, operating systems, and shell scripting. Basic knowledge of Kubernetes and Docker is also recommended. However, if you’re interested in container infrastructure and want to build hands-on experience, this is a great resource.