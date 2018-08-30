import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondErrorGeneratorComponent } from './second-error-generator.component';

describe('SecondErrorGeneratorComponent', () => {
  let component: SecondErrorGeneratorComponent;
  let fixture: ComponentFixture<SecondErrorGeneratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondErrorGeneratorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondErrorGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
