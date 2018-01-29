import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { AngularFireModule } from 'angularfire2';
import {AngularFireAuthModule} from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { environment} from '../environments/environment';
import { AddEventoPage } from '../pages/add-evento/add-evento';
import { ConfigEventoPage } from '../pages/config-evento/config-evento';
import { MembroEquipePage } from '../pages/membro-equipe/membro-equipe';
import { SignupPage } from '../pages/signup/signup';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { TestePage } from '../pages/teste/teste';
import { InfoEventoPage } from '../pages/info-evento/info-evento';
import { SigninPage } from '../pages/signin/signin';

import { UserService } from '../providers/user/user.service';
import { AuthService } from '../providers/auth/auth.service';
import { EventoService } from '../providers/evento/evento.service';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    TestePage,
    InfoEventoPage,
    AddEventoPage,
    ConfigEventoPage,
    MembroEquipePage,
    SignupPage,
    SigninPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    TestePage,
    InfoEventoPage,
    AddEventoPage,
    ConfigEventoPage,
    MembroEquipePage,
    SignupPage,
    SigninPage
  ],
  providers: [
    AuthService,
    StatusBar,
    SplashScreen,
    UserService,
    EventoService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
    
  ]
})
export class AppModule {}
