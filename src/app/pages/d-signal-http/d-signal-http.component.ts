import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicPageComponent } from '../../components/basic-page/basic-page.component';
import { HttpClient } from '@angular/common/http';
import { catchError, map, of } from 'rxjs';

interface Post {
  id: number;
  title: string;
  completed: boolean;
}

@Component({
  selector: 'app-signal-http',
  imports: [CommonModule, BasicPageComponent],
  templateUrl: './d-signal-http.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignalHttpComponent {
  readonly loading = signal(true);
  readonly error = signal<string | null>(null);
  readonly posts = signal<Post[]>([]);

  constructor(private http: HttpClient) {
    this.fetchPosts();
  }

  private fetchPosts() {
    this.http
      .get<Post[]>('https://jsonplaceholder.typicode.com/users/1/todos')
      .pipe(
        map((data) => data.slice(0, 10)),
        catchError((err) => {
          this.error.set('Failed to fetch posts: ' + err);
          return of([]);
        }),
      )
      .subscribe((data) => {
        this.posts.set(data);
        this.loading.set(false);
      });
  }

  /*
  readonly posts$ = this.http.get<Post[]>('https://jsonplaceholder.typicode.com/users/1/todos').pipe(
    map((data) => data.slice(0, 10)),
    catchError((err) => {
      this.error.set('Failed to fetch posts: ' + err);
      return of([]);
    }),
  ); */
}
