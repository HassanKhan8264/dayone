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
  selector: "pt-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(
    private router: Router,
    private endpoint: EndpointService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: [
        "",
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(50),
          this.emailValidator, // Custom email validator
        ],
      ],
      password: [
        "",
        [
          Validators.required,
          this.passwordValidator, // Custom password validator
        ],
      ],
    });
  }
  // Custom email validator
  emailValidator(control: FormControl): { [key: string]: boolean } | null {
    const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return EMAIL_REGEX.test(control.value) ? null : { invalidEmail: true };
  }
  // Custom password validator
  passwordValidator(control: FormControl): { [key: string]: boolean } | null {
    const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    return PASSWORD_REGEX.test(control.value) ? null : { weakPassword: true };
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
