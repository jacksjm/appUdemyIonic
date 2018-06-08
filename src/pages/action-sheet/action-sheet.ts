import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController, AlertController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-action-sheet',
  templateUrl: 'action-sheet.html',
})
export class ActionSheetPage {

  constructor(
				  public navCtrl: NavController,
				  public navParams: NavParams,
				  public actionSheetCtrl: ActionSheetController,
				  public alertCtrl: AlertController ) {
  }

  ionViewDidLoad() {
  }
  public abrirActionSheet(): void {
	let alertCreate = this.alertCtrl.create(
		{
			title: 'Opção A',
			subTitle: 'Você clicou na opção A',
			buttons: ['OK']
		}
	)
	let actionSheet = this.actionSheetCtrl.create(
		{
			title: 'Opções',
			buttons: [
				{ icon: 'create', text: 'Opção A' , role: 'destructive', handler: () => { alertCreate.present() } },
				{ text: 'Opção B' , handler: () => { alert('Você clicou na Opção B') } },
				{ text: 'Cancelar' , role: 'cancel', handler: () => { alert('Você clicou na Opção Cancelar') } }
			]
		}
	)

	actionSheet.present();
  }
}
