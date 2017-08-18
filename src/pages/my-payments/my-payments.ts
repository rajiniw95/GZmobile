import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RecordDepositPage } from '../record-deposit/record-deposit';
import { UploadDepositSlipPage } from '../upload-deposit-slip/upload-deposit-slip';
import { CalculatePaymentPage } from '../calculate-payment/calculate-payment';

@Component({
  selector: 'page-my-payments',
  templateUrl: 'my-payments.html'
})
export class MyPaymentsPage {

  constructor(public navCtrl: NavController) {
  }
  goToRecordDeposit(params){
    if (!params) params = {};
    this.navCtrl.push(RecordDepositPage);
  }goToUploadDepositSlip(params){
    if (!params) params = {};
    this.navCtrl.push(UploadDepositSlipPage);
  }goToCalculatePayment(params){
    if (!params) params = {};
    this.navCtrl.push(CalculatePaymentPage);
  }
}
