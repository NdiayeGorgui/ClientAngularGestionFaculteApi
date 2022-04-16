import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchCoursEnseignantComponent } from './search-cours-enseignant.component';

describe('SearchCoursEnseignantComponent', () => {
  let component: SearchCoursEnseignantComponent;
  let fixture: ComponentFixture<SearchCoursEnseignantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchCoursEnseignantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchCoursEnseignantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
