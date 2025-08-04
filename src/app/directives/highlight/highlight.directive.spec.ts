import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HighlightDirective } from './highlight.directive';
import { By } from '@angular/platform-browser';
import { Child } from '../../child/child';

describe('HighlightDirective', () => {
  let fixture: ComponentFixture<Child>;

  beforeEach(() => {
    TestBed.configureTestingModule({ });

    fixture = TestBed.createComponent(Child);
    fixture.detectChanges();
  });

  // it('should create an instance', () => {
  //   const directive = new HighlightDirective();
  //   expect(directive).toBeTruthy();
  // });
  
  it('should highlight on mouse enter', () => {
    const p = fixture.debugElement.query(By.css('.paragraph'));
    p.triggerEventHandler('mouseenter');
    expect(p.nativeElement.style.backgroundColor).toBe('yellow');
  });

  it('should highlight on mouse leave', () => {
    const p = fixture.debugElement.query(By.css('.paragraph'));
    p.triggerEventHandler('mousleave');
    expect(p.nativeElement.style.backgroundColor).toBe('');
  });
});
