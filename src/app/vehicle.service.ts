import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vehicle } from './vehicle';

@Injectable({
  providedIn: 'root',
})
export class VehicleService {
  constructor(private _httpclient: HttpClient) {}

  getVehicles(): Observable<Vehicle[]> {
    return this._httpclient.get<Vehicle[]>(
      'https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction'
    );
  }
  getVehicle(id:string): Observable<Vehicle> {
    return this._httpclient.get<Vehicle>(
      'https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction'+'/'+id
    );
  }

  createVehilcle(vehicle: Vehicle): Observable<Vehicle> {
    return this._httpclient.post<Vehicle>(
      'https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction',
      vehicle
    );
  }
}
