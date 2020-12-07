# Basic Clock

-------------------------

## Overview
A basic digital clock display that also plays the Westminster Quarters to mark each quarter-hour.

-------------------------

## Installation Instruction

### Directly Flashed Version

1. The Basic Clock app makes a request to a server to get the current local time. Make sure you have a .boot0 file in your Espruino storage that contains your WIFI credentials. 
2. Copy the code from ./flashed-version.js into the Espruino IDE.
3. Update the TZ variable at the top of the script with your timezone value.
4. Flash the code on to your device.

### Cloud Version
1. Open the lumiius IDE at [https://lumiius.robotictheater.com/ide](https://lumiius.robotictheater.com/ide)
2. Copy the code from ./cloud-version.js into the lumiius IDE.
3. Update the TZ variable at the top of the script with your timezone value.
4. Plress the upload icon to send the program to your device.