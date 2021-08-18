import { Component, OnInit } from '@angular/core';
import { blog } from 'src/app/blog.model';
import { BlogService } from 'src/app/shared/services/blog.service';

@Component({
  selector: 'app-showall',
  templateUrl: './showall.component.html',
  styleUrls: ['./showall.component.css']
})
export class ShowallComponent implements OnInit {
  blogs: blog[] = [];
  constructor(private blogservice:BlogService) { }

  ngOnInit(): void {
    this.blogs = this.blogservice.viewposts();
    this.blogservice.blogadded.subscribe((blogs:blog[])=>{
      this.blogs = blogs;
    })
  }

}
