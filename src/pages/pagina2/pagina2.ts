import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-pagina2',
  templateUrl: 'pagina2.html',
})
export class Pagina2Page {
  public usuario: any
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.usuario = this.navParams.get("user")
  }

  ionViewDidLoad() {
  }
  public fecharPagina(): void {
    this.navCtrl.pop()
  }
}
