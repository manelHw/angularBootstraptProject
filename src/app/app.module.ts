import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CountryPickerComponent } from './country-picker/country-picker.component';
import { WizzardComponent } from './wizzard/wizzard.component';
import { AdressComponent } from './adress/adress.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PersonalComponent } from './personal/personal.component';
import { ResultComponent } from './result/result.component';
import { WorkComponent } from './work/work.component';
import { WorkflowComponent } from './workflow/workflow.component';
import { NavtabComponent } from './navtab/navtab.component';


@NgModule({
  declarations: [
    AppComponent,
    CountryPickerComponent,
    WizzardComponent,
    AdressComponent,
    NavbarComponent,
    PersonalComponent,
    ResultComponent,
    WorkComponent,
    WorkflowComponent,
    NavtabComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
