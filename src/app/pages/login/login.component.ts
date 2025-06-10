
import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',  
  standalone: true,
  imports: [FormsModule],
  template: '<h2>Iniciar sesión</h2> <form (submit)="onLogin()"> <input [(ngModel)]="email" name="email" placeholder="Correo" required /> <input [(ngModel)]="password" name="password" type="password" placeholder="Contraseña" required /> <button type="submit">Iniciar Sesión</button> </form> <a routerLink="/register">¿No tienes cuenta? Regístrate</a>'
})

export class LoginComponent {
email = '';
password = '';

constructor(private authService: AuthService, private router: Router) {}

onLogin() {
this.authService.login(this.email, this.password)
.then(() => {
console.log('¡Sesión iniciada!');
this.router.navigateByUrl('/dashboard');
})
.catch(err => alert('Error al iniciar sesión: ' + err.message));
}
}




  /*
  template: `
    <form (submit)="onLogin()">
      <input [(ngModel)]="email" name="email" placeholder="Correo" required />
      <input
        [(ngModel)]="password"
        name="password"
        type="password"
        placeholder="Contraseña"
        required
      />
      <button type="submit">Iniciar Sesión</button>
    </form>
  `,
})
export class LoginComponent {
  email = '';
  password = '';

  constructor(private authService: AuthService) {}

  onLogin() {
    this.authService
      .login(this.email, this.password)
      .then(() => console.log('¡Sesión iniciada!'))
      .catch((err) => alert(err.message));
  }
}*/
