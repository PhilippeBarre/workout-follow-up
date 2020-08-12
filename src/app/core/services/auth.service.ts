import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { auth } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: User;

  constructor(public afAuth: AngularFireAuth, public router: Router) {
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.user = user;
        localStorage.setItem('user', JSON.stringify(this.user));
      } else {
        localStorage.setItem('user', null);
      }
    });
  }

  signin(email: string, password: string): Promise<firebase.auth.UserCredential> {
    return new Promise(
      (resolve, reject) => {
        this.afAuth.auth.signInWithEmailAndPassword(email, password).then(
          () => {
            resolve();
          },
          (error) => {
            reject(error);
          });
      });
  }

  signinWithGoogle() {
    return new Promise(
      (resolve, reject) => {
        this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider()).then(
          () => {
            resolve();
          },
          (error) => {
            reject(error);
          });
      });
  }

  signup(email: string, password: string): Promise<firebase.auth.UserCredential> {
    return new Promise(
      (resolve, reject) => {
        this.afAuth.auth.createUserWithEmailAndPassword(email, password).then(
          () => {
            this.sendEmailVerification();
            resolve();
          },
          (error) => {
            reject(error);
          });
      });
  }

  async sendEmailVerification() {
    // await this.afAuth.auth.currentUser.sendEmailVerification();
    // this.router.navigate(['admin/verify-email']);
    console.log('On peut envoyer un mail de confirmation ici');
  }

  async sendPasswordResetEmail(passwordResetEmail: string) {
    return await this.afAuth.auth.sendPasswordResetEmail(passwordResetEmail);
  }

  async signout() {
    console.log('je passeS');
    await this.afAuth.auth.signOut();
    localStorage.removeItem('user');
    this.router.navigate(['auth/signin']);
  }

  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    return user !== null;
  }
}
