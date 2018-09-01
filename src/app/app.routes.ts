import { Routes } from '@angular/router';
import {FirstObservable15Component} from './first-observable15/first-observable15.component';
import {SecondErrorGeneratorComponent} from './second-error-generator/second-error-generator.component';
import {Hw19InOut2Component} from './hw19-in-out2/hw19-in-out2.component';

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
  },
  {
    path: '19',
    component: Hw19InOut2Component
  }

];
