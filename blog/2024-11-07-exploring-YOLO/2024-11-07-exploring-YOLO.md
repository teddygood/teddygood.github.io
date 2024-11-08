---
title: "📄지금까지의 YOLO"
date: '2024-11-07'
authors: teddygood
tags: ["Paper Review"]
draft: true
slug: '/exploring-YOLO'
description: 
keywords:
  - YOLO
  - You Only Look Once
  - Object Detection
---

## You Only Look Once

흔히 YOLO는 사람들에게 You Only Live Once라고 많이 알려져 있다. 하지만 Computer Vision에서는 **You Only Look Once**라고 불린다. YOLO는 Object Detection 분야에서 빠르고 뛰어난 성능을 갖고 있는 모델이며, 실시간 객체 탐지 기능도 지원한다. 현재 YOLO 모델은 11 버전까지 나온 상태이며, 이번 글에서는 YOLOv1부터 지금까지의 YOLO 모델들을 다뤄보고자 한다. 

![img.png](../assets/paper/yolo-timeline.png)

YOLO의 전체적인 timeline은 위와 같다. 위의 이미지에서는 v8까지 보여지고 있지만, 2024년 2월에는 YOLOv9가 공개됐고, 그 해 5월에는 YOLOv10, 그리고 가장 최근 버전인 YOLOv11은 10월 30일에 공개됐다. 

YOLO의 개발자인 Joseph Redmon은 YOLOv3까지 개발 후 윤리적 이유로 YOLO 연구를 중단했다. 그 후 YOLOv4은 다른 저자들이 개발했고, YOLOv5는 Ultralytics에서 개발됐다. 이후 v6는 meituan에서, v7은 v4의 일부 저자들이 개발했고, v8부터는 쭉 Ultralytics에서 공개했다.

## Object Detection

Object Detection은 이미지나 비디오에서 특정 객체의 위치를 찾고 해당 객체가 무엇인지 분류하는 기술이다.

YOLO는 Object Detection 분야에서 많이 사용되는 모델 중 하나이며 Object Detection 분야에는 YOLO 이외에도 다양한 모델들이 있다.

### YOLOv1



## Reference

- [A Comprehensive Review of YOLO Architectures in Computer Vision: From YOLOv1 to YOLOv8 and YOLO-NAS](https://www.mdpi.com/2504-4990/5/4/83)
- [YOLOv1: You Only Look Once: Unified, Real-Time Object Detection](https://arxiv.org/abs/1506.02640)