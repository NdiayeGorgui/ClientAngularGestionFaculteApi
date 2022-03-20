import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnseignantDeatailsComponent } from './enseignant-deatails.component';

describe('EnseignantDeatailsComponent', () => {
  let component: EnseignantDeatailsComponent;
  let fixture: ComponentFixture<EnseignantDeatailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnseignantDeatailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnseignantDeatailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
