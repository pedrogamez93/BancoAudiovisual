export interface CountryI{
  id:number;
  name: string;

}

export interface CityI{
  id:number;
  countryId:number;
  name:string;
}

export interface EmpresaI{
  id:number;
  name: string;
}

export interface CargoI{
  id:number;
  cargoId:number;
  name:string;
}
