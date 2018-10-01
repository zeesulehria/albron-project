import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { DataService } from '~/services/data.service';
import { RouterExtensions } from 'nativescript-angular/router';
import * as platformModule from "tns-core-modules/platform";
import { Vibrate } from 'nativescript-vibrate';
import { BottomMenuService } from '~/bottomBar/bottomMenu.service';
let vibrator = new Vibrate();
@Component({
  selector: 'app-productDetail',
  templateUrl: './productDetail.html',
  styleUrls: ['./productDetail.scss'],
  moduleId: module.id
})
export class ProductDetailComponent implements OnInit {

  imageHeight;
  imageWidth;
  activeTab = 'first';
  itemDetailList = [];
  textField = 1;
  onAdd;
  onSubtract;
  itemDetail = [];
  favourite = false;


  constructor(private dataService: DataService, private _router: RouterExtensions, private bottomMenuService: BottomMenuService) { }

  ngOnInit() {
    let deviceHeight: number = platformModule.screen.mainScreen.heightDIPs;
    let deviceWidth: number = platformModule.screen.mainScreen.widthDIPs;
    this.imageHeight = deviceHeight * 0.30;
    this.imageWidth = deviceWidth * 0.9;
    this.itemDetail = this.dataService.productDetail();
    this.changeTab('first');
    this.bottomMenuService.bottomMenuVisibility = false;
  }

  changeTab(args) {
    this.activeTab = args;
    if (args === 'first') {
      this.itemDetailList = (<any>this.itemDetail).informatie;
    }
    else if (args === 'second') {
      this.itemDetailList = (<any>this.itemDetail).ingredienten;
    }
  }

  get getDetail() {
    return this.itemDetailList;
  }

  getNumber(number) {
    let integerPart = number.match(/(\d+)(\.\d+)?/);
    return integerPart[1];
  }

  getDecimal(number) {
    let integerPart = number.match(/(\d+)(\.\d+)?/);
    return integerPart[2];
  }


  get isactiveTab() {
    return this.activeTab;
  }

  addValue() {
    this.textField = this.textField + 1
    this.onAdd = true;
    vibrator.vibrate(500);
    setTimeout(() => {
      this.onAdd = false;
    }, 300);
  }

  subtractValue() {
    if (this.textField >= 1) {
      this.onSubtract = true;
      vibrator.vibrate(500);
      this.textField = this.textField - 1
      setTimeout(() => {
        this.onSubtract = false;
      }, 300);
    }
  }

  goBack() {
    this._router.back();
    this.bottomMenuService.bottomMenuVisibility = true;
  }

  get favouriteValue() {
    return this.favourite;
  }

  changeHeart() {
    vibrator.vibrate(500);
  }

}