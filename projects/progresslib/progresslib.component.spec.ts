import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgresslibComponent } from './progresslib.component';

describe('ProgresslibComponent', () => {
  let component: ProgresslibComponent;
  let fixture: ComponentFixture<ProgresslibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgresslibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgresslibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
