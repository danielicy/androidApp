
import { Injectable } from '@angular/core'
import { Post } from './post';
import { Item } from './../../item/item'

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  url = 'https://jsonplaceholder.typicode.com/posts';
  
  private posts = new Array<Post>(
    
    {  userid: 1 ,id: 1, title: 'Ter Stegen', body: 'Goalkeeper' },
    {  userid: 2 ,id: 2, title: 'Ter Stegen', body: 'Goalkeeper' },
    { userid: 3 , id: 3, title: 'Piqué', body: 'Defender' },
    {  userid: 2 ,id: 4, title: 'I. Rakitic', body: 'Midfielder' },
    { userid: 5 , id: 5, title: 'Sergio', body: 'Midfielder' },
    {  userid: 3,id: 6, title: 'Denis Suárez', body: 'Midfielder' },
    { userid: 7 , id: 7, title: 'Arda', body: 'Midfielder' },
    {  userid: 8 ,id: 8, title: 'A. Iniesta', body: 'Midfielder' },
    { userid: 10 , id: 9, title: 'Suárez', body: 'Forward' },
    { userid: 11 , id: 10, title: 'Messi', body: 'Forward' },
    {  userid: 12 ,id: 11, title: 'Neymar', body: 'Forward' },
    {  userid: 13 ,id: 12, title: 'Rafinha', body: 'Midfielder' },
    { userid: 14 , id: 13, title: 'Cillessen', body: 'Goalkeeper' },
    { userid: 15 , id: 14, title: 'Mascherano', body: 'Defender' },
    {  userid: 16 ,id: 17, title: 'Paco Alcácer', body: 'Forward' },
    {  userid: 17 ,id: 18, title: 'Jordi Alba', body: 'Defender' },
    {  userid: 18,id: 19, title: 'Digne', body: 'Defender' },
    { userid: 18,id: 20, title: 'Sergi Roberto', body: 'Midfielder' },
    { userid: 18,id: 21, title: 'André Gomes', body: 'Midfielder' },
    { userid: 18,id: 22, title: 'Aleix Vidal', body: 'Midfielder' },
    { userid: 18,id: 23, title: 'Umtiti', body: 'Defender' },
    { userid: 18,id: 24, title: 'Mathieu', body: 'Defender' },
    { userid: 18,id: 25, title: 'Masip', body: 'Goalkeeper' }
  )

  getPosts(): Array<Post> {
    return this.posts
  }

  getPost(id: number): Post {
    return this.posts.filter((post) => post.id === id)[0]
  }
}
