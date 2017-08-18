import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MyOrdersPage } from '../my-orders/my-orders';
import { PendingOrdersPage } from '../pending-orders/pending-orders';
import { MyDeliveriesPage } from '../my-deliveries/my-deliveries';
import { MyPaymentsPage } from '../my-payments/my-payments';
import { RecordDepositPage } from '../record-deposit/record-deposit';
import { UploadDepositSlipPage } from '../upload-deposit-slip/upload-deposit-slip';
import { CalculatePaymentPage } from '../calculate-payment/calculate-payment';
import { MyProfilePage } from '../my-profile/my-profile';
import { LoginPage } from '../login/login';
import { HomePagePage } from '../home-page/home-page';

@Component({
  selector: 'page-home-page',
  templateUrl: 'home-page.html'
})
export class HomePagePage {

  constructor(public navCtrl: NavController) {
  }
  goToMyOrders(params){
    if (!params) params = {};
    this.navCtrl.push(MyOrdersPage);
  }goToPreviousPurchases(params){
    if (!params) params = {};
    this.navCtrl.push(PreviousPurchasesPage);
  }goToPendingOrders(params){
    if (!params) params = {};
    this.navCtrl.push(PendingOrdersPage);
  }goToMyDeliveries(params){
    if (!params) params = {};
    this.navCtrl.push(MyDeliveriesPage);
  }goToMyPayments(params){
    if (!params) params = {};
    this.navCtrl.push(MyPaymentsPage);
  }goToRecordDeposit(params){
    if (!params) params = {};
    this.navCtrl.push(RecordDepositPage);
  }goToUploadDepositSlip(params){
    if (!params) params = {};
    this.navCtrl.push(UploadDepositSlipPage);
  }goToCalculatePayment(params){
    if (!params) params = {};
    this.navCtrl.push(CalculatePaymentPage);
  }goToMyProfile(params){
    if (!params) params = {};
    this.navCtrl.push(MyProfilePage);
  }goToLogin(params){
    if (!params) params = {};
    this.navCtrl.push(LoginPage);
  }goToHomePage(params){
    if (!params) params = {};
    this.navCtrl.push(HomePagePage);
  }
}
