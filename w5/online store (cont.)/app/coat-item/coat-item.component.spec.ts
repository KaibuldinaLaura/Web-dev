import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoatItemComponent } from './coat-item.component';

describe('CoatItemComponent', () => {
  let component: CoatItemComponent;
  let fixture: ComponentFixture<CoatItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoatItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoatItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
