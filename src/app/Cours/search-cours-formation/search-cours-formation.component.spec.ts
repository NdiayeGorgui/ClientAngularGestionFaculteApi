import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchCoursFormationComponent } from './search-cours-formation.component';

describe('SearchCoursFormationComponent', () => {
  let component: SearchCoursFormationComponent;
  let fixture: ComponentFixture<SearchCoursFormationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchCoursFormationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchCoursFormationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
