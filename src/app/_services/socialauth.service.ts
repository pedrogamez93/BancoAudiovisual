import { Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {GoogleAuthProvider} from '@firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class SocialauthService {

  constructor(private auth : AngularFireAuth , private router: Router) { }


  //login con google
  googleAuth () {

    return this.authLogin(new GoogleAuthProvider())
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
