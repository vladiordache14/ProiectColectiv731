export class Photo {
  id: number;
  photoUrl: string;

  constructor(id: number, url: string) {
    this.id = id;
    this.photoUrl = url;
  }
}
