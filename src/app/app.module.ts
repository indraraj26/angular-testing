import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp({
      apiKey: "xxxxxx",
      authDomain: "xxxxxx",
      databaseURL: "xxxxxxx",
      projectId: "xxxxxxx",
      storageBucket: "xxxxxxx",
      messagingSenderId: "xxxx",
      appId: "xxxx",
      measurementId: "xxxxxx",
    }),
    AngularFireAuthModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
