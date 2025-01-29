import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NotificacionesNotPage } from './notificaciones-not.page';

describe('NotificacionesNotPage', () => {
  let component: NotificacionesNotPage;
  let fixture: ComponentFixture<NotificacionesNotPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NotificacionesNotPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
