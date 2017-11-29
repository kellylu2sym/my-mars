import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemComplianceComponent } from './system-compliance.component';

describe('SystemComplianceComponent', () => {
  let component: SystemComplianceComponent;
  let fixture: ComponentFixture<SystemComplianceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SystemComplianceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SystemComplianceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
