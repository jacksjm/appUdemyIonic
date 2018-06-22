import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

@Component({
  selector: 'page-localizacao',
  templateUrl: 'localizacao.html',
})
export class LocalizacaoPage {
  public latitute: number
  public longitute: number
  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController, private localizacao: Geolocation) {
  }

  ionViewDidLoad() {
      this.localizacao.getCurrentPosition().then( (resp) => {
        this.latitute = resp.coords.latitude
        this.longitute = resp.coords.longitude
      }, (error) => {
        let response: string = JSON.stringify(error)
        this.toastCtrl.create({message: response, duration: 2000, position: 'top' }).present()
      })
  }

}
