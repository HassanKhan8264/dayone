import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PublishLayoutComponent } from "./publish-layout/publish-layout.component";

const routes: Routes = [
  {
    path: "",
    component: PublishLayoutComponent,
    children: [
      {
        path: "",
        pathMatch: "full",
        redirectTo: "content",
      },
      {
        path: "content",
        loadChildren: () =>
          import("./content/content.module").then((m) => m.ContentModule),
      },
      {
        path: "welcome",
        loadChildren: () =>
          import("./welcome/welcome.module").then((m) => m.WelcomeModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PublishRoutingModule {}
