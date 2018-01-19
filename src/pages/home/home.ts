import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

import { TestePage} from '../teste/teste';

import 'rxjs/add/operator/map';
import { InfoEventoPage } from '../info-evento/info-evento';
import { AddEventoPage } from '../add-evento/add-evento';
// import { InfoEventoPage } from '../info-evento/info-evento';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  eventos: Observable<any[]>;
  
  constructor(public navCtrl: NavController,
              public http: Http,
              public angularFireDb: AngularFireDatabase) {

    this.eventos = angularFireDb.list('/eventos').valueChanges();

  }

  goToTestePage() {
    this.navCtrl.push(TestePage);
  }

  goToAddEvento() {
    this.navCtrl.push(AddEventoPage);
  }

  getEventoInfo(evento) {   
    this.navCtrl.push(InfoEventoPage, 
      {
        'evento': evento,
      });
  }
  
}


