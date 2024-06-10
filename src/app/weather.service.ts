import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private apiUrl = 'https://localhost:44385/api/weatherforecast';

  constructor(private http: HttpClient) { }

  getWeatherForecast(city: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${city}`);
  }
}
