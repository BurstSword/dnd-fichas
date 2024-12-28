import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CombatManagerPage } from './combat-manager.page';

describe('CombatManagerPage', () => {
  let component: CombatManagerPage;
  let fixture: ComponentFixture<CombatManagerPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CombatManagerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
