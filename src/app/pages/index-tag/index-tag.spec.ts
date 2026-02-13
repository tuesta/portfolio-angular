import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexTag } from './index-tag';

describe('IndexTag', () => {
  let component: IndexTag;
  let fixture: ComponentFixture<IndexTag>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndexTag]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndexTag);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
