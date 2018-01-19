import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { Http } from '@angular/http';
/**
 * Generated class for the TestePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-teste',
  templateUrl: 'teste.html',
})
export class TestePage {

  public beer: any = {};

  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              public alertCtrl: AlertController,
              public http: Http) {

        let url = this.navParams.get('api_url');
        let beer_id = this.navParams.get('beer_id');

        this.http.get(url + '/beers/' + beer_id)
        .map(res => res.json())
        .subscribe(data => {
          this.beer = data;
        });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TestePage');
  }

 

}
