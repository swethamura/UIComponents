import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodedisplayComponent } from './codedisplay.component';

describe('CodedisplayComponent', () => {
  let component: CodedisplayComponent;
  let fixture: ComponentFixture<CodedisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodedisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodedisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
