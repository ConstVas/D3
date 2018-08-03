import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MetanitExamplesComponent } from './metanit-examples.component';

describe('MetanitExamplesComponent', () => {
  let component: MetanitExamplesComponent;
  let fixture: ComponentFixture<MetanitExamplesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MetanitExamplesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MetanitExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
