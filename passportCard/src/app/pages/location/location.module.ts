import { NgModule } from '@angular/core'; 
import { LocationComponent } from './components/location/location.component';

import { LocationRoutingModule } from './location-routing.module';

@NgModule({
  declarations: [
    LocationComponent    
  ],
  imports: [
    LocationRoutingModule
  ],
  exports:[
    LocationComponent
  ]
})
export class LocationModule { }
