import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-sidenavbar',
  imports: [RouterOutlet],
  templateUrl: './sidenavbar.html',
  styleUrl: './sidenavbar.css',
})
export class Sidenavbar {
 isSidebarOpen = true;

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
}
