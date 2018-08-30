import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstObservable15Component } from './first-observable15.component';

describe('FirstObservable15Component', () => {
  let component: FirstObservable15Component;
  let fixture: ComponentFixture<FirstObservable15Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstObservable15Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstObservable15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
