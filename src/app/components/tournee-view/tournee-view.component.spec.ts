import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TourneeViewComponent } from './tournee-view.component';

describe('TourneeViewComponent', () => {
  let component: TourneeViewComponent;
  let fixture: ComponentFixture<TourneeViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TourneeViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TourneeViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
