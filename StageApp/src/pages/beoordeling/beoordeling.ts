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
  BFormA1; BFormO1; BFormA2; BFormO2; BFormA3; BFormO3; BFormA4; BFormO4; BFormA5; BFormO5; BFormA6; BFormO6; BFormA7; BFormO7; 
  BFormA8; BFormO8; BFormA9; BFormO9; BFormA10; BFormO10; BFormA11; BFormO11; BFormA12; BFormO12; BFormA13; BFormO13; BFormA14; BFormO14; 
  BFormA15; BFormO15; BFormATA; BFormOTA;
  BFormA16; BFormO16; BFormA17; BFormO17; BFormA18; BFormO18; BFormA19; BFormO19; BFormA20; BFormO20; BFormA21; BFormO21; BFormA22; BFormO22; BFormA23; BFormO23; 
  BFormA24; BFormO24; BFormAH; BFormOH;
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
    this.BFormA1 = navParam.get("BFormA1"); 
    this.BFormO1 = navParam.get("BFormO1"); 
    this.BFormA2 = navParam.get("BFormA2"); 
    this.BFormO2 = navParam.get("BFormO2"); 
    this.BFormA3 = navParam.get("BFormA3"); 
    this.BFormO3 = navParam.get("BFormO3"); 
    this.BFormA4 = navParam.get("BFormA4"); 
    this.BFormO4 = navParam.get("BFormO4");
    this.BFormA5 = navParam.get("BFormA5");
    this.BFormO5 = navParam.get("BFormO5");
    this.BFormA6 = navParam.get("BFormA6");
    this.BFormO6 = navParam.get("BFormO6");
    this.BFormA7 = navParam.get("BFormA7");
    this.BFormO7 = navParam.get("BFormO7"); 
    this.BFormA8 = navParam.get("BFormA8");
    this.BFormO8 = navParam.get("BFormO8");
    this.BFormA9 = navParam.get("BFormA9");
    this.BFormO9 = navParam.get("BFormO9");
    this.BFormA10 = navParam.get("BFormA10");
    this.BFormO10 = navParam.get("BFormO10");
    this.BFormA11 = navParam.get("BFormA11");
    this.BFormO11 = navParam.get("BFormO11");
    this.BFormA12 = navParam.get("BFormA12");
    this.BFormO12 = navParam.get("BFormO12");
    this.BFormA13 = navParam.get("BFormA13");
    this.BFormO13 = navParam.get("BFormO13");
    this.BFormA14 = navParam.get("BFormA14");
    this.BFormO14 = navParam.get("BFormO14");
    this.BFormA15 = navParam.get("BFormA15");
    this.BFormO15 = navParam.get("BFormO15");
    this.BFormATA = navParam.get("BFormATA");
    this.BFormOTA = navParam.get("BFormOTA");
    this.BFormA16 = navParam.get("BFormA16");
    this.BFormO16 = navParam.get("BFormO16");
    this.BFormA17 = navParam.get("BFormA17"); 
    this.BFormO17 = navParam.get("BFormO17"); 
    this.BFormA18 = navParam.get("BFormA18"); 
    this.BFormO18 = navParam.get("BFormO18"); 
    this.BFormA19 = navParam.get("BFormA19"); 
    this.BFormO19 = navParam.get("BFormO19"); 
    this.BFormA20 = navParam.get("BFormA20"); 
    this.BFormO20 = navParam.get("BFormO20"); 
    this.BFormA21 = navParam.get("BFormA21"); 
    this.BFormO21 = navParam.get("BFormO21"); 
    this.BFormA22 = navParam.get("BFormA22"); 
    this.BFormO22 = navParam.get("BFormO22"); 
    this.BFormA23 = navParam.get("BFormA23"); 
    this.BFormO23 = navParam.get("BFormO23"); 
    this.BFormA24 = navParam.get("BFormA24"); 
    this.BFormO24 = navParam.get("BFormO24"); 
    this.BFormAH = navParam.get("BFormAH"); 
    this.BFormOH = navParam.get("BFormOH");
    this.bform = {
    a1: this.BFormA1,
    o1: this.BFormO1,
    a2: this.BFormA2,
    o2: this.BFormO2,
    a3: this.BFormA3,
    o3: this.BFormO3,
    a4: this.BFormA4,
    o4: this.BFormO4,
    a5: this.BFormA5,
    o5: this.BFormO5,
    a6: this.BFormA6,
    o6: this.BFormO6,
    a7: this.BFormA7,
    o7: this.BFormO7,
    a8: this.BFormA8,
    o8: this.BFormO8,
    a9: this.BFormA9,
    o9: this.BFormO9,
    a10: this.BFormA10,
    o10: this.BFormO10,
    a11: this.BFormA11,
    o11: this.BFormO11,
    a12: this.BFormA12,
    o12: this.BFormO12,
    a13: this.BFormA13,
    o13: this.BFormO13,
    a14: this.BFormA14,
    o14: this.BFormO14,
    a15: this.BFormA15,
    o15: this.BFormO15,
    ata: this.BFormATA,
    ota: this.BFormOTA,
    };
  }

  public save() {
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
    let prompt = this.navCtrl.push(BeoordelingPageTwo, {
      shizzleId: this.shizzleId,
      FormId: this.FormId,
      BFormA16: this.BFormA16,
      BFormO16: this.BFormO16,
      BFormA17: this.BFormA17,
      BFormO17: this.BFormO17,
      BFormA18: this.BFormA18,
      BFormO18: this.BFormO18,
      BFormA19: this.BFormA19,
      BFormO19: this.BFormO19,
      BFormA20: this.BFormA20,
      BFormO20: this.BFormO20,
      BFormA21: this.BFormA21, 
      BFormO21: this.BFormO21,
      BFormA22: this.BFormA22,
      BFormO22: this.BFormO22,
      BFormA23: this.BFormA23,
      BFormO23: this.BFormO23,
      BFormA24: this.BFormA24,
      BFormO24: this.BFormO24,
      BFormAH: this.BFormAH,
      BFormOH: this.BFormOH
    });
	}
}