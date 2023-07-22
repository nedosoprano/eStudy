import { HttpStatusCode } from '@angular/common/http';
import { Component, OnInit, inject} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { IdentityService } from 'src/services/identity.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})

export class LogInPageComponent implements OnInit{
  identityService = inject(IdentityService);
  form: FormGroup
  error: string

  constructor(private router: Router){  
  }

  async ngOnInit() {   
    if (this.identityService.isAuthCookiesSet()) {
      var user = this.identityService.getCurrentUser();
      await this.identityService.signIn(user);
  
      this.router.navigate(['/main/' + user.role.toLowerCase()]);
    }
    else {
      this.form = new FormGroup({
      email: new FormControl(''),
      name: new FormControl(''),
      password: new FormControl('')});
    }
  }

  async onSignInClick(){
    var user: User = {
      email: this.form.value['email'],
      name: this.form.value['name'],
      password: this.form.value['password'],
      role: 'role'
    }
    var responce = await this.identityService.signIn(user);

    if (responce.statusCode == HttpStatusCode.Ok)
      this.router.navigate(['/main/' + responce.user.role.toLowerCase()]);
    else
      this.error = 'Wrong credentials!';
  }
}
