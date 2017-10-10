import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ViewController, ActionSheetController } from 'ionic-angular';
import { FormulierPage } from '../formulier/formulier';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { UserInfo } from '../userInfo/userInfo';
import { BeoordelingPage } from '../beoordeling/beoordeling';
import { BeoordelingPageTwo } from '../beoordeling2/beoordeling2';

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
    bshizzles: FirebaseListObservable<any>;
    shizzle: FirebaseObjectObservable<any>;
    bshizzle: FirebaseListObservable<any>;
    shizzleId;
    form ={
      formuliernaam: '',
      datum: '',
      manier: '',
      gesprek: ''
    }
    bform = {
      a1: '',
      o1: '',
      a2: '',
      o2: '',
      a3: '',
      o3: '',
      a4: '',
      o4: '',
      a5: '',
      o5: '',
      a6: '',
      o6: '',
      a7: '',
      o7: '',
      a8: '',
      o8: '',
      a9: '',
      o9: '',
      a10: '',
      o10: '',
      a11: '',
      o11: '',
      a12: '',
      o12: '',
      a13: '',
      o13: '',
      a14: '',
      o14: '',
      a15: '',
      o15: '',
      a16: '',
      o16: '',
      a17: '',
      o17: '',
      a18: '',
      o18: '',
      a19: '',
      o19: '',
      a20: '',
      o20: '',
      a21: '',
      o21: '',
      a22: '',
      o22: '',
      a23: '',
      o23: '',
      a24: '',
      o24: '',
      ah: '',
      oh: '',
      ata: '',
      ota: ''
    };

  constructor(public navCtrl: NavController, public navParam: NavParams, public modalCtrl: ModalController,
    public viewCtrl: ViewController, public actionSheetCtrl: ActionSheetController,  public af: AngularFireDatabase) {
    this.shizzleId = navParam.get("shizzleId");
    this.shizzles = af.list('/shizzles/' + this.shizzleId + '/form/');
    this.bshizzles = af.list('/shizzles/' + this.shizzleId + '/bform/');

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
  readb(FormId){
    let prompt = this.navCtrl.push(BeoordelingPage, {
      shizzleId: this.shizzleId,
      FormId: FormId
    });
  }

  showOptions() {
  let actionSheet = this.actionSheetCtrl.create({
    title: 'Welke wil je?',
    buttons: [
      {
        text: 'Gespreksformulier',
        handler: () => {
          this.shizzles.push({
            formuliernaam: "Nieuw Gespreksformulier",
            datum: '',
            manier: '',
            gesprek: ''
          })
        }
      },{
        text: 'Beoordelingsformulier',
        handler: () => {
          this.bshizzles.push({
            formuliernaam: "Nieuw Beoordelingsformulier",
            a1: '',
            o1: '',
            a2: '',
            o2: '',
            a3: '',
            o3: '',
            a4: '',
            o4: '',
            a5: '',
            o5: '',
            a6: '',
            o6: '',
            a7: '',
            o7: '',
            a8: '',
            o8: '',
            a9: '',
            o9: '',
            a10: '',
            o10: '',
            a11: '',
            o11: '',
            a12: '',
            o12: '',
            a13: '',
            o13: '',
            a14: '',
            o14: '',
            a15: '',
            o15: '',
            a16: '',
            o16: '',
            a17: '',
            o17: '',
            a18: '',
            o18: '',
            a19: '',
            o19: '',
            a20: '',
            o20: '',
            a21: '',
            o21: '',
            a22: '',
            o22: '',
            a23: '',
            o23: '',
            a24: '',
            o24: '',
            ah: '',
            oh: '',
            ata: '',
            ota: ''
          })
        }
      },{
        text: 'Cancel',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }
    ]
  });
  actionSheet.present();
}

// public onButtonClicked(): void {
//     let modal = this.modalCtrl.create(FormulierPage);
//     {
//       this.shizzles.push({
//         formuliernaam: "Gespreksformulier",
//         datum: "",
//         manier: "",
//         gesprek: "",
//       });
//     }
// 		modal.present();
// 	}
// public onButtonClickedBack(): void{
//   	this.viewCtrl.dismiss();
//   }
}
