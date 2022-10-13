import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GeoService } from '../../services/geo.service';
import { DateRange } from '@angular/material/datepicker';

@Component({
  selector: 'app-geo',
  templateUrl: './geo.component.html',
  styleUrls: ['./geo.component.css']
})
export class GeoComponent implements OnInit {

    ip_address: string = '';
    city: string = '';
    region: string = '';
    postal_code: string = '';
    country: string = '';
    continent: string = '';
    longitude: number = 0;
    latitude: number = 0;
    flag: string = '';
    

  constructor(private http: HttpClient, private geoService: GeoService) { }

  ngOnInit() {
    this.geoService.getLocation().subscribe(data => {
      console.log(data);
      this.ip_address = data.ip_address;
      this.city = data.city;
      this.region = data.region;
      this.postal_code = data.postal_code;
      this.country = data.country;
      this.continent = data.continent;
      this.latitude = data.latitude;
      this.longitude = data.longitude;
      this.flag = data.flag.png;
    });
  }



}
