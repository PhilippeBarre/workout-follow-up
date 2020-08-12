import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-programs',
  templateUrl: './programs.component.html',
  styleUrls: ['./programs.component.scss']
})
export class ProgramsComponent implements OnInit {

  constructor(private afAuth: AngularFireAuth, private angularFirestore: AngularFirestore) { }

  ngOnInit() {
    console.log(this.afAuth.auth.currentUser.uid);

//   var setWithMerge = cityRef.set({
//       capitssal: true
//   }, { merge: true }).then(function() {
//     console.log("Document successfully written!");
// });

    this.angularFirestore.collection("users").doc(this.afAuth.auth.currentUser.uid).get().subscribe(x => {
      console.log(x.data());
    });
  }

}
