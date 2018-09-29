import { Component, OnInit } from '@angular/core';
import * as platformModule from "tns-core-modules/platform";

@Component({
  selector: 'app-bottomBar',
  templateUrl: './bottomBar.component.html',
  styleUrls: ['./bottomBar.css'],
  moduleId: module.id
})
export class BottomBarComponent implements OnInit {
  
  currentIndexBottomTab = 0;
  bottomMenu;
  constructor() { }

  ngOnInit() {
    let deviceHeight: number = platformModule.screen.mainScreen.heightDIPs;
    this.bottomMenu = deviceHeight * 0.08;

  }

  isActiveBottomTab() {
    return this.currentIndexBottomTab;
  }

  tabBottomChanged(currentIndexBottomTab) {
    this.currentIndexBottomTab = currentIndexBottomTab;
  }
}

