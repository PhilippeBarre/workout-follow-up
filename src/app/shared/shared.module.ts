import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppMaterialModule } from '@shared/app-material/app-material.module';

const ImportExport = [
  CommonModule,
  // TranslateModule,
  AppMaterialModule,
  FormsModule,
  // AppToasterModule
];

@NgModule({
  declarations: [],
  imports: [
    ImportExport
  ],
  exports: [
    ImportExport
  ]
})
export class SharedModule { }
