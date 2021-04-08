import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatchesuserComponent } from './matchesuser.component';

describe('MatchesuserComponent', () => {
  let component: MatchesuserComponent;
  let fixture: ComponentFixture<MatchesuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatchesuserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchesuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
