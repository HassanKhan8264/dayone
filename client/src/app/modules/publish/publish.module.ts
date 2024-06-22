import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PublishRoutingModule } from "./publish-routing.module";
import { SharedModule } from "src/app/shared/shared.module";
import { PublishLayoutComponent } from "../publish/publish-layout/publish-layout.component";

@NgModule({
  declarations: [PublishLayoutComponent],
  imports: [CommonModule, PublishRoutingModule, SharedModule],
})
export class PublishModule {}
