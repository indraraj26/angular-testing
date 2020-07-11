import { BookModel, IBook } from "./models/book/book.model";
import { Component } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import * as firebase from "firebase";
declare const window: any;
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "testing";

  public book: Partial<IBook<string, number>> = {};

  constructor(private afuth: AngularFireAuth) {
    this.book = new BookModel(
      "https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg",
      "A good image",
      "mountain view",
      200,
      10
    );
  }

  ngOnInit() {
    firebase.auth().languageCode = "it";
  }

  onSignInSubmit() {
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
      "sign-in-button",
      {
        size: "invisible",
        callback: function (response) {
          // reCAPTCHA solved, allow signInWithPhoneNumber.
          this.afuth.signInWithPhoneNumber(
            "9004345086",
            window.recaptchaVerifier
          );
        },
      }
    );
  }
}
