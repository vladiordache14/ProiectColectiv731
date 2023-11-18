import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, map, Observable} from "rxjs";
import {Offer} from "../offer";

@Injectable({
  providedIn: 'root'
})
export class OffersService {
  constructor(private http: HttpClient) { }

  // not working yet:
  getAllOffers(): Observable<Offer[]> {
    return this.http.get<Offer[]>("http://localhost:8080/offers/all").pipe(
      map(offers => offers.sort((a, b) => a.name.localeCompare(b.name))),
      catchError(error => {
        console.error('Error fetching offers:', error);
        throw error;
      })
    );
  }
}
