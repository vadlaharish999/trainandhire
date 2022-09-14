import { Component, OnInit } from '@angular/core';
import { Post } from '../post';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  public posts:Post[]=[];



  constructor(private _postservice:PostService) {
    this._postservice.getPosts().subscribe(
      (data:any)=>{
        this.posts=data;

      },
      (err:any)=>{
        alert('Internal serve error')
      }

    )
   }

  ngOnInit(): void {
  }

}
