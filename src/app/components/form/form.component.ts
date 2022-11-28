import { isNgTemplate } from '@angular/compiler';
import { Component, importProvidersFrom, OnInit } from '@angular/core';
import { provideRoutes } from '@angular/router';
import { CountryI, CityI } from '../../models/model.interface';
import { EmpresaI, CargoI } from '../../models/model.interface';

import{ DataService } from '../../services/data.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']

})
export class FormComponent implements OnInit {
  public selectedCountry: CountryI = { id:0, name:''  };
  public countries!: CountryI[];
  public cities!: CityI[];
  public element:boolean = false;
  public country:string ='chile';

  public selectedEmpresa: EmpresaI = { id:0, name:''};
  public empresas!: EmpresaI[];
  public cargos!: CargoI[];

  constructor(private dataSvc: DataService ) { }

  ngOnInit(): void {
     this.countries = this.dataSvc.getCountries();
     this.empresas = this.dataSvc.getEmpresas();
    console.log(this.dataSvc.getCountries());
    console.log(this.dataSvc.getCities());
  }

  onSelect(id: number): void{
    this.cities = this.dataSvc.getCities().filter(item => item.countryId == id);
  }

  onSelect2(id: number): void{
    this.cargos = this.dataSvc.getCargos().filter(item => item.cargoId == id)
  }

}

