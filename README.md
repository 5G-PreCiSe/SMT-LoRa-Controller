# SMT-LoRa-Controller
This repository contains the hardware documentation for an ESP32-based LoRaWAN controller unit that can be connected to SMT100 soil moisture sensors via RS485. 

## Features
- LoRa connectivity (OTAA Class A) for continous soil moisture and temperature monitoring
- Operates up to eight SMT100 sensors connected via RS485
- Designed for outdoor application in harsh environments
- Integrated rechargeable battery with (optional) solar panel for autonomous operation
- Low power consumption due to hardware deep sleep
- Fully configurable through WiFi and HTTP
- Low maintenance

![image-info](https://github.com/5G-PreCiSe/SMT-LoRa-Controller/blob/main/images/image_2023-10-27_210926035.png)

## Parts List:
| Qty | Part | Link |
| --- | ---- | ---- | 
| 1 | SMT100-LoRa-v0.9 PCB | [see PCB](https://github.com/5G-PreCiSe/SMT-LoRa-Controller/blob/main/pcb/5G-PreCiSe-SMT100_2023-10-27.json) |
| 1 | ESP32 D1 Mini NodeMCU WiFi | [AZ-Delivery](https://www.az-delivery.de/products/esp32-d1-mini) |
| 1 | 868MHz SX1276 LoRa Breakout Board with Antenna | [Paradisetronic.com](https://paradisetronic.com/products/868mhz-sx1276-lora-breakout-board-antenne?_pos=1&_psq=868&_ss=e&_v=1.0) |
| 1 | Waveshare 16120 Solar Power Manager | [Welectron](https://www.welectron.com/Waveshare-16120-Solar-Power-Manager-EN?utm_campaign=gs&gclid=CjwKCAjwv-2pBhB-EiwAtsQZFPJVbo2GZq3jpoTtBgq_zvQDoj4DGHg_jwcetG9JK2cyY5DUKf3CSBoCiHUQAvD_BwE) |
| 1 | KY-051 VOLTAGE TRANSLATOR TXS0104E | [Reichelt](https://www.reichelt.de/entwicklerboards-spannungswandler-level-shifter-txb0104-debo-lev-shifter-p239275.html?PROVID=2788&gclid=Cj0KCQiAgK2qBhCHARIsAGACuznDJFzTT8uLnLcPYofdD3g7ULR2tHfo7JWPHFVavDyUAmYdUmjK63gaAnf9EALw_wcB) |


