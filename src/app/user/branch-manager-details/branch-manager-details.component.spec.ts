import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BranchManagerDetailsComponent } from './branch-manager-details.component';

describe('BranchManagerDetailsComponent', () => {
  let component: BranchManagerDetailsComponent;
  let fixture: ComponentFixture<BranchManagerDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BranchManagerDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BranchManagerDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
