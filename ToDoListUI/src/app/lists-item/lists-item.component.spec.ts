import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListsItemComponent } from './lists-item.component';

describe('ListsItemComponent', () => {
  let component: ListsItemComponent;
  let fixture: ComponentFixture<ListsItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListsItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
