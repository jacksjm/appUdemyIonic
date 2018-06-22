import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

@Component({
  selector: 'page-bar-code',
  templateUrl: 'bar-code.html',
})
export class BarCodePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController, private barcodeScanner: BarcodeScanner ) {
  }

  ionViewDidLoad() {

  }
  public scanCode(): void {
    this.barcodeScanner.scan().then( (barcodeData) => {
      let response: string = JSON.stringify(barcodeData);
      this.toastCtrl.create({message: response, duration: 2000, position: 'top' }).present()
    }, (err) => {
      let response: string = JSON.stringify(err)
      this.toastCtrl.create({message: response, duration: 2000, position: 'top' }).present()
    })
  }
}
