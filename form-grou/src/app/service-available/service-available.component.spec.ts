import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceAvailableComponent } from './service-available.component';

describe('ServiceAvailableComponent', () => {
  let component: ServiceAvailableComponent;
  let fixture: ComponentFixture<ServiceAvailableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceAvailableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceAvailableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
