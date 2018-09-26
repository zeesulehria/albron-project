import { Component, OnInit, ViewChild, AfterViewInit, OnChanges } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { DataService } from '~/services/data.service';
import * as _ from "lodash";

@Component({
  selector: 'app-productList',
  templateUrl: './productList.component.html',
  styleUrls: ['./productList.component.css'],
  moduleId: module.id
})
export class ProductListComponent implements OnInit {

  currentIndexTab = 0;
  listItems;
  numItems;

  items: any = [
    {
      title: 'Slide 1',
    }
  ];

  constructor(private dataService: DataService) {
    this.items = new BehaviorSubject([
      {
        title: 'Slide 1',
      }
    ]);
  }

  tabChanged(selectedTab, title) {
    this.currentIndexTab = selectedTab;
    let dd = _.filter(this.dataService.data[0].ASSORTIMENT, function (o) {
      return o.category == title;
    });
     this.listItems = dd[0].products;
    // this.listItems = _.map(this.dataService.data[0].ASSORTIMENT, title)
  }

  isActiveTab() {
    return this.currentIndexTab;
  }

  ngOnInit(): void {
    (<any>this.listItems) = this.dataService.data[0].ASSORTIMENT[0].products;
  }

  get tabs() {
    return _.map(this.dataService.data[0].ASSORTIMENT, 'category');
  }


}
