import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Program } from '@models/program.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-programs',
  templateUrl: './programs.component.html',
  styleUrls: ['./programs.component.scss']
})
export class ProgramsComponent implements OnInit {

  private programDoc: AngularFirestoreDocument<Program>;
  programs: Array<Observable<Program>>;

  constructor(private afAuth: AngularFireAuth, private angularFirestore: AngularFirestore) {
    this.angularFirestore.collection('users').doc(this.afAuth.auth.currentUser.uid)
      .collection('programs').get().subscribe(programs => {
        programs.forEach((program) => {
          console.log(program.data());
        });
      });
  }

  ngOnInit() {
    console.log(this.afAuth.auth.currentUser.uid);

    //   var setWithMerge = cityRef.set({
    //       capitssal: true
    //   }, { merge: true }).then(function() {
    //     console.log("Document successfully written!");
    // });

    // this.angularFirestore.collection('users').doc(this.afAuth.auth.currentUser.uid).get().subscribe(user => {
    //   console.log(user.data());
    // });

    // this.angularFirestore.collection('users').doc(this.afAuth.auth.currentUser.uid)
    //   .collection('programs').get().subscribe(programs => {
    //     programs.forEach((program) => {
    //       console.log(program.data());
    //     });
    //   });
  }

}
