import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExternalTracksComponent } from './external-tracks.component';

describe('ExternalTracksComponent', () => {
  let component: ExternalTracksComponent;
  let fixture: ComponentFixture<ExternalTracksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExternalTracksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExternalTracksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
