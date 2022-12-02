import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../_services/auth.service';
import { FormControl } from '@angular/forms';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css'],
  providers: [AuthService],
})
export class ForgotPasswordComponent implements OnInit {

  userEmail = new FormControl('');

  constructor(private authSvc:AuthService, private router:Router) { }

  ngOnInit(): void {
  }

  async onReset(){
    try{
      const email = this.userEmail.value;
      await this.authSvc.resetPassword('email');
      window.alert('Correo enviado, revisa tu bandeja de entrada')
      //redireccionamiento al home//
      this.router.navigate(['/login']);
    }
    catch(error){console.log(error)}



  }



}
