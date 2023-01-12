import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { SocialauthService } from '../_services/socialauth.service';
import { StorageService } from '../_services/storage.service';
import { User } from '../models/user';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
  form: any = {
    username: null,
    password: null
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  UserModel= new User;
  SocialLogindata=false;

  constructor(private authService: AuthService, 
    private storageService: StorageService,
    private SocialAuthServices:SocialauthService,
    private router:Router) { }

  ngOnInit(): void {
    if (this.storageService.isLoggedIn()) {
      this.isLoggedIn = true;
      this.roles = this.storageService.getUser().roles;
    }
  }
  

  onSubmit(): void {
    
    const { username, password } = this.form;
   
    this.authService.login(username, password).subscribe({
      next: data => {
        this.storageService.saveUser(data);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.storageService.getUser().roles;
        this.reloadPage();
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    });
  }

  googleAuth () {
    this.SocialAuthServices.googleAuth();
    this.SocialLogindata=true;
    this.SocialAuthServices.getStateUser().subscribe(
      res => {
        this.UserModel.displayName = res?.displayName!;
        this.UserModel.email = res?.email!;

        const username =this.UserModel.email; 
        const password =this.UserModel.email;
         
        this.authService.login(username, password).subscribe({
          next: data => {
            this.storageService.saveUser(data);
    
            this.isLoginFailed = false;
            this.isLoggedIn = true;
            this.roles = this.storageService.getUser().roles;
            this.reloadPage();
          },
          error: err => {
            this.errorMessage = err.error.message;
            this.isLoginFailed = true;
          }
        });

        
      })

     
   
  }


  reloadPage(): void {
    window.location.reload();
  }

 

 
}