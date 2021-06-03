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
import { CheckService } from '../../service/check.service';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
	form: FormGroup | any;
	loginInvalid: boolean = false;
	statuscheck: boolean = true;
	constructor(
		private router: Router,
		private fb: FormBuilder,
		private authService: AuthService,
		private data: CheckService
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
				.login(this.username.value, this.password.value)
				.subscribe(
					(data: User) => {
						this.loginInvalid = false;
						this.router.navigate(['/posts/all']);
						this.statuscheck = true;
						this.data.getstatus(this.statuscheck);
					},
					(error) => {
						this.loginInvalid = true;
						console.warn('NOOOOOOT Logged In');
						this.statuscheck = false;
						this.data.getstatus(this.statuscheck);
					}
				);
		}
	}
}
