import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from './post';

@Injectable({
  providedIn: 'root'
})
export class PostService {


  constructor(private _httpclient:HttpClient) { }


  getPosts():Observable<Post[]>{
    return this._httpclient.get<Post[]>(
      'https://jsonplaceholder.typicode.com/posts'
    );
  }
}
