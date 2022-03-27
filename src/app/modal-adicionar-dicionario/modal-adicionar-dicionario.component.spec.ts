import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAdicionarDicionarioComponent } from './modal-adicionar-dicionario.component';

describe('ModalAdicionarDicionarioComponent', () => {
  let component: ModalAdicionarDicionarioComponent;
  let fixture: ComponentFixture<ModalAdicionarDicionarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalAdicionarDicionarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalAdicionarDicionarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
