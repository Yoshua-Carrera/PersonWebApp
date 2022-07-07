import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonComponent } from './person/person.component';

import { MatCardModule } from '@angular/material/card';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { ReactiveFormsModule } from '@angular/forms';
import { PersonFilterPipe } from './pipes/person-filter.pipe';

@NgModule({
  declarations: [AppComponent, PersonComponent, PersonFilterPipe],
  imports: [BrowserModule, AppRoutingModule, MatCardModule, MatAutocompleteModule, ReactiveFormsModule ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
