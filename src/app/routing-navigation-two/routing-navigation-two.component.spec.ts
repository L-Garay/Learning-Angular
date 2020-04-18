import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutingNavigationTwoComponent } from './routing-navigation-two.component';

describe('RoutingNavigationTwoComponent', () => {
  let component: RoutingNavigationTwoComponent;
  let fixture: ComponentFixture<RoutingNavigationTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoutingNavigationTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutingNavigationTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
