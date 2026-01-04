import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
 menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  openPlaylist(category: string) {
    // Dictionary of all 8 links
    const links: { [key: string]: string } = {
      'shorts': 'https://www.youtube.com/watch?v=JNjkrPpeW7Q&list=PLQhU-CdBeWjpAvcLwEH6AWlmXWU8-QEwq',
      'fitness': 'https://www.youtube.com/watch?v=iUchqSKX6u4&list=PLQhU-CdBeWjqC7SNe9A_F4X9PUd8kzvIl',
      'podcast': 'https://www.youtube.com/watch?v=BAR05EpTFQ8&list=PLQhU-CdBeWjrcL5MDS7CMS89I49QJkKg6',
      'travelling': 'https://www.youtube.com/watch?v=NZdTadEfZck&list=PLQhU-CdBeWjqysahyTTz4JzRhLirVQVTL',
       'realestate': 'https://www.youtube.com/...your_realestate_playlist',
      'talkinghead': 'https://www.youtube.com/watch?v=gC19MqJSaFg&list=PLQhU-CdBeWjqXj7aS3naf4Ksl3evxH8G1',
      'ugc': 'https://www.youtube.com/watch?v=iCAyAIMAaeQ&list=PLQhU-CdBeWjphrunKkUlJfZMAvTKLF6nQ',
      'vloging': 'https://www.youtube.com/watch?v=RffMtROZP-w&list=PLQhU-CdBeWjojNniZhqbi8X7TsoN5aE-e',
    };

    const url = links[category];

    if (url) {
      // '_blank' opens the link in a new tab
      window.open(url, '_blank');
    }
  }
}
