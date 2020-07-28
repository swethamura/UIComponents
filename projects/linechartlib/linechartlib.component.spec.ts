import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinechartlibComponent } from './linechartlib.component';

describe('LinechartlibComponent', () => {
  let component: LinechartlibComponent;
  let fixture: ComponentFixture<LinechartlibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinechartlibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinechartlibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
