import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HoribarlibComponent } from './horibarlib.component';

describe('HoribarlibComponent', () => {
  let component: HoribarlibComponent;
  let fixture: ComponentFixture<HoribarlibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HoribarlibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HoribarlibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
