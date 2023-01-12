import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BrowserDynamicTestingModule } from "@angular/platform-browser-dynamic/testing";
import { Observable, observable } from "rxjs";

@Injectable({
    providedIn: 'root',
})

export class RestService{
    constructor(private http:HttpClient){

    }

    sendPost(body:FormData): Observable<any>{
        return this.http.post(`http://localhost:8080/upload`, body)
    }
}