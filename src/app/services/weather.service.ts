import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { WeatherResponse } from '../models/WeatherResponse.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) {

  }

  getWeatherData(cityName: string): Observable<WeatherResponse> {
    return this.http.get<WeatherResponse>(`${environment.weatherApiBaseUrl}`, {
      params: new HttpParams()
      .set('q', cityName)
      .set('appid', 'bd6372ee3b36d18beeaf0335928f2695')
      .set('units', 'metric')
      .set('lang', 'es')
    })
  }

  // `fetch(https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=${metric}&lang=${language})`
}
