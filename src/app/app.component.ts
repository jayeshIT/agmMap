import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  showMapWithRoute : boolean=false;
  showMap :boolean =true;
  lat: Number ;
  lng: Number;
  markerOptions ={};

  provideRouteAlternatives = true;
  travelMode = "DRIVING";
  optimizeWaypoints =true;
  avoidFerries = true;
  renderOptions = {
    suppressMarkers: true
  };
  
  origin = { lat: 29.8174782, lng: -95.6814757 }
  destination = { lat: 40.6976637, lng: -74.119764 }
  
  showMapWithRouteClick(){
    this.showMap = false;
    this.showMapWithRoute = true;
  }
  ngOnInit() {

  this.showMap = true;

   this.lat = 24.7992116
   this.lng = 120.974784;

   
  this.markerOptions = {
    origin: {
      label: 'Start',
      icon: 'assets/images/map1.png'
    },
    destination: {
      label: 'End',
      icon: 'assets/images/map2.png'
    }
  }
   this.origin = { lat: 29.8174782, lng: -95.6814757 }
   this.destination = { lat: 40.6976637, lng: -74.119764 }
  
    

  }

}
