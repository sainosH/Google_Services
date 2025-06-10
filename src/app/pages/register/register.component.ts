import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  template: `<div>
    <h2>Crear cuenta</h2>
    <form (ngSubmit)="onRegister()">
      <input [(ngModel)]="email" name="email" placeholder="Correo" required />
      <input
        [(ngModel)]="password"
        name="password"
        type="password"
        placeholder="Contraseña"
        required
      />
      <button type="submit">Registrarse</button>
    </form> 
  </div>`,
})
export class RegisterComponent {
  email = '';
  password = '';

  constructor(private authService: AuthService, private router: Router) {}

  onRegister() {
    this.authService
      .register(this.email, this.password)
      .then(() => {
        console.log('¡Registro exitoso!');
        this.router.navigateByUrl('/dashboard');
      })
      .catch((err) => alert('Error al registrar: ' + err.message));
  }
}