import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-select',
  templateUrl: 'select.html',
})
export class SelectPage {
  public selectOptions: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.selectOptions = {
      title: 'Frutas frescas',
      subTitle: 'Selecione a fruta mais doce',
      mode: 'ios'
    }
  }

}
