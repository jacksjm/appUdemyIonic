import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ToastController } from 'ionic-angular';
import { FabPage } from '../fab/fab';
import { ModalConteudoPage } from '../modal-conteudo/modal-conteudo';

@IonicPage()
@Component({
  selector: 'page-modal-principal',
  templateUrl: 'modal-principal.html',
})
export class ModalPrincipalPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, public toastCtrl:  ToastController) {
  }

  ionViewDidLoad() {
  }
  public abrirModalBasico(): void {
    this.modalCtrl.create(FabPage).present()
  }
  public abrirModalParam(): void {
    let param = {user: {nome: 'Jackson Machado', idade: 25}}
    this.modalCtrl.create(ModalConteudoPage, param).present()
  }
  public abrirModalFechar(): void {
    let modal = this.modalCtrl.create(ModalConteudoPage)
    modal.onDidDismiss(data => {
      this.toastCtrl.create({message: data, duration: 2000, position: 'top'}).present()
    })
    modal.present()
  }
}
