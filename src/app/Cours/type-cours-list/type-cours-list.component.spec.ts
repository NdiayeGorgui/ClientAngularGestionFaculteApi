import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeCoursListComponent } from './type-cours-list.component';

describe('TypeCoursListComponent', () => {
  let component: TypeCoursListComponent;
  let fixture: ComponentFixture<TypeCoursListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypeCoursListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeCoursListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
