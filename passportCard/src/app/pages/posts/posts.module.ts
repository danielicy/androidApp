
import { NgModule } from '@angular/core'; 

import { PostsRoutingModule } from './posts-routing.module';
import { PostsComponent } from './posts.component';

@NgModule({
  declarations: [
    PostsComponent
  ],
  imports: [
    PostsRoutingModule    
  ],
  exports:[
    PostsComponent
  ]
})
export class PostsModule { }
