import { NgModule } from '@angular/core'; 
import { LocationComponent } from './components/location/location.component';
import { MapComponent } from './components/map/map.component'
import { LocationRoutingModule } from './location-routing.module';

@NgModule({
  declarations: [
    LocationComponent,
    MapComponent    
  ],
  imports: [
    LocationRoutingModule
  ],
  exports:[
    LocationComponent
  ]
})
export class LocationModule { }
