import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FirstObservable15Component } from './first-observable15/first-observable15.component';
import { SecondErrorGeneratorComponent } from './second-error-generator/second-error-generator.component';
import {RouterModule} from '@angular/router';
import {routes} from './app.routes';


@NgModule({
  declarations: [
    AppComponent,
    FirstObservable15Component,
    SecondErrorGeneratorComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
