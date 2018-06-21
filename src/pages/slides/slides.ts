import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, ToastController, Slides } from 'ionic-angular';

@Component({
	selector: 'page-slides',
	templateUrl: 'slides.html',
})
export class SlidesPage {
	@ViewChild(Slides) slideView: Slides
	public rootImg : string = "./assets/slides/"
	public extImg: string = ".png"
    public slides: Array<string> = [
									this.rootImg+'slide1'+this.extImg,
									this.rootImg+'slide2'+this.extImg,
									this.rootImg+'slide3'+this.extImg,
									this.rootImg+'slide4'+this.extImg
									]
	constructor(public navCtrl: NavController, public navParams: NavParams, private toastCtrl: ToastController) {
	}

	ionViewDidLoad() {
	}
	public slideAlterado(): void {
		let currentSlide = this.slideView.getPreviousIndex()

		this.toastCtrl.create( { message: 'Alterado slide ' + currentSlide, duration: 2000, position: 'top'} ).present()
	}
	public avancarSlide(): void {
		this.slideView.slideNext(2000)
	}
}
