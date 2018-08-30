import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {skip, take} from 'rxjs/operators';
import {pipe} from 'rxjs';

interface ObserverType {
  next: (value) => void;
  complete: () => void;
  error: (value) => void;
}


@Component({
  selector: 'app-first-observable15',
  templateUrl: './first-observable15.component.html',
  styleUrls: ['./first-observable15.component.css']
})

export class FirstObservable15Component implements OnInit {

  myObservable: Observable<number>;
  myObserver: ObserverType;
  sequenceEmitterTemplate: (observer: ObserverType) => void;         // Template for Emmitter function


  subsriber1(observer: ObserverType) {                              // inner part of Observable - my emitter
    let sequenceGenerator = 0;
    const timerId = setInterval(() => {
      observer.next(sequenceGenerator);
      sequenceGenerator++;
    }, 1500);
    return () => {
      clearInterval(timerId);
      console.log('sequenceEmitter1`s unsubscribed');
    };
  }


  constructor() {
  }

  ngOnInit() {

    this.sequenceEmitterTemplate = this.subsriber1;

    this.myObserver = {
      next: x => console.log('NEXT : ' + x),
      error: err => console.error('ERROR : ' + err),
      complete: () => console.log('COMPLETE')
    };

    this.myObservable = new Observable(this.sequenceEmitterTemplate);           // Create observable with apropriate emitter function

    const myComplexOperator = pipe(skip(2), take(5));              // Create my complex operator

    const subscription1 = myComplexOperator(this.myObservable).subscribe(this.myObserver);   // Subscribe

    setInterval(() => subscription1.unsubscribe(), 100001);                     // UnsubScribe
  }

}
