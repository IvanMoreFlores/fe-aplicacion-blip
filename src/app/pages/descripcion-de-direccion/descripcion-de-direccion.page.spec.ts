import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DescripcionDeDireccionPage } from './descripcion-de-direccion.page';

describe('DescripcionDeDireccionPage', () => {
  let component: DescripcionDeDireccionPage;
  let fixture: ComponentFixture<DescripcionDeDireccionPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DescripcionDeDireccionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
