import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-loading',
  templateUrl: 'loading.html',
})
export class LoadingPage {

  constructor(
		  		public navCtrl: NavController,
				public navParams: NavParams,
				public loadingCtrl: LoadingController,
				public alertCtrl: AlertController ) {
  }


  ionViewDidLoad() {
	let loader = this.loadingCtrl.create(
		{ 	content: "Aguarde" ,
			duration: 1000 } )

	loader.present()
  }
  /*
 	Tela padrão com TimeOut
 */
  public salvar(): void {
	let loader: any = this.loadingCtrl.create(
		{ content: "Salvando dados..." } )
	let alertBasic = this.alertCtrl.create(
			{
				title: 'Sucesso',
				subTitle: 'Dados Salvos com Sucesso' ,
				buttons: ['Fechar']
			}
		)

	loader.present()
	//processamento de algo
	setTimeout( () => {
						alertBasic.present();
						loader.dismiss() } ,
				3000)
  }
  /*
 	Tela de Loading customizada
 */
  public salvarCustomizado(): void {
	let aguardeCustomizado = this.loadingCtrl.create({
		spinner: 'hide',
		content: `<div class="custom-spinner-container">
					<div class="custom-spinner-box"></div>
				</div>`,
		duration: 5000
	})
	aguardeCustomizado.onDidDismiss( () => {
		alert('Aguarde foi encerrado');
	})
	aguardeCustomizado.present()
  }
  /*
 	Tela sem o Spinner
  */
  public salvarSemSpinner(): void {
	  let aguarde = this.loadingCtrl.create( {
		  spinner: 'hide',
		  content: 'Por favor aguarde...',
		  duration: 5000
	  })
	  aguarde.present()
  }
  /*
 	Spinner diferente
  */
  public salvarIndicadores(): void {
	let aguarde = this.loadingCtrl.create({
			  spinner: 'dots',
			  content: 'Por favor, aguarde...',
			  duration: 2000}
	  	)
	let aguarde2 = this.loadingCtrl.create({
		spinner: 'ios',
		content: 'Por favor, aguarde...',
		duration: 2000}
		)
	let aguarde3 = this.loadingCtrl.create({
		spinner: 'bubbles',
		content: 'Por favor, aguarde...',
		duration: 2000}
		)
	let aguarde4 = this.loadingCtrl.create({
			spinner: 'circles',
			content: 'Por favor, aguarde...',
			duration: 2000}
			)
	let aguarde5 = this.loadingCtrl.create({
		spinner: 'crescent',
		content: 'Por favor, aguarde...',
		duration: 2000}
		)
	aguarde.present();
	aguarde.onDidDismiss( () => {
		aguarde2.present();
	})
	aguarde2.onDidDismiss( () => {
		aguarde3.present();
	})
	aguarde3.onDidDismiss( () => {
		aguarde4.present();
	})
	aguarde4.onDidDismiss( () => {
		aguarde5.present();
	})
  }
}
