import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StocklibComponent } from './stocklib.component';

describe('StocklibComponent', () => {
  let component: StocklibComponent;
  let fixture: ComponentFixture<StocklibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StocklibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StocklibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
