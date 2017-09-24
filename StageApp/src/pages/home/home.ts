import { Component } from '@angular/core';
import { NavController, AlertController, ActionSheetController, ModalController } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { UserInfo } from '../userInfo/userInfo';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  shizzles: FirebaseListObservable<any>;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController,
    af: AngularFireDatabase, public actionSheetCtrl: ActionSheetController, public modalCtrl: ModalController) {
      this.shizzles = af.list('/shizzles');
     
}
  read(shizzleId, shizzleTitle, shizzleArtist, shizzleImgUrl, shizzleWebUrl, shizzleYear){
    let prompt = this.navCtrl.push(UserInfo, {
      shizzleId: shizzleId,
      shizzleTitle: shizzleTitle,
      shizzleArtist: shizzleArtist,
      shizzleImgUrl: shizzleImgUrl,
      shizzleWebUrl: shizzleWebUrl,
      shizzleYear: shizzleYear
    });
  }

}
