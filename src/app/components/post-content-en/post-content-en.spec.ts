import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostContentEn } from './post-content-en';

describe('PostContentEn', () => {
  let component: PostContentEn;
  let fixture: ComponentFixture<PostContentEn>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostContentEn]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostContentEn);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
