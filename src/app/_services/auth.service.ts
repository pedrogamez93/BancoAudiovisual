import { Injectable,NgZone } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';



const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  
  AUTH_API= environment.AUTH_API;

  constructor(private http: HttpClient,
     public afAuth: AngularFireAuth, 
     public router : Router,
     public ngZone: NgZone) {}


  

  sendVerificationEmail() {
    return this.afAuth.currentUser
      .then((user) => {
        console.log('Se realizo en envio de correo ');
        return user.sendEmailVerification();
       
      })
      .then(() => {
        //Aqui va la accion que quieres realizar luego de cumplida la accion de arriba
      });
    
  }

  // Registro con email
signUpWithEmail(email: string, password: string) {
  return this.afAuth.createUserWithEmailAndPassword(email,password).then((result) =>{

    console.log('registro exitoso');
  }).catch((error) => {
    console.log(error.message);
  })


 }


  async resetPassword(email: string): Promise<void>{
    try{
      this.sendVerificationEmail();
      return this.afAuth.sendPasswordResetEmail(email);

    }

    catch(error){console.log(error)}
  }

  login(username: string, password: string): Observable<any> {
    return this.http.post(
      this.AUTH_API + 'signin',
      {
        username,
        password,
      },
      httpOptions
    );
  }

  register(username: string, email: string, password: string): Observable<any> {
    this.signUpWithEmail(email,password);
    return this.http.post(
      this.AUTH_API + 'signup',
      {
        username,
        email,
        password,
      },
      httpOptions
    );
    
  }

  logout(): Observable<any> {
    return this.http.post(this.AUTH_API + 'signout', { }, httpOptions);
  }

  sendPasswordResetEmail(email:String){}



}
