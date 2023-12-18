import {Photo} from "./photo";
import {User} from "./user";

export class Advert {
  advertId: number;
  name: string;
  description: string;
  price: number;
  photos: Photo[];
  seller: User;
  promoted: boolean;
  blocked: boolean;
  active: boolean;
  selectedIndex: number;

  constructor(advertId: number, name: string, description: string, price: number, photos: Photo[], seller: User, isPromoted: boolean,
              isBlocked: boolean, isActive: boolean) {
    this.advertId = advertId;
    this.name = name;
    this.description = description;
    this.price = price;
    this.photos = photos;
    this.seller = seller;
    this.promoted = isPromoted;
    this.blocked = isBlocked;
    this.active = isActive;
    this.selectedIndex = 0;
  }
}
