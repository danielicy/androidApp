import { Component, Input } from '@angular/core';

import { registerElement } from 'nativescript-angular';
import { MapView, Marker, Position } from 'nativescript-google-maps-sdk'; 
registerElement('MapView', () => MapView);



@Component({
  selector: 'map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent  {

  @Input()currentLocation:[];

 
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
    marker.position = Position.positionFromLatLng(32.290806945275186, 34.86678775498538);
    marker.title = "Sydney";
    marker.snippet = "Australia";
    marker.userData = {index: 1};
    this.mapView.addMarker(marker);
    console.log("marker set at ...");
    console.log(marker);
     

}

onCoordinateTapped(args) {
    console.log("Coordinate Tapped, Lat: " + args.position.latitude + ", Lon: " + args.position.longitude, args);
}

onMarkerEvent(args) {
    console.log("Marker Event: '" + args.eventName
        + "' triggered on: " + args.marker.title
        + ", Lat: " + args.marker.position.latitude + ", Lon: " + args.marker.position.longitude, args);
}

onCameraChanged(args) {
    console.log("Camera changed: " + JSON.stringify(args.camera), JSON.stringify(args.camera) === this.lastCamera);
    this.lastCamera = JSON.stringify(args.camera);
}

onCameraMove(args) {
    console.log("Camera moving: " + JSON.stringify(args.camera));
}

}
