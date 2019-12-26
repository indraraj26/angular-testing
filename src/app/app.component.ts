import { BookModel, IBook } from "./models/book/book.model";
import { Component } from "@angular/core";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "testing";

  public book: Partial<IBook<string, number>> = {};

  constructor() {
    this.book = new BookModel(
      "https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg",
      "A good image",
      "mountain view",
      200,
      10
    );
  }
}
