# lumiius apps
Currently I only have a small number of apps based on what my kids ask for.  If you would like to share an app you create, please send me an PR. 

 - [Basic Digital Clock](./basic-clock)
 - [Fireplace](./fireplace)
 - [General Image Gallery](./gallery)

## Things To Know

- Each app has a `startApp` and `stopApp` function. For apps that request data from the internet the `startApp` function will be called from the `connectToWifi` functions callback.  For apps that don't require wifi, the `startApp` function is just called at Espruino startup.

- There is a helper function in the `.boot1` file called `pxy()`.  This is very useful as it maps an x/y value to the correct LED address.
  - Example `pxy(0,0)` will return the address of the LED in the upper left of your matrix. `pxy(15,15)` will return the address of the LED in the bottom right of your matrix. 