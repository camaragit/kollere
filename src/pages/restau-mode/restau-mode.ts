import { Component } from '@angular/core';
import {IonicPage, ModalController, NavController, NavParams, Platform, PopoverController} from 'ionic-angular';
import {LoginPage} from "../login/login";
import {UserpopoverPage} from "../userpopover/userpopover";
import {File} from "@ionic-native/file";
import {SplashScreen} from "@ionic-native/splash-screen";
import {GateauxServiceProvider} from "../../providers/gateaux-service/gateaux-service";
import {OneSignal} from "@ionic-native/onesignal";
import {Storage} from "@ionic/storage";
import {RestaurantPage} from "../restaurant/restaurant";
import {MonRestoPage} from "../mon-resto/mon-resto";

/**
 * Generated class for the RestauModePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-restau-mode',
  templateUrl: 'restau-mode.html',
})
export class RestauModePage {
  header_data:any;
  user:any;
  constructor(public navCtrl: NavController,private  file :File,private oneSignal:OneSignal,private gCrtl:GateauxServiceProvider,private splashScreen:SplashScreen,private platform :Platform,private popoverCtrl: PopoverController,private storage:Storage,public navParams: NavParams,private modalCrtl:ModalController) {
    this.loaduser();
  }
  pending(){
    // this.gCrtl.showToast("En cours de developpement")
    let mod= this.modalCrtl.create(LoginPage,{},{cssClass: "test"});
    mod.present();
    mod.onDidDismiss(d=>{
      this.loaduser();
    })
  }
  verspage(type){
    if(type=="tsrestos")
    {
      this.navCtrl.push(RestaurantPage)
    }
    else this.navCtrl.push(MonRestoPage)
  }
  useroptions(myEvent){
    console.log("Home mon evenement ==>"+myEvent)
    let popover = this.popoverCtrl.create(UserpopoverPage);
    popover.present({
      ev: myEvent
    });
    popover.onDidDismiss(data=>{
      this.loaduser();
    })
  }

  loaduser(){
    this.storage.get("user").then(val=>{
      this.header_data.user = val;
      this.user = val;
      if(val!=null)
        this.oneSignal.sendTags({nom:val.nom,prenom:val.prenom,phone:val.telephone})

    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RestauModePage');
  }

}
