import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import { FooterComponent } from '../../shared/footer/footer.component';

@Component({
standalone: true,
selector: 'app-auth-layout',
imports: [RouterOutlet, NavbarComponent, FooterComponent],
template: '<app-navbar /> <main> <router-outlet /> </main> <app-footer />'
})
export class AuthLayoutComponent {}