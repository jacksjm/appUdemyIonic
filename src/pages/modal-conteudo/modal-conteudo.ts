import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';

@Component({
	selector: 'page-modal-conteudo',
	templateUrl: 'modal-conteudo.html',
})
export class ModalConteudoPage {
	public usuario: any
	constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
		this.usuario = this.navParams.get("user")
	}

	ionViewDidLoad() {
	}
    public fecharModal(): void {
		this.viewCtrl.dismiss()
	}
	public fecharModalParam(): void {
		let param = "Jackson Machado"
		this.viewCtrl.dismiss(param)
	}
}
