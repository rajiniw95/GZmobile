import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePagePage } from '../pages/home-page/home-page';
import { PreviousPurchasesPage } from '../pages/previous-purchases/previous-purchases';
import { PendingOrdersPage } from '../pages/pending-orders/pending-orders';
import { RecordDepositPage } from '../pages/record-deposit/record-deposit';
import { UploadDepositSlipPage } from '../pages/upload-deposit-slip/upload-deposit-slip';
import { CalculatePaymentPage } from '../pages/calculate-payment/calculate-payment';

import { LoginPage } from '../pages/login/login';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) navCtrl: Nav;
    rootPage:any = LoginPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  goToHomePage(params){
    if (!params) params = {};
    this.navCtrl.setRoot(HomePagePage);
  }goToPreviousPurchases(params){
    if (!params) params = {};
    this.navCtrl.setRoot(PreviousPurchasesPage);
  }goToOrder(params){
    if (!params) params = {};
    this.navCtrl.setRoot(OrderPage);
  }goToPendingOrders(params){
    if (!params) params = {};
    this.navCtrl.setRoot(PendingOrdersPage);
  }goToOrder(params){
    if (!params) params = {};
    this.navCtrl.setRoot(OrderPage);
  }goToRecordDeposit(params){
    if (!params) params = {};
    this.navCtrl.setRoot(RecordDepositPage);
  }goToUploadDepositSlip(params){
    if (!params) params = {};
    this.navCtrl.setRoot(UploadDepositSlipPage);
  }goToCalculatePayment(params){
    if (!params) params = {};
    this.navCtrl.setRoot(CalculatePaymentPage);
  }
}
