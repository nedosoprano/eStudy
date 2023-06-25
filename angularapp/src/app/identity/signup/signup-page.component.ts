import { HttpClient, HttpHeaders, HttpStatusCode } from '@angular/common/http';
import { Component, OnInit} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.css']
})

export class SignUpPageComponent implements OnInit{
  form: FormGroup
  error: string
  
  constructor(private router: Router, private http: HttpClient){     
  }

  ngOnInit(): void {
      this.form = new FormGroup({
        email: new FormControl(''),
        name: new FormControl(''),
        password: new FormControl('')
      })
  }

  onSignUpClick(){
    var headers = new HttpHeaders().set('Content-Type', 'application/json');

    var user: User = {
      email: this.form.value['email'],
      name: this.form.value['name'],
      password: this.form.value['password'],
      role: 'Student'
    }
    

    this.http.post<HttpStatusCode>('/user/signup', user, {headers}).subscribe(result => {
      if (result == HttpStatusCode.Ok)
        this.router.navigate(['/login'])
      else
        this.error = "Wrong credentials!"
    }, error => this.error = "Something went wrong!");

    
  }
}
