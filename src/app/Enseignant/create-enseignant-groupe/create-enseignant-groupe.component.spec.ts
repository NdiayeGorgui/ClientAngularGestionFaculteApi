import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEnseignantGroupeComponent } from './create-enseignant-groupe.component';

describe('CreateEnseignantGroupeComponent', () => {
  let component: CreateEnseignantGroupeComponent;
  let fixture: ComponentFixture<CreateEnseignantGroupeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateEnseignantGroupeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateEnseignantGroupeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
