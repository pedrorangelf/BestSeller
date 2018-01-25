import { Component } from '@angular/core';
import { NavController, NavParams, ModalController  } from 'ionic-angular';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { ConfigEventoPage } from '../config-evento/config-evento';
import { MembroEquipePage } from '../membro-equipe/membro-equipe';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'page-info-evento',
  templateUrl: 'info-evento.html',
})
export class InfoEventoPage {

  evento: AngularFireList<any>;
  membros: Observable<any[]>; 

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public angularFireDb: AngularFireDatabase,
              public modalCtrl: ModalController) {

    let evento = this.navParams.get('evento');
    this.evento = evento;  

   //this.membros = angularFireDb.list('/usuarios', ref => ref.orderByChild(evento.id).equalTo(true)).valueChanges();

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InfoEventoPage');
  }

  goToConfig(evento){
    this.navCtrl.push(ConfigEventoPage, 
      {
        'evento': evento,
      });
  }

  presentModal(membro) {
    let modal = this.modalCtrl.create(MembroEquipePage, 
      {
        'membro': membro,
      });
    modal.present();
  }
}
