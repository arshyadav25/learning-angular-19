import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private cartItems = new BehaviorSubject<any[]>([]);
  cartItems$ = this.cartItems.asObservable();


  constructor(private _http: HttpClient ) { }


  getlogindetils(): Observable<any>{
    return  this._http.get('https://dummyjson.com/c/7341-dc09-4612-ac5a')
  }
  FedExCup(): Observable<any>{
    return  this._http.get('https://dummyjson.com/c/b598-bdd6-4db6-93b6')
  }
  organizations(): Observable<any>{
    return  this._http.get('https://dummyjson.com/c/03b3-58e8-445b-a249')
  }
  schedules(): Observable<any>{
    return  this._http.get('https://dummyjson.com/c/93c3-8003-4dcf-8b69')
  }
  players(): Observable<any>{
    return  this._http.get('https://dummyjson.com/c/7195-954a-4df2-bd21')
  }
  tournaments(): Observable<any>{
    return  this._http.get('https://dummyjson.com/c/51e5-80c7-48dd-bbc4')
  }
  leaderboards(): Observable<any>{
    return  this._http.get('https://dummyjson.com/c/2f6b-3788-421d-9d24')
  }
  scorecards(): Observable<any>{
    return  this._http.get('https://dummyjson.com/c/bb06-12ec-42f4-96ed')
  }
  points(): Observable<any>{
    return  this._http.get('https://dummyjson.com/c/284f-8700-4deb-a189')
  }
  earnings(): Observable<any>{
    return  this._http.get('https://dummyjson.com/c/4fd6-7990-4331-b3cb')
  }
}
