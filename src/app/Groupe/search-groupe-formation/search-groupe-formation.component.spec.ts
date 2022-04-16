import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchGroupeFormationComponent } from './search-groupe-formation.component';

describe('SearchGroupeFormationComponent', () => {
  let component: SearchGroupeFormationComponent;
  let fixture: ComponentFixture<SearchGroupeFormationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchGroupeFormationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchGroupeFormationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
