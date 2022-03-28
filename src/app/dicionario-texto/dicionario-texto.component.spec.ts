import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DicionarioTextoComponent } from './dicionario-texto.component';

describe('DicionarioTextoComponent', () => {
  let component: DicionarioTextoComponent;
  let fixture: ComponentFixture<DicionarioTextoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DicionarioTextoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DicionarioTextoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
