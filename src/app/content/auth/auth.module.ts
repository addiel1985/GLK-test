import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { Routes, RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {
  MatInputModule,
  MatIconModule,
  MatButtonModule,
  MatCardModule
} from "@angular/material";

const routes: Routes = [
  {
    path: "login",
    component: LoginComponent
  },

  {
    path: "register",
    component: RegisterComponent
  }
];

@NgModule({
  declarations: [LoginComponent, RegisterComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,

    MatInputModule,

    MatIconModule,
    MatButtonModule,
    MatCardModule
  ]
})
export class AuthModule {}
