import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StyleToggleComponent } from './style-toggle.component';

describe('StyleToggleComponent', () => {
  let component: StyleToggleComponent;
  let fixture: ComponentFixture<StyleToggleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StyleToggleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StyleToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
