import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectorBoardComponent } from './collector-board.component';

describe('CollectorBoardComponent', () => {
  let component: CollectorBoardComponent;
  let fixture: ComponentFixture<CollectorBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollectorBoardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CollectorBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
