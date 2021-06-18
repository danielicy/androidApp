import { Component, Input } from '@angular/core';

import { registerElement } from 'nativescript-angular';
import { MapView, Marker, Position } from 'nativescript-google-maps-sdk'; 
import { Location } from '../location/location';
registerElement('MapView', () => MapView);



@Component({
  selector: 'map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent  {

 @Input() currentLocation!:Location;

 latitude =  32.290806945275186; 
longitude =  34.86678775498538;
/*latitude =  this.currentLocation.lat | 0;
longitude =  this.currentLocation.lon | 0;*/
zoom = 10;
minZoom = 0;
maxZoom = 22;
bearing = 0;
tilt = 0;
padding = [40, 40, 40, 40];
mapView: MapView;


constructor() {
}

//Map events
onMapReady(event) { 

    this.mapView = event.object;  
    var marker = new Marker();
    marker.position = Position.positionFromLatLng(this.currentLocation.lat,this.currentLocation.lon);
    marker.title = "You are here!";
    marker.snippet = "Hi there!";
    marker.userData = {index: 1};
    this.mapView.addMarker(marker);
    
}


}
