import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AuthService } from "../../auth/auth.service";
import { BlogService } from "../blog.service";
import * as moment from "moment";

@Component({
  selector: "app-blog-form",
  templateUrl: "./blog-form.component.html",
  styleUrls: ["./blog-form.component.scss"],
  encapsulation: ViewEncapsulation.None
})
export class BlogFormComponent implements OnInit {
  commentForm: FormGroup;
  constructor(
    private _formBuilder: FormBuilder,
    private _authService: AuthService,
    private _blogService: BlogService
  ) {}

  ngOnInit() {
    this.commentForm = this._formBuilder.group({
      comment: ["", Validators.required]
    });
  }

  onAddComment() {
    const form = this.commentForm.getRawValue();
    const currentUser: any = this._authService.getUserLogged();
    const c: Comment = {
      ...form,
      createdAt: moment().format("MM-DD-YYYY hh:mm:ss"),
      createdByFullName: currentUser.displayName
    };

    this._blogService.addNewComment(c);
    this.commentForm.setValue({ comment: "" });
  }
}
