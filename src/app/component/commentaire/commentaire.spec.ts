import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Commentaire } from './commentaire';

describe('Commentaire', () => {
  let component: Commentaire;
  let fixture: ComponentFixture<Commentaire>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Commentaire]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Commentaire);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
