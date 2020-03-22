import { Component, OnInit, Input } from '@angular/core';
import { Temperatura } from '../model/Temperatura';
import { ApiService } from '../service/api.service';
import { transformAll } from '@angular/compiler/src/render3/r3_ast';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  Temperaturas: any = [];
  Forecast:any = [];
  city: string = '';


  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getTemp().subscribe((data: Temperatura[]) => {
      this.Temperaturas = data
    });
 
this.apiService.getForecast().subscribe(res => {
  this.Forecast = res
})
  }

filterbyName(city){
  console.log(city)

  if(city) {
    return this.apiService.getCityName(city).subscribe(data=> this.Temperaturas = data) &&
              this.apiService.getForecasByName(city).subscribe(data => this.Forecast = data)
  } else {
    return this.Temperaturas && this.Forecast;
  }
}
}
