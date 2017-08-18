import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { OrderPage } from '../order/order';

@Component({
  selector: 'page-pending-orders',
  templateUrl: 'pending-orders.html'
})
export class PendingOrdersPage {

  constructor(public navCtrl: NavController) {
  }
  goToOrder(params){
    if (!params) params = {};
    this.navCtrl.push(OrderPage);
  }
}
