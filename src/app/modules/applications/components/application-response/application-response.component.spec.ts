import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationResponseComponent } from './application-response.component';

describe('ApplicationResponseComponent', () => {
  let component: ApplicationResponseComponent;
  let fixture: ComponentFixture<ApplicationResponseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplicationResponseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationResponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
