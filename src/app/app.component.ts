import { HttpClientModule } from '@angular/common/http';
import { Component, effect, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule],
  template: `<router-outlet></router-outlet>`,
})
export class AppComponent {}


