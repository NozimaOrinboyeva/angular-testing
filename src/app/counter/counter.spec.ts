import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Counter } from './counter';

describe('Counter Component', () => {
  let component: Counter;
  let fixture: ComponentFixture<Counter>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [Counter],
    });

    fixture = TestBed.createComponent(Counter);
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });  

  it('should have initial count of 0', () => {
    expect(component.count).toBe(0);
  });

  it('should increment count by 1', () => {
    component.increment();
    expect(component.count).toBe(1);
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  })
  it('should decrement count by 1', () => {
    component.decrement();
    expect(component.count).toBe(-1);
  });
});
