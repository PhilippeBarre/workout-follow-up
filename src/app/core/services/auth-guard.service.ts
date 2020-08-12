import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(public afAuth: AngularFireAuth, private router: Router) { }

  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    return new Promise(
      (resolve, reject) => {
        this.afAuth.auth.onAuthStateChanged((user) => {
          if (user) {
            resolve(true);
          } else {
            this.router.navigate(['/auth', 'signin']);
            resolve(false);
          }
        });
      }
    );
  }
}

