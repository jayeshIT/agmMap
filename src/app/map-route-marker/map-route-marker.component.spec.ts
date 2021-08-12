import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapRouteMarkerComponent } from './map-route-marker.component';

describe('MapRouteMarkerComponent', () => {
  let component: MapRouteMarkerComponent;
  let fixture: ComponentFixture<MapRouteMarkerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapRouteMarkerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapRouteMarkerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
