import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { Observable } from 'rxjs';
import { Post } from '../models/post.model';

@Injectable({
	providedIn: 'root',
})
export class AuthService {
	constructor(private http: HttpClient) {}

	isUserLoggedIn() {
		return !(sessionStorage.getItem('username') === null);
	}

	login(username: string, password: string) {
		return this.http
			.get<User>(
				'http://localhost:3000/users?username=' +
					username +
					'&password=' +
					password
			)
			.pipe(
				map((userData: any) => {
					let user = new User();
					user.id = userData[0].id;
					user.username = userData[0].username;
					user.password = userData[0].password;

					console.log(user);
					sessionStorage.setItem('username', user.username);
					sessionStorage.setItem('id', user.id);

					return user;
				})
			);
	}
	register(username: string, password: string) {
		let user = new User();
		user.username = username;
		user.password = password;
		return this.http.post<User>('http://localhost:3000/users', user).pipe(
			map((userData: any) => {
				console.log(userData);
				return user;
			})
		);
	}
	getUser(id: any): Observable<User[]> {
		console.log('http://localhost:3000/users?id=' + id);
		return this.http.get<User[]>('http://localhost:3000/users?id=' + id);
	}
}
