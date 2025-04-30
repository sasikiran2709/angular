import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PateintDetailsComponent } from './pateint-details.component';

describe('PateintDetailsComponent', () => {
  let component: PateintDetailsComponent;
  let fixture: ComponentFixture<PateintDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PateintDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PateintDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
