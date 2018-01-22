import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { ToastController } from 'ionic-angular';

/**
 * Generated class for the AddEventoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@Component({
  selector: 'page-add-evento',
  templateUrl: 'add-evento.html',
})
export class AddEventoPage {

  eventos: AngularFireList<any>;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              public alertCtrl: AlertController, 
              public angularFireDb: AngularFireDatabase,
              public toastCtrl: ToastController) {

    this.eventos = angularFireDb.list('/eventos');



  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddEventoPage');   
  }

  presentToast() {
    let toast = this.toastCtrl.create({
      message: 'Evento criado com sucesso.',
      duration: 3000,
      position: 'top'
    });
    this.navCtrl.pop();
    toast.present();
  }

  createEvento(nome, lote, data, dataacerto, datavirada, meta) { 
    const newEventoRef = this.eventos.push({}); 
    newEventoRef.set({ 
      nome: nome,
      lote: lote,
      data: data,
      dataacerto: dataacerto,
      imagem: "https://orlandofamilyphysicians.com/wp-content/uploads/2016/12/placeholder-600x400.png",
      viradalote: datavirada,
      totalvendidos: 0,
      meta: meta, 
      adm: 1,
      id: newEventoRef.key })
              .then( newEvento => { this.presentToast(); }, 
                     error => { console.log(error); }); 
  }


}
