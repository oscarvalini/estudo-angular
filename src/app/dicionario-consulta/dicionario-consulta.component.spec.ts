import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DicionarioConsultaComponent } from './dicionario-consulta.component';

describe('DicionarioConsultaComponent', () => {
  let component: DicionarioConsultaComponent;
  let fixture: ComponentFixture<DicionarioConsultaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DicionarioConsultaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DicionarioConsultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
