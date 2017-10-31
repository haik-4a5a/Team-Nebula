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
  readb(FormId, BFormA1, BFormO1, BFormA2, BFormO2, BFormA3, BFormO3, BFormA4, BFormO4, BFormA5, BFormO5, BFormA6, BFormO6, BFormA7, BFormO7, 
        BFormA8, BFormO8, BFormA9, BFormO9, BFormA10, BFormO10, BFormA11, BFormO11, BFormA12, BFormO12, BFormA13, BFormO13, BFormA14, BFormO14, 
        BFormA15, BFormO15, BFormA16, BFormO16, BFormA17, BFormO17, BFormA18, BFormO18, BFormA19, BFormO19, BFormA20, BFormO20, BFormA21, 
        BFormO21, BFormA22, BFormO22, BFormA23, BFormO23, BFormA24, BFormO24, BFormATA, BFormOTA, BFormAH, BFormOH){
    let prompt = this.navCtrl.push(BeoordelingPage, {
      shizzleId: this.shizzleId,
      FormId: FormId,
      BFormA1: BFormA1, 
      BFormO1: BFormO1, 
      BFormA2: BFormA2, 
      BFormO2: BFormO2, 
      BFormA3: BFormA3, 
      BFormO3: BFormO3, 
      BFormA4: BFormA4, 
      BFormO4: BFormO4,
      BFormA5: BFormA5,
      BFormO5: BFormO5,
      BFormA6: BFormA6,
      BFormO6: BFormO6,
      BFormA7: BFormA7,
      BFormO7: BFormO7, 
      BFormA8: BFormA8,
      BFormO8: BFormO8,
      BFormA9: BFormA9,
      BFormO9: BFormO9,
      BFormA10: BFormA10,
      BFormO10: BFormO10,
      BFormA11: BFormA11,
      BFormO11: BFormO11,
      BFormA15: BFormA15,
      BFormO15: BFormO15,
      BFormA16: BFormA16,
      BFormO16: BFormO16,
      BFormA17: BFormA17,
      BFormO17: BFormO17,
      BFormA18: BFormA18,
      BFormO18: BFormO18,
      BFormA19: BFormA19,
      BFormO19: BFormO19,
      BFormA20: BFormA20,
      BFormO20: BFormO20,
      BFormA21: BFormA21, 
      BFormO21: BFormO21,
      BFormA22: BFormA22,
      BFormO22: BFormO22,
      BFormA23: BFormA23,
      BFormO23: BFormO23,
      BFormA24: BFormA24,
      BFormO24: BFormO24,
      BFormATA: BFormATA,
      BFormOTA: BFormOTA,
      BFormAH: BFormAH,
      BFormOH: BFormOH
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
            a1: 'niets',
            o1: 'niets',
            a2: 'niets',
            o2: 'niets',
            a3: 'niets',
            o3: 'niets',
            a4: 'niets',
            o4: 'niets',
            a5: 'niets',
            o5: 'niets',
            a6: 'niets',
            o6: 'niets',
            a7: 'niets',
            o7: 'niets',
            a8: 'niets',
            o8: 'niets',
            a9: 'niets',
            o9: 'niets',
            a10: 'niets',
            o10: 'niets',
            a11: 'niets',
            o11: 'niets',
            a12: 'niets',
            o12: 'niets',
            a13: 'niets',
            o13: 'niets',
            a14: 'niets',
            o14: 'niets',
            a15: 'niets',
            o15: 'niets',
            a16: 'niets',
            o16: 'niets',
            a17: 'niets',
            o17: 'niets',
            a18: 'niets',
            o18: 'niets',
            a19: 'niets',
            o19: 'niets',
            a20: 'niets',
            o20: 'niets',
            a21: 'niets',
            o21: 'niets',
            a22: 'niets',
            o22: 'niets',
            a23: 'niets',
            o23: 'niets',
            a24: 'niets',
            o24: 'niets',
            ah: 'niets',
            oh: 'niets',
            ata: 'niets',
            ota: 'niets'
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
