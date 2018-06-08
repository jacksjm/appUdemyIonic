import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-alert',
  templateUrl: 'alert.html',
})
export class AlertPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController ) {
  }

  ionViewDidLoad() {
  }
  public abrirAlert(): void {
	let alertBasic = this.alertCtrl.create(
		{
			title: 'Atenção', subTitle: 'Alerta Simples' , buttons: ['Fechar']
		}
	)

	alertBasic.present();
  }
  public abrirAlertConfirm(): void {
	let alertConfirm = this.alertCtrl.create(
		{
			title: 'Atenção',
			subTitle: 'Alerta de Confirmação',
			message: 'Mensagem de Confirmação',
			buttons: [
				{
					text: "Cancelar",
					role: "cancel",
					handler: () => {
						alert( 'Cancelado')
					}
				},{
					text: "Confirmar",
					handler: () => {
						alert( 'Confirmado')
					}
				}
			]
		}
	)
	alertConfirm.present();
  }
  public abrirAlertInput(): void {
	let alertInput = this.alertCtrl.create(
		{
			title: 'Atenção',
			subTitle: 'Alerta de Input',
			inputs: [
				{
					name: 'Login',
					placeholder: 'user_name'
				},
				{
					name: 'Password',
					placeholder: '******',
					type: 'password'
				}
			],
			buttons: [
				{
					text: "Cancelar",
					role: "cancel",
					handler: (data: any) => {
						console.log( data )
					}
				},{
					text: "Confirmar",
					handler: (data: any) => {
						if(data.Login == 'jackson' && data.Password == '1234'){
							console.log( 'Login realizado')
						}else{
							console.log( 'Usuário não cadastrado')
						}
					}
				}
			]
		}
	)
	alertInput.present();
  }
  public abrirAlertRadio(): void{
	  let alertRadio = this.alertCtrl.create(
		{
			title: 'Escolha uma cor',
			inputs: [
				{
					type: 'radio',
					label: 'Azul',
					value: 'blue',
					checked: true
				},
				{
					type: 'radio',
					label: 'Vermelho',
					value: 'red',
					checked: false
				},
				{
					type: 'radio',
					label: 'Amarelo',
					value: 'yellow',
					checked: false
				},
				{
					type: 'radio',
					label: 'Verde',
					value: 'green',
					checked: false
				}
			],
			buttons: [
				{
					text: 'Cancelar',
					role: 'cancel'
				},
				{
					text: 'Ok',
					handler: (data: any) =>{
						console.log('A cor selecionada é' , data)
					}
				}
			]
		}
	  )
	  alertRadio.present();
  }
  public abrirAlertCheck(): void{
	let alertRadio = this.alertCtrl.create(
	  {
		  title: 'Quais frutas você gosta:',
		  inputs: [
			  {
				  type: 'checkbox',
				  label: 'Banana',
				  value: 'banana',
				  checked: true
			  },
			  {
				  type: 'checkbox',
				  label: 'Laranja',
				  value: 'orange',
				  checked: false
			  },
			  {
				  type: 'checkbox',
				  label: 'Maçã',
				  value: 'apple',
				  checked: false
			  },
			  {
				  type: 'checkbox',
				  label: 'Uva',
				  value: 'grape',
				  checked: false
			  }
		  ],
		  buttons: [
			  {
				  text: 'Cancelar',
				  role: 'cancel'
			  },
			  {
				  text: 'Ok',
				  handler: (data: any) =>{
					  console.log(data)
				  }
			  }
		  ]
	  }
	)
	alertRadio.present();
}
}
