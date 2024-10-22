import { Component, OnInit, Input } from '@angular/core';
import { PostModel } from '../post-model';
import { VotePayload } from './vote-payload';
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { VoteService } from './vote.service';
import { PostService } from '../post.service';
import { VoteType } from './vote-type';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})
export class VoteComponent implements OnInit {

  @Input() post: PostModel;
  votePayload: VotePayload;
  faArrowUp = faArrowUp;
  faArrowDown = faArrowDown;
  upvoteColor: string;
  downvoteColor: string;

  constructor(private voteService: VoteService, private postService: PostService) { 

    this.votePayload = {
      voteType: undefined,
      postId: undefined
    }
  }

  ngOnInit(): void {
    this.updateVoteDetails();
  }

  upvotePost() {
    this.votePayload.voteType = VoteType.UPVOTE;
    this.vote();
    this.downvoteColor = '';
  }

  downvotePost() {
    this.votePayload.voteType = VoteType.DOWNVOTE;
    this.vote();
    this.upvoteColor = '';
  }

  private updateVoteDetails() {
    this.postService.getPost(this.post.postId).subscribe(post => {
      this.post = post;
    });
  }

  private vote() {
    this.votePayload.postId = this.post.postId;
    this.voteService.vote(this.votePayload).subscribe(() => {
      this.updateVoteDetails();
    }, error => {
      throwError(error);
    });
  }

}
