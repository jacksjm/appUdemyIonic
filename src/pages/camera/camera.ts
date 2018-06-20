import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';

@IonicPage()
@Component({
  selector: 'page-camera',
  templateUrl: 'camera.html',
})
export class CameraPage {
  public photo: any
  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController, private camera: Camera) {
  }

  ionViewDidLoad() {
  }
  public tirarFoto(): void {
	const options: CameraOptions = {
		quality: 100,
		destinationType: this.camera.DestinationType.DATA_URL,
		encodingType: this.camera.EncodingType.JPEG,
		mediaType: this.camera.MediaType.PICTURE
	}

	this.camera.getPicture(options).then( (imageData) => {

		let base64Image = 'data:image/jpeg;base64,' + imageData

		this.photo = base64Image

	},(err)=>{
		console.log(err)
		this.toastCtrl.create({ message: 'Photo Error', duration: 2000, position: 'top'}).present()
	})
  }
}
