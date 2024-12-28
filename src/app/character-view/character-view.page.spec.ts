import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CharacterViewPage } from './character-view.page';

describe('CharacterViewPage', () => {
  let component: CharacterViewPage;
  let fixture: ComponentFixture<CharacterViewPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterViewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
