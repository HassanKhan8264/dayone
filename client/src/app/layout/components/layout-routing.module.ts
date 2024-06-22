import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MainLayoutComponent } from "./main-layout/main-layout.component";
import { AuthGuard } from "src/app/core/guards/auth.guard";
import { OnboardingGuard } from "src/app/core/guards/onboarding.guard";

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule {}
