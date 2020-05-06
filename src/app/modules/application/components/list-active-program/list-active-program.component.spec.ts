import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListActiveProgramComponent } from './list-active-program.component';

describe('ListActiveProgramComponent', () => {
  let component: ListActiveProgramComponent;
  let fixture: ComponentFixture<ListActiveProgramComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListActiveProgramComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListActiveProgramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
