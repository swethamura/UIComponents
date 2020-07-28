import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AreachartlibComponent } from './areachartlib.component';

describe('AreachartlibComponent', () => {
  let component: AreachartlibComponent;
  let fixture: ComponentFixture<AreachartlibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AreachartlibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AreachartlibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
