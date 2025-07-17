import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { User } from './user/user';
import { Admin } from './admin/admin';

@Component({
  selector: 'app-root',
  imports: [Admin, User],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('my-tutorial-app');
}
