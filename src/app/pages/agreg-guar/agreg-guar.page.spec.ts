import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AgregGuarPage } from './agreg-guar.page';

describe('AgregGuarPage', () => {
  let component: AgregGuarPage;
  let fixture: ComponentFixture<AgregGuarPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AgregGuarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
