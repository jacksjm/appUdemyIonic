import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-toggle',
  templateUrl: 'toggle.html',
})
export class TogglePage {
  public ativo: boolean = false
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
  }

}
