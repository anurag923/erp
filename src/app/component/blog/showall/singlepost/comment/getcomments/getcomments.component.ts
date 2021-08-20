import { Component, OnInit } from '@angular/core';
import { comment } from 'src/app/comment.model';
import { BlogService } from 'src/app/shared/services/blog.service';

@Component({
  selector: 'app-getcomments',
  templateUrl: './getcomments.component.html',
  styleUrls: ['./getcomments.component.css']
})
export class GetcommentsComponent implements OnInit {
  comments:comment[]=[];
  constructor(private blogservice:BlogService) { }

  ngOnInit(): void {
    this.comments = this.blogservice.getcomments();
    this.blogservice.commentadded.subscribe((comments:comment[])=>{
      this.comments = comments;
    })
  }

}
