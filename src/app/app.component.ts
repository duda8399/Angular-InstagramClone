import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app3';

  ngOnInit(): void {

    var config = {
      apiKey: "AIzaSyDl0GpasQ5EvRpxa9M2LpIeYDMVRC4vKjc",
      authDomain: "jta-instagram-clone-e6692.firebaseapp.com",
      databaseURL: "https://jta-instagram-clone-e6692.firebaseio.com",
      projectId: "jta-instagram-clone-e6692",
      storageBucket: "jta-instagram-clone-e6692.appspot.com",
      messagingSenderId: "92819267537",
      appId: "1:92819267537:web:d01ed12f0cbf708d688af0",
      measurementId: "G-H97YEB57TK"
    };

    firebase.initializeApp(config);
  }
}
