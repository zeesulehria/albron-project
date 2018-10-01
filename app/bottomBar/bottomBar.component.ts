import { Component, OnInit } from '@angular/core';
import * as platformModule from "tns-core-modules/platform";
import { BottomMenuService } from '~/bottomBar/bottomMenu.service';

@Component({
  selector: 'app-bottomBar',
  templateUrl: './bottomBar.component.html',
  styleUrls: ['./bottomBar.css'],
  moduleId: module.id
})
export class BottomBarComponent implements OnInit {

  currentIndexBottomTab = 0;
  bottomMenuHeight;
  constructor(private bottommenu: BottomMenuService) { }

  ngOnInit() {
    let deviceHeight: number = platformModule.screen.mainScreen.heightDIPs;
    this.bottomMenuHeight = deviceHeight * 0.07;
    this.bottommenu.bottomMenuVisibility = true;
  }

  get bottomMenuVisible() {
    return this.bottommenu.bottomMenuVisibility;
  }

  isActiveBottomTab() {
    return this.currentIndexBottomTab;
  }

  tabBottomChanged(currentIndexBottomTab) {
    this.currentIndexBottomTab = currentIndexBottomTab;
  }
}

