import {Advert} from "./advert";

export class User {
  id: number;
  username: string;
  password: string;
  email: string;
  role: string;
  address: string;
  phoneNumber: string;
  lockedUntil: Date;
  numberOfTries: number;
  adverts: Advert[];

  constructor(id: number, username: string, password: string, email: string, role: string, address: string,
              phoneNumber: string, lockedUntil: Date, numberOfTries: number, adverts: Advert[]) {
    this.id = id;
    this.username = username;
    this.password = password;
    this.email = email;
    this.role = role;
    this.address = role;
    this.phoneNumber = phoneNumber;
    this.numberOfTries = numberOfTries;
    this.lockedUntil = lockedUntil;
    this.adverts = adverts;
  }
}
