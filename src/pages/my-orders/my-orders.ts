import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PreviousPurchasesPage } from '../previous-purchases/previous-purchases';
import { PendingOrdersPage } from '../pending-orders/pending-orders';

@Component({
  selector: 'page-my-orders',
  templateUrl: 'my-orders.html'
})
export class MyOrdersPage {

  constructor(public navCtrl: NavController) {
  }
  goToPreviousPurchases(params){
    if (!params) params = {};
    this.navCtrl.push(PreviousPurchasesPage);
  }goToPendingOrders(params){
    if (!params) params = {};
    this.navCtrl.push(PendingOrdersPage);
  }
}
