import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotaoPadraoComponent } from './botao-padrao.component';

describe('BotaoPadraoComponent', () => {
  let component: BotaoPadraoComponent;
  let fixture: ComponentFixture<BotaoPadraoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotaoPadraoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BotaoPadraoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
