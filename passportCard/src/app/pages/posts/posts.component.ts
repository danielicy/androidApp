import { Component, OnInit } from '@angular/core';
import { Post } from './post';
import { PostsService } from './posts.service';

import { Item } from '../../item/item';
import { ItemService } from '../../item/item.service'

@Component({
  selector: 'ns-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
posts: Array<Post>;

items: Array<Item>

constructor(private postsService: PostsService,
    private itemService: ItemService) {}

ngOnInit(): void {
    this.posts = this.postsService.getPosts();
  this.items = this.itemService.getItems()
  
}
 
}
