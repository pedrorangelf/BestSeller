import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, LoadingController, Loading } from 'ionic-angular';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { ToastController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EventoService } from '../../providers/evento/evento.service';
import { AuthService } from '../../providers/auth/auth.service';

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

  eventoForm: FormGroup;
  eventos: AngularFireList<any>;

  constructor(public authService: AuthService,
              public navCtrl: NavController, 
              public navParams: NavParams, 
              public alertCtrl: AlertController, 
              public angularFireDb: AngularFireDatabase,
              public loadingCtrl: LoadingController,
              public toastCtrl: ToastController,
              public formBuilder: FormBuilder,
              public eventoService: EventoService) {


    this.eventoForm = this.formBuilder.group({
      nome: ['', [Validators.required, Validators.minLength(3)]],
      lote: ['', Validators.required],
      data: ['', Validators.required],
      dataacerto: ['', Validators.required],
      dataviralote: ['', Validators.required],
      meta: ['', Validators.required],
    });
  }

  presentToast() {
    let toast = this.toastCtrl.create({
      message: 'Evento criado com sucesso.',
      duration: 4000,
      position: 'top'
    });
    this.navCtrl.pop();
    toast.present();
  }

  criarEvento(){
    let loading: Loading = this.showLoading();
    let formEvento = this.eventoForm.value;

    formEvento.id = this.angularFireDb.createPushId();
    formEvento.adm = this.authService.auth.auth.currentUser.uid;
    formEvento.imagem = "https://orlandofamilyphysicians.com/wp-content/uploads/2016/12/placeholder-600x400.png";

    this.eventoService.create(formEvento).then(()=> loading.dismiss()
                                                           .then(() => { this.presentToast(); },
                                                                  error => { console.log(error); }
                                                                )
                                        ).catch((error: Error) => {console.log(error);
                                                                   loading.dismiss();
                                                                   this.showAlert(error.message);
                                                                  });
  }

  private showLoading(): Loading{
    let loading: Loading = this.loadingCtrl.create({
      content: 'Criando...'
    });
 
    loading.present();
 
    return loading;
 }

 private showAlert(message: string){
  this.alertCtrl.create({
    message: message,
    buttons: ['OK']
  }).present();
}

}
