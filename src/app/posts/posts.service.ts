import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../models/post.model';

@Injectable({
	providedIn: 'root',
})
export class PostsService {
	private apiUrl = 'http://localhost:3000/posts';
	constructor(private http: HttpClient) {}

	public getAllPosts(): Observable<Post[]> {
		return this.http.get<Post[]>(this.apiUrl);
	}

	public getPost(id: string): Observable<Post[]> {
		return this.http.get<Post[]>(this.apiUrl + '?id=' + id);
	}

	public save(post: Post) {
		return this.http.post<Post>(this.apiUrl, post);
	}

	public delete(id: number): Observable<any> {
		return this.http.delete(`${this.apiUrl}/${id}`);
	}

	public update(id: string, post: Post): Observable<any> {
		return this.http.put(this.apiUrl + '/' + id, post);
	}
}
