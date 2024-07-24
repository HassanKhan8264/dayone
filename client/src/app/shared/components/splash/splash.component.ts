import { Component, OnInit } from "@angular/core";
import { ProfileService } from "../../../core/http/profile.service";
import { Router } from "@angular/router";
@Component({
  selector: "dy-splash",
  templateUrl: "./splash.component.html",
  styleUrls: ["./splash.component.scss"],
})
export class SplashComponent implements OnInit {
  constructor(
    private profile: ProfileService,
    private router: Router,
  ) {}
  ngOnInit() {
    this.initialize();
  }
  initialize() {
    setTimeout(() => {
      this.profile.loggedIn().subscribe({
        next: (response: any) => {
          console.log(response);
          if (response.authenticated) {
            this.router.navigate(["/pages"]).then((navigated) => {
              if (navigated) {
                console.log("Navigation to /pages/publish successful");
              } else {
                console.log("Navigation to /pages/publish failed");
              }
            });
          } else {
            this.router.navigate(["/pages/login"]).then((navigated) => {
              if (navigated) {
                console.log("Navigation to /login successful");
              } else {
                console.log("Navigation to /login failed");
              }
            });
          }
        },
        error: (error) => {
          console.error("Error checking authentication status:", error);
          this.router.navigate(["/login"]).then((navigated) => {
            if (navigated) {
              console.log("Navigation to /login successful");
            } else {
              console.log("Navigation to /login failed");
            }
          });
        },
      });
    }, 2000);
  }
}
