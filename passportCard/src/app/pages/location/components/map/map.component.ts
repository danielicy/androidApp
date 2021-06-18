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

  @Input() currentLocation:Location;

 
latitude =  32.290806945275186; 
longitude =  34.86678775498538; 
zoom = 10;
minZoom = 0;
maxZoom = 22;
bearing = 0;
tilt = 0;
padding = [40, 40, 40, 40];
mapView: MapView;

lastCamera: String;

constructor() {
}

//Map events
onMapReady(event) {
    console.log('Map Ready');

    this.mapView = event.object;

    console.log("Setting a marker...");

    var marker = new Marker();
    marker.position = Position.positionFromLatLng(this.currentLocation.lat,this.currentLocation.lon);
    marker.title = "You are here!";
    marker.snippet = "Hi there!";
    marker.userData = {index: 1};
    this.mapView.addMarker(marker);
    
     

}


}
