# SMT-LoRa-Controller
This repository contains the hardware documentation for an ESP32-based LoRaWAN controller unit that can be connected to SMT100 soil moisture sensors via RS485. 

## Features
- LoRa connectivity (OTAA Class A) for continuous soil moisture and temperature monitoring
- Operates up to eight SMT100 sensors connected via RS485
- Designed for outdoor application in harsh environments
- Integrated rechargeable battery with (optional) solar panel for autonomous operation
- Low power consumption due to hardware deep sleep
- Fully configurable through WiFi and HTTP (see [OpenAPI.yaml](https://github.com/5G-PreCiSe/SMT-LoRa-Controller/blob/main/OpenAPI.yaml))
- Low maintenance

![image-info](https://github.com/5G-PreCiSe/SMT-LoRa-Controller/blob/main/images/image_2023-10-27_210926035.png)

## Operation Modes:
The SMT LoRa Controller supports two different modes of operation. By opening or closing ```JP1```, you can either enable a battery-friendly power saving mode or select the permanent on mode:

### Power Saving Mode:
The power saving mode is the preferred operation mode for a controller that is powered by the integrated battery and, optionally, a solar panel but has no additional external power supply.
In this battery-friendly power saving mode, the controller enters deep sleep after reading the connected SMT100 sensors and transmitting measurements. After a configurable duration, the controller wakes up from deep sleep, and starts collecting soil data again.
The recommended means for transmitting data in this mode is LoRa. Nevertheless, transmission via WiFi/MQTT is also supported and can be optionally enabled (either in addition to or instead of LoRa transmission). 

### Permanent On Mode:
Like in power saving mode, the controller periodically collects and transmits sensory data, either via LoRa, WiFi/MQTT, or both. However, in contrast to the other mode, the controller stays online between two processing cycles. Additionally, if WiFi is enabled, the controller exposes its built-in Web and MQTT API. In this mode, the controller must be powered with an external power supply for stable operations. You may use this mode, for the intial configuration of your controller.

## Components & Wiring:
![Components & Wiring](https://github.com/5G-PreCiSe/SMT-LoRa-Controller/blob/main/images/SMT100-Board.JPG)
### SMT100 Wiring:
The controller board is equipped with two RS485 terminals for wiring SMT100 sensors. Both terminals are linked to the same RS485 bus. Therefore, it does not matter whether a sensor is connected to the first or second terminal.
Moreover, you can connect multiple sensors to the same terminal.

### Buttons & Jumpers:
You can select your preferred operation mode by setting ```JP1```. Use ```JP2``` to set the connectivity mode of your controller:
In power saving mode, you can enable WiFi. If enabled, the controller will act as a WiFi client and connect to a station (router) specified in configuration. Moreover, over the configuraton you can specify whether measurements should be transmitted via LoRa, WiFi/MQTT, or both.
In permanent on mode, the controller can either act as a WiFi client and connect to a station, or it opens an access point. Note that the connectivity mode in this operation mode can be overwritten by the network configuration. Make sure to set ```mode``` in the network configuration to ```3```, if you want to set the connectivity mode by ```JP2```.

| JP1 | JP2 |  Mode | Connectivity |
| --- | --- | --- | --- |
| open | open | Power Saving | LoRa |
| open | closed | Power Saving | LoRa & WiFi client |
| closed | open | Permanent On | LoRa & WiFi access point* |
| closed | closed | Permanent On | LoRa & WiFi client* |

*Note: The connectivity mode in permanent on mode can be overwritten by network configuration. 

To switch from one operation mode to the other or change the connectivity mode, change the jumper configuration and press the ```RST``` button afterwards.
If you want to switch from power saving mode to permanent on mode only once, e.g., for the purpose of accessing the controller's Web API for changing the configuration, press ```SW``` (without changing ```JP1```) while being in power saving mode. The controller will wake up and switch to permanent mode. To switch back to power saving mode, press ```RST```.

## Parts List:
The following table lists all parts that are required for one controller unit, which can operate up to eight SMT100 RS485 ASCII sensors. 
| Qty | Part | Link |
| --- | ---- | ---- | 
| 1 | SMT100-LoRa-v0.9 PCB | [see PCB](https://github.com/5G-PreCiSe/SMT-LoRa-Controller/blob/main/pcb/5G-PreCiSe-SMT100_2023-10-27.json) |
| 1 | ESP32 D1 Mini NodeMCU WiFi | [AZ-Delivery](https://www.az-delivery.de/products/esp32-d1-mini) |
| 1 | 868MHz SX1276 LoRa Breakout Board with Antenna | [Paradisetronic.com](https://paradisetronic.com/products/868mhz-sx1276-lora-breakout-board-antenne?_pos=1&_psq=868&_ss=e&_v=1.0) |
| 1 | Waveshare 16120 Solar Power Manager | [Reichelt](https://www.reichelt.de/de/de/entwicklerboards-solar-ladegeraet-fuer-6-bis-24-v-panels-debo-pwr-solar2-p266038.html?r=1) |
| 1 | Waveshare Solar Panel 5 Watt | [Reichelt](https://www.reichelt.de/entwicklerboards-solarpanel-5-w-debo-solar-5w-p266039.html?PROVID=2788&gclid=Cj0KCQiAgK2qBhCHARIsAGACuzmFVIidh04LupybnrqWYJWfgFhP_zPRPngg836qP7ZLc-IteQUYTqkaAviuEALw_wcB) |
| 1 | KY-051 VOLTAGE TRANSLATOR TXS0104E | [Reichelt](https://www.reichelt.de/entwicklerboards-spannungswandler-level-shifter-txb0104-debo-lev-shifter-p239275.html?PROVID=2788&gclid=Cj0KCQiAgK2qBhCHARIsAGACuznDJFzTT8uLnLcPYofdD3g7ULR2tHfo7JWPHFVavDyUAmYdUmjK63gaAnf9EALw_wcB) |
| 1 | MAX 485 CPA Transceiver| [Reichelt](https://www.reichelt.de/de/de/rs485-422-1-treiber-1-empfaenger-dip-8-max-485-cpa-p39599.html?CCOUNTRY=445&LANGUAGE=en&GROUPID=8702&START=0&OFFSET=16&SID=96d7a34ab3182b0141f212f568cc687297c3f76e34df35ef2bfdb&LANGUAGE=DE&&r=1) |
| 1 | IC-Socket, 8-poles | [Reichelt](https://www.reichelt.de/ic-sockel-8-polig-doppelter-federkontakt-gs-8-p8230.html?PROVID=2788&gclid=Cj0KCQiAgK2qBhCHARIsAGACuzl8LgoR4Znw9IWLo9S5Vu-tMXekHWu_nq_ZtvTsN-LvaL7eZCpV4qsaAq3vEALw_wcB) |
| 1 | IRL3803 n-CH MOSFET, TO-220AB | [Reichelt](https://www.reichelt.de/mosfet-n-ch-30v-140a-200w-to-220ab-irl-3803-p41757.html?PROVID=2788&gclid=Cj0KCQiAgK2qBhCHARIsAGACuzk8QXDI6kYSX9KsDvWq_j0QCLs389qAJTPMl2cFtrOL-Y8Te5CxS44aAv_ZEALw_wcB) |
| 2 | Tactile Switch 6x6 mm JTP 1236 series| [Reichelt](https://www.reichelt.de/kurzhubtaster-6x6mm-hoehe-5-0mm-12v-vertikal-taster-9302-p44579.html?search=TASTER+9302) |
| 2 | 4-poles Terminal 5 mm spacing | [Reichelt](https://www.reichelt.de/de/en/solderable-screw-terminal-4-pole-rm-5-mm-90--ctb5202-4-p292671.html?GROUPID=7541&START=0&OFFSET=16&SID=96d7a34ab3182b0141f212f568cc687297c3f76e34df35ef2bfdb&LANGUAGE=EN&&r=1) |
| 10 | 10k Ohm axial-lead resistor (type 0207) | [Reichelt](https://www.reichelt.de/widerstand-metallschicht-10-0-kohm-0207-0-6-w-1--metall-10-0k-p11449.html?&trstct=pos_0&nbc=1)|
| 1 | 100 Ohm axial-lead resistors (type 0207) | [Reichelt](https://www.reichelt.de/widerstand-metallschicht-100-ohm-0207-0-6-w-1--metall-100-p11457.html?search=METALL+100) |
| 1 | 20 Ohm axial-lead resistors (type 0207) | [Reichelt](https://www.reichelt.de/widerstand-metallschicht-20-0-ohm-0207-0-6-w-1--metall-20-0-p11605.html?&trstct=pos_0&nbc=1) |
| 2 | 2 x 10-pin header (male) 2.54 mm spacing | [Reichelt](https://www.reichelt.de/de/en/2-x-10-pin-header-straight-pitch-2-54-sl-2x10g-2-54-p19488.html?&trstct=pos_0&nbc=1) |
| 1 | 2 x 2-pin header (male) 2.54 mm spacing | [Reichelt](https://www.reichelt.de/de/en/pin-headers-2-54-mm-2x02-straight-mpe-087-2-004-p119892.html?&trstct=pos_0&nbc=1) |
| 2 | 2 x 10-pin socket (female) 2.54 mm spacing / 8.5 mm height | [Reichelt](https://www.reichelt.de/de/en/sockets-2-54-mm-2x10-straight-mpe-094-2-020-p119932.html?r=1) |
| 1 | 2 x 2-pin socket (female) 2.54 mm spacing / 8.5 mm height | [Reichelt](https://www.reichelt.de/de/en/sockets-2-54-mm-2x02-straight-mpe-094-2-004-p119926.html?&trstct=pos_3&nbc=1) |
| 2 | 1 x 7-pin header (male) 2 mm spacing | [Reichelt](https://www.reichelt.de/de/en/pin-header-2-00mm-1x14-straight-bkl-10120735-p262757.html?&trstct=pos_1&nbc=1) |
| 2 | 1 x 7-pin socket (female) 2 mm spacing / 4.3 mm height | [Voelkner](https://www.voelkner.de/products/955474/Connfly-Buchsenleiste-Standard-Anzahl-Reihen-1-Polzahl-je-Reihe-7-DS1026-01-17S8BV-1-St..html) |
| 4 | Spacers, 6-edge, M3, 12 mm | [Reichelt](https://www.reichelt.de/de/de/distanzhuelsen-metall-6-kant-m3-12mm-da-12mm-p44788.html?CCOUNTRY=445&LANGUAGE=en&GROUPID=8644&START=0&OFFSET=16&SID=96d7a34ab3182b0141f212f568cc687297c3f76e34df35ef2bfdb&LANGUAGE=DE&&r=1) |
| 1 | IP65 enclosure (6U07121206437) | [Reichelt](https://www.reichelt.de/industriegehaeuse-119-8-x-119-8-x-60-1mm-ip65-lichtgrau-6u07121206437-p340530.html?CCOUNTRY=445&LANGUAGE=de&trstct=pos_0&nbc=1&&r=1) |
| 1 | Pressure compensation element | [Reichelt](https://www.reichelt.de/druckausgleichselement-bis-ip-69-dae-m12-9005-p345132.html?&trstct=pos_0&nbc=1) |
| 1-2 | M16x1,5 cable gland | [Reichelt](https://www.reichelt.de/de/de/kabelverschraubung-5-10mm-m16x1-5-sw-h-p-eco-50011-p317603.html?CCOUNTRY=445&LANGUAGE=en&GROUPID=7740&START=0&OFFSET=16&SID=96d7a34ab3182b0141f212f568cc687297c3f76e34df35ef2bfdb&LANGUAGE=DE&&r=1) |
| 1 | 3D printed bracket | [see 3D printed parts](https://github.com/5G-PreCiSe/SMT-LoRa-Controller/tree/main/3D-printed-parts) |
| 4 | 6-32 (PC) screw | [Reichelt](https://www.reichelt.de/pc-montageschrauben-6-32x1-4-unc-50-stueck-st-screw6-32-p190895.html) |
| 1* | 680 mAh Li-Ion battery, 14500, 3.7 V | [Reichelt](https://www.reichelt.de/industriezelle-14500-3-7-v-680-mah-ungeschuetzt-1er-pack-son-14500-vr2-p284878.html?CCOUNTRY=445&LANGUAGE=de&trstct=pos_0&nbc=1&&r=1) |
| 1* | 2500 mAh Li-Ion battery, 785060, 3.7 V | [Welectron](https://www.welectron.com/LiPo-Flachakku-785060-37V-2500mAh) | 

\* We suggest that either a 680 mAh or a 2500 mAh Li-Ion battery be used.

## Experimental Setup
As part of the [5G-PreCiSe Project](https://www.5g-precise.de), we deployed eight controller units on agricultural land in southwest Germany. A Milesight UG67 outdoor LoRaWAN gateway realized the LoRa connectivity and forwarded measurements to an Nvidia DGX A100 server, where the data were processed.
The payload decoder that we installed on the Milesight gateway is contained in this repository (see [PayloadDecoder.js](https://github.com/5G-PreCiSe/SMT-LoRa-Controller/blob/main/lora/PayloadDecoder.js)).





