import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  name = 'Angular 6';

  ngOnInit() {
    firebase.initializeApp({

      databaseURL: "https://testwipool-6a4a0-default-rtdb.europe-west1.firebasedatabase.app/",
      apiKey: 'AIzaSyAgorLvyjqH9ZlieIA1FlaUABmunZbf7lc',
      authDomain: 'testwipool-6a4a0.firebaseapp.com',
      projectId: 'testwipool-6a4a0',
      storageBucket: 'testwipool-6a4a0.appspot.com',
      messagingSenderId: '718500765290',
      appId: '1:718500765290:web:558589b0610cf9d51c3413',
      measurementId: 'G-00GBMX8DWL'
    });
  }

}
