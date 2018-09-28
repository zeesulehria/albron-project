import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { DataService } from '~/services/data.service';
import { RouterExtensions } from 'nativescript-angular/router';
import * as platformModule from "tns-core-modules/platform";

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

  constructor(private dataService: DataService, private _router: RouterExtensions) { }

  ngOnInit() {
    let deviceHeight: number = platformModule.screen.mainScreen.heightDIPs;
    let deviceWidth: number = platformModule.screen.mainScreen.widthDIPs;
    this.imageHeight = deviceHeight * 0.15;
    this.imageWidth = deviceWidth * 0.9;
     this.itemDetail = this.dataService.productDetail();
     this.changeTab('first');
  }
  


  changeTab(args)
  {
    this.activeTab = args;
    if (args === 'first') {
      this.itemDetailList = (<any>this.itemDetail).informatie;
    } 
    else if(args === 'second') {
      this.itemDetailList = (<any>this.itemDetail).ingredienten;
    }
  }

  get getDetail(){
    return this.itemDetailList;
  } 

  getNumber(number) {
    let integerPart = parseInt(number);
    return integerPart;
  }

  getDecimal(number) {
    let integerPart = parseInt(number);
    let decimalPart = number - integerPart;
    return decimalPart;
  }


  get isactiveTab () {
    return this.activeTab;
  }

  addValue() {
    this.textField = this.textField + 1
    this.onAdd = true;
    setTimeout(() => {
      this.onAdd = false;
    }, 300);
  }

  subtractValue() {
    if(this.textField>=1)
    {
      this.onSubtract = true;
      this.textField = this.textField - 1
      setTimeout(() => {
        this.onSubtract = false;
      }, 300);
    }
  }

  goBack() {
    this._router.back();
  }
}
