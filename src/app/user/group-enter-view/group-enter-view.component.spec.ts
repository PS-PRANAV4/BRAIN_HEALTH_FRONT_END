import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupEnterViewComponent } from './group-enter-view.component';

describe('GroupEnterViewComponent', () => {
  let component: GroupEnterViewComponent;
  let fixture: ComponentFixture<GroupEnterViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroupEnterViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GroupEnterViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
