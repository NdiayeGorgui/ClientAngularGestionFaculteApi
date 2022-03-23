import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateTypeCoursComponent } from './update-type-cours.component';

describe('UpdateTypeCoursComponent', () => {
  let component: UpdateTypeCoursComponent;
  let fixture: ComponentFixture<UpdateTypeCoursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateTypeCoursComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateTypeCoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
