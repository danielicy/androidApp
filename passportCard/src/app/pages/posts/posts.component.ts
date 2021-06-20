import { Component, OnInit } from '@angular/core';
import { Post } from './post';
import { PostsService } from './posts.service'; 
 
@Component({
  selector: 'ns-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
posts: Array<Post>;

 
constructor(private postsService: PostsService) {}

ngOnInit(): void {
   const posts = this.postsService.getAll() .subscribe(
    response =>{
    this.posts = response as Post[];   
  }); 
  
}

delete(post){
    console.log(post.id);
  }

  back(){

  }

}
