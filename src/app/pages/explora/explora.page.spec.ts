import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExploraPage } from './explora.page';

describe('ExploraPage', () => {
  let component: ExploraPage;
  let fixture: ComponentFixture<ExploraPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ExploraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
