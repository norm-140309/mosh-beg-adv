import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

var firebaseConfig = {
  apiKey: "AIzaSyDFEQrvkVodgHyIucr3vFcWdzCzBM7wJ5o",
  authDomain: "firestore-84d12.firebaseapp.com",
  databaseURL: "https://firestore-84d12.firebaseio.com",
  projectId: "firestore-84d12",
  storageBucket: "firestore-84d12.appspot.com",
  messagingSenderId: "1000482994666"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
