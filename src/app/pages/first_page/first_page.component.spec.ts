import { ComponentFixture, TestBed } from '@angular/core/testing';

import { First_pageComponent } from '././first_page.component';

describe('First_pageComponent', () => {
  let component: First_pageComponent;
  let fixture: ComponentFixture<First_pageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [First_pageComponent]
    });
    fixture = TestBed.createComponent(First_pageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
