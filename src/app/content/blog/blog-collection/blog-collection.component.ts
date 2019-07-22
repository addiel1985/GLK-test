import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { BlogService } from "../blog.service";

@Component({
  selector: "app-blog-collection",
  templateUrl: "./blog-collection.component.html",
  styleUrls: ["./blog-collection.component.scss"],
  encapsulation: ViewEncapsulation.None
})
export class BlogCollectionComponent {
  comments$: Observable<Comment[]>;

  constructor(private _blogService: BlogService) {
    this.comments$ = this._blogService.getComments();
  }
}
