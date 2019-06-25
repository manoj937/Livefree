import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuggestionsInfoComponent } from './suggestions-info.component';

describe('SuggestionsInfoComponent', () => {
  let component: SuggestionsInfoComponent;
  let fixture: ComponentFixture<SuggestionsInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuggestionsInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuggestionsInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
