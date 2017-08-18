import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { OrderPage } from '../order/order';

@Component({
  selector: 'page-previous-purchases',
  templateUrl: 'previous-purchases.html'
})
export class PreviousPurchasesPage {

  constructor(public navCtrl: NavController) {
  }
  goToOrder(params){
    if (!params) params = {};
    this.navCtrl.push(OrderPage);
  }
}
