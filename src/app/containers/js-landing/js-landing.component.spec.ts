import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JsLandingComponent } from './js-landing.component';

describe('JsLandingComponent', () => {
  let component: JsLandingComponent;
  let fixture: ComponentFixture<JsLandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JsLandingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JsLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
