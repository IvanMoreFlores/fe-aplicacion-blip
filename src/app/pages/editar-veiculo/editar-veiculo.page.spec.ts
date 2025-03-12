import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditarVeiculoPage } from './editar-veiculo.page';

describe('EditarVeiculoPage', () => {
  let component: EditarVeiculoPage;
  let fixture: ComponentFixture<EditarVeiculoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EditarVeiculoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
