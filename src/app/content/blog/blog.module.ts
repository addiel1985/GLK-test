import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BlogComponent } from "./blog/blog.component";
import { BlogFormComponent } from "./blog-form/blog-form.component";
import { BlogCollectionComponent } from "./blog-collection/blog-collection.component";
import { Routes, RouterModule } from "@angular/router";
import {
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatIconModule,
  MatCardModule,
  MatToolbarModule
} from "@angular/material";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { AngularFireAuthGuard } from "@angular/fire/auth-guard";
const routes: Routes = [
  { path: "", component: BlogComponent, canActivate: [AngularFireAuthGuard] }
];

@NgModule({
  declarations: [BlogComponent, BlogFormComponent, BlogCollectionComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatFormFieldModule,
    MatInputModule,

    MatIconModule,
    ReactiveFormsModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule
  ]
})
export class BlogModule {}
