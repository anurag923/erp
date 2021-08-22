import { Component, OnInit, ElementRef , ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { comment } from 'src/app/comment.model';
import { BlogService } from 'src/app/shared/services/blog.service';

@Component({
  selector: 'app-postcomment',
  templateUrl: './postcomment.component.html',
  styleUrls: ['./postcomment.component.css']
})
export class PostcommentComponent implements OnInit {

  @ViewChild('comment', { static: false })
  comment!: ElementRef;
  id!:number;
  constructor(private blogservice:BlogService, private router:Router) { }

  ngOnInit(): void {
    this.id = this.blogservice.getval();
    console.log(this.id);
  }

  public postcomment(){
    const blogcomment = this.comment.nativeElement.value;
    const postcomment = new comment(blogcomment,this.id);
    this.blogservice.postcomment(postcomment);   
  }
}
