import { DatePipe } from "@angular/common";
import { ModuleWithComponentFactories } from "@angular/core";

export interface Country{
  countryID : string;
  countryName : string;
  state : string;
  county : string;
  city : string;
  cases : string;
  deaths : string;
  date : Date;
}

export interface CountryForCreation{
  countryName : string;
  state : string;
  county : string;
  city : string;
  cases : string;
  deaths : string;
  date : any;
}

