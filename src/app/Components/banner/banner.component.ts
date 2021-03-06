import { Component, OnInit } from '@angular/core';
import {
  AdMob,
  BannerAdOptions,
  BannerAdPosition,
  BannerAdSize,
} from '@capacitor-community/admob';
import { isPlatform, Platform } from '@ionic/angular';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
})
export class BannerComponent implements OnInit {
  constructor(public platform: Platform) {}

  ngOnInit() {}

  async showBanner() {
    //get ids for banner and others from created admob adunit.
    // note ids are production only ,so only use them in prod
    // if testing or dev use blank or dummy string as below for ids

    const adId = isPlatform('ios') ? 'ios-ad-id' : 'android-ad-id';

    const options: BannerAdOptions = {
      adId,
      adSize: BannerAdSize.ADAPTIVE_BANNER,
      position: BannerAdPosition.BOTTOM_CENTER,
      margin: 0,
      isTesting: true,
    };

    await AdMob.showBanner(options);
  }

  async hideBanner() {
    // just hides the banner
    await AdMob.hideBanner();

    //completely removes banner
    await AdMob.removeBanner();
  }
}
