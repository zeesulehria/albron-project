import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";
import { ProductDetailComponent } from "~/productDetail/productDetail.component";

const routes: Routes = [
    { path: "", redirectTo: "/productDetail", pathMatch: "full" },
    { path:"productDetail", component: ProductDetailComponent}
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }