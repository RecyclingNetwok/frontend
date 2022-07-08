import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FloatFrnComponent } from './float-frn.component';

describe('FloatFrnComponent', () => {
  let component: FloatFrnComponent;
  let fixture: ComponentFixture<FloatFrnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FloatFrnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FloatFrnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
