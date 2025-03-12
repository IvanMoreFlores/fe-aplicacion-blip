import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NotificacionesConfiPage } from './notificaciones-confi.page';

describe('NotificacionesConfiPage', () => {
  let component: NotificacionesConfiPage;
  let fixture: ComponentFixture<NotificacionesConfiPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NotificacionesConfiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
