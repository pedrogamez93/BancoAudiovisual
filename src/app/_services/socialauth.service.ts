import { Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {GoogleAuthProvider} from '@firebase/auth';
import { AuthService } from './auth.service';


@Injectable({
  providedIn: 'root'
})
export class SocialauthService {

  constructor(private auth : AngularFireAuth , private router: Router) { }


  //login con google
  googleAuth () {
    this.sendVerificationEmail();
    console.log('hola');
    return this.authLogin(new GoogleAuthProvider())
 
  }

  sendVerificationEmail() {
    return this.auth.currentUser
      .then((user) => {
        console.log('Se realizo en envio de correo ');
        return user.sendEmailVerification();
       
      })
      .then(() => {
        //Aqui va la accion que quieres realizar luego de cumplida la accion de arriba
      });
    
  }


  authLogin(provider:any){
    return this.auth.signInWithPopup(provider).then(result => {
      console.log('success login',result);
      
    }).catch((error) => 
    console.log(error));
  


  }


  async logOut(){
    this.auth.signOut();

  }


  getStateUser(){
    return this.auth.authState;
  }

  
}
