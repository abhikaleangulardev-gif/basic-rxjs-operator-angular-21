import { Component, signal } from '@angular/core';
import { Sidenavbar } from "./component/sidenavbar/sidenavbar";

@Component({
  selector: 'app-root',
  imports: [ Sidenavbar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('basic-Rxjs-Operator');
}
