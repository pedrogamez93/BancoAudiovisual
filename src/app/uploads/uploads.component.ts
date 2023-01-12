import { RestService } from '../_services/rest.service';
import  {  Component ,  OnInit  }  from  '@angular/core' ;
import  {  FormControl ,  FormGroup  }  from  '@angular/forms' ;
import { FormsModule } from '@angular/forms';
import { ExperienceI, SubexperienceI } from '../models/model.interface';

import{ DataService } from '../_services/data.service';



@Component({
  selector: 'app-uploads',
  templateUrl: './uploads.component.html',
  styleUrls: ['./uploads.component.css']
})
export class UploadsComponent implements OnInit {

  public selectedExperience: ExperienceI = {id:0, name:''};
  public experience!: ExperienceI[];
  public subexperience!: SubexperienceI[];

  private fileTmp:any;

  constructor(private restService: RestService, private dataSvc: DataService,) {


   }

  ngOnInit(): void {
    this.experience = this.dataSvc.getExperience();

  }

  onSelect3(id: number): void{
    this.subexperience = this.dataSvc.getSubexperience().filter(item => item.experienceId == id)
  }



  getFile($event:any): void {
    

    const [ file ] = $event.target.files;
    this.fileTmp ={
      fileRaw:file,
      fileName:file.name
    }
  }

  sendFile():void{

    const body = new FormData();
    body.append('myFile' , this.fileTmp.fileRaw, this.fileTmp.fileName)

    this.restService.sendPost(body)
    .subscribe(res => console.log(res))

  }

}
