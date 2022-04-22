import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchRoleUsersComponent } from './search-role-users.component';

describe('SearchRoleUsersComponent', () => {
  let component: SearchRoleUsersComponent;
  let fixture: ComponentFixture<SearchRoleUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchRoleUsersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchRoleUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
