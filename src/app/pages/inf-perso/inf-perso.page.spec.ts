import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InfPersoPage } from './inf-perso.page';

describe('InfPersoPage', () => {
  let component: InfPersoPage;
  let fixture: ComponentFixture<InfPersoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(InfPersoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
