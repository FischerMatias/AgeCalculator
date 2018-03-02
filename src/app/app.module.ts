import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


import { AppComponent } from './app.component';
import {YearsCalculatorComponent} from './components/yearscalculator/years-calculator.component';
import {CountryDataService} from './services/country.data.service';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    YearsCalculatorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot()
  ],
  providers: [CountryDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
