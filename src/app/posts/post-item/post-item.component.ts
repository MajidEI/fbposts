import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from 'src/app/models/post.model';
import { PostsService } from '../posts.service';

@Component({
	selector: 'app-post-item',
	templateUrl: './post-item.component.html',
	styleUrls: ['./post-item.component.css'],
})
export class PostItemComponent implements OnInit {
	@Input() post: Post | any;
	id: number | any;
	currentUser = sessionStorage.getItem('username') || '';

	constructor(
		private route: ActivatedRoute,
		private router: Router,
		private postsService: PostsService
	) {}

	get owner() {
		return this.post.owner;
	}
	get body() {
		return this.post.body;
	}
	get image() {
		return this.post.image;
	}

	ngOnInit(): void {
		this.id = this.route.snapshot.params['id'];
		if (this.id) {
			this.postsService.getPost(this.id).subscribe(
				(data) => {
					this.post = data[0];
					console.log(this.post);
					if (!this.post) {
						this.router.navigate(['/404']);
					}
				},
				(error) => console.log(error)
			);
		}
	}
}
