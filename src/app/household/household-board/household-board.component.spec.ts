import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseholdBoardComponent } from './household-board.component';

describe('HouseholdBoardComponent', () => {
  let component: HouseholdBoardComponent;
  let fixture: ComponentFixture<HouseholdBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HouseholdBoardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HouseholdBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
