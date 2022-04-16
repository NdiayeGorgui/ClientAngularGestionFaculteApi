import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchEnseignantGroupeComponent } from './search-enseignant-groupe.component';

describe('SearchEnseignantGroupeComponent', () => {
  let component: SearchEnseignantGroupeComponent;
  let fixture: ComponentFixture<SearchEnseignantGroupeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchEnseignantGroupeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchEnseignantGroupeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
