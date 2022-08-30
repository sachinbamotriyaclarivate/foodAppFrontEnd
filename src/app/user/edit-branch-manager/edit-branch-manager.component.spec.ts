import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBranchManagerComponent } from './edit-branch-manager.component';

describe('EditBranchManagerComponent', () => {
  let component: EditBranchManagerComponent;
  let fixture: ComponentFixture<EditBranchManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditBranchManagerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditBranchManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
