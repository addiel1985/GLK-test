import {
  Component,
  OnInit,
  ViewEncapsulation,
  ComponentFactoryResolver
} from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { AuthService } from "../auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"],
  encapsulation: ViewEncapsulation.None
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  error = "";

  constructor(
    private _formBuilder: FormBuilder,
    private _authService: AuthService,
    public router: Router
  ) {}

  ngOnInit() {
    this.registerForm = this._formBuilder.group(
      {
        fullName: ["", Validators.required],

        email: ["", Validators.required],
        password: ["", Validators.required],
        confirmPassword: ["", Validators.required]
      },
      { validator: this.checkPasswords }
    );
  }

  checkPasswords(group: FormGroup) {
    // here we have the 'passwords' group
    let pass = group.controls.password.value;
    let confirmPass = group.controls.confirmPassword.value;

    return pass === confirmPass ? null : { notSame: true };
  }

  onRegister() {
    const form = this.registerForm.getRawValue();
    try {
      this._authService
        .register(form)
        .then(user => {
          if (user instanceof Error) {
            console.table(user);
            this.error = user.message;
          } else {
            this.router.navigate(["auth/login"]);
          }
        })
        .catch(e => {
          console.log(e);
          localStorage.setItem("user", null);
        });
    } catch (e) {
      console.error(`try/catch(${e})`);
    }
  }
}
