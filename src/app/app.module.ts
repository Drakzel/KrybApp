import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import {IonicStorageModule} from "@ionic/storage";

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {CreateWorksheetPage} from "../pages/create-worksheet/create-worksheet";
import {TabsPage} from "../pages/tabs/tabs";
import {AllWorksheetsPage} from "../pages/all-worksheets/all-worksheets";
import {CompletedWorksheetsPage} from "../pages/completed-worksheets/completed-worksheets";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CreateWorksheetPage,
    AllWorksheetsPage,
    CompletedWorksheetsPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CreateWorksheetPage,
    AllWorksheetsPage,
    CompletedWorksheetsPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
  ]
})
export class AppModule {}
