import { Component, OnInit } from '@angular/core';
import {
	FormBuilder,
	FormControl,
	FormGroup,
	Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { AuthService } from '../auth.service';

@Component({
	selector: 'app-register',
	templateUrl: './register.component.html',
	styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
	form: FormGroup | any;

	constructor(
		private router: Router,
		private fb: FormBuilder,
		private authService: AuthService
	) {}

	ngOnInit(): void {
		this.form = this.fb.group({
			username: new FormControl('', Validators.required),
			password: new FormControl('', Validators.required),
		});
	}

	get username() {
		return this.form.get('username');
	}
	get password() {
		return this.form.get('password');
	}

	onSubmit() {
		if (this.username && this.password) {
			this.authService
				.register(this.username.value, this.password.value)
				.subscribe(
					(data: User) => {
						this.router.navigate(['/home']);
					},
					(error) => {
						console.warn('NOOOOOOT Logged In');
					}
				);
		}
	}
}
