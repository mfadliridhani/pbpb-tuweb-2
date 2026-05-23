import axios from 'axios';

const API_URL =
  'https://api.open-meteo.com/v1/forecast?latitude=-6.2&longitude=106.8&hourly=temperature_2m';

export interface HourlyData {
  time: string[];
  temperature_2m: number[];
}

export interface WeatherResponse {
  latitude: number;
  longitude: number;
  hourly: HourlyData;
}

export interface WeatherEntry {
  time: string;
  temperature_2m: number;
}

class WeatherService {
  async getWeather(): Promise<WeatherEntry[]> {
    const response = await axios.get<WeatherResponse>(API_URL);
    const { time, temperature_2m } = response.data.hourly;

    return time.map((t, index) => ({
      time: t,
      temperature_2m: temperature_2m[index],
    }));
  }
}

export default new WeatherService();
