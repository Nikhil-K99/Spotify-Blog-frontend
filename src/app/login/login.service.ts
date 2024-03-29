import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  getSpotifyUserLogin(): Observable<string>{
    return this.http.get('http://localhost:8080/api/v1/auth/login', {responseType: 'text'});
  }

}
