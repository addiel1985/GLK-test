export class Comment {
  comment: string = "";
  createtAt: string = "";
  createdByFullName: string = "";

  constructor(obj: Partial<Comment>) {
    Object.assign(this, obj);
  }
}
