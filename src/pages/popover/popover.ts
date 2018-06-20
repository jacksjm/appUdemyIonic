import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController } from 'ionic-angular';
import { IconesPage } from '../icones/icones';

@IonicPage()
@Component({
	selector: 'page-popover',
	templateUrl: 'popover.html',
})
export class PopoverPage {

	constructor(public navCtrl: NavController, public navParams: NavParams, public popoverCtrl: PopoverController) {
	}

	ionViewDidLoad() {
	}
	public abrirPopover(): void {
		let popover = this.popoverCtrl.create(IconesPage)
		popover.present()
	}
}
