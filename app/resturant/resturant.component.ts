import { Component, OnInit } from '@angular/core';
import { DataService } from '~/services/data.service';
import { Page } from 'tns-core-modules/ui/page/page';
import { BehaviorSubject } from 'rxjs';
import * as platformModule from "tns-core-modules/platform";
import * as _ from "lodash";

@Component({
  selector: 'app-resturant',
  templateUrl: './resturant.component.html',
  styleUrls: ['./resturant.component.scss'],
  moduleId: module.id
})
export class ResturantComponent implements OnInit {

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
      // this.dataItems = result;
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
