---
authors: teddygood
date: '2024-11-07'
description: '"Live Once" (not "You Only Live Once")'
draft: true
keywords:
- YOLO
- You Only Look Once
- Object Detection
slug: /exploring-YOLO
tags:
- Paper Review
title: YOLO So Far
---

{/* truncate */}


## You Only Look Once

YOLO is commonly known to people as "You Only Live Once." However, in Computer Vision, it's called **You Only Look Once**. YOLO is a model renowned for its speed and outstanding performance in the Object Detection field, supporting real-time object detection. As of now, YOLO has reached version 11, and this article will cover YOLO models from v1 to the present.

![img.png](../assets/paper/yolo-timeline.png)

The overall timeline of YOLO is shown above. While the image only displays up to v8, YOLOv9 was released in February 2024, followed by YOLOv10 in May, and the latest version, YOLOv11, was unveiled on October 30th.

Joseph Redmon, the original developer of YOLO, halted his research after YOLOv3 due to ethical concerns. Subsequently, YOLOv4 was developed by other authors, YOLOv5 by Ultralytics, v6 by Meituan, v7 by some of the original v4 authors, and from v8 onward, Ultralytics has continued the releases.

After v4, multiple teams released their own improvements, so version numbers no longer imply a strict performance order. For example, YOLOv5 v7.0 (Nov 2022) and YOLOv6 v3.0 (Jan 2023) were released after YOLOv7 (Jul 2022).

## Object Detection

Object Detection is a field of computer vision that identifies the presence, location, and type of specific objects in images or videos. To elaborate, it recognizes multiple objects of varying sizes and positions, marking their locations with bounding boxes and identifying their categories.

Since this article doesn’t delve deeply into Object Detection itself, refer to the papers below if interested.

![img.png](../assets/paper/object-detection-paper-list.png)

The image above was sourced from [deep_learning_object_detection](https://github.com/hoya012/deep_learning_object_detection). I recall this repository circulating in [TensorFlow Korea (now AGI-KR)](https://www.facebook.com/groups/agikr/) during the peak of vision research years ago. Though I feared the source might be lost, I was relieved to find it. The red-highlighted papers are those the repository creator deemed essential, while others are also important but recommended for further reading if time permits. Note that the larger text indicates the paper or model name, and the smaller text denotes the conference and publication year.

## YOLOv1

### Architecture

![img.png](../assets/paper/yolov1-architecture.png)

YOLOv1 consists of 24 convolutional layers and 2 fully connected layers. All layers except the final one use the leaky ReLU activation function, while the last layer uses a linear activation function. Inspired by GoogLeNet and Network in Network (NIN), it employs 1×1 convolutions to reduce the number of feature maps and optimize parameters. A lightweight model called Fast YOLO is also introduced, composed of 9 convolutional layers.

### How It Works

**YOLOv1 Operation Principle**

YOLOv1 unifies the object detection process to simultaneously detect all bounding boxes. It divides the input image into an $S \times S$ grid, where each grid cell predicts $B$ bounding boxes and a confidence score for $C$ classes. Each bounding box prediction consists of 5 values: $P_c, b_x, b_y, b_h, b_w$.

- $P_c$: Confidence score indicating the likelihood that the bounding box contains an object.
- $b_x, b_y$: Center coordinates of the bounding box relative to the grid cell.
- $b_h, b_w$: Height and width of the bounding box relative to the entire image.

The output of YOLO is a tensor of size $S \times S \times (B \times 5 + C)$, and duplicate detections are removed via Non-Maximum Suppression (NMS).

### Training Method

YOLOv1 was pre-trained on the ImageNet dataset at a resolution of 224×224 for the initial 20 layers, then fine-tuned on the PASCAL VOC 2007 and VOC 2012 datasets at 448×448 resolution. Data augmentation included random scaling and translation within 20% of the input image size, as well as exposure and saturation adjustments in the HSV color space.

## Limitations of YOLOv1

YOLOv1 achieved real-time speed, but the grid-based prediction struggled with small objects and localization errors. Each grid cell could predict only a limited number of boxes, so crowded scenes often led to misses. These limitations motivated the rapid improvements in later versions.

## YOLOv2 (YOLO9000)

YOLOv2 introduced anchor boxes with k-means priors to stabilize predictions. Batch Normalization was applied across layers to steady training, and high-resolution classifier pretraining plus multi-scale training made input sizes more flexible. It also added a passthrough layer to preserve fine-grained features, while YOLO9000 jointly trained detection and classification to expand the label space.

## YOLOv3

YOLOv3 adopted the Darknet-53 backbone for deeper, efficient feature extraction. It predicted at 3 scales (FPN-like) to improve small-object detection, and used independent logistic classifiers for multi-label cases.

## YOLOv4

YOLOv4 combined a CSPDarknet53 backbone with SPP and a PAN neck for stronger representations. It leveraged Mosaic, SAT, CIoU, and other training tricks to balance accuracy and speed, and systematized them via the BoF/BoS (bag of freebies/specials) approach.

## YOLOv5

YOLOv5 was built by Ultralytics in PyTorch, creating a production-friendly ecosystem with a CSP backbone. It offered multiple model sizes to trade off speed and accuracy, supported diverse inputs (image/video/webcam) and a wide range of platforms including mobile, and used Mosaic augmentation to achieve solid accuracy even with limited data. Engineering features like export support and auto-anchor were also strengthened.

## YOLOv6

YOLOv6 was released by Meituan with industrial deployment in mind. It used an EfficientRep backbone and Rep-PAN neck to improve inference efficiency, introduced the BiC module and AAT (Anchor-aided Training) strategy, and emphasized practical optimization such as a decoupled head.

## YOLOv7

YOLOv7 introduced Extended-ELAN and scaling strategies to improve the speed-accuracy balance. It also added trained bag-of-freebies and re-parameterization for deployment efficiency.

## YOLOv8

YOLOv8 marked Ultralytics' shift to an anchor-free, decoupled head design and unified detection with segmentation, pose, and classification tasks. Training and deployment usability were streamlined, and the model shipped under the "ultralytics" package with the v8+ line using the AGPL 3.0 license.

## YOLOv9

YOLOv9 proposed PGI (Programmable Gradient Information) and Generalized ELAN (GELAN), focusing on better gradient flow and structural efficiency.

## YOLOv10

YOLOv10 emphasized NMS-free training to reduce reliance on NMS and adopted spatial-channel separated downsampling for efficiency. It also improved the matching strategy and head efficiency for real-time use.

## YOLOv11

YOLOv11 refined the post-v8 line for better performance and usability. It was released under the same "ultralytics" package without a paper and shows incremental gains over v8 with no major API shift.

## Version Summary (as of 2024-11-07)

| Version | Keywords | Core Changes |
| --- | --- | --- |
| YOLOv1 | One-stage | Grid-based single-shot detection |
| YOLOv2 | YOLO9000 | Anchors, BN, multi-scale |
| YOLOv3 | Darknet-53 | 3-scale prediction, independent logistic |
| YOLOv4 | Bag of freebies | CSP, SPP, PAN, Mosaic |
| YOLOv5 | PyTorch | Production ecosystem, size lineup |
| YOLOv6 | Deployment | EfficientRep, Rep-PAN |
| YOLOv7 | E-ELAN | Scaling, training improvements |
| YOLOv8 | Anchor-free | Decoupled head, multi-task |
| YOLOv9 | PGI, GELAN | Gradient/structure improvements |
| YOLOv10 | End-to-end | Lower NMS reliance, efficient matching |
| YOLOv11 | Polishing | Performance and usability updates |

## Reference

- [A Comprehensive Review of YOLO Architectures in Computer Vision: From YOLOv1 to YOLOv8 and YOLO-NAS](https://www.mdpi.com/2504-4990/5/4/83)
- [YOLOv1: You Only Look Once: Unified, Real-Time Object Detection](https://arxiv.org/abs/1506.02640)
- [From One to Ten: YOLO 시리즈 변천사](https://devocean.sk.com/blog/techBoardDetail.do?page=&query=&ID=166976&boardType=writer&searchData=ross&subIndex=&idList=&pnwriterID=ross&searchText=&techType=&searchDataSub=&searchDataMain=&comment=)
