import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {GateauxServiceProvider} from "../../providers/gateaux-service/gateaux-service";

/**
 * Generated class for the UpdatepasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-updatepassword',
  templateUrl: 'updatepassword.html',
})
export class UpdatepasswordPage {
  datalogin :FormGroup;
  validNewPassword = true;

  constructor(public navCtrl: NavController, public navParams: NavParams,private formBuilder:FormBuilder,private gCrtl:GateauxServiceProvider,private viewCrtl:ViewController ) {
    this.datalogin = this.formBuilder.group({
      login: ['', Validators.required],
      password: ['', Validators.required],
      newpassword: ['', Validators.required],
      renew: ['', Validators.required]

    });
  }
  viderrenew(){
    this.datalogin.controls['newpassword'].setValue('');
  }
  verifconformite(){
    this.validNewPassword = this.datalogin.controls['newpassword'].value != this.datalogin.controls['renew'].value ?false:true;
  }
  goback(type){
    if(type==='update')
    {
      this.gCrtl.afficheloading();
      this.gCrtl.getpost("http://services.ajit.sn/ws/common/changepassword?email="+encodeURI(this.datalogin.controls['login'].value)+"&oldmdp="+encodeURI(this.datalogin.controls['password'].value)+"&newmdp="+encodeURI(this.datalogin.controls['new'].value))
        .then(data=>{
        this.gCrtl.dismissloadin();
        let val = JSON.parse(data.data);
        console.log(val)
        if(val.code=="0")
        {
          this.gCrtl.showToast("Mot de passe modifié avec succès");
          this.viewCrtl.dismiss();
        }
        else{
          this.gCrtl.showError(val.message);
        }
      }).catch(err=>{
        this.gCrtl.dismissloadin();

      })
    }
    else{
      this.viewCrtl.dismiss();
    }

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UpdatepasswordPage');
  }

}
