
export class User {


  id: number | undefined;
  username: string = '';
  password: string = '';
  email: string = '';
  role: string = '';
  address: string = '';
  phoneNumber: string = '';
  lockedUntil: Date | undefined;
  numberOfTries: number | undefined;

  constructor(username: string, password: string, email: string, role: string, address: string, phoneNumber: string) {
    this.username = username;
    this.password = password;
    this.email = email;
    this.role = role;
    this.address = address;
    this.phoneNumber = phoneNumber;
  }

}
