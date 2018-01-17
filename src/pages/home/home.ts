import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TestePage} from '../teste/teste';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }


  goToTestePage() {
    this.navCtrl.push(TestePage);
  }
}


