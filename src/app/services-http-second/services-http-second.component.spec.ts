import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesHttpSecondComponent } from './services-http-second.component';

describe('ServicesHttpSecondComponent', () => {
  let component: ServicesHttpSecondComponent;
  let fixture: ComponentFixture<ServicesHttpSecondComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicesHttpSecondComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesHttpSecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
