import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EatAndDrinkPageComponent } from './eat-and-drink-page.component';

describe('EatAndDrinkPageComponent', () => {
  let component: EatAndDrinkPageComponent;
  let fixture: ComponentFixture<EatAndDrinkPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EatAndDrinkPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EatAndDrinkPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
