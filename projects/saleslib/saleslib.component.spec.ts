import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaleslibComponent } from './saleslib.component';

describe('SaleslibComponent', () => {
  let component: SaleslibComponent;
  let fixture: ComponentFixture<SaleslibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaleslibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaleslibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
