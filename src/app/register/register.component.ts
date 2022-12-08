import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { CountryI, CityI } from '../models/model.interface';
import { EmpresaI, CargoI } from '../models/model.interface';

import{ DataService } from '../_services/data.service';

import { SocialauthService } from '../_services/socialauth.service';
import { User } from '../models/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  public selectedCountry: CountryI = { id:0, name:''  };
  public countries!: CountryI[];
  public cities!: CityI[];
  public element:boolean = false;
  public country:string ='chile';

  public selectedEmpresa: EmpresaI = { id:0, name:''};
  public empresas!: EmpresaI[];
  public cargos!: CargoI[];


  form: any = {
    username: null,
    email: null,
    password: null
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  UserModel= new User;
  SocialLogindata=false;
  public correosave :any;


  constructor(private authService: AuthService, private dataSvc: DataService, private SocialAuthServices:SocialauthService) {


   }




  ngOnInit(): void {
    this.countries = this.dataSvc.getCountries();
    this.empresas = this.dataSvc.getEmpresas();


  }

  onSelect(id: number): void{
    this.cities = this.dataSvc.getCities().filter(item => item.countryId == id);
  }

  onSelect2(id: number): void{
    this.cargos = this.dataSvc.getCargos().filter(item => item.cargoId == id)
  }

  onSubmit(): void {
    const { username, email, password } = this.form;

    this.authService.register(username, email, password).subscribe({
      next: data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    });
  }

  onSubmitG(): void {


    this.authService.register(this.correosave, this.correosave, this.correosave).subscribe({
      next: data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
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
      this.correosave =this.UserModel.displayName;
      }

    )
  this.onSubmitG();

      }





}


