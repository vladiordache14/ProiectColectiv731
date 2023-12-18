import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

interface MyDictionary {
    [key: string]: string;
  }

@Injectable({
    providedIn: 'root'
})
export class UserDataService {

    constructor() {}

    private currentUserData = new BehaviorSubject<MyDictionary>({});
    public currentUserData$ = this.currentUserData.asObservable();
  
    setCurrentUserInformation(userData: MyDictionary): void {
      this.currentUserData.next(userData);
    }


}