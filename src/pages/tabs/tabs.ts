import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AllWorksheetsPage } from '../all-worksheets/all-worksheets';
import { CompletedWorksheetsPage } from '../completed-worksheets/completed-worksheets';
import { HomePage } from '../home/home';

/**
 * Generated class for the TabsPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {

  allWorksheetsRoot = AllWorksheetsPage
  completedWorksheetsRoot = CompletedWorksheetsPage
  homeRoot = HomePage


  constructor(public navCtrl: NavController) {}

}
