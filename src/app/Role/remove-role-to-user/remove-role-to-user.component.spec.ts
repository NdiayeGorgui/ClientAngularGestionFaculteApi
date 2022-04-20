import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveRoleToUserComponent } from './remove-role-to-user.component';

describe('RemoveRoleToUserComponent', () => {
  let component: RemoveRoleToUserComponent;
  let fixture: ComponentFixture<RemoveRoleToUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemoveRoleToUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveRoleToUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
