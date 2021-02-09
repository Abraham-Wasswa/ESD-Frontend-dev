import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountryListComponent } from './country-list/country-list.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [CountryListComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      { path : 'list', component : CountryListComponent },
    ])
  ]
})
export class CountryModule { }
