import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Post {
  id: number;
  title: string;
  body: string;
}

@Component({
  selector: 'app-signal-http',
  imports: [CommonModule],
  templateUrl: './d-signal-http.component.html',
})
export class SignalHttpComponent {
  posts = signal<Post[]>([]);
  loading = signal(true);
  error = signal<string | null>(null);

  constructor() {
    this.fetchPosts();
  }

  async fetchPosts() {
    try {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/posts'
      );
      const data = await response.json();
      this.posts.set(data.slice(0, 5));
      this.loading.set(false);
    } catch (err) {
      this.error.set('Failed to fetch posts');
      this.loading.set(false);
    }
  }
}
