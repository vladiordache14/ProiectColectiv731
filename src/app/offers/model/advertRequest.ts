export class AdvertRequest {
  name: string;
  description: string;
  price: number;
  photos: File[];

  constructor(name: string, description: string, price: number, photos: File[]) {
    this.name = name;
    this.description = description;
    this.price = price;
    this.photos = photos;
  }
}
