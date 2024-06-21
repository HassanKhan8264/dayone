import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MainLayoutComponent } from "./components/main-layout/main-layout.component";
import { LayoutRoutingModule } from "./components/layout-routing.module";
import { TestingHeaderComponent } from "./components/testing-header/testing-header.component";

@NgModule({
  declarations: [MainLayoutComponent, TestingHeaderComponent],
  imports: [CommonModule, LayoutRoutingModule],
})
export class LayoutModule {}
