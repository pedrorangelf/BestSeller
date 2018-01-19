import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'page-info-evento',
  templateUrl: 'info-evento.html',
})
export class InfoEventoPage {

  evento: any = {};
  
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public angularFireDb: AngularFireDatabase) {

    let evento = this.navParams.get('evento');
    this.evento = evento;

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InfoEventoPage');
  }

}
