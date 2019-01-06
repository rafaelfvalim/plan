import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessosPage } from './processos.page';

describe('ProcessosPage', () => {
  let component: ProcessosPage;
  let fixture: ComponentFixture<ProcessosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProcessosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcessosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
