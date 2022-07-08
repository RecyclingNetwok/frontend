import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.prod';
import { Post } from '../models/Post';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  //API_LOCAL
    //private API_ALL_POSTS = environment.API_LOCAL+'api/v1/post';
    //private API_GET_POST = environment.API_LOCAL+'api/v1/post/';
    //private API_ADD_POST = environment.API_LOCAL+'api/v1/post/';
    //private API_DEL_POST = environment.API_LOCAL+'api/v1/post/';

  //API SERVER
  private API_ALL_POSTS = environment.API_SERVER+'api/v1/post';
  private API_GET_POST = environment.API_SERVER+'api/v1/post/';
  private API_ADD_POST = environment.API_SERVER+'api/v1/post/';
  private API_DEL_POST = environment.API_SERVER+'api/v1/post/';
  constructor(private http: HttpClient) { }

  getPosts(){
    return this.http.get(this.API_ALL_POSTS);
  }

  getPost(){
    return this.http.get(this.API_GET_POST);
  }

  addPost(post: Post): Observable<any>{
    const body = {
      title: post.title,
      description: post.description,
      imagePath: post.imagePath,
      imageTitle: post.imageTitle,
    };
    return this.http.put<any>(this.API_ADD_POST, body);
  }

  delPost(){
    return this.http.get(this.API_DEL_POST);
  }

}
