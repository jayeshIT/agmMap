

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';


import { AgmCoreModule } from '@agm/core';
import { AgmDirectionModule } from 'agm-direction';

import { MapRouteMarkerComponent } from './map-route-marker/map-route-marker.component';

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule,
    AgmCoreModule.forRoot({ // @agm/core
      apiKey: '',
    }),
    AgmDirectionModule     // agm-direction
     ],
  declarations: [ AppComponent, MapRouteMarkerComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
