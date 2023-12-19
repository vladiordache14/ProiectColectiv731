import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError, map, Observable, throwError} from "rxjs";
import { Advert } from '../model/advert'; 

  const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root'
})
export class AdvertService {
  constructor(private http: HttpClient) { }



  getActiveAdverts(): Observable<Advert[]> {
    return this.http.get<Advert[]>("http://localhost:8080/adverts/active").pipe(
      map(adverts => {
        if (adverts.length > 1) {
          adverts.sort((a, b) => a.name.localeCompare(b.name))
        }
        return adverts;
      }),
      catchError((error: any, caught: Observable<Advert[]>) => {
        console.error('Error fetching adverts:', error);
        return throwError(() => new Error('An error occurred'));
      })
    );
  }


addAdvert(advert: FormData): Observable<Advert> {
  return this.http.post<Advert>("http://localhost:8080/advert", advert)
}
}
