import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';

@Component({
  selector: 'page-toast',
  templateUrl: 'toast.html',
})
export class ToastPage {

  constructor(
	  public navCtrl: NavController,
	  public navParams: NavParams,
	  public toastCtrl: ToastController ) {
  }

  ionViewDidLoad() {
  }
  public showToast(position: string): void {
	let toast = this.toastCtrl.create({
		message: 'Dados salvos com sucesso!',
		duration: 2000,
		position: position
	})
	toast.present();
  }
  public showLongToast(): void {
	let toast = this.toastCtrl.create({
		message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam imperdiet, augue at rutrum facilisis, ex velit pellentesque odio, vel ultrices dolor sapien eget lacus. Vivamus quis fermentum elit. Nunc sit amet nibh scelerisque dolor tempor cursus. Morbi pellentesque nisl et dolor sollicitudin, eget posuere purus gravida. Mauris porta porta aliquam. Nulla pharetra tincidunt erat, vel sodales massa. Quisque ullamcorper velit id elit volutpat gravida. Curabitur aliquam tellus sit amet mauris bibendum feugiat. Proin finibus urna ac diam pharetra, sit amet iaculis sapien scelerisque. Aenean in eleifend nisl. Nam eu magna at odio aliquet congue. Quisque finibus ultricies elementum. Quisque pellentesque porttitor dolor vel fringilla. Duis sapien dui, pulvinar vitae metus id, vulputate eleifend velit.',
		duration: 2000,
		position: 'top'
	})
	toast.present();
  }
  public showButtonToast(): void {
	let toast = this.toastCtrl.create({
		message: 'Dados salvos com sucesso!',
		duration: 2000,
		position: 'top',
		showCloseButton: true,
		closeButtonText: 'Ok'
	})
	toast.present();
  }
}
