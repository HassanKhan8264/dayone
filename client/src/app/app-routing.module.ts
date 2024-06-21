import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SplashComponent } from "./shared/components/splash/splash.component";
import { LoginComponent } from "./shared/components/login/login.component";
import { SignupComponent } from "./shared/components/signup/signup.component";
import { OnboardingGuard } from "./core/guards/onboarding.guard";
import { MainLayoutComponent } from "./layout/components/main-layout/main-layout.component";
import { AuthGuard } from "./core/guards/auth.guard";

const routes: Routes = [
  { path: "", redirectTo: "splash", pathMatch: "full" },
  { path: "splash", component: SplashComponent },
  { path: "login", component: LoginComponent },
  { path: "signup", component: SignupComponent },
  {
    path: "pages",
    loadChildren: () =>
      import("./layout/layout.module").then((m) => m.LayoutModule),
  },

  { path: "**", redirectTo: "splash" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
