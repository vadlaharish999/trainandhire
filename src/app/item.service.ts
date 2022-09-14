import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from './item';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private _httpclient:HttpClient) { }
  getitems():Observable<Item[]>{
    return this._httpclient.get<Item[]>('https://fakestoreapi.com/products');
  }
}
