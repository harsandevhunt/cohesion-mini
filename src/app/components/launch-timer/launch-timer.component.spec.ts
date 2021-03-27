import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaunchTimerComponent } from './launch-timer.component';

describe('LaunchTimerComponent', () => {
  let component: LaunchTimerComponent;
  let fixture: ComponentFixture<LaunchTimerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaunchTimerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LaunchTimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
