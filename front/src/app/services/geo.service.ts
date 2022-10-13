import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface LocationAPI{
    ip_address: string,
    city: string,
    region: string,
    postal_code: string,
    country: string,
    continent: string,
    longitude: number,
    latitude: number,
    flag:{
      png: string
    }
}
@Injectable({
  providedIn: 'root'
})
export class GeoService {

  constructor(private http: HttpClient) { }

  getLocation(){
    return this.http.get<LocationAPI>('https://ipgeolocation.abstractapi.com/v1/?api_key=a614e6e7b7c848748a491ca0375afaa7')
  }
}
