import { Component } from '@angular/core';
import { WeatherService } from './weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  city: string = '';
  forecast: any;

  constructor(private weatherService: WeatherService) { }

  getWeatherForecast() {
    this.weatherService.getWeatherForecast(this.city).subscribe(data => {
      this.forecast = data;
    });
  }
}
