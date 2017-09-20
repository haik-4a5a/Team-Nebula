import { Component } from '@angular/core';
import { NavController, AlertController, ActionSheetController, ModalController } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { FormulierPage } from '../formulier/formulier';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


  constructor(public navCtrl: NavController, public alertCtrl: AlertController,
    af: AngularFireDatabase, public actionSheetCtrl: ActionSheetController, public modalCtrl: ModalController) {

     
}
	public onButtonClicked(): void {
		let modal = this.modalCtrl.create(FormulierPage);
		modal.present();
	}

}
