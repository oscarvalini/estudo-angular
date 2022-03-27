import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DicionarioCadastroComponent } from './dicionario-cadastro.component';

describe('DicionarioCadastroComponent', () => {
  let component: DicionarioCadastroComponent;
  let fixture: ComponentFixture<DicionarioCadastroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DicionarioCadastroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DicionarioCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
