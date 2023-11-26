//This page contains all the offers

import { Component } from '@angular/core';
import { DataSharingService } from '../../services/data-sharing.service';
import { ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-one',
  //This is where all offers should be displayed. This should contain an object of the type
  //<app-md-buttons> (or however they are renamed) that has the class 'unusable'.
  templateUrl:'page-one.component.html' ,
  styleUrls: ['./page-one.component.css']
})
export class PageOneComponent implements OnInit{
  constructor(
    private dataSharingService: DataSharingService,
    private el: ElementRef
  ) {}
  
  ngOnInit(): void {
    //Takes all adverts (elements with the class 'offerContainer in this case') that have
    //the username 'username1'. The username is found in an element that has the class 'advert-seller-username'
    
    //A service that gets the current users' username should be implemented and used instead of 'username1'
    //Also, there could be issues if there are white spaces around the username
    const elementsWithClass = this.filterElementsByUsername('username1', 'offerContainer', 'advert-seller-username');
    //gets the HTML for the <app-md-buttons> element
    const buttons = this.el.nativeElement.querySelector('.unusable').outerHTML;
    //has the effect of changing the class of <app-md-buttons>. If this isn't done it will lead to issues
    const modifiedButtons = buttons.replace('unusable', 'usable');
    //makes the HTML of the elements into a string
    const filteredHtmlContent = Array.from(elementsWithClass)
    //concatenateStrings has the effect of putting the necessary HTML code in each element so that
    //they will have buttons.
      .map((element: HTMLElement) => this.concatenateStrings(element.outerHTML,modifiedButtons))
      .join('');
    this.dataSharingService.setHtmlContent(filteredHtmlContent);
  }

  concatenateStrings(originalString: string, appendString: string): string {
    if (originalString.length < 4) {
      // Handle cases where the original string is too short
      return originalString + appendString;
    }
  
    const prefix = originalString.slice(0, -6); // Get the first (length - 6) characters
    const suffix = originalString.slice(-6);    // Get the last 6 characters
  
    return prefix + appendString + suffix;
  }

  filterElementsByUsername(username: string, containerClass: string, usernameClass: string): HTMLCollectionOf<HTMLElement> {
    const elementsWithClass = this.el.nativeElement.querySelectorAll('.' + containerClass);
    // Convert NodeList to Array and explicitly type it
    const elementsArray: HTMLElement[] = Array.from(elementsWithClass);
    // Filter elements based on the username inside the <p> element
    const filteredElementsArray = elementsArray.filter((element: HTMLElement) => {
      const usernameElement = element.querySelector('.' + usernameClass);
  
      // Check if the username element exists and its text content is 'username1'
      return usernameElement && usernameElement.textContent === username;
    });
    
    // Create a document fragment to hold the elements
    const fragment = document.createDocumentFragment();
  
    // Add filtered elements to the fragment
    filteredElementsArray.forEach((element) => {
      fragment.appendChild(element.cloneNode(true));
    });
    
    // Convert the fragment to HTMLCollection
    const filteredElementsCollection = fragment.children as HTMLCollectionOf<HTMLElement>;
    
    return filteredElementsCollection;
  }

}