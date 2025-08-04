import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Parent } from './parent';
import { Child } from '../child/child';
import { By } from '@angular/platform-browser';

describe('ParentComponent', () => {
  let component: Parent;
  let fixture: ComponentFixture<Parent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Parent,Child]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Parent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should pass input name to child component', () => {
    const childDebugEl = fixture.debugElement.query(By.directive(Child));
    const childComponent = childDebugEl.componentInstance as Child;

    expect(childComponent.name).toBe('Nozi');
  });

  it('should update message when child emits event',() => {
    const childDebugEl = fixture.debugElement.query(By.directive(Child));
    const childComponent = childDebugEl.componentInstance as Child;

    childComponent.notifyParent.emit('Hello from Nozi');
    fixture.detectChanges();

    const p = fixture.nativeElement.querySelector('.msg');
    expect(p.textContent).toBe('Hello from Nozi');
  });
});
