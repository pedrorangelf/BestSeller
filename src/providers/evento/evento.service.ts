import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Evento } from '../../models/evento.model';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class EventoService {

  constructor(public af: AngularFireDatabase,
              public authService: AuthService) {
   
  }

  create(evento: Evento){
    return this.af.object('/eventos/' + evento.id)
                  .set(evento);
  }

  listar(){
    return this.af.list('/eventos', ref => ref.orderByChild('adm').equalTo(this.authService.auth.auth.currentUser.uid))
  }
}
