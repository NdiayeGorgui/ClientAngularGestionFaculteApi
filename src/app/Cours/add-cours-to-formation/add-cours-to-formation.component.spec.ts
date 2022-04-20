import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCoursToFormationComponent } from './add-cours-to-formation.component';

describe('AddCoursToFormationComponent', () => {
  let component: AddCoursToFormationComponent;
  let fixture: ComponentFixture<AddCoursToFormationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCoursToFormationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCoursToFormationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
