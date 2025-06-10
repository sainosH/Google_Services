import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: [],
  imports: [FormsModule, RouterModule, CommonModule],
})
export class LoginComponent {
  email = '';
  password = '';

  constructor(private authService: AuthService, private router: Router) {}

  onLogin() {
    this.authService
      .login(this.email, this.password)
      .then(() => this.router.navigateByUrl('/dashboard'))
      .catch((err) => alert('Error al iniciar sesión: ' + err.message));
  }
}
