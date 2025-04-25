import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientgroupComponent } from './patientgroup.component';

describe('PatientgroupComponent', () => {
  let component: PatientgroupComponent;
  let fixture: ComponentFixture<PatientgroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PatientgroupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatientgroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
