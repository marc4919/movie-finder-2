import { Component } from '@angular/core';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  screenWidth: number;
  mobile = true;

  constructor() {
    this.getScreenSize();
  }

  @HostListener('window:resize', ['$event'])
    getScreenSize(event?) {
          this.screenWidth = window.innerWidth;
          if(this.screenWidth < 576){
            this.mobile = true;
          }
          else{
            this.mobile= false;
          };
    }

}
