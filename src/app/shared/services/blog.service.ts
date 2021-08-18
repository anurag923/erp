import { Injectable } from '@angular/core';
import { blog } from 'src/app/blog.model';
import { EventEmitter } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private blog:blog[]=[];
  blogadded = new EventEmitter<blog[]>();
  constructor() { }

  createpost(blog:blog) {
    this.blog.push(blog);
    this.blogadded.emit(this.blog.slice());
  }

  viewposts(){
    return this.blog.slice();
  }
}
