import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

//importing pages
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { FormulierPage } from '../pages/formulier/formulier'
import { LeerlingPage } from '../pages/leerling/leerling'
import { FormulierkeuzePage } from '../pages/formulierkeuze/formulierkeuze'


//import AF2 module
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

export const firebaseConfig = {
    apiKey: "AIzaSyA8FZ3Tq9Tyu6OCa7NHfWQBt0FWPbZNmN4",
    authDomain: "stageapp-29a98.firebaseapp.com",
    databaseURL: "https://stageapp-29a98.firebaseio.com",
    // projectId: "stageapp-29a98",
    storageBucket: "stageapp-29a98.appspot.com",
    messagingSenderId: "645756260312"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    FormulierPage,
    LeerlingPage,
    FormulierkeuzePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    FormulierPage,
    LeerlingPage,
    FormulierkeuzePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
