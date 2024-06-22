import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SharedModule } from "src/app/shared/shared.module";
import { ContentComponent } from "./content-comp/content.component";
import { ContentRoutingModule } from "./content-routing.module";

@NgModule({
  declarations: [ContentComponent],
  imports: [CommonModule, ContentRoutingModule, SharedModule],
})
export class ContentModule {}
