import { Injectable } from '@angular/core';
import { blog } from 'src/app/blog.model';
import { comment } from 'src/app/comment.model';
import { EventEmitter } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private id!:number;
  private blog:blog[]=[];
  private comments:comment[]=[];
  private test:comment[]=[];
  blogadded = new EventEmitter<blog[]>();
  commentadded = new EventEmitter<comment[]>();
  
  constructor() { }

  setval(id:number)
  {
    this.id = id;
  }
  
  getval(){
    return this.id
  }
  createpost(blog:blog) {
    this.blog.push(blog);
    this.blogadded.emit(this.blog.slice());
  }

  viewposts(){
    return this.blog.slice();
  }

  viewsinglepost(i:number){
    return this.blog[i];
  }

  postcomment(comment:comment){
    this.comments.push(comment);
    this.commentadded.emit(this.comments.slice());
  }

  getcomments(id:number){
    this.test = this.comments.filter((e)=>{
     return e.postid == id
    });
    return this.test;
  }
}
