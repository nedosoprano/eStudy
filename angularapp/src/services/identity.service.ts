import { HttpClient, HttpHeaders, HttpStatusCode } from '@angular/common/http';
import { Injectable, OnInit, inject} from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { lastValueFrom } from 'rxjs';
import { SignInResponce } from 'src/app/models/sign-in-responce';
import { User } from 'src/app/models/user';

@Injectable({
    providedIn: 'root',
  })
export class IdentityService{
  private cookieService = inject(CookieService)
  
  constructor(private http: HttpClient){     
  }

  public getCurrentUser(): User{
    return this.getUserFromCookies();
  }

  public async signIn(user: User): Promise<SignInResponce>{
    var headers = new HttpHeaders().set('Content-Type', 'application/json');
    var responce = await lastValueFrom(this.http.post<SignInResponce>('/user/signin', user, {headers}));

    this.setAuthCookies(responce.user);

    return responce;
  }

  public async signUp(user: User): Promise<HttpStatusCode>{
    var headers = new HttpHeaders().set('Content-Type', 'application/json');

    return await lastValueFrom(this.http.post<HttpStatusCode>('/user/signup', user, {headers}))
  }

  public async signOut(){
    this.removeAuthCookies();
    await lastValueFrom(this.http.get<HttpStatusCode>('/user/signout'));
  }

  public isAuthCookiesSet(): boolean{
    return this.cookieService.check("email")
  }

  private getUserFromCookies(): User{
    var user: User = {
        email: this.cookieService.get('email'),
        name: this.cookieService.get('name'),
        password: this.cookieService.get('password'),
        role: this.cookieService.get('role'),
    };

    return user;
  }

  private setAuthCookies(user: User){
    this.cookieService.set('email', user.email);
    this.cookieService.set('name', user.name);
    this.cookieService.set('password', user.password);
    this.cookieService.set('role', user.role);
  }

  private removeAuthCookies(){
    this.cookieService.delete('email');
    this.cookieService.delete('name');
    this.cookieService.delete('password');
    this.cookieService.delete('role');
  }
}
