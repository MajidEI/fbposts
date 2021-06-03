import { PostsModule } from './posts/posts.module';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { CommentsModule } from './comments/comments.module';
import { NavbarComponent } from './navbar/navbar/navbar.component';

@NgModule({
	declarations: [AppComponent, NotFoundComponent, NavbarComponent],
	imports: [
		BrowserModule,
		AppRoutingModule,
		ReactiveFormsModule,
		FormsModule,
		HttpClientModule,
		AuthModule,
		PostsModule,
		CommentsModule,
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
