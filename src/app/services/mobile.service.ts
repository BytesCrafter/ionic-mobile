import { Injectable } from '@angular/core';
import { StatusBar, Style } from '@capacitor/status-bar';
import { Preferences } from '@capacitor/preferences';
import { PluginListenerHandle } from '@capacitor/core';
import { Motion } from '@capacitor/motion';
let accelHandler: PluginListenerHandle;

@Injectable({
  providedIn: 'root'
})
export class MobileService {

  constructor() {
    window.addEventListener('statusTap', function () { // iOS only
      console.log('statusbar tapped');
    });
  }

  async startMotionListener() {
    // try {
    //   await DeviceMotionEvent.requestPermission();
    // } catch (e) {
    //   // Handle error
    //   return;
    // }

    // Once the user approves, can start listening:
    accelHandler = await Motion.addListener('accel', event => {
      console.log('Device motion event:', event);
    });
  }

  stopMotionListener() {
    // Stop the acceleration listener
    const stopAcceleration = () => {
      if (accelHandler) {
        accelHandler.remove();
      }
    };
  }

  removeMotionListener() {
    // Remove all listeners
    const removeListeners = () => {
      Motion.removeAllListeners();
    };
  }

  async setPrefs(keyName: any = '', strvar: any = '') {
    await Preferences.set({
      key: keyName,
      value: strvar,
    });
  }

  async getPrefs(keyName: any = '') {
    const checkName = await Preferences.get({ key: keyName });
    return checkName;
  }

  async removePrefs(keyName: any = '') {
    await Preferences.remove({ key: keyName });
  }

  setOverlayWebView(enable: boolean = true) {
    // Display content under transparent status bar (Android only)
    StatusBar.setOverlaysWebView({ overlay: enable });
  }

  setStatusBarLight() {
    const setStatusBarStyleLight = async () => {
      await StatusBar.setStyle({ style: Style.Light });
    };
  }

  setStatusBarDark() {
    const setStatusBarStyleDark = async () => {
      await StatusBar.setStyle({ style: Style.Dark });
    };
  }

  showStatusBar() {
    const showStatusBar = async () => {
      await StatusBar.show();
    };
  }

  hideStatusBar() {
    const hideStatusBar = async () => {
      await StatusBar.hide();
    };
  }
}
