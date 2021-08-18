import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup} from '@angular/forms';
import { Router } from '@angular/router';
import { globaldata } from 'src/app/globaldata.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private fb:FormBuilder, private router:Router) { }

  ngOnInit(): void {
  }
  form: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  submit() {
    if (this.form.valid) {
      if((this.form.get('username')?.value==globaldata.username)&&(this.form.get('password')?.value==globaldata.password)){
        this.router.navigate(['landing']);
      }
      else{
        alert("login failure");
      }
    }
  }
}
