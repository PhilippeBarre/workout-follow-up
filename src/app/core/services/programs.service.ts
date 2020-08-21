import { Injectable } from '@angular/core';
import { Program } from '@models/program.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProgramsService {

  programs: Array<Program> = [];
  programsSubject = new Subject<Array<Program>>();

  constructor() {

  }

  emitBooks() {
    this.programsSubject.next(this.programs);
  }

  saveBooks() {
    // firebase.database().ref('/books').set(this.programs);
  }
}
