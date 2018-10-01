import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { isIOS } from "platform";
import { Color } from 'tns-core-modules/color/color';
import * as platformModule from "tns-core-modules/platform";
import { RouterExtensions } from 'nativescript-angular/router';
import { DataService } from '~/services/data.service';

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

  constructor(private routerExtensions: RouterExtensions, private dataService: DataService) { }

  ngOnInit() {
    let deviceHeight: number = platformModule.screen.mainScreen.heightDIPs;
    this.containerHeight = deviceHeight * 0.110;
    this.containerHeightAndroid = deviceHeight * 0.09;    
  }

  getNumber(number) {
    let integerPart = number.match(/(\d+)(\.\d+)?/);
    return integerPart[1];
  }

  getDecimal(number) {
    let integerPart = number.match(/(\d+)(\.\d+)?/);
    return integerPart[2];
  }

  changeHeart() {
    return this.favourite = !this.favourite;
  }

  ngAfterViewInit() {
    // setTimeout(() => this.init(), 350);
  }

  get favouriteValue() {
    return this.favourite;
  }

  @ViewChild('list') list: ElementRef;
  @ViewChild('listItem') listItem: ElementRef;

  // init() {
  //   if (this.list.nativeElement) {
  //     this.listItemWidth = this.list.nativeElement.getMeasuredWidth() / screen.mainScreen.scale;
  //     // this.listItemHeight = this.list.nativeElement.getMeasuredHeight() / screen.mainScreen.scale;

  //     // console.dir(this.listItemHeight/5);
  //     console.dir(this.listItemWidth/5);
  //   } else {
  //     setTimeout(() => this.init(), 100);
  //   }
  // }

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

