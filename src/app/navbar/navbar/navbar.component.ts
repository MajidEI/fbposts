import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CheckService } from '../../service/check.service';

@Component({
	selector: 'app-navbar',
	templateUrl: './navbar.component.html',
	styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
	user = sessionStorage.getItem('username');
	isLoggedIn: any;
	constructor(private router: Router,private data: CheckService) {}

	ngOnInit(): void {
		console.warn(this.user);
		this.data.src$.subscribe(
			message => this.isLoggedIn = message
		)
	}
	logout() {
		sessionStorage.clear();
		this.login();
		this.isLoggedIn = false;
	}

	login() {
		this.router.navigate(['/login']);
	}

	register() {
		this.router.navigate(['/register']);
	}
}
