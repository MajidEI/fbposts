import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentFormComponent } from './comment-form/comment-form.component';
import { CommentItemComponent } from './comment-item/comment-item.component';
import { CommentListComponent } from './comment-list/comment-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
	declarations: [
		CommentItemComponent,
		CommentListComponent,
		CommentFormComponent,
	],
	imports: [CommonModule, FormsModule, ReactiveFormsModule, HttpClientModule],
	exports: [CommentListComponent],
})
export class CommentsModule {}
