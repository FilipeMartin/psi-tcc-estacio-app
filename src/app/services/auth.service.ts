import { Injectable, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { User } from '../interfaces/user';

const storageKey = "loggedUser";

@Injectable({
    providedIn: 'root'
})
export class AuthService {

  private loginUser: User;
  public actionLogin: EventEmitter<User> = new EventEmitter<User>();

  constructor(private http: HttpClient, protected router: Router) {
    try {
      const loggedUser = localStorage.getItem(storageKey);

      if(loggedUser) {
        this.loginUser = JSON.parse(loggedUser);
      }
    } catch (e) {
      console.error(e.message);
    }
  }

  get isLoggedIn() {
    return this.loginUser != null;
  }

  getUser() {
    return (this.loginUser) || null;
  }

  login(login: string, password: string) {
    let success = false;

    if(login == "filipe" && password == "123") {
      const user: User = {
        id: 1,
        name: "Filipe Martin Gomes de Loiola",
        email: "filipe_loiola@hotmail.com",
        phone: "(21) 99639-6999",
        age: "27",
        avatar: "assets/avatar.png"
      }

      this.loginUser = user;
      localStorage.setItem(storageKey, JSON.stringify(user));
      this.actionLogin.emit(user);
      success = true;
    }

    // await this.http.post<any>(`login`, {login, password}).toPromise()
    //   .then((user: User) => {
    //     this.loginUser = user;
    //     localStorage.setItem(storageKey, JSON.stringify(user));
    //     this.actionLogin.emit(user);
    //     success = true;
    //   });

    return success;
  }

  async logout() {
    this.loginUser = null;
    localStorage.removeItem(storageKey);
    sessionStorage.removeItem(storageKey);
    return this.router.navigate(['/login']);
  }

}
