import { NgModule } from '@angular/core';

import { CdkTableModule } from '@angular/cdk/table';

import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MatSelectModule } from '@angular/material/select';
import { MatChipsModule } from '@angular/material/chips';

import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatBadgeModule } from '@angular/material/badge';


const USED_MODULES = [
  CdkTableModule,
  MatButtonModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatNativeDateModule,
  MatTableModule,
  MatSortModule,
  MatPaginatorModule,
  MatSidenavModule,
  MatDatepickerModule,
  MatRadioModule,
  MatCheckboxModule,
  MatFormFieldModule,
  FlexLayoutModule,
  NoopAnimationsModule,
  MatCardModule,
  MatToolbarModule,
  MatDialogModule,
  MatSelectModule,
  MatChipsModule,
  MatMenuModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatTooltipModule,
  MatExpansionModule,
  MatBadgeModule
];

@NgModule({
  imports: USED_MODULES,
  exports: USED_MODULES
})

export class AppMaterialModule { }
