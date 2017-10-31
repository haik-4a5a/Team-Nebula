import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ViewController, ActionSheetController } from 'ionic-angular';
import { FormulierPage } from '../formulier/formulier';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { UserInfo } from '../userInfo/userInfo';
import { BeoordelingPage } from '../beoordeling/beoordeling';

@Component({
  selector: 'page-beoordeling2',
  templateUrl: 'beoordeling2.html'
})
export class BeoordelingPageTwo {
  selectedItem: any;
  shizzleId;
  bshizzles: FirebaseListObservable<any>;
  FormId;
  BFormA16; BFormO16; BFormA17; BFormO17; BFormA18; BFormO18; BFormA19; BFormO19; BFormA20; BFormO20; BFormA21; BFormO21; BFormA22; BFormO22; BFormA23; BFormO23; BFormA24; BFormO24; BFormAH; BFormOH;  
  bform = {
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
    oh: ''
  };

  constructor(public navCtrl: NavController, public navParam: NavParams,  public modalCtrl: ModalController, public viewCtrl: ViewController, public af: AngularFireDatabase) {
    this.shizzleId = navParam.get("shizzleId");
    this.bshizzles = af.list('/shizzles/' + this.shizzleId + '/bform/');  
    this.FormId = navParam.get("FormId"); 
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
    this.BFormOH = navParam.get("BFormOHO");
    this.bform = {
      a16: this.BFormA16,
      o16: this.BFormO16,
      a17: this.BFormA17,
      o17: this.BFormO17,
      a18: this.BFormA18,
      o18: this.BFormO18,
      a19: this.BFormA19,
      o19: this.BFormO19,
      a20: this.BFormA20,
      o20: this.BFormO20,
      a21: this.BFormA21,
      o21: this.BFormO21,
      a22: this.BFormA22,
      o22: this.BFormO22,
      a23: this.BFormA23,
      o23: this.BFormO23,
      a24: this.BFormA24,
      o24: this.BFormO24,
      ah: this.BFormAH,
      oh: this.BFormOH
    };
  }

  public save(){
    this.bshizzles.update(this.FormId, {
    a16: this.bform.a16,
    o16: this.bform.o16,
    a17: this.bform.a17,
    o17: this.bform.o17,
    a18: this.bform.a18,
    o18: this.bform.o18,
    a19: this.bform.a19,
    o19: this.bform.o19,
    a20: this.bform.a20,
    o20: this.bform.o20,
    a21: this.bform.a21,
    o21: this.bform.o21,
    a22: this.bform.a22,
    o22: this.bform.o22,
    a23: this.bform.a23,
    o23: this.bform.o23,
    a24: this.bform.a24,
    o24: this.bform.o24,
    ah: this.bform.ah,
    oh: this.bform.oh
  })
}
}
