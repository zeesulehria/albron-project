import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { screen } from "platform";
import { DataService } from '~/services/data.service';

@Component({
  selector: 'app-productDetail',
  templateUrl: './productDetail.html',
  styleUrls: ['./productDetail.scss'],
  moduleId: module.id
})
export class ProductDetailComponent implements OnInit {

  imageHeight;
  activeTab = 'first';
  textField = 1;
  onAdd;
  onSubtract;

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

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.productDetail;
  }

  @ViewChild('listview') listview: ElementRef;
  @ViewChild('screen') screen: ElementRef;

  onLoaded() {
    this.listview.nativeElement.height = this.listview.nativeElement.getActualSize().height;
  }


  changeTab(args)
  {
    this.activeTab = args;
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
}
