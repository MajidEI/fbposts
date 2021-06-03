import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Comment } from '../models/comment.model';

@Injectable({
	providedIn: 'root',
})
export class CommentsService {
	private apiUrl = 'http://localhost:3000/comments';
	constructor(private http: HttpClient) {}

	public getPostComments(post_id: any): Observable<Comment[]> {
		return this.http.get<Comment[]>(this.apiUrl + '?post_id=' + post_id);
	}

	public save(comment: Comment) {
		return this.http.post<Comment>(this.apiUrl, comment);
	}
}
