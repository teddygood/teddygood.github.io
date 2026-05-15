---
title: "SLAYER"
date: '2026-05-15'
draft: false
---

## SLAYER란

SLAYER(Spike Layer Error Reassignment in Time)는 Spiking Neural Network를 gradient 기반으로 직접 학습하기 위한 supervised backpropagation 방법이다. 목표는 spike generation의 불연속성과 SNN의 시간 의존성을 함께 처리해, SNN을 ANN처럼 end-to-end로 훈련하는 것이다.

이름처럼 SLAYER의 핵심은 error를 이전 layer로만 보내는 것이 아니라, 이전 time point로도 다시 배분하는 데 있다. 이 방식으로 synaptic weight뿐 아니라 axonal delay도 학습할 수 있다. 즉 어떤 연결이 얼마나 강한지만이 아니라, spike가 언제 도착해야 하는지도 학습 대상이 된다.

## spike function을 어떻게 학습에 넣는가

SNN의 spike generation은 membrane potential이 threshold를 넘는 순간 discrete spike를 내보내는 함수다. 이 함수는 연속적으로 조금씩 변하는 출력이 아니라 spike가 있거나 없는 출력에 가깝기 때문에, 일반적인 backpropagation에서 바로 쓸 gradient가 없다.

SLAYER는 이 spike function을 그대로 미분하지 않는다. 대신 stochastic spiking neuron 관점에서 gradient를 근사한다. membrane potential이 threshold 근처에 있을수록 작은 perturbation만으로 spike 여부가 바뀔 가능성이 높다고 보고, 그 state change probability density를 backward pass에서 derivative term처럼 사용한다.

forward pass에서는 여전히 spike event를 사용한다. 다만 backward pass에서는 gradient 계산에 필요한 값을 확률적 근사로 채워 넣어, 불연속적인 spike generation을 gradient 기반 학습 안에 포함한다.

## temporal credit assignment

일반적인 feed-forward network에서는 layer 순서만 따라 error를 전파하면 된다. SNN에서는 시간 축이 추가된다. 앞선 시점의 input spike는 spike response kernel을 거쳐 이후 시점의 membrane potential에도 영향을 주고, axonal delay는 그 영향이 도착하는 시간을 바꾼다.

SLAYER의 temporal credit assignment는 현재 시점의 error만 보는 방식이 아니다. 미래 시점의 error가 과거 spike에 의해 생겼을 수 있으므로, error signal을 spike response kernel과 시간축에서 correlation해 과거 spike signal로 되돌린다. 이것이 논문 제목의 "error reassignment in time"에 해당한다.

이 처리가 들어가면 visual digit recognition, event-based vision, spoken digit recognition처럼 시간 정보가 중요한 데이터에서 SNN을 직접 학습할 수 있다.

## dead neuron 문제

SNN에서는 어떤 neuron이 거의 spike를 내지 않으면 학습 신호가 약해질 수 있다. SLAYER 논문은 classification target을 설계할 때 true class neuron과 false class neuron 모두 일정한 spike count를 갖도록 만든다. true class에는 더 높은 target spike count를 주고, false class에도 0이 아닌 낮은 target을 둔다.

이 방식은 false class neuron을 완전히 침묵시키는 것보다 학습 안정성에 유리하다. false class neuron도 spike를 내야 error signal을 받을 수 있고, dormant neuron으로 굳어지는 상황을 줄일 수 있기 때문이다.

## 구현과 의미

논문은 CUDA accelerated SLAYER framework를 제공하고, fully connected SNN과 convolutional SNN을 학습할 수 있음을 보인다. 실험은 MNIST, NMNIST, DVS Gesture, TIDIGITS에서 진행되며, 기존 SNN 학습 방법 및 ANN-to-SNN 변환 방법과 비교한다.

SLAYER의 위치는 "SNN도 backpropagation으로 학습할 수 있는가"에 대한 실용적인 답에 가깝다. 완전히 생물학적으로 그럴듯한 학습 규칙을 제시한다기보다, spike event 기반 모델을 gradient 기반으로 훈련하고 neuromorphic hardware에서 실행할 수 있음을 보인다.

## References

- Shrestha and Orchard, [SLAYER: Spike Layer Error Reassignment in Time](https://papers.neurips.cc/paper_files/paper/2018/hash/82f2b308c3b01637c607ce05f52a2fed-Abstract.html), NeurIPS 2018.

## Link

- [Spiking Neural Network](Spiking%20Neural%20Network.md)
