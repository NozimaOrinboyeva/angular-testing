import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Parent } from './parent/parent';
import { Login } from './login/login';

@Component({
  selector: 'app-root',
  imports: [Parent, Login],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  title = 'angular-testing';
}
