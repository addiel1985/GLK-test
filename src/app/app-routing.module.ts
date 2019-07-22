import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "auth",
    loadChildren: () =>
      import("./content/auth/auth.module").then(m => m.AuthModule)
  },
  {
    path: "wall",
    loadChildren: () =>
      import("./content/blog/blog.module").then(m => m.BlogModule)
  },
  { path: "", redirectTo: "/auth/login", pathMatch: "full" },
  { path: "**", redirectTo: "/auth/login", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
