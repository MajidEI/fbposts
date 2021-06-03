import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
	declarations: [LoginComponent, RegisterComponent],
	imports: [CommonModule, FormsModule, ReactiveFormsModule, HttpClientModule],
})
export class AuthModule {}
