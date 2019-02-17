import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HousingSearchComponent } from './housing-search.component';

describe('HousingSearchComponent', () => {
  let component: HousingSearchComponent;
  let fixture: ComponentFixture<HousingSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HousingSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HousingSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
