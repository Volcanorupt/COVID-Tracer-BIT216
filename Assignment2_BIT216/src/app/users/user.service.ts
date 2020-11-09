import { User } from './user.model';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({ providedIn: 'root' })

export class UserService {

    private users: User[] = [];
    private usersUpdated = new Subject<User[]>();

    constructor(private http: HttpClient) { }

    addUser(name: string, username: string, password: string) {
        const user: User = { id: null, name: name, username: username, password: password };
        this.http
            .post<{ message: string, userId: string }>('http://localhost:3000/api/user', user)
            .subscribe((responseData) => {
                const id = responseData.userId;
                user.id = id;
                this.users.push(user);
                this.usersUpdated.next([...this.users]);
            });
    }

    getUser() {
        this.http.get<any>('http://localhost:3000/api/user')
            .pipe(map((postData) => {
                return postData.users.map((user: { name: any; username: any; password: any; _id: any; }) => {
                    return {
                        name: user.name,
                        username: user.username,
                        password: user.password,
                        id: user._id
                    };
                });
            }))

            .subscribe((transformedUsers) => {
                this.users = transformedUsers;
                this.usersUpdated.next([...this.users]);
            })
    }

    getUsersUpdateListener() {
        return this.usersUpdated.asObservable();
    }

}