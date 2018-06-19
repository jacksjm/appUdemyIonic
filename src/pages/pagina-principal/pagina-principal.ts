import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Pagina1Page } from '../pagina1/pagina1';
import { Pagina2Page } from '../pagina2/pagina2';

@IonicPage()
@Component({
  selector: 'page-pagina-principal',
  templateUrl: 'pagina-principal.html',
})
export class PaginaPrincipalPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
  }
  public abrirPagina1(): void {
    this.navCtrl.setRoot(Pagina1Page)
  }
  public abrirPagina2(): void {
    this.navCtrl.push(Pagina2Page)
  }
}
