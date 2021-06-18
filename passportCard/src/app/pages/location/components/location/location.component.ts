import { Component, OnInit } from '@angular/core';
import { android } from '@nativescript/core/application';
import { GeolocationService } from '../../services/geolocation.service';
import { Location } from './location';
const permissions = require( "nativescript-permissions" );

@Component({
  selector: 'location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {
  currentLocation:Location;
  constructor( private geolocation:GeolocationService) {
  }

  ngOnInit(): void {
    if(this.geolocation.isGpsEnabled()){
      this.getLoation();
    }else{
      this.geolocation.enableGps();
      this.getLoation();
    }
  } 
  
   getLoation(){    
     this.geolocation.getLocation()
    .then(location => {
      this.currentLocation ={lat:location.latitude,lon:location.longitude};
    });  
  }
}
