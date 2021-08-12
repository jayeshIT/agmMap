import { Component, OnInit } from '@angular/core';
import * as _ from 'underscore';

@Component({
  selector: 'app-map-route-marker',
  templateUrl: './map-route-marker.component.html',
  styleUrls: ['./map-route-marker.component.css']
})
export class MapRouteMarkerComponent implements OnInit {

  waypoints :any;
  origion;
  destination;
  constructor() { }

    ngOnInit() {

        let points = [{
          origin: {
              lat: 19.9974533,
              lng: 73.78980229999999
          },
          destination: {
              lat: 19.0759837,
              lng: 72.8776559
          },
          index: 0
      },
      {
          origin: {
              lat: 19.0759837,
              lng: 72.8776559
          },
          destination: {
              lat: 18.5204,
              lng: 73.8567
          },
          index: 1
      },
      {
          origin: {
              lat: 18.5204,
              lng: 73.8567
          },
          destination: {
              lat: 21.1458,
              lng: 79.0882
          },
          index: 2
      },
      {
          origin: {
              lat: 21.1458,
              lng: 79.0882
          },
          destination: {
              lat: 20.3899,
              lng: 78.1307
          },

          index: 3
      },
      {
          origin: {
              lat: 20.3899,
              lng: 78.1307
          },
          destination: {
              lat: 19.1383,
              lng: 77.3210
          },
          index: 4
      }
    ]

    

    if (points.length > 0) {
      let firstPoint = points[0];
      let lastPoint = points[points.length - 1];
      this.origion = firstPoint.origin
      this.destination = lastPoint.destination;
    }

    let waypts = [];
    _.each(points, function(d, i) {
      if (i != 0 && i != points.length - 1) {
        waypts.push({
        location : d.origin,
        stopover: true
        });
      }
    })



    this.waypoints = waypts;

  }

}
