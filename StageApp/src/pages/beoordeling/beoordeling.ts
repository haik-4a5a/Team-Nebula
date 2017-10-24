import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ViewController, ActionSheetController } from 'ionic-angular';
import { FormulierPage } from '../formulier/formulier';
import { FormulierkeuzePage } from '../formulierkeuze/formulierkeuze';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { UserInfo } from '../userInfo/userInfo';
import { BeoordelingPageTwo } from '../beoordeling2/beoordeling2';
import { AfoListObservable, AngularFireOfflineDatabase } from 'angularfire2-offline/database';


@Component({
  selector: 'page-beoordeling',
  templateUrl: 'beoordeling.html'
})
export class BeoordelingPage {
  selectedItem: any;
  shizzleId;
  bshizzles: FirebaseListObservable<any>;
  cshizzles: AfoListObservable<any[]>;
  FormId;
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
    ata: '',
    ota: ''
  };

  constructor(public navCtrl: NavController, public navParam: NavParams,  public modalCtrl: ModalController, public viewCtrl: ViewController, public af: AngularFireDatabase,
    public afoDatabase: AngularFireOfflineDatabase) {
    this.shizzleId = navParam.get("shizzleId");
    this.bshizzles = af.list('/shizzles/' + this.shizzleId + '/bform/');
    this.FormId = navParam.get("FormId");
    this.bform.a1 = navParam.get("a1");
    this.bform.o1 = navParam.get("o1");
    this.bform.a2 = navParam.get("a2");
    this.bform.o2 = navParam.get("o2");
    this.bform.a3 = navParam.get("a3");
    this.bform.o3 = navParam.get("o3");
    this.bform.a4 = navParam.get("a4");
    this.bform.o4 = navParam.get("o4");
    this.bform.a5 = navParam.get("a5");
    this.bform.o5 = navParam.get("o5");
    this.bform.a6 = navParam.get("a6");
    this.bform.o6 = navParam.get("o6");
    this.bform.a7 = navParam.get("a7");
    this.bform.o7 = navParam.get("o7");
    this.bform.a8 = navParam.get("a8");
    this.bform.o8 = navParam.get("o8");
    this.bform.a9 = navParam.get("a9");
    this.bform.o9 = navParam.get("o9");
    this.bform.a10 = navParam.get("a10");
    this.bform.o10 = navParam.get("o10");
    this.bform.a11 = navParam.get("a11");
    this.bform.o11 = navParam.get("o11");
    this.bform.a12 = navParam.get("a12");
    this.bform.o12 = navParam.get("o12");
    this.bform.a13 = navParam.get("a13");
    this.bform.o13 = navParam.get("o13");
    this.bform.a14 = navParam.get("a14");
    this.bform.o14 = navParam.get("o14");
    this.bform.a15 = navParam.get("a15");
    this.bform.o15 = navParam.get("o15");
    this.bform.ata = navParam.get("ata");
    this.bform.ota = navParam.get("ota");
    console.log(navParam.get("o1"));
  }

  public save(): void {
		this.bshizzles.update(this.FormId, {
      a1: this.bform.a1,
      o1: this.bform.o1,
      a2: this.bform.a2,
      o2: this.bform.o2,
      a3: this.bform.a3,
      o3: this.bform.o3,
      a4: this.bform.a4,
      o4: this.bform.o4,
      a5: this.bform.a5,
      o5: this.bform.o5,
      a6: this.bform.a6,
      o6: this.bform.o6,
      a7: this.bform.a7,
      o7: this.bform.o7,
      a8: this.bform.a8,
      o8: this.bform.o8,
      a9: this.bform.a9,
      o9: this.bform.o9,
      a10: this.bform.a10,
      o10: this.bform.o10,
      a11: this.bform.a11,
      o11: this.bform.o11,
      a12: this.bform.a12,
      o12: this.bform.o12,
      a13: this.bform.a13,
      o13: this.bform.o13,
      a14: this.bform.a14,
      o14: this.bform.o14,
      a15: this.bform.a15,
      o15: this.bform.o15,
      ata: this.bform.ata,
      ota: this.bform.ota,
    });
    console.log(this.bform.a1)
    let prompt = this.navCtrl.push(BeoordelingPageTwo, {
      shizzleId: this.shizzleId,
      FormId: this.FormId
    });
	}
}
