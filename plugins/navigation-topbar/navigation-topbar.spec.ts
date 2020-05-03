import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationTopbarComponent } from './navigation-topbar.component';

describe('NavigationTopbarComponent', () => {
  let component: NavigationTopbarComponent;
  let fixture: ComponentFixture<NavigationTopbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavigationTopbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationTopbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
