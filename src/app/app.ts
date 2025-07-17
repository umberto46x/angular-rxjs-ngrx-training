import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Navbar } from './layout/navbar/navbar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar],
  outputs: ['userContacted'],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}
