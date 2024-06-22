import { Component, OnInit } from "@angular/core";
import { EndpointService } from "../../../core/http/endpoint.service";
import { Router } from "@angular/router";

@Component({
  selector: "v1-testing-header",
  templateUrl: "./testing-header.component.html",
  styleUrls: ["./testing-header.component.scss"],
})
export class TestingHeaderComponent implements OnInit {
  constructor(
    private endpoint: EndpointService,
    private router: Router,
  ) {}

  ngOnInit(): void {}
  logout() {
    this.endpoint
      .user()
      .logout()
      .subscribe({
        next: () => {
          this.router.navigate(["/login"]);
        },
        error: (err) => {
          console.log(err);
        },
      });
  }
}
