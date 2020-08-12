import { NgModule, Optional, SkipSelf, APP_INITIALIZER, Injector } from '@angular/core';
import { CommonModule, LOCATION_INITIALIZED } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthService } from '@core/services/auth.service';
import { AuthGuardService } from '@core/services/auth-guard.service';
import { ProgramsService } from '@core/services/programs.service';

// ngx
import { TranslateModule, TranslateLoader, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

// http
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { environment } from 'environments/environment';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: appInitializerFactory,
      deps: [TranslateService, Injector],
      multi: true
    },
    AuthService,
    AuthGuardService,
    ProgramsService
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded.');
    }
  }
}

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

export function appInitializerFactory(translate: TranslateService, injector: Injector) {
  return () => new Promise<any>((resolve: any) => {
    const locationInitialized = injector.get(LOCATION_INITIALIZED, Promise.resolve(null));
    locationInitialized.then(() => {
      translate.setDefaultLang(environment.defaultLanguage);
      translate.use(environment.defaultLanguage).subscribe(
        () => { },
        () => { },
        () => {
        resolve(null);
      });
    });
  });
}
