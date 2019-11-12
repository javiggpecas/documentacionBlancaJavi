import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CssLandingComponent } from './css-landing.component';

describe('CssLandingComponent', () => {
  let component: CssLandingComponent;
  let fixture: ComponentFixture<CssLandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CssLandingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CssLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
