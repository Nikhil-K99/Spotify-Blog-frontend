import { Component, Input, OnInit } from '@angular/core';
import { faComments, faCompactDisc, faMusic, faUser } from '@fortawesome/free-solid-svg-icons';
import { PostModel } from '../post-model';


@Component({
  selector: 'app-post-tile',
  templateUrl: './post-tile.component.html',
  styleUrls: ['./post-tile.component.css']
})
export class PostTileComponent implements OnInit {

  faComments = faComments;
  faCompactDisc = faCompactDisc;
  faMusic = faMusic;
  faUser = faUser;
  @Input() posts: PostModel[];

  

  constructor() { }

  ngOnInit(): void {
  }

}
