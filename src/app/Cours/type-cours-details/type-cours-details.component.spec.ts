import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeCoursDetailsComponent } from './type-cours-details.component';

describe('TypeCoursDetailsComponent', () => {
  let component: TypeCoursDetailsComponent;
  let fixture: ComponentFixture<TypeCoursDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypeCoursDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeCoursDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
