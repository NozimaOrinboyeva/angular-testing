import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UserService {
  protected users = [ 'Nozima '];
  getUsers(){
    return of(this.users);
  }

  addUser(user: string){
    this.users.push(user);
  }
}
