import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AudienciaPage } from './audiencia.page';

describe('AudienciaPage', () => {
  let component: AudienciaPage;
  let fixture: ComponentFixture<AudienciaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AudienciaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AudienciaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
