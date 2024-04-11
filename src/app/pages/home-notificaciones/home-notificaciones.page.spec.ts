import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeNotificacionesPage } from './home-notificaciones.page';

describe('HomeNotificacionesPage', () => {
  let component: HomeNotificacionesPage;
  let fixture: ComponentFixture<HomeNotificacionesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(HomeNotificacionesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
