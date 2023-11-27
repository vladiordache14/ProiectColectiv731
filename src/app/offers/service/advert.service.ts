import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, map, Observable, throwError} from "rxjs";
import {Advert} from "../advert";

@Injectable({
  providedIn: 'root'
})
export class AdvertService {
  private apiUrl = 'http://localhost:8080';
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

  deactivateAdvert(advertId: number): Observable<void> {
    const url = `${this.apiUrl}/adverts/${advertId}/deactivate`;
    return this.http.post<void>(url, {});
  }
}
