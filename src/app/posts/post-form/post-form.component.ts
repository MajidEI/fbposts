import { Component, OnInit } from '@angular/core';
import {
	AbstractControl,
	FormBuilder,
	FormControl,
	FormGroup,
	ValidatorFn,
	Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { Post } from 'src/app/models/post.model';
import { User } from 'src/app/models/user.model';
import { PostsService } from '../posts.service';

@Component({
	selector: 'app-post-form',
	templateUrl: './post-form.component.html',
	styleUrls: ['./post-form.component.css'],
})
export class PostFormComponent implements OnInit {
	form: FormGroup | any;
	user: User | any;
	post: Post | any;

	constructor(
		private router: Router,
		private fb: FormBuilder,
		private postsService: PostsService
	) {
		this.user = new User();
		this.user.id = sessionStorage.getItem('id');
		this.user.username = sessionStorage.getItem('username');
	}

	urlValidator: ValidatorFn = (control: AbstractControl) => {
		let validUrl = true;

		try {
			new URL(control.value);
		} catch {
			validUrl = false;
		}

		return validUrl ? null : { invalidUrl: true };
	};

	ngOnInit(): void {
		this.form = this.fb.group({
			title: new FormControl('', Validators.required),
			body: new FormControl('', Validators.required),
			image: new FormControl('', [
				Validators.required,
				this.urlValidator,
			]),
		});
		this.post = new Post();
		this.post.owner = this.user.username;
	}

	get title() {
		return this.form.get('title').value;
	}
	get body() {
		return this.form.get('body').value;
	}
	get image() {
		return this.form.get('image').value;
	}

	onSubmit() {
		if (this.title && this.body && this.user && this.image) {
			this.post.title = this.title;
			this.post.body = this.body;
			this.post.image = this.image;
			console.log(this.post);
			this.postsService.save(this.post).subscribe((result) => {
				console.log(result);
				this.goToPosts();
			});
		}
	}
	goToPosts() {
		this.router.navigate(['/posts/all']);
	}
}
