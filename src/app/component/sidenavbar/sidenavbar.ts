import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-sidenavbar',
  imports: [RouterOutlet,RouterLink],
  templateUrl: './sidenavbar.html',
  styleUrl: './sidenavbar.css',
})
export class Sidenavbar {
 isSidebarOpen = true;

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
}
