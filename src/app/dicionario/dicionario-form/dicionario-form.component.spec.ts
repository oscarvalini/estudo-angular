import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DicionarioFormComponent } from './dicionario-form.component';

describe('DicionarioFormComponent', () => {
  let component: DicionarioFormComponent;
  let fixture: ComponentFixture<DicionarioFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DicionarioFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DicionarioFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
