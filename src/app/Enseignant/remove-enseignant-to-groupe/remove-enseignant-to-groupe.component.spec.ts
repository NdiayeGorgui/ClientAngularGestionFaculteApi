import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveEnseignantToGroupeComponent } from './remove-enseignant-to-groupe.component';

describe('RemoveEnseignantToGroupeComponent', () => {
  let component: RemoveEnseignantToGroupeComponent;
  let fixture: ComponentFixture<RemoveEnseignantToGroupeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemoveEnseignantToGroupeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveEnseignantToGroupeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
