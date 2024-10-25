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
  currentStatus: VoteType;

  constructor(private voteService: VoteService, private postService: PostService) { 

    this.votePayload = {
      voteType: undefined,
      postId: undefined
    };
    // this.currentStatus = VoteType.NOVOTE;
  }

  ngOnInit(): void {
    // console.log("before init", this.currentStatus)
    this.updateVoteDetails();
    // console.log("after init", this.currentStatus)
  }

  upvotePost() {
    if (this.currentStatus == VoteType.UPVOTE) {
      this.votePayload.voteType = VoteType.NOVOTE;
      this.vote();
      this.upvoteColor = ''

    } else {
      this.votePayload.voteType = VoteType.UPVOTE;
      this.vote();
      this.downvoteColor = '';
    }
    
  }

  downvotePost() {
    if (this.currentStatus == VoteType.DOWNVOTE) {
      this.votePayload.voteType = VoteType.NOVOTE;
      this.vote();
      this.downvoteColor = ''
    } else {
      this.votePayload.voteType = VoteType.DOWNVOTE;
      this.vote();
      this.upvoteColor = '';
    }
    
  }

  private updateVoteDetails() {
    this.postService.getPost(this.post.postId).subscribe(post => {
      this.post = post;
      if (post.upVote) {
        this.currentStatus = VoteType.UPVOTE;
      }
      else if (post.downVote) {
        this.currentStatus = VoteType.DOWNVOTE;
      }
      else {
        this.currentStatus = VoteType.NOVOTE;
      }
      console.log("after init", this.currentStatus);
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
