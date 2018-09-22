import { Component } from '@angular/core';
import {IonicPage, ModalController, NavController, NavParams, ViewController} from 'ionic-angular';
import {Storage} from "@ionic/storage";
import {LoginPage} from "../login/login";
import {UpdatepasswordPage} from "../updatepassword/updatepassword";
import {GateauxServiceProvider} from "../../providers/gateaux-service/gateaux-service";
import {MesKolleresPage} from "../mes-kolleres/mes-kolleres";

/**
 * Generated class for the UserpopoverPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-userpopover',
  templateUrl: 'userpopover.html',
})
export class UserpopoverPage {

  constructor(public navCtrl: NavController,private gCrtl:GateauxServiceProvider,public navParams: NavParams,private storage:Storage,private viewCrlt:ViewController,private modalCrtl:ModalController) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserpopoverPage');
  }

logout(){
    this.storage.remove("user");
    this.viewCrlt.dismiss();
}
  resetpassword(){
    let mod= this.modalCrtl.create(UpdatepasswordPage);
    mod.present();
    mod.onDidDismiss(d=>{

    })
    this.viewCrlt.dismiss();
  }



}
