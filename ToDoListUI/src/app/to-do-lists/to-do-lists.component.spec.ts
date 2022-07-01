import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDoListsComponent } from './to-do-lists.component';

describe('ToDoListsComponent', () => {
  let component: ToDoListsComponent;
  let fixture: ComponentFixture<ToDoListsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToDoListsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToDoListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
