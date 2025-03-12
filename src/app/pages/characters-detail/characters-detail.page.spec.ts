import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CharactersDetailPage } from './characters-detail.page';

describe('CharactersDetailPage', () => {
  let component: CharactersDetailPage;
  let fixture: ComponentFixture<CharactersDetailPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CharactersDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
