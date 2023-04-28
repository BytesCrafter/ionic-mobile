import { Injectable } from '@angular/core';
import { StatusBar, Style } from '@capacitor/status-bar';

@Injectable({
  providedIn: 'root'
})
export class MobileService {

  constructor() {
    window.addEventListener('statusTap', function () { // iOS only
      console.log('statusbar tapped');
    });
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
