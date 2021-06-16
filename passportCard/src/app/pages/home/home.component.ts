import { Component } from '@angular/core';


@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {



constructor( ) { }

posts(){
  alert('posts');
}

location(){
  alert('location');
}





}
