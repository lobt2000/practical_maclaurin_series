import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableOfValueComponent } from './table-of-value.component';

describe('TableOfValueComponent', () => {
  let component: TableOfValueComponent;
  let fixture: ComponentFixture<TableOfValueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableOfValueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableOfValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
