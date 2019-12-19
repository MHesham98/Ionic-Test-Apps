import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import {ViewChildren, QueryList} from '@angular/core'



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})



export class HomePage {

  constructor(public alertController: AlertController) {}

  show: boolean = false;

  list()
  {
    this.show = true;
  }

  arrayofnumbers(n: number): any[]
  {
    return Array(n);
  }

  async showAlert() {
    const alert = await this.alertController.create({
      header: 'Alert',
      message: 'User Interface Finished Rendering',
      buttons: ['OK']
    });

    await alert.present();
  }

  @ViewChildren('NgForCallBack') things: QueryList<any>;

  ngAfterViewInit() {
    this.things.changes.subscribe(t => {
      this.ngForRendred();
    })
  }

  ngForRendred() {
    this.showAlert();
  }


  
}
