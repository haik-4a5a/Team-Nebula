import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ViewController } from 'ionic-angular';
import { FormulierkeuzePage } from '../formulierkeuze/formulierkeuze';

/**
 * Generated class for the LeerlingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-leerling',
  templateUrl: 'leerling.html',
})
export class LeerlingPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LeerlingPage');
  }

public onButtonClicked(): void {
		let modal = this.modalCtrl.create(FormulierkeuzePage);
		modal.present();
	}
public onButtonClickedBack(): void{
  	this.viewCtrl.dismiss();
  }
}
