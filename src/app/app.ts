import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomePage } from './home-page/home-page';
import { FooterPage } from './footer-page/footer-page';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HomePage, FooterPage],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('level-up');
}
