import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { TopicSearchPayload } from './topic-search.payload';

@Injectable({
  providedIn: 'root'
})
export class TopicSearchService {

  constructor(private http: HttpClient) { }

  getQueriedArtist(artistQuery: string): Observable<Array<TopicSearchPayload>> {
    return this.http.get<Array<TopicSearchPayload>>('http://localhost:8080/api/v1/search/artist/' + artistQuery);
  }

}
