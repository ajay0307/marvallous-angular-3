import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Thor1Component } from './thor1.component';

describe('Thor1Component', () => {
  let component: Thor1Component;
  let fixture: ComponentFixture<Thor1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Thor1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Thor1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
