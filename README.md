# mixxx_kaoss_dj
Kaoss DJ Mixxx config
Use this git repository to configure Kaoss DJ for use with Mixxx v2.0.0

Working 
- Basic Slider Mappings
- Basic Button Mappings
- Basic Knob Mappings

To Do 
- LED Light responses for all buttons
- Jog wheels 
- init for controller positions
- Support for quad deck via shift button
- Library browsing using rotart encoder Knob



Debug for the Jog wheels 

Debug [Controller]: "MIDI t:1020775 ms status 0xB7 (ch 8, opcode 0xB), ctrl 0x0E, val 0x01"     Deck 1 rotate clockwise
Debug [Controller]: "MIDI t:1021118 ms status 0xB7 (ch 8, opcode 0xB), ctrl 0x0E, val 0x7F"     Deck 1 rotate anti-clockwise

Debug [Controller]: "MIDI t:950652 ms status 0xB8 (ch 9, opcode 0xB), ctrl 0x0E, val 0x01"	Deck 2 rotate clockwise
Debug [Controller]: "MIDI t:951512 ms status 0xB8 (ch 9, opcode 0xB), ctrl 0x0E, val 0x7F"      Deck 2 rotate anti-clockwise

Debug [Controller]: "MIDI t:1112445 ms status 0x97 (ch 8, opcode 0x9), ctrl 0x1F, val 0x7F"     Deck 1 press on 
Debug [Controller]: "MIDI t:1112504 ms status 0x97 (ch 8, opcode 0x9), ctrl 0x1F, val 0x00"     Deck 1 press off 

Debug [Controller]: "MIDI t:909620 ms status 0x98 (ch 9, opcode 0xB), ctrl 0x0E, val 0x7F"      Deck 2 press on 
Debug [Controller]: "MIDI t:909674 ms status 0x98 (ch 9, opcode 0x9), ctrl 0x1F, val 0x00"      Deck 2 press off
