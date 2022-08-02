import { Component, OnInit } from '@angular/core';
import { PostsService, IPost } from 'src/app/Services/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  posts: IPost[] = [];
  constructor(private myPostService: PostsService) {}

  ngOnInit(): void {
    this.myPostService.getPosts().subscribe((data) => {
      this.posts = data;
    });
  }

  addPost() {
    this.myPostService.addPost().subscribe((data) => console.log(data));
  }
}
