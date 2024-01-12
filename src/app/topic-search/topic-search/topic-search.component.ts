import { Component, OnInit } from '@angular/core';
import { TopicSearchService } from '../topic-search.service';

@Component({
  selector: 'app-topic-search',
  templateUrl: './topic-search.component.html',
  styleUrls: ['./topic-search.component.css']
})
export class TopicSearchComponent implements OnInit {

  constructor(private topicSearchService: TopicSearchService) { }

  ngOnInit(): void {
    this.topicSearchService.getQueriedArtist("Drake")
      .subscribe(data => {
        console.log(data)
      });
  }

}
