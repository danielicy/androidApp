import { Component, OnInit } from '@angular/core';
import { Dialogs } from "@nativescript/core";
import { Location } from "@angular/common";
import { Post } from './post';
import { PostsService } from './posts.service'; 
 


@Component({
  selector: 'ns-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
posts: Array<Post>;

 
constructor(private postsService: PostsService,
  private location: Location) {}

ngOnInit(): void {
   const posts = this.postsService.getAll() .subscribe(
    response =>{
    this.posts = response as Post[];   
  }); 
  
}

  delete(post){
        let options = {
          title: "Delete ",
          message: "Are you sure you want to be a Unicorn?",
          okButtonText: "Yes",
          cancelButtonText: "No",
          //neutralButtonText: "Cancel"
      };

      Dialogs.confirm(options).then((result: boolean) => {           
          if(result === true)
          this.postsService.delete(post.id);
      });
  
    
   
  }

  back(){
    this.location.back();
  }

}
