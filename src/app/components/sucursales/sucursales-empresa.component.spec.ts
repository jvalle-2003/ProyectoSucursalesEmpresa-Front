import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SucursalesEmpresaComponent } from './sucursales-empresa.component';

describe('SucursalesEmpresaComponent', () => {
  let component: SucursalesEmpresaComponent;
  let fixture: ComponentFixture<SucursalesEmpresaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SucursalesEmpresaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SucursalesEmpresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
