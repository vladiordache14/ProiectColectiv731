import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, map, Observable, throwError} from "rxjs";
import {Offer} from "../offer";

@Injectable({
  providedIn: 'root'
})
export class OffersService {
  constructor(private http: HttpClient) { }

  getActiveOffers(): Observable<Offer[]> {
    return this.http.get<Offer[]>("http://localhost:8080/offers/active").pipe(
      map(offers => {
        if (offers.length > 1) {
          offers.sort((a, b) => a.name.localeCompare(b.name))
        }
        return offers;
      }),
      catchError((error: any, caught: Observable<Offer[]>) => {
        console.error('Error fetching offers:', error);
        return throwError(() => new Error('An error occurred'));
      })
    );
  }
}
