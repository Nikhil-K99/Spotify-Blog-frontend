import { Component, OnInit } from '@angular/core';
import { PostService } from '../shared/post.service';
import { PostModel } from '../shared/post-model';
import { TopicService } from '../shared/topic/topic.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  posts: Array<PostModel> = [];

  constructor(private postService: PostService, private topicService: TopicService) {
    }

  ngOnInit(): void {
    this.postService.getAllPosts().subscribe(post => {
      this.posts = post;
      console.log(this.posts)
    })
    
  }
 
}
