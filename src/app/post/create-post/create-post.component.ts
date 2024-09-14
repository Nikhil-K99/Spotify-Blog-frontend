import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TopicType } from 'src/app/shared/topic-type';
import { TopicSearchPayload } from '../topic-search/topic-search/topic-search.payload';
import { CreatePostPayload } from './create-post.payload';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { PostService } from 'src/app/shared/post.service';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {

  queryType: TopicType;
  queryTypes = TopicType;
  selectedItem: TopicSearchPayload;
  postPayload: CreatePostPayload;
  createPostForm: FormGroup;
  
  editorConfig: AngularEditorConfig = {
    editable: true,
      spellcheck: true,
      height: 'auto',
      minHeight: '0',
      maxHeight: 'auto',
      width: 'auto',
      minWidth: '0',
      translate: 'yes',
      enableToolbar: true,
      showToolbar: true,
      placeholder: 'Enter text here...',
      defaultParagraphSeparator: '',
      defaultFontName: '',
      defaultFontSize: '',
      fonts: [
        {class: 'arial', name: 'Arial'},
        {class: 'times-new-roman', name: 'Times New Roman'},
        {class: 'calibri', name: 'Calibri'},
        {class: 'comic-sans-ms', name: 'Comic Sans MS'}
      ],
      customClasses: [
      {
        name: 'quote',
        class: 'quote',
      },
      {
        name: 'redText',
        class: 'redText'
      },
      {
        name: 'titleText',
        class: 'titleText',
        tag: 'h1',
      },
    ]
};

  constructor(private postService: PostService, private router: Router) {
    this.postPayload = {
      postName: '',
      description: '',
      topicSpotifyId: '',
      topicType: TopicType.ALBUM
    }
   }

  onSelectedItem(event: TopicSearchPayload): void {
    console.log('Parent received selected Item: ', event);
    this.selectedItem = event
  }

  ngOnInit(): void {
    this.createPostForm = new FormGroup({
      postName: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required)    
    })
  }

  createPost(): void  {
    this.postPayload.postName = this.createPostForm.get('postName')!.value;
    this.postPayload.description = this.createPostForm.get('description')!.value
    this.postPayload.topicType = this.queryType;
    this.postPayload.topicSpotifyId = this.selectedItem.spotifyId;

    // this.postService.createPost(this.postPayload).subscribe((data) => {
    //   this.router.navigateByUrl('home');
    // }, error => {
    //   throwError(error);
    // })
    console.log("Post created")
  }

  discardPost(): void {
    this.router.navigateByUrl('home');
  }

}
