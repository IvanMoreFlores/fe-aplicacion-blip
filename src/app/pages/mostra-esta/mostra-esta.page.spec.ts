import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MostraEstaPage } from './mostra-esta.page';

describe('MostraEstaPage', () => {
  let component: MostraEstaPage;
  let fixture: ComponentFixture<MostraEstaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MostraEstaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
