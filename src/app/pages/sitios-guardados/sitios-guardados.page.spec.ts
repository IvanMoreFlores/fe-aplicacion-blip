import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SitiosGuardadosPage } from './sitios-guardados.page';

describe('SitiosGuardadosPage', () => {
  let component: SitiosGuardadosPage;
  let fixture: ComponentFixture<SitiosGuardadosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SitiosGuardadosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
