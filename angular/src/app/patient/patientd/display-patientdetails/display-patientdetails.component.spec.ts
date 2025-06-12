import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayPatientdetailsComponent } from './display-patientdetails.component';

describe('DisplayPatientdetailsComponent', () => {
  let component: DisplayPatientdetailsComponent;
  let fixture: ComponentFixture<DisplayPatientdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisplayPatientdetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayPatientdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
