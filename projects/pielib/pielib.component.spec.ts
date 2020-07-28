import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PielibComponent } from './pielib.component';

describe('PielibComponent', () => {
  let component: PielibComponent;
  let fixture: ComponentFixture<PielibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PielibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PielibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
