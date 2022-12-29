import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginOutcomeComponent } from './login-outcome.component';

describe('LoginOutcomeComponent', () => {
  let component: LoginOutcomeComponent;
  let fixture: ComponentFixture<LoginOutcomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginOutcomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginOutcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
