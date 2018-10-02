import { Component, OnInit, ViewChild, AfterViewInit, OnChanges } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { DataService } from '~/services/data.service';
import * as _ from "lodash";
import * as platformModule from "tns-core-modules/platform";
import { Page } from 'tns-core-modules/ui/page/page';

@Component({
  selector: 'app-productList',
  templateUrl: './productList.component.html',
  styleUrls: ['./productList.component.css'],
  moduleId: module.id
})
export class ProductListComponent implements OnInit {

  currentIndexTab = 0;
  currentIndexBottomTab = 0;
  listItemsData;
  listItems;
  numItems;
  containerHeight;

  tabsCategory = [];
  items: any = [
    {
      title: 'Slide 1',
    }
  ];

  constructor(private dataService: DataService, private page: Page) {
    this.items = new BehaviorSubject([
      {
        title: 'Slide 1',
      }
    ]);
  }

  ngOnInit(): void {
    let deviceHeight: number = platformModule.screen.mainScreen.heightDIPs;
    this.containerHeight = deviceHeight * 0.3;
    this.page.actionBarHidden = true;
  }
  
  onLoaded() {
    this.getListItems();
  }

  getListItems() {
    this.dataService.getData().subscribe((result) => {
      this.listItemsData = result;
      this.dataService.applicationData = this.listItemsData;
      this.getList();
    }, (error) => {
      console.dir(error);
    });
  }

  getList(){
    this.listItems = (this.listItemsData).ASSORTIMENT[0].products;
    this.tabsCategory = _.map((this.listItemsData).ASSORTIMENT, "category");
  }

  get tabs() {
    return this.tabsCategory;
  }

  tabChanged(selectedTab, title) {
    this.currentIndexTab = selectedTab;
      let array = _.filter(this.listItemsData.ASSORTIMENT, function (o) {
        return o.category == title;
      });
    this.listItems = array[0].products;
    console.dir(this.listItems);
  }

  isActiveTab() {
    return this.currentIndexTab;
  }
}

