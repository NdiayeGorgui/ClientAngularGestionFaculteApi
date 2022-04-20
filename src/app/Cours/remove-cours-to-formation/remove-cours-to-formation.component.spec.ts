import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveCoursToFormationComponent } from './remove-cours-to-formation.component';

describe('RemoveCoursToFormationComponent', () => {
  let component: RemoveCoursToFormationComponent;
  let fixture: ComponentFixture<RemoveCoursToFormationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemoveCoursToFormationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveCoursToFormationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
