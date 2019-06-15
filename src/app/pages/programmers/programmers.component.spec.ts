import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgrammersComponent } from './programmers.component';

describe('ProgrammersComponent', () => {
  let component: ProgrammersComponent;
  let fixture: ComponentFixture<ProgrammersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgrammersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgrammersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
