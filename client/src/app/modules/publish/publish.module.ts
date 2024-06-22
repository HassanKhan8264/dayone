import { NgModule } from "@angular/core";
import { PublishLayoutComponent } from "./publish-layout/publish-layout.component";
import { SharedModule } from "../../shared/shared.module";
import { CommonModule } from "@angular/common";
import { PublishRoutingModule } from "./publish-routing.module";
import { ContentComponent } from "./content/content-comp/content.component";
import { WelcomeComponent } from "./welcome/welcome-comp/welcome.component";

@NgModule({
  declarations: [PublishLayoutComponent],
  imports: [CommonModule, PublishRoutingModule, SharedModule],
})
export class PublishModule {}
