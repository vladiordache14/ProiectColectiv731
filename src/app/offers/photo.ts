export class Photo {
  imageId: number;
  photoUrl: string;

  constructor(imageId: number, url: string) {
    this.imageId = imageId;
    this.photoUrl = url;
  }
}
