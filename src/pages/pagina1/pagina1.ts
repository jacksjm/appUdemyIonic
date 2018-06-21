import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Pagina2Page } from '../pagina2/pagina2';

@Component({
  selector: 'page-pagina1',
  templateUrl: 'pagina1.html',
})
export class Pagina1Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
  }
  public abrirPagina2(): void {

    let paramUser = { nome: 'Jackson Machado' , idade: 25 }

    this.navCtrl.push(Pagina2Page,{ user: paramUser });

  }
}
