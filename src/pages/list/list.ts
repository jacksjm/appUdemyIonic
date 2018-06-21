import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
})
export class ListPage {
  public itens: Array<string> = [
	'Laranja', 'Banana', 'Abacate', 'Manga', 'Maçã', 'Pera', 'Uva', 'Limão'
  ]


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
  }
  public selecionarItem(item: string): void {
	  console.log(item)
  }
}
