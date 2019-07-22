import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../auth/auth.service";

@Component({
  selector: "app-blog",
  templateUrl: "./blog.component.html",
  styleUrls: ["./blog.component.scss"]
})
export class BlogComponent implements OnInit {
  constructor(private _authService: AuthService) {}

  ngOnInit() {}

  onLoggedout() {
    this._authService.logout();
  }
}
