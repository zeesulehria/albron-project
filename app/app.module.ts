import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { AppRoutingModule } from "./app.routing";
import { AppComponent } from "./app.component";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";
// Uncomment and add to NgModule imports if you need to use two-way binding
// import { NativeScriptFormsModule } from "nativescript-angular/forms";

// Uncomment and add to NgModule imports if you need to use the HttpClient wrapper
// import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";
import { ProductDetailComponent } from './productDetail/productDetail.component';
import { ProductListComponent } from './productList/productList.component';
import { PagerModule } from "nativescript-pager/angular";
import { ItemListComponent } from "~/productList/itemList/itemList.component";
import { NativeScriptUIListViewModule } from "nativescript-ui-listview/angular";
import { DataService } from "~/services/data.service";
import { HomeComponent } from './home/home.component';
import { BottomBarComponent } from './bottomBar/bottomBar.component';
import { ResturantComponent } from './resturant/resturant.component';
import { AllergenenComponent } from './allergenen/allergenen.component';
import { BottomMenuService } from "~/bottomBar/bottomMenu.service";
import { LabelMaxlinesDirective } from "~/theme/label-maxlines.directive";


@NgModule({
   bootstrap: [
      AppComponent
   ],
   imports: [
      NativeScriptModule,
      AppRoutingModule,
      PagerModule,
      NativeScriptUIListViewModule,
      NativeScriptCommonModule,
      NativeScriptHttpClientModule
   ],
   declarations: [
      AppComponent,
      ProductDetailComponent,
      ProductListComponent,
      ItemListComponent,
      HomeComponent,
      BottomBarComponent,
      ResturantComponent,
      AllergenenComponent,
      LabelMaxlinesDirective
   ],
   providers: [
      DataService,
      BottomMenuService
   ],
   schemas: [
      NO_ERRORS_SCHEMA
   ]
})

/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule { }
