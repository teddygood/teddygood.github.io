---
title: "📄지금까지의 YOLO"
date: '2024-11-07'
authors: teddygood
tags: ["Paper Review"]
draft: true
slug: '/exploring-YOLO'
description: You Only Live Once 아님
keywords:
  - YOLO
  - You Only Look Once
  - Object Detection
---

{/* truncate */}


## You Only Look Once

흔히 YOLO는 사람들에게 You Only Live Once라고 많이 알려져 있다. 하지만 Computer Vision에서는 **You Only Look Once**라고 불린다. YOLO는 Object Detection 분야에서 빠르고 뛰어난 성능을 갖고 있는 모델이며, 실시간 객체 탐지 기능도 지원한다. 현재 YOLO 모델은 11 버전까지 나온 상태이며, 이번 글에서는 YOLOv1부터 지금까지의 YOLO 모델들을 다뤄보고자 한다. 

![img.png](../assets/paper/yolo-timeline.png)

YOLO의 전체적인 timeline은 위와 같다. 위의 이미지에서는 v8까지 보여지고 있지만, 2024년 2월에는 YOLOv9가 공개됐고, 그 해 5월에는 YOLOv10, 그리고 가장 최근 버전인 YOLOv11은 10월 30일에 공개됐다. 

YOLO의 개발자인 Joseph Redmon은 YOLOv3까지 개발 후 윤리적 이유로 YOLO 연구를 중단했다. 그 후 YOLOv4은 다른 저자들이 개발했고, YOLOv5는 Ultralytics에서 개발됐다. 이후 v6는 meituan에서, v7은 v4의 일부 저자들이 개발했고, v8부터는 쭉 Ultralytics에서 공개했다.

v4 이후에는 서로 다른 팀들이 각자 개선을 이뤄 발표하면서 버전 번호가 곧 성능 순서를 의미하지는 않게 됐다. 예를 들어 YOLOv5 v7.0(2022년 11월)과 YOLOv6 v3.0(2023년 1월)은 YOLOv7(2022년 7월)보다 이후에 릴리즈됐다.

## Object Detection

Object Detection은 이미지나 비디오에서 특정 객체의 존재 여부를 확인하고, 그 위치와 종류를 식별하는 컴퓨터 비전의 한 분야라고 할 수 있다. 조금 더 자세히 설명하면 다양한 크기와 위치에 있는 여러 개의 객체를 인식하고, 바운딩 박스로 표시하여 객체의 위치와 어떤 종류의 객체인지 알려주는 기술이다.

이 글에서 Object Detection 자체를 자세히 다루지는 않기에 궁금하다면 아래의 논문들을 참고해보길 바란다.

![img.png](../assets/paper/object-detection-paper-list.png)

위의 이미지는 [deep_learning_object_detection](https://github.com/hoya012/deep_learning_object_detection)에서 가져왔다. 몇 년 전 한창 비전 분야가 활발했을 때 [텐서플로우코리아(현 AGI-KR)](https://www.facebook.com/groups/agikr/)에 돌아다녔던 기억이 난다. 오래된 정보라 출처를 못 찾을 줄 알았는데 다행히 찾을 수 있었다. 빨간색은 당시 이 레포를 만든 분이 필수로 읽어야 한다고 생각하는 논문이고, 다른 논문들도 중요하지만 시간이 된다면 읽어보는 걸 추천하셨다. 참고로 큰 글씨가 논문 또는 모델 이름이고, 작은 글씨는 학회와 논문이 출간된 연도이다.

## YOLOv1

### Architecture

![img.png](../assets/paper/yolov1-architecture.png)

YOLOv1은 24개의 convolutional layer와 2개의 fully connected layer로 구성되며, 마지막 레이어를 제외한 모든 레이어는 leaky ReLU 활성화 함수를 사용하며, 마지막 레이어는 linear 활성화 함수를 사용한다. GoogLeNet 및 Network in Network(NIN) 구조에서 영감을 받아 1×1 convolution을 활용해 feature map 수를 줄이고 파라미터 수를 최적화했다. 별도로 Fast YOLO라고 불리는 경량 모델은 9개의 convolutional layer로 구성된다.

### 작동 원리

YOLOv1 작동 원리

YOLOv1은 객체 탐지 과정을 통합하여 모든 bounding box를 동시에 탐지한다. 이를 위해 입력 이미지를  $S \times S$  그리드로 나누고, 각 그리드 요소에서 $B$개의 bounding box와 해당 클래스 $C$에 대한 confidence를 예측한다. 각 bounding box 예측은 5개의 값 $P_c, b_x, b_y, b_h, b_w$로 구성된다.

- $P_c$ : 해당 bounding box에 객체가 포함될 가능성을 나타내는 confidence score
- $b_x, b_y$ : 그리드 셀 기준 bounding box의 중심 좌표
- $b_h, b_w$ : 전체 이미지에 대한 bounding box의 높이와 너비

YOLO의 출력은  $S \times S \times (B \times 5 + C)$ 크기의 텐서로 제공되며, Non-Maximum Suppression(NMS)을 통해 중복 탐지를 제거한다.

### 학습 방식

YOLOv1은 ImageNet 데이터셋에서 224×224 해상도로 초기 20개 레이어를 사전 학습한 후, PASCAL VOC 2007 및 VOC 2012 데이터셋으로 448×448 해상도로 미세 조정했다. 데이터 증강은 입력 이미지 크기의 20% 범위에서 무작위 스케일링과 이동, HSV 색 공간에서 노출 및 채도 변화를 적용했다. 

## YOLOv1의 한계

YOLOv1은 실시간 성능을 보여줬지만, 그리드 기반 예측으로 인해 작은 객체에 약하고, 위치 오차가 성능에 큰 영향을 주는 편이었다. 또한 각 그리드 셀이 제한된 수의 bounding box만 예측해 복잡한 장면에서 누락이 발생할 수 있었다. 이런 한계를 보완하기 위해 이후 버전들이 구조와 학습 전략을 빠르게 개선해 나갔다.

## YOLOv2 (YOLO9000)

YOLOv2는 YOLO9000이라는 이름으로 소개되며 탐지와 분류를 함께 학습하는 방향을 분명히 했다. 구조적으로는 Darknet-19로 백본을 바꿔 파라미터를 줄이고 속도를 높였고, grid 기반 예측 대신 anchor box를 도입해 학습을 안정화하며 작은 객체 대응력을 끌어올렸다. 고해상도 분류기 사전 학습과 multi-scale training으로 입력 해상도를 유연하게 다룰 수 있게 했고, passthrough layer로 fine-grained feature를 보존해 세밀한 정보를 유지했다.

## YOLOv3

YOLOv3는 Darknet-53 백본으로 더 깊은 네트워크를 구성하면서도 효율을 유지했고, 다중 스케일(feature pyramid) 예측으로 작은 객체에 대한 감지력을 보강했다. 클래스 예측은 Softmax 대신 sigmoid 기반의 독립적 분류로 바뀌어 각 클래스의 존재 여부를 따로 판단하도록 개선됐다. 결과적으로 정확도와 속도의 균형을 유지하면서도, 작은 객체 약점을 줄이려는 방향성이 뚜렷해졌다.

## YOLOv4

YOLOv4는 backbone/neck/head 구조를 더 명확히 가져가며 다양한 스케일 정보를 섞는 방향으로 진화했다. FPN, PAN, SPP를 도입해 neck을 강화했고, backbone은 CSP 구조로 바꿔 연산량을 줄이면서도 표현력을 확보했다. 또한 BoF/BoS (bag of freebies/specials) 전략을 통해 Mosaic, DropBlock, CIoU, SAT, label smoothing 같은 학습 트릭과 Mish activation, SPP, SAM, PAN 같은 구조적 요소를 체계적으로 정리했다. 핵심은 추론 비용을 크게 늘리지 않으면서 정확도를 끌어올리는 데 있었다.

## YOLOv5

YOLOv5는 Ultralytics가 PyTorch로 구현하고 논문 없이 코드만 공개하면서 논란을 낳았지만, 실제 사용성 측면에서는 큰 확산을 이끌었다. s/m/l/x 라인업으로 속도와 정확도 선택 폭을 넓혔고, 이미지/동영상/웹캠 등 다양한 입력과 모바일을 포함한 플랫폼 지원으로 진입 장벽을 낮췄다. Mosaic 증강과 auto-anchor 같은 기능이 실사용 환경에서 특히 유용했고, 패키징과 배포 경험 측면에서 "쉽게 쓰이는 YOLO"로 자리 잡았다. 다만 라이선스가 AGPL 3.0으로 바뀌며 상업적 사용에는 소스 공개 의무가 생긴 점도 함께 기억해야 한다.

## YOLOv6

YOLOv6는 Meituan이 산업 배치를 목표로 공개한 버전으로, 효율과 배포를 전면에 내세웠다. EfficientRep backbone과 Rep-PAN neck으로 추론 효율을 높였고, BiC 모듈과 AAT(Anchor-aided Training) 전략을 도입해 학습 성능을 끌어올렸다. 또한 Efficient Decoupled Head, quantization, distillation 같은 요소를 통해 서비스 환경 최적화까지 고려한 구성이 특징이다.

## YOLOv7

YOLOv7은 Extended-ELAN 구조와 모델 스케일링 전략으로 정확도와 속도의 균형을 개선했다. trainable bag-of-freebies를 통해 추론 비용을 늘리지 않으면서 정확도를 끌어올렸고, model re-parameterization으로 배포 효율을 높였다. 특히 대규모 데이터에서도 안정적으로 학습되도록 E-ELAN을 사용했다는 점이 강조된다.

## YOLOv8

YOLOv8은 Ultralytics가 새 리포지토리/패키지로 재정비하며 anchor-free + decoupled head 구조로 전환한 버전이다. 객체 중심을 직접 예측하는 방식으로 구성했고, detection뿐 아니라 segmentation, pose, obb, classification까지 통합 프레임워크로 묶었다. 논문 없이 코드로만 공개됐고 패키지명은 "ultralytics"로 유지되면서, v5 대비 API 사용성과 확장성이 좋아졌다는 평가를 받는다. 다만 v8 이후 계열은 AGPL 3.0 라이선스를 따르므로 상업적 활용 시 소스 공개 의무가 생긴다.

## YOLOv9

YOLOv9는 PGI(Programmable Gradient Information)와 GELAN(Generalized ELAN)을 핵심으로 내세우며 정보 병목을 줄이고 파라미터 활용도를 높이는 방향을 강조했다. v9-S/M/C/E 라인업으로 구성되어 다양한 규모의 모델을 제공했고, 학습 신호 전달과 계산 효율의 균형을 맞추려는 시도가 돋보인다.

## YOLOv10

YOLOv10은 Tsinghua University에서 발표됐으며, NMS-free 학습으로 NMS 의존도를 낮추는 설계를 전면에 내세웠다. 분류 헤드와 특징 추출을 포함해 모델 구조 전반을 효율화했고, spatial-channel 분리 다운샘플링 같은 설계로 속도와 정확도의 동시 개선을 목표로 했다. COCO뿐 아니라 실제 응용에서도 일관적인 성능 향상이 있다는 평가가 따라붙는다.

## YOLOv11

YOLOv11은 Ultralytics에서 v8 이후 계열을 다듬으며 성능과 사용성을 개선했다. 동일한 "ultralytics" 패키지로 제공됐고, 논문 없이 발표됐다. v8 대비 소폭의 성능 향상이 있으나 API 전반의 큰 변화는 없다.

## 버전별 핵심 변화 요약 (2024-11-07 기준)

| 버전 | 키워드 | 핵심 변화 |
| --- | --- | --- |
| YOLOv1 | One-stage | 그리드 기반 단일 단계 탐지 |
| YOLOv2 | YOLO9000 | Anchor, BN, multi-scale |
| YOLOv3 | Darknet-53 | 3-scale 예측, 독립 로지스틱 |
| YOLOv4 | Bag of freebies | CSP, SPP, PAN, Mosaic |
| YOLOv5 | PyTorch | 실사용 생태계, 라인업 확장 |
| YOLOv6 | Deployment | EfficientRep, Rep-PAN |
| YOLOv7 | E-ELAN | 스케일링, 학습 개선 |
| YOLOv8 | Anchor-free | decoupled head, 멀티태스크 |
| YOLOv9 | PGI, GELAN | 학습 신호/구조 개선 |
| YOLOv10 | End-to-end | NMS 감소, 효율적 매칭 |
| YOLOv11 | Polishing | 성능/사용성 개선 |

## Reference

- [A Comprehensive Review of YOLO Architectures in Computer Vision: From YOLOv1 to YOLOv8 and YOLO-NAS](https://www.mdpi.com/2504-4990/5/4/83)
- [YOLOv1: You Only Look Once: Unified, Real-Time Object Detection](https://arxiv.org/abs/1506.02640)
- [From One to Ten: YOLO 시리즈 변천사](https://devocean.sk.com/blog/techBoardDetail.do?page=&query=&ID=166976&boardType=writer&searchData=ross&subIndex=&idList=&pnwriterID=ross&searchText=&techType=&searchDataSub=&searchDataMain=&comment=)
- [YOLO v1~v9](https://velog.io/@juneten/YOLO-v1v9)
