import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyAndDeactivateButtonsComponent } from './modify-and-deactivate-buttons.component';

describe('ModifyAndDeactivateButtonsComponent', () => {
  let component: ModifyAndDeactivateButtonsComponent;
  let fixture: ComponentFixture<ModifyAndDeactivateButtonsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModifyAndDeactivateButtonsComponent]
    });
    fixture = TestBed.createComponent(ModifyAndDeactivateButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
