import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchGroupeEnseignantComponent } from './search-groupe-enseignant.component';

describe('SearchGroupeEnseignantComponent', () => {
  let component: SearchGroupeEnseignantComponent;
  let fixture: ComponentFixture<SearchGroupeEnseignantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchGroupeEnseignantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchGroupeEnseignantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
