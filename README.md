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
| 1 | Waveshare Solar Panel 5 Watt | [Reichelt](https://www.reichelt.de/entwicklerboards-solarpanel-5-w-debo-solar-5w-p266039.html?PROVID=2788&gclid=Cj0KCQiAgK2qBhCHARIsAGACuzmFVIidh04LupybnrqWYJWfgFhP_zPRPngg836qP7ZLc-IteQUYTqkaAviuEALw_wcB) |
| 1 | KY-051 VOLTAGE TRANSLATOR TXS0104E | [Reichelt](https://www.reichelt.de/entwicklerboards-spannungswandler-level-shifter-txb0104-debo-lev-shifter-p239275.html?PROVID=2788&gclid=Cj0KCQiAgK2qBhCHARIsAGACuznDJFzTT8uLnLcPYofdD3g7ULR2tHfo7JWPHFVavDyUAmYdUmjK63gaAnf9EALw_wcB) |
| 1 | MAX 485 CPA Transceiver| [Reichelt](https://www.reichelt.de/de/de/rs485-422-1-treiber-1-empfaenger-dip-8-max-485-cpa-p39599.html?CCOUNTRY=445&LANGUAGE=en&GROUPID=8702&START=0&OFFSET=16&SID=96d7a34ab3182b0141f212f568cc687297c3f76e34df35ef2bfdb&LANGUAGE=DE&&r=1) |
| 1 | IC-Socket, 8-poles | [Reichelt](https://www.reichelt.de/ic-sockel-8-polig-doppelter-federkontakt-gs-8-p8230.html?PROVID=2788&gclid=Cj0KCQiAgK2qBhCHARIsAGACuzl8LgoR4Znw9IWLo9S5Vu-tMXekHWu_nq_ZtvTsN-LvaL7eZCpV4qsaAq3vEALw_wcB) |
| 1 | IRL3803 n-CH MOSFET, TO-220AB | [Reichelt](https://www.reichelt.de/mosfet-n-ch-30v-140a-200w-to-220ab-irl-3803-p41757.html?PROVID=2788&gclid=Cj0KCQiAgK2qBhCHARIsAGACuzk8QXDI6kYSX9KsDvWq_j0QCLs389qAJTPMl2cFtrOL-Y8Te5CxS44aAv_ZEALw_wcB) |
| 2 | Tactile Switch 6x6mm JTP 1236 series| [Reichelt](https://www.reichelt.de/kurzhubtaster-6x6mm-hoehe-5-0mm-12v-vertikal-taster-9302-p44579.html?search=TASTER+9302) |
| 2 | 4-poles Terminal 5mm spacing | [Reichelt](https://www.reichelt.de/de/en/solderable-screw-terminal-4-pole-rm-5-mm-90--ctb5202-4-p292671.html?GROUPID=7541&START=0&OFFSET=16&SID=96d7a34ab3182b0141f212f568cc687297c3f76e34df35ef2bfdb&LANGUAGE=EN&&r=1) |
| 10 | 10k Ohm axial-lead resistor (type 0207) | [Reichelt](https://www.reichelt.de/widerstand-metallschicht-10-0-kohm-0207-0-6-w-1--metall-10-0k-p11449.html?&trstct=pos_0&nbc=1)|
| 1 | 100 Ohm axial-lead resistors (type 0207) | [Reichelt](https://www.reichelt.de/widerstand-metallschicht-100-ohm-0207-0-6-w-1--metall-100-p11457.html?search=METALL+100) |
| 1 | 20 Ohm axial-lead resistors (type 0207) | [Reichelt](https://www.reichelt.de/widerstand-metallschicht-20-0-ohm-0207-0-6-w-1--metall-20-0-p11605.html?&trstct=pos_0&nbc=1) |





