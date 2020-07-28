import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablelibComponent } from './tablelib.component';

describe('TablelibComponent', () => {
  let component: TablelibComponent;
  let fixture: ComponentFixture<TablelibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablelibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablelibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
