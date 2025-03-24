import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  private cartItems = new BehaviorSubject<any[]>([]);
  cartItems$ = this.cartItems.asObservable();

  constructor(private _http: HttpClient) {}

  players(): Observable<any> {
    return this._http.get('https://dummyjson.com/c/7195-954a-4df2-bd21');
  }

  getFunction(url: any) {
    console.log(url);
    return this._http.get(url);
  }
}
