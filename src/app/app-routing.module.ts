import { PostItemComponent } from './posts/post-item/post-item.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { PostListComponent } from './posts/post-list/post-list.component';
import { LoginActivateGuard } from './guards/login-activate.guard';
import { PostFormComponent } from './posts/post-form/post-form.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { NavbarComponent } from './navbar/navbar/navbar.component';

const routes: Routes = [
	{
		path: '',
		redirectTo: 'posts/all',
		pathMatch: 'full',
	},

	{
		path: 'login',
		component: LoginComponent,
	},
	{
		path: 'register',
		component: RegisterComponent,
	},
	{
		path: 'posts/all',
		component: PostListComponent,
		canActivate: [LoginActivateGuard],
	},
	{
		path: 'posts/new',
		component: PostFormComponent,
		canActivate: [LoginActivateGuard],
	},
	{
		path: 'posts/:id',
		component: PostItemComponent,
		canActivate: [LoginActivateGuard],
	},
	{
		path: '404',
		component: NotFoundComponent,
	},
	{ path: 'test', loadChildren: () => import('./test/test.module').then(m => m.TestModule) },
];
@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
