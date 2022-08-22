import { Component, OnInit } from '@angular/core';
import { WeatherResponse } from './models/WeatherResponse.model';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private weatherService: WeatherService) {}
  
  weatherData?: WeatherResponse;
  cityName: string = 'Lima';
  image1: string = 'assets/morning.svg';
  image2: string = 'assets/night.svg'
  loader: boolean = true;

  ngOnInit(): void {
    this.getWeatherData(this.cityName);
    setTimeout(() => {
      this.loader = false;
    }, 3000)
  }

  onSubmit() {
    this.loader = true;
    this.getWeatherData(this.cityName);
    this.cityName = '';
    setTimeout(() => {
      this.loader = false;
    }, 3000)
  }

  private getWeatherData(cityName: string){ 
    this.weatherService.getWeatherData(cityName).subscribe({
      next: (response) => {
        console.log(response);
        this.weatherData = response;
      }
    });
  }

  
}
