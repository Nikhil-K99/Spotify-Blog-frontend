import { Component, Input, OnInit } from '@angular/core';
import { TopicService } from './topic.service';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.css']
})
export class TopicComponent implements OnInit {

  constructor(private topicService: TopicService) { }

  // @Input() topicId: number;
  // @Input() topicType: TopicType;
  // topicTypes = TopicType
  // artist: ArtistPayload;
  // album: AlbumPayload;
  // track: TrackPayload;




  ngOnInit(): void {
    // console.log(this.topicId)
    // console.log(this.topicType)
    // if (this.topicType === this.topicTypes.ARTIST) {
    //   this.getArtist(this.topicId);
    // }
    // else if (this.topicType === this.topicTypes.ALBUM) {
    //   this.getAlbum(this.topicId);
    // }
    // else {
    //   this.getTrack(this.topicId)
    // }
  
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
