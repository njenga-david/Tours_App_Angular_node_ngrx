import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone:true,
  imports:[CommonModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  error: string;
  message: string;

  constructor(
    private authService: AuthenticationService,
    private router: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      email: [null, Validators.required],
      password: [null, Validators.required]
    });
  }

  onSubmit(): void {
    if (this.form.valid) {
      this.authService.loginUser(this.form.value).subscribe(
        (res: any) => {
          localStorage.setItem('token', res.token);
          this.message = res.message;
          const decodedToken = this.authService.decodeToken(res.token);
          const isAdmin = decodedToken.isAdmin;

          if (res.token) {
            if (isAdmin) {
              this.router.navigate(['/admin']); // Redirect to admin page if isAdmin
              alert('Admin login successful!');
            } else {
              this.router.navigate(['/home']); // Redirect to home page for regular users
              alert('Login successful!');
            }
          }
        },
        (err: any) => {
          console.error(err);
          this.error = err.error.message || 'Login failed. Please try again.';
          alert('Login failed: ' + this.error);
        }
      );
    } else {
      alert('Please fill out the form.');
    }
  }
}
