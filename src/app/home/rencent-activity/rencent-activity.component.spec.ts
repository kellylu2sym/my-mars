import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RencentActivityComponent } from './rencent-activity.component';

describe('RencentActivityComponent', () => {
  let component: RencentActivityComponent;
  let fixture: ComponentFixture<RencentActivityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RencentActivityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RencentActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
