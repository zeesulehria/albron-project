import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { screen } from "platform";

@Component({
  selector: 'app-productDetail',
  templateUrl: './productDetail.html',
  styleUrls: ['./productDetail.scss'],
  moduleId: module.id
})
export class ProductDetailComponent implements OnInit {

  image = 23;
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

  onLoaded() {
    console.log("working in on loaded function");
    console.dir(this.listview.nativeElement.getActualSize());
    this.listview.nativeElement.height = this.listview.nativeElement.getActualSize().height;
    // screen.mainScreen.heightPixels/100 * 25;
    // this.image =  (screen.mainScreen.heightPixels/100 * 35);
    // console.log("this is the image"+ this.image);
  }
}
