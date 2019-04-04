import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoteTakerComponent } from './votetaker.component';

describe('VotetakerComponent', () => {
  let component: VoteTakerComponent;
  let fixture: ComponentFixture<VoteTakerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoteTakerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoteTakerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
