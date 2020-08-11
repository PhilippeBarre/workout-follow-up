import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from '@components/auth/signup/signup.component';
import { SigninComponent } from '@components/auth/signin/signin.component';
import { ProgramsComponent } from '@components/programs/programs.component';
import { ProgramFormComponent } from '@components/programs/program-form/program-form.component';
import { ProgramComponent } from '@components/programs/program/program.component';


const routes: Routes = [
  { path: 'auth/signup', component: SignupComponent },
  { path: 'auth/signin', component: SigninComponent },
  { path: 'programs', component: ProgramsComponent },
  { path: 'programs/new', component: ProgramFormComponent },
  { path: 'programs/view/:id', component: ProgramComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
