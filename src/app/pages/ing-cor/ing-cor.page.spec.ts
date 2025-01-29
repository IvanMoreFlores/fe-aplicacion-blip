import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IngCorPage } from './ing-cor.page';

describe('IngCorPage', () => {
  let component: IngCorPage;
  let fixture: ComponentFixture<IngCorPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(IngCorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
