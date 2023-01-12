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

export interface ExperienceI{
  id: number;
  name: string;
}

export interface SubexperienceI{
  id: number;
  experienceId: number;
  name: string;
}
