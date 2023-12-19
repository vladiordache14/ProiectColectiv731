import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, map, Observable, Subject, throwError} from "rxjs";
import {Advert} from "../advert";

@Injectable({
  providedIn: 'root'
})
export class AdvertService {
  private apiUrl = 'http://localhost:8080';
  constructor(private http: HttpClient, ) { }

  private advertToBeEdited: Subject<Advert> = new Subject<Advert>();

  advertToBeEdited$ = this.advertToBeEdited.asObservable()

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
    const url = `${this.apiUrl}/adverts/${advertId}`;
    return this.http.delete<void>(url, {});
    //pt edit avem put
  }

  //show current advert
  getAdvertById(advertId: number): Observable<Advert> {
    const url = `${this.apiUrl}/adverts/${advertId}`; // sa mi facxa marc
    return this.http.get<Advert>(url);
  }


  updateAdvert(updatedAdvert: Advert): Observable<Advert> {
    const url = `${this.apiUrl}/adverts/existing/${Advert}`; // sa schimbe marc sa am tot id poate :))
    return this.http.put<Advert>(url, updatedAdvert);
  }

  setAdvertBeingEdited(advert: Advert) {
    this.advertToBeEdited.next(advert);
  }
}
