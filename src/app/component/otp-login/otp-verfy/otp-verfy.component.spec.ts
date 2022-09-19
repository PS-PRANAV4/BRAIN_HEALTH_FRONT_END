import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtpVerfyComponent } from './otp-verfy.component';

describe('OtpVerfyComponent', () => {
  let component: OtpVerfyComponent;
  let fixture: ComponentFixture<OtpVerfyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtpVerfyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OtpVerfyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
