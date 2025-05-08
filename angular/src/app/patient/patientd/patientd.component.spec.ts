import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientdComponent } from './patientd.component';

describe('PatientdComponent', () => {
  let component: PatientdComponent;
  let fixture: ComponentFixture<PatientdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PatientdComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatientdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
