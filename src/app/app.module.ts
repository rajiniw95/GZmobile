import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { MyProfilePage } from '../pages/my-profile/my-profile';
import { MyPaymentsPage } from '../pages/my-payments/my-payments';
import { MyDeliveriesPage } from '../pages/my-deliveries/my-deliveries';
import { LoginPage } from '../pages/login/login';
import { MyOrdersPage } from '../pages/my-orders/my-orders';
import { HomePagePage } from '../pages/home-page/home-page';
import { PreviousPurchasesPage } from '../pages/previous-purchases/previous-purchases';
import { PendingOrdersPage } from '../pages/pending-orders/pending-orders';
import { RecordDepositPage } from '../pages/record-deposit/record-deposit';
import { OrderPage } from '../pages/order/order';
import { DeliveryPage } from '../pages/delivery/delivery';
import { CalculatePaymentPage } from '../pages/calculate-payment/calculate-payment';
import { UploadDepositSlipPage } from '../pages/upload-deposit-slip/upload-deposit-slip';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    MyProfilePage,
    MyPaymentsPage,
    MyDeliveriesPage,
    LoginPage,
    MyOrdersPage,
    HomePagePage,
    PreviousPurchasesPage,
    PendingOrdersPage,
    RecordDepositPage,
    OrderPage,
    DeliveryPage,
    CalculatePaymentPage,
    UploadDepositSlipPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MyProfilePage,
    MyPaymentsPage,
    MyDeliveriesPage,
    LoginPage,
    MyOrdersPage,
    HomePagePage,
    PreviousPurchasesPage,
    PendingOrdersPage,
    RecordDepositPage,
    OrderPage,
    DeliveryPage,
    CalculatePaymentPage,
    UploadDepositSlipPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}