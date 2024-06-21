import { Component, OnInit } from "@angular/core";
import { ProfileService } from "../../../core/http/profile.service";
import { Router } from "@angular/router";
@Component({
  selector: "v1-splash",
  templateUrl: "./splash.component.html",
  styleUrls: ["./splash.component.scss"],
})
export class SplashComponent implements OnInit {
  showLogo = false;
  constructor(private profile: ProfileService, private router: Router) {}
  ngOnInit() {
    this.initialize();
  }
  initialize() {
    setTimeout(() => {
      this.showLogo = true;
      this.profile.loggedIn().subscribe((response: any) => {
        console.log(response);
        debugger;
        if (response.authenticated) {
          this.router.navigate(["/pages"]); // Redirect to dashboard if authenticated
        } else {
          this.router.navigate(["/login"]); // Redirect to login if not authenticated
        }
      });
    }, 1000);
  }
}
