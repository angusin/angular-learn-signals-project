import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicPageComponent } from '../../components/basic-page/basic-page.component';

interface Post {
  id: number;
  title: string;
  completed: boolean;
}

@Component({
  selector: 'app-signal-http',
  imports: [CommonModule, BasicPageComponent],
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
        'https://jsonplaceholder.typicode.com/users/1/todos'
      );
      const data = await response.json();
      this.posts.set(data.slice(0, 10));
      this.loading.set(false);
    } catch (err) {
      this.error.set('Failed to fetch posts');
      this.loading.set(false);
    }
  }
}
