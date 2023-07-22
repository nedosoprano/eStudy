import { HttpClient, HttpStatusCode} from '@angular/common/http';
import { Component, OnInit, inject} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { IdentityService } from 'src/services/identity.service';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.css']
})

export class SignUpPageComponent implements OnInit{
  identityService = inject(IdentityService);
  form: FormGroup
  error: string
  
  constructor(private router: Router, private http: HttpClient){     
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl(''),
      name: new FormControl(''),
      password: new FormControl('')
    });
  }

  async onSignUpClick(){
    var user: User = {
      email: this.form.value['email'],
      name: this.form.value['name'],
      password: this.form.value['password'],
      role: 'Student'
    }   

    var responce = await this.identityService.signUp(user);

    if (responce == HttpStatusCode.Ok)
      this.router.navigate(['/login']);
    else
      this.error = 'You sent incorrect data!';
  }
}
