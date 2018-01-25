import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { AngularFireList } from 'angularfire2/database';

/**
 * Generated class for the MembroEquipePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@Component({
  selector: 'page-membro-equipe',
  templateUrl: 'membro-equipe.html',
})

export class MembroEquipePage {

  membro: AngularFireList<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {

    let membro = this.navParams.get('membro');
    this.membro = membro;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MembroEquipePage');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
