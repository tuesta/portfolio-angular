import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavFilters } from './nav-filters';

describe('NavFilters', () => {
  let component: NavFilters;
  let fixture: ComponentFixture<NavFilters>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavFilters]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavFilters);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
