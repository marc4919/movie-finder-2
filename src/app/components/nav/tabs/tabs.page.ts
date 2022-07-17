import { Component } from '@angular/core';
import { HostListener } from '@angular/core';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  screenHeight: number;
  screenWidth: number;
  mobile = true;

  constructor(public platform: Platform) {
    this.getScreenSize();
  }

  @HostListener('window:resize', ['$event'])
    getScreenSize(event?) {
          this.screenHeight = window.innerHeight;
          this.screenWidth = window.innerWidth;
          if(this.screenWidth < 576){
            this.mobile = true;
          }
          else{
            this.mobile= false;
          };
    }

}
