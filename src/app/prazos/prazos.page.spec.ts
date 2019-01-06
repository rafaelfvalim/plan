import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrazosPage } from './prazos.page';

describe('PrazosPage', () => {
  let component: PrazosPage;
  let fixture: ComponentFixture<PrazosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrazosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrazosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
