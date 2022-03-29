import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DicionarioTextoCadastroComponent } from './dicionario-texto-cadastro.component';

describe('DicionarioTextoCadastroComponent', () => {
  let component: DicionarioTextoCadastroComponent;
  let fixture: ComponentFixture<DicionarioTextoCadastroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DicionarioTextoCadastroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DicionarioTextoCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
