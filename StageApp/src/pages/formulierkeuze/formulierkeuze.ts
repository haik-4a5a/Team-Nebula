import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ViewController } from 'ionic-angular';
import { FormulierPage } from '../formulier/formulier';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { UserInfo } from '../userInfo/userInfo';

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
    shizzle: FirebaseObjectObservable<any>;
    shizzleId;

  constructor(public navCtrl: NavController, public navParam: NavParams, public modalCtrl: ModalController, public viewCtrl: ViewController, public af: AngularFireDatabase) {
    this.shizzleId = navParam.get("shizzleId");
    this.shizzles = af.list('/shizzles/' + this.shizzleId + '/form/');

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FormulierkeuzePage');
  }
  read(FormId, FormDate, FormName, FormTekst, FormManier){
    let prompt = this.navCtrl.push(FormulierPage, {
      shizzleId: this.shizzleId,
      FormId: FormId,
      FormDate: FormDate,
      FormName: FormName,
      FormTekst: FormTekst,
      FormManier: FormManier

    });
  }

public onButtonClicked(): void {
      this.shizzles.push({
        formuliernaam: "Nieuw gespreksformulier",
        datum: "",
        manier: "",
        gesprek: "",
      });
	}
public onButtonClickedBack(): void{
  	this.viewCtrl.dismiss();
  }
}
