import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
	FormBuilder,
	FormControl,
	FormGroup,
	Validators,
} from '@angular/forms';
import { Comment } from '../../models/comment.model';
import { CommentsService } from '../comments.service';

@Component({
	selector: 'app-comment-form',
	templateUrl: './comment-form.component.html',
	styleUrls: ['./comment-form.component.css'],
})
export class CommentFormComponent implements OnInit {
	@Input() post_id: number | any;
	user = sessionStorage.getItem('username');
	comment: Comment | any;
	form: FormGroup | any;
	@Output() newCommentEvent = new EventEmitter<Comment>();

	constructor(
		private fb: FormBuilder,
		private commentsService: CommentsService
	) {}

	ngOnInit(): void {
		this.form = this.fb.group({
			body: new FormControl('', Validators.required),
		});
	}

	get body() {
		return this.form.get('body').value;
	}

	reset() {
		this.form.reset();
	}

	onSubmit() {
		if (this.body && this.user && this.post_id) {
			this.comment = new Comment();
			this.comment.owner = this.user;
			this.comment.post_id = this.post_id;
			this.comment.body = this.body;
			this.commentsService.save(this.comment).subscribe((results) => {
				this.newCommentEvent.emit(this.comment);
			});
			this.reset();
		}
	}
}
