import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-formulario',
  templateUrl: 'formulario.html',
})
export class FormularioPage {
  public form: FormGroup
  constructor(public navCtrl: NavController, public navParams: NavParams, private formBuilder: FormBuilder, private toastCtrl: ToastController) {
    this.form = this.formBuilder.group({
      login: ['', Validators.compose([
        Validators.minLength(1),
        Validators.maxLength(20),
        Validators.required
      ])],
      senha: ['', Validators.compose([
        Validators.minLength(1),
        Validators.maxLength(20),
        Validators.required
      ])]
    })
  }

  ionViewDidLoad() {
  }
  public autenticarFuncionario(): void {
    let msg: string = 'Login :' + this.form.value.login + ' Senha :' + this.form.value.senha
    this.toastCtrl.create({message: msg, duration: 2000, position: 'top'}).present()
  }
}
