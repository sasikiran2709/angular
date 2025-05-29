import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientDetailsListComponent } from './patient-details-list.component';

describe('PatientDetailsListComponent', () => {
  let component: PatientDetailsListComponent;
  let fixture: ComponentFixture<PatientDetailsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PatientDetailsListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatientDetailsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
