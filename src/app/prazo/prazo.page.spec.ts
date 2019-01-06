import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrazoPage } from './prazo.page';

describe('PrazoPage', () => {
  let component: PrazoPage;
  let fixture: ComponentFixture<PrazoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrazoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrazoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
