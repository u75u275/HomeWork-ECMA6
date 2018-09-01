import {Component, OnInit} from '@angular/core';
import {interval, Observable} from 'rxjs';
import {take} from 'rxjs/operators';

@Component({
  selector: 'app-hw19-in-out2',
  templateUrl: './hw19-in-out2.component.html',
  styleUrls: ['./hw19-in-out2.component.css']
})
export class Hw19InOut2Component implements OnInit {

  myObservable$: Observable<number>;
  myObserver: {
                next: (value) => void;
                complete: () => void;
                error: (value) => void;
              } = {
                next: x => console.log('out$ NEXT  : ' + x),
                error: err => console.error('ERROR : ' + err),
                complete: () => console.log('COMPLETE')
              };
  myObserver2: {
    next: (value) => void;
    complete: () => void;
    error: (value) => void;
  } = {
    next: x => console.log('inner$ NEXT : ' + x),
    error: err => console.error('ERROR : ' + err),
    complete: () => console.log('COMPLETE')
  };

  constructor() {

  }

  ngOnInit() {

    const out$ = interval(1000).pipe(take(3));
    const inner$ = interval(500).pipe(take(4));
    out$.subscribe(this.myObserver);
    inner$.subscribe(this.myObserver);

  }

}
