import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConfiguracionAlquilarPage } from './configuracion-alquilar.page';

describe('ConfiguracionAlquilarPage', () => {
  let component: ConfiguracionAlquilarPage;
  let fixture: ComponentFixture<ConfiguracionAlquilarPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ConfiguracionAlquilarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
