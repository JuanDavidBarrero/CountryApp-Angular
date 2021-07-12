import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/pais.Interface';

@Injectable({
  providedIn: 'root'
})

export class PaisService {

  private apiUrl:string = "https://restcountries.eu/rest/v2";

  get httpParams(){
    return new HttpParams().set('fields','name;aplha2code;flag;population');
  }

  constructor(  private http:HttpClient) { }

  buscarPais(termino:String): Observable<Country[]>{
    const url = `${this.apiUrl}/name/${termino}`;
    return this.http.get<Country[]>(url,{params:this.httpParams});
  }

  burcarCapital(termino:String):Observable<Country[]>{

    const url = `${this.apiUrl}/capital/${termino}`;
    return this.http.get<Country[]>(url,{params:this.httpParams});
  }

  getPaisporAlpha(id:string):Observable<Country>{
    const url = `${this.apiUrl}/alpha/${id}`;
    return this.http.get<Country>(url);
  }

  buscarPaisesPorRegion(region:string):Observable<Country[]>{
    const url = `${this.apiUrl}/region/${region}`;
    return this.http.get<Country[]>(url,{params:this.httpParams});
  }

}
