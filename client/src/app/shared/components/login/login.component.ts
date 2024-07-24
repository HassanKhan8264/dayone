import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { Router } from "@angular/router";
import { EndpointService } from "../../../core/http/endpoint.service";

@Component({
  selector: "dy-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  hide = true;
  constructor(
    private router: Router,
    private endpoint: EndpointService,
    private formBuilder: FormBuilder,
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(8)]],
    });
  }
  togglePasswordVisibility(): void {
    this.hide = !this.hide;
  }
  onSubmit() {
    let payload = {
      email: this.loginForm.get("email").value,
      password: this.loginForm.get("password").value,
    };
    this.endpoint
      .user()
      .login(payload)
      .subscribe({
        next: (res: any) => {
          if (res) {
            console.log("Login successful", res);
            this.router.navigate(["/pages"]);
          }
        },
        error: (error) => {
          console.log("err", error);
        },
      });
  }
}
