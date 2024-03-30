import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CheckinDetailComponent } from './checkin-detail.component';

describe('CheckinDetailComponent', () => {
  let component: CheckinDetailComponent;
  let fixture: ComponentFixture<CheckinDetailComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckinDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckinDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
