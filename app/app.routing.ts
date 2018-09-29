import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";
import { ProductDetailComponent } from "~/productDetail/productDetail.component";
import { ProductListComponent } from "~/productList/productList.component";
import { HomeComponent } from "~/home/home.component";

const routes: Routes = [
    { path: "", redirectTo: "/home", pathMatch: "full" },
    { path:"productDetail", component: ProductDetailComponent},
    { path:"productlist", component: ProductListComponent},
    { path:"home", component: HomeComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }