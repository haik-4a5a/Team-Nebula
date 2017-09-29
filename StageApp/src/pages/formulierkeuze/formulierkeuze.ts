import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ViewController } from 'ionic-angular';
import { FormulierPage } from '../formulier/formulier';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

/**
 * Generated class for the FormulierkeuzePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-formulierkeuze',
  templateUrl: 'formulierkeuze.html',
})
export class FormulierkeuzePage {
    shizzles: FirebaseListObservable<any>;
    shizzleId;

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, public viewCtrl: ViewController, af: AngularFireDatabase) {
    this.shizzles = af.list('/shizzles/4');

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FormulierkeuzePage');
  }
public onButtonClicked(): void {
		let modal = this.modalCtrl.create(FormulierPage);
    {
        this.shizzles.push({
          formuliernaam: ('')
  });
}
		modal.present();
	}
public onButtonClickedBack(): void{
  	this.viewCtrl.dismiss();
  }
}
