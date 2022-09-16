import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cartCount: BehaviorSubject<any>=new BehaviorSubject(0)

  constructor() { }
  setvalue(value:any){
    this.cartCount.next(value);
  }
  getvalue(){
    return this.cartCount.asObservable();
    
  }
}
