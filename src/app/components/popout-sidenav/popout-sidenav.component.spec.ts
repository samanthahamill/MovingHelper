import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopoutSidenavComponent } from './popout-sidenav.component';

describe('PopoutSidenavComponent', () => {
  let component: PopoutSidenavComponent;
  let fixture: ComponentFixture<PopoutSidenavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PopoutSidenavComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopoutSidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
