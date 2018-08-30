import { Routes } from '@angular/router';
import {FirstObservable15Component} from './first-observable15/first-observable15.component';
import {SecondErrorGeneratorComponent} from './second-error-generator/second-error-generator.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: '1',
    component: FirstObservable15Component
  },
  {
    path: '2',
    component: SecondErrorGeneratorComponent
  }

];
