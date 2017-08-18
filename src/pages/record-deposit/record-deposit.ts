import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UploadDepositSlipPage } from '../upload-deposit-slip/upload-deposit-slip';

@Component({
  selector: 'page-record-deposit',
  templateUrl: 'record-deposit.html'
})
export class RecordDepositPage {

  constructor(public navCtrl: NavController) {
  }
  goToUploadDepositSlip(params){
    if (!params) params = {};
    this.navCtrl.push(UploadDepositSlipPage);
  }
}
