import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HousingEntryComponent } from './housing-entry.component';

describe('HousingEntryComponent', () => {
  let component: HousingEntryComponent;
  let fixture: ComponentFixture<HousingEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HousingEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HousingEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
