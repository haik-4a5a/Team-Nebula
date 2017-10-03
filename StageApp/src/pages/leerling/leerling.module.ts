import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LeerlingPage } from './leerling';

@NgModule({
  declarations: [
    LeerlingPage,
  ],
  imports: [
    IonicPageModule.forChild(LeerlingPage),
  ],
})
export class LeerlingPageModule {}
