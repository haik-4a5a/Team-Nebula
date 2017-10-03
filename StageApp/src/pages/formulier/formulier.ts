import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ViewController } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';

import jsPDF from 'jspdf';
declare let jsPD;

/**
 * Generated class for the FormulierPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-formulier',
  templateUrl: 'formulier.html',
})

form {
  date = "";
};

export class FormulierPage {
  shizzles: FirebaseListObservable<any>;
  shizzleId;
  FormId;
  FormDate;
  FormName;
  FormTekst;
  FormManier;
  form = {
    formuliernaam: '',
    datum: '',
    manier: '',
    gesprek: ''
  };

  constructor(public navCtrl: NavController, public navParam: NavParams, public modalCtrl: ModalController, public viewCtrl: ViewController, public af: AngularFireDatabase) {
    this.shizzleId = navParam.get("shizzleId");
    this.shizzles = af.list('/shizzles/' + this.shizzleId + '/form/');  
    this.FormId = navParam.get("FormId");    
    this.FormName = navParam.get("FormName");
    this.FormDate = navParam.get("FormDate");
    this.FormTekst = navParam.get("FormTekst");
    this.FormManier = navParam.get("FormManier");
  }

  public logForm(){
    this.shizzles.update(this.FormId, {
      formuliernaam: this.form.formuliernaam,
      datum: this.form.datum,
      manier: this.form.manier,
      gesprek: this.form.gesprek
    });
    console.log(this.form.datum);
    console.log(this.form.manier);
    console.log(this.form.gesprek);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FormulierPage');
  }
  public onButtonClicked(): void{
    
  }
  public download(): void{
        var doc = new jsPDF()
        doc.text(form.date, 10, 10)
        doc.save('a4.pdf')
  }

  public back(): void{
    this.viewCtrl.dismiss();
  }
}
