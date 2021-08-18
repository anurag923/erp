import { Component, OnInit, ElementRef , ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { blog } from 'src/app/blog.model';
import { BlogService } from 'src/app/shared/services/blog.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  @ViewChild('name', { static: false })
  name!: ElementRef;
  @ViewChild('description', { static: false })
  description!: ElementRef;
  @ViewChild('imagelink', { static: false })
  imagelink!: ElementRef;
  
  constructor(private blogservice:BlogService, private router:Router) { }

  ngOnInit(): void {
  }
  public postblog(){
    const name = this.name.nativeElement.value;
    const description = this.description.nativeElement.value;
    const imagelink = this.imagelink.nativeElement.value;
    const blogpost = new blog(name,description,imagelink);
    this.blogservice.createpost(blogpost);
    this.router.navigate(['landing/showallblogs']);   
  }
}
