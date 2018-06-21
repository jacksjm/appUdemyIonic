import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-range',
  templateUrl: 'range.html',
})
export class RangePage {

	public brilhoTela: number = 50
	public doacao: number = 100
	public faixaEtaria: any = { lower: 16, upper: 60 }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
  }

}
