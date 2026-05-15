---
title: "Spiking Neural Network"
date: '2026-05-15'
draft: false
---

## Spiking Neural Network란

Spiking Neural Network(SNN)는 뉴런의 출력을 연속적인 activation 값이 아니라 spike event로 표현하는 신경망이다. 일반적인 artificial neural network가 layer마다 실수 값을 흘려보낸다면, SNN은 시간에 따라 발생하는 spike의 시점과 빈도를 계산에 사용한다.

SNN의 출발점은 생물학적 뉴런(biological neuron)이 spike로 신호를 주고받는다는 관찰이다. 이 모델은 spike가 발생한 순간에만 계산과 통신이 일어나는 event-driven 구조이기 때문에, TrueNorth, SpiNNaker, Loihi 같은 neuromorphic hardware에서 저전력으로 실행하기 좋은 후보로도 다뤄진다. 다만 spike generation은 threshold를 넘는 순간 0에서 1로 바뀌는 불연속 함수에 가까워서, 일반적인 backpropagation을 그대로 적용하기 어렵다.

## 왜 학습이 어려운가

딥러닝에서 backpropagation은 activation function의 gradient를 이용해 weight를 업데이트한다. 하지만 SNN의 spike generation은 특정 threshold를 넘으면 spike가 발생하고, 그렇지 않으면 발생하지 않는 불연속 함수에 가깝다. 이 함수는 표준적인 의미에서 미분 가능하지 않다.

또한 SNN은 시간 축을 가진다. 어떤 입력 spike가 나중 output spike에 영향을 줄 수 있고, axonal delay 같은 시간 지연도 학습 대상이 될 수 있다. 따라서 SNN 학습은 "어느 layer가 틀렸는가"뿐 아니라 "어느 시점의 spike가 나중 오류에 영향을 줬는가"를 다뤄야 한다.

## SNN 학습

SNN을 만드는 한 방법은 기존 ANN을 먼저 학습한 뒤 SNN으로 변환하는 것이다. 이 방식의 장점은 CNN architecture, optimizer, normalization, data augmentation처럼 ANN에서 이미 검증된 학습 절차를 활용할 수 있다는 점이다. 하지만 ANN의 연속 activation을 spike rate나 spike timing으로 바꾸는 과정에서 정확도가 떨어질 수 있고, 원하는 값을 충분히 표현하려면 긴 simulation time이나 많은 spike가 필요해질 수 있다. 그래서 변환 기반 SNN은 latency, firing rate constraint, weight scaling 같은 추가 문제가 생길 수 있다.

다른 방법은 SNN을 직접 학습하는 것이다. SLAYER는 이 방향의 알고리즘이다. 여기서 어려운 점은 spike function 자체의 derivative가 학습에 쓸 수 있는 형태로 존재하지 않는다는 것이다. SLAYER는 이 함수를 그대로 미분하지 않고, membrane potential이 threshold 근처에 있을수록 spike 여부가 바뀔 가능성이 높다는 stochastic approximation을 사용해 backward pass에 필요한 derivative term을 근사한다. 또한 spike response가 미래 시점의 membrane potential에도 영향을 주므로, error를 layer 방향뿐 아니라 과거 time point 방향으로도 되돌려 synaptic weight와 axonal delay를 학습한다.

## neuromorphic hardware와의 관계

SNN이 주목받는 이유 중 하나는 neuromorphic hardware다. TrueNorth, SpiNNaker, Loihi 같은 시스템은 spike event 기반 계산을 낮은 전력으로 처리하려 한다. 다만 이런 하드웨어가 항상 강력한 on-chip learning을 제공하는 것은 아니다. 그래서 SLAYER 같은 offline training 방법으로 SNN을 먼저 학습한 뒤 hardware에 배포하는 흐름이 가능하다.

## References

- Ponulak and Kasinski, [Introduction to spiking neural networks: information processing, learning and applications](https://doi.org/10.55782/ane-2011-1862), Acta Neurobiologiae Experimentalis 2011.
- Shrestha and Orchard, [SLAYER: Spike Layer Error Reassignment in Time](https://papers.neurips.cc/paper_files/paper/2018/hash/82f2b308c3b01637c607ce05f52a2fed-Abstract.html), NeurIPS 2018.

## Link

- [SLAYER](SLAYER.md)
