import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { HomePage } from '../home/home';
/**
 * Generated class for the ConfigEventoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-config-evento',
  templateUrl: 'config-evento.html',
})
export class ConfigEventoPage {

  evento: AngularFireList<any>;
  key: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController,  public angularFireDb: AngularFireDatabase) {

    let evento = this.navParams.get('evento');
    this.evento = evento;
    this.key = evento.id;

    console.log(this.key);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConfigEventoPage');
  }

removeEvento(){
  let alert = this.alertCtrl.create({ 
    message: "Deseja APAGAR o Evento ?", 
    buttons: [ { text: 'Apagar',
                 cssClass: 'danger',
    handler: data => { this.angularFireDb.object('/eventos/' + this.key)
                                         .remove()
                                         .then(evento => {this.navCtrl.push(HomePage);}) 
                      }
                } ,
                { text: 'Cancelar', }              
            ] 
  }); 
  
  alert.present(); 
}

}
