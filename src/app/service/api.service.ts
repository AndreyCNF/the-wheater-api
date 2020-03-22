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
const key = '&key=c2b29d24 '

const urlCityName = 'https://api.hgbrasil.com/weather?format=json-cors&key=c2b29d24&city_name='


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
    return this.http.get<Forecast[]>(urlTemp+key)
      .pipe(map((data: any) => data.results.forecast))  
  }

  getCityName(city: string): Observable<Temperatura[]> {
return this.http.get<Temperatura[]>(`${urlCityName}/${city}`)
.pipe(map((data: any) => data.results))
  }
  getForecasByName(city: string): Observable<Temperatura[]> {
    return this.http.get<Temperatura[]>(`${urlCityName}/${city}`)
    .pipe(map((data: any) => data.results.forecast))
      }
}
