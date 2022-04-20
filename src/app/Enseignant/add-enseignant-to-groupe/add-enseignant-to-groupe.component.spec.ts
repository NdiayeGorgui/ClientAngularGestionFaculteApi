import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEnseignantToGroupeComponent } from './add-enseignant-to-groupe.component';

describe('AddEnseignantToGroupeComponent', () => {
  let component: AddEnseignantToGroupeComponent;
  let fixture: ComponentFixture<AddEnseignantToGroupeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEnseignantToGroupeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEnseignantToGroupeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
