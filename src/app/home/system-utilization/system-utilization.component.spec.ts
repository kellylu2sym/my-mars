import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemUtilizationComponent } from './system-utilization.component';

describe('SystemUtilizationComponent', () => {
  let component: SystemUtilizationComponent;
  let fixture: ComponentFixture<SystemUtilizationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SystemUtilizationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SystemUtilizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
