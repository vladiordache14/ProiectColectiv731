import {Photo} from "./photo";
import {User} from "./user";

export class Advert {
  advertId: number;
  name: string;
  description: string;
  price: number;
  photos: File[];
  seller: User;
  isPromoted: boolean;
  isBlocked: boolean;
  isActive: boolean;
  selectedIndex: number;

  constructor(advertId: number, name: string, description: string, price: number, photos: File[], seller: User, isPromoted: boolean,
              isBlocked: boolean, isActive: boolean) {
    this.advertId = advertId;
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
