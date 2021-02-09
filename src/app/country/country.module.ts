import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountryListComponent } from './country-list/country-list.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { CountryCreateComponent } from './country-create/country-create.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [CountryListComponent, CountryCreateComponent],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      { path : 'list', component : CountryListComponent },
      { path : 'create', component : CountryCreateComponent }
    ])
  ]
})
export class CountryModule { }
