import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { blog } from 'src/app/blog.model';
import { BlogService } from 'src/app/shared/services/blog.service';

@Component({
  selector: 'app-singlepost',
  templateUrl: './singlepost.component.html',
  styleUrls: ['./singlepost.component.css']
})
export class SinglepostComponent implements OnInit {

  id!:number;
  blog!: blog;
  constructor(private router:Router, private route:ActivatedRoute, private blogservice:BlogService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params:Params)=>{
      this.id = +params['id'];
      this.blog = this.blogservice.viewsinglepost(this.id);
    })
  }

}
