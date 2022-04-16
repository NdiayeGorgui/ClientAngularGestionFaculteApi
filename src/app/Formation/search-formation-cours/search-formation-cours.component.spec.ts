import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchFormationCoursComponent } from './search-formation-cours.component';

describe('SearchFormationCoursComponent', () => {
  let component: SearchFormationCoursComponent;
  let fixture: ComponentFixture<SearchFormationCoursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchFormationCoursComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchFormationCoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
