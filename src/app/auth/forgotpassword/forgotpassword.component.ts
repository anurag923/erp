import { Component, OnInit, ElementRef , ViewChild  } from '@angular/core';
import { Router } from '@angular/router';
import { BlogService } from 'src/app/shared/services/blog.service';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {

  @ViewChild('password', { static: false })
  password!: ElementRef;

  @ViewChild('cnfpassword', { static: false })
  cnfpassword!: ElementRef;
  constructor(private blogservice:BlogService, private router:Router) { }

  ngOnInit(): void {
  }
  public changepassword(){
    if(this.password.nativeElement.value==this.cnfpassword.nativeElement.value){
      this.blogservice.changepassword(this.password.nativeElement.value);
      localStorage.setItem('url', this.router.url);
      localStorage.setItem('password',this.password.nativeElement.value);
      this.router.navigate(['/']);
    }
    else{
      alert("password and confirm password don't match");
    }
  }
}
