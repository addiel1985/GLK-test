import { Injectable } from "@angular/core";

import { AngularFireAuth } from "@angular/fire/auth";
import { auth } from "firebase/app";
import { throwError, Observable } from "rxjs";
import { Router } from "@angular/router";
@Injectable({
  providedIn: "root"
})
export class AuthService {
  user: any;
  constructor(private _authFireBsae: AngularFireAuth, private router: Router) {
    this._authFireBsae.authState.subscribe(user => {
      if (user) {
        this.user = user;
        localStorage.setItem("user", JSON.stringify(this.user));
      } else {
        localStorage.setItem("user", null);
      }
    });
  }

  login(email: string, pasword: string): Promise<any> {
    return this._authFireBsae.auth.signInWithEmailAndPassword(email, pasword);
  }

  register(obj: any): Promise<any> {
    return this._authFireBsae.auth
      .createUserWithEmailAndPassword(obj.email, obj.password)
      .then(user => {
        user.user.updateProfile({
          displayName: obj.fullName
        });
      })
      .catch(e => {
        return e;
      });
  }

  logout() {
    this._authFireBsae.auth.signOut().then(d => {
      localStorage.removeItem("user");
      this.router.navigate(["login"]);
    });
  }

  isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem("user"));
    return user !== null;
  }

  getUserLogged() {
    return JSON.parse(localStorage.getItem("user"));
  }
}
