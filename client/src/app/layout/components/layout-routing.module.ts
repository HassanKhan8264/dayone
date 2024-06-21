import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MainLayoutComponent } from "./main-layout/main-layout.component";
import { AuthGuard } from "src/app/core/guards/auth.guard";
import { OnboardingGuard } from "src/app/core/guards/onboarding.guard";

// const routes: Routes = [
//   {
//     path: "",
//     component: MainLayoutComponent,
//     canActivate: [AuthGuard, OnboardingGuard],
//     children: [
//       {
//         path: "",
//         pathMatch: "full",
//         redirectTo: "publish",
//       },
//       {
//         path: "publish",
//         loadChildren: () =>
//           import("../../modules/publish/publish.module").then(
//             (m) => m.PublishModule
//           ),
//       },
//     ],
//   },
// ];
const routes: Routes = [
  {
    path: "",
    component: MainLayoutComponent,
    canActivate: [AuthGuard, OnboardingGuard],
    children: [
      {
        path: "",
        pathMatch: "full",
        redirectTo: "publish",
      },
      {
        path: "publish",
        loadChildren: () =>
          import("../../modules/publish/publish.module").then(
            (m) => m.PublishModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule {}
