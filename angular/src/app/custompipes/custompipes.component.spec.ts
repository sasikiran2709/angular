import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustompipesComponent } from './custompipes.component';

describe('CustompipesComponent', () => {
  let component: CustompipesComponent;
  let fixture: ComponentFixture<CustompipesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustompipesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustompipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
