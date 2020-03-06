import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JeansItemComponent } from './jeans-item.component';

describe('JeansItemComponent', () => {
  let component: JeansItemComponent;
  let fixture: ComponentFixture<JeansItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JeansItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JeansItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
