import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PruebaDosComponent } from './reactive-form-1.component';

describe('PruebaDosComponent', () => {
  let component: PruebaDosComponent;
  let fixture: ComponentFixture<PruebaDosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PruebaDosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PruebaDosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
