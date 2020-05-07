import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MakeDepositComponent } from './make-deposit.component';

describe('MakeDepositComponent', () => {
  let component: MakeDepositComponent;
  let fixture: ComponentFixture<MakeDepositComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MakeDepositComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MakeDepositComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
