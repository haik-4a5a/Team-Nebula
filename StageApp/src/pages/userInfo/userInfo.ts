import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { FormulierPage } from '../formulier/formulier';
import { FormulierkeuzePage } from '../formulierkeuze/formulierkeuze';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'page-userinfo',
  templateUrl: 'userInfo.html'
})
export class UserInfo {

  shizzles: FirebaseListObservable<any>;
  shizzleId;
  shizzleTitle;
  shizzleArtist;
  shizzleImgUrl;
  shizzleWebUrl;
  shizzleYear;

  constructor(public navCtrl: NavController, af: AngularFireDatabase, public navParam: NavParams, public modalCtrl: ModalController) {
    this.shizzles = af.list('/shizzles');
    this.shizzleId = navParam.get("shizzleId");
    this.shizzleTitle = navParam.get("shizzleTitle");
    this.shizzleArtist = navParam.get("shizzleArtist");
    this.shizzleImgUrl = navParam.get("shizzleImgUrl");
    this.shizzleWebUrl = navParam.get("shizzleWebUrl");
    this.shizzleYear = navParam.get("shizzleYear");
  }

  goBackToHome(){
    this.navCtrl.pop();
  }
  public onButtonClicked(): void {
		this.navCtrl.push(FormulierkeuzePage);
	}
}