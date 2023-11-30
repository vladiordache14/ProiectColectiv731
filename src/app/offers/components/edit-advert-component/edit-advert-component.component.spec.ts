import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAdvertComponentComponent } from './edit-advert-component.component';

describe('EditAdvertComponentComponent', () => {
  let component: EditAdvertComponentComponent;
  let fixture: ComponentFixture<EditAdvertComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditAdvertComponentComponent]
    });
    fixture = TestBed.createComponent(EditAdvertComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
