import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Temperatura } from '../model/Temperatura';
import {catchError, tap, map} from 'rxjs/operators'
import { Forecast } from '../model/forecast';


const httpOptions = {
  headers: new HttpHeaders({ 'Content Type': 'application/json'})
}

const urlTemp = 'https://api.hgbrasil.com/weather?format=json-cors'
const urlCity = 'http://apiadvisor.climatempo.com.br/api/v1/locale/city?name='
const key = '&key=d8d37e08'


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }


  getTemp():Observable<Temperatura[]> {
    return this.http.get<Temperatura[]>(urlTemp + key)
      .pipe(map((data: any) => data.results))
      
  }
  getForecast():Observable<Forecast[]> {
    return this.http.get<Forecast[]>(urlTemp + key)
      .pipe(map((data: any) => data.results.forecast))
      
  }
  getTempId(id: number): Observable<Temperatura[]> {
return this.http.get<Temperatura[]>(`${urlTemp}/${id}${key}`)
.pipe(tap(temperaturas => console.log(temperaturas)))
  }
}
