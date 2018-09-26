import { Component, OnInit, ViewChild, ElementRef, OnChanges, Input } from '@angular/core';
import { screen, isIOS } from "platform";
import { Color } from 'tns-core-modules/color/color';
import { DataService } from '~/services/data.service';

@Component({
  selector: 'app-itemList',
  templateUrl: './itemList.component.html',
  styleUrls: ['./itemList.component.css'],
  moduleId: module.id
})
export class ItemListComponent implements OnInit  {

  @Input() dataItemsList = [];
  
  constructor() { }
  ngOnInit() {
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

  listItemHeight = 0;
  listItemWidth = 0;


  ngAfterViewInit() {
    // setTimeout(() => this.init(), 350);
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
  }
  
}