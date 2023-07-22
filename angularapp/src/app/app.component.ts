import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { IdentityService } from 'src/services/identity.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {  
  identityService = inject(IdentityService);
  title = 'eStudy';

  constructor(private router: Router){     
  }

  onSignOutClick(){
    this.identityService.signOut();

    this.router.navigate(['/login']);  
  }
}