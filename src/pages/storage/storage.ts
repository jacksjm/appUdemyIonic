import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-storage',
  templateUrl: 'storage.html',
})
export class StoragePage {

  public valueButton: any

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage) {
  }

  ionViewDidLoad() {
    this.storage.get('ultimoBotao').then( (value) => {
      this.valueButton = value
    })
  }

  public botao1(): void {
    //Utilizando componente do Ionic
    this.storage.set('ultimoBotao','1')
    //Utilizando localStorage do JavaScript
    localStorage.setItem('opcao','1')
    //Utilizando sessionStorage do JavaScript
    sessionStorage.setItem('session','1')
  }
  public botao2(): void {
    //Utilizando componente do Ionic
    this.storage.set('ultimoBotao','2')
    //Utilizando localStorage do JavaScript
    localStorage.setItem('opcao','2')
    //Utilizando sessionStorage do JavaScript
    sessionStorage.setItem('session','2')
  }
}
