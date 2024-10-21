import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { TopicPayload } from '../topic.payload';

@Injectable({
  providedIn: 'root'
})
export class TopicService {

  constructor(private http: HttpClient) { }

  private topicCache = new Map<number, any>();

  getAllArtists(): Observable<Array<TopicPayload>> {
    return this.http.get<Array<TopicPayload>>('http://localhost:8080/api/v1/topics/artists');
  }

  getAllAlbums(): Observable<Array<TopicPayload>> {
    return this.http.get<Array<TopicPayload>>('http://localhost:8080/api/v1/topics/albums');
  }  

  getAllTracks(): Observable<Array<TopicPayload>> {
    return this.http.get<Array<TopicPayload>>('http://localhost:8080/api/v1/topics/tracks');
  }    
  
  getArtist(id: number): Observable<TopicPayload> {
      return this.http.get<TopicPayload>('http://localhost:8080/api/v1/topics/artists/' + id.toString());
  }

  getAlbum(id: number): Observable<TopicPayload> {
    return this.http.get<TopicPayload>('http://localhost:8080/api/v1/topics/albums/' + id.toString());
  }

  getTrack(id: number): Observable<TopicPayload> {
    return this.http.get<TopicPayload>('http://localhost:8080/api/v1/topics/tracks/' + id.toString());
  }

}