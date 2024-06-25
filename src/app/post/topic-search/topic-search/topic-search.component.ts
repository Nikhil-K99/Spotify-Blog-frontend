import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TopicSearchService } from './topic-search.service';
import { TopicType } from 'src/app/shared/topic-type';
import { TopicSearchPayload } from './topic-search.payload';


@Component({
  selector: 'app-topic-search',
  templateUrl: './topic-search.component.html',
  styleUrls: ['./topic-search.component.css']
})
export class TopicSearchComponent implements OnInit {

  query: string = ''
  @Input() queryType: TopicType | null = null;
  searchItems: TopicSearchPayload[] = [];
  @Output() selectedItem: EventEmitter<TopicSearchPayload> = new EventEmitter<TopicSearchPayload>();

  constructor(private topicSearchService: TopicSearchService) { 

  }

  ngOnInit(): void {
  }

  onInputChange(): void {
    if (this.query) {
      // && this.query.replace(/\s/g,"") !== this.selectedItem.name.replace(/\s/g,"")
      if (this.queryType === TopicType.ARTIST) {
        this.topicSearchService.getQueriedArtist(this.query.replace(/\s/g,""))
        .subscribe(data => {
          console.log(data);
          this.searchItems = data;
        }); 
      }
      else if (this.queryType === TopicType.ALBUM) {
        this.topicSearchService.getQueriedAlbum(this.query.replace(/\s/g,""))
        .subscribe(data => {
          console.log(data);
          this.searchItems = data;
        });
      }
      else {
        this.topicSearchService.getQueriedTrack(this.query.replace(/\s/g,""))
        .subscribe(data => {
          console.log(data);
          this.searchItems = data;
        });
      }
    }
    else {
      this.searchItems = [];
    }
  }

  onSelectItem(item: TopicSearchPayload): void {
    console.log("emitting", item)
    this.query = item.name;
    this.selectedItem.emit(item);
    this.searchItems = [];
  }
}

