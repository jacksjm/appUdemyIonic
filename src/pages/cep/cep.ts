import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, LoadingController } from 'ionic-angular';
import { CepProvider } from '../../providers/cep/cep';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-cep',
  templateUrl: 'cep.html',
})
export class CepPage {
  public cep: any
  public form: FormGroup

  constructor(public navCtrl: NavController, public navParams: NavParams, private cepService: CepProvider, private formBuilder: FormBuilder, private toastCtrl: ToastController, private loadingCtrl: LoadingController ) {
    this.form = this.formBuilder.group({
      cep: ['', Validators.compose([
        Validators.minLength(1),
        Validators.maxLength(8),
        Validators.required
      ])]
    })
  }

  ionViewDidLoad() {
  }
  public consultarCep(): void {
    let loader = this.loadingCtrl.create({content: 'Aguarde...'})
    loader.present()
    this.cepService.listarEndereco(this.form.get('cep').value).then( (response) => {
      this.cep = response.json()
      loader.dismiss()
    }).catch((error) => {
      let msgError: string = JSON.stringify(error)
      loader.dismiss()
      this.toastCtrl.create({message: 'CEP não encontrado' + msgError, duration: 2000, position: 'top'}).present()
    })
  }
}