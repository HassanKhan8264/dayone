import { Component, OnInit } from "@angular/core";
import { FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { EndpointService } from "../../../core/http/endpoint.service";

@Component({
  selector: "pt-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private router: Router,
    private endpoint: EndpointService,
  ) {}

  ngOnInit(): void {
    this.loginForm = new FormGroup({});
  }

  onSubmit() {
    this.endpoint
      .user()
      .login(this.loginForm.value)
      .subscribe({
        next: (res: any) => {
          console.log("Login successful", res);
          this.router.navigate(["/pages"]);
        },
        error: (error) => {
          alert("User does not exist.");
          console.log("err", error);
        },
      });
  }
}
