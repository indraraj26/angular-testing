import { BookModel } from "./../../models/book/book.model";
import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-book",
  templateUrl: "./book.component.html",
  styleUrls: ["./book.component.scss"]
})
export class BookComponent implements OnInit {
  @Input() set book(data) {
    console.log(data);
    this.mybook = data;
  }
  public mybook: Partial<BookModel> = {};

  bookTitle: string = "My book";
  Author: string = "indraraj";
  constructor() {}

  ngOnInit() {}

  upVotes() {
    this.mybook.upvotes = this.mybook.upvotes + 1;
  }

  votesCounter() {
    return this.mybook.upvotes;
  }
}
