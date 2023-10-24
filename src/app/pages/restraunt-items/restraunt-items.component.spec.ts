import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestrauntItemsComponent } from './restraunt-items.component';

describe('RestrauntItemsComponent', () => {
  let component: RestrauntItemsComponent;
  let fixture: ComponentFixture<RestrauntItemsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RestrauntItemsComponent]
    });
    fixture = TestBed.createComponent(RestrauntItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
