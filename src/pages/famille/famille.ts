import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {GateauxServiceProvider} from "../../providers/gateaux-service/gateaux-service";
import {ClientPage} from "../client/client";

/**
 * Generated class for the FamillePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-famille',
  templateUrl: 'famille.html',
})
export class FamillePage {

  items:any;
  svg:any;
  user:any;
  famille:any;
  isOn:any;
  restos:any;
  schoolitems:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,private gCrtl:GateauxServiceProvider) {
    this.schoolitems = this.navParams.get("items");
    if(this.schoolitems==null){
      this.famille = this.navParams.get("famille");
      this.gCrtl.afficheloading();
      this.gCrtl.getpost("http://services.ajit.sn/ws/resto/listitemsfamille?famille="+encodeURI(this.famille)).then(rep=>{
        this.gCrtl.dismissloadin();
        rep.data = JSON.parse(rep.data);
        this.items =rep.data;
        this.svg=this.items;

      }).catch(err=>{
        this.gCrtl.dismissloadin();
        this.gCrtl.showToast("Probleme de connexion");
      })
    }
    else{
      this.famille = this.schoolitems.famille;
      this.items =this.schoolitems;
    }


  }
  toggleRecherche() {
    this.isOn = !this.isOn;
  }
  verscommande(item){
    if(this.schoolitems)
    {
      item.famille = this.schoolitems.famille;
      item.ecole = this.schoolitems.ecole;
      this.navCtrl.push(ClientPage,{itemschool:item});
    }
    else {
      this.gCrtl.afficheloading();
      this.gCrtl.getpost("http://services.ajit.sn/ws/resto/tarifsrestoitem?item="+encodeURI(item)+"&commerce=commerce")
        .then(data=>{
          this.gCrtl.dismissloadin();
          this.restos = {};
          let tab =[];
          data.data = JSON.parse(data.data);
          for(let i=0;i<data.data.length;i++)
          {
            if(data.data[i].item!=""){
              tab.push(data.data[i])
            }
          }
          this.restos.item = item;
          this.restos.restos = tab;
          this.restos.famille = this.famille;
          this.navCtrl.push(ClientPage,{restos:this.restos});
        }).catch(err=>{
        this.gCrtl.dismissloadin();
        this.gCrtl.showToast("Probleme de connexion");
      })
    }



  }
  filterproduit(ev: any) {
    this.items =this.svg;
    let serVal = ev.target.value;
    if (serVal && serVal.trim() != '') {
      this.items = this.items.filter((montab) => {
        return (montab.toLowerCase().indexOf(serVal.toLowerCase()) >= 0 );
      })
    }
  }
  changementproduit(){

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FamillePage');
  }

}
