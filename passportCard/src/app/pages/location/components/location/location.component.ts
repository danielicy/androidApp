import { Component } from '@angular/core';
import { android } from '@nativescript/core/application';
import { GeolocationService } from '../../services/geolocation.service';
const permissions = require( "nativescript-permissions" );

@Component({
  selector: 'location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent  {
  constructor( private geolocation:GeolocationService) {
  }
  
   getLoation(){
   // console.log("getting location:");
   
     this.geolocation.getLocation()
    .then(location => {
      console.log(location.latitude);
      console.log(location.longitude);
    });

   
    //console.log(location);
    //console.log("got location:");
  }

  async enableGps(){
    let gps =await this.geolocation.enableGps();
   console.log(gps);

  }

 

}
