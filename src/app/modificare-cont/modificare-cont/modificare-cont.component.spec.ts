/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ModificareContComponent } from './modificare-cont.component';

describe('ModificareContComponent', () => {
  let component: ModificareContComponent;
  let fixture: ComponentFixture<ModificareContComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModificareContComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificareContComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
