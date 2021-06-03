import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-comment-item',
	templateUrl: './comment-item.component.html',
	styleUrls: ['./comment-item.component.css'],
})
export class CommentItemComponent implements OnInit {
	@Input() body: string | any;
	@Input() owner: string | any;

	constructor() {}

	ngOnInit(): void {}
}
