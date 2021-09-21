import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Graphics3Component } from './graphics3.component';

describe('Graphics3Component', () => {
  let component: Graphics3Component;
  let fixture: ComponentFixture<Graphics3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Graphics3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Graphics3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
