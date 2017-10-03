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
    shizzle: FirebaseObjectObservable<any>;
    shizzleId;

  constructor(public navCtrl: NavController, public navParam: NavParams, public modalCtrl: ModalController,
    public viewCtrl: ViewController, public actionSheetCtrl: ActionSheetController,  public af: AngularFireDatabase) {
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

  showOptions() {
  let actionSheet = this.actionSheetCtrl.create({
    title: 'Welke wil je?',
    buttons: [
      {
        text: 'Gespreksformulier',
        handler: () => {
          this.navCtrl.push(FormulierPage);
        }
      },{
        text: 'Beoordelingsformulier',
        handler: () => {
          this.navCtrl.push(BeoordelingPage);
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
