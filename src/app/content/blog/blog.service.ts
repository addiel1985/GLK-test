import { Injectable } from "@angular/core";
import {
  AngularFirestore,
  AngularFirestoreCollection
} from "@angular/fire/firestore";
import { BehaviorSubject, Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class BlogService {
  commentsCollection: AngularFirestoreCollection<any>;

  private _comments$: BehaviorSubject<any>;

  constructor(private _db: AngularFirestore) {
    this._comments$ = new BehaviorSubject([]);
    this.commentsCollection = this._db.collection<any>("comments", ref =>
      ref.orderBy("createdAt", "desc")
    );
    this.commentsCollection
      .snapshotChanges()
      .pipe(
        map(actions => {
          return actions.map(item => {
            return item.payload.doc.data();
          });
        })
      )
      .subscribe(d => {
        console.log(d);
        this._comments$.next(d);
      });
  }

  addNewComment(comment: Comment) {
    this.commentsCollection.add(comment);
  }

  getComments(): Observable<Comment[]> {
    return this._comments$.asObservable();
  }
}
