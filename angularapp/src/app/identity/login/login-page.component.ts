import { HttpClient, HttpHeaders, HttpStatusCode } from '@angular/common/http';
import { Component, Input, OnInit} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { SignInResponce, User } from '../../app.component';
import { GlobalVariables } from 'src/global-variables';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})

export class LogInPageComponent implements OnInit{
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

  onSignInClick(){
    var headers = new HttpHeaders().set('Content-Type', 'application/json');

    var user: User = {
      email: this.form.value['email'],
      name: this.form.value['name'],
      password: this.form.value['password'],
      role: 'role'
    }    

    this.http.post<SignInResponce>('/user/signin', user, {headers}).subscribe(result => {
      if (result.statusCode == HttpStatusCode.Ok){
        GlobalVariables.appUser = result.user
        this.router.navigate(['/main/' + result.user.role.toLowerCase()])
      }
      else
        this.error = "Wrong credentials!"
    }, error => this.error = "Something went wrong!");    
  }
}
