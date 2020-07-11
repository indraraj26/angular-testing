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
  constructor(private afuth: AngularFireAuth) {}

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
