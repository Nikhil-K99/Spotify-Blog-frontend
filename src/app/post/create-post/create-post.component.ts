import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { TopicType } from 'src/app/shared/topic-type';
import { TopicSearchPayload } from '../topic-search/topic-search/topic-search.payload';
import { CreatePostPayload } from './create-post.payload';

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
  createPostForm: UntypedFormGroup;

  constructor() { }

  onSelectedItem(event: TopicSearchPayload): void {
    console.log('Parent received selected Item: ', event);
    this.selectedItem = event
  }

  ngOnInit(): void {
    this.createPostForm = new UntypedFormGroup({
      postName: new UntypedFormControl('', Validators.required)
  //     description: new FormControl('', Validators.required)    
    })
  }

}
