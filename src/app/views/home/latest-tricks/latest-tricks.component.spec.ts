import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestTricksComponent } from './latest-tricks.component';

describe('LatestTricksComponent', () => {
  let component: LatestTricksComponent;
  let fixture: ComponentFixture<LatestTricksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LatestTricksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LatestTricksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
