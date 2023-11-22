import {Photo} from "./photo";
import {User} from "./user";

export class Offer {
  id: number;
  name: string;
  description: string;
  price: number;
  photos: Photo[];
  seller: User;
  isPromoted: boolean;
  isBlocked: boolean;
  isActive: boolean;
  selectedIndex: number;

  constructor(id: number, name: string, description: string, price: number, photos: Photo[], seller: User, isPromoted: boolean,
              isBlocked: boolean, isActive: boolean) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.price = price;
    this.photos = photos;
    this.seller = seller;
    this.isPromoted = isPromoted;
    this.isBlocked = isBlocked;
    this.isActive = isActive;
    this.selectedIndex = 0;
  }
}
