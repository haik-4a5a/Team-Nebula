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
