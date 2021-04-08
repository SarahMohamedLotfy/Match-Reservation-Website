import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMatchDetailComponent } from './view-match-detail.component';

describe('ViewMatchDetailComponent', () => {
  let component: ViewMatchDetailComponent;
  let fixture: ComponentFixture<ViewMatchDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewMatchDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewMatchDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
