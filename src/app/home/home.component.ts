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

  // getArtist(topicId: number): void {
  //   this.topicService.getArtist(topicId).subscribe(artist => {
  //     this.artist = artist;
  //     console.log(this.artist);
  //   })
  // }

  // getAlbum(topicId: number): void {
  //   this.topicService.getAlbum(topicId).subscribe(album => {
  //     this.album = album;
  //     console.log(this.album);
  //   })
  // }

  // getTrack(topicId: number): void {
  //   this.topicService.getTrack(topicId).subscribe(track => {
  //     this.track = track;
  //     console.log(this.track);
  //   })
  // }

 
}
