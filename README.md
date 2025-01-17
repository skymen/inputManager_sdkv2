<img src="./src/icon.svg" width="100" /><br>
# Input Manager
### Version 2.0.0.0

[<img src="https://placehold.co/200x50/4493f8/FFF?text=Download&font=montserrat" width="200"/>](https://github.com/skymen/inputManager_sdkv2/releases/download/SkymenInputManager-2.0.0.0.c3addon/SkymenInputManager-2.0.0.0.c3addon)
<br>
<sub> [See all releases](https://github.com/skymen/inputManager_sdkv2/releases) </sub> <br>

---
Allows you to store and reuse inputs easily <br>
<b><u>Author:</u></b> skymen <br>
<sub>Made using [CAW](https://marketplace.visualstudio.com/items?itemName=skymen.caw) </sub><br>

## Table of Contents
- [Usage](#usage)
- [Examples Files](#examples-files)
- [Properties](#properties)
- [Actions](#actions)
- [Conditions](#conditions)
- [Expressions](#expressions)
---
## Usage
To build the addon, run the following commands:

```
npm i
npm run build
```

To run the dev server, run

```
npm i
npm run dev
```

## Examples Files

---
## Properties
| Property Name | Description | Type |
| --- | --- | --- |


---
## Actions
| Action | Description | Params
| --- | --- | --- |
| Set down input | Set an input to a down state | Input             *(string)* <br> |
| Set up input | Set an input to an up state | Input             *(string)* <br> |
| Simulate Down Event | This only triggers a down event, but does not change the state of the input | Input             *(string)* <br> |
| Simulate Up Event | This only triggers an up event, but does not change the state of the input | Input             *(string)* <br> |


---
## Conditions
| Condition | Description | Params
| --- | --- | --- |
| On Any Pressed | Check if any input was last pressed |  |
| On Any Released | Check if any input was last released |  |
| Is Down | Check if an input is down | Input *(string)* <br> |
| On Input Pressed | Check if an input was last pressed | Input *(string)* <br> |
| On Input Released | Check if an input was last released | Input *(string)* <br> |


---
## Expressions
| Expression | Description | Return Type | Params
| --- | --- | --- | --- |
| GetLast | Get the last input that was triggered | string |  | 
