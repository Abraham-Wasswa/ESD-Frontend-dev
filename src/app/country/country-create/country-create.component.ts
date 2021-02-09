import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ErrorHandlerService } from 'src/app/shared/services/error-handler.service';
import { RepositoryService } from 'src/app/shared/services/repository.service';
import { CountryForCreation } from 'src/app/_interfaces/country.model/country.model.module';

@Component({
  selector: 'app-country-create',
  templateUrl: './country-create.component.html',
  styleUrls: ['./country-create.component.css']
})
export class CountryCreateComponent implements OnInit {

  public errorMessage: string = '';

  public countryForm!: FormGroup;

  constructor(private repository: RepositoryService, private errorHandler: ErrorHandlerService, private router: Router, private datePipe: DatePipe) { }

  ngOnInit() {
    this.countryForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.maxLength(60)]),
      dateOfBirth: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required, Validators.maxLength(100)])
    });
  }

  public validateControl = (controlName: string) => {
    if (this.countryForm.controls[controlName].invalid && this.countryForm.controls[controlName].touched)
      return true;

    return false;
  }

  public hasError = (controlName: string, errorName: string) => {
    if (this.countryForm.controls[controlName].hasError(errorName))
      return true;

    return false;
  }

  public executeDatePicker = (event: Date) => {
    this.countryForm.patchValue({ 'dateOfBirth': event });
  }

  public createCountry = (CountryFormValue: any) => {
    if (this.countryForm.valid) {
      this.executeCountryCreation(CountryFormValue);
    }
  }

  private executeCountryCreation = (countryFormValue: { countryName: string; state: string; county: string; city: string; cases: string; deaths: string; date: string | null; }) => {
    const country: CountryForCreation = {
      countryName: countryFormValue.countryName,
      state: countryFormValue.state,
      county: countryFormValue.county,
      city: countryFormValue.city,
      cases: countryFormValue.cases,
      deaths: countryFormValue.deaths,
      date:  this.datePipe.transform(countryFormValue.date, 'yyyy-MM-dd'),
    }

    const apiUrl = 'api/Country';
    this.repository.create(apiUrl, country)
      .subscribe(res => {
        $('#successModal');
      },
      (error => {
        this.errorHandler.handleError(error);
        this.errorMessage = this.errorHandler.errorMessage;
      })
    )
  }

  public redirectToCountryList(){
    this.router.navigate(['/country/list']);
  }

}
