import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.component.html',
})
export class RegisterComponent {
  email = '';
  password = '';
  confirmPassword = '';

  constructor(private authService: AuthService, private router: Router) {}

  onRegister() {
    if (this.password !== this.confirmPassword) {
      alert('Las contraseñas no coinciden');
      return;
    }

    this.authService
      .register(this.email, this.password)
      .then(() => {
        this.authService.logout(); // 🔴 Cerramos la sesión después del registro
        alert('Cuenta creada con éxito. Ahora inicia sesión.');
        this.router.navigateByUrl('/login');
      })
      .catch((err) => alert('Error al registrar: ' + err.message));
  }
}
