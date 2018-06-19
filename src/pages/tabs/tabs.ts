import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BotoesPage } from '../botoes/botoes';
import { CardPage } from '../card/card';
import { ToastPage } from '../toast/toast';

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
  public botoesPage = BotoesPage
  public cardPage = CardPage
  public toastPage = ToastPage

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
  }

}
