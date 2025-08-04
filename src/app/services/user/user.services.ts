import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServices {
  private http = inject(HttpClient);

  getUsers(): Observable<string[]> {
    return this.http.get<string[]>('/api/users');
  }

  addUser(user: string): Observable<string> {
    return this.http.post<string>('/api/users', { name: user });
  }
}
