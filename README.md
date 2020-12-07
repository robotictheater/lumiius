# lumiius

![](https://lumiius.com/assets/img/256.jpg)


-------------------

## Overview
lumiius is an [Espruino](http://espruino.com) powered RGB LED project that I built for my kids to have in their rooms. 

It's easy to build and requires no special tools or wood working. 

I also built a free to use web based IDE that allows you to push new code to the device over the internet. This way you don't need to be physically connected to the Espruino which is useful when the matrix is in your kids room and you need to update the display. 

You can choose to use the lumiius IDE at [https://lumiius.robotictheater.com/ide](https://lumiius.robotictheater.com/ide) or directly flash the apps right to your Espruino. Both versions are available for each app. 


-------------------

## Getting Started


#### 16x16 Grid Version

1. Checkout the build process. I posted the how-to on the main maker sites. Choose your favorite:
   - Make:Projects
   - Hackster
   - Hackaday

2. After you have your Espruino connected to your 16x16 LED matrix, it's time to send it some code.  You can choose to do that either via the cloud or directly below.
   - [Cloud version setup](#cloudversion)
   - [Directly flashed version setup](#cloudversion)

-------------------

#### LED Strip Version

~~ Currently working on some dispays for this. More information to come. ~~

-------------------

## Cloud Version Setup
 1. The cloud version requires the Espruino to access your wifi network. Copy and paste the contents of /cloud-setup/.boot0 into your Espruino IDE and update with your Wifi credentials.
 2. Now you need to flash the main lumiius code onto your Espruino. This will handle connecting to your wifi as well as the lumiius websocket server.  Copy and paste the contents of /cloud-setup/.bootcde into your Espruino IDE and flash it to your device.
 3. Login to the lumiius IDE and register your devices serial number [https://lumiius.robotictheater.com/ide](https://lumiius.robotictheater.com/ide)
 4. Now your Espruino should be connected to your wifi with the lumiius code running. You should also see your device listed with a solid pink indicator by it. 

 Checkout the ide-readme.md file for information on how to use the lumiius IDE.


--------------------

## Directly Flashed Version Setup  