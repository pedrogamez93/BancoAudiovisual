import { Injectable } from '@angular/core';
import { CountryI, CityI, EmpresaI, CargoI, ExperienceI, SubexperienceI } from '../models/model.interface';

@Injectable({
  providedIn: 'root'
})

    export class DataService {
      private countries : CountryI[] = [
        {
          id : 144,
          name : 'Afganistán'
        },
        {
          id : 114,
          name : 'Albania'
        },
        {
          id : 18,
          name : 'Alemania'
        },
        {
          id : 98,
          name : 'Algeria'
        },
        {
          id : 145,
          name : 'Andorra'
        },
        {
          id : 119,
          name : 'Angola'
        },
        {
          id : 4,
          name : 'Anguilla'
        },
        {
          id : 147,
          name : 'Antigua y Barbuda'
        },
        {
          id : 207,
          name : 'Antillas Holandesas'
        },
        {
          id : 91,
          name : 'Arabia Saudita'
        },
        {
          id : 5,
          name : 'Argentina'
        },
        {
          id : 6,
          name : 'Armenia'
        },
        {
          id : 142,
          name : 'Aruba'
        },
        {
          id : 1,
          name : 'Australia'
        },
        {
          id : 2,
          name : 'Austria'
        },
        {
          id : 3,
          name : 'Azerbaiyán'
        },
        {
          id : 80,
          name : 'Bahamas'
        },
        {
          id : 127,
          name : 'Bahrein'
        },
        {
          id : 149,
          name : 'Bangladesh'
        },
        {
          id : 128,
          name : 'Barbados'
        },
        {
          id : 9,
          name : 'Bélgica'
        },
        {
          id : 8,
          name : 'Belice'
        },
        {
          id : 151,
          name : 'Benín'
        },
        {
          id : 10,
          name : 'Bermudas'
        },
        {
          id : 7,
          name : 'Bielorrusia'
        },
        {
          id : 123,
          name : 'Bolivia'
        },
        {
          id : 79,
          name : 'Bosnia y Herzegovina'
        },
        {
          id : 100,
          name : 'Botsuana'
        },
        {
          id : 12,
          name : 'Brasil'
        },
        {
          id : 155,
          name : 'Brunéi'
        },
        {
          id : 11,
          name : 'Bulgaria'
        },
        {
          id : 156,
          name : 'Burkina Faso'
        },
        {
          id : 157,
          name : 'Burundi'
        },
        {
          id : 152,
          name : 'Bután'
        },
        {
          id : 159,
          name : 'Cabo Verde'
        },
        {
          id : 158,
          name : 'Camboya'
        },
        {
          id : 31,
          name : 'Camerún'
        },
        {
          id : 32,
          name : 'Canadá'
        },
        {
          id : 130,
          name : 'Chad'
        },
        {
          id : 81,
          name : 'Chile'
        },
        {
          id : 35,
          name : 'China'
        },
        {
          id : 33,
          name : 'Chipre'
        },
        {
          id : 82,
          name : 'Colombia'
        },
        {
          id : 164,
          name : 'Comores'
        },
        {
          id : 112,
          name : 'Congo (Brazzaville)'
        },
        {
          id : 165,
          name : 'Congo (Kinshasa)'
        },
        {
          id : 166,
          name : 'Cook, Islas'
        },
        {
          id : 84,
          name : 'Corea del Norte'
        },
        {
          id : 69,
          name : 'Corea del Sur'
        },
        {
          id : 168,
          name : 'Costa de Marfil'
        },
        {
          id : 36,
          name : 'Costa Rica'
        },
        {
          id : 71,
          name : 'Croacia'
        },
        {
          id : 113,
          name : 'Cuba'
        },
        {
          id : 22,
          name : 'Dinamarca'
        },
        {
          id : 169,
          name : 'Djibouti, Yibuti'
        },
        {
          id : 103,
          name : 'Ecuador'
        },
        {
          id : 23,
          name : 'Egipto'
        },
        {
          id : 51,
          name : 'El Salvador'
        },
        {
          id : 93,
          name : 'Emiratos Árabes Unidos'
        },
        {
          id : 173,
          name : 'Eritrea'
        },
        {
          id : 52,
          name : 'Eslovaquia'
        },
        {
          id : 53,
          name : 'Eslovenia'
        },
        {
          id : 28,
          name : 'España'
        },
        {
          id : 55,
          name : 'Estados Unidos'
        },
        {
          id : 68,
          name : 'Estonia'
        },
        {
          id : 121,
          name : 'Etiopía'
        },
        {
          id : 175,
          name : 'Feroe, Islas'
        },
        {
          id : 90,
          name : 'Filipinas'
        },
        {
          id : 63,
          name : 'Finlandia'
        },
        {
          id : 176,
          name : 'Fiyi'
        },
        {
          id : 64,
          name : 'Francia'
        },
        {
          id : 180,
          name : 'Gabón'
        },
        {
          id : 181,
          name : 'Gambia'
        },
        {
          id : 21,
          name : 'Georgia'
        },
        {
          id : 105,
          name : 'Ghana'
        },
        {
          id : 143,
          name : 'Gibraltar'
        },
        {
          id : 184,
          name : 'Granada'
        },
        {
          id : 20,
          name : 'Grecia'
        },
        {
          id : 94,
          name : 'Groenlandia'
        },
        {
          id : 17,
          name : 'Guadalupe'
        },
        {
          id : 185,
          name : 'Guatemala'
        },
        {
          id : 186,
          name : 'Guernsey'
        },
        {
          id : 187,
          name : 'Guinea'
        },
        {
          id : 172,
          name : 'Guinea Ecuatorial'
        },
        {
          id : 188,
          name : 'Guinea-Bissau'
        },
        {
          id : 189,
          name : 'Guyana'
        },
        {
          id : 16,
          name : 'Haiti'
        },
        {
          id : 137,
          name : 'Honduras'
        },
        {
          id : 73,
          name : 'Hong Kong'
        },
        {
          id : 14,
          name : 'Hungría'
        },
        {
          id : 25,
          name : 'India'
        },
        {
          id : 74,
          name : 'Indonesia'
        },
        {
          id : 140,
          name : 'Irak'
        },
        {
          id : 26,
          name : 'Irán'
        },
        {
          id : 27,
          name : 'Irlanda'
        },
        {
          id : 215,
          name : 'Isla Pitcairn'
        },
        {
          id : 83,
          name : 'Islandia'
        },
        {
          id : 228,
          name : 'Islas Salomón'
        },
        {
          id : 58,
          name : 'Islas Turcas y Caicos'
        },
        {
          id : 154,
          name : 'Islas Virgenes Británicas'
        },
        {
          id : 24,
          name : 'Israel'
        },
        {
          id : 29,
          name : 'Italia'
        },
        {
          id : 132,
          name : 'Jamaica'
        },
        {
          id : 70,
          name : 'Japón'
        },
        {
          id : 193,
          name : 'Jersey'
        },
        {
          id : 75,
          name : 'Jordania'
        },
        {
          id : 30,
          name : 'Kazajstán'
        },
        {
          id : 97,
          name : 'Kenia'
        },
        {
          id : 34,
          name : 'Kirguistán'
        },
        {
          id : 195,
          name : 'Kiribati'
        },
        {
          id : 37,
          name : 'Kuwait'
        },
        {
          id : 196,
          name : 'Laos'
        },
        {
          id : 197,
          name : 'Lesotho'
        },
        {
          id : 38,
          name : 'Letonia'
        },
        {
          id : 99,
          name : 'Líbano'
        },
        {
          id : 198,
          name : 'Liberia'
        },
        {
          id : 39,
          name : 'Libia'
        },
        {
          id : 126,
          name : 'Liechtenstein'
        },
        {
          id : 40,
          name : 'Lituania'
        },
        {
          id : 41,
          name : 'Luxemburgo'
        },
        {
          id : 85,
          name : 'Macedonia'
        },
        {
          id : 134,
          name : 'Madagascar'
        },
        {
          id : 76,
          name : 'Malasia'
        },
        {
          id : 125,
          name : 'Malawi'
        },
        {
          id : 200,
          name : 'Maldivas'
        },
        {
          id : 133,
          name : 'Malí'
        },
        {
          id : 86,
          name : 'Malta'
        },
        {
          id : 131,
          name : 'Man, Isla de'
        },
        {
          id : 104,
          name : 'Marruecos'
        },
        {
          id : 201,
          name : 'Martinica'
        },
        {
          id : 202,
          name : 'Mauricio'
        },
        {
          id : 108,
          name : 'Mauritania'
        },
        {
          id : 42,
          name : 'México'
        },
        {
          id : 43,
          name : 'Moldavia'
        },
        {
          id : 44,
          name : 'Mónaco'
        },
        {
          id : 139,
          name : 'Mongolia'
        },
        {
          id : 117,
          name : 'Mozambique'
        },
        {
          id : 205,
          name : 'Myanmar'
        },
        {
          id : 102,
          name : 'Namibia'
        },
        {
          id : 206,
          name : 'Nauru'
        },
        {
          id : 107,
          name : 'Nepal'
        },
        {
          id : 209,
          name : 'Nicaragua'
        },
        {
          id : 210,
          name : 'Níger'
        },
        {
          id : 115,
          name : 'Nigeria'
        },
        {
          id : 212,
          name : 'Norfolk Island'
        },
        {
          id : 46,
          name : 'Noruega'
        },
        {
          id : 208,
          name : 'Nueva Caledonia'
        },
        {
          id : 45,
          name : 'Nueva Zelanda'
        },
        {
          id : 213,
          name : 'Omán'
        },
        {
          id : 19,
          name : 'Países Bajos, Holanda'
        },
        {
          id : 87,
          name : 'Pakistán'
        },
        {
          id : 124,
          name : 'Panamá'
        },
        {
          id : 88,
          name : 'Papúa-Nueva Guinea'
        },
        {
          id : 110,
          name : 'Paraguay'
        },
        {
          id : 89,
          name : 'Perú'
        },
        {
          id : 178,
          name : 'Polinesia Francesa'
        },
        {
          id : 47,
          name : 'Polonia'
        },
        {
          id : 48,
          name : 'Portugal'
        },
        {
          id : 246,
          name : 'Puerto Rico'
        },
        {
          id : 216,
          name : 'Qatar'
        },
        {
          id : 13,
          name : 'Reino Unido'
        },
        {
          id : 65,
          name : 'República Checa'
        },
        {
          id : 138,
          name : 'República Dominicana'
        },
        {
          id : 49,
          name : 'Reunión'
        },
        {
          id : 217,
          name : 'Ruanda'
        },
        {
          id : 72,
          name : 'Rumanía'
        },
        {
          id : 50,
          name : 'Rusia'
        },
        {
          id : 242,
          name : 'Sáhara Occidental'
        },
        {
          id : 223,
          name : 'Samoa'
        },
        {
          id : 219,
          name : 'San Cristobal y Nevis'
        },
        {
          id : 224,
          name : 'San Marino'
        },
        {
          id : 221,
          name : 'San Pedro y Miquelón'
        },
        {
          id : 225,
          name : 'San Tomé y Príncipe'
        },
        {
          id : 222,
          name : 'San Vincente y Granadinas'
        },
        {
          id : 218,
          name : 'Santa Elena'
        },
        {
          id : 220,
          name : 'Santa Lucía'
        },
        {
          id : 135,
          name : 'Senegal'
        },
        {
          id : 226,
          name : 'Serbia y Montenegro'
        },
        {
          id : 109,
          name : 'Seychelles'
        },
        {
          id : 227,
          name : 'Sierra Leona'
        },
        {
          id : 77,
          name : 'Singapur'
        },
        {
          id : 106,
          name : 'Siria'
        },
        {
          id : 229,
          name : 'Somalia'
        },
        {
          id : 120,
          name : 'Sri Lanka'
        },
        {
          id : 141,
          name : 'Sudáfrica'
        },
        {
          id : 232,
          name : 'Sudán'
        },
        {
          id : 67,
          name : 'Suecia'
        },
        {
          id : 66,
          name : 'Suiza'
        },
        {
          id : 54,
          name : 'Surinam'
        },
        {
          id : 234,
          name : 'Swazilandia'
        },
        {
          id : 56,
          name : 'Tadjikistan'
        },
        {
          id : 92,
          name : 'Tailandia'
        },
        {
          id : 78,
          name : 'Taiwan'
        },
        {
          id : 101,
          name : 'Tanzania'
        },
        {
          id : 171,
          name : 'Timor Oriental'
        },
        {
          id : 136,
          name : 'Togo'
        },
        {
          id : 235,
          name : 'Tokelau'
        },
        {
          id : 236,
          name : 'Tonga'
        },
        {
          id : 237,
          name : 'Trinidad y Tobago'
        },
        {
          id : 122,
          name : 'Túnez'
        },
        {
          id : 57,
          name : 'Turkmenistan'
        },
        {
          id : 59,
          name : 'Turquía'
        },
        {
          id : 239,
          name : 'Tuvalu'
        },
        {
          id : 62,
          name : 'Ucrania'
        },
        {
          id : 60,
          name : 'Uganda'
        },
        {
          id : 111,
          name : 'Uruguay'
        },
        {
          id : 61,
          name : 'Uzbekistán'
        },
        {
          id : 240,
          name : 'Vanuatu'
        },
        {
          id : 95,
          name : 'Venezuela'
        },
        {
          id : 15,
          name : 'Vietnam'
        },
        {
          id : 241,
          name : 'Wallis y Futuna'
        },
        {
          id : 243,
          name : 'Yemen'
        },
        {
          id : 116,
          name : 'Zambia'
        },
        {
          id : 96,
          name : 'Zimbabwe'
        }
    ];

    private cities : CityI[]=[
      {
        id : 1,
        countryId : 81,
        name : 'Región de Arica y Parinacota '
      },
      {
        id : 2,
        countryId : 81,
        name : 'Región de Tarapacá'
      },
      {
        id : 3,
        countryId : 81,
        name : 'Región de Antofagasta'
      },
      {
        id : 4,
        countryId : 81,
        name : 'Región de Atacama'
      },
      {
        id : 5,
        countryId : 81,
        name : 'Región de Coquimbo'
      },
      {
        id : 6,
        countryId : 81,
        name : 'Región de Valparaíso'
      },
      {
        id : 7,
        countryId : 81,
        name : 'Región Metropolitana de Santiago'
      },
      {
        id : 8,
        countryId : 81,
        name : 'Región del Libertador General Bernardo O´Higgins'
      },
      {
        id : 9,
        countryId : 81,
        name : 'Región del Maule'
      },
      {
        id : 10,
        countryId : 81,
        name : 'Región de Ñuble'
      },
      {
        id : 11,
        countryId : 81,
        name : 'Región del Bío-Bío'
      },
      {
        id : 12,
        countryId : 81,
        name : 'Región de La Araucanía'
      },
      {
        id : 13,
        countryId : 81,
        name : 'Región de Los Ríos'
      },
      {
        id : 14,
        countryId : 81,
        name : 'Región de Los Lagos'
      },
      {
        id : 15,
        countryId : 81,
        name : 'Región de Aysén del General Carlos Ibánez del Campo'
      },
      {
        id : 16,
        countryId : 81,
        name : 'Región de Magallanes y de la Antártica Chilena'
      },

    ];

    private empresas : EmpresaI[]=[
        {
          id : 1,
          name : 'SERNATUR'
        },
        {
          id : 1,
          name : 'OTRA'
        },
      ];

      private cargos : CargoI[]=[
        {
          id : 1,
          cargoId : 1,
          name : ' Agente de turismo'
        },
        {
          id : 2,
          cargoId : 1,
          name : 'Asistentes comerciales'
        },
        {
          id : 3,
          cargoId : 1,
          name : 'Community manager'
        },
        {
          id : 4,
          cargoId : 1,
          name : 'Directivo/gerente'
        },
        {
          id : 5,
          cargoId : 1,
          name : 'Diseñador'
        },
        {
          id :6,
          cargoId : 1,
          name : 'Encargado de marketing'
        },
        {
          id :7,
          cargoId : 1,
          name : 'Encargado de ventas'
        },
        {
          id : 8,
          cargoId : 1,
          name : 'Fotógrafo'
        },
        {
          id : 9,
          cargoId : 1,
          name : 'Funcionario municipal'
        },
        {
          id : 10,
          cargoId : 1,
          name :'Gerente comercial'
        },
        {
          id : 11,
          cargoId : 1,
          name : 'Gerente de marketing'
        },
        {
          id : 12,
          cargoId : 1,
          name : 'Guía de turismo'
        },
        {
          id :13,
          cargoId : 1,
          name : 'Periodista'
        },
        {
          id : 14,
          cargoId : 1,
          name : 'Prestador de servicios turísticos'
        },
        {
          id : 15,
          cargoId : 1,
          name :'Vendedor'

        },
        {
          id : 16,
          cargoId : 1,
          name :'OTRO'

        },
 ];
          private experience : ExperienceI[]=[
        {
          id : 1,
          name : ' Aventura y deporte'
        },
        {
          id : 2,
          name : 'Naturaleza'
        },
        {
          id : 3,
          name : 'Gastronomia'
        },
        {
          id : 4,
          name : 'Paseos en viñas'
        },
        {
          id : 5,
          name : 'Enoturismo'
        },
        {
          id :6,
          name : 'Turismo indigena'
        },
        {
          id :7,
          name : 'Cultura'
        },
        {
          id : 8,
          name : 'Astroturismo'
        },
        {
          id : 9,
          name : 'Navegación'
        },
        {
          id : 10,
          name :'Relajo y Bienestar'
        },
        {
          id : 11,
          name : 'Balnearios'
        },
        {
          id : 12,
          name : 'Vida Urbana'
        },
        {
          id :13,
          name : 'Turismo de Reuniones'
        },

      ];

      private subexperience : SubexperienceI[]=[
        {
          id : 1,
          experienceId : 1,
          name : 'Snowboard'
        },
        {
          id : 2,
          experienceId : 1,
          name : 'Kitesurf'
        },
        {
          id : 3,
          experienceId : 1,
          name : 'Buceo'
        },
        {
          id : 4,
          experienceId : 1,
          name : 'Ski'
        },
        {
          id : 5,
          experienceId : 1,
          name : 'Sandboard'
        },
        {
          id :6,
          experienceId : 1,
          name : 'Trekking'
        },
        {
          id :7,
          experienceId : 1,
          name : 'Pesca deportiva'
        },
        {
          id : 8,
          experienceId : 1,
          name : 'Parapente'
        },
        {
          id : 9,
          experienceId : 1,
          name : 'Rafting'
        },
        {
          id : 10,
          experienceId : 1,
          name :'Kayak'
        },
        {
          id : 11,
          experienceId : 1,
          name : 'Escaladas'
        },
        {
          id : 12,
          experienceId : 1,
          name : 'Montañismo'
        },
        {
          id :13,
          experienceId : 1,
          name : 'Mountain Bike'
        },
        {
          id : 14,
          experienceId : 1,
          name : 'Canopy'
        },
        {
          id : 15,
          experienceId : 1,
          name : 'Cabalgatas'
        },
        {
          id : 16,
          experienceId : 1,
          name : 'Surf'
        },
        {
          id : 17,
          experienceId : 1,
          name : 'Deportes náuticos'
        },
        {
          id : 18,
          experienceId : 1,
          name : 'Hiking'
        },
        {
          id : 19,
          experienceId : 2,
          name : 'Camping'
        },
        {
          id : 20,
          experienceId : 2,
          name : 'Parques y reservas naturales'
        },
        {
          id : 21,
          experienceId : 2,
          name : 'Ecoturismo'
        },
        {
          id : 22,
          experienceId : 2,
          name : 'Observación de Flora y Fauna'
        },
        {
          id : 23,
          experienceId : 2,
          name : 'Fotografías de paisajes'
        },
        {
          id : 24,
          experienceId : 2,
          name : 'Avistamiento de Aves'
        },
        {
          id : 25,
          experienceId : 3,
          name : 'Gastronomía del pacífico'
        },
        {
          id : 26,
          experienceId : 3,
          name : 'Gastronomía moderna'
        },
        {
          id : 27,
          experienceId : 3,
          name : 'Gastronomía Típica'
        },
        {
          id : 28,
          experienceId : 3,
          name : 'Degustaciones'
        },
        {
          id : 29,
          experienceId : 7,
          name : 'Patrimonios de la Humanidad'
        },
        {
          id : 30,
          experienceId : 7,
          name : 'Literatura'
        },
        {
          id : 31,
          experienceId : 7,
          name : 'Museos'
        },
        {
          id : 32,
          experienceId : 7,
          name : 'Ciencia del pasado'
        },
        {
          id : 33,
          experienceId : 7,
          name : 'Eventos'
        },
        {
          id : 34,
          experienceId : 8,
          name : 'Contemplación de estrellas'
        },
        {
          id : 35,
          experienceId : 8,
          name : 'Astronomía'
        },
        {
          id : 36,
          experienceId : 9,
          name : 'Navegación de lagos'
        },
        {
          id : 37,
          experienceId : 9,
          name : 'Cruceros patagónicos'
        },
        {
          id : 38,
          experienceId : 9,
          name : 'Cruceros internacionales'
        },
        {
          id : 39,
          experienceId : 10,
          name : 'Termas'
        },
        {
          id : 40,
          experienceId : 10,
          name : 'Spa'
        },
        {
          id : 41,
          experienceId : 11,
          name : 'Playas'
        },
        {
          id : 42,
          experienceId : 11,
          name : 'Piscinas'
        },
        {
          id : 43,
          experienceId : 12,
          name : 'Shopping'
        },
        {
          id : 44,
          experienceId : 12,
          name : 'City Tour'
        },
        {
          id : 45,
          experienceId : 12,
          name : 'Vida Nocturna'
        },
      ];

      getCountries(): CountryI[] {
        return this.countries;
       }

       getCities(): CityI[]{
        return this.cities;
       }

       getEmpresas(): EmpresaI[] {
        return this.empresas;
       }

       getCargos(): CargoI[]{
        return this.cargos;
       }

       getExperience(): ExperienceI[]{
        return this.experience;
       }

       getSubexperience(): SubexperienceI[]{
        return this.subexperience;

       }
    }



