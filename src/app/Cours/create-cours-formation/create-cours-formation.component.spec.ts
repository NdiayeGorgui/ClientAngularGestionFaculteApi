import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCoursFormationComponent } from './create-cours-formation.component';

describe('CreateCoursFormationComponent', () => {
  let component: CreateCoursFormationComponent;
  let fixture: ComponentFixture<CreateCoursFormationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateCoursFormationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCoursFormationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
