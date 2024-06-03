import { Component } from '@angular/core';
import {
  CountryISO,
  SearchCountryField,
  PhoneNumberFormat
} from "ngx-intl-tel-input-gg";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'code';
  separateDialCode = false;
	SearchCountryField = SearchCountryField;
	CountryISO = CountryISO;
  PhoneNumberFormat = PhoneNumberFormat;
	preferredCountries: CountryISO[] = [CountryISO.UnitedStates, CountryISO.UnitedKingdom]
	phone = '';


 constructor () {
  console.log(this.phone)
 }

}
