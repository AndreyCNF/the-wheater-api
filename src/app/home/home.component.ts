import { Component, OnInit, Input } from '@angular/core';
import { Temperatura } from '../model/Temperatura';
import { ApiService } from '../service/api.service';
import { Forecast } from '../model/forecast';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  Temperaturas: any = [];
  Forecast: any = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getTemp().subscribe((data: Temperatura[]) => {
      this.Temperaturas = data
      console.log(data)
    });

    this.apiService.getForecast().subscribe(((data: Forecast[]) =>{
      this.Forecast = data 
      console.log(data);
    }))
  }

}
