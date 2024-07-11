import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
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
    private formBuilder: FormBuilder,
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", Validators.required],
    });
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
