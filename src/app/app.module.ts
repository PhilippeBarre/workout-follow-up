import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from '@core/core.module';
import { HeaderComponent } from '@components/header/header.component';
import { SharedModule } from '@shared/shared.module';
import { SigninComponent } from './components/auth/signin/signin.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { ProgramsComponent } from './components/programs/programs.component';
import { ProgramComponent } from './components/programs/program/program.component';
import { ProgramFormComponent } from './components/programs/program-form/program-form.component';
import { SignupModule } from '@components/auth/signup/signup.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SigninComponent,
    SignupComponent,
    ProgramsComponent,
    ProgramComponent,
    ProgramFormComponent
  ],
  imports: [
    AppRoutingModule,
    CoreModule,
    SharedModule,
    SignupModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
