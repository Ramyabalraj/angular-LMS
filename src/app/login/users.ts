export class Users{
 
  userEmail: string; 
  userId: number;
  userName: string;
  userPassword: string;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}