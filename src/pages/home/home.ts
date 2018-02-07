import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';

import { InfoEventoPage } from '../info-evento/info-evento';
import { AddEventoPage } from '../add-evento/add-evento';
import { AuthService } from '../../providers/auth/auth.service';
import { EventoService } from '../../providers/evento/evento.service';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  eventos: Observable<any[]>;
  
  constructor(public navCtrl: NavController,
              public http: Http,
              public angularFireDb: AngularFireDatabase,
              public authService: AuthService,
              public eventoService: EventoService) {
                
    this.eventos = this.eventoService.listar().valueChanges();

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


