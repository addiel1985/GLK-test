import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AuthService } from "../auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  erros = "";
  constructor(
    private _formBuilder: FormBuilder,
    private _authService: AuthService,
    public router: Router
  ) {}

  ngOnInit() {
    this.loginForm = this._formBuilder.group({
      email: ["", Validators.required],
      password: ["", Validators.required]
    });
  }

  onLogin() {
    const form = this.loginForm.getRawValue();
    this._authService
      .login(form.email, form.password)
      .then(r => {
        localStorage.setItem("user", JSON.stringify(r.user));
        this.router.navigate(["wall"]);
      })
      .catch(e => {
        localStorage.setItem("user", null);
      });
  }
}
