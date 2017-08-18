import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePagePage } from '../home-page/home-page';
import { MyOrdersPage } from '../my-orders/my-orders';
import { PreviousPurchasesPage } from '../previous-purchases/previous-purchases';
import { PendingOrdersPage } from '../pending-orders/pending-orders';
import { MyDeliveriesPage } from '../my-deliveries/my-deliveries';
import { MyPaymentsPage } from '../my-payments/my-payments';
import { RecordDepositPage } from '../record-deposit/record-deposit';
import { UploadDepositSlipPage } from '../upload-deposit-slip/upload-deposit-slip';
import { CalculatePaymentPage } from '../calculate-payment/calculate-payment';
import { MyProfilePage } from '../my-profile/my-profile';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  constructor(public navCtrl: NavController) {
  }
  goToHomePage(params){
    if (!params) params = {};
    this.navCtrl.push(HomePagePage);
  }goToMyOrders(params){
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
  }
}
