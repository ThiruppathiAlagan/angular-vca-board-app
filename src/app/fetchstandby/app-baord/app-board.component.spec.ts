import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppBoardComponent } from './app-board.component';

describe('AppBordComponent', () => {
  let component: AppBoardComponent;
  let fixture: ComponentFixture<AppBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppBoardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
