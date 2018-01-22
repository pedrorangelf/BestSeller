import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { ConfigEventoPage } from '../config-evento/config-evento'

@Component({
  selector: 'page-info-evento',
  templateUrl: 'info-evento.html',
})
export class InfoEventoPage {

  evento: AngularFireList<any>;;
  
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public angularFireDb: AngularFireDatabase) {

    let evento = this.navParams.get('evento');
    this.evento = evento;

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
}
