import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Joke } from './joke.model';

@Injectable({
  providedIn: 'root'
})
export class JokeService {
  
  constructor(private http:HttpClient) { }

  getJoke(): Observable<any>{
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Accept','application/json');
    //headers = headers.append('User-Agent','https://acaroselli1.github.io/generic-dialog-component/ alexanderjcaroselli@gmail.com')
    return this.http.get<Joke>('https://icanhazdadjoke.com/', {headers})
  }
}
