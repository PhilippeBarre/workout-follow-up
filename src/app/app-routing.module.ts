import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from '@components/auth/signup/signup.component';
import { SigninComponent } from '@components/auth/signin/signin.component';
import { ProgramsComponent } from '@components/programs/programs.component';
import { ProgramFormComponent } from '@components/programs/program-form/program-form.component';
import { ProgramComponent } from '@components/programs/program/program.component';
import { AuthGuardService } from '@core/services/auth-guard.service';


const routes: Routes = [
  { path: 'auth/signup', component: SignupComponent },
  { path: 'auth/signin', component: SigninComponent },
  { path: 'programs', canActivate: [AuthGuardService], component: ProgramsComponent },
  { path: 'programs/new', canActivate: [AuthGuardService], component: ProgramFormComponent },
  { path: 'programs/view/:id', canActivate: [AuthGuardService], component: ProgramComponent },
  { path: '', redirectTo: 'programs', pathMatch: 'full' },
  { path: '**', redirectTo: 'programs' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
