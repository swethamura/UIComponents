import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardlibComponent } from './dashboardlib.component';

describe('DashboardlibComponent', () => {
  let component: DashboardlibComponent;
  let fixture: ComponentFixture<DashboardlibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardlibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardlibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
