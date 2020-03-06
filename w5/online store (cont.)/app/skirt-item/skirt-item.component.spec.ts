import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkirtItemComponent } from './skirt-item.component';

describe('SkirtItemComponent', () => {
  let component: SkirtItemComponent;
  let fixture: ComponentFixture<SkirtItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkirtItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkirtItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
