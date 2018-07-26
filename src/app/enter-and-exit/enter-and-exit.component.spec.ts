import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterAndExitComponent } from './enter-and-exit.component';

describe('EnterAndExitComponent', () => {
  let component: EnterAndExitComponent;
  let fixture: ComponentFixture<EnterAndExitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnterAndExitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnterAndExitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
