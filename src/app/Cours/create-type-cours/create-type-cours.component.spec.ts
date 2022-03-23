import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTypeCoursComponent } from './create-type-cours.component';

describe('CreateTypeCoursComponent', () => {
  let component: CreateTypeCoursComponent;
  let fixture: ComponentFixture<CreateTypeCoursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateTypeCoursComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateTypeCoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
