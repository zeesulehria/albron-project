import { Component, OnInit, ViewChild } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-productList',
  templateUrl: './productList.component.html',
  styleUrls: ['./productList.component.css'],
  moduleId: module.id
})
export class ProductListComponent implements OnInit {

  currentIndexTab = 0;
 
  tabs = [
    {title:"Dranken"},
    {title:"Broodjes"},
    {title:"Broodjes"},
    {title:"Broodjes"},
    {title:"Broodjes"},
    {title:"Broodjes"},
    {title:"Broodjes"},
    {title:"Salades"},
  ]


  numItems;
  currentPagerIndex = 0;
  latestReceivedIndex = 0;
  items: any = [
    {
      title: 'Slide 1',
    },
    {
      title: 'Slide 1',
    },
    {
      title: 'Slide 1',
    }
  ];

  constructor() {
    this.items = new BehaviorSubject([
      {
        title: 'Slide 1',
      },
      {
        title: 'Slide 1',
      },
      {
        title: 'Slide 1',
      }
    ]);
    this.numItems = this.items.value.length;
  }

  tabChanged(selectedTab) {
    this.currentIndexTab = selectedTab;
  }

  isActiveTab() {
    return this.currentIndexTab;
  }

  @ViewChild('pager') pager: any;
  // tslint:disable-next-line:semicolon
  public templateSelector = (item: any, index: number, items: any) => {
    return index % 2 === 0 ? 'even' : 'odd';
  }


  ngOnInit(): void {
  }

  loadedImage($event) {
    console.log(`loaded image ${JSON.stringify($event)}`);
  }

  prevPage() {
    // this.debugObj(this.pager);
    const newIndex = Math.max(0, this.currentPagerIndex - 1);
    this.currentPagerIndex = newIndex;
    this.latestReceivedIndex = newIndex;
  }

  nextPage() {
    const newIndex = Math.min(this.numItems - 1, this.currentPagerIndex + 1);
    this.currentPagerIndex = newIndex;
    this.latestReceivedIndex = newIndex;
  }

  onIndexChanged($event) {
    debugObj($event);
    this.latestReceivedIndex = $event.newIndex;
  }

  pageChanged(index: number) {
    console.log(`pageChanged ${JSON.stringify(index)}`);
    debugObj(index);
  }
}

function debugObj(obj: any) {
  for (const key of Object.keys(obj)) {
    console.log(`${key} = ${obj[key]}`);
  }


}
