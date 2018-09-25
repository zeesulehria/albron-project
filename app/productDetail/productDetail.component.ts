import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { screen } from "platform";

@Component({
  selector: 'app-productDetail',
  templateUrl: './productDetail.html',
  styleUrls: ['./productDetail.scss'],
  moduleId: module.id
})
export class ProductDetailComponent implements OnInit {

  imageHeight;
  activeTab = 'first';
  heroes = [
    { title: 'Energie Kilojoules (KJ)', value: 19 },
    { title: 'Energie Kilojoules (KJ)', value: 309 },
    { title: 'Energie Kilojoules (KJ)', value: 309 },
    { title: 'Energie Kilojoules (KJ)', value: 72 },
    { subTitle: 'verzadigde vetzuren (g)', value: 1.1 },
    { title: 'Energie Kilojoules (KJ)', value: 309 },
    { title: 'Energie Kilojoules (KJ)', value: 309 },
    { subTitle: 'verzadigde vetzuren (g)', value: 1.1 },
    { title: 'Energie Kilojoules (KJ)', value: 72 },
  ];

  constructor() { }

  ngOnInit() {
  }

  @ViewChild('listview') listview: ElementRef;
  @ViewChild('screen') screen: ElementRef;

  onLoaded() {
    this.listview.nativeElement.height = this.listview.nativeElement.getActualSize().height;
    // console.dir("+==============="+this.screen.nativeElement.getMeasuredHeight());
    // this.imageHeight = this.screen.nativeElement.getActualSize().height/3.5;
  }


  changeTab(args)
  {
    this.activeTab = args;
  }

  get isactiveTab () {
    return this.activeTab;
  }
}
