import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { HomePageModule } from '../pages/home/home.module';
import { WheelSelector } from '@ionic-native/wheel-selector';
import { HTTP } from '@ionic-native/http';
import { GateauxServiceProvider } from '../providers/gateaux-service/gateaux-service';
import {GateauxPageModule} from "../pages/gateaux/gateaux.module";
import {ScreenOrientation} from '@ionic-native/screen-orientation';
import {MesTicketsPageModule} from "../pages/mes-tickets/mes-tickets.module";
import {TabsPageModule} from "../pages/tabs/tabs.module";
import {RestaurantPageModule} from "../pages/restaurant/restaurant.module";
import {ClientPageModule} from "../pages/client/client.module";
import { Toast } from '@ionic-native/toast';
import {SucesscommandePageModule} from "../pages/sucesscommande/sucesscommande.module";
import {LoginPageModule} from "../pages/login/login.module";
import {IonicStorageModule} from "@ionic/storage";
import {UserpopoverPageModule} from "../pages/userpopover/userpopover.module";
import {DetailsTicketPageModule} from "../pages/details-ticket/details-ticket.module";
import {GloabalVariable} from "../providers/gateaux-service/GloabalVariable";
import {UpdatepasswordPageModule} from "../pages/updatepassword/updatepassword.module";
import {SchoolPageModule} from "../pages/school/school.module";
import {MesKolleresPageModule} from "../pages/mes-kolleres/mes-kolleres.module";
import {FamillePageModule} from "../pages/famille/famille.module";
import {PanierPageModule} from "../pages/panier/panier.module";
import {HeaderColor} from "@ionic-native/header-color";
import {LocalProductPageModule} from "../pages/local-product/local-product.module";
import {CadeauxPageModule} from "../pages/cadeaux/cadeaux.module";
import {OneSignal} from "@ionic-native/onesignal";
import {LocalNotifications} from "@ionic-native/local-notifications";
import {MessagePageModule} from "../pages/message/message.module";
import {PublicitePageModule} from "../pages/publicite/publicite.module";
import {File} from "@ionic-native/file";

@NgModule({
  declarations: [
    MyApp

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp,{monthNames: ['Janvier', 'Février', 'Mars','Avril','Mai','Juin','Juillet',
                                                    'Août','Septembre','Octobre','Novembre','Décembre' ],
                                      dayNames: ['Dimanche', 'Lundi', 'Mardi','Mercredi','Jeudi','Vendredi','Samedi' ]}),
    GateauxPageModule,MesTicketsPageModule,TabsPageModule,
    HomePageModule,RestaurantPageModule,ClientPageModule,SucesscommandePageModule,LoginPageModule,
    IonicStorageModule.forRoot(),UserpopoverPageModule,DetailsTicketPageModule,UpdatepasswordPageModule,
    SchoolPageModule,MesKolleresPageModule,FamillePageModule,PanierPageModule,LocalProductPageModule,
    CadeauxPageModule,MessagePageModule,PublicitePageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
    ,WheelSelector,HTTP,ScreenOrientation,
    GateauxServiceProvider,Toast,GloabalVariable,HeaderColor,OneSignal,LocalNotifications,File
  ]
})
export class AppModule {}
