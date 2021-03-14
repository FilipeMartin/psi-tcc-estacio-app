import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
    providedIn: 'root'
})
export class ApiService {

    constructor(
        private http: HttpClient
    ) { }

    // sendUser(user: User): Promise<User> {
    //     return this.http.post<User>('registro', user).toPromise();
    // }

}
