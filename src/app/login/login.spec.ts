import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Login } from './login';
import { By } from '@angular/platform-browser';

describe('Login', () => {
  let component: Login;
  let fixture: ComponentFixture<Login>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Login]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Login);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call onSubmit and form should be valid', () => {
    component.loginForm.controls['username'].setValue('test');
    component.loginForm.controls['password'].setValue('123456');
    expect(component.loginForm.valid).toBeTruthy();
  });

  it('should call submit and log value if valid', () => {
    spyOn(console, 'log');
  
    component.loginForm.setValue({
      email: 'john@gmail.com',
      password: '123456',
    });
  
    const formEL = fixture.debugElement.query(By.css('form'));
    formEL.triggerEventHandler('ngSubmit', null);
  
    expect(console.log).toHaveBeenCalledWith('Form Submitted!', {
      email: 'john@gmail.com',
      password: '123456',
    });
  });
});
