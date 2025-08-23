---
title: "Federated RF Fingerprinting for O-RAN"
excerpt: "Open Radio Access Network (O-RAN) offers a transformative approach to cellular network design by promoting a virtualized, open, and intelligent architecture. The increasing complexity and security demands of modern cellular networks necessitate robust methods for device identification and management. This paper provides a way for integrating Federated Learning for device fingerprinting within the Open Radio Access Network (O-RAN) framework, enhancing network security and device management. Our approach leverages unique RF signal characteristics, captured through Channel State Information (CSI), to identify devices without the need for centralized data processing or custom hardware. We set up a real-world experimental environment using the POWDER Wireless testbed, simulating O-RAN with base stations and user equipment. Using a deep learning model to process the CSI data to classify devices."
collection: research
image: "/images/federated-oran.png"
layout: single
date: 2024-06-20
author_profile: true
tags: AI ML O-RAN Next-G_networks
---

<!-- Outline:- 

[Abstract](#abstract)
- [Abstract](#abstract)
- [Introduction](#introduction)
- [Methodology Overview](#methodology-overview)
- [Our Design](#our-design)
  - [Model Storage \& Distribution:](#model-storage--distribution)
  - [Local Training at eNBs:](#local-training-at-enbs)
  - [Weight Aggregation:](#weight-aggregation)
  - [Dynamic Participation:](#dynamic-participation)
  - [Testbed Implementation](#testbed-implementation)
- [Results](#results)
  - [Baseline (centralized training):](#baseline-centralized-training)
  - [Federated Learning (distributed across eNBs):](#federated-learning-distributed-across-enbs) -->


## Abstract
Open Radio Access Network (O-RAN) offers a transformative approach to cellular network design by promoting a virtualized, open, and intelligent architecture. The increasing complexity and security demands of modern cellular networks necessitate robust methods for device identification and management. This paper provides a way for integrating Federated Learning for device fingerprinting within the Open Radio Access Network (O-RAN) framework, enhancing network security and device management. Our approach leverages unique RF signal characteristics, captured through Channel State Information (CSI), to identify devices without the need for centralized data processing or custom hardware. We set up a real-world experimental environment using the POWDER Wireless testbed, simulating O-RAN with base stations and user equipment. Using a deep learning model to process the CSI data to classify devices. With an xAPP deployed on a Near Real-Time Radio Intelligent Controller (RT-RIC), our model uses a federated learning approach for distributed training across base stations. Initial results demonstrate nearly 99.75% accuracy in device identification, showcasing the potential of our approach to integrate advanced AI techniques in O-RAN for improved network performance and security. This research underscores the feasibility and practical effectiveness of enhancing next-generation cellular networks through O-RAN’s open and intelligent architecture. 

## Introduction
- O-RAN introduces openness, virtualization, and intelligence in RAN design.

- Device fingerprinting is critical for security since each RF device has unique imperfections.

- Our work integrates federated learning with O-RAN to achieve secure, distributed identification of devices using Channel State Information (CSI).

## Methodology Overview
- Dataset: 188,222 CSI packets collected over 5 hours (training) + 1 hour (testing) using GNU Radio and 802.11p at 5.89 GHz.

- Deep Learning Model: Two-input CNN on magnitude and phase vectors (from CSI), concatenated into dense layers for classification.

- Federated Learning Setup: xAPP deployed on Near-RT RIC aggregates weights from distributed eNBs via E2 interface.

## Our Design
To integrate Federated Learning (FL) into O-RAN, we designed a workflow where a custom xAPP is deployed on the Near Real-Time RIC (RT-RIC). This xAPP acts as the central coordinator for multiple base stations (eNBs):

### Model Storage & Distribution

  - The xAPP holds the deep learning (DL) model and its weights.

  - These are transmitted to participating eNBs over the E2 interface.

### Local Training at eNBs

  - Each eNB trains on its own received transmissions (CSI data: magnitude & phase).

  - Training is done in mini-batch epochs, ensuring new data is used each time.

### Weight Aggregation

  - After local updates, eNBs send model weights back to the RIC.

  - The xAPP aggregates weights and updates the global model.

  - Updated weights are redistributed to all eNBs.

### Dynamic Participation

  - Any new eNB can join mid-training, download the latest global model, and continue training without starting from scratch.

### Testbed Implementation

  We validated this design on the POWDER Wireless Testbed, a platform for open wireless experimentation:

  - Base Stations (eNBs): Implemented using X-310 USRPs.

  - User Equipments (UEs): Simulated with B-210 USRPs transmitting Wi-Fi packets (802.11p, 5.89 GHz).

  - O-RAN Setup: eNBs connected to a Near RT-RIC hosting the xAPP, with CSI captured at O-RUs and training executed at O-DUs.

This setup closely mirrors real-world O-RAN deployment, ensuring that the federated learning pipeline is not just simulated, but validated on hardware-in-the-loop.

## Results 

### Baseline (centralized training)

  - Training Accuracy: **99.42%**

  - Validation Accuracy: **97.69%**

### Federated Learning (distributed across eNBs)

  - Training Accuracy:  **99.75%**

  - Validation Accuracy: **98.61%**

<a href="/files/Federated_RF_Fingerprinting_ORAN.pdf" target="_blank" style="display: inline-block; padding: 0.5em 1em; color: white; background-color: #0d6efd; border-radius: 5px; text-decoration: none; font-weight: 500;">
  📄 View Full PDF
</a>