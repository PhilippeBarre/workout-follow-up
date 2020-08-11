import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'workout-follow-up';

  constructor() {
    const firebaseConfig = {
      apiKey: "AIzaSyDaWatcrOKbd3rV3ttpWIS38WKMGdvmsIY",
      authDomain: "workout-follow-up.firebaseapp.com",
      databaseURL: "https://workout-follow-up.firebaseio.com",
      projectId: "workout-follow-up",
      storageBucket: "workout-follow-up.appspot.com",
      messagingSenderId: "68244190938",
      appId: "1:68244190938:web:3e59a9f962732808dfd7e3",
      measurementId: "G-RDWH96V6CR"
    };

    firebase.initializeApp(firebaseConfig);
  }
}
