import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { isIOS } from "platform";
import { Color } from 'tns-core-modules/color/color';
import * as platformModule from "tns-core-modules/platform";
import { RouterExtensions } from 'nativescript-angular/router';
import { DataService } from '~/services/data.service';
import { Vibrate } from 'nativescript-vibrate';


@Component({
  selector: 'app-itemList',
  templateUrl: './itemList.component.html',
  styleUrls: ['./itemList.css'],
  moduleId: module.id
})
export class ItemListComponent implements OnInit {

  @Input() dataItemsList = [];

  containerHeight;
  containerHeightAndroid;
  favourite = false;
  _vibrator;

  constructor(private routerExtensions: RouterExtensions, private dataService: DataService) { 
    
  }

  ngOnInit() {
    let deviceHeight: number = platformModule.screen.mainScreen.heightDIPs;
    this._vibrator = new Vibrate();
  }
  
  get getHeightAndriod() {
      let deviceHeight: number = platformModule.screen.mainScreen.heightDIPs;
      return this.containerHeight = deviceHeight * 0.120;
  }

  getNumber(number) {
    let integerPart = number.match(/(\d+)(\.\d+)?/);
    return integerPart[1];
  }

  getDecimal(number) {
    let integerPart = number.match(/(\d+)(\.\d+)?/);
    return integerPart[1];
  }

  changeHeart(item) {
    this._vibrator.vibrate(200);
    return item.favourite = !item.favourite;
  }

  ngAfterViewInit() {
  }

  get favouriteValue() {
    return this.favourite;
  }

  @ViewChild('list') list: ElementRef;
  @ViewChild('listItem') listItem: ElementRef;

  rdlistloaded(args) {
  }

  onItemLoading(args) {
    if (isIOS) {
      var newcolor = new Color("transparent");
      args.ios.backgroundView.backgroundColor = newcolor.ios;
    }
    if (args.index <= 4) {
    }
  }


  get isIosBar() {
    if (isIOS) {
      return true;
    }
    else {
      return false;
    }
  }

  detail(item) {
    this.dataService.getItemDetail(item);
    this.routerExtensions.navigate(['/productDetail'], {
      transition: {
        name: 'fade',
        curve: 'linear'
      }
    });
  }

}

