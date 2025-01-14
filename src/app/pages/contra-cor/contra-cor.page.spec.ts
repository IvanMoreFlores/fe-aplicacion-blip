import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContraCorPage } from './contra-cor.page';

describe('ContraCorPage', () => {
  let component: ContraCorPage;
  let fixture: ComponentFixture<ContraCorPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ContraCorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
