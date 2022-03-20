import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchEnseignantComponent } from './search-enseignant.component';

describe('SearchEnseignantComponent', () => {
  let component: SearchEnseignantComponent;
  let fixture: ComponentFixture<SearchEnseignantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchEnseignantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchEnseignantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
