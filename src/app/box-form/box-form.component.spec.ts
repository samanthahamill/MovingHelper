import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxFormComponent } from './box-form.component';

describe('BoxFormComponent', () => {
  let component: BoxFormComponent;
  let fixture: ComponentFixture<BoxFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BoxFormComponent]
    });
    fixture = TestBed.createComponent(BoxFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
