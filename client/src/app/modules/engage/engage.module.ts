import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SharedModule } from "src/app/shared/shared.module";
import { EngagementComponent } from "./engagement/engagement.component";
import { EngageRoutingModule } from "./engage-routing.module";

@NgModule({
  declarations: [EngagementComponent],
  imports: [CommonModule, EngageRoutingModule, SharedModule],
})
export class EngageModule {}
