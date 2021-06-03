import { Component, Input, OnInit } from '@angular/core';
import { CommentsService } from '../comments.service';
import { Comment } from '../../models/comment.model';

@Component({
	selector: 'app-comment-list',
	templateUrl: './comment-list.component.html',
	styleUrls: ['./comment-list.component.css'],
})
export class CommentListComponent implements OnInit {
	@Input() post_Id: number | any;
	comments: Comment[] = [];
	constructor(private commentsService: CommentsService) {}

	ngOnInit(): void {
		this.commentsService
			.getPostComments(this.post_Id)
			.subscribe((results) => {
				this.comments = results;
			});
	}

	addNewComment(newComment: Comment) {
		this.comments.push(newComment);
	}
}
