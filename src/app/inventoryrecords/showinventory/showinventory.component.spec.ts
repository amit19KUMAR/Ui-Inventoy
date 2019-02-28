import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowinventoryComponent } from './showinventory.component';

describe('ShowinventoryComponent', () => {
  let component: ShowinventoryComponent;
  let fixture: ComponentFixture<ShowinventoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowinventoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowinventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
