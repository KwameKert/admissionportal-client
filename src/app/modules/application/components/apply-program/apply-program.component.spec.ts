import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyProgramComponent } from './apply-program.component';

describe('ApplyProgramComponent', () => {
  let component: ApplyProgramComponent;
  let fixture: ComponentFixture<ApplyProgramComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplyProgramComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplyProgramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
