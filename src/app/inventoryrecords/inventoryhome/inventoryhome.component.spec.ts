import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryhomeComponent } from './inventoryhome.component';

describe('InventoryhomeComponent', () => {
  let component: InventoryhomeComponent;
  let fixture: ComponentFixture<InventoryhomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InventoryhomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InventoryhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
