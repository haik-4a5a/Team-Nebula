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
    o24: ''
  };

  constructor(public navCtrl: NavController, public navParam: NavParams,  public modalCtrl: ModalController, public viewCtrl: ViewController, public af: AngularFireDatabase) {
    this.shizzleId = navParam.get("shizzleId");
    this.bshizzles = af.list('/shizzles/' + this.shizzleId + '/bform/');  
    this.FormId = navParam.get("FormId"); 
  }

  public save(){
    this.bshizzles.update(this.FormId, {
    a1 : this.bform.a1,
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
    o24: this.bform.o24
  })
}
}
