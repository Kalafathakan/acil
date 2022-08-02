import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs/operators';
export interface IAuth {
  token: string;
}

export interface ITodo {
  _id: string;
  user: string;
  title: string;
  description: string;
  status: boolean;
}
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _isLoggedIn$ = new BehaviorSubject<boolean>(false);
  isLoggedIn$ = this._isLoggedIn$.asObservable();

  private url: string = 'https://shielded-depths-40144.herokuapp.com/login';
  constructor(private http: HttpClient) {
    const mytoken = localStorage.getItem('authtoken');
    this._isLoggedIn$.next(!!mytoken);
  }

  login(email: string, password: string): Observable<IAuth> {
    return this.http
      .post<IAuth>(this.url, {
        email: email,
        password: password,
      })
      .pipe(
        tap((response: any) => {
          this._isLoggedIn$.next(true);
          localStorage.setItem('authToken', response.token);
        })
      );
  }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'x-auth-token': localStorage.getItem('authtoken')!,
    }),
  };
  getTodos() {
    return this.http.get<ITodo>(
      'https://shielded-depths-40144.herokuapp.com/reviews',
      this.httpOptions
    );
  }
}
